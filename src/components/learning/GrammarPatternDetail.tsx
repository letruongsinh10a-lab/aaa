'use client'

import type { GrammarConjugationRow, GrammarExample, GrammarRegister, GrammarRelatedRef } from '@/types'
import { grammarByLevelAll } from '@/data/grammar-by-level'

// Shared building blocks for a grammar pattern's detail view — used by both
// GrammarFlashCard's back face and the accordion detail on /learn/grammar,
// so the two surfaces never drift out of sync with each other.

const REGISTER_LABEL: Record<GrammarRegister, string> = {
  formal: '합니다체 · trang trọng',
  polite: '해요체 · lịch sự',
  casual: '반말 · thân mật',
  written: 'văn viết',
}

export function GrammarExamplesBlock({ examples }: { examples: GrammarExample[] }) {
  if (examples.length === 0) return null
  return (
    <div>
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3">Ví dụ</p>
      <div className="space-y-3">
        {examples.map((ex, i) => (
          <div key={i} className="bg-bg-elevated rounded-lg px-4 py-3 space-y-1">
            {ex.register && (
              <span className="inline-block text-[9px] font-medium tracking-[0.08em] uppercase text-accent-korean bg-[rgba(108,142,239,0.1)] rounded px-1.5 py-0.5 mb-1">
                {REGISTER_LABEL[ex.register]}
              </span>
            )}
            <p lang="ko" className="font-korean text-base text-text-primary">{ex.ko}</p>
            {ex.romanization && <p className="font-mono text-xs text-text-tertiary">{ex.romanization}</p>}
            <p className="text-sm text-text-secondary">{ex.vi}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function GrammarConjugationBlock({ table }: { table?: GrammarConjugationRow[] }) {
  if (!table || table.length === 0) return null
  return (
    <div>
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3">Chia động từ</p>
      <div className="overflow-x-auto rounded-lg border border-[rgba(255,255,255,0.08)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.08)] text-left text-text-tertiary">
              <th className="px-3 py-2 text-[11px] font-medium">Loại thân từ</th>
              <th className="px-3 py-2 text-[11px] font-medium">Dạng gốc</th>
              <th className="px-3 py-2 text-[11px] font-medium">Dạng chia</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-bg-elevated' : ''}>
                <td className="px-3 py-2 text-text-secondary whitespace-nowrap">{row.stemType}</td>
                <td lang="ko" className="font-korean px-3 py-2 text-text-primary">{row.baseForm}</td>
                <td lang="ko" className="font-korean px-3 py-2 text-accent-korean font-medium">{row.conjugated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function GrammarRelatedBlock({ related }: { related?: GrammarRelatedRef[] }) {
  if (!related || related.length === 0) return null
  const resolved = related
    .map(ref => ({ ref, pattern: grammarByLevelAll.find(g => g.id === ref.id) }))
    .filter((r): r is { ref: GrammarRelatedRef; pattern: NonNullable<typeof r.pattern> } => r.pattern !== undefined)
  if (resolved.length === 0) return null

  return (
    <div>
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-3">So sánh với mẫu dễ nhầm</p>
      <div className="space-y-2">
        {resolved.map(({ ref, pattern }) => (
          <div key={ref.id} className="rounded-lg border border-[rgba(255,255,255,0.08)] px-4 py-3">
            <p lang="ko" className="font-korean font-semibold text-accent-korean text-sm mb-1">{pattern.pattern}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{ref.distinction}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
