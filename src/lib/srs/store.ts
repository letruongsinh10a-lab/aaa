'use client'

import type { SRSEntry, SRSRating } from '@/types'
import { calculateNextReview, createNewEntry, isDue, getXP } from './sm2'


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
}

const DEFAULT_USER: LocalUser = {
  xp: 0,
  xpToday: 0,
  streakDays: 0,
  lastStudyDate: null,
  level: 1,
  cardsReviewedToday: 0,
  minutesToday: 0,
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

/** Bulk-replace all entries — used by the sync layer to hydrate from a merge/pull, never by the review flow itself. */
export function replaceAllEntries(entries: Record<string, SRSEntry>) {
  saveEntries(entries)
}

export function reviewCard(cardId: string, rating: SRSRating, userId = 'local'): number {
  const entries = getAllEntries()
  const existing = entries[cardId] ?? createNewEntry(userId, cardId)
  const user = getLocalUser()
  const xpEarned = getXP(rating, user.streakDays)

  entries[cardId] = calculateNextReview(existing, rating)
  saveEntries(entries)

  if (rating !== 'again') {
    updateUser({
      xp: user.xp + xpEarned,
      xpToday: user.xpToday + xpEarned,
      cardsReviewedToday: user.cardsReviewedToday + 1,
    })
    recordHeatmapXP(xpEarned)
  }

  return xpEarned
}

/**
 * Award XP without touching any SRSEntry — used by non-SRS practice modes
 * (e.g. grammar exercise drills) that must never affect a card's review schedule.
 */
export function awardXP(amount: number) {
  const user = getLocalUser()
  updateUser({ xp: user.xp + amount, xpToday: user.xpToday + amount })
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

  if (user.lastStudyDate === today) return user

  let newStreak = 1
  if (user.lastStudyDate === yesterday) newStreak = user.streakDays + 1

  const newLevel = Math.floor(Math.sqrt(user.xp / 100)) + 1
  const updated: LocalUser = {
    ...user,
    streakDays: newStreak,
    lastStudyDate: today,
    level: newLevel,
    xpToday: user.lastStudyDate === today ? user.xpToday : 0,
    cardsReviewedToday: user.lastStudyDate === today ? user.cardsReviewedToday : 0,
    minutesToday: user.lastStudyDate === today ? user.minutesToday : 0,
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
