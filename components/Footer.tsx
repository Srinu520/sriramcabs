import Link from "next/link";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const googleReviewsLink = "https://maps.app.goo.gl/EdXqAJ3U7193W6x67?g_st=ac";

export default function Footer() {
  return (
    <footer className="bg-[#061f3d] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_.9fr_1.2fr_1fr] lg:px-10">
        <div><p className="text-2xl font-black text-brand-gold">Sree Khushi</p><p className="font-bold">Tours & Travels</p><p className="mt-4 text-sm text-white/65">Travel Safe • Travel Happy</p></div>
        <div><h3 className="font-bold text-brand-gold">Quick Links</h3><div className="mt-4 space-y-2 text-sm text-white/70"><Link className="block hover:text-white" href="/">Home</Link><Link className="block hover:text-white" href="/about">About Us</Link><Link className="block hover:text-white" href="/fleet">Our Fleet</Link><Link className="block hover:text-white" href="/services">Services</Link><a className="block hover:text-white" href={googleReviewsLink} target="_blank" rel="noreferrer">Google Reviews</a><Link className="block hover:text-white" href="/contact">Contact</Link></div></div>
        <div><h3 className="font-bold text-brand-gold">Contact Us</h3><div className="mt-4 space-y-3 text-sm text-white/75"><a className="block" href="tel:+917411606748"><FiPhone className="mr-2 inline text-brand-gold"/>+91 7411606748</a><a className="block" href="https://wa.me/918919602258"><FaWhatsapp className="mr-2 inline text-[#25D366]"/>+91 8919602258</a><a className="block" href="mailto:sreekhushitours@gmail.com">✉ sreekhushitours@gmail.com</a><p><FiMapPin className="mr-2 inline text-brand-gold"/>21 Krishna Reddy Building, Sompara Gate, Sarjapura, Bangalore, Karnataka 562125</p></div></div>
        <div><h3 className="font-bold text-brand-gold">Follow Us</h3><div className="mt-5 flex gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><FaFacebookF/></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><FaInstagram/></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><FaYoutube/></span></div><p className="mt-7 text-lg font-black italic text-brand-gold">Travel Safe<br/>Travel Happy</p></div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Sree Khushi Tours & Travels. All Rights Reserved.</div>
    </footer>
  );
}
