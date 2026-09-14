'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { buttonVariants } from '@/components/ui/Button'
import { UserMenu } from '@/components/layout/UserMenu'
import { useAuthStore } from '@/stores/authStore'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/courses', label: 'Khóa học' },
  { href: '/topik', label: 'TOPIK' },
  { href: '/vocab', label: 'Từ vựng' },
  { href: '/pricing', label: 'Bảng giá' },
]

export function Header() {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const { status, user } = useAuthStore()

  async function handleMobileSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setMobileOpen(false)
    router.push('/')
    router.refresh()
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg-base/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl text-text-primary group-hover:text-accent-coral transition-colors">
            한
          </span>
          <span className="text-sm font-semibold text-text-primary tracking-tight">Hàn Ngữ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          {status === 'authenticated' && user ? (
            <UserMenu user={user} />
          ) : status === 'guest' ? (
            <>
              <Link href="/login" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
                Đăng nhập
              </Link>
              <Link href="/signup" className={buttonVariants({ variant: 'primary', size: 'sm' })}>
                Bắt đầu miễn phí
              </Link>
            </>
          ) : null}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-bg-surface border-b border-[rgba(255,255,255,0.06)] px-6 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-[rgba(255,255,255,0.06)]">
              {status === 'authenticated' && user ? (
                <>
                  <Link
                    href="/settings"
                    className={buttonVariants({ variant: 'secondary', size: 'sm', className: 'w-full justify-center' })}
                    onClick={() => setMobileOpen(false)}
                  >
                    Cài đặt
                  </Link>
                  <button
                    onClick={handleMobileSignOut}
                    className={buttonVariants({ variant: 'ghost', size: 'sm', className: 'w-full justify-center' })}
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: 'secondary', size: 'sm', className: 'w-full justify-center' })}
                    onClick={() => setMobileOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    href="/signup"
                    className={buttonVariants({ variant: 'primary', size: 'sm', className: 'w-full justify-center' })}
                    onClick={() => setMobileOpen(false)}
                  >
                    Bắt đầu miễn phí
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
