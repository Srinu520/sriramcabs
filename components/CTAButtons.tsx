import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type Props = {
  primaryLabel?: string;
  variant?: "solid" | "light";
  href?: string;
  showWhatsApp?: boolean;
};

export default function CTAButtons({
  primaryLabel = "Book a Cab",
  variant = "solid",
  href = "/contact",
  showWhatsApp = true,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={href}
        className={
          variant === "solid"
            ? "btn-primary"
            : "inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/60 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-dark shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
        }
      >
        <FiPhone /> {primaryLabel}
      </Link>
      <a href="tel:+917411606748" className="btn-secondary">
        <FiPhone /> Call Now
      </a>
      {showWhatsApp && (
        <a
          href="https://wa.me/917411606748?text=Hi%20Sri%20Ram%20Cabs,%20I%20want%20to%20book%20a%20cab."
          className="btn-secondary"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      )}
    </div>
  );
}
