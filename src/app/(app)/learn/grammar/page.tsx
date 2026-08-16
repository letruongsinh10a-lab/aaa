'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight, BookOpen, AlertCircle } from 'lucide-react'
import { grammarTopik1 } from '@/data/grammar/topik1'
import { grammarTopik2 } from '@/data/grammar/topik2'
import { grammarTopik3 } from '@/data/grammar/topik3'
import { grammarTopik4 } from '@/data/grammar/topik4'
import { grammarTopik5 } from '@/data/grammar/topik5'
import { grammarTopik6 } from '@/data/grammar/topik6'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { TOPIKLevel } from '@/types'

type GrammarEntry = {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: string
}

const LEVELS: { id: TOPIKLevel; label: string; data: GrammarEntry[]; color: string }[] = [
  { id: 'topik1', label: 'TOPIK 1', data: grammarTopik1, color: 'text-accent-success' },
  { id: 'topik2', label: 'TOPIK 2', data: grammarTopik2, color: 'text-accent-success' },
  { id: 'topik3', label: 'TOPIK 3', data: grammarTopik3, color: 'text-accent-blue' },
  { id: 'topik4', label: 'TOPIK 4', data: grammarTopik4, color: 'text-accent-blue' },
  { id: 'topik5', label: 'TOPIK 5', data: grammarTopik5, color: 'text-accent-coral' },
  { id: 'topik6', label: 'TOPIK 6', data: grammarTopik6, color: 'text-accent-coral' },
]

const LEVEL_TITLES: Record<TOPIKLevel, string> = {
  topik1: '20 mẫu câu cơ bản',
  topik2: '25 mẫu câu trung cấp',
  topik3: '25 mẫu câu trung-cao cấp',
  topik4: '20 mẫu câu cao cấp',
  topik5: '20 mẫu câu học thuật',
  topik6: '15 mẫu câu bậc thành thạo',
}

const LEVEL_DESC: Record<TOPIKLevel, string> = {
  topik1: 'Nền tảng ngữ pháp tiếng Hàn. Nắm chắc 20 mẫu này là đủ để giao tiếp hàng ngày và vượt qua TOPIK cấp 1.',
  topik2: 'Ngữ pháp trung cấp — mở rộng khả năng diễn đạt với các cấu trúc mục đích, điều kiện, và trích dẫn.',
  topik3: 'Cấu trúc phức hợp — tương phản, nhượng bộ, trích dẫn gián tiếp và các trợ động từ tinh tế.',
  topik4: 'Ngữ pháp văn viết và hàn lâm — điều kiện tuyệt đối, cấu trúc trang trọng, và thành ngữ cố định.',
  topik5: 'Ngữ pháp học thuật và văn chương — các cấu trúc xuất hiện trong văn bản chính luận và báo chí.',
  topik6: 'Trình độ thành thạo — ngữ pháp cổ điển, văn học và pháp lý. Chuẩn bị cho TOPIK đọc hiểu cấp 6.',
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState<TOPIKLevel>('topik1')
  const [openId, setOpenId] = useState<string | null>(null)

  const levelInfo = LEVELS.find(l => l.id === activeLevel)!
  const patterns = levelInfo.data

  return (
    <div className="p-6 lg:p-10 max-w-[800px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">Ngữ pháp</p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Ngữ pháp tiếng Hàn
        </h1>
        <p className="text-text-secondary mt-2">
          105 mẫu câu từ TOPIK 1 đến 6 — từ giao tiếp hàng ngày đến văn học học thuật.
        </p>
      </motion.div>

      {/* Level tabs */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex gap-2 mb-6 flex-wrap">
        {LEVELS.map(level => (
          <button
            key={level.id}
            onClick={() => { setActiveLevel(level.id); setOpenId(null) }}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeLevel === level.id
                ? 'bg-bg-elevated border border-[rgba(255,255,255,0.16)] text-text-primary'
                : 'border border-transparent text-text-tertiary hover:text-text-secondary hover:border-[rgba(255,255,255,0.08)]'
            )}
          >
            {level.label}
            <span className="ml-1.5 text-[10px] text-text-tertiary">{level.data.length}</span>
          </button>
        ))}
      </motion.div>

      {/* Level info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <BookOpen className="w-4 h-4 text-accent-blue" />
              <span>{patterns.length} mẫu câu</span>
            </div>
            <div className="h-3 w-px bg-[rgba(255,255,255,0.08)]" />
            <span className="text-sm text-text-secondary">{activeLevel.toUpperCase()}</span>
          </div>

          <p className="text-text-secondary text-sm mb-8 max-w-xl">{LEVEL_DESC[activeLevel]}</p>

          {/* Grammar list */}
          <motion.div
            variants={stagger(0.04)} initial="hidden" animate="visible"
            className="space-y-2"
          >
            {patterns.map((g, i) => {
              const isOpen = openId === g.id
              return (
                <motion.div key={g.id} variants={fadeUp}>
                  <div
                    className={cn(
                      'rounded-xl border transition-all duration-200 overflow-hidden',
                      isOpen
                        ? 'border-[rgba(108,142,239,0.30)] bg-[rgba(108,142,239,0.04)]'
                        : 'border-[rgba(255,255,255,0.08)] bg-bg-surface hover:border-[rgba(255,255,255,0.14)]'
                    )}
                  >
                    {/* Header row */}
                    <button
                      className="w-full flex items-center gap-4 px-5 py-4 text-left"
                      onClick={() => setOpenId(isOpen ? null : g.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[11px] font-medium text-text-tertiary w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <code lang="ko" className="font-korean font-bold text-accent-korean text-lg flex-1">
                        {g.pattern}
                      </code>
                      <span className="text-sm text-text-secondary flex-1 text-right pr-4 hidden sm:block">
                        {g.meaningVi}
                      </span>
                      {isOpen
                        ? <ChevronDown className="w-4 h-4 text-text-tertiary shrink-0" />
                        : <ChevronRight className="w-4 h-4 text-text-tertiary shrink-0" />
                      }
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 space-y-5 border-t border-[rgba(255,255,255,0.06)]">
                            {/* Meaning + usage */}
                            <div className="pt-4">
                              <p className="text-sm font-medium text-text-primary mb-1">{g.meaningVi}</p>
                              <p className="text-sm text-text-secondary leading-relaxed">{g.usageNotes}</p>
                            </div>

                            {/* Examples */}
                            <div>
                              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3">
                                Ví dụ
                              </p>
                              <div className="space-y-3">
                                {g.examples.map((ex, j) => (
                                  <div key={j} className="bg-bg-elevated rounded-lg px-4 py-3 space-y-1">
                                    <p lang="ko" className="font-korean text-base text-text-primary">{ex.ko}</p>
                                    <p className="text-sm text-text-secondary">{ex.vi}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Common mistakes */}
                            {g.commonMistakes.length > 0 && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-3">
                                  <AlertCircle className="w-3.5 h-3.5 text-accent-amber" />
                                  <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-accent-amber">
                                    Lỗi thường gặp
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {g.commonMistakes.map((m, j) => (
                                    <p key={j} className="text-sm text-text-secondary bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.12)] rounded-lg px-4 py-2.5 leading-relaxed">
                                      {m}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
