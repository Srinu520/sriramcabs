"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-brand-gold/50 bg-white/80 shadow-soft"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-4 text-left text-brand-dark"
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <span className="font-semibold">{item.question}</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="border-t border-brand-gold/40 px-4 py-3 text-sm text-brand-dark/80">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
