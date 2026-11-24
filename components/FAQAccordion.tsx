"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-base font-medium text-cream">{item.q}</span>
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ease-out ${open === i ? "rotate-45" : ""}`}
              fill="none"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {/* Answer stays in the HTML (crawlable); CSS grid animates open/closed. */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
