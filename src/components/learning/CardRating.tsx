'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { SRSRating } from '@/types'

const BUTTONS: { label: string; key: SRSRating; color: string; kbd: string }[] = [
  { label: 'Quên rồi', key: 'again', color: 'border-accent-error/40 text-accent-error hover:bg-accent-error/10',   kbd: '1' },
  { label: 'Khó',      key: 'hard',  color: 'border-accent-amber/40 text-accent-amber hover:bg-accent-amber/10',   kbd: '2' },
  { label: 'Nhớ',      key: 'good',  color: 'border-accent-success/40 text-accent-success hover:bg-accent-success/10', kbd: '3' },
  { label: 'Dễ',       key: 'easy',  color: 'border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10',     kbd: '4' },
]

interface CardRatingProps {
  visible: boolean
  onRate: (rating: SRSRating) => void
  onFlip: () => void
}

export function CardRating({ visible, onRate, onFlip }: CardRatingProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="rating"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.18 }}
        >
          <p className="text-center text-xs text-text-tertiary mb-3">Bạn nhớ từ này ở mức nào?</p>
          <div className="flex gap-2 max-w-xl mx-auto">
            {BUTTONS.map(btn => (
              <button
                key={btn.key}
                onClick={() => onRate(btn.key)}
                className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all duration-150 ${btn.color}`}
              >
                <span className="block">{btn.label}</span>
                <span className="block text-[10px] opacity-40 mt-0.5">({btn.kbd})</span>
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="hint"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="flex justify-center"
        >
          <button
            onClick={onFlip}
            className="text-sm text-text-tertiary hover:text-text-primary transition-colors px-4 py-2"
          >
            Nhấn để xem đáp án →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
