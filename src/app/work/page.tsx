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
    <div className="flex flex-col pt-28 sm:pt-36">
      {/* HERO SECTION */}
      <section className="pb-10 sm:pb-12">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              DEMONSTRATION PORTFOLIO
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] leading-[1.1] tracking-[-0.025em] text-navy font-bold text-balance">
              Selected work. Thoughtful execution. Meaningful results.
            </h1>
            <p className="mt-4 font-sans text-base sm:text-lg text-ink-body leading-relaxed text-balance">
              A curated catalog of architectural explorations, design systems, and web application prototypes crafted to illustrate engineering standards across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERABLE WORK SECTION */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-site mx-auto px-5 sm:px-8">
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
