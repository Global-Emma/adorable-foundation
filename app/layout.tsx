import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adorable Foundation International | Drug Abuse Prevention & NGO Nigeria",
  description:
    "Adorable Foundation International (AFI) is a leading African NGO fighting drug abuse through the ASACADA campaign. We provide youth rehabilitation, healthcare outreach, widow empowerment, and child nourishment.",
  keywords: [
    "NGO in Nigeria",
    "Drug abuse prevention campaign Africa",
    "ASACADA drug rehab awareness",
    "ASACADA",
    "Drug Campaign",
    "Youth rehabilitation services Nigeria",
    "Charity foundation Anambra",
    "Empowering vulnerable widows",
    "Child nourishment programs Africa",
    "Community healthcare outreach",
    "Social awareness campaign against drug abuse",
    "AFI humanitarian foundation",
    "Donate to drug prevention NGO",
  ],
  alternates: {
    // Unified to non-www to match Cloudflare root routing
    canonical: "https://www.adorablefoundation.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adorablefoundation.com",
    title: "Adorable Foundation International | Transforming Lives & Fighting Drug Abuse",
    description:
      "Join AFI and the ASACADA campaign in eliminating youth drug dependency and supporting underserved communities across Nigeria. Explore our programs or volunteer today.",
    siteName: "Adorable Foundation International",
    images: [
      {
        // NOTE: Swap this for a dedicated landscape 1200x630 graphic later for crisp link shares
        url: "https://www.adorablefoundation.com/images/og-main-banner.png",
        width: 1200,
        height: 630,
        alt: "Adorable Foundation International - ASACADA Outreach Campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adorable Foundation International | ASACADA Drug Prevention NGO",
    description:
      "Saving our tomorrow, today. Partner with AFI to combat youth drug abuse and uplift vulnerable communities in Nigeria.",
    images: ["https://www.adorablefoundation.com/images/og-main-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Adorable Foundation International",
    alternateName: ["AFI", "ASACADA"],
    url: "https://www.adorablefoundation.com",
    logo: "https://www.adorablefoundation.com/images/ascada_logo.png",
    description:
      "A prominent non-governmental organization in Nigeria dedicated to drug abuse awareness, youth rehabilitation, supporting vulnerable widows, and medical outreach.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anambra", 
      addressRegion: "Anambra State",
      addressCountry: "NG",
    },
    nonprofitStatus: "Nonprofit501c3", 
    sameAs: [
      "https://www.facebook.com/adorablefoundationinternational",
      "https://www.instagram.com/adorablefoundationhq",
      "https://wa.me/2347013777177"
    ],
    knowsAbout: [
      "Drug Abuse Prevention",
      "Youth Rehabilitation",
      "Community Development",
      "Humanitarian Aid",
      "Social Awareness Campaigns",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        {children}
        
        {/* Schema injected directly into body for immediate DOM layout resolution by crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}