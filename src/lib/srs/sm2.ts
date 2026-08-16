import type { SRSEntry, SRSRating } from '@/types'

// ─── Config ──────────────────────────────────────────────────────────────────

export type SRSConfig = {
  newCardsPerDay: number
  maxReviewsPerDay: number
  easyBonus: number
  hardIntervalMultiplier: number
  intervalModifier: number
}

export const DEFAULT_SRS_CONFIG: SRSConfig = {
  newCardsPerDay: 20,
  maxReviewsPerDay: 200,
  easyBonus: 1.3,
  hardIntervalMultiplier: 1.2,
  intervalModifier: 1.0,
}

// ─── Card state (encoded in SRSEntry.reviewCount / intervalDays) ──────────────
// state is derived, not stored — to stay compatible with the existing SRSEntry shape
// new        → reviewCount === 0
// learning   → reviewCount > 0 && intervalDays < 1 (steps phase, fractional days)
// review     → intervalDays >= 1
// relearning → lapseCount incremented this review (detected via interval reset)

const MATURE_THRESHOLD_DAYS = 21

// Learning step intervals in fractional days (1 min ≈ 0.00069, 10 min ≈ 0.0069)
const LEARNING_STEPS_DAYS = [1 / 1440, 10 / 1440] // 1 min, 10 min

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toISODate(date: Date): string {
  return date.toISOString().split('T')[0]
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setTime(result.getTime() + days * 86_400_000)
  return result
}

