'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Flame, Zap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { fadeUp, stagger } from '@/lib/motion'

const stats = [
  { value: '12,000+', label: 'Học viên' },
  { value: '4.9★',    label: 'Đánh giá' },
  { value: 'TOPIK 1–6', label: 'Phủ toàn bộ' },
  { value: '50,000+', label: 'Flashcards' },
]

export function HeroSection() {
  return (
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
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-8 right-8 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-8"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-text-tertiary mb-4">Flashcard · TOPIK 1</p>
              <p lang="ko" className="font-korean text-[72px] font-bold text-text-primary leading-none mb-4">사랑</p>
              <p className="text-text-secondary text-sm mb-6">sa-rang</p>
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                <p className="text-text-primary font-medium">tình yêu <span className="text-text-tertiary font-normal">· love</span></p>
                <p lang="ko" className="font-korean text-sm text-text-secondary mt-2">나는 너를 사랑해요.</p>
              </div>
            </motion.div>

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
  )
}
