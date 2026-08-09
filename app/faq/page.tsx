import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { MotionSection } from "@/components/MotionSection";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Cab Service FAQ | Sarjapura, Anekal & Bangalore",
  description:
    "Frequently asked questions about Sree Khushi Tours & Travels cab services in Sarjapura, Anekal and Bangalore, including local, airport, outstation and temple trips.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Do you provide 24/7 service?",
    answer: "Yes, Sree Khushi Tours & Travels is available round the clock for local, airport and outstation rides.",
  },
  {
    question: "Which vehicles do you have?",
    answer:
      "All types of vehicles: Hatchback, Sedan, SUV, Tempo Traveller and Luxury vehicles. We assign based on your trip size and luggage.",
  },
  {
    question: "How is outstation pricing calculated?",
    answer:
      "Outstation rides have a 300 KM/day minimum, ₹13/km, ₹400/day driver bata. Toll, parking and temporary permits are additional.",
  },
  {
    question: "Can I get a temple tour itinerary?",
    answer:
      "Yes, we customise temple and pilgrimage tours with early morning pick-ups, darshan timing alignment and flexible stops.",
  },
  {
    question: "Do you sanitize cars?",
    answer: "Absolutely. We maintain clean interiors and sanitize touchpoints regularly.",
  },
  {
    question: "How do I book quickly?",
    answer:
      "Call +91 7411606748 or WhatsApp +91 8919602258 for the fastest confirmation, or use the booking form with your date, time and route.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <MotionSection>
        <div className="rounded-3xl border border-brand-gold/40 bg-white/80 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">FAQ</p>
          <h1 className="text-3xl font-bold text-brand-dark">Cab Service FAQs for Sarjapura, Anekal & Bangalore</h1>
          <p className="mt-2 text-sm text-brand-dark/70">Need more help? Call or WhatsApp us anytime. We respond quickly.</p>
          <div className="mt-4"><FaqAccordion items={faqs} /></div>
          <div className="mt-6"><CTAButtons primaryLabel="Talk to us" /></div>
        </div>
      </MotionSection>
    </div>
  );
}
