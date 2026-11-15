import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-5 sm:px-8">
      <div className="max-w-md text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cherry block mb-3">
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
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
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
