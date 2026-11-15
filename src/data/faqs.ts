import { FAQItem } from '@/types';

export const pricingFaqs: FAQItem[] = [
  {
    question: 'Are the package prices one-time fees or recurring charges?',
    answer:
      'All package prices (Essential ₹4,999, Starter ₹9,999, Professional ₹14,999, and Business Plus ₹24,999) are fixed one-time development fees for the specified scope. Hosting and domain names are separate and billed directly by their providers.',
    category: 'pricing',
  },
  {
    question: 'How do you handle domain names and web hosting?',
    answer:
      'Domain registration and cloud hosting subscriptions (such as Vercel, Netlify, or AWS) belong directly to you. We assist in configuring DNS records and connecting your repository at no extra charge during the project.',
    category: 'pricing',
  },
  {
    question: 'How many design revisions are included?',
    answer:
      'The Essential package includes 1 revision round; Starter includes 2 rounds; Professional and Business Plus include 3 rounds. Revisions allow you to request adjustments to layout, typography, colors, and content before final handover.',
    category: 'pricing',
  },
  {
    question: 'Can you build custom e-commerce or full-stack web applications?',
    answer:
      'Yes. Complex projects such as custom e-commerce stores, user portals, database-backed dashboards, and custom APIs are scoped individually based on your functional specifications. Use the contact form to request a custom proposal.',
    category: 'pricing',
  },
  {
    question: 'What is the payment milestone structure?',
    answer:
      'Standard projects follow a straightforward 50% deposit upon kickoff and 50% upon final staging approval before domain launch and code transfer.',
    category: 'pricing',
  },
];

export const generalFaqs: FAQItem[] = [
  {
    question: 'What is the typical turnaround timeline for a website project?',
    answer:
      'Single-page Essential websites are delivered within 3–5 business days. Starter and Professional multi-page platforms take 5–10 business days. Custom scopes and web applications are estimated based on milestones.',
    category: 'general',
  },
  {
    question: 'Do I own the full source code and design files after launch?',
    answer:
      'Yes. Upon receipt of final payment, full intellectual property rights, source code, and assets are transferred completely to you without any proprietary agency lock-in.',
    category: 'general',
  },
  {
    question: 'How will my website perform on mobile devices?',
    answer:
      'All layouts are built with mobile-first responsive design standards and tested across standard mobile viewports, tablets, and desktop resolutions.',
    category: 'general',
  },
  {
    question: 'What ongoing maintenance support is available after handover?',
    answer:
      'Every plan includes an initial warranty period (7 to 45 days). Following warranty completion, optional monthly maintenance retainers are available for periodic updates, security patches, and minor tweaks.',
    category: 'general',
  },
];
