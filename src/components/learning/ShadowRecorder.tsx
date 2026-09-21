'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, Square, Volume2, AlertTriangle } from 'lucide-react'
import type { ProduceExercise } from '@/types'
import { useMicRecorder } from '@/hooks/useMicRecorder'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { cn } from '@/lib/utils'

interface ShadowRecorderProps {
  exercise: ProduceExercise
  onSubmit: (correct: boolean) => void
  onNext: () => void
}

export function ShadowRecorder({ exercise, onSubmit, onNext }: ShadowRecorderProps) {
  const { isSupported, permissionState, audioUrl, startRecording, stopRecording, reset } = useMicRecorder()
  const { isSupported: ttsSupported, hasKoreanVoice, isSpeaking, speak } = useSpeechSynthesis()
  const [showModel, setShowModel] = useState(false)
  const [selfCorrect, setSelfCorrect] = useState<boolean | null>(null)

  function handleSelfRate(correct: boolean) {
    setSelfCorrect(correct)
    onSubmit(correct)
  }

  function handleRestart() {
    reset()
    setShowModel(false)
    setSelfCorrect(null)
  }

  return (
    <div className="w-full max-w-2xl bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-8">
      <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-6">
        <Mic className="w-3.5 h-3.5" /> Luyện nói
      </div>
      <p className="text-base text-text-primary mb-6 leading-relaxed">{exercise.promptVi}</p>

      {!isSupported ? (
        <div className="flex items-center gap-2 text-xs text-accent-amber bg-accent-amber/10 border border-accent-amber/20 rounded-lg px-3 py-2">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          Trình duyệt này không hỗ trợ ghi âm.
        </div>
      ) : permissionState === 'denied' ? (
        <div className="flex items-center gap-2 text-xs text-accent-amber bg-accent-amber/10 border border-accent-amber/20 rounded-lg px-3 py-2">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          Không truy cập được micro — hãy cấp quyền micro cho trang này rồi thử lại.
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          {!audioUrl ? (
            <button
              onClick={permissionState === 'recording' ? stopRecording : startRecording}
              className={cn(
                'w-16 h-16 rounded-full flex items-center justify-center transition-colors',
                permissionState === 'recording'
                  ? 'bg-accent-error text-white animate-pulse'
                  : 'bg-accent-coral text-white hover:bg-[#e55f40]'
              )}
              aria-label={permissionState === 'recording' ? 'Dừng ghi âm' : 'Bắt đầu ghi âm'}
            >
              {permissionState === 'recording' ? <Square className="w-5 h-5" /> : <Mic className="w-6 h-6" />}
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <audio src={audioUrl} controls className="h-9" />
              <button onClick={handleRestart} className="text-xs text-text-tertiary hover:text-text-primary transition-colors">
                Ghi lại
              </button>
            </div>
          )}
          <p className="text-xs text-text-tertiary">
            {permissionState === 'recording'
              ? 'Đang ghi âm — bấm để dừng'
              : audioUrl
                ? 'Nghe lại giọng của bạn'
                : 'Bấm để bắt đầu nói to câu chứa mẫu ngữ pháp'}
          </p>
        </div>
      )}

      {audioUrl && !showModel && (
        <button
          onClick={() => setShowModel(true)}
          className="mt-6 w-full px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.16)] text-sm font-medium text-text-primary hover:bg-bg-elevated transition-colors"
        >
          Xem câu mẫu & so sánh
        </button>
      )}

      {showModel && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">Câu mẫu tham khảo</p>
          <div className="bg-bg-elevated rounded-lg px-4 py-3 space-y-1 mb-3">
            <p lang="ko" className="font-korean text-base text-text-primary">{exercise.modelAnswerKo}</p>
            <p className="text-sm text-text-secondary">{exercise.modelAnswerVi}</p>
          </div>
          {ttsSupported && hasKoreanVoice && (
            <button
              onClick={() => speak(exercise.modelAnswerKo)}
              disabled={isSpeaking}
              className="flex items-center gap-2 text-sm text-accent-korean hover:underline mb-4 disabled:opacity-50"
            >
              <Volume2 className="w-4 h-4" /> {isSpeaking ? 'Đang phát...' : 'Nghe giọng mẫu'}
            </button>
          )}

          {selfCorrect === null ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSelfRate(true)}
                className="flex-1 py-2.5 rounded-lg border border-accent-success/40 text-accent-success text-sm font-medium hover:bg-accent-success/10 transition-colors"
              >
                Tôi nói ổn
              </button>
              <button
                onClick={() => handleSelfRate(false)}
                className="flex-1 py-2.5 rounded-lg border border-accent-amber/40 text-accent-amber text-sm font-medium hover:bg-accent-amber/10 transition-colors"
              >
                Cần luyện thêm
              </button>
            </div>
          ) : (
            <button
              onClick={onNext}
              className="w-full px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors"
            >
              Tiếp theo →
            </button>
          )}
        </motion.div>
      )}
    </div>
  )
}
