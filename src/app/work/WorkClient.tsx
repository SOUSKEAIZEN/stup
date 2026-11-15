'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { CaseStudy } from '@/types';
import { cn } from '@/lib/utils';

export interface WorkClientProps {
  initialProjects: CaseStudy[];
}

export function WorkClient({ initialProjects }: WorkClientProps) {
  // Strictly enforce four flagship projects only
  const flagshipProjects = initialProjects.slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-16">
      {flagshipProjects.map((project, idx) => {
        const isEven = idx % 2 === 1;

        return (
          <article
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-card hover:border-powder group"
          >
            {/* Project Preview Image (Primary Visual Focus) */}
            <div
              className={cn(
                'lg:col-span-7 relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80',
                isEven ? 'lg:order-2' : 'lg:order-1'
              )}
            >
              <Link
                href={`/work/${project.slug}`}
                className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} - ${project.categoryLabel}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority={idx < 2}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Project Narrative & Details (Secondary Focus) */}
            <div
              className={cn(
                'lg:col-span-5 flex flex-col justify-between space-y-4',
                isEven ? 'lg:order-1' : 'lg:order-2'
              )}
            >
              <div>
                {/* Category & Industry */}
                <div className="flex items-center gap-2 text-xs font-ui mb-2">
                  <span className="font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                    {project.categoryLabel}
                  </span>
                  <span className="text-slate-300">/</span>
                  <span className="text-ink-muted uppercase tracking-wider text-[11px]">
                    {project.industry}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy group-hover:text-navy-deep transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>

                {/* Short Project Description */}
                <p className="font-sans text-xs sm:text-sm text-ink-body mt-2.5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Contribution & Architecture */}
                <div className="mt-4 pt-3.5 border-t border-slate-100">
                  <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">
                    Key Contribution &amp; Architecture
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans text-ink-body">
                    {project.keyFeatures.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="p-0.5 rounded-full bg-sunflower/25 text-navy mt-0.5 shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Used & Action Link */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-surface-bg text-ink-muted font-ui text-[10px] border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-wider text-navy hover:text-sunflower-dark transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
