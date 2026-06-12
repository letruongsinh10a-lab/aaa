import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-korean text-7xl text-bg-elevated mb-6 select-none">어디에 있나요?</p>
        <h1 className="font-serif text-[96px] font-normal tracking-tight text-text-primary leading-none mb-4">
          404
        </h1>
        <p className="text-text-secondary text-lg mb-8">Trang này không tồn tại.</p>
        <Link href="/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
          Về trang chủ
        </Link>
      </div>
    </div>
  )
}
