'use client'

// Root client-side provider wrapper.
// Add global providers here (e.g. Auth, Theme, Toast) as the project grows.
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
