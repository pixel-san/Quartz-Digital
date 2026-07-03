import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Quartz Digital | Performance-Driven Digital Agency",
  description:
    "Quartz Digital is a performance-driven digital agency helping businesses build, rank, and scale through high-converting websites, SEO systems, and automation.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Outcomes over output", body: "We measure work by the leads it produces, not the hours it took." },
  { title: "Strategy before pixels", body: "Every build starts with your customers and your numbers." },
  { title: "No black boxes", body: "You always know what was done, why, and what it changed." },
  { title: "Long-term systems", body: "We build assets that compound — not campaigns that expire." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-16">
        <div className="mx-auto max-w-[900px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">About</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl lg:text-6xl">
              A digital agency that acts like a growth partner
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {SITE.positioning}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[900px] px-5">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-cream">Why we exist</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                <p>
                  Most business websites are digital brochures. They look acceptable, say very little, and generate nothing. The agencies that build them get paid either way.
                </p>
                <p>
                  Quartz Digital was built on a different deal: everything we ship has a job. Websites convert. SEO ranks. Automation captures leads while you sleep. If it does not move a business metric, we do not build it.
                </p>
                <p>
                  We work with Australian businesses first — from local operators to growing startups — and clients worldwide. Every project gets the same system: strategy, conversion-first design, SEO from day one, and honest reporting.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[900px] px-5">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-cream">How we work</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-cream">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="See if we're the right fit" sub="Start with a free quote — it takes two minutes." />
    </>
  );
}
