import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import { navigationLinks, footerServices, footerCompany } from '@/data/navigation';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-12 border-t border-navy-deep relative overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-powder/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-sunflower/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-site mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-navy-deep">
          {/* Agency Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo isDark={true} size="lg" />
              <p className="font-sans text-sm text-powder/80 mt-5 leading-relaxed max-w-sm">
                Independent digital studio and technology consultancy. We design, engineer and scale bespoke digital products, web platforms, and mobile experiences for ambitious organizations worldwide.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={agencyConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-navy-deep text-powder hover:text-navy hover:bg-sunflower transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-powder mb-5">
              Explore
            </h4>
            <ul className="space-y-3 font-ui text-sm">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-sunflower hover:translate-x-0.5 inline-block transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-powder"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-powder mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3 font-ui text-sm">
              {footerServices.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-sunflower hover:translate-x-0.5 inline-block transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-powder"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-powder mb-5">
              Studio & Inquiries
            </h4>
            <div className="space-y-3.5 font-sans text-sm text-slate-300">
              <div>
                <span className="text-[11px] font-ui uppercase tracking-wider text-powder block">Direct Email</span>
                <a
                  href={`mailto:${agencyConfig.email}`}
                  className="hover:text-sunflower transition-colors underline decoration-powder/30 underline-offset-4"
                >
                  {agencyConfig.email}
                </a>
              </div>
              <div>
                <span className="text-[11px] font-ui uppercase tracking-wider text-powder block">Phone</span>
                <a
                  href={`tel:${agencyConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-sunflower transition-colors"
                >
                  {agencyConfig.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-[11px] font-ui uppercase tracking-wider text-powder block">Bangalore Studio</span>
                <p className="text-slate-300 leading-snug">{agencyConfig.location}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold uppercase tracking-wider text-sunflower hover:text-sunflower-light transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <p>© {currentYear} {agencyConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6 font-ui">
            <span className="text-slate-400">Bangalore · Worldwide Remote</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower" aria-hidden="true" />
            <span className="text-slate-400">Crafted with Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
