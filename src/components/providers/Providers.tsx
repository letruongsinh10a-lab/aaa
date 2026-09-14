'use client'

import { AuthProvider } from './AuthProvider'

// Root client-side provider wrapper.
// Add more global providers here (e.g. Theme, Toast) as the project grows.
export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
