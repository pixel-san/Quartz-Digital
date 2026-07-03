"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const PATH = `M720 0
  C 780 200, 620 380, 700 560
  S 860 900, 730 1120
  S 580 1450, 700 1660
  S 870 2000, 740 2220
  S 590 2560, 710 2770
  S 860 3120, 730 3330
  S 640 3540, 720 3720`;

/**
 * One continuous scroll-drawn line for the homepage.
 * Starts at the very top, weaves down the page, and ends at the
 * process CTA — "The line ends where your growth starts."
 * No pre-drawn ghost track: the line simply arrives as you scroll.
 */
export function HomeLine({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  return (
    <div ref={ref} className="relative">
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
        viewBox="0 0 1440 4000"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={PATH}
          stroke="url(#homeLineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: drawn }}
        />
        <defs>
          <linearGradient
            id="homeLineGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="4000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00b3a6" stopOpacity="0.75" />
            <stop offset="0.3" stopColor="#009087" />
            <stop offset="0.65" stopColor="#00b3a6" />
            <stop offset="1" stopColor="#00d1c2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
