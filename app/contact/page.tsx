import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { MotionSection } from "@/components/MotionSection";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Book a Cab in Bangalore | Contact Sri Ram Cabs",
  description:
    "Call, WhatsApp or submit the form to book a cab in Bangalore. Sri Ram Cabs offers local, airport and outstation taxi service 24/7.",
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
                <a href="tel:+916301030863" className="hover:text-brand-dark">
                  +91 6301030863
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-brand-green" />
                <a href="mailto:sriramcabs@gmail.com" className="hover:text-brand-dark">
                  sriramcabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-brand-green" />
                <span>Sri Ram Cabs, Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-brand-green" />
                <span>24/7 Service</span>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-gold/40 bg-brand-cream/70">
              <iframe
                title="Bangalore Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.084918010749!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c1a6f00f%3A0x89f2c6e8c7c3!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v00000000000"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
