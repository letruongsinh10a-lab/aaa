import type { Metadata, Viewport } from 'next'
import { displaySerif, plusJakartaSans, notoSansKR } from '@/lib/fonts'
import { Providers } from '@/components/providers/Providers'
import './globals.css'

// A plain inline <script> (not next/script) — it must execute synchronously
// while the browser parses <head>, before <body> paints, to avoid a
// dark→light (or light→dark) flash. next/script's beforeInteractive strategy
// queues via a __next_s array processed by Next's own loader, which is not
// guaranteed to run before first paint — too late to prevent FOUC here.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var raw = localStorage.getItem('ui-store');
    if (!raw) return;
    var theme = JSON.parse(raw).state?.theme;
    if (theme === 'light') document.documentElement.dataset.theme = 'light';
  } catch (e) {}
})();
`

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
      className={`${displaySerif.variable} ${plusJakartaSans.variable} ${notoSansKR.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
