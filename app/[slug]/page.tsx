import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, getService } from "@/lib/services";
import { AREA_PAGES, getArea } from "@/lib/areas";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...SERVICES.map((s) => ({ slug: s.slug })),
    ...AREA_PAGES.map((a) => ({ slug: a.slug })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `/${service.slug}` },
      openGraph: { title: service.metaTitle, description: service.metaDescription, url: `/${service.slug}`, images: ["/og.jpg"] },
      robots: service.comingSoon ? { index: false, follow: true } : undefined,
    };
  }
  const area = getArea(params.slug);
  if (area) {
    return {
      title: area.metaTitle,
      description: area.metaDescription,
      alternates: { canonical: `/${area.slug}` },
      openGraph: { title: area.metaTitle, description: area.metaDescription, url: `/${area.slug}`, images: ["/og.jpg"] },
    };
  }
  return {};
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (service) return <ServicePage service={service} />;

  const area = getArea(params.slug);
  if (!area) notFound();

  const serviceSlug = area.service === "SEO" ? "seo-services" : "web-design";
  const siblings: { slug: string; label: string }[] = area.related
    ? area.related
        .map((r) => {
          const svc = getService(r);
          if (svc) return { slug: svc.slug, label: svc.nav };
          const a = getArea(r);
          return a ? { slug: a.slug, label: a.topic ? a.metaTitle.split("|")[0].trim() : `${a.service} ${a.city}` } : null;
        })
        .filter((x): x is { slug: string; label: string } => !!x)
    : area.suburb
      ? (area.nearby ?? [])
          .map((s) => getArea(s))
          .filter((a): a is NonNullable<typeof a> => !!a)
          .map((a) => ({ slug: a.slug, label: `${a.service} ${a.city}` }))
      : AREA_PAGES.filter((a) => a.slug !== area.slug && !a.suburb && !a.topic).map((a) => ({
          slug: a.slug,
          label: `${a.service} ${a.city}`,
        }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: area.topic ? area.h1 : `${area.service} ${area.city}`,
          description: area.metaDescription,
          provider: { "@id": `${SITE.url}/#business` },
          areaServed: area.topic
            ? { "@type": "City", name: "Melbourne" }
            : area.suburb
              ? { "@type": "Place", name: `${area.city}, Victoria, Australia` }
              : { "@type": "City", name: area.city },
          url: `${SITE.url}/${area.slug}`,
        }}
      />
      {area.faqs && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: area.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <section className="relative flex min-h-[60vh] items-center pt-28 pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 45% at 50% -10%, rgba(0,144,135,0.14), transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">
              {area.eyebrow ?? `${area.service} — ${area.city}`}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tighter text-cream sm:text-5xl lg:text-6xl">
              {area.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{area.intro}</p>
            <div className="mt-9">
              <Link href="/quote" className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white">
                Get Free Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className={`mx-auto grid max-w-[1100px] gap-5 px-5 ${area.suburb && area.sections.length !== 3 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {area.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-surface p-8">
                <h2 className="text-xl font-semibold tracking-tight text-cream">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {area.extra && (
        <section className="border-t border-line py-16">
          <div className="mx-auto max-w-[760px] space-y-5 px-5 text-base leading-relaxed text-muted">
            {area.extra.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </section>
      )}

      {area.faqs && (
        <section className="border-t border-line py-16">
          <div className="mx-auto max-w-[860px] px-5">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-cream">
              Common questions
            </h2>
            <FAQAccordion items={area.faqs} />
          </div>
        </section>
      )}

      <section className="pb-16">
        <div className="mx-auto max-w-[1100px] px-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {area.related ? "Related" : area.suburb ? "Also serving nearby" : "More from Quartz Digital"}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${serviceSlug}`} className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white">
              {area.service === "SEO" ? "SEO Services" : "Web Design"} — full details
            </Link>
            {siblings.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to grow in ${area.city}?`}
        sub="Get a ballpark price in under two minutes."
      />
    </>
  );
}
