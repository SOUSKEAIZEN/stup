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
      <section className="pb-12 sm:pb-16">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cherry mb-3">
              SELECTED PORTFOLIO
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-navy font-bold text-balance">
              Selected work. Thoughtful execution. Meaningful results.
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body leading-relaxed text-balance">
              We approach every digital product as an enduring piece of craft. Explore our work across finance, luxury commerce, architecture, productivity, and climate technology.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERABLE WORK SECTION */}
      <section className="pb-24">
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
