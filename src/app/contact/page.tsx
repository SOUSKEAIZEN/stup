import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Dribbble, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
    <div className="flex flex-col pt-28 sm:pt-36">
      {/* HERO SECTION */}
      <section className="pb-12 sm:pb-16 border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cherry mb-3">
              START A CONVERSATION
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-navy font-bold text-balance">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body leading-relaxed text-balance">
              Tell us about your project, and let&apos;s explore how we can bring your idea to life. We review all submissions thoroughly and reply with actionable technical feedback.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION: FORM + STUDIO DETAILS */}
      <section className="py-16 sm:py-24 bg-surface-bg">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>

            {/* Right Column: Studio Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Info Card */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-7 sm:p-8 shadow-sm">
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-cherry block mb-5 border-b border-slate-100 pb-3">
                  Direct Inquiries & Office
                </span>

                <div className="space-y-6 font-sans text-sm">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-powder-soft text-navy flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-cherry" />
                    </div>
                    <div>
                      <span className="font-ui text-xs uppercase tracking-wider text-ink-muted block">
                        Direct Email Placeholder
                      </span>
                      <a
                        href={`mailto:${agencyConfig.email}`}
                        className="font-medium text-navy hover:text-cherry transition-colors underline decoration-slate-300 underline-offset-4"
                      >
                        {agencyConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-powder-soft text-navy flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cherry" />
                    </div>
                    <div>
                      <span className="font-ui text-xs uppercase tracking-wider text-ink-muted block">
                        Telephone Placeholder
                      </span>
                      <a
                        href={`tel:${agencyConfig.phone.replace(/[^0-9+]/g, '')}`}
                        className="font-medium text-navy hover:text-cherry transition-colors"
                      >
                        {agencyConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-powder-soft text-navy flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-cherry" />
                    </div>
                    <div>
                      <span className="font-ui text-xs uppercase tracking-wider text-ink-muted block">
                        Bangalore Studio Placeholder
                      </span>
                      <p className="font-medium text-navy leading-snug">
                        {agencyConfig.location}
                      </p>
                    </div>
                  </div>

                  {/* Response Time & Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-powder-soft text-navy flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-cherry" />
                    </div>
                    <div>
                      <span className="font-ui text-xs uppercase tracking-wider text-ink-muted block">
                        Expected Response Time
                      </span>
                      <p className="font-medium text-navy">
                        {agencyConfig.responseTime}
                      </p>
                      <p className="text-xs text-ink-muted mt-0.5">
                        {agencyConfig.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <span className="font-ui text-xs uppercase tracking-wider text-ink-muted block mb-3">
                    Studio Social Profiles
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={agencyConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-sm bg-surface-bg text-navy hover:text-white hover:bg-navy transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={agencyConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-sm bg-surface-bg text-navy hover:text-white hover:bg-navy transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={agencyConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-sm bg-surface-bg text-navy hover:text-white hover:bg-navy transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={agencyConfig.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-sm bg-surface-bg text-navy hover:text-white hover:bg-navy transition-all"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* NDA & Security Card */}
              <div className="p-6 rounded-sm bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-cherry shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-ui text-sm font-bold text-navy">
                    Mutual NDA Available
                  </h4>
                  <p className="font-sans text-xs text-ink-body mt-1 leading-relaxed">
                    Working on proprietary intellectual property? We are pleased to execute your standard mutual Non-Disclosure Agreement prior to our preliminary briefing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT FAQ SECTION BELOW FORM */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cherry block text-center mb-2">
              INQUIRY QUESTIONS
            </span>
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">
              What to expect after reaching out.
            </h2>
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
