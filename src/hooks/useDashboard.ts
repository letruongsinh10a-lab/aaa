'use client'

import { useState, useEffect, useCallback } from 'react'
import { getLocalUser, getDueCards, getHeatmapData } from '@/lib/srs/store'
import { vocabTopik2All } from '@/data/vocab-topik2'
import type { LocalUser } from '@/lib/srs/store'

const ALL_IDS = vocabTopik2All.map(c => c.id)

interface DashboardData extends LocalUser {
  dueCount: number
  greeting: string
  heatmap: Record<string, number>
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
    level: 1, cardsReviewedToday: 0, minutesToday: 0,
    dueCount: 0, greeting: getGreeting(), heatmap: {},
  })

  const refresh = useCallback(() => {
    const user = getLocalUser()
    const dueCount = getDueCards(ALL_IDS).length
    const heatmap = getHeatmapData()
    setData({ ...user, dueCount, greeting: getGreeting(), heatmap })
  }, [])

  useEffect(() => {
    refresh()
    // Refresh khi tab được focus lại (sau khi học xong)
    window.addEventListener('focus', refresh)
    return () => window.removeEventListener('focus', refresh)
  }, [refresh])

  return data
}
