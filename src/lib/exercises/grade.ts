import type { FillBlankExercise, DiscriminateExercise } from '@/types'

export function normalizeKo(s: string): string {
  return s.trim().replace(/\s+/g, ' ')
}

export function gradeFillBlank(exercise: FillBlankExercise, userAnswer: string): boolean {
  return normalizeKo(userAnswer) === normalizeKo(exercise.answer)
}

export function gradeDiscriminate(exercise: DiscriminateExercise, selectedIndex: number): boolean {
  return selectedIndex === exercise.correctIndex
}
