'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type MicPermissionState = 'idle' | 'recording' | 'denied' | 'error'

export interface UseMicRecorderResult {
  isSupported: boolean
  permissionState: MicPermissionState
  audioUrl: string | null
  startRecording: () => void
  stopRecording: () => void
  reset: () => void
}

/**
 * Thin wrapper over getUserMedia + MediaRecorder — mirrors useSpeechSynthesis's
 * shape (the other half of the shadowing loop: one hook speaks, this one
 * records). Recordings never leave the browser — no upload, no persistence —
 * matching the "no audio files stored" precedent from the listening feature.
 */
export function useMicRecorder(): UseMicRecorderResult {
  const [isSupported, setIsSupported] = useState(false)
  const [permissionState, setPermissionState] = useState<MicPermissionState>('idle')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)
  const audioUrlRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsSupported('mediaDevices' in navigator && 'MediaRecorder' in window)
  }, [])

  const revokePrevious = useCallback(() => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
  }, [])

  const startRecording = useCallback(async () => {
    if (typeof window === 'undefined' || !('mediaDevices' in navigator) || !('MediaRecorder' in window)) return
    revokePrevious()
    setAudioUrl(null)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      chunksRef.current = []

      const recorder = new MediaRecorder(stream)
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        audioUrlRef.current = url
        setAudioUrl(url)
        streamRef.current?.getTracks().forEach(t => t.stop())
        streamRef.current = null
      }

      recorderRef.current = recorder
      recorder.start()
      setPermissionState('recording')
    } catch {
      // Covers both permission-denied and no-microphone-device cases —
      // the UI shows one clear fallback message either way.
      setPermissionState('denied')
    }
  }, [revokePrevious])

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop()
    }
    setPermissionState('idle')
  }, [])

  const reset = useCallback(() => {
    revokePrevious()
    setAudioUrl(null)
    setPermissionState('idle')
  }, [revokePrevious])

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach(t => t.stop())
      revokePrevious()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isSupported, permissionState, audioUrl, startRecording, stopRecording, reset }
}
