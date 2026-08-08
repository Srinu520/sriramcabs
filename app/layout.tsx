import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://sriramcabs.vercel.app";
const siteTitle = "Sree Khushi Tours & Travels Bangalore | Cabs & Travel Service 24/7";
const siteDescription =
  "Book safe, clean and trusted cabs in Bangalore with Sree Khushi Tours & Travels. Local, airport, outstation and tour services with 24/7 support, experienced drivers and transparent pricing.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Sree Khushi Tours & Travels",
    locale: "en_IN",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Sree Khushi Tours & Travels",
  url: siteUrl,
  telephone: "+91-7411606748",
  email: "sriramcabs@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className={`${font.variable} antialiased`}>
        <Navbar />
        <main className="pb-16">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
