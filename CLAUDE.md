# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server on :3000 (Turbopack)
npm run build        # production build
npm run type-check   # tsc --noEmit
npm run lint         # Next.js ESLint
npm run db:push      # drizzle-kit push — applies src/lib/db/schema.ts to Supabase Postgres
```

No test runner is configured yet (Vitest/Playwright listed in package.json as future deps but not installed).

## Architecture

### Route Groups

Four layouts:

| Group | Shell | URL prefix |
|---|---|---|
| `(marketing)` | Header + Footer | `/` |
| `(app)` | Sidebar (240px) | `/learn`, `/courses`, `/topik`, `/vocab`, `/vocab/chu-de`, `/settings` |
| `(focus)` | No chrome | `/learn/flashcards`, `/learn/grammar/practice`, `/learn/grammar/review`, `/learn/listening/practice` |
| `(auth)` | Own centered layout (`(auth)/layout.tsx`) | `/login`, `/signup`, `/forgot-password`, `/reset-password` |

`src/app/auth/callback/route.ts` sits outside all route groups — it's the OAuth/PKCE redirect target (`?next=` param controls post-auth destination), not a page.

### Auth & Sync — Supabase, but localStorage stays the source of truth for guests

Auth is fully wired (`src/middleware.ts` → `updateSession()` in `src/lib/supabase/middleware.ts` refreshes the session cookie on every request; `src/lib/supabase/client.ts` / `server.ts` are the browser/server Supabase clients via `@supabase/ssr`). But **the SRS engine still reads/writes localStorage first** — Supabase is a sync target layered on top, not a replacement:

- `src/stores/authStore.ts` — Zustand, deliberately **not** `persist()`-wrapped. The Supabase browser client already persists the session; a second localStorage copy would be a second source of truth to reconcile.
- `src/components/providers/AuthProvider.tsx` (mounted in `Providers.tsx`) — owns the `onAuthStateChange` subscription. On `SIGNED_IN` it calls `reconcileOnSignIn()`; on window focus / `visibilitychange` while authenticated it calls `syncIfSignedIn()` (best-effort, never awaited by UI).
- `src/lib/srs/sync.ts` — the merge logic. `reconcileOnSignIn()` branches on **whether the account already has server rows**, not on signup-vs-login (Google OAuth doesn't distinguish those): empty server → local guest progress becomes the seed and gets pushed; non-empty server → per-card merge keyed by `lastReviewed` timestamp, XP/streak/heatmap merged by max. If a *different* account was last synced on this device, local data is wiped first (`resetLocalProgress()`) so one user's guest progress can never leak into another account. Runtime talks to Supabase via `supabase-js` directly (RLS-gated), not through Drizzle — row shapes are hand-mapped snake_case ↔ camelCase in this file.
- `src/lib/db/schema.ts` — Drizzle schema for `profiles`, `srs_entries`, `activity_heatmap`, used only by `drizzle-kit` (`npm run db:push`) to manage the Postgres schema. **No runtime code imports Drizzle.** It declares a 1-column stub `auth.users` table purely so `profiles.id` can carry a typed FK — `drizzle.config.ts` sets `schemaFilter: ['public']` specifically so `push` never diffs that stub against Supabase's real `auth.users` (which would attempt to alter Supabase's own auth schema). `drizzle-kit generate` does **not** respect that filter — never apply its raw output without checking for a stray `CREATE TABLE "auth"."users"` first.
- `src/lib/db/rls.sql` — RLS policies + the `handle_new_user()` `SECURITY DEFINER` trigger that creates a `profiles` row on signup.
- `DATABASE_URL` must use Supabase's **Session Pooler** host (`aws-0-<region>.pooler.supabase.com:5432`, user `postgres.<project-ref>`), not the "Direct connection" host — the direct host is IPv6-only and unreachable from most local/CI environments.

### Data Layer — localStorage (offline-first)

The SRS engine, user progress, streak, XP, and heatmap all live in `localStorage` by default (see Auth & Sync above for how this reconciles with Supabase once signed in).

Three storage keys:
- `han-ngu-srs` — `Record<cardId, SRSEntry>` (interval, ease factor, due date per card)
- `han-ngu-user` — `LocalUser` (xp, streak, level, daily counts)
- `han-ngu-heatmap` — `Record<isoDate, xp>` (for the GitHub-style calendar)

All read/write goes through `src/lib/srs/store.ts`. The SM-2 algorithm is in `src/lib/srs/sm2.ts`. `store.ts` also exports `awardXP(amount)` — a standalone XP grant fully decoupled from SRS scheduling, used by non-flashcard XP sources (grammar exercises, listening completion) that have no `SRSEntry` to attach to.

### Flashcard Session State Machine

A review session is a separate in-memory state machine from the SRS store — understanding a session requires reading three files together:

- `src/lib/srs/session.ts` — pure functions over `SessionState` (`createSession`, `recordRating`, `pauseSession`/`resumeSession`, `completeSession`, `getSessionProgress`). Lapsed cards (`again`) are re-inserted 3–5 positions ahead in the queue, not reviewed immediately.
- `src/hooks/useFlashcardSession.ts` — wraps `session.ts` in React state. On each rating it calls `store.ts`'s `reviewCard()`, which internally runs `calculateNextReview()` (sm2.ts) and persists the updated SRS entry + XP/streak side effects. The hook also calls `sm2.ts`'s `createNewEntry()`/`isMature()` directly, before writing, to snapshot whether the card was new/mature for session stats. The session queue and the persisted SRS entries are updated independently — the queue only orders what's shown *this session*.
- `src/app/(focus)/learn/flashcards/page.tsx` — consumes the hook; owns flip state and keyboard shortcuts.

The same "pure queue reducer + hook + page" shape is reused for grammar exercises (`useGrammarPractice.ts` + `GrammarExercisePlayer.tsx`), but with a `pending` field in the reducer state that separates *recording an answer* from *advancing the queue* — submitting an answer must not change `currentExercise` until the user has seen the right/wrong feedback and clicked "Tiếp theo".

### Vocab / Grammar / Listening Data

Static TypeScript arrays — no DB query needed. None of the three are organized the same way, and none of them use TOPIK-level files despite what older docs/rules describe:

- **Vocab** — two independent, non-overlapping datasets:
  - `src/data/vocab-topik2/day-{01..60}.ts` — TOPIK II, ~1,710 words split by study day (gaps at 19/26/31). Barrel exports `vocabTopik2Days` and `vocabTopik2All`. Powers `/vocab`, the flashcard page, and `useDashboard.ts`.
  - `src/data/vocab-by-topic/*.ts` — ~55 files, one per real-world topic (`du-lich.ts`, `benh-vien.ts`, `mua-sam.ts`, etc.), barrel at `src/data/vocab-by-topic/index.ts`. Powers `/vocab/chu-de` only.
  - There is **no** `vocab-topik1.ts` / topik3–6 file and no unified TOPIK-level vocab barrel — don't assume `@/data/vocab` resolves to anything.
- **Grammar** — `src/data/grammar-by-level/{so-cap,trung-cap,cao-cap}.ts` (3 proficiency tiers, not 6 TOPIK levels) is the **only dataset actually used**, via its barrel `grammarByLevelList`/`grammarByLevelAll` in `src/data/grammar-by-level/index.ts`. `src/app/(app)/learn/grammar/page.tsx` and the practice/review focus pages import from there.
  - `src/data/grammar/{topik1..topik6}.ts` (+ its `index.ts` barrel) still exists on disk but **nothing imports it anymore** — the TOPIK 1–6 tab UI that used to read it was removed. Don't extend this dataset; extend `grammar-by-level/` instead.
  - `src/data/grammar-exercises/{so-cap,...}.ts` — fill-blank/discriminate/produce exercises keyed by `patternId`, barrel exports `grammarExercisesByPatternId`. Consumed by `/learn/grammar/practice`. Grading logic lives in `src/lib/exercises/grade.ts`.
- **Listening** — `src/data/listening/{so-cap,...}.ts`, one `ListeningDialogue[]` per level, barrel `listeningByLevelList`/`listeningByLevelAll` in `src/data/listening/index.ts`. Only `so-cap` is populated (5 dialogues) — a deliberate pilot scope, not a bug. Audio is **not** pre-recorded: `src/hooks/useSpeechSynthesis.ts` wraps the browser's Web Speech API (`speechSynthesis`) to generate Korean TTS at playback time, so there are no files under `public/audio/` for this feature and no `onboundary`-timestamp data to author — karaoke highlighting is computed live from the `charIndex` the browser reports.
- `src/data/courses.ts` — static course metadata for `/courses` (no `lessons` populated yet).

### Type Naming — camelCase, not snake_case

The types in `src/types/index.ts` use **camelCase**, which differs from the snake_case shown in some documentation:

```ts
// Correct (actual code)
card.meaningVi   card.topikLevel   card.frequencyRank   card.pos
entry.intervalDays   entry.easeFactor   entry.dueDate

// Wrong (old docs)
card.meaning_vi  card.topik_level  card.frequency_rank
```

`LessonContent`-style data (`GrammarExercise`, `ListeningDialogue`/`DialogueLine`) follows the discriminated-union-by-`type` convention — see `GrammarExercise` (`'fill-blank' | 'discriminate' | 'produce'`) in `src/types/index.ts` for the pattern to copy.

### Key Files

| File | Purpose |
|---|---|
| `src/lib/srs/sm2.ts` | SM-2 algorithm: `calculateNextReview()`, `getXP()` |
| `src/lib/srs/session.ts` | In-memory review session state machine (queue, pause/resume, stats) |
| `src/lib/srs/store.ts` | localStorage CRUD: `reviewCard()`, `getDueCards()`, `touchStreak()`, `awardXP()` |
| `src/lib/srs/sync.ts` | Supabase push/pull/merge for signed-in users — see Auth & Sync |
| `src/lib/supabase/{client,server,middleware}.ts` | `@supabase/ssr` client factories for browser / server components / middleware |
| `src/lib/db/schema.ts` | Drizzle schema (dev-only — `db:push` target, never imported at runtime) |
| `src/hooks/useFlashcardSession.ts` | Wires `session.ts` + `sm2.ts` + `store.ts` into one hook for the flashcard page |
| `src/hooks/useGrammarPractice.ts` | Same shape as `useFlashcardSession`, for grammar exercises |
| `src/hooks/useSpeechSynthesis.ts` | Browser TTS wrapper (voice selection, rate, karaoke `charIndex`) for the listening feature |
| `src/hooks/useDashboard.ts` | Reads all localStorage state for the dashboard; re-fetches on window focus |
| `src/stores/authStore.ts` | Zustand auth state — no `persist()`, session lives in the Supabase client instead |
| `src/lib/motion.ts` | Shared Framer Motion variants — `fadeUp`, `stagger()`, `viewportOnce`, `spring.*` |
| `src/lib/fonts.ts` | `next/font` instances — `instrumentSerif`, `plusJakartaSans`, `notoSansKR` |
| `src/types/index.ts` | All shared TypeScript types — never redefine inline |
| `src/data/vocab-topik2/`, `src/data/vocab-by-topic/` | The two (unrelated) vocab datasets — see Vocab/Grammar/Listening Data |
| `src/data/grammar-by-level/` | The grammar dataset actually in use (`src/data/grammar/` is dead code) |

### What's Actually Built

- **SRS engine** — fully functional, localStorage-backed, SM-2 with XP + streak, syncs to Supabase for signed-in users
- **Auth** — email/password + Google OAuth via Supabase, signup email-confirmation flow, forgot/reset password, guest→account progress merge on sign-in
- **Flashcard session** `/learn/flashcards` — 3D flip, keyboard shortcuts (Space/1–4), haptic feedback, session end screen
- **Dashboard** `/learn` — live stats from localStorage, due card count, activity heatmap
- **Vocab** `/vocab` (TOPIK II 60-day deck) and `/vocab/chu-de` (55 real-world topics) — two separate browse/search UIs over the two vocab datasets
- **Grammar** `/learn/grammar` — 3-tier (Sơ/Trung/Cao cấp) patterns with examples + common mistakes, plus a practice mode (`/learn/grammar/practice`) with graded fill-blank/discriminate/produce exercises
- **Listening (pilot)** `/learn/listening` — 5 Sơ cấp dialogues, browser-TTS playback with speed control + karaoke transcript, no waveform/recording yet
- **Landing page** — all 7 sections complete
- **Courses / TOPIK pages** — UI scaffolded, static data

### Not Built Yet

- Reading, speaking modules
- AI pronunciation scoring
- Leaderboard (data layer missing)
- TOPIK mock test flow (`/topik/[id]`)
- Listening content beyond the Sơ cấp pilot (Trung/Cao cấp dialogues, recording + waveform comparison)

## Conventions

- Use `cn()` from `src/lib/utils.ts` for all conditional Tailwind classes
- Korean text always needs `lang="ko"` + `font-korean` class (Noto Sans KR) — see `.claude/rules/korean-text.md`
- Use `buttonVariants()` for `<Link>` styled as button; use `<Button>` for click handlers
- Motion variants from `src/lib/motion.ts` — never inline spring configs
- Add new providers to `src/components/providers/Providers.tsx` (single client boundary)
