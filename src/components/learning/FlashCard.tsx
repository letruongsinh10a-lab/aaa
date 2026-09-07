'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2 } from 'lucide-react'
import type { VocabCard } from '@/types'

interface FlashCardProps {
  card: VocabCard
  flipped: boolean
  onFlip: () => void
}

function playPronunciation(audioUrl?: string) {
  if (!audioUrl) return
  new Audio(audioUrl).play().catch(() => {})
}

function splitPhrase(phrase: string): { ko: string; vi: string } {
  const match = phrase.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  return match ? { ko: match[1], vi: match[2] } : { ko: phrase, vi: '' }
}

export function FlashCard({ card, flipped, onFlip }: FlashCardProps) {
  // Phát âm khi thẻ mới hiện ra và mỗi lần lật
  useEffect(() => {
    playPronunciation(card.audioUrl)
  }, [card.id, flipped, card.audioUrl])

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
            {card.pos} · {card.day ? `Ngày ${card.day}` : (card.topikLevel?.toUpperCase() ?? '')}
          </p>
          <p lang="ko" className="font-korean text-[88px] font-bold text-text-primary leading-none mb-3">
            {card.word}
          </p>
          <button
            className="mt-4 p-2 rounded-full text-text-tertiary hover:text-accent-coral transition-colors"
            onClick={e => {
              e.stopPropagation()
              playPronunciation(card.audioUrl)
            }}
            aria-label="Phát âm"
          >
            <Volume2 className="w-5 h-5" />
          </button>
          <p className="text-text-tertiary text-xs mt-8">
            <kbd className="px-1.5 py-0.5 bg-bg-elevated rounded text-[10px] border border-[rgba(255,255,255,0.1)]">Space</kbd>{' '}
            để lật thẻ
          </p>
        </div>

        {/* Back */}
        <div
          className="[grid-area:1/1] bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 min-h-[420px] flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p lang="ko" className="font-korean text-[52px] font-bold text-text-primary leading-none mb-3">
            {card.word}
          </p>
          <p className="text-text-secondary text-base mb-5 font-mono">{card.romanization}</p>
          <p className="text-text-primary text-2xl font-semibold mb-6">{card.meaningVi}</p>
          {card.examples[0] && (
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-5 w-full text-left space-y-1 max-w-sm mx-auto">
              <p lang="ko" className="font-korean text-sm text-text-secondary">{card.examples[0].ko}</p>
              <p className="text-xs text-text-tertiary">{card.examples[0].vi}</p>
            </div>
          )}
          {card.relatedPhrases && card.relatedPhrases.length > 0 && (
            <div className="border-t border-[rgba(255,255,255,0.06)] mt-5 pt-5 w-full max-w-md mx-auto">
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3 text-left">
                Cụm từ
              </p>
              <div className="space-y-2">
                {card.relatedPhrases.map((phrase, i) => {
                  const { ko, vi } = splitPhrase(phrase)
                  return (
                    <div key={i} className="rounded-lg bg-bg-elevated border border-[rgba(255,255,255,0.06)] px-4 py-2.5 text-left">
                      <p lang="ko" className="font-korean text-lg font-semibold text-text-primary">{ko}</p>
                      {vi && <p className="text-sm text-text-secondary mt-0.5">{vi}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
