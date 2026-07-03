"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { NAV_ITEMS } from "@/lib/site";

/* Floating pill nav — appears when scrolling up (Aceternity style). */
function FloatingNav({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "hidden md:flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.15] rounded-full bg-ink/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.4),0px_0px_0px_1px_rgba(255,255,255,0.06)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`fnav-${idx}`}
            href={navItem.link}
            className="relative items-center flex space-x-1 text-neutral-300 hover:text-white transition-colors"
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link
          href="/quote"
          className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <span>Get Free Quote</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-quartz-bright to-transparent h-px" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <FloatingNav
        navItems={NAV_ITEMS.filter((n) =>
          ["Home", "About", "Results", "FAQ", "Quote", "Contact"].includes(n.name)
        ).map((n) => ({ name: n.name, link: n.link }))}
      />

      {/* Static top header: logo left, nav centre, CTA right */}
      <header className="absolute top-0 left-0 right-0 z-[4000]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4">
          {/* Logo — standalone wordmark, fixed so it scrolls with the user as a home button */}
          <Link
            href="/"
            aria-label="Quartz Digital — home"
            className="fixed left-5 top-4 z-[5001] shrink-0 rounded-lg"
            onClick={closeAll}
          >
            <Image
              src="/logo.jpg"
              alt="Quartz Digital"
              width={384}
              height={148}
              className="h-10 w-auto rounded-lg md:h-12"
              priority
            />
          </Link>
          {/* spacer keeps nav centred while the logo is fixed */}
          <div className="h-10 w-[104px] shrink-0 md:h-12 md:w-[125px]" aria-hidden="true" />

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) =>
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white transition-colors py-2"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                      >
                        <div className="w-64 rounded-2xl border border-line bg-raised/95 backdrop-blur-md p-2 shadow-card">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/${s.slug}`}
                              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                              onClick={closeAll}
                            >
                              {s.nav}
                              {s.comingSoon && (
                                <span className="text-[10px] uppercase tracking-wider text-quartz-bright">
                                  Soon
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "text-sm transition-colors py-2",
                    pathname === item.link
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + phone */}
          <div className="hidden lg:flex shrink-0 items-center gap-3">
            <Link
              href="/quote"
              className="rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+61466075295"
              aria-label="Call Quartz Digital on +61 466 075 295"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-quartz/60 hover:text-quartz-bright"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-line text-cream"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Mobile navigation"
              className="lg:hidden overflow-hidden border-b border-line bg-ink/98 backdrop-blur-xl"
            >
              <div className="px-5 pb-6 pt-2 flex flex-col gap-1">
                {NAV_ITEMS.map((item) =>
                  item.name === "Services" ? (
                    <div key="m-services">
                      <button
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base text-neutral-200"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        Services
                        <svg
                          viewBox="0 0 24 24"
                          className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {servicesOpen && (
                        <div className="ml-3 flex flex-col border-l border-line pl-3">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/${s.slug}`}
                              className="rounded-lg px-3 py-2.5 text-sm text-neutral-400 hover:text-white"
                              onClick={closeAll}
                            >
                              {s.nav}
                              {s.comingSoon ? " — coming soon" : ""}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="rounded-xl px-3 py-3 text-base text-neutral-200 hover:bg-white/5"
           
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href="/quote"
                    className="flex-1 rounded-full bg-cream px-5 py-3 text-center text-base font-semibold text-ink"
                    onClick={closeAll}
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:+61466075295"
                    aria-label="Call Quartz Digital on +61 466 075 295"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-cream"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
