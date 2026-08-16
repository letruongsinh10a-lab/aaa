'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, stagger } from '@/lib/motion'

const tiers = [
  {
    name: 'Free',
    price: '0đ',
    period: 'mãi mãi',
    highlight: false,
    badge: null,
    features: ['TOPIK 1 & 2 toàn bộ', 'SRS Flashcard không giới hạn', 'Ngữ pháp + Đọc hiểu', 'Leaderboard', 'Streak system'],
    cta: 'Bắt đầu miễn phí',
    href: '/signup',
  },
  {
    name: 'Pro',
    price: '99.000đ',
    period: '/tháng',
    highlight: true,
    badge: 'Phổ biến nhất',
    features: ['Tất cả TOPIK 1→6 + EPS', 'AI Pronunciation scoring', 'Shadowing với audio native', 'Mock TOPIK full test', 'Offline mode (PWA)', 'Analytics chi tiết'],
    cta: 'Dùng Pro 7 ngày miễn phí',
    href: '/signup?plan=pro',
  },
  {
    name: 'Lifetime',
    price: '1.990.000đ',
    period: 'một lần',
    highlight: false,
    badge: 'Tiết kiệm nhất',
    features: ['Tất cả tính năng Pro', 'Truy cập vĩnh viễn', 'Cập nhật nội dung mãi mãi', 'Priority support', 'Early access tính năng mới'],
    cta: 'Mua Lifetime',
    href: '/signup?plan=lifetime',
  },
]

export function PricingTable() {
  return (
    <section className="px-6 py-32 max-w-[1200px] mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} variants={stagger()}>
        <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.16em] uppercase text-text-tertiary mb-4 text-center">
          Bảng giá
        </motion.p>
        <motion.h2 variants={fadeUp}
          className="font-serif text-[48px] md:text-[60px] font-normal tracking-[-0.025em] text-text-primary text-center mb-4">
          Đầu tư vào tiếng Hàn.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-text-secondary text-center mb-16 max-w-md mx-auto">
          Bắt đầu miễn phí, nâng cấp khi bạn sẵn sàng. Không cam kết dài hạn.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={fadeUp}>
              <div className={`rounded-xl border p-7 relative ${
                tier.highlight
                  ? 'border-accent-coral bg-[rgba(255,107,74,0.04)]'
                  : 'border-[rgba(255,255,255,0.08)] bg-bg-surface'
              }`}>
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant={tier.highlight ? 'coral' : 'default'}>{tier.badge}</Badge>
                  </div>
                )}

                <p className="text-sm font-semibold text-text-primary mb-1">{tier.name}</p>
                <p className="text-[36px] font-semibold text-text-primary tracking-tight mb-1">{tier.price}</p>
                <p className="text-xs text-text-tertiary mb-6">{tier.period}</p>

                <Link
                  href={tier.href}
                  className={buttonVariants({
                    variant: tier.highlight ? 'primary' : 'secondary',
                    size: 'md',
                    className: 'w-full justify-center mb-6',
                  })}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-accent-success shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
