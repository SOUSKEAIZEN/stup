import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, Check } from 'lucide-react';
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
      {/* SECTION 1: HERO */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200/70 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-powder-soft/70 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-site mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-powder-soft border border-powder/50 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                INDEPENDENT DIGITAL STUDIO
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] leading-[1.1] tracking-[-0.025em] text-navy font-bold text-balance">
                Building digital experiences that move businesses forward.
              </h1>

              <p className="mt-4 font-sans text-base sm:text-lg text-ink-body max-w-xl leading-relaxed text-balance">
                We design, develop and deliver thoughtful digital products that help ambitious businesses turn ideas into meaningful experiences.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
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

              {/* Trust Signal Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-5 text-xs font-ui text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">TypeScript 5 & Next.js 14</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">WCAG AA & Sub-1s Vitals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">100% Client Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Composition */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION & PHILOSOPHY */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                OUR POSITIONING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                Restraint is our highest engineering virtue.
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between">
              <p className="font-sans text-base sm:text-lg text-ink-body leading-relaxed">
                In an industry crowded with transient templates and bloated dependencies, STUP Studio advocates for architectural stability, low-friction user journeys, and deliberate editorial craftsmanship. We collaborate directly with founders and product teams to deliver resilient digital systems that scale without technical debt.
              </p>

              {/* Technical Architecture Standards (Authentic Details) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
                {agencyConfig.standards.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl font-bold text-navy">
                      {item.value}
                    </span>
                    <span className="font-ui text-[11px] text-ink-muted uppercase tracking-wider mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-14 sm:py-20 bg-surface-bg">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeading
              eyebrow="CAPABILITIES"
              title="Tailored digital services engineered for business growth."
              description="From responsive design systems to high-throughput web applications and cloud deployment, our senior team covers the complete product lifecycle."
            />
            <Button
              href="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shrink-0 text-xs"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED WORK (CONCEPTUAL DEMONSTRATION) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Selected work. Thoughtful execution. Meaningful results."
              description="Demonstration case studies illustrating design systems, type-safe web architecture, and ergonomic interfaces across diverse industries."
            />
            <Button
              href="/work"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shrink-0 text-xs"
            >
              Explore All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AGENCY APPROACH (4-STEP PROCESS) */}
      <section id="approach" className="py-14 sm:py-20 bg-surface-bg border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="METHODOLOGY"
            title="A structured, transparent four-step process."
            description="We eliminate ambiguity through iterative sprints, clear deliverables, and continuous collaboration from day one to launch."
            align="center"
            className="mb-12 text-center mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-sm p-6 flex flex-col justify-between transition-all hover:border-sunflower/80 hover:shadow-subtle"
              >
                <div>
                  <span className="font-display text-2xl font-bold text-navy block mb-3 flex items-center justify-between">
                    <span>{step.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy mb-1.5">
                    {step.name}
                  </h3>
                  <p className="font-ui text-[11px] font-semibold uppercase tracking-wider text-ink-muted mb-2.5">
                    {step.tagline}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-ink-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY WORK WITH US (DIFFERENTIATORS) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                THE STUP STANDARD
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Why forward-thinking teams partner with our studio.
              </h2>
              <p className="font-sans text-sm sm:text-base text-ink-body mt-3 leading-relaxed">
                We maintain small, senior squads dedicated to achieving high technical craft and measurable product outcomes. We avoid bureaucratic agency overhead and prioritize direct partner collaboration.
              </p>
              <div className="mt-6 p-5 bg-powder-soft/50 rounded-sm border border-powder/40">
                <div className="flex items-center gap-2 text-navy font-ui text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-navy stroke-[2.2]" />
                  <span>Principal-Led Execution</span>
                </div>
                <p className="font-sans text-xs text-ink-body mt-1.5 leading-relaxed">
                  Every engagement is directly steered by senior engineers with guaranteed code standards and complete intellectual property handover.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {agencyConfig.differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-sm bg-surface-bg border border-slate-200/80 hover:border-sunflower/80 transition-colors"
                >
                  <h3 className="font-ui text-sm font-bold text-navy mb-1.5 flex items-center gap-2">
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

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
