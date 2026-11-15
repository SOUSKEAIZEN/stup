import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, AlertCircle } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/sections/FinalCTA';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — ${project.industry} Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | STUP Studio`,
      description: project.summary,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const projectIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="flex flex-col pt-28 sm:pt-36">
      {/* BACK NAVIGATION */}
      <div className="max-w-site mx-auto px-5 sm:px-8 w-full mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* CASE STUDY HEADER */}
      <section className="pb-12 sm:pb-16 border-b border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-ui mb-4">
            <span className="font-bold uppercase tracking-widest text-navy flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sunflower" />
              {project.categoryLabel}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-ink-muted uppercase tracking-wider">{project.industry}</span>
            <span className="text-slate-300">/</span>
            <span className="text-ink-muted">{project.year}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-navy tracking-tight max-w-4xl text-balance">
            {project.title}
          </h1>

          <p className="mt-6 font-sans text-lg sm:text-xl text-ink-body max-w-3xl leading-relaxed text-balance">
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200/70">
            <div>
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block">
                Client Entity
              </span>
              <p className="font-ui text-sm font-bold text-navy mt-1">{project.client}</p>
            </div>
            <div>
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block">
                Delivery Timeline
              </span>
              <p className="font-ui text-sm font-bold text-navy mt-1">6-Week Sprint</p>
            </div>
            <div>
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block">
                Primary Stack
              </span>
              <p className="font-ui text-sm font-bold text-navy mt-1">Next.js & TypeScript</p>
            </div>
            <div>
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted block">
                Design System
              </span>
              <p className="font-ui text-sm font-bold text-navy mt-1">Tailwind + Figma Tokens</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED HERO IMAGE */}
      <section className="py-12 max-w-site mx-auto px-5 sm:px-8 w-full">
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-slate-200/90 shadow-card">
          <Image
            src={project.heroImage}
            alt={`${project.title} preview hero image`}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover"
          />
        </div>
      </section>

      {/* CASE STUDY CONTENT SECTIONS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-8 space-y-16">
              {/* 1. Project Overview */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  01 / CONTEXT & VISION
                </span>
                <h2 className="font-display text-3xl font-bold text-navy mb-4">
                  Project Overview
                </h2>
                <p className="font-sans text-base sm:text-lg text-ink-body leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* 2. Challenge */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  02 / THE BOTTLENECK
                </span>
                <h2 className="font-display text-3xl font-bold text-navy mb-4">
                  The Core Architectural Challenge
                </h2>
                <p className="font-sans text-base sm:text-lg text-ink-body leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Secondary Image */}
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-slate-200/90 shadow-subtle">
                <Image
                  src={project.secondaryImage}
                  alt={`${project.title} detailed interface execution`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* 3. Our Approach */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  03 / STRATEGY & EXECUTION
                </span>
                <h2 className="font-display text-3xl font-bold text-navy mb-4">
                  Our Engineering & Design Approach
                </h2>
                <p className="font-sans text-base sm:text-lg text-ink-body leading-relaxed">
                  {project.approach}
                </p>
                <p className="font-sans text-base sm:text-lg text-ink-body leading-relaxed mt-4">
                  {project.designAndDev}
                </p>
              </div>

              {/* 4. Key Delivered Features */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  04 / DELIVERED CAPABILITIES
                </span>
                <h2 className="font-display text-3xl font-bold text-navy mb-6">
                  Key Architectural Features
                </h2>
                <div className="space-y-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-slate-200/90 rounded-sm flex items-start gap-3"
                    >
                      <span className="mt-1 p-0.5 rounded-full bg-sunflower/25 text-navy shrink-0">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                      <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial (if available) */}
              {project.testimonial && (
                <div className="p-8 sm:p-10 rounded-sm bg-navy text-white relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-64 h-64 bg-sunflower/10 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-[0.2em] text-sunflower block mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                    CLIENT REFLECTION
                  </span>
                  <blockquote className="font-display text-xl sm:text-2xl text-white italic leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-navy-deep flex flex-col">
                    <span className="font-ui text-sm font-bold text-sunflower">
                      {project.testimonial.author}
                    </span>
                    <span className="font-sans text-xs text-slate-400">
                      {project.testimonial.title}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar with Metrics, Tech Stack & Conceptual Disclaimer */}
            <div className="lg:col-span-4 space-y-8">
              {/* Performance Metrics */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-7 shadow-sm">
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-navy block mb-5 border-b border-slate-100 pb-3">
                  Impact & Benchmarks
                </span>
                <div className="space-y-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <span className="font-display text-3xl sm:text-4xl font-bold text-navy block">
                        {metric.value}
                      </span>
                      <span className="font-ui text-xs text-ink-muted uppercase tracking-wider block mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Conceptual Disclaimer Note as required */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-start gap-2.5 text-ink-muted">
                  <AlertCircle className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                  <p className="font-sans text-[11px] leading-relaxed">
                    <strong>Conceptual Portfolio Case Study:</strong> Metrics displayed are simulated demonstration benchmarks recorded under staging test conditions to illustrate performance capabilities.
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-7 shadow-sm">
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-navy block mb-4 border-b border-slate-100 pb-3">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface-bg rounded-sm font-ui text-xs font-medium text-navy border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar Action CTA */}
              <div className="bg-powder-soft/50 border border-powder/50 rounded-sm p-6">
                <h4 className="font-display text-xl font-bold text-navy mb-2">
                  Need similar capabilities?
                </h4>
                <p className="font-sans text-xs text-ink-body leading-relaxed mb-5">
                  Let’s schedule a 30-minute discovery session to assess your technical requirements.
                </p>
                <Button
                  href="/contact"
                  variant="sunflower"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 stroke-[2.2]" />}
                  className="w-full justify-center text-xs tracking-wider uppercase font-bold text-navy"
                >
                  Start a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAVIGATION BAR */}
      <section className="py-12 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work"
            className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted hover:text-navy transition-colors"
          >
            ← View All Case Studies
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-4 text-right"
          >
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-navy block">
                Next Case Study
              </span>
              <span className="font-display text-xl font-bold text-navy group-hover:text-navy-deep transition-colors">
                {nextProject.title} — {nextProject.industry}
              </span>
            </div>
            <div className="p-3 rounded-full bg-powder-soft text-navy group-hover:bg-sunflower group-hover:text-navy transition-colors">
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
