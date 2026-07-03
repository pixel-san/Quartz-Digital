import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SplineScene } from "@/components/ui/spline-scene";
import { SERVICES, type Service } from "@/lib/services";
import { SITE } from "@/lib/site";

export function ServicePage({ service }: { service: Service }) {
  const related = SERVICES.filter((s) => service.related.includes(s.slug));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.nav,
          description: service.metaDescription,
          provider: {
            "@type": "LocalBusiness",
            name: SITE.name,
            telephone: SITE.phone,
            url: SITE.url,
          },
          areaServed: ["Australia", "Worldwide"],
          url: `${SITE.url}/${service.slug}`,
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28 pb-16">
        {service.splineHero && (
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
            {/* pointer-events-none so the robot tracks the cursor through it */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          </div>
        )}
        <div
          className={`relative z-10 mx-auto w-full max-w-[1100px] px-5 ${
            service.splineHero ? "pointer-events-none [&_a]:pointer-events-auto" : ""
          }`}
        >
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">
              {service.comingSoon ? "Coming soon" : service.nav}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tighter text-cream sm:text-5xl lg:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {service.intro}
            </p>
            <div className="mt-9">
              <Link
                href={service.comingSoon ? "/contact" : "/quote"}
                className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
              >
                {service.comingSoon ? "Register Interest" : "Get Free Quote"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {!service.comingSoon && (
        <>
          {/* Problem → Solution */}
          <section className="border-t border-line py-20">
            <div className="mx-auto grid max-w-[1100px] gap-10 px-5 md:grid-cols-2">
              <Reveal>
                <div className="rounded-3xl border border-line bg-surface p-8 h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400/80">The problem</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream">{service.problem.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{service.problem.body}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-quartz/30 bg-surface p-8 h-full shadow-glowsoft">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-quartz-bright">The Quartz way</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream">{service.solution.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{service.solution.body}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16">
            <div className="mx-auto max-w-[1100px] px-5">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tighter text-cream sm:text-4xl">
                  What you get
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.benefits.map((b, i) => (
                  <Reveal key={b.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20">
                      <h3 className="text-lg font-semibold tracking-tight text-cream">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="border-t border-line bg-surface py-16">
            <div className="mx-auto max-w-[1100px] px-5">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tighter text-cream sm:text-4xl">How it works</h2>
              </Reveal>
              <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <li className="h-full rounded-2xl border border-line bg-ink p-6">
                      <span className="text-sm font-semibold text-quartz-bright">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-cream">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* Proof */}
          <section className="py-16">
            <div className="mx-auto max-w-[800px] px-5 text-center">
              <Reveal>
                <svg viewBox="0 0 24 24" className="mx-auto h-8 w-8 fill-quartz" aria-hidden="true">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="mt-6 text-xl leading-relaxed text-cream">{service.proof}</p>
                <a
                  href={SITE.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-quartz-bright hover:text-cream transition-colors"
                >
                  See our Google reviews
                </a>
              </Reveal>
            </div>
          </section>

          {/* Related services (internal linking) */}
          <section className="pb-16">
            <div className="mx-auto max-w-[1100px] px-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Also explore</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white"
                  >
                    {r.nav}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection
        heading={service.cta.heading}
        sub={service.cta.sub}
        primaryHref={service.comingSoon ? "/contact" : "/quote"}
        primaryLabel={service.comingSoon ? "Register Interest" : "Get Free Quote"}
      />
    </>
  );
}
