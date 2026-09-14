'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap } from 'lucide-react'
import { vocabTopik2All, vocabTopik2Days } from '@/data/vocab-topik2'
import { vocabByTopicAll, vocabByTopicList } from '@/data/vocab-by-topic'
import { getDueCards, getLocalUser } from '@/lib/srs/store'
import { useFlashcardSession } from '@/hooks/useFlashcardSession'
import { useAuthStore } from '@/stores/authStore'
import { FlashCard } from '@/components/learning/FlashCard'
import { CardRating } from '@/components/learning/CardRating'
import { SessionEnd } from '@/components/learning/SessionEnd'

const ALL_CARDS = [...vocabTopik2All, ...vocabByTopicAll]
const ALL_IDS = ALL_CARDS.map(c => c.id)
const BY_ID = Object.fromEntries(ALL_CARDS.map(c => [c.id, c]))

export default function FlashcardsPage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <FlashcardsSession />
    </Suspense>
  )
}

function FlashcardsSession() {
  const searchParams = useSearchParams()
  const dayParam = Number(searchParams.get('day'))
  const day = vocabTopik2Days.some(d => d.day === dayParam) ? dayParam : null
  const topicParam = searchParams.get('topic')
  const topic = vocabByTopicList.find(t => t.slug === topicParam) ?? null

  const [sessionIds, setSessionIds] = useState<string[]>([])
  const { phase, currentCardId, progress, isFlipped, stats, flip, rate, restart, exit } =
    useFlashcardSession([])
  const initializedRef = useRef(false)
  const prevXpRef = useRef(0)
  const [lastXp, setLastXp] = useState<number | null>(null)
  const { status: authStatus, isSyncing } = useAuthStore()

  // Initialize with real due cards once on the client (avoids SSR/hydration mismatch).
  // Waits out auth resolution + the post-login reconcile: otherwise a signed-in
  // user on a fresh device could have their queue built from an empty
  // localStorage before their server progress is hydrated, and re-grind
  // cards they already mastered elsewhere.
  useEffect(() => {
    if (initializedRef.current) return
    if (authStatus === 'loading' || (authStatus === 'authenticated' && isSyncing)) return
    initializedRef.current = true

    let ids: string[]
    if (day !== null) {
      // Học theo ngày: toàn bộ từ của ngày đó, không lọc theo hạn ôn
      ids = vocabTopik2Days.find(d => d.day === day)!.words.map(c => c.id)
    } else if (topic !== null) {
      // Học theo chủ đề: toàn bộ từ của chủ đề đó, không lọc theo hạn ôn
      ids = topic.words.map(c => c.id)
    } else {
      const due = getDueCards(ALL_IDS)
      ids = due.length > 0 ? due : ALL_IDS.slice(0, 20)
    }
    setSessionIds(ids)
    restart(ids)
    prevXpRef.current = getLocalUser().xpToday
  }, [restart, day, topic, authStatus, isSyncing])

  // Show XP pop whenever a card is rated
  useEffect(() => {
    if (progress.done === 0) return
    const xpNow = getLocalUser().xpToday
    const gained = xpNow - prevXpRef.current
    prevXpRef.current = xpNow
    if (gained > 0) {
      setLastXp(gained)
      const t = setTimeout(() => setLastXp(null), 900)
      return () => clearTimeout(t)
    }
  }, [progress.done])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ') { e.preventDefault(); flip() }
      if (!isFlipped) return
      if (e.key === '1') rate('again')
      if (e.key === '2') rate('hard')
      if (e.key === '3') rate('good')
      if (e.key === '4') rate('easy')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [flip, rate, isFlipped])

  const card = currentCardId ? BY_ID[currentCardId] : undefined

  if (phase === 'completed' && stats) {
    return <SessionEnd stats={stats} onRetry={() => restart(sessionIds)} />
  }

  if (!card) {
    return (
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    )
  }

  return (
    <div className="h-screen bg-bg-base flex flex-col select-none overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 h-16 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <button
          onClick={exit}
          className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Thoát"
        >
          <X className="w-5 h-5" />
        </button>
        {day !== null && (
          <span className="text-xs font-medium text-accent-coral shrink-0">Ngày {day}</span>
        )}
        {topic !== null && (
          <span lang="ko" className="font-korean text-xs font-medium text-accent-coral shrink-0">{topic.nameKo}</span>
        )}
        <div className="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-coral rounded-full"
            animate={{ width: `${progress.percent}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-text-tertiary shrink-0">
          {progress.done} / {progress.total}
        </span>
      </div>

      {/* XP pop */}
      <AnimatePresence>
        {lastXp !== null && (
          <motion.div
            key={`xp-${progress.done}`}
            initial={{ opacity: 0, y: 0, x: '-50%' }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 pointer-events-none z-50 flex items-center gap-1 text-accent-amber font-semibold text-sm"
          >
            <Zap className="w-3.5 h-3.5" /> +{lastXp} XP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCardId}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <FlashCard card={card} flipped={isFlipped} onFlip={flip} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Rating */}
      <div className="px-6 pb-8 shrink-0">
        <CardRating visible={isFlipped} onRate={rate} onFlip={flip} />
      </div>
    </div>
  )
}
