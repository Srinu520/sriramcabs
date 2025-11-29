import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiBriefcase, FiClock, FiMapPin, FiSmile, FiStar } from "react-icons/fi";
import { FaCarAlt, FaRoute } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cab Services in Bangalore – Local, Airport & Outstation | Sri Ram Cabs",
  description:
    "Book local, airport and outstation cab services in Bangalore with Sri Ram Cabs. Clean cars, polite drivers and transparent pricing.",
};

const services = [
  {
    title: "Local City Rides",
    desc: "Daily commute, shopping, school runs and family visits with trusted chauffeurs.",
    ideal: ["Families", "Students", "IT employees"],
    icon: <FiMapPin />,
  },
  {
    title: "Airport Transfers",
    desc: "Kempegowda International Airport pick-up & drop with buffer time and flight tracking.",
    ideal: ["Early morning flights", "Business trips"],
    icon: <FiClock />,
  },
  {
    title: "Outstation Cabs (All India)",
    desc: "Round trips and one-way drops from Bangalore to anywhere in India.",
    ideal: ["Families", "Tourists", "Corporate travellers"],
    icon: <FaRoute />,
  },
  {
    title: "Corporate & Monthly Contracts",
    desc: "Dedicated fleet support for teams, events, shuttles and monthly billing.",
    ideal: ["Companies", "Teams", "VIP movement"],
    icon: <FiBriefcase />,
  },
  {
    title: "Wedding / Event Transport",
    desc: "Coordinated guest logistics with clean cars and polite chauffeurs.",
    ideal: ["Weddings", "Functions", "Receptions"],
    icon: <FaCarAlt />,
  },
  {
    title: "Temple & Pilgrimage Tours",
    desc: "Devotional trips with patient drivers, stop flexibility and clean cars.",
    ideal: ["Pilgrims", "Family elders"],
    icon: <FiStar />,
  },
  {
    title: "Holiday / Tour Packages",
    desc: "Customised itineraries for hill stations, beaches and heritage circuits.",
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
              <h1 className="text-3xl font-bold text-brand-dark">Everything you need for travel</h1>
              <p className="text-sm text-brand-dark/70">
                Safe, clean and punctual cabs for families, corporate teams, tourists and pilgrims.
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
                  <ul className="mt-1 list-disc pl-4 space-y-0.5">
                    {service.ideal.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <a href="/contact" className="text-sm font-semibold text-brand-green">
                    Book this service →
                  </a>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
    </div>
  );
}
