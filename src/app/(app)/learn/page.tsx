import { Flame, BookOpen, Target, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = { title: 'Dashboard' }

const stats = [
  { label: 'XP hôm nay', value: '0', icon: Target, color: 'text-accent-coral' },
  { label: 'Cards đã ôn', value: '0', icon: BookOpen, color: 'text-accent-blue' },
  { label: 'Streak', value: '0 ngày', icon: Flame, color: 'text-accent-amber' },
  { label: 'Thời gian', value: '0 phút', icon: Clock, color: 'text-accent-success' },
]

const quickActions = [
  {
    href: '/courses',
    emoji: '📚',
    title: 'Bắt đầu TOPIK 1',
    desc: '500 từ vựng · 30 mẫu ngữ pháp · Miễn phí',
    color: 'text-accent-blue',
    bg: 'bg-[rgba(108,142,239,0.08)]',
  },
  {
    href: '/learn/flashcards',
    emoji: '🎴',
    title: 'Ôn Flashcard',
    desc: '0 cards cần ôn hôm nay',
    color: 'text-accent-coral',
    bg: 'bg-[rgba(255,107,74,0.08)]',
  },
  {
    href: '/topik',
    emoji: '🏆',
    title: 'Luyện TOPIK',
    desc: 'Đề thi thử TOPIK 1 & 2',
    color: 'text-accent-amber',
    bg: 'bg-[rgba(255,179,71,0.08)]',
  },
  {
    href: '/learn/listening',
    emoji: '🎧',
    title: 'Shadowing',
    desc: 'Luyện phát âm hôm nay',
    color: 'text-accent-success',
    bg: 'bg-[rgba(74,222,128,0.08)]',
  },
]

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-[960px]">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">
          Dashboard
        </p>
        <h1 className="font-serif text-[42px] font-normal tracking-tight text-text-primary">
          Chào buổi sáng! 👋
        </h1>
        <p className="text-text-secondary mt-2">Hôm nay bạn muốn học gì?</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <stat.icon className={`w-5 h-5 mb-3 ${stat.color}`} />
            <p className="text-2xl font-semibold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Due cards CTA */}
      <Card className="p-8 mb-6 border-[rgba(255,107,74,0.15)]" hoverable={false}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Badge variant="coral" dot className="mb-3">
              Cần ôn tập
            </Badge>
            <h2 className="text-xl font-semibold text-text-primary mb-1">
              0 flashcard đang chờ
            </h2>
            <p className="text-sm text-text-secondary">Ôn tập để giữ streak và tăng XP</p>
          </div>
          <Link
            href="/learn/flashcards"
            className={buttonVariants({ variant: 'primary', size: 'md' })}
          >
            Ôn tập ngay
          </Link>
        </div>
      </Card>

      {/* Quick actions grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className="p-5 cursor-pointer flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center shrink-0 text-lg`}>
                {action.emoji}
              </div>
              <div>
                <p className="font-medium text-text-primary mb-0.5">{action.title}</p>
                <p className="text-sm text-text-secondary">{action.desc}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
