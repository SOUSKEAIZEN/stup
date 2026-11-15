import React from 'react';
import type { Metadata } from 'next';
import { Check, X, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingCard } from '@/components/cards/PricingCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { pricingPlans, pricingComparisonData } from '@/data/pricing';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Design & Development Packages',
  description:
    'Transparent introductory website design and development packages from ₹4,999. Fixed milestone scopes and delivery timelines.',
};

export default function PlansPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              TRANSPARENT PRICING
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
              Straightforward website packages.
            </h1>
            <p className="mt-3 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              Fixed introductory packages designed for individuals and growing businesses. Clear page scopes, defined revision rounds, and realistic delivery timelines.
            </p>

            {/* Scope Clarification & Exclusions Note */}
            <div className="mt-5 p-3.5 bg-powder-soft/70 border border-powder/60 rounded-sm flex items-start gap-2.5 max-w-2xl text-xs font-sans text-navy">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0 mt-1" />
              <div className="leading-relaxed space-y-1">
                <p>
                  <strong>One-Time Development Fees:</strong> Quoted prices cover design, development, and handover for the stated page scope.
                </p>
                <p className="text-ink-body/90">
                  <strong>Exclusions &amp; Additional Charges:</strong> Domain registration, third-party hosting subscriptions, and custom backend infrastructure (e.g. multi-vendor marketplaces, complex web apps) receive bespoke milestone estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR BALANCED PRICING CARDS */}
      <section className="py-10 sm:py-14 bg-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Custom Scope Callout */}
          <div className="mt-7 p-4 bg-white border border-slate-200/90 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-ink-body shadow-2xs">
            <div>
              <span className="font-bold font-ui text-navy block text-sm">Need custom e-commerce or a complex web application?</span>
              <p className="text-ink-muted mt-0.5">Relational databases, client portals, and bespoke payment gateways are scoped separately.</p>
            </div>
            <Link
              href="/contact?plan=custom"
              className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-wider text-navy hover:text-navy-deep px-3.5 py-2 rounded-sm bg-sunflower shadow-xs shrink-0"
            >
              <span>Request Custom Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON TABLE (No redundant FAQs) */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <SectionHeading
              eyebrow="COMPARISON"
              title="Package feature breakdown."
              description="Review inclusions, page allowances, and turnaround cadences across all four tiers."
            />
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-sm shadow-2xs">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-3 px-4 font-ui text-xs font-bold uppercase tracking-wider w-1/3">
                    Package Item
                  </th>
                  <th className="py-3 px-3 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Essential (₹4,999)
                  </th>
                  <th className="py-3 px-3 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Starter (₹9,999)
                  </th>
                  <th className="py-3 px-3 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6 bg-navy-deep text-sunflower">
                    Professional (₹14,999)
                  </th>
                  <th className="py-3 px-3 font-ui text-xs font-bold uppercase tracking-wider text-center w-1/6">
                    Business Plus (₹24,999)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans text-xs">
                {pricingComparisonData.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-powder-soft/40 font-ui text-[11px] font-bold uppercase tracking-wider text-navy">
                      <td colSpan={5} className="py-2.5 px-4 text-navy">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                          <span>{category.category}</span>
                        </div>
                      </td>
                    </tr>
                    {category.features.map((feature, fIdx) => (
                      <tr key={fIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-navy">
                          {feature.name}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {renderComparisonValue(feature.essential)}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {renderComparisonValue(feature.starter)}
                        </td>
                        <td className="py-2.5 px-3 text-center bg-powder-soft/20">
                          {renderComparisonValue(feature.professional)}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {renderComparisonValue(feature.businessPlus)}
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

      {/* FINAL CTA */}
      <FinalCTA
        title="Need guidance choosing the right plan?"
        subtitle="Share your project goals and we will recommend the package that best suits your requirements."
      />
    </div>
  );
}

function renderComparisonValue(val: string | boolean) {
  if (typeof val === 'boolean') {
    return val ? (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sunflower/25 text-navy mx-auto font-bold">
        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 mx-auto">
        <X className="w-3 h-3 stroke-[2]" />
      </span>
    );
  }
  return <span className="font-ui text-xs font-semibold text-navy">{val}</span>;
}
