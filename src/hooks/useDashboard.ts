'use client'

import { useState, useEffect, useCallback } from 'react'
import { getLocalUser, getDueCards, getHeatmapData, getAllEntries } from '@/lib/srs/store'
import { getRetentionRate, getForecast } from '@/lib/srs/sm2'
import { vocabTopik2All } from '@/data/vocab-topik2'
import { grammarByLevelAll } from '@/data/grammar-by-level'
import type { LocalUser } from '@/lib/srs/store'

const ALL_IDS = vocabTopik2All.map(c => c.id)
const ALL_GRAMMAR_IDS = grammarByLevelAll.map(g => g.id)
const ALL_SRS_IDS = [...ALL_IDS, ...ALL_GRAMMAR_IDS]

interface DashboardData extends LocalUser {
  dueCount: number
  grammarDueCount: number
  greeting: string
  heatmap: Record<string, number>
  /** % correct across all cards reviewed in the last 30 days — null when there's no review history yet (avoid showing a misleading "0%"). */
  retentionRate: number | null
  forecast: { date: string; count: number }[]
}

function getGreeting(): string {
  const h = new Date().getHours()
  if (h < 12) return 'Chào buổi sáng'
  if (h < 18) return 'Chào buổi chiều'
  return 'Chào buổi tối'
}

export function useDashboard(): DashboardData {
  const [data, setData] = useState<DashboardData>({
    xp: 0, xpToday: 0, streakDays: 0, lastStudyDate: null,
    level: 1, cardsReviewedToday: 0, minutesToday: 0, streakFreezeCount: 0,
    dueCount: 0, grammarDueCount: 0, greeting: getGreeting(), heatmap: {},
    retentionRate: null, forecast: [],
  })

  const refresh = useCallback(() => {
    const user = getLocalUser()
    const dueCount = getDueCards(ALL_IDS).length
    const grammarDueCount = getDueCards(ALL_GRAMMAR_IDS).length
    const heatmap = getHeatmapData()
    const entries = getAllEntries()
    const reviewedEntries = Object.values(entries).filter(e => e.reviewCount > 0)
    const retentionRate = reviewedEntries.length > 0 ? getRetentionRate(reviewedEntries) : null
    const forecast = getForecast(entries, ALL_SRS_IDS)
    setData({ ...user, dueCount, grammarDueCount, greeting: getGreeting(), heatmap, retentionRate, forecast })
  }, [])

  useEffect(() => {
    refresh()
    // Refresh khi tab được focus lại (sau khi học xong)
    window.addEventListener('focus', refresh)
    return () => window.removeEventListener('focus', refresh)
  }, [refresh])

  return data
}
