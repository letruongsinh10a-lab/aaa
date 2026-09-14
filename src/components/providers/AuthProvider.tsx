'use client'

import { useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/stores/authStore'
import { reconcileOnSignIn, syncIfSignedIn } from '@/lib/srs/sync'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setSession = useAuthStore((s) => s.setSession)
  const setSyncing = useAuthStore((s) => s.setSyncing)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      setSession(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session?.user ?? null)

      if (event === 'SIGNED_IN' && session?.user) {
        setSyncing(true)
        reconcileOnSignIn(session.user.id).finally(() => setSyncing(false))
      }
    })

    // Best-effort re-sync opportunities while a session is active — mirrors
    // the window-focus refresh pattern already used by useDashboard.ts.
    function handleSyncOpportunity() {
      const { status, user } = useAuthStore.getState()
      if (status === 'authenticated' && user) void syncIfSignedIn(user.id)
    }
    window.addEventListener('focus', handleSyncOpportunity)
    document.addEventListener('visibilitychange', handleSyncOpportunity)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('focus', handleSyncOpportunity)
      document.removeEventListener('visibilitychange', handleSyncOpportunity)
    }
  }, [setSession, setSyncing])

  return <>{children}</>
}
