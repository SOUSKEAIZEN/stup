'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FAQItem } from '@/types';

export interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn('divide-y divide-slate-200/80 border-y border-slate-200/80', className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const headingId = `faq-heading-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div key={idx} className="py-5 transition-colors">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between gap-4 text-left font-ui text-lg font-medium text-navy hover:text-cherry transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry rounded-sm"
              >
                <span className="pr-2">{item.question}</span>
                <span
                  className={cn(
                    'p-1.5 rounded-full bg-powder-soft text-navy shrink-0 transition-transform duration-200',
                    isOpen && 'rotate-180 bg-cherry text-white'
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed max-w-3xl pr-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
