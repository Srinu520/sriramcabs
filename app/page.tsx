import Image from "next/image";
import Link from "next/link";
import { FiAlertCircle, FiClock, FiMapPin, FiPhone, FiShield, FiStar, FiUsers } from "react-icons/fi";
import { FaCarAlt, FaRoute } from "react-icons/fa";
import { MotionSection } from "@/components/MotionSection";
import CTAButtons from "@/components/CTAButtons";
import BookingForm from "@/components/BookingForm";

const whyChoose = [
  { title: "Safe & Experienced Drivers", desc: "Trained, polite chauffeurs with strong city and highway expertise.", icon: <FiShield /> },
  { title: "Clean & Sanitized Cars", desc: "We keep interiors spotless and comfortable for families & executives.", icon: <FiStar /> },
  { title: "On-Time Pick-ups", desc: "Punctual service with proactive updates for airport and early-morning trips.", icon: <FiClock /> },
  { title: "All Vehicles, 24/7", desc: "Hatchback, Sedan, SUV, Tempo Traveller and Luxury vehicles anytime.", icon: <FaCarAlt /> },
];

const services = [
  { title: "Local City Rides", desc: "Smart city commutes, shopping trips and school runs with trusted drivers.", icon: <FiMapPin /> },
  { title: "Airport Transfers", desc: "Kempegowda airport pick-up & drop with live tracking and buffer time.", icon: <FiClock /> },
  { title: "Outstation Cabs (All India)", desc: "Round trips and one-way drops across India with clean, comfy cars.", icon: <FaRoute /> },
  { title: "Corporate & Monthly", desc: "Reliable partner for corporate travel and monthly cab contracts.", icon: <FiUsers /> },
  { title: "Wedding / Event Transport", desc: "Coordinated fleets for guests, families and VIP movement.", icon: <FaCarAlt /> },
  { title: "Temple & Pilgrimage Tours", desc: "Comfortable darshan trips with patient, devotional drivers.", icon: <FiStar /> },
];

const packages = [
  { title: "4 Hours / 40 KM", price: "₹1200", extra: "₹15/km" },
  { title: "6 Hours / 60 KM", price: "₹1800", extra: "₹15/km" },
  { title: "8 Hours / 80 KM", price: "₹2200", extra: "₹15/km" },
];

