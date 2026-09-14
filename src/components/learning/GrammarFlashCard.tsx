'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import type { GrammarEntry } from '@/types'

interface GrammarFlashCardProps {
  card: GrammarEntry
  flipped: boolean
  onFlip: () => void
}

export function GrammarFlashCard({ card, flipped, onFlip }: GrammarFlashCardProps) {
  return (
    <div className="w-full max-w-2xl" style={{ perspective: 1400 }}>
      <motion.div
        onClick={onFlip}
        className="relative cursor-pointer grid"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="[grid-area:1/1] bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 min-h-[420px] flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-8">
            {card.sectionTitleVi}
          </p>
          <p lang="ko" className="font-korean text-[44px] font-bold text-accent-korean leading-tight mb-3">
            {card.pattern}
          </p>
          <p className="text-text-tertiary text-xs mt-8">
            <kbd className="px-1.5 py-0.5 bg-bg-elevated rounded text-[10px] border border-[rgba(255,255,255,0.1)]">Space</kbd>{' '}
            để lật thẻ
          </p>
        </div>

        {/* Back */}
        <div
          className="[grid-area:1/1] bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 min-h-[420px] max-h-[80vh] overflow-y-auto flex flex-col items-center text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p lang="ko" className="font-korean text-2xl font-bold text-accent-korean mb-3">
            {card.pattern}
          </p>
          <p className="text-text-primary text-xl font-semibold mb-4">{card.meaningVi}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-lg">{card.usageNotes}</p>

          {card.examples.length > 0 && (
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-5 w-full text-left max-w-lg mx-auto">
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3">
                Ví dụ
              </p>
              <div className="space-y-3">
                {card.examples.map((ex, i) => (
                  <div key={i} className="bg-bg-elevated rounded-lg px-4 py-3 space-y-1">
                    <p lang="ko" className="font-korean text-base text-text-primary">{ex.ko}</p>
                    <p className="text-sm text-text-secondary">{ex.vi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {card.commonMistakes.length > 0 && (
            <div className="border-t border-[rgba(255,255,255,0.06)] mt-5 pt-5 w-full max-w-lg mx-auto">
              <div className="flex items-center gap-1.5 mb-3">
                <AlertCircle className="w-3.5 h-3.5 text-accent-amber" />
                <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-accent-amber text-left">
                  Lỗi thường gặp
                </p>
              </div>
              <div className="space-y-2">
                {card.commonMistakes.map((m, i) => (
                  <p key={i} className="text-sm text-text-secondary bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.12)] rounded-lg px-4 py-2.5 leading-relaxed text-left">
                    {m}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
