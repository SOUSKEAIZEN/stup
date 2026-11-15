import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  TrendingUp,
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
import { FinalCTA } from '@/components/sections/FinalCTA';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Digital Services & Technical Capabilities',
  description:
    'Comprehensive design, web development, mobile applications, and technology growth services delivered by senior engineers and designers.',
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
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
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
              We structure our agency expertise across four specialized domains: Design &amp; Creative, Web Development, Application Development, and Technology &amp; Growth. Every engagement includes defined milestone deliverables, strict type safety, and complete client source code ownership.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR SERVICE CATEGORIES */}
      <div className="space-y-12 py-10 sm:py-14 bg-surface-bg">
        {serviceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 max-w-site mx-auto px-4 sm:px-6"
          >
            {/* Category Header */}
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

            {/* Service Detailed Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {category.items.map((service) => {
                const IconComponent = iconMap[service.iconName] || Globe;

                return (
                  <div
                    key={service.id}
                    className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sunflower/80 hover:shadow-card group"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="w-10 h-10 rounded-lg bg-powder-soft flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-sunflower transition-colors shadow-2xs">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <h3 className="font-display text-xl font-bold text-navy group-hover:text-navy-deep transition-colors">
                        {service.title}
                      </h3>

                      {/* 1. What the service provides */}
                      <p className="font-sans text-xs text-ink-muted mt-1 leading-snug">
                        {service.shortDescription}
                      </p>

                      {/* 2. What is included */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100">
                        <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-1">
                          Scope &amp; Inclusions
                        </span>
                        <p className="font-sans text-xs text-ink-body leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* 3. Practical Business Value */}
                      <div className="mt-3.5 p-3 rounded-lg bg-powder-soft/50 border border-powder/50 text-navy">
                        <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy flex items-center gap-1 mb-1">
                          <TrendingUp className="w-3 h-3 text-navy" />
                          <span>Practical Business Value</span>
                        </span>
                        <p className="font-sans text-[11px] text-ink-body leading-relaxed">
                          {service.businessValue}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">
                          Concrete Deliverables
                        </span>
                        <ul className="space-y-1.5 text-xs font-sans text-ink-body">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <span className="p-0.5 rounded-full bg-sunflower/25 text-navy shrink-0">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </span>
                              <span className="leading-snug text-[11px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Relevant Technologies & Action */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {service.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-surface-bg text-ink-muted font-ui text-[10px] border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors"
                      >
                        <span>Inquire About This Service</span>
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

      {/* COMPACT CONTACT CTA */}
      <FinalCTA
        title="Ready to discuss your service requirements?"
        subtitle="Schedule an introductory consultation with our senior engineering and design leads. We provide fixed milestone estimates and actionable scopes."
      />
    </div>
  );
}
