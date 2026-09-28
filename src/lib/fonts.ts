import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_KR } from 'next/font/google'

export const displaySerif = Playfair_Display({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'vietnamese'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-korean',
  display: 'swap',
  preload: false,
})
