'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/types';
import { cn } from '@/lib/utils';

export interface WorkClientProps {
  initialProjects: CaseStudy[];
}

export function WorkClient({ initialProjects }: WorkClientProps) {
  // Strictly enforce four flagship projects only
  const flagshipProjects = initialProjects.slice(0, 4);

  return (
    <div className="space-y-8 sm:space-y-10">
      {flagshipProjects.map((project, idx) => {
        const isEven = idx % 2 === 1;

        return (
          <article
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-card hover:border-powder group"
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
                className="block w-full h-full focus-visible:outline-none"
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

                {/* Short Project Description (1-2 sentences) */}
                <p className="font-sans text-xs sm:text-sm text-ink-body mt-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Technologies Used & Action Link */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-surface-bg text-ink-muted font-ui text-[10px] font-semibold border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-wider text-navy hover:text-sunflower-dark transition-colors"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
