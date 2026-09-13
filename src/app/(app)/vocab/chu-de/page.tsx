'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, BookOpen, Zap, ChevronDown, Layers, ArrowLeft } from 'lucide-react'
import { vocabByTopicAll, vocabByTopicList, type VocabTopicGroup } from '@/data/vocab-by-topic'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { VocabDetailPanel, POS_LABELS, POS_BADGE } from '@/components/vocab/VocabDetailPanel'
import type { VocabCard, PartOfSpeech } from '@/types'

const GROUP_LABELS: Record<VocabTopicGroup, string> = {
  place: 'Theo địa điểm',
  theme: 'Theo chủ đề',
  idiom: 'Thành ngữ',
}

export default function VocabByTopicPage() {
  const [activeSlug, setActiveSlug] = useState<string>(vocabByTopicList[0].slug)
  const [search, setSearch] = useState('')
  const [posFilter, setPosFilter] = useState<PartOfSpeech | 'all'>('all')
  const [selectedCard, setSelectedCard] = useState<VocabCard | null>(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 60

  const activeTopic = vocabByTopicList.find(t => t.slug === activeSlug) ?? vocabByTopicList[0]
  const isSearching = search.trim().length > 0
  const cards = isSearching ? vocabByTopicAll : activeTopic.words

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

  const handleTopicChange = useCallback((slug: string) => {
    setActiveSlug(slug)
    setPosFilter('all')
    setPage(1)
  }, [])

  const posCounts = useMemo(() => {
    const map: Partial<Record<PartOfSpeech, number>> = {}
    cards.forEach(c => { map[c.pos] = (map[c.pos] ?? 0) + 1 })
    return map
  }, [cards])

  const groups = useMemo(() => {
    const byGroup: Record<VocabTopicGroup, typeof vocabByTopicList> = { place: [], theme: [], idiom: [] }
    vocabByTopicList.forEach(t => byGroup[t.group].push(t))
    return byGroup
  }, [])

  return (
    <div className="p-6 lg:p-10 max-w-[1100px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-2">
          <Link href="/vocab" className="flex items-center gap-1.5 text-xs text-text-tertiary hover:text-accent-coral transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Từ vựng theo ngày
          </Link>
        </div>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          Từ vựng theo chủ đề
        </h1>
        <p className="text-text-secondary mt-2">
          {vocabByTopicAll.length.toLocaleString('vi-VN')} từ · {vocabByTopicList.length} chủ đề.
        </p>
      </motion.div>

      {/* Topic picker */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="flex items-center gap-2 text-sm text-text-secondary">
            <Layers className="w-4 h-4" />
            Chọn chủ đề
          </p>
          {!isSearching && (
            <Link
              href={`/learn/flashcards?topic=${activeTopic.slug}`}
              className={buttonVariants({ variant: 'primary', size: 'sm' })}
            >
              Học thẻ chủ đề này <Zap className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        {(['place', 'theme', 'idiom'] as VocabTopicGroup[]).filter(g => groups[g].length > 0).map(g => (
          <div key={g} className="mb-3 last:mb-0">
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-1.5">
              {GROUP_LABELS[g]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {groups[g].map(t => (
                <button
                  key={t.slug}
                  onClick={() => handleTopicChange(t.slug)}
                  lang="ko"
                  className={cn(
                    'font-korean px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                    !isSearching && activeSlug === t.slug
                      ? 'bg-accent-coral text-white'
                      : 'bg-bg-elevated border border-[rgba(255,255,255,0.06)] text-text-tertiary hover:text-text-primary hover:border-[rgba(255,255,255,0.16)]'
                  )}
                >
                  {t.nameKo} <span className="font-sans not-italic">({t.nameVi})</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Search + filter bar */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex gap-3 mb-6 flex-col sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder={`Tìm từ, nghĩa trên toàn bộ ${vocabByTopicAll.length} từ...`}
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
            ? `${filtered.length} kết quả trong toàn bộ ${vocabByTopicAll.length} từ`
            : filtered.length === cards.length
              ? `${activeTopic.nameVi} · ${cards.length} từ`
              : `${filtered.length} / ${cards.length} từ · ${activeTopic.nameVi}`}
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
              <p lang="ko" className="font-korean text-lg font-bold text-text-primary leading-tight group-hover:text-accent-coral transition-colors">
                {card.word}
              </p>
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
