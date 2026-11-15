'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 pb-2 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-site mx-auto pointer-events-auto">
          <div
            className={cn(
              'flex items-center justify-between px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300',
              'bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(16,26,50,0.06)]',
              scrolled && 'bg-white/92 backdrop-blur-lg border-powder/50 shadow-[0_8px_30px_-6px_rgba(16,26,50,0.1)]'
            )}
          >
            {/* Brand Wordmark Logo */}
            <Logo isDark={false} />

            {/* Desktop Navigation: Home | Services | Work | Plans | Contact */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-3 sm:px-3.5 py-1.5 font-ui text-[13px] transition-colors duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-full',
                      isActive
                        ? 'text-navy font-semibold'
                        : 'text-ink-muted hover:text-navy font-medium'
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0 shadow-[0_0_6px_rgba(245,197,66,0.5)]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-navy hover:bg-powder-soft/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy/40 backdrop-blur-xs transition-opacity duration-200 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-xl flex flex-col justify-between p-6 pt-16 transition-transform duration-200 ease-out md:hidden border-l border-slate-200',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1.5 mt-4">
          <span className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted px-3 mb-2">
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
                  'flex items-center justify-between px-4 py-2.5 rounded-lg font-ui text-sm transition-colors',
                  isActive
                    ? 'text-navy font-bold'
                    : 'text-ink-body hover:text-navy hover:bg-slate-50'
                )}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile Contact Footer */}
        <div className="pt-4 border-t border-slate-200">
          <span className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted block">
            Direct Inquiries
          </span>
          <a
            href={`mailto:${agencyConfig.email}`}
            className="font-sans text-xs font-medium text-navy hover:text-navy-deep mt-1 block"
          >
            {agencyConfig.email}
          </a>
        </div>
      </div>
    </>
  );
}
