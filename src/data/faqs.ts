import { FAQItem } from '@/types';

export const pricingFaqs: FAQItem[] = [
  {
    question: 'Are the package prices one-time fees or recurring subscriptions?',
    answer:
      'All package fees (Starter, Professional, and Business Pro) are fixed one-time investments tied to the agreed project scope. There are no surprise monthly licensing charges. Ongoing hosting, domain registration, and optional post-warranty maintenance retainers are handled separately with complete cost transparency.',
    category: 'pricing',
  },
  {
    question: 'How do you structure payment milestones for web and software projects?',
    answer:
      'Standard projects follow a clear milestone structure: 50% deposit upon kickoff and design strategy approval, and 50% upon final staging review and deployment to production. For larger Business Pro or Enterprise scopes, we can structure 40% / 30% / 30% or monthly sprint milestones.',
    category: 'pricing',
  },
  {
    question: 'What happens if our requirements expand beyond the initial package?',
    answer:
      'We believe in radical clarity. If your project evolves to require additional pages, complex bespoke integrations, or expanded scope, we document the delta in a transparent change request with fixed cost and timeline before any extra work begins.',
    category: 'pricing',
  },
  {
    question: 'Do you offer ongoing technical maintenance retainers post-launch?',
    answer:
      'Yes. Every package includes a complimentary post-launch support warranty period (14 to 60 days depending on the plan). Afterward, clients can opt into a monthly retainer covering security patches, dependency updates, uptime monitoring, and dedicated design/development hours.',
    category: 'pricing',
  },
  {
    question: 'Can we upgrade our website from Starter to Professional later?',
    answer:
      'Absolutely. Because we architect all codebases on modular Next.js and Tailwind foundations, your platform is inherently scalable. We credit a portion of your initial investment toward subsequent expansion phases.',
    category: 'pricing',
  },
];

export const generalFaqs: FAQItem[] = [
  {
    question: 'How long does a typical project take from kickoff to launch?',
    answer:
      'A Starter single-page website is typically delivered within 2 weeks. A comprehensive Professional multi-page platform takes 3 to 5 weeks. Business Pro and custom web applications typically range from 6 to 10 weeks depending on custom integrations and backend complexity.',
    category: 'general',
  },
  {
    question: 'Who will I be working with directly during the engagement?',
    answer:
      'You will collaborate directly with our senior designers and software engineers. We do not use intermediary account managers who dilute technical communication. You participate in regular asynchronous Slack/Loom check-ins and structured milestone reviews.',
    category: 'general',
  },
  {
    question: 'Do we own the full intellectual property and source code?',
    answer:
      '100% yes. Upon receipt of final payment, full intellectual property rights, source code, Figma design files, assets, and repository ownership are transferred entirely to your organization without any proprietary agency lock-in.',
    category: 'general',
  },
  {
    question: 'How do you ensure our website will load quickly on mobile devices?',
    answer:
      'Performance is built into our core engineering standards rather than added as an afterthought. We optimize font subsets, convert imagery to modern AVIF/WebP formats, eliminate bloated third-party scripts, and rigorously test on real low-end mobile devices over throttled 4G networks.',
    category: 'general',
  },
];
