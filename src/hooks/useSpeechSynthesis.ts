'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const DEFAULT_RATE = 1

function findKoreanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return (
    voices.find(v => v.lang === 'ko-KR') ??
    voices.find(v => v.lang.toLowerCase().startsWith('ko')) ??
    null
  )
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
