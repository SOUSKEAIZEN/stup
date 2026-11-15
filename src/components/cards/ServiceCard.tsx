import React from 'react';
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
  ArrowRight,
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
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <div
      className={cn(
        'group relative bg-white border border-slate-200/90 rounded-sm p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-sunflower/80 hover:shadow-subtle hover:-translate-y-0.5',
        className
      )}
    >
      <div>
        {/* Icon & Category Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-sm bg-powder-soft flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-sunflower transition-colors duration-300">
            <IconComponent className="w-5 h-5 stroke-[1.75]" />
          </div>
          <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted">
            {service.category}
          </span>
        </div>

        {/* Heading & Description */}
        <h3 className="font-ui text-lg font-bold text-navy group-hover:text-navy-deep transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-ink-body mt-2 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services#${service.category}`}
          className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-sm"
        >
          <span>Explore Capability</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
