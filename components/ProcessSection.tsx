"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button2 } from "@/components/Button2";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const STEPS = [
  { n: "01", title: "Discover", body: "We learn your business, customers, and goals — before touching a pixel." },
  { n: "02", title: "Strategy", body: "Structure, keywords, and conversion paths mapped to how your buyers decide." },
  { n: "03", title: "Build", body: "Fast, clean, mobile-first execution. Designed to convert, coded to rank." },
  { n: "04", title: "Optimise", body: "Speed, SEO, and conversion tuning against real data." },
  { n: "05", title: "Scale", body: "More pages, more channels, more leads — the system grows with you." },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1100px] px-5">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">
            The process
          </p>
          <h2
            id="process-heading"
            className="mt-4 max-w-xl text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl"
          >
            One line from first call to real growth
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Desktop line is drawn by the page-spanning HomeLine */}

          {/* Mobile line */}
          <svg
            className="pointer-events-none absolute left-6 top-0 h-full w-8 md:hidden"
            viewBox="0 0 32 1400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M16 0 v1400"
              stroke="#009087"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: drawn }}
            />
          </svg>

          <ol className="relative flex flex-col gap-16 md:gap-24">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className={`flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <Reveal delay={0.05}>
                  <div className="ml-14 max-w-sm rounded-3xl border border-line bg-surface/80 p-7 shadow-card backdrop-blur-sm md:ml-0">
                    <span className="text-sm font-semibold tracking-widest text-quartz-bright">
                      {step.n}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* CTA — sits inside the line's terminal loop */}
          <div className="relative z-10 mt-32 flex flex-col items-center gap-5 text-center md:mt-44">
            <Reveal>
              <h3 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                The line ends where your growth starts
              </h3>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col items-center gap-4 sm:flex-row">
              <Button2 href={SITE.whatsapp} external event="whatsapp_click">
                Contact Now
              </Button2>
              <a href="/#services" className="btn-outline">
                View Our Services
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
