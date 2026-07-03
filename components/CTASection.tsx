import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  heading = "Ready to build something real?",
  sub = "Get a ballpark price in under two minutes — no calls, no pressure.",
  primaryHref = "/quote",
  primaryLabel = "Get Free Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  heading?: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-t border-line bg-surface py-24">
      <div className="mx-auto max-w-[800px] px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tighter text-cream sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">{sub}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline">
            {secondaryLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
