import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, Github } from 'lucide-react';
import { ContactFormWrapper } from '@/components/forms/ContactFormWrapper';
import { agencyConfig } from '@/data/agency';

export const metadata: Metadata = {
  title: "Let's Build Something Meaningful — Contact",
  description:
    'Start a project consultation with STUP Studio. Tell us about your objectives, budget, and timeline.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-slate-200/60 bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              PROJECT INQUIRIES
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-3 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              Tell us about your project objectives, target timeline, and budget. We review all submissions thoroughly and reply with structured next steps.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION: FORM + STUDIO DETAILS */}
      <section className="py-10 sm:py-14 bg-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Interactive Form (Primary Focus) */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>

            {/* Right Column: Studio Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-5">
              {/* Studio Info Card */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-wider text-navy block mb-4 border-b border-slate-100 pb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  <span>Direct Communication</span>
                </span>

                <div className="space-y-4 font-sans text-xs">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center shrink-0 border border-sunflower/40">
                      <Mail className="w-3.5 h-3.5 text-navy stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                        Project Inquiries
                      </span>
                      <a
                        href={`mailto:${agencyConfig.email}`}
                        className="font-medium text-navy hover:text-navy-deep transition-colors underline decoration-slate-300 underline-offset-2 text-sm"
                      >
                        {agencyConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Consultation Model */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center shrink-0 border border-sunflower/40">
                      <Clock className="w-3.5 h-3.5 text-navy stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                        Project Consultation
                      </span>
                      <p className="font-medium text-navy">
                        Fixed milestone scopes and delivery schedules
                      </p>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Direct collaboration with lead developers and designers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Repository */}
                {agencyConfig.social.github && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-2.5">
                      Open Source &amp; Repository
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={agencyConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-surface-bg text-navy hover:bg-sunflower transition-all text-xs font-ui font-semibold border border-slate-200"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
