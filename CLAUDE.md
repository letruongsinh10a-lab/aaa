# Hàn Ngữ — World-Class Korean Learning Platform

## Phân tích đối thủ: nhaitopik.com

### Điểm yếu cần vượt qua

| Vấn đề | Mô tả |
|---|---|
| Quá text-heavy | Không có ảnh, icon, illustration — trông như wiki |
| Không có visual identity | Màu sắc flat, thiếu cá tính thương hiệu |
| Zero micro-interaction | Không có animation, hover, transition — cảm giác tĩnh và chết |
| Typography nghèo nàn | Font system sans-serif generic, không có hierarchy rõ |
| CTA yếu | Không có nút kêu gọi hành động nổi bật, không có urgency |
| Không có progress/gamification | Người dùng không thấy tiến trình, không có lý do quay lại |
| Mobile experience kém | Layout chưa được tối ưu cho mobile |
| Thiếu cảm xúc | Không tạo được cảm giác hứng khởi khi học |

### Benchmark thế giới cần đạt

- **Duolingo**: Gamification, streak, mascot, delight animations
- **Linear.app**: Dark theme premium, pixel-perfect spacing, keyboard-first
- **Drops app**: Visual vocabulary learning, beautiful UI, minimalist
- **Brilliant.org**: Interactive learning, progress visualization, premium feel
- **Vercel.com**: Dark + light mode, bold typography, developer-grade polish
- **Framer.com**: Animation quality, modern layout, hero sections

---

## Project Overview

Platform học tiếng Hàn cao cấp dành cho người Việt — kết hợp phương pháp học khoa học (Spaced Repetition, comprehensible input) với thiết kế đẳng cấp thế giới.

**Tagline**: *"Học tiếng Hàn như người Hàn."*

**Triết lý thiết kế**: Mỗi màn hình phải cảm thấy như một sản phẩm Silicon Valley, không phải một trang web giáo dục Việt Nam thông thường. Premium. Có tính cách. Đáng để screenshot.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion — dùng cho page transitions, scroll reveals, micro-interactions
- **3D / Canvas**: Three.js hoặc Spline (cho hero section nếu cần)
- **State management**: Zustand (nhẹ, đủ dùng)
- **Database**: Supabase (PostgreSQL + Auth + Realtime)
- **ORM**: Drizzle ORM
- **Fonts**:
  - `Instrument Serif` — heading editorial (thay Cormorant, hiện đại hơn)
  - `Plus Jakarta Sans` — body, UI text (clean, legible)
  - `Noto Sans KR` — Korean text
- **Icons**: Lucide React (consistent, minimal)
- **Charts/Progress**: Recharts hoặc custom SVG
- **Language**: TypeScript strict mode
- **Deployment**: Vercel
- **Testing**: Vitest + Playwright

---

## Design System

### Design Language

**Tên style**: *"Dark Premium + Warm Accent"*

Lấy cảm hứng từ Linear, Vercel, Raycast:
- Nền tối làm chủ đạo (dark mode first) — tạo cảm giác tập trung, premium
- Accent màu ấm (coral/gold) — khác hẳn blue/green nhàm chán của ed-tech
- Typography lớn và táo bạo — headlines chiếm không gian
- Nhiều khoảng trắng — không nhồi nhét
- Glassmorphism tinh tế — cards với backdrop-blur, không lạm dụng
- Border rất mỏng (1px, opacity thấp) — tạo depth không cần shadow nặng
- Gradient chỉ dùng ở hero và accent — không dùng đại trà
- Micro-animations ở mọi interactive element

### Color Palette

