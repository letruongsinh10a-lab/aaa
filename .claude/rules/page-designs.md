# Page Designs

## Landing Page `/`

### Hero (Section 1)
Full viewport height. Split layout: 60% left / 40% right.

Left:
- Caption: `"DÀNH CHO NGƯỜI VIỆT · CHUẨN HÀN QUỐC"` — 12px uppercase, tracking-widest, text-tertiary
- Headline (display): `"Học tiếng Hàn / như người Hàn."` — 80–120px Instrument Serif, weight 300
- Subtext: 18px, text-secondary, max-w-md
- CTA row: `[Bắt đầu miễn phí →]` (primary) + `[Xem demo ↓]` (ghost)
- Social proof: `"12,000+ học viên · 4.9★ đánh giá"` — caption style

Right:
- 3D floating flashcard stack (Spline or CSS 3D perspective)
- Cards auto-rotate, show Korean vocab words
- Glow/particle effect behind cards

Background: gradient mesh (coral + blue at 15% opacity) + subtle noise texture overlay.

### Problem Statement (Section 2)
Centered, `max-w-3xl`, `py-40`. Caption: `"VẤN ĐỀ"`.
Headline: `"Tại sao học mãi không giỏi?"`
3 horizontal pain points with icons:
- Học vẹt, không nhớ được
- Tài liệu nhàm chán, mất động lực
- Không biết mình đang ở đâu

### Method / Solution (Section 3)
3 alternating 50/50 split blocks:
1. Left: Animated flashcard demo (autoplay) | Right: "Ghi nhớ vĩnh viễn với Spaced Repetition"
2. Left: "Học từ context, không học từ điển" | Right: Sentence with highlighted words
3. Left: Animated progress chart | Right: "Thấy rõ tiến trình từng ngày"

### Features Grid (Section 4)
3-column grid. Cards with glassmorphism (`backdrop-blur`, subtle bg).
6 cards: 🎴 Flashcard SRS · 🎧 Shadowing · 📖 Đọc hiểu · 🗣️ Luyện phát âm · 📝 Luyện TOPIK · 🏆 Leaderboard.
Hover: lift + border glow (coral, 8→20% opacity).

### Courses Preview (Section 5)
Horizontal scroll on mobile, 3-column on desktop.
Each card: illustration thumbnail + level badge (TOPIK 1–6) + title + vocab/grammar count.

### Social Proof (Section 6)
Full-width, dark bg. Two-column:
- Left: Animated streak fire + counter (`"12,847 học viên đang học hôm nay"`)
- Right: Recent activity feed — names anonymized (`"N.V.A. vừa hoàn thành Bài 5..."`)

### Pricing (Section 7)
3 tiers in cards:
- **Free**: Flashcard cơ bản, 500 từ (TOPIK 1+2), Leaderboard
- **Pro (99,000đ/tháng)**: All 6 levels + EPS, AI pronunciation, Shadowing, TOPIK mock tests, Offline PWA — `border-accent-coral` glow + badge "Phổ biến nhất"
- **Lifetime**: All Pro features, early adopter pricing

### Footer (Section 8)
4-column: Logo + tagline | Nav links | Courses | Contact.
Bottom bar: Copyright · Privacy · Terms.
Korean decoration: `"한국어를 배워봐요 🇰🇷"`

---

## Dashboard `/learn`

Sidebar (240px) + Main content.

**Sidebar:**
- User avatar + level badge with Korean title
- Streak fire + day count
- Navigation items: Today / 플래시카드 / 문법 / 듣기 / 읽기 / 말하기 / TOPIK
- Daily goal progress ring (SVG, animated fill)
- XP bar at bottom

**Main content:**
- Greeting: `"Chào buổi sáng! Streak: 14 ngày 🔥"`
- Row 1 — Stats (4 cards): XP hôm nay / Cards reviewed / Accuracy / Time studied
- Row 2 — Due cards CTA: `"Cần ôn tập — N từ"` (large, coral accent)
- Row 3 — Continue last lesson card
- Row 4 — AI-suggested next lesson
- Row 5 — Activity heatmap (52-week GitHub-style, `ActivityHeatmap` component)

---

## Flashcard Session `/learn/flashcards`

Route group: `(focus)` — no Sidebar, no Header.

**Layout:**
- Top: progress bar (cards done / total) + streak chip + ✕ exit
- Center: large card (60vh), flip on click or Space
  - Front: Korean word (64px `font-korean`) + audio button
  - Back: Vietnamese meaning (20px) + romanization (`font-mono`, 18px) + 3 example sentences
- Bottom: 4 rating buttons — Again (red) / Hard (yellow) / Good (green) / Easy (blue)
- Corner: settings toggle (show/hide romaja, audio autoplay)

**Session end:**
- Confetti animation (react-confetti or CSS keyframes)
- Stats card: X cards · Y% accuracy · Z min
- XP earned with count-up animation
- CTA: Tiếp tục (next session) | Về dashboard
