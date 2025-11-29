import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiPhone } from "react-icons/fi";
import { FaRoute } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cab Tariff in Bangalore | Local & Outstation Taxi Rates – Sri Ram Cabs",
  description:
    "Check Sri Ram Cabs pricing in Bangalore: local city packages and outstation taxi rates with transparent charges.",
};

const packages = [
  { package: "4 Hours / 40 KM", price: "₹1200", extra: "₹15/km" },
  { package: "6 Hours / 60 KM", price: "₹1800", extra: "₹15/km" },
  { package: "8 Hours / 80 KM", price: "₹2200", extra: "₹15/km" },
];

export default function TariffsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="rounded-3xl border border-brand-gold/40 bg-white/80 p-8 shadow-soft">
        <MotionSection>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Tariffs</p>
              <h1 className="text-3xl font-bold text-brand-dark">Transparent cab pricing in Bangalore</h1>
              <p className="text-sm text-brand-dark/70">
                Clean cars, experienced drivers and clear pricing. No hidden charges.
              </p>
            </div>
            <CTAButtons />
          </div>
        </MotionSection>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <MotionSection>
            <div className="rounded-2xl border border-brand-gold/40 bg-brand-cream/80 p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-brand-dark">Local Packages – Bangalore City</h3>
                <span className="badge">Includes fuel</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {packages.map((pkg) => (
                  <div key={pkg.package} className="rounded-2xl border border-brand-gold/40 bg-white/80 p-4">
                    <p className="text-sm font-semibold text-brand-dark/70">{pkg.package}</p>
                    <p className="mt-2 text-2xl font-bold text-brand-dark">{pkg.price}</p>
                    <p className="text-xs text-brand-dark/60">Extra km: {pkg.extra}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-brand-gold/50 bg-white/80">
                <table className="w-full text-sm text-brand-dark/80">
                  <thead className="bg-brand-cream/80 text-left text-xs uppercase tracking-wide text-brand-dark">
                    <tr>
                      <th className="px-4 py-3">Package</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3">Extra Km</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages.map((pkg) => (
                      <tr key={pkg.package} className="border-t border-brand-gold/30">
                        <td className="px-4 py-3">{pkg.package}</td>
                        <td className="px-4 py-3 font-semibold">{pkg.price}</td>
                        <td className="px-4 py-3">{pkg.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.05}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/50 bg-[url('/bg-city.png')] bg-cover bg-center shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 to-brand-green/80" />
              <div className="relative space-y-3 p-6 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <FaRoute /> Outstation Tariff
                </div>
                <p className="text-lg font-bold">All India outstation cabs from Bangalore</p>
                <ul className="space-y-1 text-sm text-white/85">
                  <li>Minimum: 300 KM per day</li>
                  <li>Per KM: ₹13/km</li>
                  <li>Driver Bata: ₹400/day</li>
                  <li>Toll, parking and temporary permits extra</li>
                </ul>
                <p className="text-xs text-white/70">
                  *Final pricing may vary based on route, season and vehicle type. Contact us for an exact quote.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+917411606748" className="btn-primary">
                    <FiPhone /> Call for quote
                  </a>
                  <a
                    href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20need%20an%20outstation%20quote%20from%20Bangalore."
                    className="btn-secondary bg-white/15 text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <MotionSection className="mt-8 overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/hero-cab.png')] bg-cover bg-center shadow-glow">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-green/70" />
          <div className="relative flex flex-col gap-3 p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-white/70">Ready to ride?</p>
              <h2 className="text-2xl font-bold">Call, WhatsApp or book online</h2>
              <p className="text-sm text-white/80">
                Clean cars, polite drivers and transparent pricing. We respond quickly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:+917411606748" className="btn-primary">
                <FiPhone /> Call Now
              </a>
              <a
                href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20share%20tariff%20details%20please."
                className="btn-secondary bg-white/15 text-white"
              >
                WhatsApp
              </a>
              <a href="/contact" className="btn-secondary bg-white/15 text-white">
                Book Form
              </a>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
