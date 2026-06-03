import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://crystalclearacademy.in"),
  title: {
    default: "Crystal Clear Academy | Where Excellence Begins with Clarity",
    template: "%s | Crystal Clear Academy",
  },
  description:
    "18+ years of teaching excellence. Structured coaching for Classes 9–12, NEET, and Future-Ready Digital Skills in Chennai. Small batches, personal mentorship, proven results.",
  keywords: [
    "Crystal Clear Academy",
    "CCA Chennai",
    "NEET coaching Chennai",
    "tuition classes Chennai",
    "board exam coaching",
    "Class 9 10 11 12 tuition",
    "digital skills training",
    "TET coaching",
    "concept clarity method",
    "small batch coaching",
  ],
  authors: [{ name: "Crystal Clear Academy" }],
  creator: "Crystal Clear Academy",
  publisher: "Crystal Clear Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://crystalclearacademy.in",
    siteName: "Crystal Clear Academy",
    title: "Crystal Clear Academy | Where Excellence Begins with Clarity",
    description:
      "18+ years of teaching excellence. Structured coaching for Classes 9–12, NEET, and Future-Ready Digital Skills in Chennai.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crystal Clear Academy — Premium Academic Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Clear Academy | Where Excellence Begins with Clarity",
    description:
      "18+ years of teaching excellence. NEET coaching, board exam prep, and digital skills in Chennai.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://crystalclearacademy.in",
  },
};

// Organization JSON-LD for site-wide SEO
function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Crystal Clear Academy",
    alternateName: "CCA",
    url: "https://crystalclearacademy.in",
    logo: "https://crystalclearacademy.in/logo.png",
    description:
      "Premier academic coaching institution in Chennai with 18+ years of teaching excellence. Specializing in Classes 9–12 board exam preparation, NEET medical entrance coaching, digital skills training, and TET mentoring.",
    foundingDate: "2006",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98416-44813",
      contactType: "admissions",
      availableLanguage: ["English", "Tamil"],
    },
    sameAs: ["https://instagram.com/crystalclearacademy"],
    hasOfferingCatalog: {
      "@type": "OfferingCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "CCA Foundations",
          description: "Board exam preparation for Classes 9-12 (State Board & CBSE)",
        },
        {
          "@type": "Course",
          name: "CCA Aspire",
          description: "Intensive NEET medical entrance coaching with 10+ years track record",
        },
        {
          "@type": "Course",
          name: "CCA Launchpad",
          description: "Future-ready digital skills: UI/UX Design, Python, AI Literacy",
        },
        {
          "@type": "Course",
          name: "CCA Pathways",
          description: "Teacher Eligibility Test (TET) mentoring and pedagogy training",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <OrganizationJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
