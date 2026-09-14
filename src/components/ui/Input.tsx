import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id ?? props.name

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-medium text-text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-transparent border-b text-sm text-text-primary placeholder:text-text-tertiary py-2',
            'border-[rgba(255,255,255,0.16)] focus:border-accent-coral transition-colors',
            'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-coral',
            error && 'border-accent-error',
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-accent-error">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'
