import Link from "next/link";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tariffs", href: "/tariffs" },
  { label: "Fleet", href: "/fleet" },
  { label: "Temple Tours", href: "/temple-tours" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-brand-gold/30 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-dark text-white shadow-glow">
              SR
            </span>
            <div>
              <p className="text-lg font-semibold text-brand-dark">Sri Ram Cabs</p>
              <p className="text-sm text-brand-dark/70">Safe, clean & trusted rides</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-brand-dark/80">
            24/7 cab service in Bangalore for local, airport, outstation and pilgrimage travel.
            Transparent pricing, polite drivers and clean cars every ride.
          </p>
        </div>

        <div>
          <p className="mb-3 text-base font-semibold text-brand-dark">Quick Links</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-brand-dark/80">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-dark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm text-brand-dark/80">
          <p className="text-base font-semibold text-brand-dark">Contact</p>
          <div className="flex items-center gap-2">
            <FiPhone className="text-brand-green" />
            <a href="tel:+917411606748" className="hover:text-brand-dark">
              +91 7411606748
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-brand-green" />
            <a href="tel:+916301030863" className="hover:text-brand-dark">
              +91 6301030863
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-brand-green" />
            <a href="mailto:sriramcabs@gmail.com" className="hover:text-brand-dark">
              sriramcabs@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-brand-green" />
            <span>Sri Ram Cabs, Bangalore, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-brand-green" />
            <span>24/7 Service</span>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-gold/30 bg-brand-cream/70 py-4 text-center text-xs text-brand-dark/70">
        <p>© {year} Sri Ram Cabs. All rights reserved.</p>
        <p className="mt-1">
          24/7 Cab Service in Bangalore | Local, Airport & Outstation Cabs Across India.
        </p>
      </div>
    </footer>
  );
}
