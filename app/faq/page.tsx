import type { Metadata } from "next";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ | Web Design, SEO, Pricing and Timelines — Quartz Digital",
  description:
    "Answers to common questions about Quartz Digital's web design, SEO services, pricing process, project timelines, and website maintenance plans.",
  alternates: { canonical: "/faq" },
};

const GROUPS: { title: string; items: FAQItem[] }[] = [
  {
    title: "Web design",
    items: [
      {
        q: "What kind of websites do you build?",
        a: "Everything from focused single-page sites for local businesses to full multi-page platforms and Shopify stores. Every build is custom, mobile-first, and structured to convert visitors into enquiries.",
      },
      {
        q: "Will my website work on mobile?",
        a: "Yes — we design mobile-first. Most of your visitors arrive on a phone, so the mobile experience is designed before the desktop one, not shrunk down afterwards.",
      },
      {
        q: "Do I own my website?",
        a: "Yes. Your site, your content, your domain. Our maintenance plans keep it hosted, updated, and secure, but the asset is yours.",
      },
    ],
  },
  {
    title: "SEO",
    items: [
      {
        q: "Is SEO included in a website build?",
        a: "Every build ships with SEO-ready foundations: clean structure, fast load times, and proper metadata. Full optimisation — keyword targeting, Google Business Profile, and monthly improvement cycles — is available as an add-on or ongoing plan.",
      },
      {
        q: "How long until SEO shows results?",
        a: "Local SEO improvements often show within weeks. Competitive rankings typically build over three to six months. SEO compounds — every month stacks on the last.",
      },
      {
        q: "Do you do local SEO?",
        a: "Yes — map pack optimisation, Google Business Profile, local citations, and suburb-level content targeting are core parts of our SEO system.",
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      {
        q: "How much does a website cost?",
        a: "It depends on scope — page count, SEO, and ongoing care. Our quote generator gives you a personalised ballpark range in under two minutes, with no call required.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. Your quote covers the build, and maintenance plans include hosting and your domain. Anything outside scope is quoted before work starts — never after.",
      },
      {
        q: "Why don't you list prices on the site?",
        a: "Because scope changes price. A generic price list would either overcharge simple projects or underquote complex ones. The quote generator prices your project, not an average one.",
      },
    ],
  },
  {
    title: "Timelines",
    items: [
      {
        q: "How long does a website take?",
        a: "Single-page sites are usually live within one to two weeks. Multi-page sites typically take two to four weeks. Shopify stores depend on catalogue size — the quote process gives you a timeframe.",
      },
      {
        q: "What do you need from me to start?",
        a: "Your business details, any branding you have, and a short call or message about your goals. We handle the rest, including copy and structure.",
      },
    ],
  },
  {
    title: "Maintenance",
    items: [
      {
        q: "What do maintenance plans include?",
        a: "Every plan includes hosting and your domain. Higher tiers add priority updates, monthly health checks, and ongoing improvements. You never chase a separate hosting bill.",
      },
      {
        q: "Can I manage the site myself?",
        a: "Yes — self-managed handover is available, especially on Shopify builds. Most clients choose a care plan so updates, security, and backups are handled for them.",
      },
    ],
  },
];

export default function FAQPage() {
  const allItems = GROUPS.flatMap((g) => g.items);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allItems.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />

      <section className="relative pt-36 pb-12">
        <div className="mx-auto max-w-[800px] px-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">FAQ</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
              Questions, answered straight
            </h1>
            <p className="mt-5 text-lg text-muted">
              If it's not covered here, message us on WhatsApp — we reply fast.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto flex max-w-[800px] flex-col gap-12 px-5">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-cream">{g.title}</h2>
              <FAQAccordion items={g.items} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection heading="Still deciding?" sub="A ballpark quote takes two minutes and commits you to nothing." />
    </>
  );
}
