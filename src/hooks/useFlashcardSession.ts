'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { SRSEntry, SRSRating } from '@/types'
import type { SRSConfig } from '@/lib/srs/sm2'
import { createNewEntry, calculateNextReview, isMature } from '@/lib/srs/sm2'
import {
  createSession,
  getCurrentCardId,
  recordRating,
  pauseSession,
  resumeSession,
  completeSession,
  getSessionProgress,
  getElapsedMs,
} from '@/lib/srs/session'
import type { SessionState, SessionStats } from '@/lib/srs/session'
import {
  getAllEntries,
  reviewCard,
  touchStreak,
  getLocalUser,
} from '@/lib/srs/store'

// ─── Hook return type ─────────────────────────────────────────────────────────

export type FlashcardSessionHook = {
  phase: SessionState['phase']
  currentCardId: string | null
  progress: { done: number; total: number; percent: number }
  isFlipped: boolean
  stats: SessionStats | null
  flip: () => void
  rate: (rating: SRSRating) => void
  pause: () => void
  resume: () => void
  restart: (cardIds: string[]) => void
  exit: () => void
  currentEntry: SRSEntry | null
  sessionDurationMs: number
  streakMultiplierActive: boolean
}

// ─── Haptic helpers ───────────────────────────────────────────────────────────

function hapticCorrect(): void {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate(50)
  }
}

function hapticWrong(): void {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate([80, 30, 80])
  }
}

// ─── Hook ────────────────────────────────────────────────────────────────────

/**
 * Manages a full flashcard review session: state machine, SRS writes, haptics, and live timer.
 */
export function useFlashcardSession(
  initialCardIds: string[],
  config?: SRSConfig,
): FlashcardSessionHook {
  const [session, setSession] = useState<SessionState>(() =>
    createSession(initialCardIds, config),
  )
  const [isFlipped, setIsFlipped] = useState(false)
  const [stats, setStats] = useState<SessionStats | null>(null)
  const [sessionDurationMs, setSessionDurationMs] = useState(0)

  // Track when each card was shown so we can record time-to-answer
  const cardShownAtRef = useRef<number>(Date.now())
  const streakDaysRef = useRef<number>(0)

  // ── On mount: touch streak, read streak days ───────────────────────────────
  useEffect(() => {
    const user = touchStreak()
    streakDaysRef.current = user.streakDays
  }, [])

  // ── Live duration timer (1-second tick) ───────────────────────────────────
  useEffect(() => {
    if (session.phase !== 'active') return

    const id = setInterval(() => {
      setSessionDurationMs(getElapsedMs(session))
    }, 1000)

    return () => clearInterval(id)
  }, [session])

  // ── Reset card-shown timestamp when the current card changes ──────────────
  useEffect(() => {
    cardShownAtRef.current = Date.now()
    setIsFlipped(false)
  }, [session.currentIndex])

  // ── Derived values ────────────────────────────────────────────────────────
  const currentCardId = getCurrentCardId(session)

  const currentEntry: SRSEntry | null = (() => {
    if (typeof window === 'undefined' || !currentCardId) return null
    const entries = getAllEntries()
    return entries[currentCardId] ?? createNewEntry('local', currentCardId)
  })()

  const progress = getSessionProgress(session)
  const streakMultiplierActive = streakDaysRef.current >= 7

  // ── Actions ───────────────────────────────────────────────────────────────

  const flip = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])

  const rate = useCallback(
    (rating: SRSRating) => {
      if (session.phase !== 'active' || !currentCardId) return

      const timeMs = Date.now() - cardShownAtRef.current

      // Read current entry to check wasNew / wasMature before updating
      const entriesBefore = getAllEntries()
      const entryBefore = entriesBefore[currentCardId] ?? createNewEntry('local', currentCardId)
      const wasNew = entryBefore.reviewCount === 0
      const wasMatureBefore = isMature(entryBefore)

      // Write to localStorage via store (handles XP + heatmap)
      reviewCard(currentCardId, rating)

      // Check if the card just became mature after this review
      const entriesAfter = getAllEntries()
      const entryAfter = entriesAfter[currentCardId]
      const isMaturedNow = entryAfter ? isMature(entryAfter) && !wasMatureBefore : false
      void isMaturedNow // future: could show a "card matured!" toast

      // Haptic feedback
      if (rating === 'again') {
        hapticWrong()
      } else if (rating === 'hard') {
        hapticWrong()
      } else {
        hapticCorrect()
      }

      // Advance session state machine
      setSession(prev => {
        const next = recordRating(prev, currentCardId, rating, timeMs, {
          wasNew,
          wasMature: wasMatureBefore,
        })

        if (next.phase === 'completed') {
          const user = getLocalUser()
          const { stats: finalStats } = completeSession(next, user.streakDays)
          setStats(finalStats)
          setSessionDurationMs(getElapsedMs(next))
        }

        return next
      })
    },
    [session.phase, currentCardId],
  )

  const pause = useCallback(() => {
    setSession(prev => pauseSession(prev))
  }, [])

  const resume = useCallback(() => {
    setSession(prev => resumeSession(prev))
  }, [])

  const restart = useCallback(
    (cardIds: string[]) => {
      const user = touchStreak()
      streakDaysRef.current = user.streakDays
      setStats(null)
      setIsFlipped(false)
      setSessionDurationMs(0)
      setSession(createSession(cardIds, config))
    },
    [config],
  )

  const exit = useCallback(() => {
    setSession(prev => {
      if (prev.phase === 'completed') return prev
      const user = getLocalUser()
      const { session: completed, stats: finalStats } = completeSession(prev, user.streakDays)
      setStats(finalStats)
      setSessionDurationMs(getElapsedMs(completed))
      return completed
    })
  }, [])

  return {
    phase: session.phase,
    currentCardId,
    progress,
    isFlipped,
    stats,
    flip,
    rate,
    pause,
    resume,
    restart,
    exit,
    currentEntry,
    sessionDurationMs,
    streakMultiplierActive,
  }
}
