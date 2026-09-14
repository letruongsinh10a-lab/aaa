'use client'

import type { SRSEntry } from '@/types'
import { createClient } from '@/lib/supabase/client'
import {
  getAllEntries,
  getLocalUser,
  getHeatmapData,
  updateUser,
  replaceAllEntries,
  replaceHeatmap,
  resetLocalProgress,
  type LocalUser,
} from './store'

const LAST_SYNCED_UID_KEY = 'han-ngu-last-synced-uid'
const LAST_SYNCED_AT_KEY = 'han-ngu-last-synced-at'
const EPOCH = '1970-01-01T00:00:00.000Z'

// ─── DB row shapes (snake_case) — runtime talks to Supabase directly via
// supabase-js + RLS, not through Drizzle's query builder, so column names
// must be spelled out by hand here rather than relying on Drizzle's mapping ──

type SrsRow = {
  user_id: string
  card_id: string
  interval_days: number
  ease_factor: number
  due_date: string
  review_count: number
  lapse_count: number
  last_reviewed: string
}

type ProfileRow = {
  id: string
  xp: number
  xp_today: number
  streak_days: number
  last_study_date: string | null
  level: number
  cards_reviewed_today: number
  minutes_today: number
}

type HeatmapRow = { user_id: string; date: string; xp: number }

function toSrsRow(userId: string, cardId: string, e: SRSEntry): SrsRow {
  return {
    user_id: userId,
    card_id: cardId,
    interval_days: e.intervalDays,
    ease_factor: e.easeFactor,
    due_date: e.dueDate,
    review_count: e.reviewCount,
    lapse_count: e.lapseCount,
    last_reviewed: e.lastReviewed,
  }
}

function fromSrsRow(row: SrsRow): SRSEntry {
  return {
    userId: row.user_id,
    cardId: row.card_id,
    intervalDays: row.interval_days,
    easeFactor: row.ease_factor,
    dueDate: row.due_date,
    reviewCount: row.review_count,
    lapseCount: row.lapse_count,
    lastReviewed: row.last_reviewed,
  }
}

function userFromProfileRow(row: ProfileRow): LocalUser {
  return {
    xp: row.xp,
    xpToday: row.xp_today,
    streakDays: row.streak_days,
    lastStudyDate: row.last_study_date,
    level: row.level,
    cardsReviewedToday: row.cards_reviewed_today,
    minutesToday: row.minutes_today,
  }
}

/** Mirrors store.ts's touchStreak() level formula — level is always derived, never trusted from either side of a merge. */
function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1
}

// ─── local sync markers ─────────────────────────────────────────────────────

function getLastSyncedUid(): string | null {
  return localStorage.getItem(LAST_SYNCED_UID_KEY)
}
function setLastSyncedUid(uid: string) {
  localStorage.setItem(LAST_SYNCED_UID_KEY, uid)
}
function getLastSyncedAt(): string {
  return localStorage.getItem(LAST_SYNCED_AT_KEY) ?? EPOCH
}
function setLastSyncedAt(iso: string) {
  localStorage.setItem(LAST_SYNCED_AT_KEY, iso)
}

// ─── push ───────────────────────────────────────────────────────────────────

/**
 * Push every local SRS entry rated since the last successful sync, plus the
 * current profile snapshot and today's heatmap row. Best-effort, non-blocking
 * — never awaited by the review UI. If a tab closes mid-push, the dirty
 * entry's `lastReviewed` is still newer than the (unmoved) marker, so the
 * next sync opportunity re-pushes it automatically.
 */