```
/* Dark Mode (default) */
--bg-base:       #0A0A0F    /* near-black, hơi tím */
--bg-surface:    #111118    /* card background */
--bg-elevated:   #1A1A24    /* elevated elements */
--bg-border:     rgba(255,255,255,0.08)  /* subtle border */

--text-primary:  #F0EEF8    /* off-white, không chói */
--text-secondary:#9B99AF    /* muted text */
--text-tertiary: #5C5A6E    /* disabled / placeholder */

--accent-primary:  #FF6B4A  /* coral — CTA, progress */
--accent-warm:     #FFB347  /* amber — achievement, streak */
--accent-success:  #4ADE80  /* green — correct answer */
--accent-error:    #F87171  /* red — wrong answer */
--accent-korean:   #6C8EEF  /* blue — Korean text highlight */

--gradient-hero: linear-gradient(135deg, #FF6B4A22, #6C8EEF22)
--gradient-card: linear-gradient(180deg, #1A1A24, #111118)

/* Light Mode (optional toggle) */
--bg-base-light:    #F8F7FF
--bg-surface-light: #FFFFFF
--text-primary-light: #0A0A1A
--accent-primary-light: #E85D3F
```

### Typography

```css
/* Headings — Instrument Serif */
.display {
  font: 300 80–120px/1.05 'Instrument Serif';
  letter-spacing: -0.03em;
}
.h1 { font: 400 56–72px/1.1 'Instrument Serif'; letter-spacing: -0.025em; }
.h2 { font: 400 40–52px/1.15 'Instrument Serif'; letter-spacing: -0.02em; }
.h3 { font: 400 28–36px/1.2 'Instrument Serif'; }

/* Body — Plus Jakarta Sans */
.body-lg { font: 400 18px/1.75 'Plus Jakarta Sans'; }
.body    { font: 400 16px/1.7 'Plus Jakarta Sans'; }
.body-sm { font: 400 14px/1.6 'Plus Jakarta Sans'; }
.caption { font: 500 12px/1.4 'Plus Jakarta Sans'; letter-spacing: 0.1em; text-transform: uppercase; }
.mono    { font: 400 13px/1.6 'JetBrains Mono'; }  /* Korean romanization */

/* Korean — Noto Sans KR */
.korean-display { font: 700 48–64px/1.2 'Noto Sans KR'; }
.korean-body    { font: 400 18px/1.8 'Noto Sans KR'; }
.korean-vocab   { font: 700 24–32px/1.3 'Noto Sans KR'; }
```

### Spacing Scale

```
4px   →  space-1   (micro gap)
8px   →  space-2   (tight)
12px  →  space-3
16px  →  space-4   (base)
24px  →  space-6
32px  →  space-8
48px  →  space-12
64px  →  space-16
96px  →  space-24  (section gap)
128px →  space-32
160px →  space-40  (hero padding)
```

### Animation Principles

```typescript
// Spring configs — dùng nhất quán
export const spring = {
  snappy:  { type: 'spring', stiffness: 400, damping: 30 },
  smooth:  { type: 'spring', stiffness: 200, damping: 25 },
  gentle:  { type: 'spring', stiffness: 100, damping: 20 },
  bounce:  { type: 'spring', stiffness: 300, damping: 15 },
}

// Scroll reveal — dùng cho mọi section
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: spring.smooth },
}

// Card hover — tất cả cards
export const cardHover = {
  rest:  { y: 0, borderColor: 'rgba(255,255,255,0.08)' },
  hover: { y: -4, borderColor: 'rgba(255,255,255,0.16)' },
}

// Stagger container
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
```

### UI Rules

- **Border radius**: `rounded-xl` (12px) cho cards, `rounded-lg` (8px) cho buttons, `rounded-full` cho tags/badges, `rounded-none` cho inputs
- **Shadows**: Không dùng box-shadow đậm. Chỉ dùng `0 0 0 1px border` + backdrop-blur
- **Buttons**:
  - Primary: bg coral, text white, hover: sáng hơn 10%
  - Secondary: border 1px, transparent bg, hover: bg-elevated
  - Ghost: chỉ text, hover: underline
- **Inputs**: border-bottom only (1px) hoặc full border 1px opacity thấp, no background
- **Cards**: bg-surface, border 1px (rgba white 8%), hover: border 16%, lift -4px
- **Focus states**: outline 2px coral, offset 2px — luôn visible vì accessibility

---

## Feature Architecture

### Core Learning Features

