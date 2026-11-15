'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ContactForm } from './ContactForm';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const planParam = searchParams.get('plan') || '';

  return <ContactForm initialService={serviceParam} initialPlan={planParam} />;
}

export function ContactFormWrapper() {
  return (
    <Suspense
      fallback={
        <div className="bg-white border border-slate-200/90 rounded-sm p-10 shadow-card animate-pulse">
          <div className="h-6 bg-slate-100 rounded w-1/3 mb-4" />
          <div className="h-10 bg-slate-100 rounded w-full mb-6" />
          <div className="h-28 bg-slate-100 rounded w-full" />
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
