import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  hoverable?: boolean
}

export function Card({ variant = 'default', hoverable = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border transition-all duration-200',
        variant === 'default' && 'bg-bg-surface border-[rgba(255,255,255,0.08)]',
        variant === 'elevated' && 'bg-bg-elevated border-[rgba(255,255,255,0.10)]',
        variant === 'outlined' && 'bg-transparent border-[rgba(255,255,255,0.12)]',
        hoverable && 'hover:border-[rgba(255,255,255,0.16)] hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 pt-6 pb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 pb-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-[rgba(255,255,255,0.06)] flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  )
}
