'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Settings } from 'lucide-react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'

export function UserMenu({ user }: { user: User }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const displayName =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    user.email?.split('@')[0] ??
    'Bạn'
  const avatarUrl = user.user_metadata?.avatar_url as string | undefined
  const initial = displayName.charAt(0).toUpperCase()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setOpen(false)
    router.push('/')
    router.refresh()
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-8 h-8 rounded-full bg-accent-coral/20 flex items-center justify-center overflow-hidden shrink-0 hover:ring-2 hover:ring-accent-coral/40 transition-all"
        aria-label="Tài khoản"
        aria-expanded={open}
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs font-bold text-accent-coral">{initial}</span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 mt-2 w-48 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-lg py-1.5 z-50"
          >
            <p className="px-3 py-2 text-sm text-text-primary truncate border-b border-[rgba(255,255,255,0.06)]">
              {displayName}
            </p>
            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors"
            >
              <Settings className="w-4 h-4" />
              Cài đặt
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-secondary hover:text-accent-error hover:bg-bg-elevated transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Đăng xuất
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
