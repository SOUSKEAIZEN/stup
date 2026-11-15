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
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
        {/* Ambient background decoration */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-powder-soft/70 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-site mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-powder-soft border border-powder/50 font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-navy mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cherry" />
                INDEPENDENT DIGITAL STUDIO
              </span>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-navy font-bold text-balance">
                Building digital experiences that move businesses forward.
              </h1>

              <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body max-w-2xl leading-relaxed text-balance">
                We design, develop and deliver thoughtful digital products that help ambitious businesses turn ideas into meaningful experiences.
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Button
                  href="/work"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="tracking-wider uppercase font-semibold text-xs"
                >
                  Explore Our Work
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="text-xs"
                >
                  Start a Project
                </Button>
              </div>

              {/* Trust Signal Bar */}
              <div className="mt-12 pt-8 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 text-xs font-ui text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-cherry" />
                  <span>Next.js 14 & React Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-cherry" />
                  <span>Sub-second Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-cherry" />
                  <span>Direct Senior Partner Collaboration</span>
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
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cherry block mb-2">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
                Restraint is our highest engineering virtue.
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between">
              <p className="font-sans text-lg sm:text-xl text-ink-body leading-relaxed">
                In an era dominated by transient visual trends and bloated web templates, STUP Studio advocates for clarity, architectural stability, and deliberate editorial craftsmanship. We partner with founders and executives who recognize that digital elegance and technical rigor are the ultimate brand differentiators.
              </p>

              {/* Agency Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-100">
                {agencyConfig.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-navy">
                      {stat.value}
                    </span>
                    <span className="font-ui text-xs text-ink-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-20 sm:py-28 bg-surface-bg">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              eyebrow="CAPABILITIES"
              title="Tailored digital services engineered for business growth."
              description="From brand identity systems and responsive design to high-throughput web applications and cloud deployment, our multidisciplinary team covers the complete product lifecycle."
            />
            <Button
              href="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shrink-0"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED WORK */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              eyebrow="PORTFOLIO HIGHLIGHTS"
              title="Selected work. Thoughtful execution. Meaningful results."
              description="A curated selection of our demonstration projects showcasing design systems, modern web engineering, and product craft across diverse industries."
            />
            <Button
              href="/work"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shrink-0"
            >
              Explore All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AGENCY APPROACH (4-STEP PROCESS) */}
      <section id="approach" className="py-20 sm:py-28 bg-surface-bg border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="METHODOLOGY"
            title="A structured, transparent four-step process."
            description="We eliminate ambiguity through iterative sprints, clear deliverables, and continuous collaboration from day one to launch."
            align="center"
            className="mb-16 text-center mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-sm p-7 flex flex-col justify-between transition-all hover:border-powder hover:shadow-subtle"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-cherry/80 block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {step.name}
                  </h3>
                  <p className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
                    {step.tagline}
                  </p>
                  <p className="font-sans text-sm text-ink-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY WORK WITH US (DIFFERENTIATORS) */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cherry block mb-2">
                THE STUP STANDARD
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
                Why forward-thinking teams partner with our studio.
              </h2>
              <p className="font-sans text-base text-ink-body mt-4 leading-relaxed">
                We are deliberate in the clients we take on. Rather than running a high-volume agency assembly line, we maintain small, senior squads dedicated to achieving exceptional creative and commercial outcomes.
              </p>
              <div className="mt-8 p-6 bg-powder-soft/50 rounded-sm border border-powder/40">
                <div className="flex items-center gap-2 text-navy font-ui text-sm font-bold">
                  <ShieldCheck className="w-5 h-5 text-cherry" />
                  <span>Direct Principal Oversight</span>
                </div>
                <p className="font-sans text-xs text-ink-body mt-2 leading-relaxed">
                  Every project is personally steered by senior design and engineering leaders with a 100% guarantee of production code quality.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {agencyConfig.differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-surface-bg border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <h3 className="font-ui text-base font-bold text-navy mb-2">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-body leading-relaxed">
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
