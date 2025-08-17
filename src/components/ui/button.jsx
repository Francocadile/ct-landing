import React from 'react'

export function Button({ children, variant = 'default', asChild, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50'
  const styles = variant === 'outline'
    ? 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300'
    : variant === 'secondary'
      ? 'bg-white text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300'
      : 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-400'
  const Comp = asChild ? 'span' : 'button'
  return <Comp className={`${base} ${styles} ${className}`} {...props}>{children}</Comp>
}
