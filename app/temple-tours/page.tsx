import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiPhone } from "react-icons/fi";

const tours = [
  "Tirupati Balaji",
  "Shirdi Sai Baba",
  "Sabarimala",
  "Srisailam",
  "Mantralayam",
  "Dharmasthala & Kukke Subramanya",
  "Kollur Mookambika, Sringeri, Horanadu",
  "Udupi Sri Krishna Temple",
  "Murudeshwar & Gokarna",
  "Chamundi Hills, Melukote & more",
];

export default function TempleToursPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="relative overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/temple-hero.png')] bg-cover bg-center shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 to-brand-green/80" />
        <div className="relative grid gap-6 p-8 text-white lg:grid-cols-[1.2fr_0.8fr]">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Temple Tours</p>
            <h1 className="text-3xl font-bold">Pilgrimage rides with devotion and care</h1>
            <p className="mt-3 text-sm text-white/85">
              Comfortable darshan trips with patient drivers, clean cars and punctual schedules. We help you plan
              early morning starts, prasad pickups and flexible stopovers.
            </p>
            <div className="mt-4">
              <CTAButtons variant="light" />
            </div>
          </MotionSection>
          <MotionSection delay={0.08}>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <Image
                src="/hero-sedan1.png"
                alt="Temple tour cab"
                width={700}
                height={360}
                className="mx-auto drop-shadow-2xl"
              />
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark">Popular temple routes from Bangalore</h2>
            <p className="text-sm text-brand-dark/70">Custom itineraries and stay options arranged on request.</p>
          </div>
          <a href="tel:+917411606748" className="btn-secondary">
            <FiPhone /> Plan a tour
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, idx) => (
            <MotionSection key={tour} delay={idx * 0.03}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-[url('/temple-bg.png')] bg-cover bg-center">
                <div className="h-full rounded-2xl bg-gradient-to-br from-brand-dark/85 to-brand-green/80 p-4 text-white">
                  <p className="text-sm font-semibold">{tour}</p>
                  <p className="mt-2 text-xs text-white/80">Early morning pick-ups, darshan aligned slots.</p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-dark/70">
          We can add more temples or custom combinations. Share your dates, pilgrims count and darshan timings for a quick quote.
        </p>
      </section>
    </div>
  );
}
