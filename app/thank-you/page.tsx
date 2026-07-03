import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Quartz Digital",
  description: "Your message has been received. Quartz Digital will be in touch shortly.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[85vh] items-center pt-28 pb-16">
      <div className="mx-auto max-w-[600px] px-5 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-quartz/15">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-quartz-bright" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="mt-8 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
          Got it. We'll be in touch.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Expect a reply within one business day. Want to move faster? Book your free strategy call now.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            Book a Call on WhatsApp
          </a>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
