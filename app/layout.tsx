import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhshoreline.com.au"),
  title: "JH Shoreline | Professional Cleaning Services Rockingham & Warnbro",
  description: "Window cleaning, gutter cleaning, pressure washing, roof cleaning, lawn mowing & car detailing in Rockingham & Warnbro. Reliable, fully insured, quality work. Call 0413 213 689",
  keywords: ["cleaning services rockingham", "window cleaning warnbro", "gutter cleaning", "pressure washing", "roof cleaning", "lawn mowing", "car detailing", "rockingham cleaners"],
  authors: [{ name: "Joshua Hounslow" }],
  verification: {
    google: "KRBsd4BD2Ed_5v4fhHP8HgWEbR-qWbHqE8JiwiNE4Lo",
  },
  openGraph: {
    title: "JH Shoreline | Professional Cleaning Services Rockingham & Warnbro",
    description: "Window cleaning, gutter cleaning, pressure washing, roof cleaning, lawn mowing & car detailing. Reliable, fully insured, quality work.",
    url: "https://www.jhshoreline.com.au",
    siteName: "JH Shoreline Cleaning Services",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: '/Photos/jh-shoreline-logo-v2.png',
        width: 1024,
        height: 1024,
        alt: 'JH Shoreline Cleaning Services',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JH Shoreline Cleaning Services',
  image: 'https://www.jhshoreline.com.au/Photos/jh-shoreline-logo-v2.png',
  logo: 'https://www.jhshoreline.com.au/Photos/jh-shoreline-logo-v2.png',
  '@id': 'https://www.jhshoreline.com.au',
  url: 'https://www.jhshoreline.com.au',
  telephone: '+61413213689',
  email: 'jhshorelinecleaningservice@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rockingham',
    addressRegion: 'WA',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -32.2934,
    longitude: 115.7517,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/share/1DFRbvRMdZ/',
    'https://www.instagram.com/jhshorelinecleaningservice/',
  ],
  priceRange: '$$',
  areaServed: ['Rockingham', 'Warnbro', 'Safety Bay', 'Baldivis', 'Port Kennedy', 'Secret Harbour'],
  serviceType: ['Window Cleaning', 'Gutter Cleaning', 'Solar Panel Cleaning', 'High Pressure Cleaning', 'Carpet Cleaning', 'Oven Cleaning', 'End of Lease Cleaning'],
};

const siteLinksSearchBox = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.jhshoreline.com.au',
  name: 'JH Shoreline Cleaning Services',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.jhshoreline.com.au/services?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLinksSearchBox) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
