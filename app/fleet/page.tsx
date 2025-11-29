import Image from "next/image";
import { MotionSection } from "@/components/MotionSection";
import CTAButtons from "@/components/CTAButtons";
import { FiUsers } from "react-icons/fi";

const fleet = [
  {
    title: "Hatchback",
    seats: "4 passengers",
    bestFor: "City commutes, solo or couple trips",
    image: "/fleet-hatchback.png",
  },
  {
    title: "Sedan",
    seats: "4 passengers + luggage",
    bestFor: "Airport rides, family trips, executives",
    image: "/fleet-sedan.png",
  },
  {
    title: "SUV",
    seats: "6-7 passengers",
    bestFor: "Outstation, hill stations, family tours",
    image: "/fleet-suv1.png",
  },
  {
    title: "Tempo Traveller",
    seats: "12-17 passengers",
    bestFor: "Group tours, weddings, team outings",
    image: "/fleet-tempo.png",
  },
  {
    title: "Luxury",
    seats: "4 passengers",
    bestFor: "Premium travel, VIP movement",
    image: "/fleet-luxury.png",
  },
];

export default function FleetPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="rounded-3xl border border-brand-gold/40 bg-white/80 p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Our Fleet</p>
            <h1 className="text-3xl font-bold text-brand-dark">All types of vehicles available</h1>
            <p className="text-sm text-brand-dark/70">
              Hatchback, Sedan, SUV, Tempo Traveller and Luxury vehicles available for every trip.
            </p>
          </div>
          <CTAButtons />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((item, idx) => (
            <MotionSection key={item.title} delay={idx * 0.04}>
              <div className="card-hover h-full overflow-hidden rounded-2xl border border-brand-gold/40 bg-white/90 shadow-soft">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Sri Ram Cabs`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-dark">
                    {item.title}
                  </span>
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                    <FiUsers /> {item.seats}
                  </div>
                  <p className="text-sm text-brand-dark/70">Best for: {item.bestFor}</p>
                  <a href="/contact" className="text-sm font-semibold text-brand-green">
                    Book this vehicle →
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
