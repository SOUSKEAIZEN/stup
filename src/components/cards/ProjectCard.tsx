import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CaseStudy } from '@/types';

export interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group bg-white border border-slate-200/90 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-sunflower/80 hover:shadow-card hover:-translate-y-1',
        className
      )}
    >
      {/* Project Image Container */}
      <Link
        href={`/work/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} - ${project.categoryLabel}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Project Meta & Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center justify-between text-xs font-ui mb-2">
            <span className="font-semibold uppercase tracking-wider text-navy flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower shrink-0" />
              <span>{project.categoryLabel}</span>
            </span>
            <span className="text-ink-muted">{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-navy-deep transition-colors duration-200">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-sm"
            >
              {project.title}
            </Link>
          </h3>

          <p className="font-ui text-xs text-ink-muted mt-0.5 uppercase tracking-wider">
            {project.industry}
          </p>

          <p className="font-sans text-xs sm:text-sm text-ink-body mt-2.5 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Delivered Capabilities */}
          <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center gap-1.5 text-[11px] font-ui text-ink-muted">
            <span className="font-semibold text-navy">Delivered:</span>
            <span className="truncate">{project.deliverables.slice(0, 2).join(' · ')}</span>
          </div>
        </div>

        {/* Action Link & Technologies */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="inline-block px-2 py-0.5 rounded-sm bg-surface-bg text-ink-muted font-ui text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 font-ui text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors shrink-0 ml-2"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
