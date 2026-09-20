'use client'

import { useCallback, useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap } from 'lucide-react'
import { grammarByLevelAll, grammarByLevelList } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import type { GrammarExercise } from '@/types'
import { getDueCards, getLocalUser, reviewCard } from '@/lib/srs/store'
import { deriveSRSRating, pickReviewExercise } from '@/lib/exercises/grade'
import { useGrammarSession } from '@/hooks/useGrammarSession'
import { useGrammarPractice } from '@/hooks/useGrammarPractice'
import { GrammarFlashCard } from '@/components/learning/GrammarFlashCard'
import { GrammarExercisePlayer } from '@/components/learning/GrammarExercisePlayer'
import { CardRating } from '@/components/learning/CardRating'
import { SessionEnd } from '@/components/learning/SessionEnd'

const ALL_IDS = grammarByLevelAll.map(c => c.id)
const BY_ID = Object.fromEntries(grammarByLevelAll.map(c => [c.id, c]))

type Phase = 'loading' | 'exercises' | 'flashcards' | 'completed'

interface CombinedStats {
  totalCards: number
  correct: number
  xpEarned: number
  accuracy: number
}

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

  const [phase, setPhase] = useState<Phase>('loading')
  const [flashcardIds, setFlashcardIds] = useState<string[]>([])
  const [exercisePool, setExercisePool] = useState<GrammarExercise[]>([])
  const [exerciseStats, setExerciseStats] = useState<CombinedStats | null>(null)
  const exercisePhaseCommittedRef = useRef(false)
  const prevXpRef = useRef(0)
  const [lastXp, setLastXp] = useState<number | null>(null)

  const grammarSession = useGrammarSession([])
  const grammarPractice = useGrammarPractice([])

  const startSession = useCallback(() => {
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

    const withExercises = ids.filter(id => (grammarExercisesByPatternId[id]?.length ?? 0) > 0)
    const withoutExercises = ids.filter(id => !(grammarExercisesByPatternId[id]?.length))
    const pool = withExercises
      .map(id => pickReviewExercise(grammarExercisesByPatternId[id]))
      .filter((e): e is GrammarExercise => e !== undefined)

    exercisePhaseCommittedRef.current = false
    setExerciseStats(null)
    setFlashcardIds(withoutExercises)
    setExercisePool(pool)
    prevXpRef.current = getLocalUser().xpToday

    if (pool.length > 0) {
      grammarPractice.restart(pool)
      setPhase('exercises')
    } else if (withoutExercises.length > 0) {
      grammarSession.restart(withoutExercises)
      setPhase('flashcards')
    } else {
      setPhase('completed')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelMeta, sectionParam])

  const initializedRef = useRef(false)
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true
    startSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Exercise phase finished — commit an SRS review per pattern, then move on.
  useEffect(() => {
    if (phase !== 'exercises') return
    if (grammarPractice.phase !== 'completed' || !grammarPractice.stats) return
    if (exercisePhaseCommittedRef.current) return
    exercisePhaseCommittedRef.current = true

    exercisePool.forEach(exercise => {
      const firstAttemptCorrect = grammarPractice.firstAttempt[exercise.id] ?? false
      reviewCard(exercise.patternId, deriveSRSRating(exercise.type, firstAttemptCorrect))
    })
    setExerciseStats(grammarPractice.stats)

    if (flashcardIds.length > 0) {
      grammarSession.restart(flashcardIds)
      setPhase('flashcards')
    } else {
      setPhase('completed')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, grammarPractice.phase, grammarPractice.stats])

  // Flashcard phase finished (reviewCard already called internally per card by useFlashcardSession).
  useEffect(() => {
    if (phase !== 'flashcards') return
    if (grammarSession.phase !== 'completed' || !grammarSession.stats) return
    setPhase('completed')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, grammarSession.phase, grammarSession.stats])

  // XP pop — watches progress across whichever phase is currently driving the session.
  const doneTick = phase === 'exercises' ? grammarPractice.progress.done : grammarSession.progress.done
  useEffect(() => {
    if (doneTick === 0) return
    const xpNow = getLocalUser().xpToday
    const gained = xpNow - prevXpRef.current
    prevXpRef.current = xpNow
    if (gained > 0) {
      setLastXp(gained)
      const t = setTimeout(() => setLastXp(null), 900)
      return () => clearTimeout(t)
    }
  }, [doneTick])

  // Keyboard shortcuts — flashcard phase only; the exercise player manages its own input.
  useEffect(() => {
    if (phase !== 'flashcards') return
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ') { e.preventDefault(); grammarSession.flip() }
      if (!grammarSession.isFlipped) return
      if (e.key === '1') grammarSession.rate('again')
      if (e.key === '2') grammarSession.rate('hard')
      if (e.key === '3') grammarSession.rate('good')
      if (e.key === '4') grammarSession.rate('easy')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, grammarSession.isFlipped])

  const ranExercises = exercisePool.length > 0
  const ranFlashcards = flashcardIds.length > 0
  const combinedStats: CombinedStats | null = phase === 'completed'
    ? (() => {
        const ex = ranExercises ? exerciseStats : null
        const fc = ranFlashcards ? grammarSession.stats : null
        if (ex && fc) {
          const totalCards = ex.totalCards + fc.totalCards
          const correct = ex.correct + fc.correct
          const xpEarned = ex.xpEarned + fc.xpEarned
          return { totalCards, correct, xpEarned, accuracy: totalCards > 0 ? Math.round((correct / totalCards) * 100) : 0 }
        }
        return ex ?? fc ?? { totalCards: 0, correct: 0, xpEarned: 0, accuracy: 0 }
      })()
    : null

  if (phase === 'completed' && combinedStats) {
    return <SessionEnd stats={combinedStats} onRetry={startSession} />
  }

  if (phase === 'loading') {
    return (
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    )
  }

  const totalOverall = exercisePool.length + flashcardIds.length
  const doneOverall = phase === 'exercises'
    ? grammarPractice.progress.done
    : exercisePool.length + grammarSession.progress.done
  const percentOverall = totalOverall > 0 ? Math.round((doneOverall / totalOverall) * 100) : 0

  const flashcard = phase === 'flashcards' && grammarSession.currentCardId ? BY_ID[grammarSession.currentCardId] : undefined

  return (
    <div className="h-screen bg-bg-base flex flex-col select-none overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 h-16 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <Link
          href="/learn/grammar"
          className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Thoát"
        >
          <X className="w-5 h-5" />
        </Link>
        {levelMeta !== null && (
          <span className="text-xs font-medium text-accent-coral shrink-0">{levelMeta.titleVi}</span>
        )}
        <div className="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-coral rounded-full"
            animate={{ width: `${percentOverall}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-text-tertiary shrink-0">
          {doneOverall} / {totalOverall}
        </span>
      </div>

      {/* XP pop */}
      <AnimatePresence>
        {lastXp !== null && (
          <motion.div
            key={`xp-${doneOverall}`}
            initial={{ opacity: 0, y: 0, x: '-50%' }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 pointer-events-none z-50 flex items-center gap-1 text-accent-amber font-semibold text-sm"
          >
            <Zap className="w-3.5 h-3.5" /> +{lastXp} XP
          </motion.div>
        )}
      </AnimatePresence>

      {phase === 'exercises' && grammarPractice.currentExercise && (
        <div className="flex-1 flex items-center justify-center px-6 py-6 overflow-y-auto">
          <motion.div
            key={grammarPractice.currentExercise.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <GrammarExercisePlayer
              exercise={grammarPractice.currentExercise}
              onSubmitFillBlank={grammarPractice.submitFillBlank}
              onSubmitDiscriminate={grammarPractice.submitDiscriminate}
              onSubmitProduce={grammarPractice.submitProduce}
              onNext={grammarPractice.next}
            />
          </motion.div>
        </div>
      )}

      {phase === 'flashcards' && flashcard && (
        <>
          <div className="flex-1 flex items-center justify-center px-6 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={grammarSession.currentCardId}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <GrammarFlashCard card={flashcard} flipped={grammarSession.isFlipped} onFlip={grammarSession.flip} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="px-6 pb-8 shrink-0">
            <CardRating visible={grammarSession.isFlipped} onRate={grammarSession.rate} onFlip={grammarSession.flip} />
          </div>
        </>
      )}
    </div>
  )
}
