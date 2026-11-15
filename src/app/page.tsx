import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { agencyConfig } from '@/data/agency';

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 6);
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO (Compact, fits within initial viewport alongside navbar) */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-powder-soft/50 via-white to-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-powder-soft border border-powder/50 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                INDEPENDENT DIGITAL STUDIO
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[54px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
                Thoughtful design. Powerful digital experiences.
              </h1>

              <p className="mt-3.5 font-sans text-sm sm:text-base text-ink-body max-w-lg leading-relaxed text-balance">
                We design and build digital experiences, websites and software solutions that help businesses move forward.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  href="/work"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="tracking-wider uppercase font-semibold text-xs"
                >
                  Explore Our Work
                </Button>
                <Button
                  href="/contact"
                  variant="sunflower"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
                  className="text-xs font-bold text-navy shadow-xs"
                >
                  Start a Project
                </Button>
              </div>

              {/* Technical Foundations */}
              <div className="mt-7 pt-5 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-4 text-xs font-ui text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Next.js 14 & React</span>
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
                  <span className="font-medium text-navy">Clean Code Handover</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Portfolio Composition */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION & PHILOSOPHY */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                AGENCY POSITIONING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Restraint is our core design standard.
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between">
              <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                Rather than relying on visual gimmicks or bloated frameworks, STUP Studio focuses on architectural stability, fast loading times, and disciplined typography. We partner with businesses to deliver digital platforms that communicate authority and function reliably.
              </p>

              {/* Core Technical Focus */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-slate-100">
                {agencyConfig.coreCapabilities.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display text-base font-bold text-navy">
                      {item.title}
                    </span>
                    <span className="font-sans text-xs text-ink-muted mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-12 sm:py-16 bg-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <SectionHeading
              eyebrow="CAPABILITIES"
              title="Digital services built for business outcomes."
              description="End-to-end design, web engineering, and software delivery tailored to clear milestone scopes."
            />
            <Button
              href="/services"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="shrink-0 text-xs self-start sm:self-auto"
            >
              All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED WORK (DEMONSTRATION PORTFOLIO) */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Demonstration projects & interface systems."
              description="Explore conceptual prototypes showcasing design systems, responsive layouts, and type-safe architectures."
            />
            <Button
              href="/work"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="shrink-0 text-xs self-start sm:self-auto"
            >
              View All Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AGENCY APPROACH (4-STEP PROCESS) */}
      <section id="approach" className="py-12 sm:py-16 bg-surface-bg border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="PROCESS"
            title="A simple, transparent development workflow."
            description="Clear milestones, regular reviews, and defined deliverables from first concept to launch."
            align="center"
            className="mb-10 text-center mx-auto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-sm p-5 flex flex-col justify-between transition-all hover:border-sunflower/80 hover:shadow-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-display text-xl font-bold text-navy">
                      {step.step}
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

      {/* SECTION 6: WHY WORK WITH US (DIFFERENTIATORS) */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                STUDIO STANDARDS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Why partner with our boutique studio.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-ink-body mt-2.5 leading-relaxed">
                We work on a focused number of engagements to maintain high craft, direct communication, and rapid execution without bureaucratic layers.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agencyConfig.differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-surface-bg border border-slate-200/80 hover:border-sunflower/80 transition-colors"
                >
                  <h3 className="font-ui text-xs sm:text-sm font-bold text-navy mb-1 flex items-center gap-1.5">
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

      {/* SECTION 7: FINAL CTA (With visible Navy-to-Powder-Blue gradient) */}
      <FinalCTA />
    </div>
  );
}
