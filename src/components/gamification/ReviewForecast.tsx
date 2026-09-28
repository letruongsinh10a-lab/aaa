'use client'

import { motion } from 'framer-motion'

interface ReviewForecastProps {
  /** Output of getForecast() — one entry per upcoming day, in order. */
  data: { date: string; count: number }[]
}

const WEEKDAY_LABELS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
const MAX_BAR_HEIGHT = 64

function dayLabel(dateStr: string, index: number): string {
  if (index === 0) return 'Hôm nay'
  if (index === 1) return 'Mai'
  const weekday = new Date(dateStr).getDay()
  return WEEKDAY_LABELS[weekday]
}

export function ReviewForecast({ data }: ReviewForecastProps) {
  const maxCount = Math.max(1, ...data.map(d => d.count))

  return (
    <div>
      <div className="flex items-end gap-1.5" style={{ height: MAX_BAR_HEIGHT + 8 }}>
        {data.map((d, i) => {
          const heightPx = d.count === 0 ? 2 : Math.max(4, (d.count / maxCount) * MAX_BAR_HEIGHT)
          return (
            <div key={d.date} className="flex-1 flex flex-col items-center justify-end h-full">
              <motion.div
                className="w-full rounded-t-sm bg-accent-blue/70"
                style={{ minHeight: 2 }}
                initial={{ height: 0 }}
                animate={{ height: heightPx }}
                transition={{ delay: i * 0.02, duration: 0.3, ease: 'easeOut' }}
                title={`${d.date}: ${d.count} thẻ đến hạn`}
              />
            </div>
          )
        })}
      </div>
      <div className="flex gap-1.5 mt-2">
        {data.map((d, i) => (
          <span key={d.date} className="flex-1 text-center text-[9px] text-text-tertiary truncate">
            {dayLabel(d.date, i)}
          </span>
        ))}
      </div>
    </div>
  )
}
