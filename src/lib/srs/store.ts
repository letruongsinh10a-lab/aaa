'use client'

import type { SRSEntry, SRSRating } from '@/types'
import { calculateNextReview, createNewEntry, isDue, needsReview, getXP } from './sm2'


const STORAGE_KEY = 'han-ngu-srs'
const USER_KEY    = 'han-ngu-user'
const HEATMAP_KEY = 'han-ngu-heatmap'

export interface LocalUser {
  xp: number
  xpToday: number
  streakDays: number
  lastStudyDate: string | null
  level: number
  cardsReviewedToday: number
  minutesToday: number
  streakFreezeCount: number
}

const DEFAULT_USER: LocalUser = {
  xp: 0,
  xpToday: 0,
  streakDays: 0,
  lastStudyDate: null,
  level: 1,
  cardsReviewedToday: 0,
  minutesToday: 0,
  streakFreezeCount: 0,
}

/** Max streak freezes a user can bank at once — earned, never bought. */
const STREAK_FREEZE_CAP = 2

/** The one place the XP→level formula lives — sync.ts imports this rather than re-deriving it. */
export function computeLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1
}

// ─── SRS entries ────────────────────────────────────────────────

export function getAllEntries(): Record<string, SRSEntry> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveEntries(entries: Record<string, SRSEntry>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

export function getDueCards(allCardIds: string[], userId = 'local'): string[] {
  const entries = getAllEntries()
  return allCardIds.filter(id => {
    const entry = entries[id]
    if (!entry) return true // new card, always due
    return isDue(entry)
  })
}

/**
 * Subset of getDueCards() that excludes brand-new (never-studied) cards —
 * "genuinely at risk of being forgotten", not just "due for a first look".
 * Used to power review reminders (e.g. per study-day) where counting an
 * unstudied card as "due" would be misleading.
 */
export function getReviewDueCards(cardIds: string[]): string[] {
  const entries = getAllEntries()
  return cardIds.filter(id => {
    const entry = entries[id]
    return !!entry && needsReview(entry)
  })
}

/** Bulk-replace all entries — used by the sync layer to hydrate from a merge/pull, never by the review flow itself. */
export function replaceAllEntries(entries: Record<string, SRSEntry>) {
  saveEntries(entries)
}

/**
 * Creates an SRSEntry for a card if it doesn't already have one, without
 * touching reviewCount/XP/streak — unlike reviewCard(), this doesn't simulate
 * an actual review. Used by "Thêm vào bộ thẻ ôn tập" so a word found via
 * search (outside its normal day/topic session) is guaranteed to persist in
 * the user's SRS deck instead of only existing implicitly.
 */
export function ensureCardTracked(cardId: string, userId = 'local'): void {
  const entries = getAllEntries()
  if (entries[cardId]) return
  entries[cardId] = createNewEntry(userId, cardId)
  saveEntries(entries)
}

export function reviewCard(cardId: string, rating: SRSRating, userId = 'local'): number {
  const entries = getAllEntries()
  const existing = entries[cardId] ?? createNewEntry(userId, cardId)
  // touchStreak() first: any SRS review — vocab flashcards or grammar review —
  // counts as "studied today", so the streak/level reflect the day correctly
  // before the XP multiplier below reads streakDays.
  const user = touchStreak()
  const xpEarned = getXP(rating, user.streakDays)

  entries[cardId] = calculateNextReview(existing, rating)
  saveEntries(entries)

  if (rating !== 'again') {
    updateUser({
      xp: user.xp + xpEarned,
      xpToday: user.xpToday + xpEarned,
      cardsReviewedToday: user.cardsReviewedToday + 1,
      level: computeLevel(user.xp + xpEarned),
    })
    recordHeatmapXP(xpEarned)
  }

  return xpEarned
}

/**
 * Award XP without touching any SRSEntry — used by non-SRS practice modes
 * (grammar exercise drills, listening, speaking) that must never affect a
 * card's review schedule, but must still count as "studied today" for the
 * streak — this is the only XP path those features have, so touchStreak()
 * has to live here too, not just in reviewCard().
 */
export function awardXP(amount: number) {
  const user = touchStreak()
  updateUser({ xp: user.xp + amount, xpToday: user.xpToday + amount, level: computeLevel(user.xp + amount) })
  recordHeatmapXP(amount)
}

// ─── User / streak ──────────────────────────────────────────────

export function getLocalUser(): LocalUser {
  if (typeof window === 'undefined') return DEFAULT_USER
  try {
    const stored = JSON.parse(localStorage.getItem(USER_KEY) ?? '{}')
    return { ...DEFAULT_USER, ...stored }
  } catch {
    return DEFAULT_USER
  }
}

export function updateUser(patch: Partial<LocalUser>) {
  const current = getLocalUser()
  localStorage.setItem(USER_KEY, JSON.stringify({ ...current, ...patch }))
}

export function touchStreak(): LocalUser {
  const user = getLocalUser()
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0]
  const twoDaysAgo = new Date(Date.now() - 2 * 864e5).toISOString().split('T')[0]

  if (user.lastStudyDate === today) return user

  let newStreak: number
  let freezeCount = user.streakFreezeCount

  if (user.lastStudyDate === yesterday) {
    newStreak = user.streakDays + 1
  } else if (user.lastStudyDate === twoDaysAgo && freezeCount > 0) {
    // Exactly one day was missed and a freeze is banked — spend it to keep the streak alive.
    newStreak = user.streakDays + 1
    freezeCount -= 1
  } else {
    newStreak = 1
  }

  // Earn a freeze at every 7-day milestone (same cadence as the ×1.5 XP bonus), capped.
  if (newStreak % 7 === 0 && freezeCount < STREAK_FREEZE_CAP) {
    freezeCount += 1
  }

  const updated: LocalUser = {
    ...user,
    streakDays: newStreak,
    lastStudyDate: today,
    level: computeLevel(user.xp),
    streakFreezeCount: freezeCount,
    xpToday: 0,
    cardsReviewedToday: 0,
    minutesToday: 0,
  }
  localStorage.setItem(USER_KEY, JSON.stringify(updated))
  return updated
}

export function addMinutes(minutes: number) {
  const user = getLocalUser()
  updateUser({ minutesToday: user.minutesToday + minutes })
}

// ─── Heatmap ────────────────────────────────────────────────────

export function getHeatmapData(): Record<string, number> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(HEATMAP_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function recordHeatmapXP(xp: number) {
  if (typeof window === 'undefined') return
  const today = new Date().toISOString().split('T')[0]
  const map = getHeatmapData()
  map[today] = (map[today] ?? 0) + xp
  localStorage.setItem(HEATMAP_KEY, JSON.stringify(map))
}

/** Bulk-replace the heatmap — used by the sync layer to hydrate from a merge/pull. */
export function replaceHeatmap(map: Record<string, number>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(HEATMAP_KEY, JSON.stringify(map))
}

// ─── Sync (account switch) ────────────────────────────────────────────────

/** Wipes all local progress. Used only when a different account signs in on this device — never on plain sign-out, so guest study after logout still works. */
export function resetLocalProgress() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(HEATMAP_KEY)
}
