'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, Zap, PartyPopper } from 'lucide-react'
import { grammarByLevelAll } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import { ShadowRecorder } from '@/components/learning/ShadowRecorder'
import { awardXP } from '@/lib/srs/store'
import type { ProduceExercise } from '@/types'

const XP_PER_EXERCISE = 8

export default function SpeakingPracticePage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <SpeakingPracticeSession />
    </Suspense>
  )
}

function SpeakingPracticeSession() {
  const searchParams = useSearchParams()
  const patternId = searchParams.get('patternId') ?? ''
  const pattern = grammarByLevelAll.find(g => g.id === patternId)
  const exercises = (grammarExercisesByPatternId[patternId] ?? []).filter(
    (e): e is ProduceExercise => e.type === 'produce'
  )

  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [completed, setCompleted] = useState(false)

  if (exercises.length === 0) {
    return (
      <div className="h-screen bg-bg-base flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-text-secondary">Mẫu ngữ pháp này chưa có bài luyện nói.</p>
        <Link href="/learn/speaking" className="text-sm text-accent-coral hover:underline">
          ← Quay lại Luyện nói
        </Link>
      </div>
    )
  }

  function handleSubmit(correct: boolean) {
    if (correct) setCorrectCount(c => c + 1)
    awardXP(XP_PER_EXERCISE)
  }

  function handleNext() {
    if (index + 1 < exercises.length) {
      setIndex(i => i + 1)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    return (
      <div className="h-screen bg-bg-base flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="text-center max-w-md w-full"
        >
          <PartyPopper className="w-14 h-14 text-accent-amber mx-auto mb-6" />
          <h1 className="font-serif text-[44px] font-normal text-text-primary mb-2">Xong rồi!</h1>
          <p className="text-text-secondary mb-8">
            Bạn vừa nói {exercises.length} câu · {correctCount}/{exercises.length} tự đánh giá ổn ·{' '}
            <span className="text-accent-amber">+{exercises.length * XP_PER_EXERCISE} XP</span>
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/learn/speaking"
              className="px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all"
            >
              Mẫu khác
            </Link>
            <button
              onClick={() => { setIndex(0); setCorrectCount(0); setCompleted(false) }}
              className="px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors"
            >
              Luyện lại
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-bg-base flex flex-col select-none overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 h-16 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <Link
          href="/learn/speaking"
          className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Thoát"
        >
          <X className="w-5 h-5" />
        </Link>
        {pattern && (
          <span lang="ko" className="font-korean text-xs font-medium text-accent-coral shrink-0">
            {pattern.pattern}
          </span>
        )}
        <div className="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-coral rounded-full"
            animate={{ width: `${((index) / exercises.length) * 100}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-text-tertiary shrink-0">
          {index} / {exercises.length}
        </span>
      </div>

      {/* Recorder */}
      <div className="flex-1 flex items-center justify-center px-6 py-6 overflow-y-auto">
        <motion.div
          key={exercises[index].id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <ShadowRecorder exercise={exercises[index]} onSubmit={handleSubmit} onNext={handleNext} />
        </motion.div>
      </div>
    </div>
  )
}
