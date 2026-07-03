"use client";

import React from "react";
import { motion } from "framer-motion";
import { REVIEWS, SITE } from "@/lib/site";

type Review = { name: string; stars: number; text: string };

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-[#fbbc04]" aria-hidden="true">
          <path d="M12 2l2.94 6.34 6.94.8-5.14 4.73 1.38 6.85L12 17.27l-6.12 3.45 1.38-6.85L2.12 9.14l6.94-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Review[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      {/* CSS-driven marquee — GPU transform only, no per-frame JS */}
      <div
        className="testimonial-col flex flex-col gap-6 pb-6"
        style={{ "--marquee-dur": `${props.duration || 10}s` } as React.CSSProperties}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, stars }, i) => (
                <figure
                  className="w-full max-w-xs rounded-3xl border border-line bg-surface p-8"
                  key={i}
                >
                  <blockquote className="text-sm leading-relaxed text-neutral-300">
                    {text}
                  </blockquote>
                  <figcaption className="mt-5 flex flex-col gap-1.5">
                    <span className="font-medium tracking-tight text-cream">{name}</span>
                    <Stars count={stars} />
                  </figcaption>
                </figure>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
}

export function Testimonials() {
  const reviews = REVIEWS as unknown as Review[];
  const firstColumn = reviews.slice(0, 3);
  const secondColumn = reviews.slice(3, 6);
  const thirdColumn = reviews.slice(6, 9);

  return (
    <section className="relative py-24" aria-labelledby="testimonials-heading">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-line px-4 py-1 text-sm text-muted">
              Testimonials
            </div>
          </div>
          <h2
            id="testimonials-heading"
            className="mt-5 text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-cream text-center"
          >
            Rated 5 stars by real clients
          </h2>
          <p className="mt-5 text-center text-muted">
            Verified Google reviews from businesses we have built for.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[680px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
              <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
            </svg>
            Read all Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
