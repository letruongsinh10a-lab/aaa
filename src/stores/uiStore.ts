import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const DAILY_GOAL_OPTIONS = [100, 150, 200] as const

interface UIState {
  sidebarOpen: boolean
  theme: 'dark' | 'light'
  dailyGoalXp: number
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  setTheme: (theme: 'dark' | 'light') => void
  setDailyGoalXp: (xp: number) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: 'dark',
      dailyGoalXp: 100,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setTheme: (theme) => set({ theme }),
      setDailyGoalXp: (xp) => set({ dailyGoalXp: xp }),
    }),
    { name: 'ui-store', partialize: (s) => ({ theme: s.theme, dailyGoalXp: s.dailyGoalXp }) }
  )
)
