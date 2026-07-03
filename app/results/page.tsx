import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Results and Case Studies | Quartz Digital",
  description:
    "Real outcomes from Quartz Digital builds: client case studies, live websites, and 5-star reviewed projects for Australian businesses.",
  alternates: { canonical: "/results" },
};

const CASES = [
  {
    client: "The Tinted Detailer",
    industry: "Mobile detailing — Sydney",
    url: "https://thetinteddetailer.com",
    img: "/work/tinted-detailer.jpg",
    imgAlt: "The Tinted Detailer website — ceramic coating and paint protection services",
    before: "No website. Leads relied entirely on word of mouth and social DMs.",
    after: "Conversion-focused site with clear service packages, transparent pricing, and instant contact paths.",
    outcome: "“Love how easy it is to navigate… came out clean and professional. Definitely recommend.” — 5-star review.",
  },
  {
    client: "7 Days Clear Cleaning",
    industry: "Cleaning services — Melbourne West",
    url: "https://sevendaysclear.pages.dev",
    img: "/work/seven-days-clear.jpg",
    imgAlt: "7 Days Clear Cleaning website — residential and commercial cleaning in Melbourne West",
    before: "No structured way to present services or capture leads online.",
    after: "Professional site with NDIS trust badges, service areas, and booking-first layout — delivered on time.",
    outcome: "“Understood my business needs clearly… highly recommend.”",
  },
  {
    client: "Callaway Care",
    industry: "Aged care & support at home — Victoria",
    url: "https://callawaycare.com.au",
    img: "/work/callaway-care.jpg",
    imgAlt: "Callaway Care website — support at home services for older Australians",
    before: "No website to build trust with participants, families, and plan managers.",
    after: "A warm, accessible site presenting the care program professionally, with clear enquiry paths.",
    outcome: "“Perfect website.” Ahmad was thrilled with the result — exactly what his program needed.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative pt-36 pb-12">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Results</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tighter text-cream sm:text-5xl lg:text-6xl">
              Work that pays for itself
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Every project below is a real client, a live website, and a verified 5-star Google review.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="grid gap-6 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.client} delay={i * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${c.client} website`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={c.imgAlt}
                      loading="lazy"
                      className="aspect-[16/9] w-full border-b border-line object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
                    />
                  </a>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="text-xl font-semibold tracking-tight text-cream">{c.client}</h2>
                    <p className="mt-1 text-sm text-quartz-bright">{c.industry}</p>
                    <dl className="mt-6 space-y-5 text-sm">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted">Before</dt>
                        <dd className="mt-1.5 leading-relaxed text-neutral-300">{c.before}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted">After</dt>
                        <dd className="mt-1.5 leading-relaxed text-neutral-300">{c.after}</dd>
                      </div>
                      <div className="rounded-2xl bg-raised p-4">
                        <dt className="text-xs font-semibold uppercase tracking-widest text-quartz-bright">Outcome</dt>
                        <dd className="mt-1.5 leading-relaxed text-cream">{c.outcome}</dd>
                      </div>
                    </dl>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-quartz-bright transition-colors hover:text-cream"
                    >
                      Visit live site
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                        <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection heading="Want results like these?" sub="Get your ballpark price in under two minutes." />
    </>
  );
}
