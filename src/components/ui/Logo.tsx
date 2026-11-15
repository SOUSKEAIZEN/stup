import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { agencyConfig } from '@/data/agency';

export interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className, isDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex flex-col leading-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-xs',
        className
      )}
      aria-label={`${agencyConfig.name} - Home`}
    >
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            'font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] transition-colors',
            isDark ? 'text-white' : 'text-navy'
          )}
        >
          STUP
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0 self-center"
          aria-hidden="true"
        />
      </div>
      <span
        className={cn(
          'font-ui text-[9px] uppercase tracking-[0.28em] font-semibold -mt-0.5 transition-colors',
          isDark ? 'text-powder/80 group-hover:text-powder' : 'text-ink-muted group-hover:text-navy'
        )}
      >
        STUDIO
      </span>
    </Link>
  );
}
