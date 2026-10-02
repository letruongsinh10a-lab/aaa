'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, FileText, Clock, Lock, Library, Headphones } from 'lucide-react'
import { courses, levelColors } from '@/data/courses'
import { buttonVariants } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, stagger } from '@/lib/motion'

interface PageProps {
  params: Promise<{ slug: string }>
}

// The static Course entries describe a TOPIK-1-through-6 curriculum, but the
// real content underneath is organized differently (grammar by so-cap/trung-cap/
// cao-cap tier, vocab by study day) — see CLAUDE.md. Map each course level to
// the real content that most closely matches it instead of inventing lessons.
const GRAMMAR_LEVEL: Record<string, string> = {
  topik1: 'so-cap', topik2: 'so-cap',
  topik3: 'trung-cap', topik4: 'trung-cap',
  topik5: 'cao-cap', topik6: 'cao-cap',
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const course = courses.find((c) => c.slug === slug)
  if (!course) notFound()

  const lv = levelColors[course.level]
  const grammarLevel = GRAMMAR_LEVEL[course.level] ?? 'so-cap'

  return (
    <div className="p-6 lg:p-10 max-w-[760px]">
      <motion.div variants={stagger(0.06)} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}>
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-accent-coral transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Tất cả khóa học
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-semibold tracking-widest uppercase ${lv.text}`}>{lv.label}</span>
          {course.isFree
            ? <Badge variant="success">Miễn phí</Badge>
            : <Badge variant="default" className="gap-1"><Lock className="w-2.5 h-2.5" /> Pro</Badge>}
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-serif text-[40px] md:text-[48px] font-normal tracking-tight text-text-primary leading-tight mb-3">
          {course.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-8">
          {course.description}
        </motion.p>

        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 mb-10">
          <div className="rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface p-4 text-center">
            <BookOpen className="w-4 h-4 text-text-tertiary mx-auto mb-2" />
            <p className="text-lg font-semibold text-text-primary">{course.vocabCount.toLocaleString('vi-VN')}</p>
            <p className="text-[11px] text-text-tertiary mt-0.5">từ vựng (mục tiêu)</p>
          </div>
          <div className="rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface p-4 text-center">
            <FileText className="w-4 h-4 text-text-tertiary mx-auto mb-2" />
            <p className="text-lg font-semibold text-text-primary">{course.grammarCount}</p>
            <p className="text-[11px] text-text-tertiary mt-0.5">mẫu ngữ pháp (mục tiêu)</p>
          </div>
          <div className="rounded-xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface p-4 text-center">
            <Clock className="w-4 h-4 text-text-tertiary mx-auto mb-2" />
            <p className="text-lg font-semibold text-text-primary">~{course.estimatedHours}h</p>
            <p className="text-[11px] text-text-tertiary mt-0.5">thời lượng ước tính</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl border border-[rgba(var(--overlay-rgb),0.08)] bg-bg-surface p-6 mb-6">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-text-tertiary mb-1.5">Nội dung</p>
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            Lộ trình bài học riêng cho khóa này đang được xây dựng. Trong lúc chờ,
            đây là nội dung thật bạn có thể học ngay — đúng cấp độ của khóa học này.
          </p>
          <div className="space-y-2">
            <Link
              href="/vocab"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[rgba(var(--overlay-rgb),0.08)] hover:border-[rgba(var(--overlay-rgb),0.16)] hover:bg-bg-elevated transition-all"
            >
              <Library className="w-4 h-4 text-accent-coral shrink-0" />
              <span className="text-sm text-text-primary flex-1">Từ vựng TOPIK II theo ngày</span>
            </Link>
            <Link
              href={`/learn/grammar?level=${grammarLevel}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[rgba(var(--overlay-rgb),0.08)] hover:border-[rgba(var(--overlay-rgb),0.16)] hover:bg-bg-elevated transition-all"
            >
              <FileText className="w-4 h-4 text-accent-coral shrink-0" />
              <span className="text-sm text-text-primary flex-1">Ngữ pháp phù hợp cấp độ này</span>
            </Link>
            <Link
              href="/learn/listening"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[rgba(var(--overlay-rgb),0.08)] hover:border-[rgba(var(--overlay-rgb),0.16)] hover:bg-bg-elevated transition-all"
            >
              <Headphones className="w-4 h-4 text-accent-coral shrink-0" />
              <span className="text-sm text-text-primary flex-1">Luyện nghe</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
