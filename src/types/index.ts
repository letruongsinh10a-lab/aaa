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

// formal = 합니다/합쇼체 · polite = 해요체 · casual = 반말 · written = văn viết/평서형 (câu kết thúc bằng -다)
export type GrammarRegister = 'formal' | 'polite' | 'casual' | 'written'

export interface GrammarExample {
  ko: string
  vi: string
  // Cả hai optional — chỉ populate đầy đủ cho Sơ cấp tính đến nay (xem
  // grammar-content-audit-2026-09-20 trong memory); UI phải tự ẩn dòng
  // phiên âm/badge văn phong khi thiếu, không coi là lỗi dữ liệu.
  romanization?: string
  register?: GrammarRegister
}

export interface GrammarConjugationRow {
  stemType: string    // 'Quy tắc', 'ㅂ bất quy tắc', 'ㄷ bất quy tắc', '르 bất quy tắc', '으 bất quy tắc', 'ㅎ bất quy tắc'
  baseForm: string    // '춥다'
  conjugated: string  // '추워서'
}

export interface GrammarRelatedRef {
  id: string
  distinction: string // 1 câu ngắn: khác mẫu đang xem ở điểm nào
}

export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: GrammarExample[]
  commonMistakes: string[]
  level: GrammarLevelGroup
  section: string
  sectionOrder: number
  sectionTitleVi: string
  // Optional — only populated where a genuine confusable/paired pattern is
  // known. Not yet backfilled across all 271 legacy entries; existing code
  // must treat absence as "no known related patterns", not as an error.
  relatedPatterns?: GrammarRelatedRef[]
  // Optional — only meaningful for patterns whose ending starts with a vowel
  // (아/어, (으)) where irregular stems (ㅂ/ㄷ/르/ㅅ/ㅎ/으-drop) change form.
  conjugationTable?: GrammarConjugationRow[]
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

// Luyện nghe (shadowing) — hệ phân loại riêng, tách biệt với GrammarLevelGroup/
// TOPIKLevel dù cùng dùng tên Sơ/Trung/Cao cấp, vì đây là nội dung độc lập.
export type ListeningLevel = 'so-cap' | 'trung-cap' | 'cao-cap'

export interface DialogueLine {
  speaker: 'A' | 'B'
  ko: string
  vi: string
}

export interface ListeningDialogue {
  id: string
  level: ListeningLevel
  titleVi: string
  descVi: string
  lines: DialogueLine[]
}

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
