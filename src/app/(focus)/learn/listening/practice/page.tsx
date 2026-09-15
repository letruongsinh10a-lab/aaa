'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, Zap, PartyPopper } from 'lucide-react'
import { listeningByLevelAll } from '@/data/listening'
import { AudioPlayer } from '@/components/learning/AudioPlayer'
import { awardXP } from '@/lib/srs/store'
import { cn } from '@/lib/utils'

const XP_REWARD = 10

export default function ListeningPracticePage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg-base flex items-center justify-center">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    }>
      <ListeningPracticeSession />
    </Suspense>
  )
}

function ListeningPracticeSession() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const dialogue = listeningByLevelAll.find(d => d.id === id)
  const [completed, setCompleted] = useState(false)

  if (!dialogue) {
    return (
      <div className="h-screen bg-bg-base flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-text-secondary">Không tìm thấy hội thoại này.</p>
        <Link href="/learn/listening" className="text-sm text-accent-coral hover:underline">
          ← Quay lại Luyện nghe
        </Link>
      </div>
    )
  }

  function handleComplete() {
    awardXP(XP_REWARD)
    setCompleted(true)
  }

  if (completed) {
    return (
      <div className="h-screen bg-bg-base flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="text-center max-w-md w-full"
        >
          <PartyPopper className="w-14 h-14 text-accent-amber mx-auto mb-6" />
          <h1 className="font-serif text-[44px] font-normal text-text-primary mb-2">Xong rồi!</h1>
          <p className="text-text-secondary mb-8">
            Bạn vừa luyện nghe "{dialogue.titleVi}" · <span className="text-accent-amber">+{XP_REWARD} XP</span>
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/learn/listening"
              className="px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all"
            >
              Bài khác
            </Link>
            <button
              onClick={() => setCompleted(false)}
              className="px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors"
            >
              Nghe lại
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
        <Link
          href="/learn/listening"
          className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Thoát"
        >
          <X className="w-5 h-5" />
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary truncate">{dialogue.titleVi}</p>
          <p className="text-xs text-text-tertiary truncate">{dialogue.descVi}</p>
        </div>
      </div>

      {/* Dialogue — chat-bubble layout, each line playable independently */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          {dialogue.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
              className={cn('flex', line.speaker === 'A' ? 'justify-start' : 'justify-end')}
            >
              <div
                className={cn(
                  'max-w-[85%] rounded-2xl px-5 py-4 border',
                  line.speaker === 'A'
                    ? 'bg-bg-surface border-[rgba(255,255,255,0.08)] rounded-tl-sm'
                    : 'bg-[rgba(108,142,239,0.06)] border-[rgba(108,142,239,0.16)] rounded-tr-sm'
                )}
              >
                <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-text-tertiary mb-2">
                  Người {line.speaker}
                </p>
                <AudioPlayer line={line} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom: complete session */}
      <div className="px-6 py-5 border-t border-[rgba(255,255,255,0.06)] shrink-0">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleComplete}
            className="w-full py-3 rounded-xl bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors flex items-center justify-center gap-2"
          >
            Đã nghe hết <Zap className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
