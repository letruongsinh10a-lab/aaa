'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { fadeUp, stagger } from '@/lib/motion'

const previewCourses = [
  { level: 'TOPIK 1', ko: '초급', title: 'Sơ cấp',   vocab: 500,  grammar: 30, free: true,  color: 'text-accent-success', bg: 'bg-[rgba(74,222,128,0.08)]',    border: 'border-[rgba(74,222,128,0.15)]' },
  { level: 'TOPIK 3', ko: '중급', title: 'Trung cấp', vocab: 1000, grammar: 50, free: false, color: 'text-accent-blue',    bg: 'bg-[rgba(108,142,239,0.08)]',   border: 'border-[rgba(108,142,239,0.15)]' },
  { level: 'TOPIK 5', ko: '고급', title: 'Cao cấp',   vocab: 1500, grammar: 70, free: false, color: 'text-accent-coral',   bg: 'bg-[rgba(255,107,74,0.08)]',    border: 'border-[rgba(255,107,74,0.15)]' },
]

export function CoursesPreview() {
  return (
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
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-semibold tracking-widest uppercase ${c.color}`}>{c.level}</span>
                  {c.free
                    ? <span className="text-xs font-medium text-accent-success bg-[rgba(74,222,128,0.1)] px-2 py-0.5 rounded-full">Miễn phí</span>
                    : <Lock className="w-3.5 h-3.5 text-text-tertiary" />
                  }
                </div>

                <p lang="ko" className={`font-korean text-[48px] font-bold leading-none ${c.color} opacity-20 mb-3`}>{c.ko}</p>
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
  )
}
