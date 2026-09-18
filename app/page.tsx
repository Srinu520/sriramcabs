import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiMapPin, FiPhone, FiShield, FiStar, FiUsers } from "react-icons/fi";
import { FaCarAlt, FaPlane, FaWhatsapp } from "react-icons/fa";

const phone = "+917411606748";
const whatsapp = "+918919602258";
const googleReviewsLink = "https://maps.app.goo.gl/EdXqAJ3U7193W6x67?g_st=ac";

const vehicles = [
  { title: "Sedan", seats: "4 Seater", image: "/sedan.png" },
  { title: "Dzire", seats: "4 Seater", image: "/dzire.png" },
  { title: "Ertiga", seats: "6-7 Seater", image: "/ertiga.png" },
  { title: "Innova", seats: "7 Seater", image: "/innova.png" },
  { title: "Tempo Traveller", seats: "12/16 Seater", image: "/tempo-traveller.png" },
  { title: "Urbania", seats: "10/17 Seater", image: "/urbania.png" },
];

const services = [
  { title: "Airport Transfers", text: "Pickup & Drop", image: "/airport-bg.png" },
  { title: "Outstation Cabs", text: "All India", image: "/temple-bg.png" },
  { title: "City Rides", text: "Local & Sightseeing", image: "/hero-cab.png" },
  { title: "Corporate Travel", text: "Business & Employees", image: "/about-bg.png" },
  { title: "Monthly Rentals", text: "Long Term", image: "/fleet-bg.png" },
];

const trustPoints = [
  ["24/7 Service", "Always available when you need us", <FiClock />],
  ["Experienced Drivers", "Safe & professional drivers", <FiUsers />],
  ["Clean & Well-Maintained Cars", "Comfortable & hygienic vehicles", <FaCarAlt />],
  ["On-Time Pickup", "We value your time", <FiCheck />],
  ["Transparent Pricing", "No hidden charges", <span className="font-black">₹</span>],
  ["GPS Tracking", "Real-time tracking for your safety", <FiMapPin />],
];

const whyChoose = [
  ["Reliable & Safe Travel", <FiShield />],
  ["Professional & Verified Drivers", <FiUsers />],
  ["Clean & Sanitized Vehicles", <FaCarAlt />],
  ["Affordable & Transparent Pricing", <span className="font-black">₹</span>],
  ["24/7 Customer Support", <FiPhone />],
  ["Local Expertise (Sarjapura & Gunjur)", <FiMapPin />],
];

