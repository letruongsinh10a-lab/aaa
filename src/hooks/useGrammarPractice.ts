'use client'

import { useCallback, useReducer } from 'react'
import type { DiscriminateExercise, FillBlankExercise, GrammarExercise, ProduceExercise } from '@/types'
import { gradeDiscriminate, gradeFillBlank } from '@/lib/exercises/grade'
import { awardXP } from '@/lib/srs/store'

const XP_AUTO_GRADED = 5
const XP_PRODUCE = 3

export type PracticePhase = 'active' | 'completed'

export interface PracticeStats {
  totalCards: number
  correct: number
  xpEarned: number
  accuracy: number
}

interface PendingOutcome {
  isCorrect: boolean
  requeue: boolean
}

interface PracticeState {
  total: number
  queue: GrammarExercise[]
  firstAttempt: Record<string, boolean>
  xpEarned: number
  phase: PracticePhase
  pending: PendingOutcome | null
}

type Action =
  | { type: 'answer'; isCorrect: boolean; xp: number; requeue: boolean }
  | { type: 'advance' }
  | { type: 'restart'; exercises: GrammarExercise[] }

/** How many positions ahead to re-insert a missed exercise (2–3 later) — same active-recall idea as session.ts's lapse re-insert, tuned for a short drill instead of a long queue. */
function reinsertOffset(): number {
  return 2 + Math.floor(Math.random() * 2)
}

function init(exercises: GrammarExercise[]): PracticeState {
  return {
    total: exercises.length,
    queue: exercises,
    firstAttempt: {},
    xpEarned: 0,
    phase: exercises.length > 0 ? 'active' : 'completed',
    pending: null,
  }
}

function reducer(state: PracticeState, action: Action): PracticeState {
  if (action.type === 'restart') return init(action.exercises)

  const current = state.queue[0]

  if (action.type === 'answer') {
    if (!current || state.pending) return state
    const firstAttempt = current.id in state.firstAttempt
      ? state.firstAttempt
      : { ...state.firstAttempt, [current.id]: action.isCorrect }
    return {
      ...state,
      firstAttempt,
      xpEarned: state.xpEarned + (action.isCorrect ? action.xp : 0),
      pending: { isCorrect: action.isCorrect, requeue: action.requeue },
    }
  }

  // 'advance' — actually move the queue forward based on the recorded outcome
  if (!current || !state.pending) return state
  const rest = state.queue.slice(1)
  let queue = rest
  if (!state.pending.isCorrect && state.pending.requeue) {
    const insertAt = Math.min(reinsertOffset(), rest.length)
    queue = [...rest.slice(0, insertAt), current, ...rest.slice(insertAt)]
  }

  return {
    ...state,
    queue,
    pending: null,
    phase: queue.length === 0 ? 'completed' : 'active',
  }
}

export interface UseGrammarPracticeResult {
  phase: PracticePhase
  currentExercise: GrammarExercise | undefined
  progress: { done: number; total: number; percent: number }
  stats: PracticeStats | null
  submitFillBlank: (exercise: FillBlankExercise, userAnswer: string) => boolean
  submitDiscriminate: (exercise: DiscriminateExercise, selectedIndex: number) => boolean
  submitProduce: (exercise: ProduceExercise, selfCorrect: boolean) => void
  next: () => void
  restart: (exercises: GrammarExercise[]) => void
}

export function useGrammarPractice(exercises: GrammarExercise[]): UseGrammarPracticeResult {
  const [state, dispatch] = useReducer(reducer, exercises, init)

  const submitFillBlank = useCallback((exercise: FillBlankExercise, userAnswer: string) => {
    const isCorrect = gradeFillBlank(exercise, userAnswer)
    if (isCorrect) awardXP(XP_AUTO_GRADED)
    dispatch({ type: 'answer', isCorrect, xp: XP_AUTO_GRADED, requeue: true })
    return isCorrect
  }, [])

  const submitDiscriminate = useCallback((exercise: DiscriminateExercise, selectedIndex: number) => {
    const isCorrect = gradeDiscriminate(exercise, selectedIndex)
    if (isCorrect) awardXP(XP_AUTO_GRADED)
    dispatch({ type: 'answer', isCorrect, xp: XP_AUTO_GRADED, requeue: true })
    return isCorrect
  }, [])

  const submitProduce = useCallback((_exercise: ProduceExercise, selfCorrect: boolean) => {
    awardXP(XP_PRODUCE)
    dispatch({ type: 'answer', isCorrect: selfCorrect, xp: XP_PRODUCE, requeue: false })
  }, [])

  const next = useCallback(() => {
    dispatch({ type: 'advance' })
  }, [])

  const restart = useCallback((exercisesNext: GrammarExercise[]) => {
    dispatch({ type: 'restart', exercises: exercisesNext })
  }, [])

  const remainingUnique = new Set(state.queue.map(e => e.id)).size
  const done = state.total - remainingUnique
  const progress = {
    done,
    total: state.total,
    percent: state.total > 0 ? Math.round((done / state.total) * 100) : 0,
  }

  const stats: PracticeStats | null = state.phase === 'completed'
    ? (() => {
        const correct = Object.values(state.firstAttempt).filter(Boolean).length
        return {
          totalCards: state.total,
          correct,
          xpEarned: state.xpEarned,
          accuracy: state.total > 0 ? Math.round((correct / state.total) * 100) : 0,
        }
      })()
    : null

  return {
    phase: state.phase,
    currentExercise: state.queue[0],
    progress,
    stats,
    submitFillBlank,
    submitDiscriminate,
    submitProduce,
    next,
    restart,
  }
}