/** Apply ±5% random fuzz to intervals > 2 days to prevent review storms. */
function applyFuzz(intervalDays: number): number {
  if (intervalDays <= 2) return Math.round(intervalDays)
  const fuzz = (Math.random() * 0.1 - 0.05) * intervalDays
  return Math.max(1, Math.round(intervalDays + fuzz))
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** Create a fresh SRS entry for a card the user has never seen. */
export function createNewEntry(userId: string, cardId: string): SRSEntry {
  return {
    userId,
    cardId,
    intervalDays: 0,
    easeFactor: 2.5,
    dueDate: toISODate(new Date()),
    reviewCount: 0,
    lapseCount: 0,
    lastReviewed: new Date().toISOString(),
  }
}

/** Compute the next SRSEntry after a rating is applied. Pure — no side effects. */
export function calculateNextReview(
  entry: SRSEntry,
  rating: SRSRating,
  config: SRSConfig = DEFAULT_SRS_CONFIG,
): SRSEntry {
  const now = new Date()
  let { intervalDays, easeFactor, lapseCount, reviewCount } = entry

  const isNew = reviewCount === 0
  const isLearning = reviewCount > 0 && intervalDays < 1
  const isRelearning = lapseCount > 0 && intervalDays < 1 && !isNew
  const isInReview = intervalDays >= 1

  // Suppress unused-variable lint: isRelearning is used for documentation intent;
  // the algorithm branches on interval/reviewCount which already captures it.
  void isRelearning

  let nextInterval: number

  if (rating === 'again') {
    // Lapse — reset to first learning step
    lapseCount += 1
    easeFactor = Math.max(1.3, easeFactor - 0.2)
    nextInterval = LEARNING_STEPS_DAYS[0]
  } else if (rating === 'hard') {
    if (isNew || isLearning) {
      // Stay on current learning step (repeat the step)
      nextInterval = intervalDays === 0 ? LEARNING_STEPS_DAYS[0] : intervalDays
    } else if (isInReview) {
      nextInterval = applyFuzz(intervalDays * config.hardIntervalMultiplier * config.intervalModifier)
    } else {
      nextInterval = LEARNING_STEPS_DAYS[0]
    }
    easeFactor = Math.max(1.3, easeFactor - 0.15)
  } else if (rating === 'good') {
    if (isNew) {
      // First learning step
      nextInterval = LEARNING_STEPS_DAYS[0]
    } else if (isLearning) {
      const currentStepIndex = LEARNING_STEPS_DAYS.indexOf(
        LEARNING_STEPS_DAYS.reduce((prev, curr) =>
          Math.abs(curr - intervalDays) < Math.abs(prev - intervalDays) ? curr : prev,
        ),
      )
      const nextStepIndex = currentStepIndex + 1
      if (nextStepIndex < LEARNING_STEPS_DAYS.length) {
        // Advance to next learning step
        nextInterval = LEARNING_STEPS_DAYS[nextStepIndex]
      } else {
        // Graduate to review phase — first graduating interval: 1 day
        nextInterval = reviewCount === 1 ? 1 : 6
      }
    } else if (isInReview) {
      nextInterval = applyFuzz(intervalDays * easeFactor * config.intervalModifier)
      nextInterval = Math.max(nextInterval, intervalDays + 1)
    } else {
      nextInterval = 1
    }
    // Ease factor unchanged on good
  } else {
    // easy
    if (isNew || isLearning) {
      // Skip remaining steps — graduate immediately with a bonus interval
      nextInterval = applyFuzz(6 * config.easyBonus * config.intervalModifier)
    } else if (isInReview) {
      nextInterval = applyFuzz(intervalDays * easeFactor * config.easyBonus * config.intervalModifier)
      nextInterval = Math.max(nextInterval, intervalDays + 1)
    } else {
      nextInterval = applyFuzz(6 * config.easyBonus)
    }
    easeFactor = Math.min(4.0, easeFactor + 0.15)
  }

  // Graduating intervals for new cards: ensure minimum ramp 1 → 6
  if (isNew && rating === 'good') {
    // Already handled above; nextInterval is LEARNING_STEPS_DAYS[0]
  }

  const nextDue = addDays(now, nextInterval)

  return {
    ...entry,
    intervalDays: nextInterval,
    easeFactor,
    lapseCount,
    reviewCount: reviewCount + 1,
    dueDate: toISODate(nextDue),
    lastReviewed: now.toISOString(),
  }
}

/** Return true when a card's due date is today or in the past. */
export function isDue(entry: SRSEntry): boolean {
  const today = toISODate(new Date())
  return entry.dueDate <= today
}

/** Return true when the card has a review interval of 21+ days (Anki "mature" threshold). */
export function isMature(entry: SRSEntry): boolean {
  return entry.intervalDays >= MATURE_THRESHOLD_DAYS
}

/**
 * Calculate XP earned for a single card rating.
 * `isMatured` is true when the card just crossed the mature threshold this review.
 */
export function getXP(rating: SRSRating, streakDays: number, isMatured: boolean = false): number {
  if (rating === 'again') return 0
  const base = 10
  const maturedBonus = isMatured ? 5 : 0
  const streakMultiplier = streakDays >= 7 ? 1.5 : 1
  return Math.round((base + maturedBonus) * streakMultiplier)
}

/** Compute the retention rate (% correct) across all entries reviewed in the last 30 days. */
export function getRetentionRate(entries: SRSEntry[]): number {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 30)
  const cutoffStr = toISODate(cutoff)

  const reviewed = entries.filter(e => e.lastReviewed >= cutoffStr && e.reviewCount > 0)
  if (reviewed.length === 0) return 0

  // Approximate retention: lapses / total reviews gives error rate
  // We use (reviewCount - lapseCount) / reviewCount as a per-card success estimate,
  // then average across all reviewed cards.
  const successRates = reviewed.map(e => {
    const totalAttempts = e.reviewCount + e.lapseCount
    if (totalAttempts === 0) return 1
    return Math.max(0, (totalAttempts - e.lapseCount) / totalAttempts)
  })

  const avg = successRates.reduce((sum, r) => sum + r, 0) / successRates.length
  return Math.round(avg * 100)
}

/** Estimate what the due date would be for a given rating without mutating anything. */
export function estimateNextDueDate(
  entry: SRSEntry,
  rating: SRSRating,
  config: SRSConfig = DEFAULT_SRS_CONFIG,
): Date {
  const next = calculateNextReview(entry, rating, config)
  return new Date(next.dueDate)
}
