import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ContactFormWrapper } from '@/components/forms/ContactFormWrapper';
import { agencyConfig } from '@/data/agency';

export const metadata: Metadata = {
  title: 'Contact Studio — Start a Project Consultation',
  description:
    'Initiate a digital design and software consultation with STUP Studio. Fixed milestone scopes, senior technical collaboration, and rapid response.',
};

export default function ContactPage() {
  const steps = [
    {
      num: '01',
      title: 'Inquiry & Scope Review',
      desc: 'We review your requirements and technical goals within 24–48 business hours.',
    },
    {
      num: '02',
      title: 'Architecture & Milestone Spec',
      desc: 'We outline an architectural blueprint with fixed deliverables and timeline.',
    },
    {
      num: '03',
      title: 'Direct Sprint Kickoff',
      desc: 'Work begins with direct senior engineer and designer collaboration.',
    },
  ];

  return (
    <div className="flex flex-col bg-surface-bg">
      {/* COHESIVE SPLIT-LAYOUT CONTACT SECTION */}
      <section className="pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT SECTION: Editorial Narrative, Direct Contact & Visual Timeline */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  PROJECT CONSULTATION
                </span>
                
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
                  Let&apos;s build something enduring.
                </h1>

                <p className="mt-2.5 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
                  Direct senior collaboration from day one. Tell us about your objectives, timeline, and scope.
                </p>

                {/* Brand Graphic / Studio Seal */}
                <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-br from-powder-soft/80 to-white border border-powder/60 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-sunflower shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="font-ui text-xs font-bold text-navy block">
                      Direct Senior Collaboration
                    </span>
                    <span className="font-sans text-[11px] text-ink-muted leading-snug block mt-0.5">
                      No intermediary account managers. You work directly with lead engineers.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3 pt-2 border-t border-slate-200/70">
                <div>
                  <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-1">
                    Direct Studio Email
                  </span>
                  <a
                    href={`mailto:${agencyConfig.email}`}
                    className="font-ui text-lg sm:text-xl font-bold text-navy hover:text-navy-deep transition-colors underline decoration-sunflower decoration-2 underline-offset-4"
                  >
                    {agencyConfig.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-sans text-ink-body">
                  <Clock className="w-4 h-4 text-navy shrink-0" />
                  <span>Standard response cadence: 24–48 business hours</span>
                </div>
              </div>

              {/* Compact Visual 3-Step Inquiry Timeline */}
              <div className="pt-3 border-t border-slate-200/70">
                <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-navy block mb-3">
                  Consultation Cadence
                </span>
                
                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-powder">
                  {steps.map((step) => (
                    <div key={step.num} className="relative">
                      <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-sunflower text-navy font-ui text-[9px] font-extrabold flex items-center justify-center shadow-2xs ring-4 ring-white">
                        {step.num.replace('0', '')}
                      </span>
                      <h4 className="font-ui text-xs font-bold text-navy">
                        {step.title}
                      </h4>
                      <p className="font-sans text-[11px] text-ink-muted mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SECTION: Clean, Elegant Project Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
