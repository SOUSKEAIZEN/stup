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
        'relative bg-white rounded-sm p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300',
        isHighlighted
          ? 'border-2 border-navy shadow-[0_12px_32px_-10px_rgba(16,26,50,0.18)] -translate-y-1'
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

      <div>
        {/* Plan Header */}
        <div className="border-b border-slate-100 pb-5 mb-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
            <span className="font-ui text-[11px] font-bold text-navy bg-surface-bg px-2.5 py-1 rounded-sm border border-slate-200">
              {plan.pageScope}
            </span>
          </div>

          <p className="font-sans text-xs text-ink-muted mt-2 min-h-[34px] leading-relaxed">
            {plan.targetAudience}
          </p>

          {/* Price Display */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-ui text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              {plan.priceDisplay}
            </span>
            <span className="font-sans text-xs text-ink-muted">{plan.billingPeriod}</span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-ink-body mt-3 leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Deliverables & Features */}
        <div className="space-y-4 mb-6">
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

          {/* Scope Exclusions */}
          {plan.exclusions && plan.exclusions.length > 0 && (
            <div className="pt-3 border-t border-slate-100">
              <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-2">
                Scope Exclusions
              </span>
              <ul className="space-y-1.5 text-[11px] font-sans text-ink-muted">
                {plan.exclusions.map((exclusion, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-slate-400 shrink-0">
                      <X className="w-3 h-3 stroke-[2]" />
                    </span>
                    <span className="leading-snug">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Maintenance Clarification */}
          <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 bg-surface-bg/70 p-2.5 rounded-sm">
            <Info className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
            <p className="font-sans text-[10px] text-ink-muted leading-relaxed">
              {plan.maintenanceNote}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-slate-100">
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
