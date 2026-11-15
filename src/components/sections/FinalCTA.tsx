import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { agencyConfig } from '@/data/agency';

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
}

export function FinalCTA({
  title = 'Have an idea worth building?',
  subtitle = 'Whether you are launching a transformative venture or re-engineering an existing digital product, our studio is ready to collaborate.',
}: FinalCTAProps) {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 bg-powder/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/4 w-96 h-96 bg-cherry/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-site mx-auto px-5 sm:px-8 relative z-10 text-center">
        <span className="inline-block font-ui text-xs font-semibold uppercase tracking-[0.22em] text-cherry mb-4 select-none">
          NEXT STEPS
        </span>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.12]">
          {title}
        </h2>

        <p className="mt-5 font-sans text-base sm:text-lg text-powder/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="cherry"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="w-full sm:w-auto text-sm tracking-wider uppercase font-semibold"
          >
            Start a Project
          </Button>
          <Button
            href={`mailto:${agencyConfig.email}`}
            variant="secondary"
            size="lg"
            external
            icon={<MessageSquare className="w-4 h-4" />}
            className="w-full sm:w-auto text-sm"
          >
            Direct Inquiry
          </Button>
        </div>

        {/* Studio SLA Note */}
        <p className="mt-8 font-ui text-xs text-powder/60">
          Typical response time: {agencyConfig.responseTime} · NDA guaranteed upon request
        </p>
      </div>
    </section>
  );
}
