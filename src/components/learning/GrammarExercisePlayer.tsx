'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, PenLine, SplitSquareHorizontal, PencilLine } from 'lucide-react'
import type { DiscriminateExercise, FillBlankExercise, GrammarExercise, ProduceExercise } from '@/types'
import { cn } from '@/lib/utils'

const TYPE_META: Record<GrammarExercise['type'], { label: string; icon: typeof PenLine }> = {
  'fill-blank': { label: 'Điền từ', icon: PenLine },
  discriminate: { label: 'Phân biệt cách dùng', icon: SplitSquareHorizontal },
  produce: { label: 'Tự đặt câu', icon: PencilLine },
}

function TypeBadge({ type }: { type: GrammarExercise['type'] }) {
  const { label, icon: Icon } = TYPE_META[type]
  return (
    <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-6">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  )
}

function KoSentenceWithBlank({ sentenceKo, blankNode }: { sentenceKo: string; blankNode: React.ReactNode }) {
  const [before, after] = sentenceKo.split('___')
  return (
    <p lang="ko" className="font-korean text-xl text-text-primary leading-relaxed">
      {before}
      {blankNode}
      {after}
    </p>
  )
}

function NextButton({ onNext }: { onNext: () => void }) {
  return (
    <button
      onClick={onNext}
      className="mt-6 px-5 py-2.5 rounded-lg bg-accent-coral text-white text-sm font-medium hover:bg-[#e55f40] transition-colors"
    >
      Tiếp theo →
    </button>
  )
}

// ─── Fill blank ────────────────────────────────────────────────────────────

function FillBlankView({
  exercise,
  onSubmit,
  onNext,
}: {
  exercise: FillBlankExercise
  onSubmit: (exercise: FillBlankExercise, userAnswer: string) => boolean
  onNext: () => void
}) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<boolean | null>(null)

  function handleCheck() {
    if (!value.trim()) return
    setResult(onSubmit(exercise, value))
  }

  return (
    <div>
      <TypeBadge type="fill-blank" />
      <p className="text-sm text-text-secondary mb-4">{exercise.promptVi}</p>
      <KoSentenceWithBlank
        sentenceKo={exercise.sentenceKo}
        blankNode={
          <input
            value={value}
            disabled={result !== null}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            lang="ko"
            className={cn(
              'font-korean mx-1 px-2 py-0.5 w-28 text-center bg-bg-elevated rounded-md border outline-none',
              result === null && 'border-[rgba(255,255,255,0.16)] focus:border-accent-coral',
              result === true && 'border-accent-success text-accent-success',
              result === false && 'border-accent-error text-accent-error'
            )}
          />
        }
      />
      {exercise.hintVi && <p className="text-xs text-text-tertiary mt-3">Gợi ý: {exercise.hintVi}</p>}

      {result === null ? (
        <button
          onClick={handleCheck}
          disabled={!value.trim()}
          className="mt-6 px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.16)] text-sm font-medium text-text-primary hover:bg-bg-elevated disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Kiểm tra
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <div className={cn(
            'flex items-center gap-2 text-sm rounded-lg px-4 py-2.5 border',
            result ? 'text-accent-success border-accent-success/30 bg-accent-success/10' : 'text-accent-error border-accent-error/30 bg-accent-error/10'
          )}>
            {result ? <Check className="w-4 h-4 shrink-0" /> : <X className="w-4 h-4 shrink-0" />}
            {result ? 'Chính xác!' : <span>Chưa đúng — đáp án là <span lang="ko" className="font-korean font-semibold">{exercise.answer}</span></span>}
          </div>
          <NextButton onNext={onNext} />
        </motion.div>
      )}
    </div>
  )
}

// ─── Discriminate ──────────────────────────────────────────────────────────

