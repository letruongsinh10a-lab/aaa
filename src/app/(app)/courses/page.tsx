import Link from 'next/link'
import { BookOpen, Clock, Lock, CheckCircle } from 'lucide-react'
import { courses, levelColors } from '@/data/courses'
import { Badge } from '@/components/ui/Badge'

export const metadata = { title: 'Khóa học' }

export default function CoursesPage() {
  return (
    <div className="p-8 max-w-[960px]">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-2">Khóa học</p>
        <h1 className="font-serif text-[42px] font-normal tracking-tight text-text-primary mb-2">
          Lộ trình học tiếng Hàn.
        </h1>
        <p className="text-text-secondary">Từ <span lang="ko" className="font-korean">한글</span> cơ bản đến TOPIK 6 cao cấp.</p>
      </div>

      {/* Free badge */}
      <div className="flex items-center gap-2 bg-[rgba(74,222,128,0.06)] border border-[rgba(74,222,128,0.15)] rounded-lg px-4 py-3 mb-8 w-fit">
        <CheckCircle className="w-4 h-4 text-accent-success" />
        <p className="text-sm text-text-secondary">
          <span className="text-accent-success font-medium">TOPIK 1 & 2 miễn phí</span> — Không cần đăng ký thẻ tín dụng
        </p>
      </div>

      {/* Course grid */}
      <div className="space-y-4">
        {courses.map((course, i) => {
          const lv = levelColors[course.level]
          return (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <div className="group flex items-center gap-6 bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-xl px-6 py-5 hover:border-[rgba(255,255,255,0.16)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                {/* Level number */}
                <div className={`w-12 h-12 rounded-xl ${lv.bg} flex items-center justify-center shrink-0`}>
                  <span className={`font-serif text-xl font-normal ${lv.text}`}>{i + 1}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold tracking-widest uppercase ${lv.text}`}>{lv.label}</span>
                    {course.isFree && <Badge variant="success">Miễn phí</Badge>}
                    {!course.isFree && (
                      <Badge variant="default" className="gap-1">
                        <Lock className="w-2.5 h-2.5" /> Pro
                      </Badge>
                    )}
                  </div>
                  <p className="font-medium text-text-primary">{course.title}</p>
                  <p className="text-sm text-text-secondary mt-0.5 line-clamp-1">{course.description}</p>
                </div>

                {/* Stats */}
                <div className="hidden md:flex items-center gap-6 shrink-0 text-sm text-text-tertiary">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{course.vocabCount} từ</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{course.estimatedHours}h</span>
                  </div>
                </div>

                {/* Progress placeholder */}
                <div className="hidden lg:block w-24 shrink-0">
                  <div className="h-1 bg-bg-elevated rounded-full">
                    <div className="h-full w-0 bg-accent-coral rounded-full" />
                  </div>
                  <p className="text-[10px] text-text-tertiary mt-1.5 text-right">0%</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
