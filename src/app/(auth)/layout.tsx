import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-10 group">
          <span lang="ko" className="font-korean font-bold text-2xl text-text-primary group-hover:text-accent-coral transition-colors">
            한
          </span>
          <span className="text-sm font-semibold text-text-primary tracking-tight">Hàn Ngữ</span>
        </Link>
        {children}
      </div>
    </div>
  )
}
