import type { FillBlankExercise, DiscriminateExercise, GrammarExercise, SRSRating } from '@/types'

export function normalizeKo(s: string): string {
  return s.trim().replace(/\s+/g, ' ')
}

export function gradeFillBlank(exercise: FillBlankExercise, userAnswer: string): boolean {
  return normalizeKo(userAnswer) === normalizeKo(exercise.answer)
}

export function gradeDiscriminate(exercise: DiscriminateExercise, selectedIndex: number): boolean {
  return selectedIndex === exercise.correctIndex
}

/**
 * Map a grammar-exercise attempt to an SM-2 rating for SRS scheduling.
 * fill-blank/discriminate use useGrammarPractice's requeue-until-correct
 * behavior, so by the time a session completes they were always eventually
 * answered correctly — first-attempt success is what separates 'good' from
 * 'hard'. produce exercises never requeue (self-rated, single-shot), so a
 * wrong self-rating has no "eventually correct" signal and maps to 'again'.
 */
export function deriveSRSRating(exerciseType: GrammarExercise['type'], firstAttemptCorrect: boolean): SRSRating {
  if (firstAttemptCorrect) return 'good'
  return exerciseType === 'produce' ? 'again' : 'hard'
}

/** Pick one exercise at random from a pattern's pool — varies the retrieval cue across review sessions instead of always showing the same question. */
export function pickReviewExercise(exercises: GrammarExercise[]): GrammarExercise | undefined {
  if (exercises.length === 0) return undefined
  return exercises[Math.floor(Math.random() * exercises.length)]
}
