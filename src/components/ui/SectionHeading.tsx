import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
  size?: 'hero' | 'section' | 'sub';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
  titleAs = 'h2',
  size = 'section',
}: SectionHeadingProps) {
  const Component = titleAs;

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const titleSizes = {
    hero: 'text-3xl sm:text-4xl lg:text-[54px] leading-[1.12] tracking-[-0.025em]',
    section: 'text-2xl sm:text-3xl lg:text-[36px] leading-[1.18] tracking-[-0.02em]',
    sub: 'text-xl sm:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.01em]',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl', alignStyles[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-[0.2em] mb-3 select-none',
            theme === 'dark' ? 'text-sunflower' : 'text-navy'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0" />
          <span>{eyebrow}</span>
        </span>
      )}
      <Component
        className={cn(
          'font-display font-normal text-balance',
          titleSizes[size],
          theme === 'dark' ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </Component>
      {description && (
        <p
          className={cn(
            'mt-2.5 font-sans text-xs sm:text-sm text-ink-body leading-relaxed text-balance',
            theme === 'dark' ? 'text-powder/80' : 'text-ink-body',
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
