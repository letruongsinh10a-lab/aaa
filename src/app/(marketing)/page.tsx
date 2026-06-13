'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, BookOpen, Headphones, BarChart3,
  CheckCircle, Flame, Zap, BrainCircuit, Mic,
  Trophy, Lock,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

/* ─── Data ───────────────────────────────────────────────────── */

const painPoints = [
  { icon: '😩', title: 'Học vẹt, không nhớ được', desc: 'Ghi chép hàng chục trang nhưng tuần sau quên sạch.' },
  { icon: '😴', title: 'Tài liệu nhàm chán', desc: 'Sách giáo khoa khô cứng, không có lý do để mở lại mỗi ngày.' },
  { icon: '❓', title: 'Không biết mình ở đâu', desc: 'Học mãi mà không biết đã đạt trình độ gì, cần học gì tiếp.' },
]

const methods = [
  {
    tag: 'Ghi nhớ',
    title: 'Spaced Repetition — Nhớ mãi, không bao giờ quên.',
    desc: 'Hệ thống SM-2 tự động tính toán khoảng cách ôn tập tối ưu cho từng từ. Ôn đúng lúc, nhớ lâu hơn 5–10 lần so với học truyền thống.',
    visual: (
      <div className="space-y-3">
        {[
          { word: '사랑', due: 'Hôm nay', color: 'bg-accent-coral' },
          { word: '친구', due: '3 ngày', color: 'bg-accent-blue' },
          { word: '공부', due: '7 ngày', color: 'bg-accent-success' },
          { word: '음식', due: '21 ngày', color: 'bg-[rgba(255,255,255,0.2)]' },
        ].map((item) => (
          <div key={item.word} className="flex items-center justify-between bg-bg-elevated rounded-lg px-4 py-3">
            <span className="font-korean font-bold text-text-primary text-lg">{item.word}</span>
            <div className="flex items-center gap-3">
              <div className={`h-1.5 w-16 rounded-full ${item.color} opacity-60`} />
              <span className="text-xs text-text-tertiary">{item.due}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: 'Context',
    title: 'Học từ câu ví dụ, không học từ điển.',
    desc: 'Mỗi từ vựng đi kèm 2–3 câu ví dụ thực tế. Não bộ nhớ từ thông qua context — giống cách trẻ em học ngôn ngữ mẹ đẻ.',
    visual: (
      <div className="bg-bg-elevated rounded-xl p-5 space-y-4">
        <div>
          <p className="font-korean text-2xl font-bold text-text-primary mb-1">맛있다</p>
          <p className="text-sm text-text-secondary">ma-sit-da · <em>ngon</em></p>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-4 space-y-3">
          {[
            '이 음식은 <b>정말 맛있어요</b>.',
            '한국 음식이 <b>맛있어서</b> 매일 먹어요.',
          ].map((ex, i) => (
            <p key={i} className="font-korean text-text-secondary text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ex.replace(/<b>(.*?)<\/b>/g, '<b class="text-accent-coral font-bold">$1</b>') }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: 'Tiến trình',
    title: 'Thấy rõ tiến trình từng ngày.',
    desc: 'Dashboard hiển thị streak, XP, số từ đã học, accuracy. Biết chính xác bạn đang ở đâu — và bước tiếp theo là gì.',
    visual: (
      <div className="bg-bg-elevated rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-text-secondary">Tháng 6</span>
          <div className="flex items-center gap-1.5 text-accent-amber">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-semibold">14 ngày</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => {
            const intensity = [0, 1, 2, 3][Math.floor(Math.random() * 4)]
            const colors = [
              'bg-bg-base',
              'bg-[rgba(255,107,74,0.2)]',
              'bg-[rgba(255,107,74,0.5)]',
              'bg-accent-coral',
            ]
            return <div key={i} className={`h-5 rounded-sm ${colors[intensity]}`} />
          })}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-text-tertiary">Ít hơn</span>
          <div className="flex gap-1">
            {['bg-bg-base', 'bg-[rgba(255,107,74,0.2)]', 'bg-[rgba(255,107,74,0.5)]', 'bg-accent-coral'].map((c, i) => (
              <div key={i} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
          </div>
          <span className="text-xs text-text-tertiary">Nhiều hơn</span>
        </div>
      </div>
    ),
  },
]

const features = [
  { icon: BrainCircuit, label: 'Khoa học', title: 'Spaced Repetition', desc: 'SRS tự động, nhớ từ vựng vĩnh viễn.' },
  { icon: Headphones, label: 'Phát âm', title: 'Shadowing', desc: 'Luyện nghe-nói theo chuẩn người bản xứ.' },
  { icon: BookOpen, label: 'Đọc hiểu', title: 'Reading', desc: 'Bài đọc TOPIK 1→6, hover để tra từ ngay.' },
  { icon: Mic, label: 'Nói', title: 'Speaking', desc: 'Ghi âm, so sánh phát âm với native speaker.' },
  { icon: Trophy, label: 'Thi cử', title: 'TOPIK Practice', desc: 'Đề thi thử đầy đủ, giải thích chi tiết.' },
  { icon: BarChart3, label: 'Phân tích', title: 'Analytics', desc: 'Dashboard streak, XP, accuracy mỗi ngày.' },
]

const previewCourses = [
  { level: 'TOPIK 1', ko: '초급', title: 'Sơ cấp', vocab: 500, grammar: 30, free: true, color: 'text-accent-success', bg: 'bg-[rgba(74,222,128,0.08)]', border: 'border-[rgba(74,222,128,0.15)]' },
  { level: 'TOPIK 3', ko: '중급', title: 'Trung cấp', vocab: 1000, grammar: 50, free: false, color: 'text-accent-blue', bg: 'bg-[rgba(108,142,239,0.08)]', border: 'border-[rgba(108,142,239,0.15)]' },
  { level: 'TOPIK 5', ko: '고급', title: 'Cao cấp', vocab: 1500, grammar: 70, free: false, color: 'text-accent-coral', bg: 'bg-[rgba(255,107,74,0.08)]', border: 'border-[rgba(255,107,74,0.15)]' },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '0đ',
    period: 'mãi mãi',
    highlight: false,
    features: ['TOPIK 1 & 2 toàn bộ', 'SRS Flashcard không giới hạn', 'Ngữ pháp + Đọc hiểu', 'Leaderboard', 'Streak system'],
    cta: 'Bắt đầu miễn phí',
    href: '/signup',
  },
  {
    name: 'Pro',
    price: '99.000đ',
    period: '/tháng',
    highlight: true,
    badge: 'Phổ biến nhất',
    features: ['Tất cả TOPIK 1→6 + EPS', 'AI Pronunciation scoring', 'Shadowing với audio native', 'Mock TOPIK full test', 'Offline mode (PWA)', 'Analytics chi tiết'],
    cta: 'Dùng Pro 7 ngày miễn phí',
    href: '/signup?plan=pro',
  },
  {
    name: 'Lifetime',
    price: '1.990.000đ',
    period: 'một lần',
    highlight: false,
    badge: 'Tiết kiệm nhất',
    features: ['Tất cả tính năng Pro', 'Truy cập vĩnh viễn', 'Cập nhật nội dung mãi mãi', 'Priority support', 'Early access tính năng mới'],
    cta: 'Mua Lifetime',
    href: '/signup?plan=lifetime',
  },
]

const stats = [
  { value: '12,000+', label: 'Học viên' },
  { value: '4.9★', label: 'Đánh giá' },
  { value: 'TOPIK 1–6', label: 'Phủ toàn bộ' },
  { value: '50,000+', label: 'Flashcards' },
]

const reassurances = ['Không cần thẻ tín dụng', 'Hủy bất cứ lúc nào', 'TOPIK 1 & 2 miễn phí mãi']

/* ─── Page ───────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="bg-bg-base overflow-x-hidden">

      {/* ════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-accent-coral opacity-[0.04] blur-[160px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue opacity-[0.035] blur-[140px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div initial="hidden" animate="visible" variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.18em] uppercase text-text-tertiary mb-8">
              Nền tảng học tiếng Hàn dành cho người Việt
            </motion.p>

            <motion.h1 variants={fadeUp}
              className="font-serif text-[64px] md:text-[80px] lg:text-[96px] font-normal leading-[1.0] tracking-[-0.03em] text-text-primary mb-6">
              Học tiếng Hàn<br />
              <span className="italic text-accent-coral">như người Hàn.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-korean text-[22px] font-medium text-text-tertiary mb-6">
              한국어를 배워봐요 🇰🇷
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-text-secondary max-w-md leading-[1.75] mb-12">
              Phương pháp khoa học. Thiết kế đẹp.<br />
              Không cần giáo viên. Không cần lớp học.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-14">
              <Link href="/signup" className={buttonVariants({ variant: 'primary', size: 'lg', className: 'gap-2' })}>
                Bắt đầu miễn phí <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/courses" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                Xem khóa học
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-text-primary">{s.value}</p>
                  <p className="text-xs text-text-tertiary mt-0.5 tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating Korean cards visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative h-[480px]">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-8 right-8 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-8"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-text-tertiary mb-4">Flashcard · TOPIK 1</p>
                <p className="font-korean text-[72px] font-bold text-text-primary leading-none mb-4">사랑</p>
                <p className="text-text-secondary text-sm mb-6">sa-rang</p>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                  <p className="text-text-primary font-medium">tình yêu <span className="text-text-tertiary font-normal">· love</span></p>
                  <p className="font-korean text-sm text-text-secondary mt-2">나는 너를 사랑해요.</p>
                </div>
              </motion.div>

              {/* Floating badge — streak */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-24 right-0 bg-bg-elevated border border-[rgba(255,179,71,0.2)] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <Flame className="w-5 h-5 text-accent-amber" />
                <div>
                  <p className="text-xs text-text-tertiary">Streak hiện tại</p>
                  <p className="text-sm font-semibold text-text-primary">14 ngày 🔥</p>
                </div>
              </motion.div>

              {/* Floating badge — XP */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 left-0 bg-bg-elevated border border-[rgba(255,107,74,0.2)] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <Zap className="w-5 h-5 text-accent-coral" />
                <div>
                  <p className="text-xs text-text-tertiary">XP hôm nay</p>
                  <p className="text-sm font-semibold text-text-primary">+250 XP</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. PROBLEM
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-28 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
          <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4">
            Vấn đề
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary max-w-2xl mb-16">
            Tại sao học mãi vẫn không giỏi?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <div className="p-8 rounded-xl border border-[rgba(255,255,255,0.06)] bg-bg-surface h-full">
                  <p className="text-4xl mb-5">{p.icon}</p>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          3. METHOD / SOLUTION
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-16 max-w-[1200px] mx-auto space-y-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
          <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4">
            Giải pháp
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary mb-20">
            Học thật, nhớ thật.
          </motion.h2>
        </motion.div>

        {methods.map((m, i) => (
          <motion.div
            key={m.tag}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.15)}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            {/* Text */}
            <motion.div variants={fadeUp}>
              <Badge variant="coral" className="mb-5">{m.tag}</Badge>
              <h3 className="font-serif text-[32px] md:text-[40px] font-normal tracking-[-0.02em] text-text-primary mb-5 leading-[1.15]">
                {m.title}
              </h3>
              <p className="text-text-secondary leading-[1.75] text-base">{m.desc}</p>
            </motion.div>

            {/* Visual */}
            <motion.div variants={fadeUp}>
              {m.visual}
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* ════════════════════════════════════════════════
          4. FEATURES GRID
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-28 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
          <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4">
            Tính năng
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary mb-16">
            Mọi thứ bạn cần để thành thạo tiếng Hàn.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="p-7 h-full group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,107,74,0.08)] flex items-center justify-center mb-5 group-hover:bg-[rgba(255,107,74,0.16)] transition-colors duration-200">
                    <f.icon className="w-5 h-5 text-accent-coral" />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-text-tertiary mb-2">{f.label}</p>
                  <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          5. COURSES PREVIEW
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-28 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
          <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4">
            Khóa học
          </motion.p>
          <div className="flex items-end justify-between mb-12">
            <motion.h2 variants={fadeUp}
              className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary">
              TOPIK 1 đến 6.
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/courses" className={buttonVariants({ variant: 'ghost', size: 'sm', className: 'gap-1.5' })}>
                Xem tất cả <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewCourses.map((c) => (
              <motion.div key={c.level} variants={fadeUp}>
                <Card className={`p-6 h-full border ${c.border} ${c.bg}`} hoverable>
                  {/* Level badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-semibold tracking-widest uppercase ${c.color}`}>{c.level}</span>
                    {!c.free && <Lock className="w-3.5 h-3.5 text-text-tertiary" />}
                    {c.free && <span className="text-xs font-medium text-accent-success bg-[rgba(74,222,128,0.1)] px-2 py-0.5 rounded-full">Miễn phí</span>}
                  </div>

                  {/* Korean level name */}
                  <p className={`font-korean text-[48px] font-bold leading-none ${c.color} opacity-20 mb-3`}>{c.ko}</p>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{c.title}</h3>

                  <div className="flex items-center gap-4 text-xs text-text-tertiary mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    <span>{c.vocab} từ vựng</span>
                    <span>·</span>
                    <span>{c.grammar} ngữ pháp</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          6. SOCIAL PROOF / STREAK
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-20 border-y border-[rgba(255,255,255,0.06)] bg-bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.12)}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Streak showcase */}
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[96px] leading-none"
              >
                🔥
              </motion.div>
              <div>
                <p className="font-serif text-[56px] font-normal text-text-primary leading-none">14</p>
                <p className="text-text-secondary mt-1">ngày streak trung bình</p>
                <p className="text-xs text-text-tertiary mt-1">trong 30 ngày qua</p>
              </div>
            </motion.div>

            {/* Activity feed */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-4">Hoạt động gần đây</p>
              {[
                { initial: 'N.V.A', action: 'hoàn thành TOPIK 1', time: '2 phút trước', xp: '+50 XP' },
                { initial: 'T.T.H', action: 'streak 30 ngày 🔥', time: '15 phút trước', xp: '+100 XP' },
                { initial: 'P.M.K', action: 'ôn 50 flashcards', time: '1 giờ trước', xp: '+200 XP' },
              ].map((a) => (
                <div key={a.initial} className="flex items-center justify-between bg-bg-elevated rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[rgba(255,107,74,0.15)] flex items-center justify-center text-[10px] font-bold text-accent-coral">
                      {a.initial[0]}
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary">{a.initial} </span>
                      <span className="text-xs text-text-primary">{a.action}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-accent-success font-medium">{a.xp}</span>
                    <span className="text-[10px] text-text-tertiary">{a.time}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          7. PRICING
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-32 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
          <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4 text-center">
            Bảng giá
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary text-center mb-4">
            Đầu tư vào tiếng Hàn.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary text-center mb-16 max-w-md mx-auto">
            Bắt đầu miễn phí, nâng cấp khi bạn sẵn sàng. Không cam kết dài hạn.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={fadeUp}>
                <div className={`rounded-xl border p-7 relative ${
                  tier.highlight
                    ? 'border-accent-coral bg-[rgba(255,107,74,0.04)]'
                    : 'border-[rgba(255,255,255,0.08)] bg-bg-surface'
                }`}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant={tier.highlight ? 'coral' : 'default'}>{tier.badge}</Badge>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-text-primary mb-1">{tier.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[36px] font-semibold text-text-primary tracking-tight">{tier.price}</span>
                  </div>
                  <p className="text-xs text-text-tertiary mb-6">{tier.period}</p>

                  <Link
                    href={tier.href}
                    className={buttonVariants({
                      variant: tier.highlight ? 'primary' : 'secondary',
                      size: 'md',
                      className: 'w-full justify-center mb-6',
                    })}
                  >
                    {tier.cta}
                  </Link>

                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent-success shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════════ */}
      <section className="px-6 py-24 max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 md:p-20 text-center overflow-hidden bg-bg-surface"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(255,107,74,0.05)] to-[rgba(108,142,239,0.05)]" />
          <p className="font-korean text-2xl text-text-tertiary mb-5">시작해볼까요?</p>
          <h2 className="font-serif text-[48px] md:text-[64px] font-normal tracking-[-0.025em] text-text-primary mb-5">
            Bắt đầu hành trình<br />
            <span className="italic text-accent-coral">hôm nay.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
            Miễn phí. Không cần thẻ tín dụng. Học ngay TOPIK 1 & 2.
          </p>
          <Link href="/signup" className={buttonVariants({ variant: 'primary', size: 'lg', className: 'gap-2 mx-auto' })}>
            Đăng ký miễn phí <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {reassurances.map((r) => (
              <div key={r} className="flex items-center gap-2 text-sm text-text-tertiary">
                <CheckCircle className="w-4 h-4 text-accent-success shrink-0" />
                {r}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
