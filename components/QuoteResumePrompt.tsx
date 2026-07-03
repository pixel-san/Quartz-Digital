"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "qd_quote_v1";
const DISMISS_KEY = "qd_resume_dismissed";

/**
 * If a visitor left the quote generator mid-flow, gently invite them
 * to finish it — the hottest lead on the site. Never shows on /quote,
 * after submission, or once dismissed this session.
 */
export function QuoteResumePrompt() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/quote") {
      setShow(false);
      return;
    }
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const inProgress =
        saved && saved.step && saved.step !== "service" && !saved.submitted;
      if (inProgress) {
        const t = setTimeout(() => setShow(true), 2500);
        return () => clearTimeout(t);
      }
    } catch {}
  }, [pathname]);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 left-5 z-[5500] w-[calc(100vw-2.5rem)] max-w-[300px] rounded-2xl border border-quartz/40 bg-raised/95 p-4 shadow-card backdrop-blur-md md:bottom-5"
          role="dialog"
          aria-label="Resume your quote"
        >
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-cream"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <p className="pr-6 text-sm font-semibold text-cream">
            Your quote is almost ready
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            We saved your progress — one step left to see your price.
          </p>
          <Link
            href="/quote"
            onClick={() => {
              track("cta_click", { location: "quote_resume" });
              setShow(false);
            }}
            className="mt-3 block rounded-full bg-quartz py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-quartz-bright"
          >
            Finish your quote
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
