'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, FileText, Headphones,
  Mic, Trophy, GraduationCap, Settings, Flame, Library, Tags,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useDashboard } from '@/hooks/useDashboard'
import { useAuthStore } from '@/stores/authStore'
import { UserMenu } from '@/components/layout/UserMenu'
import { buttonVariants } from '@/components/ui/Button'

const NAV = [
  { href: '/learn',           icon: LayoutDashboard, label: 'Dashboard',  exact: true },
  { href: '/vocab',           icon: Library,          label: 'Từ vựng',   exact: true },
  { href: '/vocab/chu-de',    icon: Tags,             label: 'Theo chủ đề' },
  { href: '/learn/grammar',   icon: FileText,         label: 'Ngữ pháp'  },
  { href: '/learn/listening', icon: Headphones,       label: 'Nghe'      },
  { href: '/learn/speaking',  icon: Mic,              label: 'Nói'       },
  { href: '/courses',         icon: GraduationCap,    label: 'Khóa học'  },
  { href: '/topik',           icon: Trophy,           label: 'TOPIK'     },
]

const DAILY_GOAL_XP = 100

export function Sidebar() {
  const pathname = usePathname()
  const d = useDashboard()
  const { status, user } = useAuthStore()

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href)

  const goalProgress = Math.min(100, (d.xpToday / DAILY_GOAL_XP) * 100)

  return (
    <aside className="hidden md:flex w-[240px] shrink-0 border-r border-[rgba(255,255,255,0.06)] bg-bg-base flex-col h-full">
      {/* Logo */}
      <div className="h-16 px-5 flex items-center border-b border-[rgba(255,255,255,0.06)]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span lang="ko" className="font-korean font-bold text-xl text-text-primary group-hover:text-accent-coral transition-colors">한</span>
          <span className="text-sm font-semibold text-text-primary">Hàn Ngữ</span>
        </Link>
      </div>

      {/* Streak + level */}
      <div className="px-5 py-4 border-b border-[rgba(255,255,255,0.06)] space-y-3">
        {/* Streak */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={d.streakDays > 0 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
          >
            <Flame className={cn('w-4 h-4', d.streakDays > 0 ? 'text-accent-amber' : 'text-text-tertiary')} />
          </motion.div>
          <span className="text-sm font-medium text-text-primary">
            {d.streakDays > 0 ? `${d.streakDays} ngày streak` : 'Bắt đầu streak hôm nay'}
          </span>
          {d.streakDays >= 7 && (
            <span className="text-[10px] bg-accent-amber/15 text-accent-amber px-1.5 py-0.5 rounded-full font-medium">×1.5</span>
          )}
        </div>

        {/* Daily XP goal */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-text-tertiary">Mục tiêu hôm nay</span>
            <span className="text-[11px] text-text-tertiary">{d.xpToday}/{DAILY_GOAL_XP} XP</span>
          </div>
          <div className="h-1 bg-bg-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent-coral rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${goalProgress}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto" aria-label="App navigation">
        {NAV.map(({ href, icon: Icon, label, exact }) => {
          const active = isActive(href, exact)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150',
                active
                  ? 'bg-[rgba(255,107,74,0.10)] text-accent-coral font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom: level + account + settings */}
      <div className="px-3 py-4 border-t border-[rgba(255,255,255,0.06)] space-y-0.5">
        <div className="px-3 py-2 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent-coral/20 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-accent-coral">{d.level}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-text-primary truncate">Lv.{d.level}</p>
            <p className="text-[10px] text-text-tertiary">{d.xp} XP tổng</p>
          </div>
          {status === 'authenticated' && user && <UserMenu user={user} />}
        </div>
        {status === 'guest' && (
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'w-full justify-center mb-1')}
          >
            Đăng nhập
          </Link>
        )}
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all duration-150"
        >
          <Settings className="w-4 h-4" />
          Cài đặt
        </Link>
      </div>
    </aside>
  )
}
