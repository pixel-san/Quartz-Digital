import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Blog | Growth, SEO and Web Design Insights — Quartz Digital",
  description:
    "Practical guides on web design, SEO, and digital growth from Quartz Digital. First articles landing soon.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-[800px] px-5">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Blog</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
          Insights are on the way
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          We're writing practical, no-fluff guides on web design, SEO, and growth — the same systems we use for clients. In the meantime, explore what we do:
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {SERVICES.filter((s) => !s.comingSoon).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-full border border-line px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:border-quartz/50 hover:text-white"
            >
              {s.nav}
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/quote"
            className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
