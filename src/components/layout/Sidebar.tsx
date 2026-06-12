'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Headphones,
  Mic,
  Trophy,
  GraduationCap,
  Settings,
  Flame,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/learn', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { href: '/learn/flashcards', icon: BookOpen, label: 'Flashcard' },
  { href: '/learn/grammar', icon: FileText, label: 'Ngữ pháp' },
  { href: '/learn/listening', icon: Headphones, label: 'Nghe' },
  { href: '/learn/speaking', icon: Mic, label: 'Nói' },
  { href: '/courses', icon: GraduationCap, label: 'Khóa học' },
  { href: '/topik', icon: Trophy, label: 'TOPIK' },
]

interface SidebarProps {
  streakDays?: number
}

export function Sidebar({ streakDays = 0 }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <aside className="w-[240px] shrink-0 border-r border-[rgba(255,255,255,0.06)] bg-bg-base flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 px-5 flex items-center border-b border-[rgba(255,255,255,0.06)]">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl text-text-primary group-hover:text-accent-coral transition-colors">
            한
          </span>
          <span className="text-sm font-semibold text-text-primary">Hàn Ngữ</span>
        </Link>
      </div>

      {/* Streak */}
      <div className="px-5 py-3.5 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2">
          <Flame
            className={cn('w-4 h-4', streakDays > 0 ? 'text-accent-coral' : 'text-text-tertiary')}
          />
          <span className="text-sm font-medium text-text-primary">
            {streakDays > 0 ? `${streakDays} ngày streak` : 'Bắt đầu streak hôm nay'}
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto" aria-label="App navigation">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150',
                active
                  ? 'bg-[rgba(255,107,74,0.10)] text-accent-coral font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
              )}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-[rgba(255,255,255,0.06)]">
        <Link
          href="/settings"
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150',
            'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
          )}
        >
          <Settings className="w-4 h-4" />
          Cài đặt
        </Link>
      </div>
    </aside>
  )
}
