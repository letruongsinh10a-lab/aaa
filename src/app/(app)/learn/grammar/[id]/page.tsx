'use client'

import { use, useEffect } from 'react'
import { useRouter, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, AlertCircle, Dumbbell, Mic } from 'lucide-react'
import { grammarByLevelAll, grammarByLevelList } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import { fadeUp, stagger } from '@/lib/motion'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { GrammarLevelGroup } from '@/types'
import { GrammarExamplesBlock, GrammarConjugationBlock, GrammarRelatedBlock } from '@/components/learning/GrammarPatternDetail'

const LEVEL_BADGE: Record<GrammarLevelGroup, string> = {
  'so-cap': 'text-accent-success bg-[rgba(74,222,128,0.1)] border-[rgba(74,222,128,0.2)]',
  'trung-cap': 'text-accent-blue bg-[rgba(108,142,239,0.1)] border-[rgba(108,142,239,0.2)]',
  'cao-cap': 'text-accent-amber bg-[rgba(255,179,71,0.1)] border-[rgba(255,179,71,0.2)]',
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default function GrammarPatternPage({ params }: PageProps) {
  const { id } = use(params)
  const router = useRouter()

  const pattern = grammarByLevelAll.find(g => g.id === id)
  if (!pattern) notFound()

  const levelMeta = grammarByLevelList.find(l => l.level === pattern.level)!
  const indexInLevel = levelMeta.patterns.findIndex(g => g.id === id)
  const prev = indexInLevel > 0 ? levelMeta.patterns[indexInLevel - 1] : null
  const next = indexInLevel < levelMeta.patterns.length - 1 ? levelMeta.patterns[indexInLevel + 1] : null

  const hasExercises = (grammarExercisesByPatternId[pattern.id]?.length ?? 0) > 0
  const hasSpeaking = grammarExercisesByPatternId[pattern.id]?.some(e => e.type === 'produce') ?? false

  // Left/right arrow = previous/next pattern — học liên tục không cần quay lại danh sách.
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowLeft' && prev) router.push(`/learn/grammar/${prev.id}`)
      if (e.key === 'ArrowRight' && next) router.push(`/learn/grammar/${next.id}`)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next, router])

  return (
    <motion.div
      key={pattern.id}
      variants={stagger(0.05)}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-10 max-w-[760px]"
    >
      {/* Breadcrumb */}
      <motion.div variants={fadeUp}>
        <Link
          href={`/learn/grammar?level=${pattern.level}`}
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Ngữ pháp tiếng Hàn
        </Link>
      </motion.div>

      {/* Meta row */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 flex-wrap">
        <span className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border', LEVEL_BADGE[pattern.level])}>
          {levelMeta.titleVi}
        </span>
        <span className="text-xs text-text-tertiary">{pattern.sectionTitleVi}</span>
        <span className="text-xs text-text-tertiary ml-auto shrink-0">
          {indexInLevel + 1} / {levelMeta.patterns.length}
        </span>
      </motion.div>

      {/* Progress within level */}
      <motion.div variants={fadeUp} className="h-1 bg-bg-elevated rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full bg-accent-coral rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((indexInLevel + 1) / levelMeta.patterns.length) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Pattern hero */}
      <motion.h1
        variants={fadeUp}
        lang="ko"
        className="font-korean font-bold text-accent-korean text-[40px] md:text-[52px] leading-[1.1] mb-4"
      >
        {pattern.pattern}
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl text-text-primary font-medium mb-2">
        {pattern.meaningVi}
      </motion.p>
      <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-10">
        {pattern.usageNotes}
      </motion.p>

      {/* Body sections */}
      <div className="space-y-8">
        <motion.div variants={fadeUp}>
          <GrammarExamplesBlock examples={pattern.examples} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <GrammarConjugationBlock table={pattern.conjugationTable} />
        </motion.div>

        {pattern.commonMistakes.length > 0 && (
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-1.5 mb-3">
              <AlertCircle className="w-3.5 h-3.5 text-accent-amber" />
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-accent-amber">
                Lỗi thường gặp
              </p>
            </div>
            <div className="space-y-2">
              {pattern.commonMistakes.map((m, i) => (
                <p key={i} className="text-sm text-text-secondary bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.12)] rounded-lg px-4 py-2.5 leading-relaxed">
                  {m}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div variants={fadeUp}>
          <GrammarRelatedBlock related={pattern.relatedPatterns} />
        </motion.div>
      </div>

      {/* CTA */}
      {(hasExercises || hasSpeaking) && (
        <motion.div variants={fadeUp} className="flex gap-3 mt-10">
          {hasExercises && (
            <Link
              href={`/learn/grammar/practice?patternId=${pattern.id}`}
              className={buttonVariants({ variant: 'primary', size: 'md', className: 'flex-1 justify-center' })}
            >
              <Dumbbell className="w-4 h-4" /> Luyện tập
            </Link>
          )}
          {hasSpeaking && (
            <Link
              href={`/learn/speaking/practice?patternId=${pattern.id}`}
              className={buttonVariants({ variant: 'secondary', size: 'md', className: 'flex-1 justify-center' })}
            >
              <Mic className="w-4 h-4" /> Luyện nói
            </Link>
          )}
        </motion.div>
      )}

      {/* Prev / next flow */}
      <motion.div
        variants={fadeUp}
        className="flex items-stretch gap-3 mt-12 pt-6 border-t border-[rgba(var(--overlay-rgb),0.08)]"
      >
        {prev ? (
          <Link
            href={`/learn/grammar/${prev.id}`}
            className="flex-1 min-w-0 group rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] hover:border-[rgba(var(--overlay-rgb),0.16)] hover:bg-bg-elevated transition-all duration-150 px-4 py-3"
          >
            <p className="flex items-center gap-1 text-[10px] text-text-tertiary uppercase tracking-wide mb-1">
              <ArrowLeft className="w-3 h-3" /> Mẫu trước
            </p>
            <p lang="ko" className="font-korean text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
              {prev.pattern}
            </p>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link
            href={`/learn/grammar/${next.id}`}
            className="flex-1 min-w-0 text-right group rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] hover:border-[rgba(var(--overlay-rgb),0.16)] hover:bg-bg-elevated transition-all duration-150 px-4 py-3"
          >
            <p className="flex items-center justify-end gap-1 text-[10px] text-text-tertiary uppercase tracking-wide mb-1">
              Mẫu tiếp theo <ArrowRight className="w-3 h-3" />
            </p>
            <p lang="ko" className="font-korean text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
              {next.pattern}
            </p>
          </Link>
        ) : <div className="flex-1" />}
      </motion.div>
    </motion.div>
  )
}
