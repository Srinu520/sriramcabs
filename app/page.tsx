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
  { title: "All Vehicles, 24/7", desc: "Sedan, Dzire, Ertiga, Innova, Tempo Traveller and Force Urbania anytime.", icon: <FaCarAlt /> },
];

const services = [
  { title: "Local City Rides", desc: "Smart city commutes, shopping trips and school runs with trusted drivers.", icon: <FiMapPin /> },
  { title: "Airport Transfers", desc: "Kempegowda airport pick-up & drop with live tracking and buffer time.", icon: <FiClock /> },
  { title: "Outstation Cabs (All India)", desc: "Round trips and one-way drops across India with clean, comfy cars.", icon: <FaRoute /> },
  { title: "Corporate & Monthly", desc: "Reliable partner for corporate travel and monthly cab contracts.", icon: <FiUsers /> },
  { title: "Wedding / Event Transport", desc: "Coordinated fleets for guests, families and VIP movement.", icon: <FaCarAlt /> },
  { title: "Temple & Pilgrimage Tours", desc: "Comfortable darshan trips with patient, devotional drivers.", icon: <FiStar /> },
];

const vehicles = [
  { title: "Sedan", passengers: "4 + 5", image: "/sedan.png", alt: "Sree Khushi Tours & Travels Sedan" },
  { title: "Dzire", passengers: "4 + 5", image: "/dzire.png", alt: "Sree Khushi Tours & Travels Dzire" },
  { title: "Ertiga", passengers: "6 + 7", image: "/ertiga.png", alt: "Sree Khushi Tours & Travels Ertiga" },
  { title: "Innova", passengers: "6 + 7", image: "/innova.png", alt: "Sree Khushi Tours & Travels Innova" },
  { title: "Force Tempo Traveller", passengers: "9 + 12", image: "/tempo-traveller.png", alt: "Sree Khushi Tours & Travels Force Tempo Traveller" },
  { title: "Force Urbania", passengers: "12 + 17", image: "/urbania.png", alt: "Sree Khushi Tours & Travels Force Urbania" },
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
  { title: "Pick a vehicle", text: "Sedan, Dzire, Ertiga, Innova, Tempo Traveller or Force Urbania." },
  { title: "Get a clear quote", text: "We confirm the route, vehicle and trip details before booking." },
  { title: "Relax & ride", text: "Polite driver arrives early and your vehicle is ready for you." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="relative overflow-hidden rounded-3xl border border-brand-gold/50 bg-[url('/hero-cab.png')] bg-cover bg-center shadow-glow">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative flex flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:px-12">
          <MotionSection className="flex-1 space-y-5 text-white">
            <span className="badge bg-white/15 text-white backdrop-blur">Bangalore • 24/7 Service</span>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">Sree Khushi Tours & Travels – Safe, Clean & Trusted Cabs in Bangalore</h1>
            <p className="text-lg text-white/90">Ride Safe. Travel Happy with Sree Khushi.</p>
            <div className="inline-flex items-center rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-brand-dark shadow-soft">10+ Years Experience</div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><FiClock /> 24/7 Service</div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><FaRoute /> All India Outstation</div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><FiUsers /> Trusted Drivers</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#enquiry" className="btn-primary">Send Enquiry</Link>
              <a href="tel:+917411606748" className="btn-secondary"><FiPhone /> Call Now</a>
            </div>
          </MotionSection>
          <MotionSection className="flex-1" delay={0.1}>
            <div className="glass relative rounded-3xl p-5 shadow-glow">
              <div className="absolute -left-8 -top-6 hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-green/70 opacity-70 blur-2xl md:block" />
              <Image src="/hero-sedan1.png" alt="Sree Khushi Tours & Travels sedan" width={700} height={420} className="mx-auto drop-shadow-2xl" priority />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-brand-dark/80">
                <div className="badge bg-brand-green/10 text-white">Experienced Drivers</div>
                <div className="badge bg-brand-gold/20 text-brand-dark">Transparent Service</div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["10+ Years", "Experience"],
          ["24/7", "Service"],
          ["6", "Vehicle Types"],
          ["All India", "Outstation"],
        ].map(([value, label], idx) => (
          <MotionSection key={label} delay={idx * 0.04}>
            <div className="rounded-2xl border border-brand-gold/40 bg-white/90 p-5 text-center shadow-soft">
              <p className="text-2xl font-extrabold text-brand-green">{value}</p>
              <p className="mt-1 text-sm font-semibold text-brand-dark/70">{label}</p>
            </div>
          </MotionSection>
        ))}
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {whyChoose.map((item, idx) => (
          <MotionSection key={item.title} delay={idx * 0.05}>
            <div className="card-hover flex h-full flex-col gap-3 rounded-2xl border border-brand-gold/40 bg-white/80 p-5 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">{item.icon}</div>
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
            <p className="text-sm text-brand-dark/70">Families, students, IT employees, corporate clients, tourists, temple travellers.</p>
          </div>
          <CTAButtons primaryLabel="Book a Cab" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <MotionSection key={service.title} delay={idx * 0.03}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-white/80 p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream text-brand-dark">{service.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/75">{service.desc}</p>
                <Link href="/services" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Learn more →</Link>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">Our Vehicles</p>
            <h2 className="text-2xl font-bold text-brand-dark">Choose your vehicle</h2>
            <p className="mt-1 text-sm text-brand-dark/70">Clear vehicle photos and passenger capacity. Select a vehicle and send your enquiry directly.</p>
          </div>
          <Link href="#enquiry" className="btn-secondary">Send Enquiry</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, idx) => (
            <MotionSection key={vehicle.title} delay={idx * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-brand-gold/40 bg-brand-cream/60 shadow-soft">
                <div className="flex h-80 w-full items-center justify-center bg-gradient-to-b from-white to-brand-cream/30 p-2 sm:h-72">
                  <Image src={vehicle.image} alt={vehicle.alt} width={1200} height={800} quality={100} className="h-full w-full object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-brand-dark">{vehicle.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-dark/80">Passengers: {vehicle.passengers}</p>
                  <Link href="#enquiry" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">Send Enquiry</Link>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-sm font-semibold text-brand-dark/60">Temple & Pilgrimage Tours</p><h3 className="text-xl font-bold text-brand-dark">Popular temple routes from Bangalore</h3><p className="text-sm text-brand-dark/70">Devotional, punctual and patient drivers for darshan trips.</p></div>
          <Link href="/temple-tours" className="btn-secondary">View all tours</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templeTours.map((tour, idx) => (
            <MotionSection key={tour} delay={idx * 0.03}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-[url('/temple-bg.png')] bg-cover bg-center"><div className="h-full rounded-2xl bg-gradient-to-br from-brand-dark/85 to-brand-green/80 p-4 text-white"><p className="text-sm font-semibold">{tour}</p><p className="mt-2 text-xs text-white/80">Custom itineraries available. Call for details.</p></div></div>
            </MotionSection>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="tel:+917411606748" className="btn-primary"><FiPhone /> Call for temple tour</a>
          <a href="https://wa.me/918919602258?text=Hi%20Sree%20Khushi%20Tours%20%26%20Travels,%20I%20want%20to%20plan%20a%20temple%20tour." className="btn-secondary">WhatsApp itinerary</a>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-brand-gold/40 bg-white/80 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-semibold uppercase tracking-wide text-brand-dark/60">How to book</p><h3 className="text-xl font-bold text-brand-dark">Smooth, simple booking flow</h3></div><span className="badge">24/7 support</span></div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <MotionSection key={step.title} delay={idx * 0.04}>
              <div className="card-hover h-full rounded-2xl border border-brand-gold/40 bg-brand-cream/70 p-4 shadow-soft"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-sm font-semibold text-brand-green">{idx + 1}</div><p className="mt-3 text-sm font-semibold text-brand-dark">{step.title}</p><p className="mt-2 text-xs text-brand-dark/70">{step.text}</p></div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section id="enquiry" className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <MotionSection>
          <div className="rounded-3xl border border-brand-gold/50 bg-white/80 p-6 shadow-soft">
            <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center"><FiPhone /></div><div><p className="text-sm font-semibold text-brand-dark/70">Need a ride?</p><h3 className="text-xl font-bold text-brand-dark">Send an Enquiry to Sree Khushi Tours & Travels</h3><p className="text-sm text-brand-dark/70">Tell us your route, date and preferred vehicle.</p></div></div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="tel:+917411606748" className="btn-primary"><FiPhone /> Call +91 7411606748</a>
              <a href="https://wa.me/918919602258?text=Hi%20Sree%20Khushi%20Tours%20%26%20Travels,%20I%20want%20to%20book%20a%20cab." className="btn-secondary">WhatsApp +91 8919602258</a>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-brand-dark/75 md:grid-cols-3">
              <div className="rounded-2xl bg-brand-cream/70 p-3"><p className="font-semibold text-brand-dark">Owner</p><p>Rama Krishna</p></div>
              <div className="rounded-2xl bg-brand-cream/70 p-3"><p className="font-semibold text-brand-dark">Base Location</p><p>Bangalore, Karnataka</p></div>
              <div className="rounded-2xl bg-brand-cream/70 p-3"><p className="font-semibold text-brand-dark">Experience</p><p>10+ Years</p></div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.05}><BookingForm /></MotionSection>
      </section>

      <div className="mt-12 flex items-start gap-3 rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm text-brand-dark/80">
        <FiAlertCircle className="mt-0.5 text-brand-green" />
        <p>Our fleet includes Sedan, Dzire, Ertiga, Innova, Force Tempo Traveller and Force Urbania. Contact us for vehicle availability and trip details.</p>
      </div>
    </div>
  );
}
