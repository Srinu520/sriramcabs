import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiMapPin, FiPhone, FiShield, FiStar, FiUsers } from "react-icons/fi";
import { FaCarAlt, FaPlaneDeparture, FaRoute, FaWhatsapp } from "react-icons/fa";
import { MotionSection } from "@/components/MotionSection";
import BookingForm from "@/components/BookingForm";

const vehicles = [
  { title: "Sedan", passengers: "4 + 5", image: "/sedan.png" },
  { title: "Dzire", passengers: "4 + 5", image: "/dzire.png" },
  { title: "Ertiga", passengers: "6 + 7", image: "/ertiga.png" },
  { title: "Innova", passengers: "6 + 7", image: "/innova.png" },
  { title: "Tempo Traveller", passengers: "9 + 12", image: "/tempo-traveller.png" },
  { title: "Force Urbania", passengers: "12 + 17", image: "/urbania.png" },
];

const services = [
  { title: "Airport Taxi", text: "Reliable pickup and drop to Kempegowda International Airport with comfortable, clean cars.", icon: <FaPlaneDeparture /> },
  { title: "Outstation Cabs", text: "One-way and round-trip travel across India with flexible routes and vehicle choices.", icon: <FaRoute /> },
  { title: "Corporate & Monthly", text: "Dependable cab support for office travel, monthly requirements and regular routes.", icon: <FiUsers /> },
  { title: "Local City Rides", text: "Comfortable Bangalore rides for daily travel, shopping, appointments and family needs.", icon: <FiMapPin /> },
];

const trustPoints = [
  ["24/7 Service", "Available when you need us", <FiClock />],
  ["Experienced Drivers", "Safe & professional service", <FiUsers />],
  ["Clean Cars", "Comfortable & well-maintained", <FaCarAlt />],
  ["On-Time Pickup", "We value your time", <FiCheck />],
  ["Transparent Service", "Clear trip details", <FiShield />],
];

const whyChoose = [
  "Reliable & safe travel",
  "Professional & verified drivers",
  "Clean & sanitized vehicles",
  "24/7 customer support",
  "Local expertise in Sarjapura & Gunjur",
  "Flexible vehicle options",
];

