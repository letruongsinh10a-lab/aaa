# Data Models

All types are defined in `src/types/index.ts`. Never redefine them inline — always import from there.

## Core Types

```ts
type TOPIKLevel = 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'particle' | 'expression'
type SRSRating = 'again' | 'hard' | 'good' | 'easy'
type League = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
```

## User

```ts
type User = {
  id: string
  email: string
  username: string
  display_name: string
  avatar_url?: string
  level: number
  xp: number
  streak_days: number
  streak_freeze_count: number
  last_study_date: string   // ISO date string
  timezone: string          // e.g. "Asia/Ho_Chi_Minh"
  created_at: string
}
```

## VocabCard

```ts
type VocabCard = {
  id: string
  word: string              // 한국어
  romanization: string      // han-guk-eo
  meaning_vi: string        // Vietnamese meaning
  meaning_en?: string
  part_of_speech: PartOfSpeech
  topik_level: TOPIKLevel
  frequency_rank: number    // 1 = most frequent
  example_sentences: ExampleSentence[]
  audio_url: string         // native speaker MP3
  image_url?: string
  tags: string[]
}

type ExampleSentence = {
  korean: string
  romanization: string
  meaning_vi: string
}
```

## SRSEntry (per user per card)

```ts
type SRSEntry = {
  user_id: string
  card_id: string
  interval_days: number
  ease_factor: number       // SM-2: starts at 2.5
  due_date: string          // ISO date
  review_count: number
  lapse_count: number
  last_reviewed: string     // ISO datetime
}
```

## GrammarPattern

```ts
type GrammarPattern = {
  id: string
  pattern: string           // e.g. "V + 아/어서"
  meaning_vi: string
  topik_level: TOPIKLevel
  usage_notes: string
  examples: ExampleSentence[]
  common_mistakes: string[]
  related_patterns: string[] // IDs
}
```

## Course

```ts
type Course = {
  id: string
  slug: string              // URL slug e.g. "topik-1"
  title: string
  description: string
  level: TOPIKLevel
  thumbnail_url: string
  vocab_count: number
  grammar_count: number
  lesson_count: number
  estimated_hours: number
  is_free: boolean
  lessons: Lesson[]
}
```

## Lesson

```ts
type Lesson = {
  id: string
  course_id: string
  title: string
  order: number
  type: 'vocab' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'test'
  content: LessonContent    // discriminated union by type
  xp_reward: number
  estimated_minutes: number
}
```

## Content Structure

Course content plan:
```
TOPIK 1 (Free):  한글 + 500 vocab + 30 grammar patterns
TOPIK 2 (Free):  700 vocab + 40 grammar patterns
TOPIK 3 (Pro):   1000 vocab + 50 grammar patterns
TOPIK 4 (Pro):   1200 vocab + 60 grammar patterns
TOPIK 5 (Pro):   1500 vocab + 70 grammar patterns
TOPIK 6 (Pro):   2000 vocab + 80 grammar patterns
EPS-TOPIK (Pro): Labor vocab + full mock tests
```

## Static Data Files

Vocab and grammar content is stored as static TypeScript arrays (no DB required until Phase 2):

```
src/data/vocab-topik1.ts
src/data/vocab-topik2.ts
src/data/grammar-topik1.ts
src/data/courses.ts           ← already exists
src/data/flashcards.ts        ← 5 sample cards, already exists
```

Drizzle schema (Phase 2+) lives in `src/lib/db/schema.ts`.
