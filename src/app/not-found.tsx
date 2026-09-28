import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { AmbientGlow } from '@/components/decorative/AmbientGlow'
import { Mascot } from '@/components/mascot/Mascot'

export default function NotFound() {
  return (
    <div className="relative min-h-dvh bg-bg-base flex items-center justify-center px-6 overflow-hidden">
      <AmbientGlow />
      <div className="relative text-center">
        <div className="flex justify-center mb-4">
          <Mascot pose="thinking" size="lg" />
        </div>
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
