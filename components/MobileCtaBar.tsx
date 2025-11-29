"use client";

import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileCtaBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-3 rounded-2xl bg-white/95 p-3 shadow-glow">
        <a
          href="tel:+917411606748"
          className="flex w-1/2 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-green to-brand-dark px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:shadow-glow"
        >
          <FiPhone />
          Call
        </a>
        <a
          href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20to%20book%20a%20cab."
          className="flex w-1/2 items-center justify-center gap-2 rounded-xl border border-brand-gold/60 bg-brand-cream px-4 py-3 text-sm font-semibold text-brand-dark shadow-soft transition-all duration-200 hover:-translate-y-0.5"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
