import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
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
    };
  }
  const area = getArea(params.slug);
  if (area) {
    return {
      title: area.metaTitle,
      description: area.metaDescription,
      alternates: { canonical: `/${area.slug}` },
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
  const siblings = AREA_PAGES.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${area.service} ${area.city}`,
          description: area.metaDescription,
          provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phone, url: SITE.url },
          areaServed: { "@type": "City", name: area.city },
          url: `${SITE.url}/${area.slug}`,
        }}
      />

      <section className="relative flex min-h-[60vh] items-center pt-28 pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 45% at 50% -10%, rgba(0,144,135,0.14), transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">
              {area.service} — {area.city}
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
        <div className="mx-auto grid max-w-[1100px] gap-5 px-5 md:grid-cols-3">
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

      <section className="pb-16">
        <div className="mx-auto max-w-[1100px] px-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">More from Quartz Digital</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${serviceSlug}`} className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white">
              {area.service === "SEO" ? "SEO Services" : "Web Design"} — full details
            </Link>
            {siblings.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white">
                {s.service} {s.city}
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
