# Feature Architecture

## 1. Flashcard Engine — SRS (Spaced Repetition)

Algorithm: **SM-2 modified**. Implementation in `src/lib/srs/`.

```ts
type FlashcardSession = {
  card: VocabCard
  mode: 'recognition' | 'recall' | 'typing'
  showRomaja: boolean
  showHint: boolean
}

type SRSRating = 'again' | 'hard' | 'good' | 'easy'
```

**UI spec:**
- Card fills 60vh, centered, subtle depth illusion
- Front: Korean word at 64px (`font-korean font-bold`), audio play button
- Back: Vietnamese meaning (20px), romanization (18px, `font-mono`), 3 example sentences
- Flip: 3D `rotateY` animation via Framer Motion, `spring.smooth`
- Rating buttons: Again (red) / Hard (yellow) / Good (green) / Easy (blue)
- Keyboard: `Space` = flip, `1` = Again, `2` = Hard, `3` = Good, `4` = Easy, `→` = next

**Route:** `(focus)/learn/flashcards` — no Sidebar, full-screen

**Session end screen:**
- Confetti animation
- Stats: cards reviewed, accuracy %, time in minutes
- XP earned (animated count-up)
- CTA: Continue or Back to Dashboard

## 2. Vocabulary System

Data in `src/data/vocab-topik[1-6].ts`. Structure per `VocabCard` type in `src/types/index.ts`.

Part-of-speech values: `noun | verb | adj | adv | particle | expression`

Frequency rank: 1 = most common. Sort vocab lists by frequency unless overridden.

## 3. Grammar Cards

Each pattern card: **Pattern → Meaning → Examples (3) → Common mistakes → Related patterns**

Display grammar pattern in a distinct style:
- Pattern formula: `font-mono text-accent-korean` (e.g. `V + 아/어서`)
- Animate each sentence part individually with `SentenceHighlight`

## 4. Listening — Shadowing Mode

Custom audio player (`AudioPlayer.tsx`):
- Waveform visualization (SVG or Web Audio API)
- Speed control: 0.5x / 0.75x / 1x / 1.25x
- Loop section (set in/out points)
- Transcript toggle (hidden by default — reveal to check)
- Karaoke highlight: current word highlighted as audio plays
- Record self + visual waveform comparison

## 5. Reading Practice

- Passages graded TOPIK 1→6, stored in `src/data/reading/`
- Hover any word → vocab popup (meaning + "Add to SRS" button)
- Grammar patterns in the passage are color-coded by type
- Comprehension questions at the end (multiple choice)

## 6. Speaking — Pronunciation Check

- `navigator.mediaDevices.getUserMedia` for recording
- Compare user waveform vs. native waveform (visual overlay)
- Phoneme accuracy score (0–100)
- Specific feedback per phoneme (e.g. "ㄹ needs more lateral flap")

## 7. TOPIK Practice

Route: `(app)/topik` (list) → `(focus)/topik/[id]` (full-screen test)

- Full mock test with countdown timer
- Detailed answer explanations after submit
- Weakness analysis: which grammar/vocab areas to review
- Score history chart (Recharts)

## Gamification System

```ts
type UserProgress = {
  streak_days: number
  total_xp: number
  level: number       // 1–50
  badges: Badge[]
  hearts: number      // optional lives mode
  league: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
}
```

**Korean level titles:**
- Lv1–9: 초보자 (Newbie)
- Lv10–19: 학생 (Student)
- Lv20–34: 선생님 (Teacher)
- Lv35–49: 학자 (Scholar)
- Lv50: 한국어 마스터 (Korean Master)

**Streak rules:**
- Animated fire (`StreakDisplay`) when streak > 0
- Streak Shield item: can freeze streak for 1 day (earned, not bought by default)
- Weekly friend leaderboard resets every Monday

**XP rules:**
- Flashcard correct: +10 XP
- Lesson complete: +50 XP
- Perfect score: +25 XP bonus
- Daily goal options: 100 / 150 / 200 XP (user sets in settings)
- Streak multiplier: ×1.5 after 7+ consecutive days
