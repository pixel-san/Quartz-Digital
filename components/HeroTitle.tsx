"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Pairs balanced by width — shorter on the left, longer on the right,
   so the swap never opens an odd gap between words. */
const WORDS: [string, string][] = [
  ["Build.", "Lead."],
  ["Rank.", "Thrive."],
  ["Scale.", "Develop."],
];

/**
 * "Build. Rank. Scale." — staggered reveal, then exactly one word at a
 * time rolls to its alternate (Develop. / Thrive. / Lead.) and back,
 * cycling left to right in the accent colour.
 */
export function HeroTitle() {
  const [t, setT] = useState(-1);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const start = setTimeout(() => setT(0), 1000);
    return () => clearTimeout(start);
  }, [reduced]);

  useEffect(() => {
    if (reduced || t < 0) return;
    const id = setInterval(() => setT((v) => v + 1), 2000);
    return () => clearInterval(id);
  }, [t < 0, reduced]);

  // how many completed activations slot i has had
  const idx = (i: number) =>
    t < 0 ? 0 : Math.floor(t / 3) + (t % 3 > i ? 1 : 0);

  return (
    <h1
      aria-label="Build. Rank. Scale."
      className="mx-auto max-w-4xl text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
    >
      {WORDS.map((pair, i) => {
        const isActive = t >= 0 && t % 3 === i;
        const current = pair[idx(i) % 2];
        const next = pair[(idx(i) + 1) % 2];
        const wordCls = `block text-center leading-[1.18] transition-colors duration-500 ${
          isActive ? "text-quartz-bright" : "text-cream"
        }`;
        return (
          <motion.span
            key={i}
            aria-hidden="true"
            className="mx-[0.08em] inline-block h-[1.18em] overflow-hidden align-bottom"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.span
              className="block will-change-transform"
              animate={{ y: isActive ? "-50%" : "0%" }}
              transition={
                isActive
                  ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0 }
              }
            >
              <span className={wordCls}>{current}</span>
   
              <span className={wordCls}>{next}</span>
            </motion.span>
          </motion.span>
        );
      })}
    </h1>
  );
}
