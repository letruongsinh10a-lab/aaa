# Design System

## Identity

Style: **Dark Premium + Warm Accent** — inspired by Linear, Vercel, Raycast.
Every screen must feel like a Silicon Valley product. Premium. Characterful. Screenshot-worthy.

## Color Tokens

All colors are defined as CSS custom properties in `src/app/globals.css` and as Tailwind aliases in `tailwind.config.ts`. Always use token names, never raw hex.

```
Dark mode (default):
  bg-base       #0A0A0F   — near-black, slightly violet
  bg-surface    #111118   — card background
  bg-elevated   #1A1A24   — dropdowns, popovers
  bg-border     rgba(255,255,255,0.08)

  text-primary  #F0EEF8   — off-white (not pure white)
  text-secondary #9B99AF
  text-tertiary  #5C5A6E  — placeholder, disabled

  accent-coral  #FF6B4A   — primary CTA, progress bars
  accent-warm   #FFB347   — streak, achievements
  accent-success #4ADE80  — correct answer
  accent-error  #F87171   — wrong answer
  accent-korean #6C8EEF   — Korean text highlight

Light mode (toggle):
  bg-base-light    #F8F7FF
  bg-surface-light #FFFFFF
  text-primary-light #0A0A1A
  accent-primary-light #E85D3F
```

## Typography

Three font families — loaded via `src/lib/fonts.ts` using `next/font/google`.

| Role | Font | Usage |
|---|---|---|
| Headings | Instrument Serif | Display, H1–H3 |
| Body / UI | Plus Jakarta Sans | Body text, captions, nav |
| Korean | Noto Sans KR | All Korean characters |

Scale:
- **Display**: 80–120px, weight 300, tracking `-0.03em`, line-height 1.05
- **H1**: 56–72px, weight 400, tracking `-0.025em`
- **H2**: 40–52px, tracking `-0.02em`
- **H3**: 28–36px
- **Body**: 16px, line-height 1.7
- **Caption**: 12px, weight 500, `letter-spacing: 0.1em`, UPPERCASE

Tailwind classes: `font-serif` (Instrument Serif), `font-sans` (Plus Jakarta Sans), `font-korean` (Noto Sans KR).

## Spacing

Use Tailwind's default scale — it maps 1:1 with the 4px grid:
- `space-1` = 4px, `space-4` = 16px (base), `space-6` = 24px, `space-8` = 32px
- Section gaps: `py-24` to `py-40` (`96px`–`160px`)
- Content max-width: `max-w-[1200px]` with `px-6 lg:px-16`

Do not add arbitrary padding. More whitespace, not less.

## Animation

Import from `src/lib/motion.ts`. Never inline spring configs — use these shared presets:

```ts
spring.snappy  — { stiffness: 400, damping: 30 }  // UI responses
spring.smooth  — { stiffness: 200, damping: 25 }  // section reveals
spring.gentle  — { stiffness: 100, damping: 20 }  // large elements
spring.bounce  — { stiffness: 300, damping: 15 }  // celebrations

fadeUp         — scroll reveal: opacity 0→1, y 32→0
cardHover      — lift -4px + border brightens on hover
stagger()      — staggerChildren: 0.08s for lists
viewportOnce   — { once: true, amount: 0 }  // trigger immediately on enter
```

Every interactive element must have a micro-animation. Scroll reveals use `whileInView` with `viewportOnce`.

## UI Component Rules

**Border radius**
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Tags / badges: `rounded-full`
- Inputs: `rounded-none`

**Shadows** — never use heavy `box-shadow`. Use `border 1px` (low opacity) + `backdrop-blur` for depth.

**Buttons**
- Primary: `bg-accent-coral text-white`, hover: 10% lighter
- Secondary: transparent bg + `border 1px`, hover: `bg-elevated`
- Ghost: text only, hover: underline

**Cards** — `bg-surface` + `border border-[rgba(255,255,255,0.08)]`, hover: border → `0.16`, lift `-4px`

**Inputs** — border-bottom only (1px) or full border at low opacity. No background fill.

**Focus states** — always visible: `outline-2 outline-offset-2 outline-accent-coral`. Non-negotiable for accessibility.

**Gradients** — only in hero section and accent elements. Never decorate every card with gradients.

**Glassmorphism** — use sparingly (backdrop-blur + low-opacity bg). Not on every surface.
