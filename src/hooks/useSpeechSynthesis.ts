'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const DEFAULT_RATE = 1

// macOS/iOS ship a set of "novelty" character voices (Grandma, Grandpa, Eddy,
// Flo, Reed, Rocko, Sandy, Shelley) localized into every language, including
// Korean. They sort before the real per-language voice (e.g. "Yuna") in most
// browsers' voice list, so a naive "first Korean voice" pick reliably grabs
// a cartoonish novelty voice instead of a natural-sounding one.
const NOVELTY_VOICE_NAMES = ['grandma', 'grandpa', 'eddy', 'flo', 'reed', 'rocko', 'sandy', 'shelley']

function isNoveltyVoice(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase()
  return NOVELTY_VOICE_NAMES.some(n => name.startsWith(n))
}

function findKoreanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const korean = voices.filter(v => v.lang === 'ko-KR' || v.lang.toLowerCase().startsWith('ko'))
  if (korean.length === 0) return null

  // Prefer non-local (network/neural, e.g. Chrome's "Google 한국어") voices —
  // they're generally higher quality than any on-device voice.
  const networkVoice = korean.find(v => !v.localService)
  if (networkVoice) return networkVoice

  // Otherwise prefer a real per-language voice over a novelty one.
  const naturalVoice = korean.find(v => !isNoveltyVoice(v))
  if (naturalVoice) return naturalVoice

  // Last resort: even a novelty voice is better than no audio at all.
  return korean[0]
}

export interface UseSpeechSynthesisResult {
  isSupported: boolean
  hasKoreanVoice: boolean
  isSpeaking: boolean
  currentCharIndex: number | null
  rate: number
  setRate: (rate: number) => void
  speak: (text: string, onEnd?: () => void) => void
  stop: () => void
}

/**
 * Thin wrapper over the Web Speech API (window.speechSynthesis) — the only
 * audio source for the listening feature's pilot (no pre-recorded files, no
 * API key). Browser-only: every access is guarded behind mount/effect so
 * nothing runs during Next.js SSR/prerender, where `window` doesn't exist.
 */
export function useSpeechSynthesis(): UseSpeechSynthesisResult {
  const [isSupported, setIsSupported] = useState(false)
  const [hasKoreanVoice, setHasKoreanVoice] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentCharIndex, setCurrentCharIndex] = useState<number | null>(null)
  const [rate, setRate] = useState(DEFAULT_RATE)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    setIsSupported(true)

    function loadVoices() {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length === 0) return
      const ko = findKoreanVoice(voices)
      voiceRef.current = ko
      setHasKoreanVoice(ko !== null)
    }

    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
      window.speechSynthesis.cancel()
    }
  }, [])

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    // A fresh utterance every call (reusing one across speak()s is a known
    // source of Web Speech API flakiness in Chrome).
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    if (voiceRef.current) {
      utterance.voice = voiceRef.current
      utterance.lang = voiceRef.current.lang
    } else {
      utterance.lang = 'ko-KR'
    }
    utterance.rate = rate

    utterance.onstart = () => {
      setIsSpeaking(true)
      setCurrentCharIndex(0)
    }
    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      setCurrentCharIndex(event.charIndex)
    }
    utterance.onend = () => {
      setIsSpeaking(false)
      setCurrentCharIndex(null)
      onEnd?.()
    }
    utterance.onerror = () => {
      setIsSpeaking(false)
      setCurrentCharIndex(null)
    }

    window.speechSynthesis.speak(utterance)
  }, [rate])

  const stop = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setCurrentCharIndex(null)
  }, [])

  return { isSupported, hasKoreanVoice, isSpeaking, currentCharIndex, rate, setRate, speak, stop }
}
