'use client';

import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PricingPlan } from '@/types';
import { Button } from '@/components/ui/Button';

export interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  const isHighlighted = plan.popular;

  // Extract delivery timeline from features list if present
  const deliveryFeature =
    plan.features.find((f) => f.toLowerCase().includes('delivery')) ||
    'Estimated delivery: 3–5 business days';
  const timelineText = deliveryFeature.replace(/^Estimated delivery:\s*/i, '');

  // Keep 5–6 essential deliverables
  const displayFeatures = plan.features
    .filter((f) => !f.toLowerCase().includes('delivery'))
    .slice(0, 6);

  return (
    <div
      className={cn(
        'relative bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300',
        isHighlighted
          ? 'border-2 border-navy shadow-[0_14px_36px_-8px_rgba(16,26,50,0.18)] -translate-y-1'
          : 'border border-slate-200/90 shadow-sm hover:border-sunflower/80 hover:shadow-subtle',
        className
      )}
    >
      {/* Recommended Tag */}
      {plan.badge && (
        <div className="absolute -top-3 left-6">
          <span
            className={cn(
              'inline-block px-3 py-0.5 rounded-full text-[10px] font-ui font-bold uppercase tracking-wider',
              isHighlighted
                ? 'bg-sunflower text-navy shadow-xs border border-sunflower-deep'
                : 'bg-powder-soft text-navy border border-powder/50'
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header Block */}
        <div className="border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
            <span className="font-ui text-[11px] font-bold text-navy bg-surface-bg px-2.5 py-1 rounded-md border border-slate-200">
              {plan.pageScope}
            </span>
          </div>

          {/* Price */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="font-ui text-3xl font-extrabold text-navy tracking-tight">
              {plan.priceDisplay}
            </span>
            <span className="font-sans text-xs text-ink-muted">one-time fee</span>
          </div>

          <p className="font-sans text-xs text-ink-muted mt-2 leading-relaxed min-h-[34px]">
            {plan.description}
          </p>
        </div>

        {/* Deliverables List (5–6 essential points) */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block mb-2.5">
              Included Deliverables
            </span>
            <ul className="space-y-2 text-xs font-sans text-ink-body">
              {displayFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full p-0.5 bg-sunflower/25 text-navy shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="leading-snug text-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Timeline Pill */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-navy bg-powder-soft/50 px-3 py-2 rounded-lg border border-powder/50 font-ui text-[11px]">
            <Clock className="w-3.5 h-3.5 text-navy shrink-0" />
            <span className="font-medium text-ink-muted">Turnaround:</span>
            <span className="font-bold text-navy">{timelineText}</span>
          </div>
        </div>
      </div>

      {/* CTA Button Pinned at Bottom */}
      <div className="pt-4 border-t border-slate-100 mt-4">
        <Button
          href={`/contact?plan=${plan.id}`}
          variant={isHighlighted ? 'sunflower' : 'primary'}
          size="md"
          className="w-full justify-center text-xs tracking-wider uppercase font-bold"
          icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />}
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
