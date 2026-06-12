import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonVariant, ButtonSize } from '@/types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-coral text-white hover:bg-[#e55f40] active:bg-[#cc5539]',
  secondary:
    'border border-[rgba(255,255,255,0.12)] text-text-primary hover:bg-bg-elevated hover:border-[rgba(255,255,255,0.20)]',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
  danger:
    'bg-accent-error text-white hover:bg-[#ef6060]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-9 px-4 text-sm gap-2',
  lg: 'h-11 px-6 text-sm gap-2',
}

/**
 * Export buttonVariants for use with <Link> elements.
 * Example: <Link href="/login" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
 */
export function buttonVariants(
  opts: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}
) {
  const { variant = 'secondary', size = 'md', className } = opts
  return cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', size = 'md', loading, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  )
)
Button.displayName = 'Button'
