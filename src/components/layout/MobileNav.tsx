'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, Library, FileText, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/learn',            icon: LayoutDashboard, label: 'Home',     exact: true },
  { href: '/learn/flashcards', icon: BookOpen,         label: 'Flashcard' },
  { href: '/vocab',            icon: Library,          label: 'Từ vựng'  },
  { href: '/learn/grammar',    icon: FileText,         label: 'Ngữ pháp' },
  { href: '/topik',            icon: Trophy,           label: 'TOPIK'    },
]

export function MobileNav() {
  const pathname = usePathname()

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-bg-base/90 backdrop-blur-md border-t border-[rgba(255,255,255,0.08)] flex items-center"
      aria-label="Mobile navigation"
    >
      {NAV.map(({ href, icon: Icon, label, exact }) => {
        const active = isActive(href, exact)
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-0.5 py-3 min-h-[56px] text-[10px] font-medium transition-colors',
              active ? 'text-accent-coral' : 'text-text-tertiary'
            )}
          >
            <Icon className={cn('w-5 h-5', active && 'text-accent-coral')} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
