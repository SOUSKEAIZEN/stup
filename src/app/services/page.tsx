import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layout,
  Palette,
  Sparkles,
  Globe,
  ShoppingBag,
  Code2,
  Smartphone,
  LineChart,
  Database,
  Zap,
  ShieldCheck,
  Cpu,
  LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { serviceCategories } from '@/data/services';
import { agencyConfig } from '@/data/agency';
import { generalFaqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Digital Services & Technical Capabilities',
  description:
    'Comprehensive design, web development, mobile applications, and cloud architecture services delivered by senior engineers and designers.',
};

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Palette,
  Sparkles,
  Globe,
  ShoppingBag,
  Code2,
  Smartphone,
  LineChart,
  Database,
  Zap,
  ShieldCheck,
  Cpu,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col pt-28 sm:pt-36">
      {/* HERO SECTION */}
      <section className="pb-16 sm:pb-24 border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              END-TO-END CAPABILITIES
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-navy font-bold text-balance">
              Digital services designed around your next big move.
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body leading-relaxed text-balance">
              From first concept to final product, we bring strategy, design and engineering together. We partner with leaders to craft digital ecosystems that scale gracefully.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/contact"
                variant="sunflower"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4 stroke-[2.2]" />}
                className="tracking-wider uppercase font-bold text-xs text-navy shadow-xs"
              >
                Inquire About a Service
              </Button>
              <Button
                href="/work"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY JUMP NAV */}
      <section className="bg-white border-b border-slate-200/70 sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-site mx-auto px-5 sm:px-8 overflow-x-auto py-3">
          <div className="flex items-center gap-6 min-w-max text-xs font-ui font-semibold uppercase tracking-wider text-ink-muted">
            <span className="text-navy font-bold">Jump to Section:</span>
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="hover:text-navy hover:underline transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <div className="space-y-24 py-20">
        {serviceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-32 max-w-site mx-auto px-5 sm:px-8"
          >
            {/* Category Header */}
            <div className="border-b border-slate-200 pb-8 mb-12">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.25em] text-navy block mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                {category.eyebrow}
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                <div className="lg:col-span-6">
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                    {category.title}
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="font-sans text-base text-ink-body leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Detailed Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.items.map((service) => {
                const IconComponent = iconMap[service.iconName] || Globe;

                return (
                  <div
                    key={service.id}
                    className="bg-white border border-slate-200/90 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-sunflower/80 hover:shadow-card group"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-sm bg-powder-soft flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-sunflower transition-colors">
                        <IconComponent className="w-6 h-6 stroke-[1.75]" />
                      </div>

                      <h3 className="font-display text-2xl font-bold text-navy group-hover:text-navy-deep transition-colors">
                        {service.title}
                      </h3>

                      <p className="font-sans text-sm text-ink-body mt-4 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Deliverables List */}
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block mb-3">
                          Typical Deliverables
                        </span>
                        <ul className="space-y-2 text-xs font-sans text-ink-body">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <span className="p-0.5 rounded-full bg-sunflower/25 text-navy shrink-0">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stacks & Action */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-sm bg-surface-bg text-ink-muted font-ui text-[11px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors"
                      >
                        <span>Start With This Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* WORKING PROCESS SECTION */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="EXECUTION CADENCE"
            title="How we work alongside your team."
            description="Our engagement model emphasizes continuous feedback loops, complete code ownership, and transparent engineering velocity."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-sm bg-surface-bg border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-navy block mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                    STAGE {step.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-body leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-surface-bg border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="COMMON QUESTIONS"
              title="Frequently asked questions about our services."
              align="center"
              className="mb-12 text-center"
            />
            <Accordion items={generalFaqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title="Ready to engineer your next digital platform?"
        subtitle="Speak directly with our senior engineers and design leads. We provide honest technical assessments and actionable scopes."
      />
    </div>
  );
}