function DiscriminateView({
  exercise,
  onSubmit,
  onNext,
}: {
  exercise: DiscriminateExercise
  onSubmit: (exercise: DiscriminateExercise, selectedIndex: number) => boolean
  onNext: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<boolean | null>(null)

  function handleSelect(i: number) {
    if (selected !== null) return
    setSelected(i)
    setResult(onSubmit(exercise, i))
  }

  return (
    <div>
      <TypeBadge type="discriminate" />
      <p className="text-sm text-text-secondary mb-4">{exercise.promptVi}</p>
      <KoSentenceWithBlank sentenceKo={exercise.sentenceKo} blankNode={<span className="mx-1 text-text-tertiary">___</span>} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
        {exercise.options.map((opt, i) => {
          const isCorrectOpt = i === exercise.correctIndex
          const isPicked = i === selected
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              lang="ko"
              className={cn(
                'font-korean text-left px-4 py-3 rounded-lg border text-base transition-colors',
                selected === null && 'border-[rgba(255,255,255,0.12)] bg-bg-surface hover:border-[rgba(255,255,255,0.24)]',
                selected !== null && isCorrectOpt && 'border-accent-success/40 bg-accent-success/10 text-accent-success',
                selected !== null && isPicked && !isCorrectOpt && 'border-accent-error/40 bg-accent-error/10 text-accent-error',
                selected !== null && !isPicked && !isCorrectOpt && 'border-[rgba(255,255,255,0.06)] opacity-40'
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {result !== null && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
          <p className="text-sm text-text-secondary leading-relaxed bg-bg-elevated rounded-lg px-4 py-3">
            {exercise.explanation}
          </p>
          <NextButton onNext={onNext} />
        </motion.div>
      )}
    </div>
  )
}

// ─── Produce ───────────────────────────────────────────────────────────────

function ProduceView({
  exercise,
  onSubmit,
  onNext,
}: {
  exercise: ProduceExercise
  onSubmit: (exercise: ProduceExercise, selfCorrect: boolean) => void
  onNext: () => void
}) {
  const [draft, setDraft] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [selfCorrect, setSelfCorrect] = useState<boolean | null>(null)

  function handleSelfRate(correct: boolean) {
    setSelfCorrect(correct)
    onSubmit(exercise, correct)
  }

  return (
    <div>
      <TypeBadge type="produce" />
      <p className="text-base text-text-primary mb-4 leading-relaxed">{exercise.promptVi}</p>

      <textarea
        value={draft}
        disabled={showModel}
        onChange={e => setDraft(e.target.value)}
        placeholder="Viết câu tiếng Hàn của bạn ở đây trước khi xem câu mẫu..."
        lang="ko"
        rows={3}
        className="font-korean w-full bg-bg-elevated rounded-lg border border-[rgba(255,255,255,0.12)] px-4 py-3 text-base outline-none focus:border-accent-coral resize-none disabled:opacity-70"
      />

      {!showModel ? (
        <button
          onClick={() => setShowModel(true)}
          disabled={!draft.trim()}
          className="mt-4 px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.16)] text-sm font-medium text-text-primary hover:bg-bg-elevated disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Xem câu mẫu
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">Câu mẫu tham khảo</p>
          <div className="bg-bg-elevated rounded-lg px-4 py-3 space-y-1 mb-4">
            <p lang="ko" className="font-korean text-base text-text-primary">{exercise.modelAnswerKo}</p>
            <p className="text-sm text-text-secondary">{exercise.modelAnswerVi}</p>
          </div>

          {selfCorrect === null ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSelfRate(true)}
                className="flex-1 py-2.5 rounded-lg border border-accent-success/40 text-accent-success text-sm font-medium hover:bg-accent-success/10 transition-colors"
              >
                Tôi làm đúng
              </button>
              <button
                onClick={() => handleSelfRate(false)}
                className="flex-1 py-2.5 rounded-lg border border-accent-amber/40 text-accent-amber text-sm font-medium hover:bg-accent-amber/10 transition-colors"
              >
                Cần luyện thêm
              </button>
            </div>
          ) : (
            <NextButton onNext={onNext} />
          )}
        </motion.div>
      )}
    </div>
  )
}

// ─── Root ──────────────────────────────────────────────────────────────────

interface GrammarExercisePlayerProps {
  exercise: GrammarExercise
  onSubmitFillBlank: (exercise: FillBlankExercise, userAnswer: string) => boolean
  onSubmitDiscriminate: (exercise: DiscriminateExercise, selectedIndex: number) => boolean
  onSubmitProduce: (exercise: ProduceExercise, selfCorrect: boolean) => void
  onNext: () => void
}

export function GrammarExercisePlayer({
  exercise,
  onSubmitFillBlank,
  onSubmitDiscriminate,
  onSubmitProduce,
  onNext,
}: GrammarExercisePlayerProps) {
  return (
    <div className="w-full max-w-2xl bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-8">
      {exercise.type === 'fill-blank' && (
        <FillBlankView exercise={exercise} onSubmit={onSubmitFillBlank} onNext={onNext} />
      )}
      {exercise.type === 'discriminate' && (
        <DiscriminateView exercise={exercise} onSubmit={onSubmitDiscriminate} onNext={onNext} />
      )}
      {exercise.type === 'produce' && (
        <ProduceView exercise={exercise} onSubmit={onSubmitProduce} onNext={onNext} />
      )}
    </div>
  )
}
