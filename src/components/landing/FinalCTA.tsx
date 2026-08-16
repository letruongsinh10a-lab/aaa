'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { fadeUp, viewportOnce } from '@/lib/motion'

const reassurances = ['Không cần thẻ tín dụng', 'Hủy bất cứ lúc nào', 'TOPIK 1 & 2 miễn phí mãi']

export function FinalCTA() {
  return (
    <section className="px-6 py-24 max-w-[1200px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 md:p-20 text-center overflow-hidden bg-bg-surface"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(255,107,74,0.05)] to-[rgba(108,142,239,0.05)]" />
        <p lang="ko" className="font-korean text-2xl text-text-tertiary mb-5">시작해볼까요?</p>
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
  )
}