#### 1. Flashcard Engine (Spaced Repetition)
```typescript
type FlashcardSession = {
  card: VocabCard
  mode: 'recognition' | 'recall' | 'typing'
  showRomaja: boolean
  showHint: boolean
}

// SRS algorithm: SM-2 modified
// Nút đánh giá: 4 mức — Again / Hard / Good / Easy
// Progress bar animated theo thời gian thực
// Sound effect tinh tế khi flip card
```

**UI Design:**
- Card chiếm 60vh, centered, có depth shadow ảo
- Flip animation 3D (rotateY) với Framer Motion
- Chữ Hàn to 64px, phiên âm 18px, nghĩa 20px
- Background card gradient subtle theo loại từ
- Keyboard shortcuts: Space (flip), 1-4 (rate), → (next)

#### 2. Vocabulary System
```typescript
type VocabCard = {
  id: string
  word: string           // 한국어
  romanization: string   // han-guk-eo
  meaning_vi: string     // tiếng Việt
  meaning_en?: string
  part_of_speech: 'noun' | 'verb' | 'adj' | 'adv' | 'particle' | 'expression'
  level: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
  frequency_rank: number  // 1 = phổ biến nhất
  example_sentences: ExampleSentence[]
  audio_url: string       // native speaker recording
  tags: string[]
  srs: SRSData
}
```

#### 3. Grammar Cards
- Mỗi pattern ngữ pháp có card riêng
- Structure: **Pattern** → **Meaning** → **Examples** (3 câu) → **Common mistakes**
- Animated diagram cho cấu trúc câu (highlight từng phần)
- Related patterns linked

#### 4. Listening — Shadowing Mode
- Audio player custom: waveform visualization
- Slow-down (0.5x, 0.75x, 1x, 1.25x)
- Loop từng đoạn
- Transcript toggle (ẩn/hiện để luyện nghe)
- Highlight từ đang được đọc (karaoke style)
- Record yourself + so sánh waveform

#### 5. Reading Practice
- Bài đọc phân cấp TOPIK 1→6
- Hover từ → popup card (nghĩa + thêm vào SRS)
- Grammar pattern highlighted với màu khác nhau
- Comprehension questions sau bài

#### 6. Speaking — Pronunciation Check
- Record giọng đọc
- So sánh với native speaker waveform
- Phoneme accuracy score
- Nhận xét cụ thể theo âm

#### 7. TOPIK Practice
- Full mock test với timer
- Giải thích đáp án chi tiết
- Phân tích điểm yếu sau mỗi bài
- Lịch sử điểm số qua thời gian (chart)

### Gamification System

```typescript
type UserProgress = {
  streak_days: number
  total_xp: number
  level: number            // 1–50 with custom Korean titles
  badges: Badge[]
  hearts: number           // lives system (optional mode)
  league: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
}

// Korean titles theo level:
// Lv1: 초보자 (Newbie) → Lv10: 학생 (Student) →
// Lv20: 선생님 (Teacher) → Lv35: 학자 (Scholar) →
// Lv50: 한국어 마스터 (Korean Master)
```

**Streak System:**
- Lửa animated khi streak > 0
- Freeze streak bằng "Streak Shield" (earned)
- Weekly leaderboard với bạn bè

**XP System:**
- Flashcard correct: 10 XP
- Lesson complete: 50 XP
- Perfect score: +25 XP bonus
- Daily goal: 100/150/200 XP tùy chọn
- Streak bonus: x1.5 sau 7 ngày

---

## Page Structure

### Routes

```
/                   → Landing page
/learn              → Dashboard (sau khi login)
/learn/flashcards   → SRS flashcard session
/learn/grammar      → Grammar lessons
/learn/listening    → Listening exercises
/learn/reading      → Reading passages
/learn/speaking     → Speaking practice
/courses            → Danh sách khóa học
/courses/[slug]     → Course detail
/topik              → TOPIK practice center
/vocab              → Vocab browser/search
/profile/[username] → Public profile
/settings           → User settings
/leaderboard        → Global/friend leaderboard
```

---

## Page Designs

### Landing Page (/)

