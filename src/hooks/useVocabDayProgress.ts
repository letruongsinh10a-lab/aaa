'use client'

import { useState, useEffect, useCallback } from 'react'
import { getAllEntries } from '@/lib/srs/store'
import { needsReview } from '@/lib/srs/sm2'
import { vocabTopik2Days } from '@/data/vocab-topik2'

export type DayStatus = 'not-started' | 'in-progress' | 'needs-review' | 'completed'

export interface DayProgress {
  day: number
  total: number
  studiedCount: number
  reviewDueCount: number
  status: DayStatus
}

export function useVocabDayProgress(): Record<number, DayProgress> {
  const [progress, setProgress] = useState<Record<number, DayProgress>>({})

  const refresh = useCallback(() => {
    const entries = getAllEntries()
    const next: Record<number, DayProgress> = {}

    for (const { day, words } of vocabTopik2Days) {
      let studiedCount = 0
      let reviewDueCount = 0
      for (const word of words) {
        const entry = entries[word.id]
        if (!entry || entry.reviewCount === 0) continue
        studiedCount++
        if (needsReview(entry)) reviewDueCount++
      }

      const status: DayStatus =
        reviewDueCount > 0 ? 'needs-review' :
        studiedCount === 0 ? 'not-started' :
        studiedCount === words.length ? 'completed' : 'in-progress'

      next[day] = { day, total: words.length, studiedCount, reviewDueCount, status }
    }

    setProgress(next)
  }, [])

  useEffect(() => {
    refresh()
    // Refresh khi tab được focus lại (sau khi học xong 1 phiên flashcard)
    window.addEventListener('focus', refresh)
    return () => window.removeEventListener('focus', refresh)
  }, [refresh])

  return progress
}
