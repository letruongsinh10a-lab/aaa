# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server on :3000 (Turbopack)
npm run build        # production build
npm run type-check   # tsc --noEmit
npm run lint         # Next.js ESLint
```

No test runner is configured yet (Vitest/Playwright listed in package.json as future deps but not installed).

## Architecture

### Route Groups

Three layouts, zero auth middleware yet:

| Group | Shell | URL prefix |
|---|---|---|
| `(marketing)` | Header + Footer | `/`, `/pricing`, `/about` |
| `(app)` | Sidebar (240px) | `/learn`, `/courses`, `/topik`, `/vocab` |
| `(focus)` | No chrome | `/learn/flashcards`, `/topik/[id]`, `/learn/speaking` |

### Data Layer — localStorage (no backend yet)

The SRS engine, user progress, streak, XP, and heatmap all live in `localStorage`. **Supabase is not wired up yet.**

Three storage keys:
- `han-ngu-srs` — `Record<cardId, SRSEntry>` (interval, ease factor, due date per card)
- `han-ngu-user` — `LocalUser` (xp, streak, level, daily counts)
- `han-ngu-heatmap` — `Record<isoDate, xp>` (for the GitHub-style calendar)

All read/write goes through `src/lib/srs/store.ts`. The SM-2 algorithm is in `src/lib/srs/sm2.ts`.

### Flashcard Session State Machine

A review session is a separate in-memory state machine from the SRS store — understanding a session requires reading three files together:

- `src/lib/srs/session.ts` — pure functions over `SessionState` (`createSession`, `recordRating`, `pauseSession`/`resumeSession`, `completeSession`, `getSessionProgress`). Lapsed cards (`again`) are re-inserted 3–5 positions ahead in the queue, not reviewed immediately.
- `src/hooks/useFlashcardSession.ts` — wraps `session.ts` in React state. On each rating it calls `store.ts`'s `reviewCard()`, which internally runs `calculateNextReview()` (sm2.ts) and persists the updated SRS entry + XP/streak side effects. The hook also calls `sm2.ts`'s `createNewEntry()`/`isMature()` directly, before writing, to snapshot whether the card was new/mature for session stats. The session queue and the persisted SRS entries are updated independently — the queue only orders what's shown *this session*.
- `src/app/(focus)/learn/flashcards/page.tsx` — consumes the hook; owns flip state and keyboard shortcuts.

### Vocab / Grammar Data

Static TypeScript arrays — no DB query needed. Vocab and grammar are **not symmetric**:

- **Vocab** — only one dataset exists: `src/data/vocab-topik2/day-{01..60}.ts` (TOPIK II, ~1,710 words, split by study day rather than by TOPIK level). Day numbers have gaps (19, 26, 31 are missing). The barrel `src/data/vocab-topik2/index.ts` exports `vocabTopik2Days: { day, words }[]` and `vocabTopik2All: VocabCard[]`. There is **no** `src/data/vocab-topik1.ts` or topik3/4/5/6 — `/vocab`, the flashcard page, and `useDashboard.ts` all import from `@/data/vocab-topik2` exclusively. Don't assume a per-level vocab barrel exists; check before importing `@/data/vocab`.
- **Grammar** — the one place that *is* organized per TOPIK level: `src/data/grammar/{topik1..topik6}.ts`, all 6 populated, re-exported by `src/data/grammar/index.ts`. `src/app/(app)/learn/grammar/page.tsx` imports all six level files directly (not the barrel).
- `src/data/courses.ts` — static course metadata for `/courses` (no `lessons` populated yet).

When adding vocab content for a new TOPIK level, there's no existing pattern to copy from `vocab-topik2/` other than its day-file + barrel shape — you're establishing the topik1/3/4/5/6 convention, not following one.

### Type Naming — camelCase, not snake_case

The types in `src/types/index.ts` use **camelCase**, which differs from the snake_case shown in some documentation:

```ts
// Correct (actual code)
card.meaningVi   card.topikLevel   card.frequencyRank   card.pos
entry.intervalDays   entry.easeFactor   entry.dueDate

// Wrong (old docs)
card.meaning_vi  card.topik_level  card.frequency_rank
```

### Key Files

| File | Purpose |
|---|---|
| `src/lib/srs/sm2.ts` | SM-2 algorithm: `calculateNextReview()`, `getXP()` |
| `src/lib/srs/session.ts` | In-memory review session state machine (queue, pause/resume, stats) |
| `src/lib/srs/store.ts` | localStorage CRUD: `reviewCard()`, `getDueCards()`, `touchStreak()` |
| `src/hooks/useFlashcardSession.ts` | Wires `session.ts` + `sm2.ts` + `store.ts` into one hook for the flashcard page |
| `src/hooks/useDashboard.ts` | Reads all localStorage state for the dashboard; re-fetches on window focus |
| `src/lib/motion.ts` | Shared Framer Motion variants — `fadeUp`, `stagger()`, `viewportOnce`, `spring.*` |
| `src/lib/fonts.ts` | `next/font` instances — `instrumentSerif`, `plusJakartaSans`, `notoSansKR` |
| `src/types/index.ts` | All shared TypeScript types — never redefine inline |
| `src/data/vocab-topik2/` | Day-based (01–60) vocab static data + barrel — the only vocab dataset that exists |
| `src/data/grammar/` | Per-TOPIK-level (1–6) static data, plus `index.ts` barrel |

### What's Actually Built

- **SRS engine** — fully functional, localStorage-backed, SM-2 with XP + streak
- **Flashcard session** `/learn/flashcards` — 3D flip, keyboard shortcuts (Space/1–4), haptic feedback, session end screen
- **Dashboard** `/learn` — live stats from localStorage, due card count, activity heatmap
- **Vocab page** `/vocab` — search/filter over the TOPIK II 60-day deck only (no TOPIK level filter — see Vocab/Grammar Data above)
- **Grammar page** `/learn/grammar` — all 6 TOPIK levels, pattern + examples + common mistakes
- **Landing page** — all 7 sections complete
- **Courses / TOPIK pages** — UI scaffolded, static data

### Not Built Yet

- Supabase auth (no `/login`, `/signup`, no middleware)
- Listening, reading, speaking modules
- AI pronunciation scoring
- Leaderboard (data layer missing)
- TOPIK mock test flow (`/topik/[id]`)

## Conventions

- Use `cn()` from `src/lib/utils.ts` for all conditional Tailwind classes
- Korean text always needs `lang="ko"` + `font-korean` class (Noto Sans KR)
- Use `buttonVariants()` for `<Link>` styled as button; use `<Button>` for click handlers
- Motion variants from `src/lib/motion.ts` — never inline spring configs
- Add new providers to `src/components/providers/Providers.tsx` (single client boundary)
