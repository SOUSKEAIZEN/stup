import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
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
        'relative bg-white rounded-sm p-7 sm:p-8 flex flex-col justify-between transition-all duration-300',
        isHighlighted
          ? 'border-2 border-navy shadow-card -translate-y-1'
          : 'border border-slate-200/90 shadow-sm hover:border-powder/90 hover:shadow-subtle',
        className
      )}
    >
      {/* Top Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-7">
          <span
            className={cn(
              'inline-block px-3 py-0.5 rounded-full text-[11px] font-ui font-semibold uppercase tracking-wider',
              isHighlighted
                ? 'bg-cherry text-white shadow-sm'
                : 'bg-powder-soft text-navy border border-powder/50'
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Plan Header */}
        <div className="border-b border-slate-100 pb-6 mb-6">
          <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
          <p className="font-sans text-xs text-ink-muted mt-1.5 min-h-[32px]">
            {plan.targetAudience}
          </p>

          {/* Price Display */}
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-ui text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              {plan.priceDisplay}
            </span>
            <span className="font-sans text-xs text-ink-muted">{plan.billingPeriod}</span>
          </div>

          <p className="font-sans text-sm text-ink-body mt-4 leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block">
            What&apos;s Included
          </span>
          <ul className="space-y-3 font-sans text-sm text-ink-body">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-0.5 rounded-full p-0.5 bg-powder-soft text-navy shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-slate-100">
        <Button
          href={`/contact?plan=${plan.id}`}
          variant={isHighlighted ? 'cherry' : 'primary'}
          size="md"
          className="w-full justify-center"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
