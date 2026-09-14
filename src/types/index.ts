// ─── Domain ─────────────────────────────────────────────────────────────────

export type TOPIKLevel = 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adj'
  | 'adv'
  | 'particle'
  | 'expression'
  | 'counter'
  | 'determiner'

export type CutGroup = 'premium-grill' | 'special-cuts' | 'soup-braised'

export interface ExampleSentence {
  ko: string
  vi: string
  en?: string
  audioUrl?: string
}

export interface VocabCard {
  id: string
  word: string
  romanization: string
  meaningVi: string
  meaningEn?: string
  pos: PartOfSpeech
  topikLevel?: TOPIKLevel
  frequencyRank: number
  examples: ExampleSentence[]
  audioUrl?: string
  imageUrl?: string
  tags: string[]
  // Ngày học (bộ "Từ mới TOPIK II", chia theo 60 ngày)
  day?: number
  dayOrder?: number
  // Chủ đề (bộ "Từ vựng TOPIK theo chủ đề")
  topic?: string
  topicOrder?: number
  pronunciationIrregular?: string
  conjugation?: string[]
  relatedPhrases?: string[]
  structure?: string[]
  synonyms?: string[]
  antonyms?: string[]
  relatedWords?: string[]
  extraNotes?: { label: string; text: string }[]
}

export interface GrammarPattern {
  id: string
  pattern: string
  meaningVi: string
  topikLevel: TOPIKLevel
  usageNotes: string
  examples: ExampleSentence[]
  commonMistakes: string[]
  relatedPatterns: string[]
}

// Ngữ pháp theo cấp độ Sơ/Trung/Cao cấp (bộ "Ngữ pháp tiếng Hàn Sơ-Trung-Cao cấp")
// — hệ phân loại song song, tách biệt với TOPIKLevel/grammarTopikN hiện có.
export type GrammarLevelGroup = 'so-cap' | 'trung-cap' | 'cao-cap'

export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level: GrammarLevelGroup
  section: string
  sectionOrder: number
  sectionTitleVi: string
}

// Bài tập luyện tập cho mỗi mẫu ngữ pháp Sơ/Trung/Cao cấp — tầng dữ liệu riêng,
// tham chiếu GrammarEntry qua patternId, tách biệt hoàn toàn khỏi SRS review.
export type GrammarExerciseType = 'fill-blank' | 'discriminate' | 'produce'

interface GrammarExerciseBase {
  id: string
  patternId: string
}

export interface FillBlankExercise extends GrammarExerciseBase {
  type: 'fill-blank'
  promptVi: string
  sentenceKo: string
  answer: string
  hintVi?: string
}

export interface DiscriminateExercise extends GrammarExerciseBase {
  type: 'discriminate'
  promptVi: string
  sentenceKo: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ProduceExercise extends GrammarExerciseBase {
  type: 'produce'
  promptVi: string
  modelAnswerKo: string
  modelAnswerVi: string
}

export type GrammarExercise = FillBlankExercise | DiscriminateExercise | ProduceExercise

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  level: TOPIKLevel
  thumbnailUrl: string
  vocabCount: number
  grammarCount: number
  lessonCount: number
  estimatedHours: number
  isFree: boolean
  lessons?: Lesson[]
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  order: number
  type: 'vocab' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'test'
  xpReward: number
  estimatedMinutes: number
}

// ─── User / Auth ─────────────────────────────────────────────────────────────

export interface User {
  id: string
  email: string
  username: string
  displayName: string
  avatarUrl?: string
  level: number
  xp: number
  streakDays: number
  streakFreezeCount: number
  lastStudyDate: string | null
  timezone: string
  createdAt: string
}

export interface SRSEntry {
  userId: string
  cardId: string
  intervalDays: number
  easeFactor: number
  dueDate: string
  reviewCount: number
  lapseCount: number
  lastReviewed: string
}

// SRS rating (SM-2 modified)
export type SRSRating = 'again' | 'hard' | 'good' | 'easy'

// ─── UI ──────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type BadgeVariant = 'default' | 'coral' | 'success' | 'warning' | 'info'