#### Section 1 — Hero
```
Layout: Full viewport height, dark bg

Left side (60%):
  - CAPTION: "DÀNH CHO NGƯỜI VIỆT · CHUẨN HÀN QUỐC"
  - HEADLINE (display):
    "Học tiếng Hàn
    như người Hàn."
  - SUBTEXT (18px, muted): Phương pháp khoa học, thiết kế đẹp.
    Không cần giáo viên. Không cần lớp học.
  - CTA: [Bắt đầu miễn phí →]  [Xem demo ↓]
  - Social proof: "12,000+ học viên · 4.9★ đánh giá"

Right side (40%):
  - 3D floating card stack animation (Spline hoặc CSS 3D)
  - Cards hiển thị từ vựng 한국어, flip animated
  - Particle/glow effect phía sau

Background:
  - Subtle gradient mesh (coral + blue, opacity 15%)
  - Noise texture overlay
```

#### Section 2 — Problem Statement
```
Layout: Centered, max-w-3xl, py-40

CAPTION: "VẤN ĐỀ"
HEADLINE: "Tại sao học mãi không giỏi?"

3 pain points, layout horizontal:
  [Icon] Học vẹt, không nhớ được
  [Icon] Tài liệu nhàm chán, mất động lực
  [Icon] Không biết mình đang ở đâu

→ Transition smooth vào section solution
```

#### Section 3 — Solution / Method
```
Layout: Split 50/50, alternating

Block 1: 
  Left: Animated flashcard demo (autoplay)
  Right: "Ghi nhớ vĩnh viễn với Spaced Repetition"
  
Block 2:
  Left: "Học từ context, không học từ điển"
  Right: Demo câu ví dụ với highlight

Block 3:
  Left: Progress chart animated
  Right: "Thấy rõ tiến trình từng ngày"
```

#### Section 4 — Features Grid
```
Layout: 3-column grid, cards with glassmorphism

6 feature cards:
  🎴 Flashcard SRS
  🎧 Shadowing
  📖 Đọc hiểu
  🗣️ Luyện phát âm
  📝 Luyện thi TOPIK
  🏆 Bảng xếp hạng

Mỗi card: icon lớn + title + 1 dòng mô tả
Hover: lift + glow border
```

#### Section 5 — Courses Preview
```
Horizontal scroll on mobile, 3-column on desktop

Card design (khóa học):
  - Thumbnail (illustration, không phải ảnh người)
  - Badge: level (TOPIK 1-6 / Sơ cấp / Trung cấp)
  - Title
  - Progress bar (nếu đã đăng nhập)
  - "X từ vựng · Y ngữ pháp"
```

#### Section 6 — Streak / Social Proof
```
Full-width section, dark bg

Left: Animated streak counter (fire emoji lớn, số đếm)
Right: "12,847 học viên đang học hôm nay"
       Recent activity feed (tên ẩn: "N.V.A. vừa hoàn thành..."  )
```

#### Section 7 — Pricing
```
3 tiers: Free / Pro (99k/tháng) / Lifetime

Free: Flashcard cơ bản, 500 từ, 1 khóa học
Pro:  Tất cả, AI pronunciation, offline
Lifetime: Vĩnh viễn, early adopter giá tốt

Design: Card Pro có glow border coral, badge "Phổ biến nhất"
```

#### Section 8 — Footer
```
4-column: Logo + tagline | Links | Courses | Contact
Bottom bar: Copyright · Privacy · Terms
Korean text decoration: "한국어를 배워봐요 🇰🇷"
```

---

### Dashboard (/learn)

```
Layout: Sidebar (240px) + Main content

Sidebar:
  - User avatar + level badge
  - Streak fire (số ngày)
  - Navigation: Today / Flashcards / Grammar / Listening / Reading / Speaking / TOPIK
  - Daily goal progress ring
  - XP bar

Main content — Today view:
  Top: "Chào buổi sáng! Streak: 14 ngày 🔥"
  
  Row 1 (stats): XP hôm nay | Cards reviewed | Accuracy | Time studied
  
  Row 2: "Cần ôn tập" → N cards due (CTA nổi bật)
  
  Row 3: Continue last lesson
  
  Row 4: Suggested next (AI recommended)
  
  Row 5: Activity heatmap (GitHub-style, 52 tuần)
```

