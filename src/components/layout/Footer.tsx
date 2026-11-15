import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import { navigationLinks, footerServices } from '@/data/navigation';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-deep to-[#172542] text-white pt-10 pb-8 border-t border-navy-deep relative overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-powder/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-72 h-72 bg-sunflower/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-navy-deep/80">
          {/* Agency Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo isDark={true} />
              <p className="font-sans text-xs sm:text-sm text-powder/80 mt-3 leading-relaxed max-w-sm">
                {agencyConfig.positioning}
              </p>
            </div>

            {/* Social Links — Only real configured destinations */}
            <div className="mt-5 flex items-center gap-2">
              {agencyConfig.social.github && (
                <a
                  href={agencyConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links to 5 Pages */}
          <div className="lg:col-span-2">
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 font-ui text-xs">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-sunflower transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Services Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2 font-ui text-xs">
              {footerServices.slice(0, 5).map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-sunflower transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3">
              Inquiries
            </h4>
            <div className="space-y-2 font-sans text-xs text-slate-300">
              <div>
                <span className="text-[10px] font-ui uppercase tracking-wider text-powder block">
                  Project Inquiries
                </span>
                <a
                  href={`mailto:${agencyConfig.email}`}
                  className="hover:text-sunflower transition-colors underline decoration-powder/30 underline-offset-2 text-sm text-white"
                >
                  {agencyConfig.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold uppercase tracking-wider text-sunflower hover:text-sunflower-light transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-[11px] text-slate-400">
          <p>© {currentYear} {agencyConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 font-ui text-[11px]">
            <span>Next.js 14 & Strict TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
