import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { MotionSection } from "@/components/MotionSection";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const googleBusinessUrl = "https://share.google/DhlK8O4MyLgjx3zKh";
const googleMapEmbedUrl =
  "https://www.google.com/maps?q=Sree%20Khushi%20Tours%20%26%20Travels%207411606748&output=embed";

export const metadata: Metadata = {
  title: "Book a Cab in Bangalore | Contact Sree Khushi Tours & Travels",
  description:
    "Call, WhatsApp or submit the form to book a cab in Bangalore. Sree Khushi Tours & Travels offers local, airport, outstation and tour services 24/7.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <MotionSection>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Contact</p>
            <h1 className="text-3xl font-bold text-brand-dark">Call, WhatsApp or fill the form</h1>
            <p className="mt-2 text-sm text-brand-dark/70">
              We respond quickly. For urgent trips, call us directly.
            </p>
            <div className="mt-4 space-y-3 text-sm text-brand-dark/80">
              <div className="flex items-center gap-2">
                <FiPhone className="text-brand-green" />
                <div>
                  <a href="tel:+917411606748" className="font-semibold text-brand-dark">
                    +91 7411606748
                  </a>
                  <p>Call / WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-brand-green" />
                <a href="tel:+918919602258" className="hover:text-brand-dark">
                  +91 8919602258
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-brand-green" />
                <a href="mailto:sreekhushitours@gmail.com" className="hover:text-brand-dark">
                  sreekhushitours@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 shrink-0 text-brand-green" />
                <div>
                  <p className="font-semibold text-brand-dark">Sree Khushi Tours & Travels</p>
                  <a
                    href={googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-green hover:text-brand-dark"
                  >
                    View complete address & directions on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-brand-green" />
                <span>24/7 Service</span>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-gold/40 bg-brand-cream/70">
              <iframe
                title="Sree Khushi Tours & Travels location"
                src={googleMapEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href={googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-green hover:text-brand-dark"
              >
                Open exact location in Google Maps →
              </a>
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.05}>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <BookingForm />
          </div>
        </MotionSection>
      </section>
    </div>
  );
}
