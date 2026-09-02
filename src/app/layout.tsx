import type { Metadata, Viewport } from 'next'
import { instrumentSerif, plusJakartaSans, notoSansKR } from '@/lib/fonts'
import { Providers } from '@/components/providers/Providers'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  ),
  title: {
    default: 'Hàn Ngữ — Học tiếng Hàn đẳng cấp',
    template: '%s | Hàn Ngữ',
  },
  description:
    'Nền tảng học tiếng Hàn khoa học dành cho người Việt. Spaced Repetition, Shadowing, TOPIK practice.',
  keywords: ['học tiếng hàn', 'TOPIK', 'tiếng hàn online', 'hàn ngữ', 'flashcard tiếng hàn'],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Hàn Ngữ',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${notoSansKR.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
