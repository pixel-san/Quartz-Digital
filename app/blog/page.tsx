import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Growth, SEO and Web Design Insights — Quartz Digital",
  description:
    "Practical, no-fluff guides on web design, SEO, and digital growth for Australian businesses — the same thinking we use for clients.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Growth, SEO and Web Design Insights — Quartz Digital", description:
    "Practical, no-fluff guides on web design, SEO, and digital growth for Australian businesses — the same thinking we use for clients.", url: "/blog", images: ["/og.jpg"] },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-[900px] px-5">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
            Straight answers on web design and SEO
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Practical, no-fluff guides — the same thinking we use to build for clients.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col divide-y divide-line border-t border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-8 transition-colors"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span className="mx-2">·</span>
                  {post.readingMinutes} min read
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-cream transition-colors group-hover:text-quartz-bright">
                  {post.title}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-quartz-bright">
                  Read the article
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
                    <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <Link
            href="/quote"
            className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            Get Free Quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