### Flashcard Session (/learn/flashcards)

```
Layout: Full screen, no distractions
  
Header: Progress bar (cards done / total) + X button + streak

Center: Card (large, flip animation)
  Front: Từ tiếng Hàn lớn + nút phát âm
  Back:  Nghĩa + phiên âm + câu ví dụ

Bottom: 4 nút đánh giá với màu và label rõ:
  [Quên rồi] [Khó] [Nhớ] [Dễ]
  (red)      (yellow)(green)(blue)

Corner: Settings — show/hide romaji, audio auto-play

Session end screen:
  Confetti animation
  Stats: X cards · Y% accuracy · Z minutes
  XP earned với animation số đếm
  CTA: "Tiếp tục" hoặc "Về dashboard"
```

---

## Component Patterns

```
components/
  layout/
    AppShell.tsx         # Sidebar + main layout cho logged-in
    MarketingLayout.tsx  # Header + footer cho landing
    Header.tsx           # Sticky, glass on scroll
    Sidebar.tsx          # Dashboard sidebar
    Footer.tsx
    
  ui/
    Button.tsx           # primary | secondary | ghost | danger
    Card.tsx             # base card với hover animation
    Badge.tsx            # level, tag, achievement
    Progress.tsx         # bar + ring variants
    Avatar.tsx           # với level ring
    Tooltip.tsx          # custom, animated
    Modal.tsx            # slide up on mobile, center on desktop
    Toast.tsx            # top-right, XP gain notification
    Skeleton.tsx         # loading states
    
  learning/
    FlashCard.tsx        # 3D flip card
    CardRating.tsx       # 4-button rating
    AudioPlayer.tsx      # custom waveform player
    GrammarCard.tsx      # pattern + examples
    SentenceHighlight.tsx # colored grammar parts
    PronunciationMeter.tsx # score display
    
  gamification/
    StreakDisplay.tsx     # fire + count
    XPBar.tsx            # animated fill
    LevelBadge.tsx       # with Korean title
    ActivityHeatmap.tsx  # GitHub-style calendar
    Leaderboard.tsx      # rank list
    AchievementToast.tsx # popup khi earn badge
    
  dashboard/
    StatsRow.tsx         # 4-number stats
    DueCards.tsx         # SRS queue widget
    LessonContinue.tsx   # resume card
    ProgressChart.tsx    # recharts line chart
    
  landing/
    HeroSection.tsx
    FeatureGrid.tsx
    CoursePreview.tsx
    PricingTable.tsx
    SocialProof.tsx
```

---

## Data Models

```typescript
// User
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
  last_study_date: string
  timezone: string
  created_at: string
}

// Vocab
type VocabCard = {
  id: string
  word: string
  romanization: string
  meaning_vi: string
  meaning_en?: string
  part_of_speech: PartOfSpeech
  topik_level: TOPIKLevel
  frequency_rank: number
  example_sentences: ExampleSentence[]
  audio_url: string
  image_url?: string
  tags: string[]
}

// SRS Data (per user per card)
type SRSEntry = {
  user_id: string
  card_id: string
  interval_days: number
  ease_factor: number
  due_date: string
  review_count: number
  lapse_count: number
  last_reviewed: string
}

// Grammar Pattern
type GrammarPattern = {
  id: string
  pattern: string        // e.g. "V + 아/어서"
  meaning_vi: string
  topik_level: TOPIKLevel
  usage_notes: string
  examples: ExampleSentence[]
  common_mistakes: string[]
  related_patterns: string[]
}

// Course
type Course = {
  id: string
  slug: string
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

// Lesson
type Lesson = {
  id: string
  course_id: string
  title: string
  order: number
  type: 'vocab' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'test'
  content: LessonContent
  xp_reward: number
  estimated_minutes: number
}
```

---

## Content Structure

