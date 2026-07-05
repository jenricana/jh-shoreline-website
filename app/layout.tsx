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
  title: "JH Shoreline | Professional Cleaning Services Rockingham & Warnbro",
  description: "Window cleaning, gutter cleaning, pressure washing, roof cleaning, lawn mowing & car detailing in Rockingham & Warnbro. Reliable, fully insured, quality work. Call 0413 213 689",
  keywords: ["cleaning services rockingham", "window cleaning warnbro", "gutter cleaning", "pressure washing", "roof cleaning", "lawn mowing", "car detailing", "rockingham cleaners"],
  authors: [{ name: "Joshua Hounslow" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
