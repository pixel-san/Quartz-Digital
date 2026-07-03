import type { Metadata } from "next";
import { QuoteGenerator } from "@/components/QuoteGenerator";

export const metadata: Metadata = {
  title: "Get a Free Quote in 2 Minutes | Quartz Digital",
  description:
    "Answer a few quick questions and get a personalised ballpark price for your website, Shopify store, or AI agent — instantly, with no call required.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% -5%, rgba(0,144,135,0.12), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[800px] px-5">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Free quote</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
            Your price, in two minutes
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            A few quick questions. A personalised ballpark. No calls, no pressure.
          </p>
        </div>
        <QuoteGenerator />
      </div>
    </section>
  );
}
