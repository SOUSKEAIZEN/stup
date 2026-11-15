'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
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
  Check,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ServiceItem } from '@/types';

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

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <div
      className={cn(
        'bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sunflower/80 hover:shadow-card group',
        className
      )}
    >
      <div>
        {/* Visual Icon & Domain Identifier */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-powder-soft flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-sunflower transition-colors duration-300 shadow-2xs">
            <IconComponent className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted px-2 py-0.5 rounded bg-surface-bg border border-slate-200/70">
            {service.category}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="font-display text-xl font-bold text-navy group-hover:text-navy-deep transition-colors">
          {service.title}
        </h3>

        {/* 1. Concise Description */}
        <p className="font-sans text-xs sm:text-[13px] text-ink-body mt-2 leading-relaxed min-h-[36px]">
          {service.shortDescription}
        </p>

        {/* 2. Key Deliverables (3-4 crisp items) */}
        <div className="mt-4 pt-3.5 border-t border-slate-100">
          <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">
            Key Deliverables
          </span>
          <ul className="space-y-1.5 text-xs font-sans text-ink-body">
            {service.deliverables.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-sunflower/25 text-navy mt-0.5 shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="leading-snug text-xs">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Optional Expandable Details Button */}
        <div className="mt-4 pt-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-[11px] font-ui font-semibold text-navy hover:text-navy-deep transition-colors"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide Technical Scope' : 'View Scope & Business Value'}</span>
            <ChevronDown
              className={cn(
                'w-3.5 h-3.5 text-sunflower-dark transition-transform duration-200',
                isExpanded ? 'rotate-180' : ''
              )}
            />
          </button>

          {/* Expanded Drawer Area */}
          {isExpanded && (
            <div className="mt-3 p-3.5 rounded-xl bg-powder-soft/50 border border-powder/60 text-xs font-sans space-y-2.5 animate-fadeIn">
              <div>
                <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block mb-0.5">
                  Detailed Scope
                </span>
                <p className="text-[11px] text-ink-body leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-powder/50">
                <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy flex items-center gap-1 mb-0.5">
                  <TrendingUp className="w-3 h-3 text-navy" />
                  <span>Practical Business Value</span>
                </span>
                <p className="text-[11px] text-ink-body leading-relaxed">
                  {service.businessValue}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Technologies & Direct Inquire Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech, tIdx) => (
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
          className="inline-flex items-center justify-between font-ui text-xs font-bold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors pt-1"
        >
          <span>Inquire About This Service</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
        </Link>
      </div>
    </div>
  );
}
