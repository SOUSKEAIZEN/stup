'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationLinks } from '@/data/navigation';
import { agencyConfig } from '@/data/agency';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full h-16 transition-colors duration-200',
          'bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-[0_1px_3px_0_rgba(16,26,50,0.03)]'
        )}
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <Logo isDark={false} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1 font-ui text-[13px] font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower',
                    isActive
                      ? 'text-navy font-semibold'
                      : 'text-ink-body hover:text-navy hover:bg-slate-50'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-sunflower rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-sunflower text-navy font-ui text-xs font-bold uppercase tracking-wider hover:bg-sunflower-deep shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-sm text-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy/50 backdrop-blur-xs transition-opacity duration-200 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-xl flex flex-col justify-between p-5 pt-16 transition-transform duration-200 ease-out md:hidden border-l border-slate-200',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-sm text-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1 mt-2">
          <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted px-2.5 mb-2">
            Navigation
          </span>
          {navigationLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center justify-between px-3 py-2 rounded-sm font-ui text-base font-medium transition-colors',
                  isActive
                    ? 'text-navy font-bold bg-sunflower/20'
                    : 'text-ink-body hover:text-navy hover:bg-slate-50'
                )}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile Contact & CTA Drawer Bottom */}
        <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
          <div>
            <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted">
              Direct Contact
            </span>
            <p className="font-sans text-xs text-navy mt-0.5">{agencyConfig.email}</p>
          </div>
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-sm bg-sunflower text-navy font-ui text-xs font-bold uppercase tracking-wider hover:bg-sunflower-deep shadow-xs transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </Link>
        </div>
      </div>
    </>
  );
}
