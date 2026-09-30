'use client'

import { useState, useEffect, useCallback } from 'react'
import { getAllEntries } from '@/lib/srs/store'
import { needsReview } from '@/lib/srs/sm2'
import { vocabByTopicList } from '@/data/vocab-by-topic'

export type TopicStatus = 'not-started' | 'in-progress' | 'needs-review' | 'completed'

export interface TopicProgress {
  slug: string
  total: number
  studiedCount: number
  reviewDueCount: number
  status: TopicStatus
}

export function useVocabTopicProgress(): Record<string, TopicProgress> {
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({})

  const refresh = useCallback(() => {
    const entries = getAllEntries()
    const next: Record<string, TopicProgress> = {}

    for (const { slug, words } of vocabByTopicList) {
      let studiedCount = 0
      let reviewDueCount = 0
      for (const word of words) {
        const entry = entries[word.id]
        if (!entry || entry.reviewCount === 0) continue
        studiedCount++
        if (needsReview(entry)) reviewDueCount++
      }

      const status: TopicStatus =
        reviewDueCount > 0 ? 'needs-review' :
        studiedCount === 0 ? 'not-started' :
        studiedCount === words.length ? 'completed' : 'in-progress'

      next[slug] = { slug, total: words.length, studiedCount, reviewDueCount, status }
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
