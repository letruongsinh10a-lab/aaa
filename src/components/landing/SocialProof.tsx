'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const activity = [
  { initial: 'N.V.A', action: 'hoàn thành TOPIK 1',   time: '2 phút trước',   xp: '+50 XP' },
  { initial: 'T.T.H', action: 'streak 30 ngày 🔥',    time: '15 phút trước',  xp: '+100 XP' },
  { initial: 'P.M.K', action: 'ôn 50 flashcards',     time: '1 giờ trước',    xp: '+200 XP' },
]

export function SocialProof() {
  return (
    <section className="px-6 py-20 border-y border-[rgba(255,255,255,0.06)] bg-bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Streak showcase */}
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[96px] leading-none"
            >
              🔥
            </motion.div>
            <div>
              <p className="font-serif text-[56px] font-normal text-text-primary leading-none">14</p>
              <p className="text-text-secondary mt-1">ngày streak trung bình</p>
              <p className="text-xs text-text-tertiary mt-1">trong 30 ngày qua</p>
            </div>
          </motion.div>

          {/* Activity feed */}
          <motion.div variants={fadeUp} className="space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-tertiary mb-4">Hoạt động gần đây</p>
            {activity.map((a) => (
              <div key={a.initial} className="flex items-center justify-between bg-bg-elevated rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[rgba(255,107,74,0.15)] flex items-center justify-center text-[10px] font-bold text-accent-coral">
                    {a.initial[0]}
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary">{a.initial} </span>
                    <span className="text-xs text-text-primary">{a.action}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-accent-success font-medium">{a.xp}</span>
                  <span className="text-[10px] text-text-tertiary">{a.time}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
