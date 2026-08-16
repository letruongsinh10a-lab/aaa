# Component Patterns

## Directory Structure

```
src/components/
  layout/
    Header.tsx          — Fixed, glass-on-scroll (useScrolled hook), AnimatePresence mobile menu
    Footer.tsx
    Sidebar.tsx         — 240px, active states via usePathname, streak display
  providers/
    Providers.tsx       — Client wrapper: add Auth, Toast, etc. here
  ui/
    Button.tsx          — Variants: primary | secondary | ghost | danger + buttonVariants() helper
    Card.tsx            — CardHeader, CardContent, CardFooter sub-exports
    Badge.tsx           — Variants: default | success | warning | korean
    Progress.tsx        — bar + ring variants
    Avatar.tsx          — with level ring
    Skeleton.tsx        — loading states
    Tooltip.tsx         — custom, animated
    Modal.tsx           — slide-up mobile / centered desktop
    Toast.tsx           — top-right, XP notification
  learning/
    FlashCard.tsx       — 3D rotateY flip (Framer Motion), 60vh centered
    CardRating.tsx      — Again / Hard / Good / Easy (keyboard: 1–4)
    AudioPlayer.tsx     — waveform visualization, custom controls
    GrammarCard.tsx     — pattern + examples + common mistakes
    SentenceHighlight.tsx — colored grammar parts
    PronunciationMeter.tsx — accuracy score display
  gamification/
    StreakDisplay.tsx   — animated fire + day count
    XPBar.tsx           — animated fill on earn
    LevelBadge.tsx      — with Korean title overlay
    ActivityHeatmap.tsx — GitHub-style 52-week calendar
    Leaderboard.tsx     — rank list with delta indicators
    AchievementToast.tsx — popup on badge earn
  dashboard/
    StatsRow.tsx        — 4-number stat cards
    DueCards.tsx        — SRS queue widget + CTA
    LessonContinue.tsx  — resume last lesson card
    ProgressChart.tsx   — Recharts line chart
  landing/
    HeroSection.tsx
    FeatureGrid.tsx     — 3-col glassmorphism cards
    CoursePreview.tsx   — horizontal scroll mobile / 3-col desktop
    PricingTable.tsx    — 3 tiers, Pro has coral glow border
    SocialProof.tsx     — streak counter + activity feed
```

## Button Pattern — `buttonVariants()`

Export both `Button` (for actions) and `buttonVariants()` (for styling `<Link>` as a button). Never wrap `<Link>` in `<Button>`.

```tsx
// For navigation — use Link + buttonVariants
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'

<Link href="/signup" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
  Đăng ký
</Link>

// For actions — use Button
import { Button } from '@/components/ui/Button'
<Button variant="primary" onClick={handleSubmit}>Lưu</Button>
```

`buttonVariants` accepts `{ variant, size, className }`. The `className` prop merges via `cn()`.

## Card Sub-exports

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'

<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

## Adding a Provider

Wrap in `src/components/providers/Providers.tsx`. This is the single client boundary for all top-level providers.

```tsx
'use client'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" />
    </>
  )
}
```

## Animation on Components

- Use `motion.div` from Framer Motion; import variants from `src/lib/motion.ts`
- Scroll reveals: `<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>`
- Card hover: use `whileHover` with `cardHover` variant
- Staggered lists: wrap in `motion.div` with `staggerContainer` variant

## `cn()` Utility

Always use `cn()` from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional classes.

```tsx
import { cn } from '@/lib/utils'
<div className={cn('base-class', condition && 'conditional-class', className)} />
```

## Naming Conventions

```
Components:   PascalCase.tsx
Hooks:        useXxx.ts
Stores:       xxxStore.ts
Types:        src/types/xxx.ts
API routes:   src/app/api/xxx/route.ts
Data files:   src/data/vocab-topik1.ts
Audio files:  public/audio/word-[id]-native.mp3
Images:       public/images/course-topik1-thumb.webp
```
