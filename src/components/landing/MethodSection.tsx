'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const methods = [
  {
    tag: 'Ghi nhớ',
    title: 'Spaced Repetition — Nhớ mãi, không bao giờ quên.',
    desc: 'Hệ thống SM-2 tự động tính toán khoảng cách ôn tập tối ưu cho từng từ. Ôn đúng lúc, nhớ lâu hơn 5–10 lần so với học truyền thống.',
    visual: (
      <div className="space-y-3">
        {[
          { word: '사랑', due: 'Hôm nay', color: 'bg-accent-coral' },
          { word: '친구', due: '3 ngày',  color: 'bg-accent-blue' },
          { word: '공부', due: '7 ngày',  color: 'bg-accent-success' },
          { word: '음식', due: '21 ngày', color: 'bg-[rgba(255,255,255,0.2)]' },
        ].map((item) => (
          <div key={item.word} className="flex items-center justify-between bg-bg-elevated rounded-lg px-4 py-3">
            <span lang="ko" className="font-korean font-bold text-text-primary text-lg">{item.word}</span>
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
          <p lang="ko" className="font-korean text-2xl font-bold text-text-primary mb-1">맛있다</p>
          <p className="text-sm text-text-secondary">ma-sit-da · <em>ngon</em></p>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-4 space-y-3">
          {[
            '이 음식은 <b>정말 맛있어요</b>.',
            '한국 음식이 <b>맛있어서</b> 매일 먹어요.',
          ].map((ex, i) => (
            <p key={i} lang="ko" className="font-korean text-text-secondary text-sm leading-relaxed"
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
            const colors = ['bg-bg-base', 'bg-[rgba(255,107,74,0.2)]', 'bg-[rgba(255,107,74,0.5)]', 'bg-accent-coral']
            return <div key={i} className={`h-5 rounded-sm ${colors[i % 4]}`} />
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

export function MethodSection() {
  return (
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
          <motion.div variants={fadeUp}>
            <Badge variant="coral" className="mb-5">{m.tag}</Badge>
            <h3 className="font-serif text-[32px] md:text-[40px] font-normal tracking-[-0.02em] text-text-primary mb-5 leading-[1.15]">
              {m.title}
            </h3>
            <p className="text-text-secondary leading-[1.75] text-base">{m.desc}</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            {m.visual}
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
