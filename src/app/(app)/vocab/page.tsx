'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Volume2, X, BookOpen, Zap, ChevronDown, Layers } from 'lucide-react'
import { vocabTopik2All, vocabTopik2Days } from '@/data/vocab-topik2'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { VocabCard, PartOfSpeech } from '@/types'

const DAYS = vocabTopik2Days.map(d => d.day)
const DAY_MAP: Record<number, VocabCard[]> = Object.fromEntries(
  vocabTopik2Days.map(d => [d.day, d.words])
)

const POS_LABELS: Record<PartOfSpeech, string> = {
  noun: 'Danh từ',
  verb: 'Động từ',
  adj: 'Tính từ',
  adv: 'Trạng từ',
  particle: 'Trợ từ',
  expression: 'Thành ngữ',
  counter: 'Đơn vị',
  determiner: 'Định từ',
}

const POS_BADGE: Record<PartOfSpeech, 'default' | 'coral' | 'success' | 'warning' | 'info'> = {
  noun: 'default',
  verb: 'coral',
  adj: 'info',
  adv: 'warning',
  particle: 'success',
  expression: 'coral',
  counter: 'default',
  determiner: 'default',
}

function playAudio(url?: string) {
  if (url) new Audio(url).play().catch(() => {})
}

function DetailSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">
        {label}
      </p>
      {children}
    </div>
  )
}

function ChipList({ items, tone }: { items: string[]; tone?: 'success' | 'error' }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <span
          key={i}
          className={cn(
            'px-2.5 py-1 rounded-lg text-xs bg-bg-elevated border border-[rgba(255,255,255,0.06)]',
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

function VocabDetailPanel({ card, onClose }: { card: VocabCard; onClose: () => void }) {
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

export default function VocabPage() {
  const [activeDay, setActiveDay] = useState<number>(DAYS[0])
  const [search, setSearch] = useState('')
  const [posFilter, setPosFilter] = useState<PartOfSpeech | 'all'>('all')
  const [selectedCard, setSelectedCard] = useState<VocabCard | null>(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 60

  const isSearching = search.trim().length > 0
  const cards = isSearching ? vocabTopik2All : (DAY_MAP[activeDay] ?? [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return cards.filter(c => {
      const matchSearch = !q ||
        c.word.includes(q) ||
        c.meaningVi.toLowerCase().includes(q) ||
        c.romanization.toLowerCase().includes(q)
      const matchPos = posFilter === 'all' || c.pos === posFilter
      return matchSearch && matchPos
    })
  }, [cards, search, posFilter])

  const paged = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = paged.length < filtered.length

  const handleDayChange = useCallback((day: number) => {
    setActiveDay(day)
    setPosFilter('all')
    setPage(1)
  }, [])

  const posCounts = useMemo(() => {
    const map: Partial<Record<PartOfSpeech, number>> = {}
    cards.forEach(c => { map[c.pos] = (map[c.pos] ?? 0) + 1 })
    return map
  }, [cards])

  return (
    <div className="p-6 lg:p-10 max-w-[1100px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">
          Từ vựng
        </p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Từ mới TOPIK II
        </h1>
        <p className="text-text-secondary mt-2">
          {vocabTopik2All.length.toLocaleString('vi-VN')} từ · chia thành {DAYS.length} ngày học.
        </p>
      </motion.div>

      {/* Day picker */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="flex items-center gap-2 text-sm text-text-secondary">
            <Layers className="w-4 h-4" />
            Chọn ngày học
          </p>
          {!isSearching && (
            <Link
              href={`/learn/flashcards?day=${activeDay}`}
              className={buttonVariants({ variant: 'primary', size: 'sm' })}
            >
              Học thẻ ngày {activeDay} <Zap className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-[repeat(15,minmax(0,1fr))] gap-1.5">
          {DAYS.map(day => (
            <button
              key={day}
              onClick={() => handleDayChange(day)}
              className={cn(
                'h-9 rounded-lg text-xs font-medium transition-all duration-150',
                !isSearching && activeDay === day
                  ? 'bg-accent-coral text-white'
                  : 'bg-bg-elevated border border-[rgba(255,255,255,0.06)] text-text-tertiary hover:text-text-primary hover:border-[rgba(255,255,255,0.16)]'
              )}
            >
              {day}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Search + filter bar */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex gap-3 mb-6 flex-col sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Tìm từ, nghĩa trên toàn bộ 1.710 từ..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            className="w-full bg-bg-elevated border border-[rgba(255,255,255,0.08)] rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-[rgba(255,255,255,0.20)] transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* POS filter */}
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => { setPosFilter('all'); setPage(1) }}
            className={cn(
              'px-3 py-2 rounded-lg text-xs font-medium transition-all',
              posFilter === 'all'
                ? 'bg-bg-elevated border border-[rgba(255,255,255,0.16)] text-text-primary'
                : 'text-text-tertiary hover:text-text-secondary'
            )}
          >
            Tất cả
          </button>
          {(Object.keys(POS_LABELS) as PartOfSpeech[]).filter(p => (posCounts[p] ?? 0) > 0).map(pos => (
            <button
              key={pos}
              onClick={() => { setPosFilter(pos); setPage(1) }}
              className={cn(
                'px-3 py-2 rounded-lg text-xs font-medium transition-all',
                posFilter === pos
                  ? 'bg-bg-elevated border border-[rgba(255,255,255,0.16)] text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary'
              )}
            >
              {POS_LABELS[pos]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Result count */}
      <div className="flex items-center gap-3 mb-4 text-sm text-text-tertiary">
        <BookOpen className="w-4 h-4" />
        <span>
          {isSearching
            ? `${filtered.length} kết quả trong toàn bộ ${vocabTopik2All.length} từ`
            : filtered.length === cards.length
              ? `Ngày ${activeDay} · ${cards.length} từ`
              : `${filtered.length} / ${cards.length} từ · Ngày ${activeDay}`}
        </span>
        {posFilter !== 'all' && (
          <button
            onClick={() => { setPosFilter('all'); setPage(1) }}
            className="text-accent-coral text-xs hover:underline"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Grid */}
      <motion.div
        variants={stagger(0.02)}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      >
        {paged.map(card => (
          <motion.button
            key={card.id}
            variants={fadeUp}
            onClick={() => setSelectedCard(card)}
            className="group text-left p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-bg-surface hover:border-[rgba(255,255,255,0.14)] hover:bg-bg-elevated transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p lang="ko" className="font-korean text-2xl font-bold text-text-primary leading-none group-hover:text-accent-coral transition-colors">
                {card.word}
              </p>
              {isSearching && card.day && (
                <span className="text-[10px] text-text-tertiary shrink-0">N.{card.day}</span>
              )}
            </div>
            <p className="text-xs text-text-tertiary mb-2 truncate">{card.meaningVi}</p>
            <Badge variant={POS_BADGE[card.pos]} className="text-[10px] px-1.5 py-0">
              {POS_LABELS[card.pos]}
            </Badge>
          </motion.button>
        ))}
      </motion.div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage(p => p + 1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.10)] text-text-secondary hover:text-text-primary hover:border-[rgba(255,255,255,0.18)] transition-all text-sm"
          >
            <ChevronDown className="w-4 h-4" />
            Tải thêm ({filtered.length - paged.length} từ còn lại)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20 text-text-tertiary">
          <p className="text-lg mb-1">Không tìm thấy từ nào</p>
          <p className="text-sm">Thử từ khóa khác</p>
        </div>
      )}

      {/* Detail modal */}
      <AnimatePresence>
        {selectedCard && (
          <VocabDetailPanel card={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
