'use client'

import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import Link from 'next/link'
import type { SessionStats } from '@/lib/srs/session'

interface SessionEndProps {
  stats: SessionStats
  onRetry: () => void
}

export function SessionEnd({ stats, onRetry }: SessionEndProps) {
  const { totalCards, correct, xpEarned, accuracy } = stats
  const emoji = accuracy >= 80 ? '🎉' : accuracy >= 50 ? '💪' : '📚'

  return (
    <div className="h-screen bg-bg-base flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="text-center max-w-md w-full"
      >
        <p className="text-7xl mb-6">{emoji}</p>
        <h1 className="font-serif text-[52px] font-normal text-text-primary mb-2">Xong rồi!</h1>
        <p className="text-text-secondary mb-10">{totalCards} cards · {accuracy}% chính xác</p>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { label: 'Nhớ',    value: correct,              color: 'text-accent-success' },
            { label: 'Cần ôn', value: totalCards - correct, color: 'text-accent-error' },
            { label: 'XP',     value: `+${xpEarned}`,       color: 'text-accent-amber' },
          ].map(s => (
            <div key={s.label} className="bg-bg-surface rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className={`text-2xl font-semibold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-text-tertiary mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <Link
            href="/learn"
            className="px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all"
          >
            Dashboard
          </Link>
          <button
            onClick={onRetry}
            className="px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Học lại
          </button>
        </div>
      </motion.div>
    </div>
  )
}
