'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Headphones, MessageCircle, ChevronRight } from 'lucide-react'
import { listeningByLevelAll } from '@/data/listening'
import { fadeUp, stagger } from '@/lib/motion'

export default function ListeningPage() {
  return (
    <div className="p-6 lg:p-10 max-w-[800px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">Luyện nghe</p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Nghe & nhại lại
        </h1>
        <p className="text-text-secondary mt-2">
          Nghe từng câu hội thoại, nhại lại ngay theo đúng nhịp điệu — shadowing đúng nghĩa, không phải nghe thụ động.
        </p>
      </motion.div>

      {/* Dialogue list */}
      <motion.div variants={stagger(0.05)} initial="hidden" animate="visible" className="space-y-2">
        {listeningByLevelAll.map((d, i) => (
          <motion.div key={d.id} variants={fadeUp}>
            <Link
              href={`/learn/listening/practice?id=${d.id}`}
              className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-bg-surface hover:border-[rgba(255,255,255,0.16)] hover:bg-bg-elevated transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(108,142,239,0.12)] flex items-center justify-center shrink-0">
                <Headphones className="w-4.5 h-4.5 text-accent-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary">
                  {String(i + 1).padStart(2, '0')}. {d.titleVi}
                </p>
                <p className="text-xs text-text-tertiary mt-0.5 truncate">{d.descVi}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-text-tertiary shrink-0">
                <MessageCircle className="w-3.5 h-3.5" />
                {d.lines.length} câu
              </div>
              <ChevronRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-coral transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
