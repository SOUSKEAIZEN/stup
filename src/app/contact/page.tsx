import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import { ContactFormWrapper } from '@/components/forms/ContactFormWrapper';
import { agencyConfig } from '@/data/agency';

export const metadata: Metadata = {
  title: 'Contact Studio — Start a Project Consultation',
  description:
    'Initiate a digital design and software consultation with STUP Studio. Fixed milestone scopes, senior technical collaboration, and rapid response.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-surface-bg min-h-[calc(100vh-140px)]">
      {/* COHESIVE SPLIT-LAYOUT CONTACT SECTION */}
      <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT SECTION: Compact Heading, Direct Channels & Collaboration Highlight */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  PROJECT CONSULTATION
                </span>
                
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy font-bold text-balance">
                  Let&apos;s build something enduring.
                </h1>

                <p className="mt-2.5 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
                  Collaborate directly with senior practitioners. Tell us about your objectives, timeline, and scope.
                </p>
              </div>

              {/* Visually Attractive Collaboration Highlight Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-powder-soft/80 via-white to-powder-soft/40 border border-powder/70 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-sunflower shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h2 className="font-ui text-sm font-bold text-navy">
                      Direct Senior Collaboration
                    </h2>
                    <span className="font-sans text-xs text-ink-muted block">
                      No intermediary account managers
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-ink-body leading-relaxed border-t border-powder/40 pt-2.5">
                  Every engagement is scoped with fixed milestones, strict TypeScript type safety, and complete source code ownership.
                </p>
              </div>

              {/* Clearly Displayed Studio Email with Working Mail Link */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                  Direct Studio Email
                </span>
                <a
                  href={`mailto:${agencyConfig.email}`}
                  className="font-ui text-lg sm:text-xl font-bold text-navy hover:text-sunflower-dark transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-sunflower group-hover:scale-110 transition-transform" />
                  <span>{agencyConfig.email}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-navy transition-colors opacity-70 group-hover:opacity-100" />
                </a>

                {/* Short Response-Time Indicator */}
                <div className="flex items-center gap-2 text-xs font-sans text-ink-muted pt-2 border-t border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-navy shrink-0" />
                  <span>Replies within 24–48 business hours</span>
                </div>
              </div>

              {/* Security & Confidentiality Pill */}
              <div className="flex items-center gap-2 text-xs font-sans text-ink-muted px-1">
                <Shield className="w-4 h-4 text-navy/70 shrink-0" />
                <span>Mutual NDA available prior to technical discovery review.</span>
              </div>
            </div>

            {/* RIGHT SECTION: Clean, Well-Organized Contact Form Card */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