export default function HomePage() {
  return (
    <div className="bg-[#f7fbfd]">
      <section className="relative min-h-[520px] overflow-hidden">
        <Image src="/hero-cab.png" alt="24/7 Airport Taxi in Sarjapura, Gunjur and Bangalore" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d3b]/95 via-[#062d55]/80 to-[#062d55]/25" />
        <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-lg font-semibold italic tracking-wide">Safe <span className="text-brand-gold">•</span> Reliable <span className="text-brand-gold">•</span> Comfortable</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">24/7 Airport Taxi in <span className="text-brand-gold">Sarjapura, Gunjur & Bangalore</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">Your trusted travel partner for airport transfers, outstation trips, city rides and corporate travel. Travel with comfort, safety and peace of mind.</p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold sm:text-sm">
              <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur"><FaPlane className="mr-2 inline" />Airport Transfers<br /><span className="font-normal">Pickup & Drop</span></span>
              <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur"><FaCarAlt className="mr-2 inline" />Outstation Cabs<br /><span className="font-normal">All India</span></span>
              <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur"><FiMapPin className="mr-2 inline" />Local City Rides<br /><span className="font-normal">Bangalore</span></span>
              <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur"><FiUsers className="mr-2 inline" />Corporate & Monthly<br /><span className="font-normal">Services</span></span>
              <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur"><FiClock className="mr-2 inline" />24/7<br /><span className="font-normal">Service</span></span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#booking" className="btn-primary bg-brand-gold !text-brand-dark">Book Your Ride <FiArrowRight /></a>
              <Link href="/fleet" className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"><FaCarAlt /> View Our Fleet</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image src="/hero-sedan1.png" alt="Sree Khushi Tours & Travels vehicle" width={850} height={560} className="w-full drop-shadow-2xl" />
            <p className="absolute bottom-1 right-2 rotate-[-5deg] text-right text-xl font-black italic text-brand-gold">Your Journey<br />Our Priority</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-6">
          {trustPoints.map(([title, text, icon], i) => (
            <div key={String(title)} className={`flex items-center gap-3 border-slate-200 p-5 ${i < 5 ? "lg:border-r" : ""} ${i < 4 ? "border-b lg:border-b-0" : ""}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-xl text-brand-dark">{icon}</div>
              <div><p className="text-sm font-bold text-brand-dark">{String(title)}</p><p className="mt-1 text-[11px] leading-4 text-slate-500">{String(text)}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-kicker">Our Services</p>
            <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Travel Made Easy<br />With Our Services</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">From airport transfers to outstation trips, we provide safe, comfortable and hassle-free travel solutions for every journey.</p>
            <a href="#booking" className="btn-primary mt-6 bg-brand-gold !text-brand-dark">Explore All Services <FiArrowRight /></a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((service) => (
              <Link href="/services" key={service.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-28"><Image src={service.image} alt={service.title} fill className="object-cover" /><div className="absolute inset-0 bg-black/15" /></div>
                <div className="p-3"><p className="text-sm font-bold text-brand-dark">{service.title}</p><p className="mt-1 text-[11px] text-slate-500">{service.text}</p><span className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-brand-dark"><FiArrowRight /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(3,29,59,.88),rgba(3,29,59,.88)),url('/fleet-bg.png')] bg-cover bg-center py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-5 text-white">
            <div><p className="section-kicker !text-brand-gold">Our Fleet</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Comfortable Rides for<br />Every Journey</h2><p className="mt-3 text-sm text-white/75">Well-maintained, clean and spacious vehicles to suit your travel needs.</p></div>
            <Link href="/fleet" className="btn-primary bg-brand-gold !text-brand-dark">View Our Fleet <FiArrowRight /></Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {vehicles.map((vehicle) => (
              <Link href="#booking" key={vehicle.title} className="rounded-xl bg-white p-3 text-brand-dark shadow-lg transition hover:-translate-y-1">
                <div className="flex h-28 items-center justify-center"><Image src={vehicle.image} alt={vehicle.title} width={300} height={190} className="h-full w-full object-contain" /></div>
                <p className="mt-2 text-sm font-bold">{vehicle.title}</p><p className="mt-1 text-xs text-slate-500"><FaCarAlt className="mr-1 inline" />{vehicle.seats}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061f3d] py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-10">
          <div>
            <p className="section-kicker !text-brand-gold">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Sree Khushi Tours & Travels?</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">We are committed to making your journey safe, comfortable and memorable. With our reliable service and professional drivers, we ensure each journey reaches your destination on time.</p>
            <a href="#booking" className="btn-primary mt-6 bg-brand-gold !text-brand-dark">Know More About Us <FiArrowRight /></a>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3">
            {whyChoose.map(([title, icon]) => <div key={String(title)} className="flex min-h-28 flex-col items-center justify-center bg-[#061f3d] p-4 text-center"><span className="text-2xl text-brand-gold">{icon}</span><span className="mt-3 text-xs font-semibold">{String(title)}</span></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 lg:grid-cols-[1.25fr_.75fr] lg:px-10">
        <div className="rounded-2xl bg-white p-7 shadow-sm">
          <p className="section-kicker">Our Service Areas</p>
          <h2 className="mt-2 text-3xl font-black text-brand-dark">Sarjapura <span className="text-brand-gold">•</span> Gunjur <span className="text-brand-gold">•</span> Bangalore</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">We provide reliable taxi services across Sarjapura, Gunjur and Bangalore with safe and on-time pickups.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["/hero-cab.png","/about-bg.png","/temple-bg.png"].map((img,i) => <div key={img} className="overflow-hidden rounded-xl border border-slate-200"><Image src={img} alt={["Sarjapura","Gunjur","Bangalore"][i]} width={300} height={180} className="h-24 w-full object-cover" /><p className="p-2 text-xs font-bold text-brand-dark">{["Sarjapura","Gunjur","Bangalore"][i]}</p></div>)}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-3xl font-black text-[#4285F4] shadow">G</div><div><h3 className="text-xl font-black text-brand-dark">Google Reviews</h3><p className="text-xs text-slate-500">See what our customers say</p></div></div>
          <p className="mt-5 text-sm text-slate-600">Sree Khushi Tours & Travels</p><p className="mt-1 text-sm font-bold text-brand-dark">5.0 <span className="text-brand-gold">★★★★★</span></p>
          <p className="mt-1 text-xs text-slate-500">Based on 100+ real reviews on Google</p>
          <a href={googleReviewsLink} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full bg-brand-gold !text-brand-dark">View All Google Reviews <FiArrowRight /></a>
        </div>
      </section>

      <section id="booking" className="bg-[linear-gradient(90deg,#082e55,#031d3b)] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 lg:px-10">
          <div><p className="text-2xl font-black italic text-brand-gold">Your Next Destination Awaits...</p><p className="mt-1 text-sm text-white/70">Quick booking • Safe travel • Best rates</p></div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${phone}`} className="btn-primary bg-brand-gold !text-brand-dark"><FiPhone /> Call Now</a>
            <a href={`https://wa.me/${whatsapp.replace("+","")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white"><FaWhatsapp /> WhatsApp</a>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 px-5 py-3 text-sm font-bold text-brand-gold"><FiClock /> 24/7 Service</span>
          </div>
        </div>
      </section>
    </div>
  );
}
