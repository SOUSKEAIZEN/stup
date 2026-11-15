import React from 'react';
import type { Metadata } from 'next';
import { WorkClient } from './WorkClient';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { projectsData } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies',
  description:
    'Explore our portfolio of digital platforms, bespoke web applications, design systems, and headless e-commerce architectures.',
};

export default function WorkPage() {
  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      {/* HERO SECTION */}
      <section className="pb-10 sm:pb-12 border-b border-slate-200/70 bg-gradient-to-b from-powder-soft/40 via-white to-white">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              DEMONSTRATION PORTFOLIO
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[50px] leading-[1.14] tracking-[-0.025em] text-navy font-bold text-balance">
              Selected work. Thoughtful execution. Meaningful results.
            </h1>
            <p className="mt-3 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              A curated catalog of architectural explorations, design systems, and web application prototypes crafted to illustrate engineering standards across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERABLE WORK SECTION */}
      <section className="py-10 sm:py-14 bg-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <WorkClient initialProjects={projectsData} />
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title="Ready to build your next flagship product?"
        subtitle="Let’s explore how our design systems and engineering discipline can elevate your brand."
      />
    </div>
  );
}
