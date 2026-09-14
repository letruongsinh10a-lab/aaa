import type { GrammarExercise } from '@/types'
import { grammarExercisesSoCap } from './so-cap'

export const grammarExercisesAll: GrammarExercise[] = [...grammarExercisesSoCap]

export const grammarExercisesByPatternId: Record<string, GrammarExercise[]> = grammarExercisesAll.reduce(
  (acc, ex) => {
    (acc[ex.patternId] ??= []).push(ex)
    return acc
  },
  {} as Record<string, GrammarExercise[]>
)
