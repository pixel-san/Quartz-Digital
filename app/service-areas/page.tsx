import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { AREA_PAGES } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas: Tarneit, Werribee and Melbourne | Quartz Digital",
  description:
    "Web design and SEO for Tarneit, Werribee, Hoppers Crossing and Melbourne's west, plus Sydney, Brisbane, Perth, Adelaide and the Gold Coast.",
  alternates: { canonical: "/service-areas" },
  openGraph: { title: "Service Areas: Tarneit, Werribee and Melbourne | Quartz Digital", description:
    "Web design and SEO for Tarneit, Werribee, Hoppers Crossing and Melbourne's west, plus Sydney, Brisbane, Perth, Adelaide and the Gold Coast.", url: "/service-areas", images: ["/og.jpg"] },
};

const CITIES = Array.from(new Set(AREA_PAGES.filter((a) => !a.suburb && !a.topic).map((a) => a.city)));
const SUBURBS = AREA_PAGES.filter((a) => a.suburb);
const TOPICS = AREA_PAGES.filter((a) => a.topic);
const REGIONS = ["West", "North", "Inner Melbourne", "East", "South-east"];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative pt-36 pb-12">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Service areas</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tighter text-cream sm:text-5xl lg:text-6xl">
              Local expertise. National reach. Global clients.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We build for businesses across Australia and worldwide. These city pages cover where we work most — and how we win in each market.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city, i) => {
              const pages = AREA_PAGES.filter((a) => a.city === city && !a.suburb && !a.topic);
              return (
                <Reveal key={city} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-line bg-surface p-8">
                    <h2 className="text-2xl font-bold tracking-tight text-cream">{city}</h2>
                    <ul className="mt-5 space-y-3">
                      {pages.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/${p.slug}`}
                            className="group flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-quartz-bright"
                          >
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden="true">
                              <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {p.service} {p.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Melbourne suburbs</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream">
                Tarneit, Werribee and suburbs across Melbourne
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                We are based in Hoppers Crossing, so Melbourne&apos;s west is our home patch. We also build for businesses right across Melbourne, mostly online, and can meet in person where it makes sense.
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {REGIONS.map((r) => (
                  <div key={r}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">{r}</h3>
                    <ul className="mt-3 space-y-2">
                      {SUBURBS.filter((s) => s.region === r).map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} className="text-sm text-neutral-300 transition-colors hover:text-quartz-bright">
                            {s.service} {s.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="text-2xl font-bold tracking-tight text-cream">More ways we can help</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {TOPICS.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/${t.slug}`} className="text-sm text-neutral-300 transition-colors hover:text-quartz-bright">
                      {t.metaTitle.split("|")[0].trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="text-xl font-semibold tracking-tight text-cream">Not in these cities?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Location has never limited a Quartz Digital build. We work with clients Australia-wide and internationally — everything from kickoff to launch happens online, on your schedule.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection heading="Wherever you are, let's build" sub="Get a ballpark price in under two minutes." />
    </>
  );
}
