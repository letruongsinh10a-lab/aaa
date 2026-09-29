'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, BookOpen, Zap } from 'lucide-react'
import { grammarByLevelList } from '@/data/grammar-by-level'
import { fadeUp, stagger } from '@/lib/motion'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { GrammarEntry, GrammarLevelGroup } from '@/types'

function GrammarPatternList({ patterns }: { patterns: GrammarEntry[] }) {
  return (
    <motion.div variants={stagger(0.04)} initial="hidden" animate="visible" className="space-y-2">
      {patterns.map((g, i) => (
        <motion.div key={g.id} variants={fadeUp}>
          <Link
            href={`/learn/grammar/${g.id}`}
            className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface hover:border-[rgba(var(--overlay-rgb),0.14)] hover:bg-bg-elevated transition-all duration-150 group"
          >
            <span className="text-[11px] font-medium text-text-tertiary w-6 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <code lang="ko" className="font-korean font-bold text-accent-korean text-lg flex-1">
              {g.pattern}
            </code>
            <span className="text-sm text-text-secondary flex-1 text-right pr-4 hidden sm:block truncate">
              {g.meaningVi}
            </span>
            <ChevronRight className="w-4 h-4 text-text-tertiary shrink-0 group-hover:text-text-primary group-hover:translate-x-0.5 transition-all duration-150" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

const TOTAL_PATTERNS = grammarByLevelList.reduce((sum, l) => sum + l.patterns.length, 0)
const DEFAULT_LEVEL: GrammarLevelGroup = grammarByLevelList[0]?.level ?? 'so-cap'

function GrammarPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const levelParam = searchParams.get('level') as GrammarLevelGroup | null
  const activeGroup: GrammarLevelGroup =
    levelParam && grammarByLevelList.some(l => l.level === levelParam) ? levelParam : DEFAULT_LEVEL

  const activeGrammarLevel = grammarByLevelList.find(l => l.level === activeGroup) ?? null

  function selectLevel(level: GrammarLevelGroup) {
    router.replace(`/learn/grammar?level=${level}`, { scroll: false })
  }

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
            onClick={() => selectLevel(l.level)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeGroup === l.level
                ? 'bg-bg-elevated border border-[rgba(var(--overlay-rgb),0.16)] text-text-primary'
                : 'border border-transparent text-text-tertiary hover:text-text-secondary hover:border-[rgba(var(--overlay-rgb),0.08)]'
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
                <div className="h-3 w-px bg-[rgba(var(--overlay-rgb),0.08)]" />
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

            <GrammarPatternList patterns={activeGrammarLevel.patterns} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default function GrammarPage() {
  return (
    <Suspense fallback={
      <div className="p-6 lg:p-10 max-w-[800px]">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <GrammarPageContent />
    </Suspense>
  )
}
