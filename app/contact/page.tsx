import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Quartz Digital | WhatsApp, Phone or Message",
  description:
    "Talk to Quartz Digital about your website, SEO, or growth project. Message us, call +61 466 075 295, or chat instantly on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative pt-36 pb-24">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-quartz-bright">Contact</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-cream sm:text-5xl">
            Let's talk about your project
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Message us and we'll reply within one business day. In a hurry? WhatsApp is the fastest way to reach us.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-quartz/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009087]/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-quartz-bright" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-cream">WhatsApp</span>
                <span className="block text-sm text-muted">Instant reply, most days</span>
              </span>
            </a>

            <a
              href={SITE.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-quartz/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009087]/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-quartz-bright" fill="none" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-cream">{SITE.phone}</span>
                <span className="block text-sm text-muted">Call or text anytime</span>
              </span>
            </a>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-quartz/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009087]/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-quartz-bright" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-cream">Book a strategy call</span>
                <span className="block text-sm text-muted">Free, 15 minutes, no obligation</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-surface p-8">
            <h2 className="text-xl font-semibold tracking-tight text-cream">Send a message</h2>
            <p className="mb-6 mt-1 text-sm text-muted">We reply within one business day.</p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
