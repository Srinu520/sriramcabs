import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { MotionSection } from "@/components/MotionSection";
import { FiClock, FiExternalLink, FiMail, FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const googlePlaceId = "ChIJL7-PL-hzrjsRE8shNb_F1nk";
const googleBusinessUrl = `https://www.google.com/maps/search/?api=1&query=Sree%20Khushi%20Tours%20%26%20Travels&query_place_id=${googlePlaceId}`;
const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Sree%20Khushi%20Tours%20%26%20Travels&destination_place_id=${googlePlaceId}`;
const businessAddress = "Anekal Taluk, Near Ram Temple, 21 Krishna Reddy Building, Sompara Gate, Sarjapura, Bangalore, Karnataka 562125";

export const metadata: Metadata = {
  title: "Cab Booking in Sarjapura & Anekal | Contact Sree Khushi Tours & Travels",
  description:
    "Contact Sree Khushi Tours & Travels in Sarjapura for local cabs, airport taxi, outstation cabs and tours. Call 7411606748 or WhatsApp 8919602258.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <MotionSection>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Contact</p>
            <h1 className="text-3xl font-bold text-brand-dark">Book a Cab in Sarjapura, Anekal & Bangalore</h1>
            <p className="mt-2 text-sm text-brand-dark/70">24/7 local taxi, airport transfer, outstation cab and tour bookings.</p>

            <div className="mt-4 space-y-3 text-sm text-brand-dark/80">
              <div className="flex items-center gap-2">
                <FiPhone className="text-brand-green" />
                <div>
                  <a href="tel:+917411606748" className="font-semibold text-brand-dark">+91 7411606748</a>
                  <p>Call</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-brand-green" />
                <div>
                  <a href="https://wa.me/918919602258?text=Hi%20Sree%20Khushi%20Tours%20%26%20Travels,%20I%20want%20to%20book%20a%20cab." className="font-semibold text-brand-dark">
                    +91 8919602258
                  </a>
                  <p>WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FiMail className="text-brand-green" />
                <a href="mailto:sreekhushitours@gmail.com" className="hover:text-brand-dark">sreekhushitours@gmail.com</a>
              </div>

              <div className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 shrink-0 text-brand-green" />
                <div>
                  <p className="font-semibold text-brand-dark">Sree Khushi Tours & Travels</p>
                  <p className="mt-1 leading-relaxed">{businessAddress}</p>
                  <p className="mt-1 text-xs text-brand-dark/60">Official Google Business Profile location</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="text-brand-green" />
                <span>24/7 Service</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-gold/40 bg-brand-cream/70 p-5">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-base font-semibold text-brand-dark">Find us on Google</p>
                  <p className="mt-1 text-sm text-brand-dark/70">Open our exact Google Business Profile or get turn-by-turn directions.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><FiExternalLink /> Open in Google Maps</a>
                    <a href={googleDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><FiNavigation /> Get Directions</a>
                  </div>
                </div>

                <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="mx-auto rounded-2xl border border-brand-gold/40 bg-white p-3 shadow-soft" aria-label="Open Sree Khushi Tours & Travels Google Business Profile">
                  <Image src="/google-business-qr.svg" alt="Sree Khushi Tours & Travels Google Business Profile QR code" width={180} height={180} className="h-auto w-[180px]" />
                  <p className="mt-2 text-center text-xs font-semibold text-brand-dark">Scan to open Google profile</p>
                </a>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.05}>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft"><BookingForm /></div>
        </MotionSection>
      </section>
    </div>
  );
}
