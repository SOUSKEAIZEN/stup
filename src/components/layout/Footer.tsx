import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import { navigationLinks, footerServices } from '@/data/navigation';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-deep to-[#172542] text-white pt-14 pb-10 border-t border-navy-deep relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-navy-deep/80">
          {/* Agency Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo isDark={true} />
              <p className="font-sans text-xs sm:text-sm text-powder/80 mt-3.5 leading-relaxed max-w-sm">
                Independent digital studio specializing in responsive websites, web applications, and thoughtful digital experiences for ambitious businesses.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={agencyConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3.5">
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

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3.5">
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
            <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-powder mb-3.5">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-slate-300">
              <div>
                <span className="text-[10px] font-ui uppercase tracking-wider text-powder block">Inquiries</span>
                <a
                  href={`mailto:${agencyConfig.email}`}
                  className="hover:text-sunflower transition-colors underline decoration-powder/30 underline-offset-2"
                >
                  {agencyConfig.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] font-ui uppercase tracking-wider text-powder block">Working Hours</span>
                <p className="text-slate-300 leading-snug">{agencyConfig.workingHours}</p>
              </div>
              <div>
                <span className="text-[10px] font-ui uppercase tracking-wider text-powder block">Delivery Model</span>
                <p className="text-slate-300 leading-snug">{agencyConfig.location}</p>
              </div>
              <div className="pt-1.5">
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-[11px] text-slate-400">
          <p>© {currentYear} {agencyConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-3 font-ui text-[11px]">
            <span>Remote Delivery</span>
            <span className="w-1 h-1 rounded-full bg-sunflower" aria-hidden="true" />
            <span>Next.js 14 & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
