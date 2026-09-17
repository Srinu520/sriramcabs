import type { Metadata } from "next";
import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";
import { MotionSection } from "@/components/MotionSection";
import { FiUsers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Vehicles in Sarjapura & Bangalore | Sree Khushi Tours & Travels",
  description:
    "View the latest Sree Khushi Tours & Travels vehicle fleet: Sedan, Dzire, Ertiga, Innova, Force Tempo Traveller and Force Urbania.",
  alternates: { canonical: "/fleet" },
};

const fleet = [
  { title: "Sedan", seats: "4 + 5 passengers", bestFor: "Airport taxi, local rides and family trips", image: "/sedan.png" },
  { title: "Dzire", seats: "4 + 5 passengers", bestFor: "Airport taxi, local rides and comfortable travel", image: "/dzire.png" },
  { title: "Ertiga", seats: "6 + 7 passengers", bestFor: "Family trips and outstation travel", image: "/ertiga.png" },
  { title: "Innova", seats: "6 + 7 passengers", bestFor: "Outstation trips, family tours and long journeys", image: "/innova.png" },
  { title: "Force Tempo Traveller", seats: "9 + 12 passengers", bestFor: "Group tours, weddings and pilgrimage trips", image: "/tempo-traveller.png" },
  { title: "Force Urbania", seats: "12 + 17 passengers", bestFor: "Premium group travel and long-distance tours", image: "/urbania.png" },
];

export default function FleetPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="rounded-3xl border border-brand-gold/40 bg-white/80 p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Our Fleet</p>
            <h1 className="text-3xl font-bold text-brand-dark">Our Vehicles in Sarjapura & Bangalore</h1>
            <p className="text-sm text-brand-dark/70">Choose from our latest vehicle photos and book the vehicle that suits your trip.</p>
          </div>
          <CTAButtons />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((item, idx) => (
            <MotionSection key={item.title} delay={idx * 0.04}>
              <div className="card-hover h-full overflow-hidden rounded-2xl border border-brand-gold/40 bg-white/90 shadow-soft">
                <div className="relative flex h-64 w-full items-center justify-center bg-gradient-to-b from-white to-brand-cream/30 p-2">
                  <Image src={item.image} alt={`${item.title} - Sree Khushi Tours & Travels`} width={1200} height={800} quality={100} className="h-full w-full object-contain" sizes="(max-width:768px) 100vw, 400px" />
                </div>
                <div className="space-y-2 p-4">
                  <h2 className="text-xl font-bold text-brand-dark">{item.title}</h2>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark"><FiUsers /> {item.seats}</div>
                  <p className="text-sm text-brand-dark/70">{item.bestFor}</p>
                  <a href="/contact" className="inline-flex text-sm font-semibold text-brand-green">Book this vehicle →</a>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
    </div>
  );
}
