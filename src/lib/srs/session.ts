import type { SRSRating } from '@/types'
import type { SRSConfig } from './sm2'
import { DEFAULT_SRS_CONFIG } from './sm2'

// ─── Types ───────────────────────────────────────────────────────────────────

export type SessionCard = {
  cardId: string
  rating: SRSRating | null
  timeToAnswer: number
  wasNew: boolean
  wasMature: boolean
}

export type SessionStats = {
  totalCards: number
  correct: number
  again: number
  hard: number
  good: number
  easy: number
  xpEarned: number
  durationMs: number
  accuracy: number
  newCardsLearned: number
  matureReviewed: number
  averageTimeMs: number
}

export type SessionState = {
  phase: 'idle' | 'active' | 'paused' | 'completed'
  cardQueue: string[]
  currentIndex: number
  reviewedCards: SessionCard[]
  startedAt: number
  pausedAt: number | null
  pausedDurationMs: number
  config: SRSConfig
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** How many positions ahead to re-insert a lapsed card (3–5 cards later). */
function lapseReinsertOffset(): number {
  return 3 + Math.floor(Math.random() * 3) // 3, 4, or 5
}

/** Derive XP total from the reviewed cards list (mirrors getXP logic but avoids circular dep). */
function computeXP(cards: SessionCard[], streakDays: number): number {
  return cards.reduce((total, c) => {
    if (c.rating === 'again' || c.rating === null) return total
    const base = 10
    const maturedBonus = c.wasMature ? 5 : 0
    const multiplier = streakDays >= 7 ? 1.5 : 1
    return total + Math.round((base + maturedBonus) * multiplier)
  }, 0)
}

/** Elapsed active milliseconds (excludes paused time). */
function elapsedMs(state: SessionState, now: number = Date.now()): number {
  const raw = (state.pausedAt ?? now) - state.startedAt
  return Math.max(0, raw - state.pausedDurationMs)
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** Create a new session with an ordered list of card IDs. */
export function createSession(cardIds: string[], config: SRSConfig = DEFAULT_SRS_CONFIG): SessionState {
  return {
    phase: 'active',
    cardQueue: [...cardIds],
    currentIndex: 0,
    reviewedCards: [],
    startedAt: Date.now(),
    pausedAt: null,
    pausedDurationMs: 0,
    config,
  }
}

/** Return the cardId the user should be shown right now, or null if session is done. */
export function getCurrentCardId(session: SessionState): string | null {
  if (session.phase === 'completed' || session.currentIndex >= session.cardQueue.length) {
    return null
  }
  return session.cardQueue[session.currentIndex] ?? null
}

/**
 * Record a rating for the current card and advance the session.
 * If rating is 'again', the card is re-inserted 3–5 positions ahead in the queue.
 */
export function recordRating(
  session: SessionState,
  cardId: string,
  rating: SRSRating,
  timeMs: number,
  meta: { wasNew: boolean; wasMature: boolean } = { wasNew: false, wasMature: false },
): SessionState {
  if (session.phase !== 'active') return session

  const reviewed: SessionCard = {
    cardId,
    rating,
    timeToAnswer: timeMs,
    wasNew: meta.wasNew,
    wasMature: meta.wasMature,
  }

  let newQueue = [...session.cardQueue]
  let newIndex = session.currentIndex + 1

  if (rating === 'again') {
    // Re-insert card later in the queue (not immediately after current)
    const insertAt = Math.min(newIndex + lapseReinsertOffset(), newQueue.length)
    newQueue = [
      ...newQueue.slice(0, insertAt),
      cardId,
      ...newQueue.slice(insertAt),
    ]
  }

  const newReviewed = [...session.reviewedCards, reviewed]
  const isCompleted = newIndex >= newQueue.length

  return {
    ...session,
    cardQueue: newQueue,
    currentIndex: newIndex,
    reviewedCards: newReviewed,
    phase: isCompleted ? 'completed' : 'active',
  }
}

/** Pause the session, freezing elapsed-time tracking. */
export function pauseSession(session: SessionState): SessionState {
  if (session.phase !== 'active') return session
  return { ...session, phase: 'paused', pausedAt: Date.now() }
}

/** Resume a paused session, accounting for the paused duration. */
export function resumeSession(session: SessionState): SessionState {
  if (session.phase !== 'paused' || session.pausedAt === null) return session
  const additionalPausedMs = Date.now() - session.pausedAt
  return {
    ...session,
    phase: 'active',
    pausedAt: null,
    pausedDurationMs: session.pausedDurationMs + additionalPausedMs,
  }
}

/**
 * Mark the session as completed and compute final stats.
 * Can be called early (partial session) or when the queue is naturally exhausted.
 */
export function completeSession(
  session: SessionState,
  streakDays: number = 0,
): { session: SessionState; stats: SessionStats } {
  const finishedSession: SessionState = {
    ...session,
    phase: 'completed',
  }

  const cards = session.reviewedCards
  const duration = elapsedMs(session, Date.now())

  const counts = { again: 0, hard: 0, good: 0, easy: 0 }
  for (const c of cards) {
    if (c.rating) counts[c.rating] += 1
  }

  const correct = counts.good + counts.easy
  const totalRated = counts.again + counts.hard + counts.good + counts.easy

  const stats: SessionStats = {
    totalCards: totalRated,
    correct,
    again: counts.again,
    hard: counts.hard,
    good: counts.good,
    easy: counts.easy,
    xpEarned: computeXP(cards, streakDays),
    durationMs: duration,
    accuracy: totalRated > 0 ? Math.round((correct / totalRated) * 100) : 0,
    newCardsLearned: cards.filter(c => c.wasNew && c.rating !== 'again').length,
    matureReviewed: cards.filter(c => c.wasMature).length,
    averageTimeMs: totalRated > 0 ? Math.round(duration / totalRated) : 0,
  }

  return { session: finishedSession, stats }
}

/** Return completion progress for the current session. */
export function getSessionProgress(session: SessionState): {
  done: number
  total: number
  percent: number
} {
  // "done" = unique original cards rated (not counting re-inserts)
  const done = session.reviewedCards.length
  const total = session.cardQueue.length
  const percent = total > 0 ? Math.round((done / total) * 100) : 0
  return { done, total, percent }
}

/** Return active elapsed milliseconds without modifying state (safe to call in render). */
export function getElapsedMs(session: SessionState): number {
  return elapsedMs(session)
}
