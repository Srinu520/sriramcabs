import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiBriefcase, FiClock, FiMapPin, FiSmile, FiStar } from "react-icons/fi";
import { FaCarAlt, FaRoute } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cab Service in Sarjapura & Anekal | Airport, Local & Outstation Cabs",
  description:
    "Book 24/7 cab service in Sarjapura, Sompara Gate, Anekal and Bangalore. Local taxi, airport cabs, outstation cars, tempo traveller, corporate and temple tours.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Local Cab Service in Sarjapura & Anekal",
    desc: "Local taxi rides around Sarjapura, Sompara Gate, Anekal and nearby Bangalore areas for daily commute, shopping and family travel.",
    ideal: ["Families", "Students", "IT employees"],
    icon: <FiMapPin />,
  },
  {
    title: "Airport Taxi from Sarjapura",
    desc: "Kempegowda International Airport pick-up and drop from Sarjapura and Anekal with buffer time and punctual drivers.",
    ideal: ["Early morning flights", "Business trips"],
    icon: <FiClock />,
  },
  {
    title: "Outstation Cabs from Sarjapura",
    desc: "One-way and round-trip outstation cabs from Sarjapura, Anekal and Bangalore to destinations across India.",
    ideal: ["Families", "Tourists", "Corporate travellers"],
    icon: <FaRoute />,
  },
  {
    title: "Corporate & Monthly Cab Contracts",
    desc: "Dedicated fleet support for offices, employee transport, team travel, events and monthly cab requirements.",
    ideal: ["Companies", "Teams", "VIP movement"],
    icon: <FiBriefcase />,
  },
  {
    title: "Wedding / Event Transport",
    desc: "Coordinated guest transportation with hatchbacks, sedans, SUVs and tempo travellers for functions and events.",
    ideal: ["Weddings", "Functions", "Receptions"],
    icon: <FaCarAlt />,
  },
  {
    title: "Temple & Pilgrimage Tours",
    desc: "Temple tour cabs from Sarjapura and Bangalore with patient drivers, flexible stops and clean vehicles.",
    ideal: ["Pilgrims", "Family elders"],
    icon: <FiStar />,
  },
  {
    title: "Holiday / Tour Packages",
    desc: "Custom cab packages for hill stations, beaches, heritage circuits and family holidays from Sarjapura and Bangalore.",
    ideal: ["Friends", "Families", "Tourists"],
    icon: <FiSmile />,
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="rounded-3xl border border-brand-gold/40 bg-white/80 p-8 shadow-soft">
        <MotionSection>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Services</p>
              <h1 className="text-3xl font-bold text-brand-dark">Cab & Taxi Services in Sarjapura, Anekal and Bangalore</h1>
              <p className="text-sm text-brand-dark/70">
                Sree Khushi Tours & Travels provides 24/7 local cabs, airport taxis, outstation cars, tempo travellers and tour services from Sarjapura and Anekal.
              </p>
            </div>
            <CTAButtons />
          </div>
        </MotionSection>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <MotionSection key={service.title} delay={idx * 0.04}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-brand-cream/70 p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  {service.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/70">{service.desc}</p>
                <div className="mt-3 text-xs text-brand-dark/70">
                  <p className="font-semibold text-brand-dark">Ideal for:</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4">
                    {service.ideal.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <a href="/contact" className="text-sm font-semibold text-brand-green">Book this service →</a>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
    </div>
  );
}
