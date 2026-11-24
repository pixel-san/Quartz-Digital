import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: ["/og.jpg"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = SERVICES.filter((s) => post.relatedServices.includes(s.slug));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: { "@type": "ImageObject", url: `${SITE.url}/logo.jpg` },
          },
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <article className="pt-36 pb-16">
        <div className="mx-auto max-w-[760px] px-5">
          <Reveal>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All articles
            </Link>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="mx-2 text-muted">·</span>
              {post.readingMinutes} min read
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.05} className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-300">
            {post.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="mt-10 space-y-10">
            {post.sections.map((s, i) => (
              <Reveal key={s.heading} delay={0.05 + i * 0.03}>
                <h2 className="text-2xl font-bold tracking-tight text-cream">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-300">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {post.faq.length > 0 && (
            <Reveal delay={0.1} className="mt-14">
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-cream">
                Frequently asked
              </h2>
              <FAQAccordion items={post.faq} />
            </Reveal>
          )}

          {related.length > 0 && (
            <Reveal delay={0.12} className="mt-14">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Related services
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white"
                  >
                    {s.nav}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </article>

      <CTASection heading={post.cta.heading} sub={post.cta.sub} />
    </>
  );
}
