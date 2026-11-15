import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'powder' | 'navy' | 'sunflower' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'powder', className }: BadgeProps) {
  const variantStyles = {
    powder: 'bg-powder-soft text-navy border-powder/60',
    navy: 'bg-navy/10 text-navy border-navy/20',
    sunflower: 'bg-sunflower-subtle text-navy border-sunflower/50 font-semibold',
    neutral: 'bg-white text-ink-muted border-slate-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-ui font-semibold uppercase tracking-wider border select-none',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
