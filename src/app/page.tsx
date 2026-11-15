import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Layout, Code2, Smartphone, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { agencyConfig } from '@/data/agency';

export default function HomePage() {
  const capabilityPillars = [
    {
      id: 'design',
      title: 'Design & Creative',
      desc: 'Human-centered interfaces, disciplined typographic systems, and WCAG AA accessible design tokens.',
      icon: Layout,
      href: '/services#design',
    },
    {
      id: 'web',
      title: 'Web Development',
      desc: 'Modern Next.js 14 App Router architectures, strict TypeScript safety, and low-latency serverless backends.',
      icon: Code2,
      href: '/services#web',
    },
    {
      id: 'apps',
      title: 'Application Development',
      desc: 'Cross-platform mobile applications, bespoke operational tooling, and resilient API synchronizations.',
      icon: Smartphone,
      href: '/services#apps',
    },
    {
      id: 'tech',
      title: 'Technology & Growth',
      desc: 'Technical performance audits, semantic search engine optimization, and organized cloud deployments.',
      icon: Cpu,
      href: '/services#tech',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* SECTION A: HERO */}
      <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-slate-200/60 overflow-hidden bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-powder-soft border border-powder/60 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                DIGITAL SOFTWARE &amp; DESIGN STUDIO
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[48px] leading-[1.14] tracking-[-0.025em] text-navy font-bold text-balance">
                Thoughtful design. Powerful digital experiences.
              </h1>

              <p className="mt-3.5 font-sans text-sm sm:text-base text-ink-body max-w-lg leading-relaxed text-balance">
                STUP Studio partners with founders and businesses to design, engineer, and deploy high-performance websites and bespoke digital software.
              </p>

              {/* CTAs: Explore Services & Contact */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  href="/services"
                  variant="sunflower"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
                  className="text-xs font-bold text-navy shadow-xs"
                >
                  Explore Services
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="text-xs font-semibold text-navy bg-white border border-slate-200 hover:border-slate-300"
                >
                  Contact Studio
                </Button>
              </div>

              {/* Technical Foundations */}
              <div className="mt-7 pt-5 border-t border-slate-200/70 w-full flex flex-wrap items-center gap-4 text-xs font-ui text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Next.js 14 &amp; React</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Strict TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Full Source Handover</span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Visual Composition */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: AGENCY POSITIONING */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                AGENCY POSITIONING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Architectural discipline over template aesthetics.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-3.5">
              <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                STUP Studio is an independent digital software and web design studio. We work with forward-thinking businesses, emerging technology ventures, and leaders who require more than generic website templates.
              </p>
              <p className="font-sans text-sm text-ink-body/90 leading-relaxed">
                Our approach pairs thoughtful editorial art direction with robust software engineering. By keeping our team senior and our client roster focused, we eliminate layers of bureaucracy, delivering direct technical collaboration, predictable milestone execution, and codebases built to stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: CORE CAPABILITIES (Overview with links to Services) */}
      <section className="py-12 sm:py-16 bg-surface-bg border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                CORE CAPABILITIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Specialized digital capabilities.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold uppercase tracking-wider text-navy hover:text-navy-deep group shrink-0"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-sunflower/80 hover:shadow-subtle"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-powder-soft text-navy flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-body leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1 text-[11px] font-ui font-semibold uppercase tracking-wider text-navy hover:text-navy-deep group"
                    >
                      <span>Explore Domain</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 text-sunflower" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: WORKING APPROACH (4-step process) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              WORKING APPROACH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
              A transparent, four-step development cadence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-surface-bg border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-navy">
                      STAGE {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">
                    {step.name}
                  </h3>
                  <p className="font-ui text-[11px] font-semibold uppercase tracking-wider text-ink-muted mb-2">
                    {step.tagline}
                  </p>
                  <p className="font-sans text-xs text-ink-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: WHY STUP */}
      <section className="py-12 sm:py-16 bg-surface-bg border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                STUDIO PRINCIPLES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Why partner with our boutique studio.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-ink-body mt-2.5 leading-relaxed">
                We maintain an intentional scale to guarantee craft excellence, direct technical access, and rapid execution without account management layers.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agencyConfig.differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <h3 className="font-ui text-xs sm:text-sm font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0" />
                    <span>{diff.title}</span>
                  </h3>
                  <p className="font-sans text-xs text-ink-body leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: CONTACT INVITATION */}
      <FinalCTA
        title="Ready to engineer your digital presence?"
        subtitle="Share your project goals with our lead practitioners. We evaluate every inquiry with clear scopes, transparent pricing, and structured next steps."
      />
    </div>
  );
}
