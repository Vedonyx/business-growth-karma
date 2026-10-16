import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fobet Media | Personal Branding Agency",
  description:
    "Scale your authority with Fobet Media. Premium 'done-for-you' personal branding agency and short-form video strategy for entrepreneurs. Book your strategy call today!",
  keywords: [
    "Personal Branding Agency",
    "personal branding expert",
    "personal branding consultant",
    "short form video agency",
    "content creation agency",
    "Riya Upreti",
    "Vibhav Raj",
    "Fobet Media",
  ],
  authors: [{ name: "Aastha Fobet" }, { name: "Riya Upreti" }, { name: "Vibhav Raj" }],
  openGraph: {
    title: "Fobet Media | Personal Branding Agency",
    description:
      "Scale your authority with Fobet Media. Premium 'done-for-you' personal branding agency and short-form video strategy for entrepreneurs.",
    url: "https://fobetmedia.com/",
    siteName: "Fobet Media",
    images: [
      {
        url: "https://fobetmedia.com/wp-content/uploads/2026/08/web-e1765185916714.webp",
        width: 1200,
        height: 630,
        alt: "Fobet Media | Personal Branding Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobet Media | Personal Branding Agency",
    description:
      "Scale your authority with Fobet Media. Premium 'done-for-you' personal branding agency and short-form video strategy for entrepreneurs.",
    images: [
      "https://fobetmedia.com/wp-content/uploads/2026/08/web-e1765185916714.webp",
    ],
  },
  icons: {
    icon: "https://fobetmedia.com/wp-content/uploads/2025/11/cropped-FOBET-MEDIA-LOGO-WITH-TEXT-scaled-2-32x32.png",
    apple: "https://fobetmedia.com/wp-content/uploads/2025/11/cropped-FOBET-MEDIA-LOGO-WITH-TEXT-scaled-2-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fobetmedia.com/#organization",
        name: "Fobet Media",
        url: "https://fobetmedia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://fobetmedia.com/wp-content/uploads/2026/04/Fobet-Media-Logo.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://fobetmedia.com/#website",
        url: "https://fobetmedia.com",
        name: "Fobet Media",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
