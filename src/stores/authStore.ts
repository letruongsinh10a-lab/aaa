import { create } from 'zustand'
import type { User } from '@supabase/supabase-js'

// No persist() here — the Supabase browser client already persists the
// session itself; a second localStorage copy would just be a second source
// of truth to keep in sync.
interface AuthState {
  status: 'loading' | 'authenticated' | 'guest'
  user: User | null
  isSyncing: boolean
  setSession: (user: User | null) => void
  setSyncing: (syncing: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  status: 'loading',
  user: null,
  isSyncing: false,
  setSession: (user) => set({ user, status: user ? 'authenticated' : 'guest' }),
  setSyncing: (isSyncing) => set({ isSyncing }),
}))
