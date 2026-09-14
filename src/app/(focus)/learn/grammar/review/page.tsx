'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap } from 'lucide-react'
import { grammarByLevelAll, grammarByLevelList } from '@/data/grammar-by-level'
import { getDueCards, getLocalUser } from '@/lib/srs/store'
import { useGrammarSession } from '@/hooks/useGrammarSession'
import { GrammarFlashCard } from '@/components/learning/GrammarFlashCard'
import { CardRating } from '@/components/learning/CardRating'
import { SessionEnd } from '@/components/learning/SessionEnd'

const ALL_IDS = grammarByLevelAll.map(c => c.id)
const BY_ID = Object.fromEntries(grammarByLevelAll.map(c => [c.id, c]))

export default function GrammarReviewPage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <GrammarReviewSession />
    </Suspense>
  )
}

function GrammarReviewSession() {
  const searchParams = useSearchParams()
  const levelParam = searchParams.get('level')
  const levelMeta = grammarByLevelList.find(l => l.level === levelParam) ?? null
  const sectionParam = searchParams.get('section')

  const [sessionIds, setSessionIds] = useState<string[]>([])
  const { phase, currentCardId, progress, isFlipped, stats, flip, rate, restart, exit } =
    useGrammarSession([])
  const initializedRef = useRef(false)
  const prevXpRef = useRef(0)
  const [lastXp, setLastXp] = useState<number | null>(null)

  // Initialize with real cards once on the client (avoids SSR/hydration mismatch)
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    let ids: string[]
    if (sectionParam) {
      // Ôn theo nhóm ngữ pháp cụ thể: toàn bộ mẫu của nhóm đó
      ids = grammarByLevelAll.filter(g => g.section === sectionParam).map(g => g.id)
    } else if (levelMeta !== null) {
      // Ôn theo cấp độ: toàn bộ mẫu của cấp độ đó, không lọc theo hạn ôn
      ids = levelMeta.patterns.map(g => g.id)
    } else {
      const due = getDueCards(ALL_IDS)
      ids = due.length > 0 ? due : ALL_IDS.slice(0, 20)
    }
    setSessionIds(ids)
    restart(ids)
    prevXpRef.current = getLocalUser().xpToday
  }, [restart, levelMeta, sectionParam])

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
        {levelMeta !== null && (
          <span className="text-xs font-medium text-accent-coral shrink-0">{levelMeta.titleVi}</span>
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
            <GrammarFlashCard card={card} flipped={isFlipped} onFlip={flip} />
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
