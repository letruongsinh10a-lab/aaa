import { cn } from '@/lib/utils'

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg bg-[rgba(var(--overlay-rgb),0.06)] animate-shimmer',
        'bg-gradient-to-r from-[rgba(var(--overlay-rgb),0.04)] via-[rgba(var(--overlay-rgb),0.08)] to-[rgba(var(--overlay-rgb),0.04)]',
        'bg-[length:200%_100%]',
        className
      )}
      {...props}
    />
  )
}
