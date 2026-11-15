'use client';

import React from 'react';
import { Check, X, ArrowRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PricingPlan } from '@/types';
import { Button } from '@/components/ui/Button';

export interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  const isHighlighted = plan.popular;

  return (
    <div
      className={cn(
        'relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300',
        isHighlighted
          ? 'border-2 border-navy shadow-[0_16px_40px_-10px_rgba(16,26,50,0.18)] -translate-y-1'
          : 'border border-slate-200/90 shadow-sm hover:border-sunflower/80 hover:shadow-subtle',
        className
      )}
    >
      {/* Top Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-6">
          <span
            className={cn(
              'inline-block px-3 py-0.5 rounded-full text-[11px] font-ui font-bold uppercase tracking-wider',
              isHighlighted
                ? 'bg-sunflower text-navy shadow-xs border border-sunflower-deep'
                : 'bg-powder-soft text-navy border border-powder/50'
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Plan Header */}
        <div className="border-b border-slate-100 pb-5 mb-5 min-h-[175px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
              <span className="font-ui text-[11px] font-bold text-navy bg-surface-bg px-2.5 py-1 rounded-md border border-slate-200">
                {plan.pageScope}
              </span>
            </div>

            <p className="font-sans text-xs text-ink-muted mt-1.5 leading-relaxed">
              {plan.targetAudience}
            </p>
          </div>

          <div>
            {/* Price Display */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-ui text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                {plan.priceDisplay}
              </span>
              <span className="font-sans text-xs text-ink-muted">{plan.billingPeriod}</span>
            </div>

            <p className="font-sans text-xs text-ink-body mt-2 leading-relaxed">
              {plan.description}
            </p>
          </div>
        </div>

        {/* Deliverables & Features */}
        <div className="space-y-4 mb-6 flex-1 flex flex-col justify-between">
          <div>
            <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-navy block mb-2.5">
              Included Deliverables
            </span>
            <ul className="space-y-2 text-xs font-sans text-ink-body">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full p-0.5 bg-sunflower/25 text-navy shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Maintenance Clarification */}
          <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 bg-surface-bg/70 p-2.5 rounded-lg mt-4">
            <Info className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
            <p className="font-sans text-[10px] text-ink-muted leading-relaxed">
              {plan.maintenanceNote}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Pinned CTA Button */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
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
