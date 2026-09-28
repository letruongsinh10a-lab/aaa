'use client'

import { useEffect } from 'react'
import { AuthProvider } from './AuthProvider'
import { useUIStore } from '@/stores/uiStore'

function ThemeSync() {
  const theme = useUIStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return null
}

// Root client-side provider wrapper.
// Add more global providers here (e.g. Toast) as the project grows.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeSync />
      {children}
    </AuthProvider>
  )
}