export async function pushDirtyEntries(userId: string): Promise<void> {
  const supabase = createClient()
  const since = getLastSyncedAt()
  const entries = getAllEntries()
  const dirty = Object.entries(entries).filter(([, e]) => e.lastReviewed > since)

  if (dirty.length > 0) {
    const rows = dirty.map(([cardId, e]) => toSrsRow(userId, cardId, e))
    const { error } = await supabase.from('srs_entries').upsert(rows, { onConflict: 'user_id,card_id' })
    if (error) {
      console.warn('[sync] push srs_entries failed, will retry next sync opportunity', error)
      return
    }
  }

  const user = getLocalUser()
  const { error: profileError } = await supabase
    .from('profiles')
    .update({
      xp: user.xp,
      xp_today: user.xpToday,
      streak_days: user.streakDays,
      last_study_date: user.lastStudyDate,
      level: levelFromXp(user.xp),
      cards_reviewed_today: user.cardsReviewedToday,
      minutes_today: user.minutesToday,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId)
  if (profileError) {
    console.warn('[sync] push profile failed, will retry next sync opportunity', profileError)
    return
  }

  const today = new Date().toISOString().split('T')[0]
  const heatmap = getHeatmapData()
  if (heatmap[today] !== undefined) {
    await supabase
      .from('activity_heatmap')
      .upsert(
        { user_id: userId, date: today, xp: heatmap[today], updated_at: new Date().toISOString() },
        { onConflict: 'user_id,date' },
      )
  }

  setLastSyncedAt(new Date().toISOString())
}

// ─── pull ───────────────────────────────────────────────────────────────────

async function fetchServerData(userId: string) {
  const supabase = createClient()
  const [srsResult, profileResult, heatmapResult] = await Promise.all([
    supabase.from('srs_entries').select('*').eq('user_id', userId),
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('activity_heatmap').select('*').eq('user_id', userId),
  ])
  return {
    srsRows: (srsResult.data ?? []) as SrsRow[],
    profile: profileResult.data as ProfileRow | null,
    heatmapRows: (heatmapResult.data ?? []) as HeatmapRow[],
  }
}

// ─── reconcile (called once per SIGNED_IN event) ───────────────────────────

/**
 * Runs once when a session becomes active. Branches on "does this account
 * already have server data" rather than "was this a signup or a login" —
 * Google OAuth doesn't distinguish the two, and logging into a pre-existing
 * account can still carry unsynced local guest progress that must not be
 * silently discarded.
 */
export async function reconcileOnSignIn(userId: string): Promise<void> {
  const lastUid = getLastSyncedUid()
  if (lastUid && lastUid !== userId) {
    // A different account was last synced on this device — local data
    // belongs to someone else. Never merge or upload it into this account.
    resetLocalProgress()
  }

  const { srsRows, profile, heatmapRows } = await fetchServerData(userId)

  if (srsRows.length === 0) {
    // Brand-new account (or first sync ever) — local progress becomes the seed.
    setLastSyncedUid(userId)
    await pushDirtyEntries(userId)
    return
  }

  // Merge path: this account already has server data.
  const localEntries = getAllEntries()
  const localUser = getLocalUser()
  const localHeatmap = getHeatmapData()

  const mergedEntries: Record<string, SRSEntry> = {}
  const serverByCard = new Map(srsRows.map((r) => [r.card_id, fromSrsRow(r)]))
  const allCardIds = new Set([...Object.keys(localEntries), ...serverByCard.keys()])
  allCardIds.forEach((cardId) => {
    const local = localEntries[cardId]
    const server = serverByCard.get(cardId)
    if (local && server) {
      mergedEntries[cardId] = local.lastReviewed > server.lastReviewed ? local : server
    } else {
      mergedEntries[cardId] = (local ?? server)!
    }
  })

  const mergedHeatmap: Record<string, number> = { ...localHeatmap }
  heatmapRows.forEach((row) => {
    mergedHeatmap[row.date] = Math.max(mergedHeatmap[row.date] ?? 0, row.xp)
  })

  const serverUser: LocalUser = profile ? userFromProfileRow(profile) : localUser
  const mergedXp = Math.max(localUser.xp, serverUser.xp)
  const streakWinner =
    (localUser.lastStudyDate ?? '') >= (serverUser.lastStudyDate ?? '') ? localUser : serverUser

  const mergedUser: LocalUser = {
    xp: mergedXp,
    xpToday: Math.max(localUser.xpToday, serverUser.xpToday),
    streakDays: streakWinner.streakDays,
    lastStudyDate: streakWinner.lastStudyDate,
    level: levelFromXp(mergedXp),
    cardsReviewedToday: Math.max(localUser.cardsReviewedToday, serverUser.cardsReviewedToday),
    minutesToday: Math.max(localUser.minutesToday, serverUser.minutesToday),
  }

  replaceAllEntries(mergedEntries)
  updateUser(mergedUser)
  replaceHeatmap(mergedHeatmap)

  setLastSyncedUid(userId)
  setLastSyncedAt(EPOCH) // force a full re-push so the server converges to the merged result too
  await pushDirtyEntries(userId)
}

/** Best-effort background sync opportunity — call on window focus / visibilitychange while signed in. */
export async function syncIfSignedIn(userId: string): Promise<void> {
  await pushDirtyEntries(userId)
}
