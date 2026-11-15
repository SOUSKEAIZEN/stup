import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'sunflower' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      children,
      icon,
      iconPosition = 'right',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-ui font-medium transition-all duration-200 select-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wide uppercase',
      md: 'text-sm px-5 py-2.5 gap-2 tracking-normal',
      lg: 'text-base px-7 py-3.5 gap-2.5 tracking-normal',
    };

    const variantStyles = {
      primary:
        'bg-navy text-white hover:bg-navy-deep active:bg-navy-900 focus-visible:ring-navy shadow-sm hover:shadow-subtle',
      secondary:
        'bg-powder-soft text-navy hover:bg-powder/40 active:bg-powder/60 border border-powder/50 focus-visible:ring-navy',
      sunflower:
        'bg-sunflower text-navy hover:bg-sunflower-deep active:bg-[#d8a21f] focus-visible:ring-sunflower shadow-sm hover:shadow-sunflower font-semibold',
      ghost:
        'bg-transparent text-navy hover:bg-powder-soft/70 active:bg-powder-soft focus-visible:ring-navy',
      outline:
        'bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-navy/5 active:bg-navy/10 focus-visible:ring-navy',
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
