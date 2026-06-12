import { cn } from '@/lib/utils'
import type { BadgeVariant } from '@/types'

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[rgba(255,255,255,0.08)] text-text-secondary',
  coral: 'bg-[rgba(255,107,74,0.12)] text-accent-coral',
  success: 'bg-[rgba(74,222,128,0.12)] text-accent-success',
  warning: 'bg-[rgba(255,179,71,0.12)] text-accent-amber',
  info: 'bg-[rgba(108,142,239,0.12)] text-accent-blue',
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?: boolean
}

export function Badge({ variant = 'default', dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
