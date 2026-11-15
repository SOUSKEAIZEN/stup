'use client';

import React, { useState } from 'react';
import { ProjectCategory, CaseStudy } from '@/types';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

export interface WorkClientProps {
  initialProjects: CaseStudy[];
}

const filterOptions: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Websites', value: 'websites' },
  { label: 'Applications', value: 'applications' },
  { label: 'UI/UX Design', value: 'ui-ux' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Branding', value: 'branding' },
];

export function WorkClient({ initialProjects }: WorkClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? initialProjects
      : initialProjects.filter(
          (project) =>
            project.category === activeCategory ||
            (activeCategory === 'ui-ux' && project.categoryLabel.toLowerCase().includes('ui/ux'))
        );

  return (
    <div>
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-slate-200">
        {filterOptions.map((filter) => {
          const isActive = activeCategory === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveCategory(filter.value)}
              className={cn(
                'px-4 py-2 rounded-sm font-ui text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower',
                isActive
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-ink-body hover:border-slate-300 hover:text-navy'
              )}
            >
              {filter.label}
              {filter.value === 'all' && ` (${initialProjects.length})`}
            </button>
          );
        })}
      </div>

      {/* Speculative Demo Disclaimer Note */}
      <div className="mb-10 p-4 rounded-sm bg-powder-soft/60 border border-powder/50 flex items-start gap-3">
        <Info className="w-5 h-5 text-navy shrink-0 mt-0.5" />
        <p className="font-sans text-xs text-navy/90 leading-relaxed">
          <strong>Demonstration Portfolio:</strong> The following case studies showcase realistic architectural prototypes and design systems built by STUP Studio to illustrate engineering capabilities across various industries. Quantitative metrics represent simulated performance benchmarks under controlled testing environments.
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx < 2} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-sm border border-slate-200">
          <p className="font-display text-xl text-navy">No projects found in this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className="mt-4 text-xs font-ui uppercase font-bold text-navy hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
