import { Trophy, Clock, FileText, BarChart3, Lock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = { title: 'Luyện TOPIK' }

const mockTests = [
  { id: 1, name: 'TOPIK I — Đề số 1', level: 'TOPIK 1-2', questions: 70, duration: 100, free: true, attempts: 0 },
  { id: 2, name: 'TOPIK I — Đề số 2', level: 'TOPIK 1-2', questions: 70, duration: 100, free: true, attempts: 0 },
  { id: 3, name: 'TOPIK II — Đề số 1', level: 'TOPIK 3-6', questions: 104, duration: 180, free: false, attempts: 0 },
  { id: 4, name: 'TOPIK II — Đề số 2', level: 'TOPIK 3-6', questions: 104, duration: 180, free: false, attempts: 0 },
]

const stats = [
  { label: 'Đề đã làm', value: '0', icon: FileText },
  { label: 'Điểm cao nhất', value: '—', icon: Trophy },
  { label: 'Thời gian luyện', value: '0 phút', icon: Clock },
  { label: 'Accuracy', value: '—', icon: BarChart3 },
]

export default function TOPIKPage() {
  return (
    <div className="p-8 max-w-[960px]">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">Luyện thi</p>
        <h1 className="font-serif text-[42px] font-normal tracking-tight text-text-primary mb-2">
          TOPIK Practice Center.
        </h1>
        <p className="text-text-secondary">Đề thi thử đầy đủ · Giải thích chi tiết · Phân tích điểm yếu.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <s.icon className="w-4 h-4 text-text-tertiary mb-3" />
            <p className="text-2xl font-semibold text-text-primary">{s.value}</p>
            <p className="text-xs text-text-tertiary mt-1">{s.label}</p>
          </Card>
        ))}
      </div>

      {/* Test list */}
      <div>
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-4">Đề thi có sẵn</p>
        <div className="space-y-3">
          {mockTests.map((test) => (
            <div key={test.id}
              className="flex items-center gap-5 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-xl px-6 py-4 hover:border-[rgba(255,255,255,0.14)] transition-all">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[rgba(255,107,74,0.08)] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-accent-coral" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-medium text-text-primary text-sm">{test.name}</span>
                  {test.free
                    ? <Badge variant="success">Miễn phí</Badge>
                    : <Badge variant="default" className="gap-1"><Lock className="w-2.5 h-2.5" /> Pro</Badge>
                  }
                </div>
                <div className="flex items-center gap-4 text-xs text-text-tertiary">
                  <span>{test.level}</span>
                  <span>·</span>
                  <span>{test.questions} câu</span>
                  <span>·</span>
                  <span>{test.duration} phút</span>
                </div>
              </div>

              {/* Attempts */}
              <p className="text-xs text-text-tertiary shrink-0 hidden md:block">
                {test.attempts === 0 ? 'Chưa làm' : `${test.attempts} lần`}
              </p>

              {/* CTA */}
              <div className="shrink-0">
                {test.free ? (
                  <Link href={`/topik/${test.id}`} className={buttonVariants({ variant: 'primary', size: 'sm' })}>
                    Bắt đầu
                  </Link>
                ) : (
                  <button disabled className={buttonVariants({ variant: 'secondary', size: 'sm', className: 'opacity-50 cursor-not-allowed' })}>
                    <Lock className="w-3 h-3 mr-1" /> Nâng cấp
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
