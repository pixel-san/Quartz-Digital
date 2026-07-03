import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Quartz Digital",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[85vh] items-center pt-28 pb-16">
      <div className="mx-auto max-w-[600px] px-5 text-center">
        <p className="text-7xl font-bold tracking-tighter text-quartz sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-muted">
          The link may be old or mistyped. Everything worth seeing is one click away.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            Back to Home
          </Link>
          <Link href="/quote" className="btn-outline">
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
