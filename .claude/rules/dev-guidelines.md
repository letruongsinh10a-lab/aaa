# Development Guidelines

## Performance Targets

- Lighthouse score: **95+ on all metrics** (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.2s
- Initial JS bundle: < 150kb (gzipped)
- Images: WebP/AVIF format, always `next/image` with `loading="lazy"` and `placeholder="blur"`
- Audio: `preload="metadata"` only — never `preload="auto"`
- Code splitting: happens automatically per route with App Router; keep page components lean

## Accessibility (WCAG 2.1 AA)

- All interactive elements must be keyboard-reachable
- Focus visible at all times: `outline-2 outline-offset-2 outline-accent-coral`
- Color contrast ratio > 4.5:1 for all text
- Korean text always has `lang="ko"` so screen readers use the correct voice
- `aria-label` on icon-only buttons
- Flashcard keyboard shortcuts documented in visible UI (not just hidden)

## Mobile-First

- All layouts designed mobile-first, expanded at `md:` and `lg:`
- Touch targets minimum **44×44px** — never smaller for tappable elements
- Flashcard swipe: left (again/hard) / right (good/easy) via touch events
- Bottom navigation on mobile instead of sidebar (≤ `md` breakpoint)
- Haptic feedback: call `navigator.vibrate()` on correct/wrong if available

```tsx
// Haptic on correct answer
if ('vibrate' in navigator) navigator.vibrate(50)
// Haptic on wrong answer
if ('vibrate' in navigator) navigator.vibrate([80, 30, 80])
```

## File Structure

```
src/
  app/
    (marketing)/     — public pages with Header + Footer
    (app)/           — authenticated pages with Sidebar
    (focus)/         — full-screen pages (no chrome)
    api/             — API route handlers
  components/        — see component-patterns.md
  lib/
    db/              — Drizzle schema + query helpers
    srs/             — SM-2 algorithm
    auth/            — Supabase session helpers
    audio/           — Web Audio API utilities
    motion.ts        — shared Framer Motion variants
    fonts.ts         — next/font instances
    utils.ts         — cn(), formatNumber(), formatDuration(), slugify()
  hooks/
    useScrolled.ts   — detects scroll past N px (Header glass effect)
    useMobile.ts     — breakpoint hook
  stores/
    uiStore.ts       — Zustand: sidebarOpen, theme
  types/
    index.ts         — all shared TypeScript types
  data/              — static vocab/grammar/course arrays

public/
  audio/             — word-[id]-native.mp3
  images/
    courses/         — course-topik1-thumb.webp
    illustrations/   — landing page illustrations
```

## Naming Conventions

```
Components:   PascalCase.tsx
Hooks:        useXxx.ts
Stores:       xxxStore.ts
Types:        types/index.ts (single file unless very large)
API routes:   app/api/[resource]/route.ts
Data files:   data/vocab-topik1.ts
Audio files:  audio/word-[id]-native.mp3
Images:       images/course-topik1-thumb.webp
```

## TypeScript

- `strict: true` at all times — no `@ts-ignore` unless absolutely unavoidable (comment why)
- Prefer type over interface for data models
- Use discriminated unions for `LessonContent` (by `lesson.type`)
- No `any` — use `unknown` + type narrowing if truly needed

## Environment Variables

Template: `.env.local.example`. Copy to `.env.local` and fill in Supabase keys before running the app.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never commit `.env.local`. It is in `.gitignore`.

## Running the Project

```bash
npm run dev          # dev server with Turbopack
npm run build        # production build
npm run type-check   # tsc --noEmit (no emit, just type errors)
npm run lint         # Next.js ESLint
```
