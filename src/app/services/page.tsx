import React from 'react';
import type { Metadata } from 'next';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Digital Services & Technical Capabilities',
  description:
    'Focused design, web development, mobile applications, and technology growth capabilities delivered by senior engineers and designers.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              SPECIALIZED CAPABILITIES
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] tracking-[-0.025em] text-navy font-bold text-balance">
              Digital capabilities engineered for commercial outcomes.
            </h1>
            <p className="mt-3.5 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              Structured across four domains: Design &amp; Creative, Web Development, Application Development, and Technology &amp; Growth. Every engagement includes defined deliverables and full source code ownership.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR SERVICE DOMAINS */}
      <div className="space-y-12 sm:space-y-16 py-10 sm:py-14 bg-surface-bg">
        {serviceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 max-w-site mx-auto px-4 sm:px-6"
          >
            {/* Domain Header */}
            <div className="border-b border-slate-200/80 pb-4 mb-6">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.25em] text-navy block mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                {category.eyebrow}
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-end">
                <div className="lg:col-span-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                    {category.title}
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="font-sans text-xs sm:text-sm text-ink-body leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* COMPACT CONTACT CTA */}
      <FinalCTA
        title="Ready to discuss your service requirements?"
        subtitle="Schedule an introductory consultation with our senior engineering and design leads. We provide fixed milestone estimates and actionable scopes."
      />
    </div>
  );
}
