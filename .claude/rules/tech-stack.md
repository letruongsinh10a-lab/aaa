# Tech Stack

## Core

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | File-based routing, server components, route groups |
| Styling | Tailwind CSS v3 | Extended with design tokens in `tailwind.config.ts` |
| Animation | Framer Motion v11 | Page transitions, scroll reveals, micro-interactions |
| State | Zustand v5 | UI state only (`uiStore.ts`). Persisted via `persist` middleware |
| Database | Supabase | PostgreSQL + Auth + Realtime |
| ORM | Drizzle ORM | Schema in `src/lib/db/` |
| Language | TypeScript strict mode | `strict: true` in `tsconfig.json` |
| Deployment | Vercel | |
| Testing | Vitest (unit) + Playwright (e2e) | |

## Package Versions (from package.json)

```
next: ^15.0.0
react / react-dom: ^19.0.0
framer-motion: ^11.0.0
zustand: ^5.0.0
tailwindcss: ^3.4.0
lucide-react: ^0.460.0
clsx: ^2.1.0
tailwind-merge: ^2.5.0
typescript: ^5.0.0
playwright: ^1.60.0
```

## Icons

Use **Lucide React** exclusively. Do not import from other icon libraries. Keep icon sizes consistent: `w-4 h-4` for inline, `w-5 h-5` for standalone.

## Charts / Data Visualization

Use **Recharts** for dashboard progress charts, or custom SVG for simple indicators. Do not add a charting library until the feature is being built.

## 3D / Canvas

**Spline** or **Three.js** for the hero section floating card animation. Only add this dependency when implementing the hero.

## Fonts

Loaded in `src/lib/fonts.ts` using `next/font/google`. Never use `<link>` CDN imports.

```ts
instrumentSerif  // heading — variable imported as font-serif
plusJakartaSans  // body/UI — imported as font-sans
notoSansKR       // Korean — imported as font-korean, preload: false
```

## What NOT to use

- No UI component libraries (MUI, shadcn, Chakra, etc.) — build from Tailwind to preserve design control
- No Redux / Context for UI state — Zustand only
- No CSS-in-JS (styled-components, emotion)
- No jQuery or non-React DOM manipulation
