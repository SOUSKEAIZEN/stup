import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { agencyConfig } from '@/data/agency';

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
}

export function FinalCTA({
  title = 'Have a project in mind?',
  subtitle = 'Whether you are launching a new brand or redesigning an existing website, we are ready to discuss your requirements.',
}: FinalCTAProps) {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-navy via-navy-deep to-[#1b2b4c] text-white relative overflow-hidden border-t border-navy-deep">
      {/* Visible brand gradient glow: Midnight Navy into Powder Blue */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-powder/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-sunflower/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span className="inline-flex items-center gap-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-sunflower mb-2.5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
          <span>START A CONVERSATION</span>
        </span>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight text-balance">
          {title}
        </h2>

        <p className="mt-3 font-sans text-xs sm:text-sm text-powder/80 max-w-xl mx-auto leading-relaxed text-balance">
          {subtitle}
        </p>

        {/* CTA Button Group */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/contact"
            variant="sunflower"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4 stroke-[2.2]" />}
            className="w-full sm:w-auto text-xs tracking-wider uppercase font-bold text-navy shadow-xs"
          >
            Start a Project
          </Button>
          <Button
            href={`mailto:${agencyConfig.email}`}
            variant="secondary"
            size="md"
            external
            icon={<Mail className="w-4 h-4" />}
            className="w-full sm:w-auto text-xs"
          >
            Email Studio Directly
          </Button>
        </div>

        <p className="mt-5 font-ui text-[11px] text-powder/60">
          Transparent scope-limited packages · Direct technical collaboration
        </p>
      </div>
    </section>
  );
}