const templeTours = [
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

const steps = [
  { title: "Tell us your route", text: "Local, airport, outstation or temple tour with timings." },
  { title: "Pick a vehicle", text: "Hatchback, Sedan, SUV, Tempo Traveller or Luxury options." },
  { title: "Transparent quote", text: "Clear pricing with toll/parking details and driver bata." },
  { title: "Relax & ride", text: "Polite driver arrives early, clean car ready for you." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="relative overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/hero-cab.png')] bg-cover bg-center shadow-glow">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative flex flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:px-12">
          <MotionSection className="flex-1 space-y-5 text-white">
            <span className="badge bg-white/15 text-white backdrop-blur">Bangalore • 24/7 Service</span>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Sri Ram Cabs – Safe, Clean & Trusted Cabs in Bangalore
            </h1>
            <p className="text-lg text-white/90">Ride Safe, Ride Clean, Ride Sri Ram.</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <FiClock /> 24/7 Service
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <FiStar /> Clean Cars
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <FaRoute /> All India Outstation
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <FiUsers /> Trusted Drivers
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#booking" className="btn-primary">
                Book a Cab
              </Link>
              <a href="tel:+917411606748" className="btn-secondary">
                <FiPhone /> Call Now
              </a>
            </div>
          </MotionSection>
          <MotionSection className="flex-1" delay={0.1}>
            <div className="glass relative rounded-3xl p-5 shadow-glow">
              <div className="absolute -left-8 -top-6 hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-green/70 opacity-70 blur-2xl md:block" />
              <Image
                src="/hero-sedan1.png"
                alt="Sri Ram Cabs sedan"
                width={700}
                height={420}
                className="mx-auto drop-shadow-2xl"
                priority
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-brand-dark/80">
                <div className="badge bg-brand-cream">Clean & Sanitized</div>
                <div className="badge bg-brand-green/10 text-white">Experienced Drivers</div>
                <div className="badge bg-brand-gold/20 text-brand-dark">Transparent Pricing</div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {whyChoose.map((item, idx) => (
          <MotionSection key={item.title} delay={idx * 0.05}>
            <div className="card-hover flex h-full flex-col gap-3 rounded-2xl border border-brand-gold/40 bg-white/80 p-5 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
              <p className="text-sm text-brand-dark/75">{item.desc}</p>
            </div>
          </MotionSection>
        ))}
      </section>

      <section className="mt-16 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Services</p>
            <h2 className="text-2xl font-bold text-brand-dark">All types of rides covered</h2>
            <p className="text-sm text-brand-dark/70">
              Families, students, IT employees, corporate clients, tourists, temple travellers.
            </p>
          </div>
          <CTAButtons primaryLabel="Book a Cab" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <MotionSection key={service.title} delay={idx * 0.03}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-white/80 p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream text-brand-dark">
                  {service.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/75">{service.desc}</p>
                <Link href="/services" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Learn more →
                </Link>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <MotionSection>
          <div className="card-hover rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-dark/60">Local Packages</p>
                <h3 className="text-xl font-bold text-brand-dark">Bangalore city cab packages</h3>
              </div>
              <div className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                Transparent pricing
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="rounded-2xl border border-brand-gold/40 bg-brand-cream/80 p-4 text-brand-dark"
                >
                  <p className="text-sm font-semibold text-brand-dark/70">{pkg.title}</p>
                  <p className="mt-2 text-2xl font-bold">{pkg.price}</p>
                  <p className="mt-1 text-xs text-brand-dark/70">Extra km: {pkg.extra}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-gold/40">
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
                    <tr key={pkg.title} className="border-t border-brand-gold/30">
                      <td className="px-4 py-3">{pkg.title}</td>
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
          <div className="relative overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/bg-city.png')] bg-cover bg-center shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 to-brand-green/80" />
            <div className="relative space-y-4 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Outstation Tariff</p>
              <h3 className="text-2xl font-bold">All India outstation cabs from Bangalore</h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>Minimum 300 KM per day</li>
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
                  href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20an%20outstation%20quote."
                  className="btn-secondary bg-white/15 text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </section>

      <section className="mt-16 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-brand-dark/60">Temple & Pilgrimage Tours</p>
            <h3 className="text-xl font-bold text-brand-dark">Popular temple routes from Bangalore</h3>
            <p className="text-sm text-brand-dark/70">Devotional, punctual and patient drivers for darshan trips.</p>
          </div>
          <Link href="/temple-tours" className="btn-secondary">
            View all tours
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templeTours.map((tour, idx) => (
            <MotionSection key={tour} delay={idx * 0.03}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-[url('/temple-bg.png')] bg-cover bg-center">
                <div className="h-full rounded-2xl bg-gradient-to-br from-brand-dark/85 to-brand-green/80 p-4 text-white">
                  <p className="text-sm font-semibold">{tour}</p>
                  <p className="mt-2 text-xs text-white/80">Custom itineraries available. Call for details.</p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="tel:+917411606748" className="btn-primary">
            <FiPhone /> Call for temple tour
          </a>
          <a
            href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20to%20plan%20a%20temple%20tour."
            className="btn-secondary"
          >
            WhatsApp itinerary
          </a>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">How to book</p>
            <h3 className="text-xl font-bold text-brand-dark">Smooth, simple booking flow</h3>
          </div>
          <span className="badge">24/7 support</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <MotionSection key={step.title} delay={idx * 0.04}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-brand-cream/70 p-4 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-sm font-semibold text-brand-green">
                  {idx + 1}
                </div>
                <p className="mt-3 text-sm font-semibold text-brand-dark">{step.title}</p>
                <p className="mt-2 text-xs text-brand-dark/70">{step.text}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section id="booking" className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <MotionSection>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center">
                <FiPhone />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-dark/70">Need a ride?</p>
                <h3 className="text-xl font-bold text-brand-dark">Call or WhatsApp Sri Ram Cabs</h3>
                <p className="text-sm text-brand-dark/70">Fast response, polite drivers, clean cars.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="tel:+917411606748" className="btn-primary">
                <FiPhone /> Call +91 7411606748
              </a>
              <a
                href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20to%20book%20a%20cab."
                className="btn-secondary"
              >
                WhatsApp now
              </a>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-brand-dark/75 md:grid-cols-3">
              <div className="rounded-2xl bg-brand-cream/70 p-3">
                <p className="font-semibold text-brand-dark">Owner</p>
                <p>Rama Krishna</p>
              </div>
              <div className="rounded-2xl bg-brand-cream/70 p-3">
                <p className="font-semibold text-brand-dark">Base Location</p>
                <p>Bangalore, Karnataka</p>
              </div>
              <div className="rounded-2xl bg-brand-cream/70 p-3">
                <p className="font-semibold text-brand-dark">Experience</p>
                <p>5+ Years</p>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.05}>
          <BookingForm />
        </MotionSection>
      </section>

      <div className="mt-12 flex items-start gap-3 rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm text-brand-dark/80">
        <FiAlertCircle className="mt-0.5 text-brand-green" />
        <p>
          All types of vehicles available: Hatchback, Sedan, SUV, Tempo Traveller and Luxury vehicles.
          Final pricing may vary based on route, season and vehicle type.
        </p>
      </div>
    </div>
  );
}
