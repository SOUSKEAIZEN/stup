import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name (at least 2 characters)')
    .max(80, 'Full name cannot exceed 80 characters'),
  email: z
    .string()
    .email('Please provide a valid email address (e.g. name@domain.com)'),
  companyName: z
    .string()
    .max(100, 'Company name cannot exceed 100 characters')
    .optional()
    .or(z.literal('')),
  serviceRequired: z
    .string()
    .min(1, 'Please select the primary service required for your project'),
  estimatedBudget: z
    .string()
    .min(1, 'Please select an estimated budget range'),
  projectTimeline: z
    .string()
    .min(1, 'Please select your target timeline'),
  projectDescription: z
    .string()
    .min(20, 'Please share at least 20 characters describing your project vision, goals or challenges')
    .max(2000, 'Project description cannot exceed 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  'Website Design & UI/UX',
  'Custom Web Application',
  'Mobile Application Development',
  'E-commerce Experience',
  'Brand Identity & Systems',
  'Full-stack Product Development',
  'Performance & Technical Audit',
  'Ongoing Maintenance & Retainer',
] as const;

export const budgetOptions = [
  '₹15,000 – ₹30,000 (Starter / Sprint)',
  '₹30,000 – ₹60,000 (Professional Website)',
  '₹60,000 – ₹1,50,000 (Business Platform)',
  '₹1,50,000+ (Custom Enterprise Solution)',
] as const;

export const timelineOptions = [
  'Immediately (Within 2 weeks)',
  '1 to 2 months',
  '2 to 4 months',
  'Flexible / Research phase',
] as const;
