'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface ActivityHeatmapProps {
  /** Map of "YYYY-MM-DD" → XP earned that day */
  data?: Record<string, number>
  weeks?: number
}

function getColor(xp: number): string {
  if (xp === 0) return 'rgba(255,255,255,0.05)'
  if (xp < 50)  return 'rgba(255,107,74,0.25)'
  if (xp < 100) return 'rgba(255,107,74,0.50)'
  if (xp < 200) return 'rgba(255,107,74,0.75)'
  return 'rgba(255,107,74,1)'
}

const DAY_LABELS = ['', 'T2', '', 'T4', '', 'T6', '']
const CELL = 11
const GAP  = 3
const STEP = CELL + GAP

export function ActivityHeatmap({ data = {}, weeks = 26 }: ActivityHeatmapProps) {
  const grid = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Align to Sunday of the earliest week
    const end = new Date(today)
    const dayOfWeek = today.getDay()
    end.setDate(today.getDate() + (6 - dayOfWeek))

    const totalDays = weeks * 7
    const start = new Date(end)
    start.setDate(end.getDate() - totalDays + 1)

    const cols: { date: string; xp: number }[][] = []
    const cur = new Date(start)

    for (let w = 0; w < weeks; w++) {
      const col: { date: string; xp: number }[] = []
      for (let d = 0; d < 7; d++) {
        const key = cur.toISOString().split('T')[0]
        col.push({ date: key, xp: data[key] ?? 0 })
        cur.setDate(cur.getDate() + 1)
      }
      cols.push(col)
    }
    return cols
  }, [data, weeks])

  const width  = weeks * STEP + 28
  const height = 7 * STEP + 20

  return (
    <div className="overflow-x-auto">
      <svg
        width={width}
        height={height}
        aria-label="Activity heatmap — số ngày học mỗi tuần"
        role="img"
      >
        {/* Day labels */}
        {DAY_LABELS.map((label, i) => (
          label ? (
            <text
              key={i}
              x={4}
              y={i * STEP + CELL * 0.85 + 16}
              fontSize={8}
              fill="rgba(255,255,255,0.28)"
              fontFamily="system-ui"
            >
              {label}
            </text>
          ) : null
        ))}

        {/* Cells */}
        {grid.map((col, wi) =>
          col.map((cell, di) => (
            <motion.rect
              key={`${wi}-${di}`}
              x={wi * STEP + 24}
              y={di * STEP + 8}
              width={CELL}
              height={CELL}
              rx={2}
              fill={getColor(cell.xp)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: wi * 0.005 + di * 0.003, duration: 0.2 }}
            >
              <title>{cell.date}: {cell.xp} XP</title>
            </motion.rect>
          ))
        )}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-2 px-6">
        <span className="text-[10px] text-text-tertiary">Ít</span>
        {[0, 50, 100, 200, 400].map(xp => (
          <div
            key={xp}
            className="w-2.5 h-2.5 rounded-sm"
            style={{ background: getColor(xp) }}
          />
        ))}
        <span className="text-[10px] text-text-tertiary">Nhiều</span>
      </div>
    </div>
  )
}
