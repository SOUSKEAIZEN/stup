import React from 'react';
import type { Metadata } from 'next';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { serviceCategories } from '@/data/services';
import { agencyConfig } from '@/data/agency';

export const metadata: Metadata = {
  title: 'Digital Services & Technical Capabilities',
  description:
    'Focused design, web development, mobile applications, and technology growth capabilities delivered by senior engineers and designers.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION WITH DOMAIN ANCHORS */}
      <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              SPECIALIZED CAPABILITIES
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] tracking-[-0.025em] text-navy font-bold text-balance">
              Digital capabilities engineered for commercial outcomes.
            </h1>
            <p className="mt-2.5 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              Structured across four domains. Every engagement includes defined milestone deliverables, strict type safety, and complete client source code ownership.
            </p>

            {/* Quick Domain Navigation Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {serviceCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-navy font-ui text-xs font-semibold hover:border-sunflower hover:bg-powder-soft/40 transition-all shadow-2xs"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUR SERVICE DOMAINS */}
      <div className="space-y-10 sm:space-y-12 py-8 sm:py-12 bg-surface-bg">
        {serviceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 max-w-site mx-auto px-4 sm:px-6"
          >
            {/* Domain Header */}
            <div className="border-b border-slate-200/80 pb-3 mb-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.25em] text-navy block mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                {category.eyebrow}
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-baseline">
                <div className="lg:col-span-5">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                    {category.title}
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CONSOLIDATED WORKING APPROACH TIMELINE */}
      <section className="py-10 sm:py-12 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              DEVELOPMENT CADENCE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
              Four-step execution timeline.
            </h2>
          </div>

          {/* Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-surface-bg border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-navy">
                      STEP {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs text-ink-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CONTACT CTA */}
      <FinalCTA
        title="Ready to discuss your service requirements?"
        subtitle="Schedule an introductory consultation with our senior engineering and design leads. We provide fixed milestone estimates and actionable scopes."
      />
    </div>
  );
}
