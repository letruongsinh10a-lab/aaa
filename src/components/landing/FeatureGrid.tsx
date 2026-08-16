'use client'

import { motion } from 'framer-motion'
import { Headphones, BookOpen, BarChart3, BrainCircuit, Mic, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { fadeUp, stagger } from '@/lib/motion'

const features: { icon: LucideIcon; label: string; title: string; desc: string }[] = [
  { icon: BrainCircuit, label: 'Khoa học',  title: 'Spaced Repetition', desc: 'SRS tự động, nhớ từ vựng vĩnh viễn.' },
  { icon: Headphones,   label: 'Phát âm',   title: 'Shadowing',         desc: 'Luyện nghe-nói theo chuẩn người bản xứ.' },
  { icon: BookOpen,     label: 'Đọc hiểu',  title: 'Reading',           desc: 'Bài đọc TOPIK 1→6, hover để tra từ ngay.' },
  { icon: Mic,          label: 'Nói',        title: 'Speaking',          desc: 'Ghi âm, so sánh phát âm với native speaker.' },
  { icon: Trophy,       label: 'Thi cử',    title: 'TOPIK Practice',    desc: 'Đề thi thử đầy đủ, giải thích chi tiết.' },
  { icon: BarChart3,    label: 'Phân tích', title: 'Analytics',         desc: 'Dashboard streak, XP, accuracy mỗi ngày.' },
]

export function FeatureGrid() {
  return (
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
          {features.map((f) => (
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
  )
}
