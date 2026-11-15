import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { agencyConfig } from '@/data/agency';

export interface LogoProps {
  className?: string;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function LogoSymbol({ className, isDark = false }: { className?: string; isDark?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-7 h-7 shrink-0', className)}
      aria-hidden="true"
    >
      {/* Outer framing square with restrained corner radius */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="2"
        className={isDark ? 'stroke-powder/30 fill-navy-deep' : 'stroke-navy/20 fill-surface-bg'}
        strokeWidth="1.5"
      />
      {/* Monogram geometry: S-curve and structural lines */}
      <path
        d="M9 11C9 9.89543 9.89543 9 11 9H21"
        className={isDark ? 'stroke-white' : 'stroke-navy'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 16H23"
        className={isDark ? 'stroke-powder' : 'stroke-navy'}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M11 23H21C22.1046 23 23 22.1046 23 21"
        className={isDark ? 'stroke-white' : 'stroke-navy'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sunflower accent square pip */}
      <rect x="20" y="8" width="4" height="4" rx="1" fill="#F5C542" />
    </svg>
  );
}

export function Logo({
  className,
  isDark = false,
  size = 'md',
  showTagline = true,
}: LogoProps) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-sm',
        className
      )}
      aria-label={`${agencyConfig.name} - Home`}
    >
      <LogoSymbol isDark={isDark} className={symbolSizes[size]} />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display font-bold tracking-tight transition-colors',
            textSizes[size],
            isDark ? 'text-white' : 'text-navy'
          )}
        >
          STUP<span className="text-sunflower inline-block ml-0.5">.</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              'font-ui text-[8.5px] uppercase tracking-[0.24em] font-medium mt-0.5 transition-colors',
              isDark ? 'text-powder/80 group-hover:text-white' : 'text-ink-muted group-hover:text-navy'
            )}
          >
            Digital Studio
          </span>
        )}
      </div>
    </Link>
  );
}
