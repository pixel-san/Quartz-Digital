import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { HeroTitle } from "@/components/HeroTitle";
import { HomeLine } from "@/components/HomeLine";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quartz Digital | Web Design, SEO and Digital Growth — Australia",
  description:
    "Quartz Digital builds websites, SEO systems, and digital growth engines for businesses worldwide. Conversion-first design, SEO from day one. Get a free quote.",
  alternates: { canonical: "/" },
};

const WHY = [
  {
    title: "Strategy-first approach",
    body: "We start with your customers and goals — design follows strategy, never the other way around.",
  },
  {
    title: "Conversion-focused builds",
    body: "Every section has one job: move the visitor one step closer to contacting you.",
  },
  {
    title: "SEO integrated from day one",
    body: "Structure, speed, and schema built into the code — not patched on later.",
  },
  {
    title: "Clean, Apple-style UX",
    body: "Premium, minimal, fast. Your business looks like the market leader.",
  },
];

const RESULTS = [
  { metric: "5.0", label: "Google rating across all reviews" },
  { metric: "<2.5s", label: "Load-time target on every build" },
  { metric: "100%", label: "Sites shipped SEO-ready at launch" },
];

export default function HomePage() {
  return (
    <>
      <HomeLine>
      {/* 1. HERO */}
      <section className="relative flex min-h-[92vh] items-center">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,144,135,0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 pt-28 pb-16 text-center">
          <HeroTitle />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {SITE.description}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Get Free Quote
            </Link>
            <Link href="/results" className="btn-outline">
              View Results
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-y border-line bg-surface" aria-label="Trust indicators">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row sm:text-left">
          {[
            "Australia + global clients",
            "Startup to enterprise solutions",
            "SEO + web + branding experts",
          ].map((t) => (
            <p key={t} className="flex items-center gap-2.5 text-sm text-neutral-300">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-quartz-bright" fill="none" aria-hidden="true">
                <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section id="services" className="py-24 scroll-mt-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Services</p>
            <h2 id="services-heading" className="mt-4 max-w-xl text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
              Everything your growth needs, under one roof
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-quartz/40"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-cream">
                      {s.nav}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.metaDescription.split(".")[0]}.
                    </p>
                  </div>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-quartz-bright">
                    {s.comingSoon ? "Coming soon" : "Learn more"}
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
                      <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS — scroll-drawn line */}
      <ProcessSection />
      </HomeLine>

      {/* 5. RESULTS */}
      <section className="border-t border-line bg-surface py-24" aria-labelledby="results-heading">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Results</p>
            <h2 id="results-heading" className="mt-4 max-w-xl text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
              Numbers we hold ourselves to
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {RESULTS.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-line bg-ink p-8">
                  <p className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">{r.metric}</p>
                  <p className="mt-3 text-sm text-muted">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-10">
            <Link href="/results" className="btn-outline">
              View case studies
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. WHY QUARTZ DIGITAL */}
      <section className="py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Why Quartz Digital</p>
            <h2 id="why-heading" className="mt-4 max-w-xl text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
              Built like a product, not a brochure
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-cream">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. FINAL CTA */}
      <section className="border-t border-line bg-surface py-24">
        <div className="mx-auto max-w-[800px] px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
              Ready to build something real?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Two minutes to a ballpark price. Zero pressure.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Get Free Quote
            </Link>
            <a href={SITE.phoneHref} className="btn-outline">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
