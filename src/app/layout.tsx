import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { agencyConfig } from '@/data/agency';

export const metadata: Metadata = {
  metadataBase: new URL('https://stupstudio.com'),
  title: {
    default: `${agencyConfig.name} — ${agencyConfig.tagline}`,
    template: `%s | ${agencyConfig.name}`,
  },
  description:
    'Independent digital software studio and creative technology agency. We design, engineer and deliver bespoke web applications, digital products, and high-performance brand experiences.',
  keywords: [
    'Digital Agency',
    'Software Studio',
    'Next.js Development',
    'UI/UX Design',
    'Web Applications',
    'Bangalore Tech Studio',
    'Custom Software',
  ],
  authors: [{ name: agencyConfig.name }],
  creator: agencyConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stupstudio.com',
    title: `${agencyConfig.name} — ${agencyConfig.tagline}`,
    description:
      'Building digital experiences that move businesses forward. Custom web applications, UI/UX systems, and high-performance digital platforms.',
    siteName: agencyConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${agencyConfig.name} — ${agencyConfig.tagline}`,
    description:
      'Building digital experiences that move businesses forward. Custom web applications, UI/UX systems, and high-performance digital platforms.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-surface-bg text-ink-body flex flex-col min-h-screen selection:bg-sunflower selection:text-navy">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
