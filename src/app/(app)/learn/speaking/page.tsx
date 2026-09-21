'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mic, MessageCircle, ChevronRight } from 'lucide-react'
import { grammarByLevelAll } from '@/data/grammar-by-level'
import { grammarExercisesByPatternId } from '@/data/grammar-exercises'
import { fadeUp, stagger } from '@/lib/motion'

const SPEAKABLE_PATTERNS = grammarByLevelAll
  .map(pattern => ({
    pattern,
    produceCount: (grammarExercisesByPatternId[pattern.id] ?? []).filter(e => e.type === 'produce').length,
  }))
  .filter(p => p.produceCount > 0)

export default function SpeakingPage() {
  return (
    <div className="p-6 lg:p-10 max-w-[800px]">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">Luyện nói</p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Ghi âm & tự so sánh
        </h1>
        <p className="text-text-secondary mt-2">
          Đọc tình huống, tự nói to câu chứa mẫu ngữ pháp, nghe lại giọng mình rồi so với giọng mẫu — chỉ hiểu thôi chưa đủ, phải nói ra mới lộ chỗ chưa vững.
        </p>
      </motion.div>

      {SPEAKABLE_PATTERNS.length === 0 ? (
        <p className="text-text-secondary text-sm">Chưa có mẫu ngữ pháp nào có bài luyện nói — quay lại sau nhé.</p>
      ) : (
        <motion.div variants={stagger(0.05)} initial="hidden" animate="visible" className="space-y-2">
          {SPEAKABLE_PATTERNS.map(({ pattern, produceCount }, i) => (
            <motion.div key={pattern.id} variants={fadeUp}>
              <Link
                href={`/learn/speaking/practice?patternId=${pattern.id}`}
                className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-bg-surface hover:border-[rgba(255,255,255,0.16)] hover:bg-bg-elevated transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,107,74,0.1)] flex items-center justify-center shrink-0">
                  <Mic className="w-4.5 h-4.5 text-accent-coral" />
                </div>
                <div className="flex-1 min-w-0">
                  <p lang="ko" className="font-korean text-sm font-medium text-text-primary">
                    {String(i + 1).padStart(2, '0')}. {pattern.pattern}
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5 truncate">{pattern.meaningVi}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-text-tertiary shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {produceCount} tình huống
                </div>
                <ChevronRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-coral transition-colors shrink-0" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
