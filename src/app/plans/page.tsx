import React from 'react';
import type { Metadata } from 'next';
import { Check, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingCard } from '@/components/cards/PricingCard';
import { Accordion } from '@/components/ui/Accordion';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { pricingPlans, pricingComparisonData } from '@/data/pricing';
import { pricingFaqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Pricing Packages & Engagement Plans',
  description:
    'Transparent digital studio pricing for websites, web applications, and enterprise custom software solutions.',
};

export default function PlansPage() {
  return (
    <div className="flex flex-col pt-28 sm:pt-36">
      {/* HERO SECTION */}
      <section className="pb-16 sm:pb-20 border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              PREDICTABLE INVESTMENT
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-navy font-bold text-balance">
              Transparent packages tailored to your scale.
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body leading-relaxed text-balance">
              Clear deliverables, fixed pricing, and zero agency markups. Every plan is engineered with Next.js 14, responsive typography, and complete intellectual property ownership.
            </p>

            {/* Clarification banner */}
            <div className="mt-8 p-4 bg-powder-soft/60 border border-powder/60 rounded-sm flex items-center gap-3 max-w-2xl">
              <span className="w-2 h-2 rounded-full bg-sunflower shrink-0" />
              <p className="font-sans text-xs text-navy leading-relaxed">
                <strong>Investment Structure:</strong> All quoted package rates are one-time project investments tied to milestone deliverables. Ongoing maintenance retainers are optional and billed monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 bg-surface-bg">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-sans text-xs text-ink-muted">
              Prices are illustrative standard tiers and can be tailored to unique project scopes.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURE COMPARISON TABLE */}
      <section className="py-20 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="DETAILED AUDIT"
              title="Compare all package capabilities side-by-side."
              description="A clear, honest breakdown of features, architectures, and support allocations across every tier."
            />
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-sm shadow-xs">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-4 px-6 font-ui text-xs font-bold uppercase tracking-wider w-1/3">
                    Feature / Capability
                  </th>
                  <th className="py-4 px-4 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Starter
                  </th>
                  <th className="py-4 px-4 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6 bg-navy-deep text-sunflower">
                    Professional
                  </th>
                  <th className="py-4 px-4 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Business Pro
                  </th>
                  <th className="py-4 px-4 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans text-sm">
                {pricingComparisonData.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-powder-soft/40 font-ui text-xs font-bold uppercase tracking-wider text-navy">
                      <td colSpan={5} className="py-3 px-6 text-navy flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                        <span>{category.category}</span>
                      </td>
                    </tr>
                    {category.features.map((feature, fIdx) => (
                      <tr key={fIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-navy">
                          {feature.name}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderComparisonValue(feature.starter)}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-powder-soft/20">
                          {renderComparisonValue(feature.professional)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderComparisonValue(feature.businessPro)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderComparisonValue(feature.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING FAQS */}
      <section className="py-20 bg-surface-bg">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="PRICING TRANSPARENCY"
              title="Frequently asked questions about billing and scope."
              align="center"
              className="mb-12 text-center"
            />
            <Accordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title="Need a custom quotation for your product?"
        subtitle="Share your scope with our studio. We deliver itemized timeline estimates and architectural roadmaps."
      />
    </div>
  );
}

function renderComparisonValue(val: string | boolean) {
  if (typeof val === 'boolean') {
    return val ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sunflower/25 text-navy mx-auto font-bold">
        <Check className="w-4 h-4 stroke-[2.5]" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400 mx-auto">
        <X className="w-3.5 h-3.5 stroke-[2]" />
      </span>
    );
  }
  return <span className="font-ui text-xs font-semibold text-navy">{val}</span>;
}
