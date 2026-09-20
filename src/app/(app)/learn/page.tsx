'use client'

import { motion } from 'framer-motion'
import { Flame, BookOpen, Target, Clock } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { useDashboard } from '@/hooks/useDashboard'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { ActivityHeatmap } from '@/components/gamification/ActivityHeatmap'

const LEVEL_TITLES: Record<number, string> = {
  1: '초보자', 2: '초보자', 3: '학생', 4: '학생', 5: '학생',
  6: '학생', 7: '학생', 8: '학생', 9: '학생', 10: '선생님',
}
function getLevelTitle(level: number) {
  return LEVEL_TITLES[Math.min(level, 10)] ?? '학자'
}

const QUICK_ACTIONS = [
  { href: '/courses',         emoji: '📚', title: 'Khóa học',     desc: 'TOPIK 1 → 6 · Miễn phí cấp cơ bản', color: 'text-accent-blue',    bg: 'bg-[rgba(108,142,239,0.08)]' },
  { href: '/learn/grammar',   emoji: '📝', title: 'Ngữ pháp',     desc: '271 mẫu · Sơ – Trung – Cao cấp',     color: 'text-accent-success',  bg: 'bg-[rgba(74,222,128,0.08)]' },
  { href: '/topik',           emoji: '🏆', title: 'Luyện TOPIK',  desc: 'Đề thi thử TOPIK 1 & 2',            color: 'text-accent-amber',    bg: 'bg-[rgba(255,179,71,0.08)]' },
  { href: '/learn/listening', emoji: '🎧', title: 'Shadowing',    desc: 'Luyện phát âm chuẩn bản ngữ',       color: 'text-accent-coral',    bg: 'bg-[rgba(255,107,74,0.08)]' },
]

export default function DashboardPage() {
  const d = useDashboard()

  const xpForNextLevel = (d.level * d.level) * 100
  const xpThisLevel    = ((d.level - 1) * (d.level - 1)) * 100
  const levelProgress  = Math.min(100, ((d.xp - xpThisLevel) / (xpForNextLevel - xpThisLevel)) * 100)

  const stats = [
    { label: 'XP hôm nay',    value: d.xpToday,            suffix: ' xp', icon: Target,   color: 'text-accent-coral' },
    { label: 'Cards đã ôn',   value: d.cardsReviewedToday, suffix: '',    icon: BookOpen,  color: 'text-accent-blue' },
    { label: 'Streak',         value: d.streakDays,          suffix: ' ngày', icon: Flame, color: d.streakDays > 0 ? 'text-accent-amber' : 'text-text-tertiary' },
    { label: 'Thời gian',     value: d.minutesToday,        suffix: ' phút', icon: Clock,  color: 'text-accent-success' },
  ]

  return (
    <div className="p-6 lg:p-10 max-w-[960px]">
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-text-tertiary mb-2">Dashboard</p>
        <h1 className="font-serif text-[44px] font-normal tracking-tight text-text-primary leading-tight">
          {d.greeting}! 👋
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-sm text-text-secondary">
            Lv.{d.level} <span lang="ko" className="font-korean text-accent-korean">{getLevelTitle(d.level)}</span>
          </span>
          <div className="flex-1 max-w-[160px] h-1 bg-bg-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent-coral rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${levelProgress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs text-text-tertiary">{d.xp} XP</span>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={stagger(0.06)} initial="hidden" animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp}>
            <Card className="p-5">
              <s.icon className={`w-4 h-4 mb-3 ${s.color}`} />
              <p className="text-[26px] font-semibold text-text-primary leading-none">
                {s.value}<span className="text-sm text-text-tertiary font-normal">{s.suffix}</span>
              </p>
              <p className="text-xs text-text-tertiary mt-2">{s.label}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Due cards CTA */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-5">
        <Card
          className={`p-6 ${d.dueCount > 0 ? 'border-[rgba(255,107,74,0.20)]' : 'border-[rgba(255,255,255,0.08)]'}`}
          hoverable={false}
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              {d.dueCount > 0
                ? <Badge variant="coral" dot className="mb-2">Cần ôn tập</Badge>
                : <Badge variant="success" className="mb-2">Đã hoàn thành hôm nay</Badge>
              }
              <h2 className="text-lg font-semibold text-text-primary">
                {d.dueCount > 0
                  ? <>{d.dueCount} flashcard đang chờ</>
                  : <>Không còn card nào hôm nay 🎉</>
                }
              </h2>
              <p className="text-sm text-text-secondary mt-0.5">
                {d.dueCount > 0
                  ? 'Ôn tập để giữ streak và tăng XP'
                  : 'Quay lại ngày mai để ôn tập tiếp'
                }
              </p>
            </div>
            <Link
              href="/learn/flashcards"
              className={buttonVariants({ variant: d.dueCount > 0 ? 'primary' : 'secondary', size: 'md' })}
            >
              {d.dueCount > 0 ? 'Ôn tập ngay' : 'Học từ mới'}
            </Link>
          </div>

          {d.grammarDueCount > 0 && (
            <div className="flex items-center justify-between gap-4 flex-wrap mt-5 pt-5 border-t border-[rgba(255,255,255,0.06)]">
              <div>
                <Badge variant="coral" dot className="mb-2">Ngữ pháp cần ôn</Badge>
                <h2 className="text-lg font-semibold text-text-primary">{d.grammarDueCount} mẫu ngữ pháp đến hạn</h2>
                <p className="text-sm text-text-secondary mt-0.5">Ôn bằng bài tập để giữ phản xạ, không chỉ nhận diện</p>
              </div>
              <Link href="/learn/grammar/review" className={buttonVariants({ variant: 'secondary', size: 'md' })}>
                Ôn ngữ pháp
              </Link>
            </div>
          )}
        </Card>
      </motion.div>

      {/* Activity heatmap */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-8">
        <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-5 bg-bg-surface">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-4">
            Hoạt động học tập — 26 tuần gần nhất
          </p>
          <ActivityHeatmap data={d.heatmap} weeks={26} />
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div
        variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {QUICK_ACTIONS.map((a) => (
          <motion.div key={a.href} variants={fadeUp}>
            <Link href={a.href}>
              <Card className="p-5 cursor-pointer flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${a.bg} flex items-center justify-center shrink-0 text-lg`}>
                  {a.emoji}
                </div>
                <div>
                  <p className="font-medium text-text-primary mb-0.5">{a.title}</p>
                  <p className="text-sm text-text-secondary">{a.desc}</p>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