### Courses

```
Sơ cấp 1 (TOPIK 1):    한글 + 500 từ + 30 mẫu ngữ pháp
Sơ cấp 2 (TOPIK 2):    700 từ + 40 mẫu ngữ pháp
Trung cấp 1 (TOPIK 3): 1000 từ + 50 mẫu ngữ pháp
Trung cấp 2 (TOPIK 4): 1200 từ + 60 mẫu ngữ pháp
Cao cấp 1 (TOPIK 5):   1500 từ + 70 mẫu ngữ pháp
Cao cấp 2 (TOPIK 6):   2000 từ + 80 mẫu ngữ pháp
EPS-TOPIK:             Từ vựng lao động + thi thử full
```

### Free vs Pro

```
Free:
  - TOPIK 1 + 2 toàn bộ
  - SRS cơ bản (unlimited cards)
  - Flashcard + Grammar
  - Leaderboard

Pro (99,000đ/tháng):
  - Tất cả 6 cấp + EPS
  - AI Pronunciation scoring
  - Shadowing với audio native
  - Mock TOPIK full test
  - Offline mode (PWA)
  - Analytics chi tiết
  - Priority support
```

---

## Development Guidelines

### Performance

- Lighthouse score mục tiêu: 95+ tất cả metrics
- First Contentful Paint < 1.2s
- Images: WebP/AVIF, lazy load, blur placeholder
- Audio: preload metadata, lazy load file
- Code splitting theo route
- Bundle size: < 150kb JS initial

### Accessibility

- WCAG 2.1 AA minimum
- Keyboard navigation đầy đủ (flashcard có shortcuts)
- Screen reader support cho Korean text (`lang="ko"`)
- Color contrast ratio > 4.5:1
- Focus visible luôn luôn

### Mobile

- Touch targets: minimum 44x44px
- Swipe gestures: left/right cho flashcard rating
- Bottom navigation trên mobile (thay sidebar)
- Haptic feedback cho correct/wrong answer (nếu có API)

### Korean Text

```tsx
// Luôn dùng lang attribute cho Korean
<span lang="ko" className="font-korean">안녕하세요</span>

// Font loading với next/font
import { Noto_Sans_KR } from 'next/font/google'
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false, // preload: true chỉ dùng subset Latin
})
```

### File Structure

```
src/
  app/                    # Next.js App Router
    (marketing)/          # Landing, pricing, about
    (app)/                # Auth-required pages
      learn/
      courses/
      topik/
      profile/
    api/                  # API routes
  components/             # Như trên
  lib/
    db/                   # Drizzle schema + queries
    srs/                  # SRS algorithm (SM-2)
    auth/                 # Supabase auth helpers
    audio/                # Audio processing
  hooks/                  # Custom React hooks
  stores/                 # Zustand stores
  types/                  # TypeScript types
  data/                   # Static content (vocab, grammar)
  styles/                 # Global CSS + Tailwind config

public/
  audio/                  # Korean pronunciation audio files
  images/
    courses/              # Course thumbnails
    illustrations/        # Landing page illustrations
```

### Naming Conventions

```
Components:   PascalCase.tsx
Hooks:        useXxx.ts
Stores:       xxxStore.ts
Types:        types/xxx.ts
API routes:   app/api/xxx/route.ts
Data files:   data/vocab-topik1.ts
Audio files:  audio/word-[id]-native.mp3
Images:       images/course-topik1-thumb.webp
```

---

## Visual Inspiration Keywords

Khi tạo components, hãy reference:
- **Linear.app** — dark UI, spacing, typography, border style
- **Raycast.com** — hero section, feature showcase
- **Vercel.com** — gradient accents, dark premium
- **Duolingo** — gamification mechanics, streak UI
- **Drops app** — vocabulary card design
- **Anki** — SRS methodology (nhưng không design)
- **Brilliant.org** — progress visualization, course structure

---

## Scaffold hiện tại (đã build)

Scaffold đã được tạo đầy đủ và `npm install` đã chạy. Chạy dev server: `npm run dev`.

