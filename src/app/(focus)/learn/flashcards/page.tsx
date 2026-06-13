'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Volume2, RotateCcw, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { sampleCards } from '@/data/flashcards'
import type { VocabCard } from '@/types'

const ratingButtons = [
  { label: 'Quên rồi', key: 'again', color: 'border-accent-error/40 text-accent-error hover:bg-accent-error/10', kbd: '1' },
  { label: 'Khó', key: 'hard', color: 'border-accent-amber/40 text-accent-amber hover:bg-accent-amber/10', kbd: '2' },
  { label: 'Nhớ', key: 'good', color: 'border-accent-success/40 text-accent-success hover:bg-accent-success/10', kbd: '3' },
  { label: 'Dễ', key: 'easy', color: 'border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10', kbd: '4' },
]

export default function FlashcardsPage() {
  const [cards] = useState<VocabCard[]>(sampleCards)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const [rated, setRated] = useState<Record<string, string>>({})

  const card = cards[index]
  const progress = (index / cards.length) * 100

  const flip = useCallback(() => setFlipped((v) => !v), [])

  const rate = useCallback((rating: string) => {
    setRated((prev) => ({ ...prev, [card.id]: rating }))
    setFlipped(false)
    if (index + 1 >= cards.length) {
      setTimeout(() => setDone(true), 200)
    } else {
      setTimeout(() => setIndex((i) => i + 1), 200)
    }
  }, [card, index, cards.length])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ') { e.preventDefault(); flip() }
      if (flipped) {
        if (e.key === '1') rate('again')
        if (e.key === '2') rate('hard')
        if (e.key === '3') rate('good')
        if (e.key === '4') rate('easy')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [flip, rate, flipped])

  if (done) {
    const correct = Object.values(rated).filter(r => r === 'good' || r === 'easy').length
    const accuracy = Math.round((correct / cards.length) * 100)
    return (
      <div className="h-screen bg-bg-base flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <p className="text-6xl mb-6">{accuracy >= 80 ? '🎉' : accuracy >= 50 ? '💪' : '📚'}</p>
          <h1 className="font-serif text-[48px] font-normal text-text-primary mb-3">Hoàn thành!</h1>
          <p className="text-text-secondary mb-8">
            {cards.length} cards · {accuracy}% chính xác
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8 text-center">
            <div className="bg-bg-surface rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-2xl font-semibold text-accent-success">{correct}</p>
              <p className="text-xs text-text-tertiary mt-1">Nhớ</p>
            </div>
            <div className="bg-bg-surface rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-2xl font-semibold text-accent-error">{cards.length - correct}</p>
              <p className="text-xs text-text-tertiary mt-1">Cần ôn thêm</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/learn"
              className="px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all">
              Về Dashboard
            </Link>
            <button
              onClick={() => { setIndex(0); setFlipped(false); setDone(false); setRated({}) }}
              className="px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Học lại
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-bg-base flex flex-col select-none">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 h-16 border-b border-[rgba(255,255,255,0.06)] shrink-0">
        <Link href="/learn" className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors">
          <X className="w-5 h-5" />
        </Link>
        {/* Progress bar */}
        <div className="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-coral rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-text-tertiary shrink-0">{index + 1} / {cards.length}</span>
      </div>

      {/* Card area */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-xl" style={{ perspective: 1200 }}>
          <motion.div
            key={`${card.id}-${flipped}`}
            onClick={flip}
            className="relative cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Front */}
            <div
              className="bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 min-h-[360px] flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-8">
                {card.pos} · {card.topikLevel.toUpperCase()}
              </p>
              <p className="font-korean text-[80px] font-bold text-text-primary leading-none mb-4">
                {card.word}
              </p>
              <button className="mt-6 p-2 rounded-full text-text-tertiary hover:text-accent-coral transition-colors" onClick={e => e.stopPropagation()} aria-label="Play audio">
                <Volume2 className="w-5 h-5" />
              </button>
              <p className="text-text-tertiary text-sm mt-8">
                Nhấn <kbd className="px-1.5 py-0.5 bg-bg-elevated rounded text-xs border border-[rgba(255,255,255,0.1)]">Space</kbd> để lật
              </p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <p className="font-korean text-[48px] font-bold text-text-primary leading-none mb-2">{card.word}</p>
              <p className="text-text-secondary text-base mb-2">{card.romanization}</p>
              <p className="text-text-primary text-2xl font-semibold mt-4 mb-6">{card.meaningVi}</p>
              {card.examples[0] && (
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-5 w-full text-left">
                  <p className="font-korean text-sm text-text-secondary mb-1">{card.examples[0].ko}</p>
                  <p className="text-xs text-text-tertiary">{card.examples[0].vi}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rating buttons */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="px-6 pb-8 shrink-0"
          >
            <p className="text-center text-xs text-text-tertiary mb-4">Bạn nhớ từ này ở mức nào?</p>
            <div className="flex gap-3 max-w-xl mx-auto">
              {ratingButtons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => rate(btn.key)}
                  className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all duration-150 ${btn.color}`}
                >
                  <span className="block">{btn.label}</span>
                  <span className="block text-[10px] opacity-50 mt-0.5">({btn.kbd})</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint when not flipped */}
      {!flipped && (
        <div className="px-6 pb-8 shrink-0 flex justify-center">
          <button
            onClick={flip}
            className="flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            Xem đáp án <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
