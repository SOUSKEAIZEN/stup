import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, Globe, ShieldCheck, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { ContactFormWrapper } from '@/components/forms/ContactFormWrapper';
import { Accordion } from '@/components/ui/Accordion';
import { agencyConfig } from '@/data/agency';
import { generalFaqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: "Let's Build Something Meaningful — Contact",
  description:
    'Start a project consultation with STUP Studio. Tell us about your objectives, budget, and timeline.',
};

export default function ContactPage() {
  const contactFaqs = generalFaqs.slice(0, 3);

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      {/* HERO SECTION */}
      <section className="pb-8 sm:pb-10 border-b border-slate-200/70 bg-gradient-to-b from-powder-soft/40 via-white to-white">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              START A CONVERSATION
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-3 font-sans text-sm sm:text-base text-ink-body leading-relaxed text-balance">
              Tell us about your project, target timeline, and goals. We review all submissions thoroughly and reply with clear next steps.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION: FORM + STUDIO DETAILS */}
      <section className="py-10 sm:py-14 bg-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>

            {/* Right Column: Studio Information & Channels */}
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

                  {/* Delivery Model */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center shrink-0 border border-sunflower/40">
                      <Globe className="w-3.5 h-3.5 text-navy stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                        Delivery Model
                      </span>
                      <p className="font-medium text-navy">
                        {agencyConfig.location}
                      </p>
                    </div>
                  </div>

                  {/* Response Time & Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center shrink-0 border border-sunflower/40">
                      <Clock className="w-3.5 h-3.5 text-navy stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                        Response Window
                      </span>
                      <p className="font-medium text-navy">
                        {agencyConfig.responseTime}
                      </p>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        {agencyConfig.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-2.5">
                    Studio Profiles
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={agencyConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-surface-bg text-navy hover:text-navy hover:bg-sunflower transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={agencyConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-surface-bg text-navy hover:text-navy hover:bg-sunflower transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={agencyConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-surface-bg text-navy hover:text-navy hover:bg-sunflower transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={agencyConfig.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-surface-bg text-navy hover:text-navy hover:bg-sunflower transition-all"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* NDA Notice */}
              <div className="p-4 rounded-sm bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center shrink-0 border border-sunflower/40">
                  <ShieldCheck className="w-4 h-4 text-navy stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-ui text-xs font-bold text-navy">
                    Mutual NDA Available
                  </h4>
                  <p className="font-sans text-xs text-ink-body mt-0.5 leading-relaxed">
                    Working on proprietary concepts? We are pleased to execute a standard mutual Non-Disclosure Agreement prior to in-depth project briefings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT FAQ SECTION */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block text-center justify-center mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              INQUIRY QUESTIONS
            </span>
            <h2 className="font-display text-2xl font-bold text-navy text-center mb-6">
              What to expect after reaching out.
            </h2>
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
