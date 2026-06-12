'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Headphones, BarChart3, CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

/* ─── Data ──────────────────────────────────────────────────── */
const features = [
  {
    icon: BookOpen,
    badge: 'Khoa học',
    badgeVariant: 'coral' as const,
    title: 'Spaced Repetition',
    description:
      'Hệ thống SRS tự động lên lịch ôn tập đúng lúc — ghi nhớ từ vựng vĩnh viễn, không bao giờ quên.',
  },
  {
    icon: Headphones,
    badge: 'Phát âm',
    badgeVariant: 'info' as const,
    title: 'Shadowing',
    description:
      'Luyện phát âm cùng người bản xứ. Nghe → bắt chước → ghi âm → so sánh ngay trên app.',
  },
  {
    icon: BarChart3,
    badge: 'Analytics',
    badgeVariant: 'success' as const,
    title: 'Tiến trình rõ ràng',
    description:
      'Dashboard chi tiết: số từ đã học, streak, accuracy. Biết chính xác bạn đang ở đâu.',
  },
]

const stats = [
  { value: '12,000+', label: 'Học viên' },
  { value: '4.9★', label: 'Đánh giá' },
  { value: 'TOPIK 1–6', label: 'Phủ toàn bộ' },
  { value: '50,000+', label: 'Flashcards' },
]

const reassurances = ['Không cần thẻ tín dụng', 'Hủy bất cứ lúc nào', 'TOPIK 1 & 2 miễn phí']

/* ─── Page ──────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="bg-bg-base overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-accent-coral opacity-[0.035] rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue opacity-[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger(0.12)}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-8"
            >
              Nền tảng học tiếng Hàn dành cho người Việt
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-[72px] md:text-[100px] lg:text-[120px] font-normal leading-[1.0] tracking-[-0.03em] text-text-primary mb-6"
            >
              Học tiếng Hàn
              <br />
              <span className="italic text-accent-coral">như người Hàn.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-korean text-[26px] font-medium text-text-tertiary mb-6"
            >
              한국어를 배워봐요 🇰🇷
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-text-secondary max-w-lg leading-relaxed mb-12"
            >
              Phương pháp khoa học. Thiết kế đẹp.
              <br />
              Không cần giáo viên. Không cần lớp học.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/signup"
                className={buttonVariants({
                  variant: 'primary',
                  size: 'lg',
                  className: 'gap-2',
                })}
              >
                Bắt đầu miễn phí <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/courses" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                Xem khóa học
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-tertiary mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="px-6 py-32 max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger()}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4"
          >
            Phương pháp
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[48px] md:text-[64px] font-normal tracking-[-0.02em] text-text-primary mb-16"
          >
            Học thật, nhớ thật.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="p-8 h-full group">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,107,74,0.08)] flex items-center justify-center mb-6 group-hover:bg-[rgba(255,107,74,0.14)] transition-colors">
                    <f.icon className="w-5 h-5 text-accent-coral" />
                  </div>
                  <Badge variant={f.badgeVariant} className="mb-4">
                    {f.badge}
                  </Badge>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="relative border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 md:p-20 text-center overflow-hidden bg-bg-surface"
        >
          {/* Subtle gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(255,107,74,0.04)] to-[rgba(108,142,239,0.04)]" />

          <p className="font-korean text-2xl text-text-tertiary mb-6">시작해볼까요?</p>
          <h2 className="font-serif text-[48px] md:text-[64px] font-normal tracking-[-0.025em] text-text-primary mb-6">
            Bắt đầu hành trình
            <br />
            <span className="italic text-accent-coral">hôm nay.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
            Miễn phí. Không cần thẻ tín dụng. Học ngay TOPIK 1 & 2.
          </p>

          <Link
            href="/signup"
            className={buttonVariants({ variant: 'primary', size: 'lg', className: 'gap-2 mx-auto' })}
          >
            Đăng ký miễn phí <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {reassurances.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                <CheckCircle className="w-4 h-4 text-accent-success shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
