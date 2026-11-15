import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6">
      <div className="max-w-md text-center">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-navy mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
          ERROR 404
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-4">
          Page Not Located
        </h1>
        <p className="font-sans text-base text-ink-body mb-8 leading-relaxed">
          The requested page or case study has moved or does not exist. Explore our selected work or return to the studio overview.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="sunflower"
            size="md"
            icon={<ArrowLeft className="w-4 h-4 stroke-[2.2]" />}
            iconPosition="left"
            className="text-navy font-bold shadow-xs"
          >
            Return Home
          </Button>
          <Button href="/work" variant="secondary" size="md">
            View Work
          </Button>
        </div>
      </div>
    </div>
  );
}
