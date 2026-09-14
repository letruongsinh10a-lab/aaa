'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { grammarByLevelAll } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import { useGrammarPractice } from '@/hooks/useGrammarPractice'
import { GrammarExercisePlayer } from '@/components/learning/GrammarExercisePlayer'
import { SessionEnd } from '@/components/learning/SessionEnd'

export default function GrammarPracticePage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <GrammarPracticeSession />
    </Suspense>
  )
}

function GrammarPracticeSession() {
  const searchParams = useSearchParams()
  const patternId = searchParams.get('patternId') ?? ''
  const pattern = grammarByLevelAll.find(g => g.id === patternId)
  const exercises = grammarExercisesByPatternId[patternId] ?? []

  const { phase, currentExercise, progress, stats, submitFillBlank, submitDiscriminate, submitProduce, next, restart } =
    useGrammarPractice(exercises)

  if (exercises.length === 0) {
    return (
      <div className="h-screen bg-bg-base flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-text-secondary">Mẫu ngữ pháp này chưa có bài tập luyện tập.</p>
        <a href="/learn/grammar" className="text-sm text-accent-coral hover:underline">
          ← Quay lại Ngữ pháp
        </a>
      </div>
    )
  }

  if (phase === 'completed' && stats) {
    return <SessionEnd stats={stats} onRetry={() => restart(exercises)} />
  }

  if (!currentExercise) {
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
        <a
          href="/learn/grammar"
          className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Thoát"
        >
          <X className="w-5 h-5" />
        </a>
        {pattern && (
          <span lang="ko" className="font-korean text-xs font-medium text-accent-coral shrink-0">
            {pattern.pattern}
          </span>
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

      {/* Exercise */}
      <div className="flex-1 flex items-center justify-center px-6 py-6 overflow-y-auto">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <GrammarExercisePlayer
            exercise={currentExercise}
            onSubmitFillBlank={submitFillBlank}
            onSubmitDiscriminate={submitDiscriminate}
            onSubmitProduce={submitProduce}
            onNext={next}
          />
        </motion.div>
      </div>
    </div>
  )
}
