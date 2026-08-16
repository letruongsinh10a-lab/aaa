# Korean Text Handling

## Always Use `lang="ko"`

Every element that renders Korean characters must have `lang="ko"`. This is required for correct screen reader pronunciation and font rendering.

```tsx
<span lang="ko" className="font-korean">안녕하세요</span>
<p lang="ko" className="font-korean korean-vocab">사랑</p>
```

Never render Korean text inside a generic `<span>` or `<p>` without the `lang` attribute.

## Font Class

Use `font-korean` (Tailwind alias for Noto Sans KR) on all Korean text containers. The alias is defined in `tailwind.config.ts` and the font is loaded in `src/lib/fonts.ts`.

```tsx
// Correct
<span lang="ko" className="font-korean text-4xl font-bold">한국어</span>

// Wrong — will fall back to system font
<span>한국어</span>
```

## Font Loading

Noto Sans KR is loaded with `preload: false` to avoid eagerly downloading the full Korean character set on page load.

```ts
// src/lib/fonts.ts
import { Noto_Sans_KR } from 'next/font/google'

export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,  // do not change — avoids 500kb blocking download
})
```

## Korean Typography Scale

```
korean-display  — 700, 48–64px, line-height 1.2  — vocabulary hero
korean-body     — 400, 18px,    line-height 1.8   — reading passages
korean-vocab    — 700, 24–32px, line-height 1.3   — flashcard front face
```

Apply via Tailwind: combine `font-korean` with standard size utilities (`text-4xl`, `text-2xl`, etc.).

## Romanization

Display romanization (e.g. "han-guk-eo") in `font-mono` (JetBrains Mono), 13px. This visually separates it from both the Korean word and the Vietnamese meaning.

```tsx
<span className="font-mono text-sm text-text-secondary">{card.romanization}</span>
```

## Accent Color for Korean Text

Use `text-accent-korean` (`#6C8EEF`) to highlight Korean words inline within Vietnamese/English sentences — for example in grammar explanations or reading passages with word popups.

```tsx
<span lang="ko" className="font-korean text-accent-korean">{word}</span>
```

## Example Sentences

Always show three parts for each example sentence:

1. Korean sentence (`lang="ko"`, `font-korean`)
2. Romanization (`font-mono`, muted)
3. Vietnamese meaning (`font-sans`, text-secondary)

Keep them vertically stacked with `space-y-1`.
