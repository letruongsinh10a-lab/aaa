'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

const painPoints = [
  { icon: '😩', title: 'Học vẹt, không nhớ được', desc: 'Ghi chép hàng chục trang nhưng tuần sau quên sạch.' },
  { icon: '😴', title: 'Tài liệu nhàm chán', desc: 'Sách giáo khoa khô cứng, không có lý do để mở lại mỗi ngày.' },
  { icon: '❓', title: 'Không biết mình ở đâu', desc: 'Học mãi mà không biết đã đạt trình độ gì, cần học gì tiếp.' },
]

export function ProblemSection() {
  return (
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
  )
}
