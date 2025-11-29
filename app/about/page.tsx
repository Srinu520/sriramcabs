import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiClock, FiHeart, FiMap, FiShield, FiSmile } from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    { label: "Years of Service", value: "5+ Years" },
    { label: "Availability", value: "24/7 Support" },
    { label: "Coverage", value: "All India" },
    { label: "Owner", value: "Rama Krishna" },
  ];

  const values = [
    { title: "Safety", desc: "Defensive driving and verified, polite chauffeurs.", icon: <FiShield /> },
    { title: "Cleanliness", desc: "Fresh interiors, sanitized touchpoints every ride.", icon: <FiHeart /> },
    { title: "Punctuality", desc: "On-time pick-ups with buffer for airport and temple timings.", icon: <FiClock /> },
    { title: "Transparency", desc: "Clear pricing with no hidden charges or surprises.", icon: <FiMap /> },
    { title: "Devotion to Service", desc: "We treat every ride with care and respect.", icon: <FiSmile /> },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="relative overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/about-bg.png')] bg-cover bg-center shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 to-brand-green/80" />
        <div className="relative grid gap-8 p-8 text-white lg:grid-cols-2">
          <MotionSection>
            <h1 className="text-3xl font-bold">About Sri Ram Cabs</h1>
            <p className="mt-3 text-lg text-white/85">
              Based in Bangalore, Sri Ram Cabs is led by Rama Krishna with 5+ years of dedicated service.
              We focus on safety, cleanliness and trust—serving families, corporate travellers, pilgrims and tourists.
            </p>
            <p className="mt-2 text-sm text-white/75">
              From airport transfers to outstation and temple tours, our team ensures punctual pick-ups, polite
              drivers and spotless cars so every journey feels peaceful and reliable.
            </p>
            <div className="mt-4">
              <CTAButtons variant="light" />
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white"
                  >
                    <p className="text-white/70">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <Image
                src="/hero-sedan.png"
                alt="Sri Ram Cabs fleet"
                width={600}
                height={320}
                className="mx-auto mt-4 drop-shadow-2xl"
              />
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <MotionSection>
          <h2 className="text-2xl font-bold text-brand-dark">Our Values</h2>
          <p className="text-sm text-brand-dark/70">
            A dependable cab partner for families, corporate teams and devotional travellers.
          </p>
        </MotionSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => (
            <MotionSection key={value.title} delay={idx * 0.04}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-white/80 p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  {value.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/70">{value.desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
    </div>
  );
}
