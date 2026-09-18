"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Google Reviews", external: true },
  { href: "/contact", label: "Contact" },
];

const googleReviewsLink = "https://maps.app.goo.gl/EdXqAJ3U7193W6x67?g_st=ac";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link href="/" className="shrink-0">
          <div className="leading-none"><p className="text-xl font-black tracking-tight text-brand-dark sm:text-2xl"><span className="text-brand-gold">Sree</span> Khushi</p><p className="text-[10px] font-bold tracking-[.18em] text-brand-dark sm:text-xs">TOURS & TRAVELS</p></div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-bold text-brand-dark lg:flex">
          {links.map((link) => link.external ? <a key={link.label} href={googleReviewsLink} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-3 hover:bg-brand-cream">{link.label}</a> : <Link key={link.label} href={link.href} className={`rounded-lg px-3 py-3 ${pathname===link.href ? "text-brand-gold" : "hover:bg-brand-cream"}`}>{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="tel:+917411606748" className="rounded-full bg-brand-gold px-5 py-3 text-xs font-black text-brand-dark"><FiPhone className="mr-1 inline" />Call Now<br /><span className="font-bold">+91 7411606748</span></a>
          <a href="https://wa.me/918919602258" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 text-xs font-black text-white"><FaWhatsapp className="mr-1 inline" />WhatsApp<br /><span className="font-bold">+91 8919602258</span></a>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">{open?<FiX/>:<FiMenu/>}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white p-4 lg:hidden"><div className="flex flex-col gap-2">{links.map(link=>link.external?<a key={link.label} href={googleReviewsLink} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2">{link.label}</a>:<Link key={link.label} href={link.href} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2">{link.label}</Link>)}</div><div className="mt-3 grid grid-cols-2 gap-2"><a href="tel:+917411606748" className="btn-primary bg-brand-gold !text-brand-dark"><FiPhone/>Call</a><a href="https://wa.me/918919602258" className="btn-secondary"><FaWhatsapp/>WhatsApp</a></div></div>}
    </header>
  );
}
