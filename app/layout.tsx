import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { QuoteResumePrompt } from "@/components/QuoteResumePrompt";
import { MobileCTABar } from "@/components/MobileCTABar";
import { JsonLd } from "@/components/JsonLd";
import { SITE, REVIEWS } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Quartz Digital | Web Design, SEO and Digital Growth — Australia",
    template: "%s",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Quartz Digital | Build. Rank. Scale.",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Quartz Digital — Build. Rank. Scale." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quartz Digital | Build. Rank. Scale.",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen bg-ink font-sans text-cream antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": `${SITE.url}/#business`,
            name: SITE.name,
            description: SITE.positioning,
            url: SITE.url,
            telephone: SITE.phone,
            image: `${SITE.url}/logo.jpg`,
            logo: `${SITE.url}/logo.jpg`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hoppers Crossing",
              addressRegion: "VIC",
              addressCountry: "AU",
            },
            areaServed: ["Australia", "Worldwide"],
            hasMap: SITE.googleMaps,
            sameAs: [SITE.instagram, SITE.googleMaps, SITE.googleReviews],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: String(REVIEWS.length),
            },
            priceRange: "$$",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <QuoteResumePrompt />
        <MobileCTABar />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
