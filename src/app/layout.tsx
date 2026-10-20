import type { Metadata } from 'next';
import { Navbar, Motion } from '@/components/SiteShell';
import { Footer } from '@/components/Shared';
import { brand } from '@/lib/content';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shwetashah.in'),
  title: { default: 'Business Growth Karma | Shweta Shah — Leads into Growth', template: '%s | Business Growth Karma' },
  description: 'ROI-focused digital marketing, sales psychology and automation with Shweta Shah. Connect your branding, sales team and lead generation into one business growth framework.',
  keywords: ['Business Growth Karma', 'Shweta Shah', 'Sales Psychology System', 'Google Ads', 'LinkedIn lead generation', 'business growth', 'Pune'],
  authors: [{ name: 'Shweta Shah' }],
  openGraph: { type: 'website', locale: 'en_IN', siteName: brand.name, title: 'Business Growth Karma — Your Next Chapter', description: 'You bring the ambition. We build the momentum. Digital marketing, sales psychology and growth systems with Shweta Shah.', images: [{ url: '/brand/social-cover.png', width: 1200, height: 630, alt: 'Business Growth Karma by Shweta Shah' }] },
  twitter: { card: 'summary_large_image', images: ['/brand/social-cover.png'] },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: brand.name, founder: { '@type': 'Person', name: 'Shweta Vallabh Shah' }, url: 'https://shwetashah.in', email: brand.email, telephone: '+919920220513', address: { '@type': 'PostalAddress', streetAddress: '207B, 2nd Floor, Rajgruhi Business Hub, Kondhwa Budruk', addressLocality: 'Pune', addressRegion: 'Maharashtra', postalCode: '411048', addressCountry: 'IN' }, sameAs: [brand.linkedIn, 'https://instagram.com/shwetashah.in', 'https://youtube.com/shwetashah'] };
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></head><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer /><Motion /></body></html>;
}
