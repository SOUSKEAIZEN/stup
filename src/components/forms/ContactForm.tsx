'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  ContactFormData,
  serviceOptions,
  budgetOptions,
  timelineOptions,
} from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ContactFormProps {
  initialService?: string;
  initialPlan?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      serviceRequired: initialService || '',
      estimatedBudget: '',
      projectTimeline: '',
      projectDescription: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('submitting');
    setErrorMessage(null);

    try {
      // Simulate network request to agency API endpoint
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Check for simulated failure test condition
          if (data.email.includes('error-test@')) {
            reject(new Error('Simulated network delivery failure. Please try again.'));
          } else {
            resolve(true);
          }
        }, 1200);
      });

      setSubmissionStatus('success');
      reset();
    } catch (err: unknown) {
      setSubmissionStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'An unexpected transmission error occurred. Please contact us directly at hello@stupstudio.com.'
      );
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-10 shadow-card">
      {submissionStatus === 'success' ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-powder-soft text-navy flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-cherry" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Inquiry Successfully Transmitted
          </h3>
          <p className="font-sans text-sm sm:text-base text-ink-body mt-3 max-w-md leading-relaxed">
            Thank you for sharing your project vision. Our partners will review your requirements and respond within 24 business hours with initial strategic observations.
          </p>
          <div className="mt-8">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setSubmissionStatus('idle')}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          {submissionStatus === 'error' && errorMessage && (
            <div
              className="p-4 rounded-sm bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold font-ui">Submission Unsuccessful</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Full Name <span className="text-cherry">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Jane Doe"
                disabled={submissionStatus === 'submitting'}
                {...register('fullName')}
                className={cn(
                  'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all',
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Work Email <span className="text-cherry">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@company.com"
                disabled={submissionStatus === 'submitting'}
                {...register('email')}
                className={cn(
                  'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all',
                  errors.email
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Company Name (Optional) & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Company / Organization{' '}
                <span className="text-ink-muted lowercase font-normal">(optional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Acme Technologies"
                disabled={submissionStatus === 'submitting'}
                {...register('companyName')}
                className="w-full px-4 py-3 rounded-sm border border-slate-200 bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="serviceRequired"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Service Required <span className="text-cherry">*</span>
              </label>
              <select
                id="serviceRequired"
                disabled={submissionStatus === 'submitting'}
                {...register('serviceRequired')}
                className={cn(
                  'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
                  errors.serviceRequired
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.serviceRequired ? 'true' : 'false'}
              >
                <option value="">Select a service category...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.serviceRequired && (
                <p className="mt-1.5 text-xs text-red-600 font-sans">
                  {errors.serviceRequired.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Estimated Budget & Project Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="estimatedBudget"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Estimated Budget Range <span className="text-cherry">*</span>
              </label>
              <select
                id="estimatedBudget"
                disabled={submissionStatus === 'submitting'}
                {...register('estimatedBudget')}
                className={cn(
                  'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
                  errors.estimatedBudget
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.estimatedBudget ? 'true' : 'false'}
              >
                <option value="">Select budget range...</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.estimatedBudget && (
                <p className="mt-1.5 text-xs text-red-600 font-sans">
                  {errors.estimatedBudget.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectTimeline"
                className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
              >
                Target Timeline <span className="text-cherry">*</span>
              </label>
              <select
                id="projectTimeline"
                disabled={submissionStatus === 'submitting'}
                {...register('projectTimeline')}
                className={cn(
                  'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
                  errors.projectTimeline
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.projectTimeline ? 'true' : 'false'}
              >
                <option value="">Select target timeline...</option>
                {timelineOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.projectTimeline && (
                <p className="mt-1.5 text-xs text-red-600 font-sans">
                  {errors.projectTimeline.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Project Description */}
          <div>
            <label
              htmlFor="projectDescription"
              className="block font-ui text-xs font-semibold uppercase tracking-wider text-navy mb-2"
            >
              Project Overview & Objectives <span className="text-cherry">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={5}
              placeholder="Tell us about what you want to build, current challenges, technical preferences, or specific goals you aim to accomplish..."
              disabled={submissionStatus === 'submitting'}
              {...register('projectDescription')}
              className={cn(
                'w-full px-4 py-3 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y',
                errors.projectDescription
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-slate-200 focus:border-navy focus:ring-navy/20'
              )}
              aria-invalid={errors.projectDescription ? 'true' : 'false'}
            />
            {errors.projectDescription && (
              <p className="mt-1.5 text-xs text-red-600 font-sans">
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          {/* Submit Button & Disclaimer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              variant="cherry"
              size="lg"
              disabled={submissionStatus === 'submitting'}
              icon={
                submissionStatus === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )
              }
              className="w-full sm:w-auto tracking-wider uppercase font-semibold text-xs"
            >
              {submissionStatus === 'submitting' ? 'Transmitting Inquiry...' : 'Submit Inquiry'}
            </Button>

            <span className="font-sans text-xs text-ink-muted">
              We uphold strict confidentiality. We never sell or share client data.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
