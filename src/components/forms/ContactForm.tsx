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
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Mail, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { agencyConfig } from '@/data/agency';

export interface ContactFormProps {
  initialService?: string;
  initialPlan?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'staged' | 'error'
  >('idle');
  const [stagedData, setStagedData] = useState<ContactFormData | null>(null);
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

    // Simulate validation pass and stage the payload
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStagedData(data);
    setSubmissionStatus('staged');
  };

  const generateMailtoUrl = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Project Inquiry: ${data.fullName} — ${data.serviceRequired}`);
    const body = encodeURIComponent(
      `Full Name: ${data.fullName}
Work Email: ${data.email}
Company: ${data.companyName || 'N/A'}
Service Required: ${data.serviceRequired}
Estimated Budget: ${data.estimatedBudget}
Target Timeline: ${data.projectTimeline}

Project Overview:
${data.projectDescription}`
    );
    return `mailto:${agencyConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-9 shadow-card">
      {submissionStatus === 'staged' && stagedData ? (
        <div className="py-6 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm bg-sunflower/20 text-navy flex items-center justify-center border border-sunflower/50">
              <CheckCircle2 className="w-6 h-6 text-navy stroke-[2.2]" />
            </div>
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-navy block">
                Validation Passed
              </span>
              <h3 className="font-display text-2xl font-bold text-navy">
                Inquiry Staged for Dispatch
              </h3>
            </div>
          </div>

          {/* Transparent Backend Explanation */}
          <div className="p-4 rounded-sm bg-surface-bg border border-slate-200 text-xs font-sans text-ink-body space-y-2 w-full">
            <p className="font-semibold font-ui text-navy">
              Notice: Backend API Integration
            </p>
            <p className="leading-relaxed">
              Your inquiry has successfully passed all field validations. In this development deployment, live SMTP or API dispatch (e.g. Resend, SendGrid) is not active.
            </p>
            <p className="leading-relaxed text-ink-muted">
              To send this exact message directly to our Bangalore studio inbox, use the instant mail client action below.
            </p>
          </div>

          {/* Staged Summary Preview */}
          <div className="w-full bg-powder-soft/40 p-4 rounded-sm border border-powder/50 text-xs font-sans space-y-1.5">
            <div>
              <span className="font-bold text-navy">Sender:</span> {stagedData.fullName} ({stagedData.email})
            </div>
            <div>
              <span className="font-bold text-navy">Service:</span> {stagedData.serviceRequired}
            </div>
            <div>
              <span className="font-bold text-navy">Budget / Timeline:</span> {stagedData.estimatedBudget} · {stagedData.projectTimeline}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
            <a
              href={generateMailtoUrl(stagedData)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-sunflower text-navy font-ui text-xs font-bold uppercase tracking-wider hover:bg-sunflower-deep shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 stroke-[2.2]" />
              <span>Open in Email Client</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmissionStatus('idle');
                reset(stagedData);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm border border-slate-200 text-navy font-ui text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Modify Details</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {submissionStatus === 'error' && errorMessage && (
            <div
              className="p-4 rounded-sm bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold font-ui">Submission Issue</p>
                <p className="mt-0.5 text-xs">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Full Name <span className="text-sunflower-dark font-bold">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Alex Morgan"
                disabled={submissionStatus === 'submitting'}
                {...register('fullName')}
                className={cn(
                  'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all',
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 font-sans">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Work Email <span className="text-sunflower-dark font-bold">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="alex@company.com"
                disabled={submissionStatus === 'submitting'}
                {...register('email')}
                className={cn(
                  'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all',
                  errors.email
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-slate-200 focus:border-navy focus:ring-navy/20'
                )}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-sans">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Company Name (Optional) & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="companyName"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Company / Organization{' '}
                <span className="text-ink-muted lowercase font-normal">(optional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Acme Systems"
                disabled={submissionStatus === 'submitting'}
                {...register('companyName')}
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="serviceRequired"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Service Required <span className="text-sunflower-dark font-bold">*</span>
              </label>
              <select
                id="serviceRequired"
                disabled={submissionStatus === 'submitting'}
                {...register('serviceRequired')}
                className={cn(
                  'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
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
                <p className="mt-1 text-xs text-red-600 font-sans">
                  {errors.serviceRequired.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Estimated Budget & Project Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="estimatedBudget"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Estimated Budget Range <span className="text-sunflower-dark font-bold">*</span>
              </label>
              <select
                id="estimatedBudget"
                disabled={submissionStatus === 'submitting'}
                {...register('estimatedBudget')}
                className={cn(
                  'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
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
                <p className="mt-1 text-xs text-red-600 font-sans">
                  {errors.estimatedBudget.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectTimeline"
                className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Target Timeline <span className="text-sunflower-dark font-bold">*</span>
              </label>
              <select
                id="projectTimeline"
                disabled={submissionStatus === 'submitting'}
                {...register('projectTimeline')}
                className={cn(
                  'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer',
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
                <p className="mt-1 text-xs text-red-600 font-sans">
                  {errors.projectTimeline.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Project Description */}
          <div>
            <label
              htmlFor="projectDescription"
              className="block font-ui text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Project Overview & Objectives <span className="text-sunflower-dark font-bold">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              placeholder="Tell us about the digital product you aim to build, key functional priorities, and target audience..."
              disabled={submissionStatus === 'submitting'}
              {...register('projectDescription')}
              className={cn(
                'w-full px-3.5 py-2.5 rounded-sm border bg-surface-bg font-sans text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y',
                errors.projectDescription
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-slate-200 focus:border-navy focus:ring-navy/20'
              )}
              aria-invalid={errors.projectDescription ? 'true' : 'false'}
            />
            {errors.projectDescription && (
              <p className="mt-1 text-xs text-red-600 font-sans">
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          {/* Submit Button & Confidentiality Note */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Button
              type="submit"
              variant="sunflower"
              size="md"
              disabled={submissionStatus === 'submitting'}
              icon={
                submissionStatus === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin text-navy" />
                ) : (
                  <ArrowRight className="w-4 h-4 stroke-[2.2] text-navy" />
                )
              }
              className="w-full sm:w-auto tracking-wider uppercase font-bold text-xs text-navy"
            >
              {submissionStatus === 'submitting' ? 'Validating...' : 'Stage Project Inquiry'}
            </Button>

            <span className="font-sans text-[11px] text-ink-muted">
              Mutual NDA available upon preliminary review.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
