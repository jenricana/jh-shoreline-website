import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
