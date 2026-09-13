'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, X, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { VocabCard, PartOfSpeech } from '@/types'

export const POS_LABELS: Record<PartOfSpeech, string> = {
  noun: 'Danh từ',
  verb: 'Động từ',
  adj: 'Tính từ',
  adv: 'Trạng từ',
  particle: 'Trợ từ',
  expression: 'Thành ngữ',
  counter: 'Đơn vị',
  determiner: 'Định từ',
}

export const POS_BADGE: Record<PartOfSpeech, 'default' | 'coral' | 'success' | 'warning' | 'info'> = {
  noun: 'default',
  verb: 'coral',
  adj: 'info',
  adv: 'warning',
  particle: 'success',
  expression: 'coral',
  counter: 'default',
  determiner: 'default',
}

export function playAudio(url?: string) {
  if (url) new Audio(url).play().catch(() => {})
}

export function DetailSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">
        {label}
      </p>
      {children}
    </div>
  )
}

export function ChipList({ items, tone }: { items: string[]; tone?: 'success' | 'error' }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <span
          key={i}
          lang="ko"
          className={cn(
            'font-korean px-2.5 py-1 rounded-lg text-xs bg-bg-elevated border border-[rgba(255,255,255,0.06)]',
            tone === 'success' && 'text-accent-success',
            tone === 'error' && 'text-accent-error',
            !tone && 'text-text-secondary'
          )}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function VocabDetailPanel({ card, onClose }: { card: VocabCard; onClose: () => void }) {
  // Phát âm 1 lần khi mở chi tiết từ
  useEffect(() => {
    playAudio(card.audioUrl)
  }, [card.id, card.audioUrl])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        className="relative bg-bg-surface border border-[rgba(255,255,255,0.12)] rounded-2xl p-8 w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-text-tertiary hover:text-text-primary hover:bg-bg-elevated transition-colors"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Word header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={POS_BADGE[card.pos]}>{POS_LABELS[card.pos]}</Badge>
              {card.day && <Badge variant="default">Ngày {card.day}</Badge>}
            </div>
            <p lang="ko" className="font-korean text-5xl font-bold text-text-primary leading-none mb-2">
              {card.word}
            </p>
            <p className="font-mono text-sm text-text-tertiary">
              {card.romanization}
              {card.pronunciationIrregular && (
                <span lang="ko" className="font-korean ml-2 text-text-tertiary">
                  [{card.pronunciationIrregular}]
                </span>
              )}
            </p>
          </div>
          {card.audioUrl && (
            <button
              onClick={() => playAudio(card.audioUrl)}
              className="mt-2 p-3 rounded-full bg-bg-elevated border border-[rgba(255,255,255,0.08)] text-text-secondary hover:text-accent-coral hover:border-accent-coral/30 transition-all"
              aria-label="Phát âm"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Meaning */}
        <div className="p-4 rounded-xl bg-bg-elevated border border-[rgba(255,255,255,0.06)]">
          <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-1">Nghĩa</p>
          <p className="text-xl font-semibold text-text-primary">{card.meaningVi}</p>
        </div>

        {/* Conjugation */}
        {card.conjugation && card.conjugation.length > 0 && (
          <DetailSection label="Chia">
            <ChipList items={card.conjugation} />
          </DetailSection>
        )}

        {/* Examples */}
        {card.examples.length > 0 && (
          <DetailSection label="Ví dụ">
            <div className="space-y-3">
              {card.examples.map((ex, i) => (
                <div key={i} className="rounded-lg bg-bg-elevated px-4 py-3 space-y-1">
                  <p lang="ko" className="font-korean text-base text-text-primary">{ex.ko}</p>
                  <p className="text-sm text-text-secondary">{ex.vi}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {/* Cụm từ */}
        {card.relatedPhrases && card.relatedPhrases.length > 0 && (
          <DetailSection label="Cụm từ">
            <ChipList items={card.relatedPhrases} />
          </DetailSection>
        )}

        {/* Cấu trúc */}
        {card.structure && card.structure.length > 0 && (
          <DetailSection label="Cấu trúc">
            <ChipList items={card.structure} />
          </DetailSection>
        )}

        {/* Đồng nghĩa / Trái nghĩa */}
        {((card.synonyms && card.synonyms.length > 0) || (card.antonyms && card.antonyms.length > 0)) && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {card.synonyms && card.synonyms.length > 0 && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">
                  Đồng nghĩa
                </p>
                <ChipList items={card.synonyms} tone="success" />
              </div>
            )}
            {card.antonyms && card.antonyms.length > 0 && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">
                  Trái nghĩa
                </p>
                <ChipList items={card.antonyms} tone="error" />
              </div>
            )}
          </div>
        )}

        {/* Từ liên quan */}
        {card.relatedWords && card.relatedWords.length > 0 && (
          <DetailSection label="Từ liên quan">
            <ChipList items={card.relatedWords} />
          </DetailSection>
        )}

        {/* Extra notes: Tục ngữ / So sánh / Quán dụng ngữ / Thành ngữ / Ví dụ cụm / Thang độ */}
        {card.extraNotes && card.extraNotes.length > 0 && (
          <>
            {card.extraNotes.map((note, i) => (
              <DetailSection key={i} label={note.label}>
                <p className="text-sm text-text-secondary leading-relaxed">{note.text}</p>
              </DetailSection>
            ))}
          </>
        )}

        {/* Add to SRS */}
        <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-coral text-white text-sm font-medium hover:bg-accent-coral/90 transition-colors">
          <Zap className="w-4 h-4" />
          Thêm vào bộ thẻ ôn tập
        </button>
      </motion.div>
    </motion.div>
  )
}
