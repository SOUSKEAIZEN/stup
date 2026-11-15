'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationLinks } from '@/data/navigation';
import { agencyConfig } from '@/data/agency';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-sm py-3.5'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-site mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry rounded-sm"
            aria-label={`${agencyConfig.name} - Home`}
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-navy flex items-center">
                STUP<span className="text-cherry inline-block ml-0.5">.</span>
              </span>
              <span className="font-ui text-[9px] uppercase tracking-[0.22em] text-ink-muted -mt-1 group-hover:text-navy transition-colors">
                Studio
              </span>
            </div>
          </Link>

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
                    'relative px-3.5 py-1.5 font-ui text-sm font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy',
                    isActive
                      ? 'text-navy font-semibold'
                      : 'text-ink-body hover:text-navy hover:bg-powder-soft/50'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-cherry rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="cherry"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="shadow-sm tracking-wider uppercase font-semibold text-xs"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-navy hover:text-cherry hover:bg-powder-soft/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 pt-20 transition-transform duration-300 ease-out md:hidden border-l border-slate-200',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-sm text-navy hover:text-cherry focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-2 mt-4">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-ink-muted px-3 mb-2">
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
                  'flex items-center justify-between px-3 py-3 rounded-md font-ui text-lg font-medium transition-colors',
                  isActive
                    ? 'text-navy font-semibold bg-powder-soft text-cherry'
                    : 'text-ink-body hover:text-navy hover:bg-powder-soft/40'
                )}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cherry" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile Contact & CTA Drawer Bottom */}
        <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">
          <div>
            <span className="font-ui text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Direct Inquiries
            </span>
            <p className="font-sans text-sm text-navy mt-1">{agencyConfig.email}</p>
            <p className="font-sans text-xs text-ink-muted mt-0.5">{agencyConfig.location}</p>
          </div>
          <Button
            href="/contact"
            variant="cherry"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="w-full justify-center"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </>
  );
}
