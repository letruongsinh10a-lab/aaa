'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, RotateCcw, Eye, EyeOff, AlertTriangle } from 'lucide-react'
import type { DialogueLine } from '@/types'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { cn } from '@/lib/utils'

const RATES = [0.5, 0.75, 1, 1.25]

/** Split into (word, startIndex) pairs on whitespace, for mapping a TTS charIndex back to "which word". */
function splitWords(text: string): { word: string; start: number }[] {
  const words: { word: string; start: number }[] = []
  let cursor = 0
  for (const word of text.split(/(\s+)/)) {
    if (word.trim().length > 0) words.push({ word, start: cursor })
    cursor += word.length
  }
  return words
}

interface AudioPlayerProps {
  line: DialogueLine
}

export function AudioPlayer({ line }: AudioPlayerProps) {
  const { isSupported, hasKoreanVoice, isSpeaking, currentCharIndex, rate, setRate, speak } = useSpeechSynthesis()
  const [showTranscript, setShowTranscript] = useState(false)
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false)

  const words = useMemo(() => splitWords(line.ko), [line.ko])

  const activeWordIndex = useMemo(() => {
    if (currentCharIndex === null) return -1
    for (let i = words.length - 1; i >= 0; i--) {
      if (currentCharIndex >= words[i].start) return i
    }
    return -1
  }, [currentCharIndex, words])

  function handlePlay() {
    speak(line.ko)
    setHasPlayedOnce(true)
  }

  if (!isSupported || !hasKoreanVoice) {
    return (
      <div className="flex items-center gap-2 text-xs text-accent-amber bg-accent-amber/10 border border-accent-amber/20 rounded-lg px-3 py-2">
        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
        {!isSupported
          ? 'Trình duyệt này không hỗ trợ đọc văn bản thành giọng nói.'
          : 'Không tìm thấy giọng đọc tiếng Hàn trên máy — hãy thử Chrome hoặc Edge.'}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePlay}
          aria-label={hasPlayedOnce ? 'Nghe lại' : 'Nghe'}
          className={cn(
            'w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors',
            isSpeaking
              ? 'bg-accent-coral text-white'
              : 'bg-bg-elevated text-text-primary hover:bg-[rgba(255,107,74,0.15)] hover:text-accent-coral'
          )}
        >
          {isSpeaking ? (
            <motion.span
              className="flex items-end gap-0.5 h-3.5"
              aria-hidden
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="w-0.5 bg-white rounded-full"
                  animate={{ height: ['30%', '100%', '30%'] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </motion.span>
          ) : hasPlayedOnce ? (
            <RotateCcw className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>

        {/* Speed selector */}
        <div className="flex items-center gap-1 bg-bg-elevated rounded-full p-0.5">
          {RATES.map(r => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={cn(
                'px-2 py-1 rounded-full text-[11px] font-medium transition-colors',
                rate === r ? 'bg-accent-coral text-white' : 'text-text-tertiary hover:text-text-secondary'
              )}
            >
              {r}x
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowTranscript(v => !v)}
          className="ml-auto flex items-center gap-1.5 text-xs text-text-tertiary hover:text-text-primary transition-colors px-2 py-1"
        >
          {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          {showTranscript ? 'Ẩn phụ đề' : 'Hiện phụ đề'}
        </button>
      </div>

      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <p lang="ko" className="font-korean text-base text-text-primary leading-relaxed">
              {words.map((w, i) => (
                <span
                  key={i}
                  className={cn(
                    'transition-colors duration-150',
                    i === activeWordIndex && isSpeaking ? 'text-accent-coral font-semibold' : ''
                  )}
                >
                  {w.word}{' '}
                </span>
              ))}
            </p>
            <p className="text-sm text-text-secondary mt-1">{line.vi}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
