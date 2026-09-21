import type { GrammarExercise } from '@/types'
import { grammarExercisesSoCap } from './so-cap'
import { grammarExercisesTrungCap } from './trung-cap'
import { grammarExercisesCaoCap } from './cao-cap'

export const grammarExercisesAll: GrammarExercise[] = [
  ...grammarExercisesSoCap,
  ...grammarExercisesTrungCap,
  ...grammarExercisesCaoCap,
]

export const grammarExercisesByPatternId: Record<string, GrammarExercise[]> = grammarExercisesAll.reduce(
  (acc, ex) => {
    (acc[ex.patternId] ??= []).push(ex)
    return acc
  },
  {} as Record<string, GrammarExercise[]>
)
