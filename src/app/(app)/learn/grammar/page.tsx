'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight, BookOpen, AlertCircle, Zap, Dumbbell } from 'lucide-react'
import { grammarByLevelList } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import { fadeUp, stagger } from '@/lib/motion'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { GrammarLevelGroup } from '@/types'

type GrammarEntry = {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: string
}

function GrammarAccordionList({
  patterns,
  openId,
  setOpenId,
}: {
  patterns: GrammarEntry[]
  openId: string | null
  setOpenId: (id: string | null) => void
}) {
  return (
    <motion.div variants={stagger(0.04)} initial="hidden" animate="visible" className="space-y-2">
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

                      {/* Luyện tập — chỉ hiện với mẫu đã có bài tập (pilot) */}
                      {grammarExercisesByPatternId[g.id]?.length > 0 && (
                        <Link
                          href={`/learn/grammar/practice?patternId=${g.id}`}
                          className={buttonVariants({ variant: 'secondary', size: 'sm', className: 'w-full justify-center' })}
                        >
                          <Dumbbell className="w-3.5 h-3.5" /> Luyện tập
                        </Link>
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
  )
}

const TOTAL_PATTERNS = grammarByLevelList.reduce((sum, l) => sum + l.patterns.length, 0)

export default function GrammarPage() {
  const [activeGroup, setActiveGroup] = useState<GrammarLevelGroup>(grammarByLevelList[0]?.level ?? 'so-cap')
  const [openId, setOpenId] = useState<string | null>(null)

  const activeGrammarLevel = grammarByLevelList.find(l => l.level === activeGroup) ?? null

  return (
    <div className="p-6 lg:p-10 max-w-[800px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">Ngữ pháp</p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Ngữ pháp tiếng Hàn
        </h1>
        <p className="text-text-secondary mt-2">
          {TOTAL_PATTERNS} mẫu câu Sơ cấp — Trung cấp — Cao cấp, có kèm ôn tập SRS và luyện tập.
        </p>
      </motion.div>

      {/* Level tabs */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-2 mb-6 flex-wrap">
        {grammarByLevelList.map(l => (
          <button
            key={l.level}
            onClick={() => { setActiveGroup(l.level); setOpenId(null) }}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeGroup === l.level
                ? 'bg-bg-elevated border border-[rgba(255,255,255,0.16)] text-text-primary'
                : 'border border-transparent text-text-tertiary hover:text-text-secondary hover:border-[rgba(255,255,255,0.08)]'
            )}
          >
            {l.titleVi}
            <span className="ml-1.5 text-[10px] text-text-tertiary">{l.patterns.length}</span>
          </button>
        ))}
      </motion.div>

      {/* Sơ/Trung/Cao cấp content */}
      {activeGrammarLevel !== null && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGrammarLevel.level}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {/* Meta */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <BookOpen className="w-4 h-4 text-accent-blue" />
                  <span>{activeGrammarLevel.patterns.length} mẫu câu</span>
                </div>
                <div className="h-3 w-px bg-[rgba(255,255,255,0.08)]" />
                <span className="text-sm text-text-secondary">{activeGrammarLevel.titleVi.toUpperCase()}</span>
              </div>
              <Link
                href={`/learn/grammar/review?level=${activeGrammarLevel.level}`}
                className={buttonVariants({ variant: 'primary', size: 'sm' })}
              >
                Bắt đầu ôn tập <Zap className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-text-secondary text-sm mb-8 max-w-xl">{activeGrammarLevel.descVi}</p>

            <GrammarAccordionList
              patterns={activeGrammarLevel.patterns}
              openId={openId}
              setOpenId={setOpenId}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
