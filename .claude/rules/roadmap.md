# Roadmap

## Phase 1 — MVP (current)

- [x] Next.js 15 scaffold with App Router, Tailwind, Framer Motion, Zustand
- [x] Design system: tokens in `globals.css` + `tailwind.config.ts`
- [x] Base UI components: Button (+ buttonVariants), Card, Badge, Skeleton
- [x] Layout components: Header (glass-on-scroll), Footer, Sidebar (active states)
- [x] Route groups: `(marketing)`, `(app)`, `(focus)`
- [x] Landing page — all 7 sections (Hero, Problem, Method, Features, Courses, Proof, Pricing)
- [x] Dashboard `/learn` — stats row, due cards CTA, activity heatmap placeholder
- [x] Flashcard session `/learn/flashcards` — 3D flip, keyboard shortcuts, SRS rating buttons
- [x] Courses page `/courses` — level badges, free/pro indicators
- [x] TOPIK practice center `/topik` — mock test list, stats row
- [x] Shared motion variants in `src/lib/motion.ts`
- [x] Sample data: `src/data/courses.ts`, `src/data/flashcards.ts`
- [ ] Auth — Supabase login/signup (`/login`, `/signup` pages + middleware)
- [ ] Real SRS engine — SM-2 implementation in `src/lib/srs/`
- [ ] TOPIK 1 vocab dataset — 500 words in `src/data/vocab-topik1.ts`
- [ ] Streak + XP system wired to real user data
- [ ] Profile page `/profile/[username]`

## Phase 2

- [ ] Listening / Shadowing module (`/learn/listening`)
- [ ] Reading with hover-vocab popup (`/learn/reading`)
- [ ] Mock TOPIK full test flow (`/topik/[id]` focus page)
- [ ] Complete course structure: all 6 levels + EPS-TOPIK content
- [ ] Global + friend leaderboard (`/leaderboard`)
- [ ] PWA / offline mode (service worker, Workbox)
- [ ] Course detail pages (`/courses/[slug]`)

## Phase 3

- [ ] AI pronunciation scoring (Web Audio + server-side phoneme analysis)
- [ ] Speaking practice module (`/learn/speaking` focus page)
- [ ] Friend / social system
- [ ] Mobile app (React Native + Expo, or Capacitor wrapping the PWA)
- [ ] Analytics dashboard for admins (content performance, user drop-off)

## Dev Server

```bash
cd han-ngu
npm run dev    # Turbopack, port 3000
```

Copy `.env.local.example` → `.env.local` and fill in Supabase keys before building auth features.