const googleReviewsLink = "https://maps.app.goo.gl/EdXqAJ3U7193W6x67?g_st=ac";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-5">
      <section className="relative overflow-hidden rounded-[2rem] bg-brand-dark shadow-glow">
        <Image src="/hero-cab.png" alt="Airport taxi service in Bangalore" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/45" />
        <div className="relative grid min-h-[620px] items-center gap-8 px-6 py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
          <MotionSection className="max-w-3xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-gold" /> Sarjapura • Gunjur • Bangalore
            </div>
            <div>
              <p className="mb-3 text-lg font-semibold italic text-brand-gold">Safe Rides • Happy Journeys</p>
              <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">24/7 Airport Taxi in <span className="text-brand-gold">Sarjapura, Gunjur & Bangalore</span></h1>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Comfortable rides, on-time pickup and hassle-free travel for airport transfers, outstation trips and local travel needs.</p>
            <div className="flex flex-wrap gap-3 text-sm text-white/90">
              <span className="rounded-full bg-white/10 px-4 py-2">✈ Airport Pickup & Drop</span>
              <span className="rounded-full bg-white/10 px-4 py-2">🚗 Outstation • All India</span>
              <span className="rounded-full bg-white/10 px-4 py-2">◷ 24/7 Service</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#booking" className="btn-primary inline-flex items-center gap-2">Book Your Ride <FiArrowRight /></Link>
              <a href="tel:+917411606748" className="btn-secondary inline-flex items-center gap-2"><FiPhone /> Call Now</a>
            </div>
          </MotionSection>
          <MotionSection delay={0.12} className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="relative w-full max-w-xl rounded-[2rem] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <Image src="/hero-sedan1.png" alt="Sree Khushi Tours & Travels vehicle" width={800} height={520} className="relative z-10 w-full drop-shadow-2xl" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-gold px-4 py-2 text-xs font-bold text-brand-dark">10+ Years Experience</span>
                <span className="rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white">Trusted Travel</span>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="relative z-10 -mt-7 px-3">
        <div className="grid overflow-hidden rounded-3xl border border-brand-gold/30 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-5">
          {trustPoints.map(([title, text, icon], idx) => (
            <div key={title as string} className="flex items-center gap-3 border-b border-brand-dark/10 p-4 last:border-0 sm:border-r lg:border-b-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20 text-xl text-brand-dark">{icon}</div>
              <div><p className="text-sm font-bold text-brand-dark">{title as string}</p><p className="text-xs text-brand-dark/60">{text as string}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <MotionSection>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-green">Airport Travel Made Simple</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">Your airport ride, planned around your journey.</h2>
          <p className="mt-4 leading-7 text-brand-dark/70">Book a comfortable airport taxi from Sarjapura, Gunjur or nearby Bangalore areas. We focus on timely pickup, clean vehicles and a smooth travel experience.</p>
          <div className="mt-6 space-y-3">
            {["Pickup & drop to Kempegowda International Airport", "Comfortable vehicles for solo, family and group travel", "Clear trip details before you travel", "Call or WhatsApp when you are ready to book"].map((item) => <div key={item} className="flex gap-3 text-sm font-semibold text-brand-dark"><span className="mt-0.5 text-brand-green"><FiCheck /></span>{item}</div>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="#booking" className="btn-primary">Book Airport Taxi</Link><a href="tel:+917411606748" className="btn-secondary"><FiPhone /> Call Now</a></div>
        </MotionSection>
        <MotionSection delay={0.1} className="overflow-hidden rounded-[2rem] border border-brand-gold/30 bg-brand-dark shadow-soft">
          <Image src="/airport-bg.png" alt="Airport taxi service" width={1200} height={700} className="h-[360px] w-full object-cover" />
        </MotionSection>
      </section>

      <section className="mt-20 rounded-[2rem] bg-brand-dark p-6 text-white shadow-soft sm:p-9">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-gold">Our Fleet</p><h2 className="mt-2 text-3xl font-black">The right vehicle for every journey</h2><p className="mt-2 text-sm text-white/65">Choose from comfortable cars and group travel options.</p></div>
          <Link href="/fleet" className="btn-primary inline-flex items-center gap-2">View Full Fleet <FiArrowRight /></Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {vehicles.map((vehicle) => <Link href="#booking" key={vehicle.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white p-3 text-brand-dark transition hover:-translate-y-1"><div className="flex h-32 items-center justify-center"><Image src={vehicle.image} alt={vehicle.title} width={420} height={260} className="h-full w-full object-contain transition group-hover:scale-105" /></div><div className="px-1 pb-1"><p className="font-bold">{vehicle.title}</p><p className="mt-1 text-xs text-brand-dark/60">Passengers: {vehicle.passengers}</p></div></Link>)}
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-green">Our Services</p><h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Travel services built around you</h2></div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => <MotionSection key={service.title} delay={idx * .04}><Link href="/services" className="group block h-full rounded-3xl border border-brand-gold/30 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-2xl text-brand-dark">{service.icon}</div><h3 className="mt-5 text-xl font-bold text-brand-dark">{service.title}</h3><p className="mt-3 text-sm leading-6 text-brand-dark/65">{service.text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-green">Explore service <FiArrowRight className="transition group-hover:translate-x-1" /></span></Link></MotionSection>)}
        </div>
      </section>

      <section className="mt-20 overflow-hidden rounded-[2rem] bg-brand-dark text-white shadow-soft">
        <div className="grid lg:grid-cols-[1fr_1.15fr]">
          <div className="p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-gold">Why Choose Us</p><h2 className="mt-3 text-3xl font-black">Sree Khushi Tours & Travels</h2><p className="mt-4 text-sm leading-7 text-white/70">A practical travel partner for airport, city, corporate, outstation and group journeys.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{whyChoose.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm"><span className="text-brand-gold"><FiCheck /></span>{item}</div>)}</div></div>
          <div className="relative min-h-[330px]"><Image src="/hero-cab.png" alt="Sree Khushi travel journey" fill className="object-cover opacity-65" /><div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" /><div className="absolute bottom-7 right-7 max-w-xs text-right"><p className="text-2xl font-black italic text-brand-gold">Your Journey,<br />Our Priority</p></div></div>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-brand-gold/30 bg-white p-7 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-green">Customer Feedback</p><h2 className="mt-2 text-3xl font-black text-brand-dark">Google Reviews</h2><p className="mt-3 max-w-xl text-sm leading-6 text-brand-dark/65">See genuine customer feedback directly on Google. We keep the website simple and let Google show the latest reviews.</p><div className="mt-6 flex flex-wrap gap-3"><a href={googleReviewsLink} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2"><FiStar /> Read Our Google Reviews <FiArrowRight /></a></div></div>
          <div className="rounded-3xl bg-brand-cream p-6"><div className="flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl font-black text-[#4285F4] shadow-soft">G</div><div><p className="text-lg font-bold text-brand-dark">Sree Khushi Tours & Travels</p><p className="mt-1 text-sm text-brand-dark/65">Read the latest customer reviews on Google</p></div></div><div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-brand-dark/70"><span className="rounded-full bg-white px-3 py-2">Real customer feedback</span><span className="rounded-full bg-white px-3 py-2">Google hosted reviews</span><span className="rounded-full bg-white px-3 py-2">Open directly on Google</span></div></div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-[2rem] bg-brand-cream p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-green">Service Areas</p><h2 className="mt-2 text-3xl font-black text-brand-dark">Sarjapura • Gunjur • Bangalore</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-brand-dark/65">Reliable taxi services for airport transfers, local rides, outstation trips and regular travel requirements.</p><div className="mt-6 flex flex-wrap gap-3"><span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark">Sarjapura</span><span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark">Gunjur</span><span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark">Bangalore</span></div></div>
        <div className="rounded-[2rem] bg-brand-dark p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-gold">Need a Ride?</p><h3 className="mt-2 text-2xl font-black">Call or WhatsApp us</h3><p className="mt-3 text-sm text-white/65">Tell us your route and vehicle requirement.</p><div className="mt-6 flex flex-wrap gap-3"><a href="tel:+917411606748" className="btn-primary"><FiPhone /> Call</a><a href="https://wa.me/918919602258" target="_blank" rel="noreferrer" className="btn-secondary"><FaWhatsapp /> WhatsApp</a></div></div>
      </section>

      <section id="booking" className="mt-20 scroll-mt-6 rounded-[2rem] border border-brand-gold/40 bg-white p-6 shadow-soft sm:p-9">
        <div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-green">Book Your Ride</p><h2 className="mt-2 text-3xl font-black text-brand-dark">Send an enquiry</h2><p className="mt-2 text-sm text-brand-dark/65">Share your trip details and we will help you with the right vehicle.</p></div>
        <BookingForm />
      </section>

      <div className="my-10 flex items-start gap-3 rounded-2xl border border-brand-gold/30 bg-brand-cream px-4 py-3 text-sm text-brand-dark/70"><FiShield className="mt-0.5 shrink-0 text-brand-green" /><p>Safe, clean and comfortable travel with Sree Khushi Tours & Travels.</p></div>
    </div>
  );
}