### Cấu trúc file thực tế

```
han-ngu/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── .env.local.example        ← copy thành .env.local, điền Supabase keys
├── .gitignore
└── src/
    ├── app/
    │   ├── globals.css        ← Design tokens (CSS custom properties)
    │   ├── layout.tsx         ← Root layout: fonts + Providers
    │   ├── not-found.tsx      ← 404 page
    │   ├── (marketing)/       ← Route group: Header + Footer
    │   │   ├── layout.tsx
    │   │   └── page.tsx       ← Landing page (Hero + Features + CTA)
    │   └── (app)/             ← Route group: Sidebar layout (authenticated)
    │       ├── layout.tsx
    │       └── learn/
    │           └── page.tsx   ← Dashboard
    ├── components/
    │   ├── providers/
    │   │   └── Providers.tsx  ← Client providers wrapper (thêm Auth, Toast vào đây)
    │   ├── layout/
    │   │   ├── Header.tsx     ← Fixed, glass-on-scroll, mobile menu
    │   │   ├── Footer.tsx
    │   │   └── Sidebar.tsx    ← App sidebar với active states
    │   └── ui/
    │       ├── Button.tsx     ← + buttonVariants() helper cho <Link>
    │       ├── Card.tsx       ← + CardHeader, CardContent, CardFooter
    │       ├── Badge.tsx
    │       └── Skeleton.tsx
    ├── lib/
    │   ├── utils.ts           ← cn(), formatNumber(), formatDuration(), slugify()
    │   └── fonts.ts           ← Instrument Serif + Plus Jakarta Sans + Noto Sans KR
    ├── hooks/
    │   ├── useScrolled.ts     ← Header scroll detection
    │   └── useMobile.ts       ← Responsive breakpoint hook
    ├── stores/
    │   └── uiStore.ts         ← Zustand: sidebar, theme (persisted)
    └── types/
        └── index.ts           ← TOPIKLevel, VocabCard, GrammarPattern, Course, User, SRSEntry...
```

### Patterns quan trọng

#### Button với Link (dùng buttonVariants)
```tsx
// ĐÚNG — cho navigation buttons
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'

<Link href="/signup" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
  Đăng ký
</Link>

// ĐÚNG — cho actions
import { Button } from '@/components/ui/Button'
<Button variant="primary" onClick={handleSubmit}>Lưu</Button>
```

#### Thêm provider mới (Auth, Toast, etc.)
```tsx
// src/components/providers/Providers.tsx
'use client'
import { Toaster } from 'sonner'  // ví dụ

export function Providers({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
```

#### Thêm route mới
```
// Marketing page (có Header + Footer):
src/app/(marketing)/about/page.tsx

// App page (có Sidebar, cần auth):
src/app/(app)/learn/flashcards/page.tsx
src/app/(app)/courses/page.tsx
```

#### Bảo vệ routes với middleware
```tsx
// src/middleware.ts  ← tạo file này khi có auth
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Kiểm tra session cookie từ Supabase
  const hasSession = request.cookies.has('sb-access-token')
  const isAppRoute = request.nextUrl.pathname.startsWith('/learn') ||
                     request.nextUrl.pathname.startsWith('/courses')
  
  if (isAppRoute && !hasSession) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

---

## Roadmap

### Phase 1 — MVP (hiện tại)
- [x] Scaffold, design system, base components
- [x] Landing page
- [x] Dashboard layout
- [ ] Auth (login/signup với Supabase)
- [ ] Flashcard engine (SRS SM-2)
- [ ] TOPIK 1 vocab dataset (500 từ)
- [ ] Streak + XP system
- [ ] Profile page

### Phase 2
- [ ] Listening / Shadowing module
- [ ] Reading với hover-vocab popup
- [ ] Mock TOPIK test
- [ ] Course structure đầy đủ (6 cấp)
- [ ] Leaderboard
- [ ] PWA / offline mode

### Phase 3
- [ ] AI pronunciation scoring
- [ ] Speaking practice
- [ ] Friend system
- [ ] Mobile app (React Native / Capacitor)
