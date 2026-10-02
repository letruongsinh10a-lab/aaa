'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, Clock, FileText, Construction, Lock } from 'lucide-react'
import { mockTests } from '@/data/topik-tests'
import { buttonVariants } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, stagger } from '@/lib/motion'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function TopikTestPage({ params }: PageProps) {
  const { id } = use(params)
  const test = mockTests.find((t) => t.id === Number(id))
  if (!test) notFound()

  const isPro = !test.free
  // The content dataset doesn't carve itself up as literal "TOPIK 1-6" — grammar
  // is organized by so-cap/trung-cap/cao-cap tier instead (see CLAUDE.md), so
  // route to the tier that actually corresponds to this test's stated level.
  const grammarLevel = test.level === 'TOPIK 1-2' ? 'so-cap' : 'cao-cap'

  return (
    <div className="min-h-dvh bg-bg-base flex flex-col">
      <div className="flex items-center gap-4 px-6 h-16 border-b border-[rgba(var(--overlay-rgb),0.06)] shrink-0">
        <Link href="/topik" className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors" aria-label="Thoát">
          <X className="w-5 h-5" />
        </Link>
        <span className="text-sm font-medium text-text-primary">{test.name}</span>
      </div>

      <motion.div variants={stagger(0.06)} initial="hidden" animate="visible" className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
            <Badge variant={test.free ? 'success' : 'default'}>
              {test.free ? 'Miễn phí' : <span className="flex items-center gap-1"><Lock className="w-2.5 h-2.5" /> Pro</span>}
            </Badge>
            <Badge variant="default">{test.level}</Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-[32px] font-normal text-text-primary mb-2">
            {test.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-sm text-text-tertiary mb-8">
            <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {test.questions} câu</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {test.duration} phút</span>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface p-6 mb-6">
            <Construction className="w-5 h-5 text-accent-amber mx-auto mb-3" />
            <p className="text-sm text-text-primary font-medium mb-1.5">Đề thi đang được xây dựng</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Ngân hàng câu hỏi, bộ đếm giờ và chấm điểm cho đề thi này chưa sẵn sàng.
              {isPro && ' Đề thi Pro cũng cần hoàn tất hệ thống thanh toán trước khi mở.'}
              {' '}Trong lúc chờ, bạn có thể luyện trước nội dung liên quan bên dưới.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/vocab" className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
              Luyện từ vựng
            </Link>
            <Link href={`/learn/grammar?level=${grammarLevel}`} className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
              Luyện ngữ pháp
            </Link>
            <Link href="/learn/listening" className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
              Luyện nghe
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
