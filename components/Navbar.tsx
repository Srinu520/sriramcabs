"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiPhone, FiMenu, FiX, FiTruck } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/tariffs", label: "Tariffs" },
  { href: "/fleet", label: "Fleet" },
  { href: "/temple-tours", label: "Temple Tours" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="glass relative flex items-center justify-between rounded-2xl px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold text-brand-dark">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-dark text-white shadow-glow">
              <FiTruck className="text-lg" />
            </span>
            <div className="leading-tight">
              <p className="text-base">Sri Ram Cabs</p>
              <p className="text-xs text-brand-dark/70">Ride Safe. Ride Clean.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-brand-dark/90 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-2 transition-colors ${
                    active ? "bg-brand-green/10 text-brand-dark" : "hover:text-brand-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex">
            <a href="tel:+917411606748" className="btn-primary">
              <FiPhone /> Call Now
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/60 bg-white text-brand-dark shadow-soft lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-brand-gold/40 bg-white/90 p-4 shadow-soft lg:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-brand-dark/90">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 ${
                      active ? "bg-brand-green/10 text-brand-dark" : "hover:bg-brand-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex gap-3">
              <a href="tel:+917411606748" className="btn-primary w-full justify-center">
                <FiPhone /> Call Now
              </a>
              <a
                href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20to%20book%20a%20cab."
                className="btn-secondary w-full justify-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
