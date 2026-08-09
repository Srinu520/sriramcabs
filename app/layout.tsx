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

const siteUrl = "https://sreekhushitravels.in";
const googlePlaceId = "ChIJL7-PL-hzrjsRE8shNb_F1nk";
const googleBusinessUrl = `https://www.google.com/maps/search/?api=1&query=Sree%20Khushi%20Tours%20%26%20Travels&query_place_id=${googlePlaceId}`;
const siteTitle = "Cab Service in Sarjapura, Anekal & Bangalore | Sree Khushi Tours & Travels";
const siteDescription =
  "24/7 cab service in Sarjapura, Sompara Gate, Anekal and Bangalore. Airport taxi, local rides, outstation cabs, tempo traveller and temple tours.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
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
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": `${siteUrl}/#business`,
  name: "Sree Khushi Tours & Travels",
  url: siteUrl,
  description: siteDescription,
  telephone: "+91-7411606748",
  email: "sreekhushitours@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anekal Taluk, Near Ram Temple, 21 Krishna Reddy Building, Sompara Gate",
    addressLocality: "Sarjapura",
    addressRegion: "Karnataka",
    postalCode: "562125",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Place", name: "Sarjapura" },
    { "@type": "Place", name: "Sompara Gate" },
    { "@type": "Place", name: "Sompura Gate" },
    { "@type": "Place", name: "Anekal" },
    { "@type": "City", name: "Bangalore" },
  ],
  hasMap: googleBusinessUrl,
  sameAs: [googleBusinessUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-7411606748",
      availableLanguage: ["English", "Kannada", "Telugu", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "WhatsApp",
      telephone: "+91-8919602258",
      url: "https://wa.me/918919602258",
      availableLanguage: ["English", "Kannada", "Telugu", "Hindi"],
    },
  ],
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
