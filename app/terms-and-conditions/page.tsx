import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Quartz Digital",
  description: "The terms that govern Quartz Digital's website and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-[720px] px-5">
        <h1 className="text-4xl font-bold tracking-tighter text-cream">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
          <div>
            <h2 className="text-lg font-semibold text-cream">Quotes and estimates</h2>
            <p className="mt-2">
              Ballpark figures produced by our quote generator are estimates only. Final pricing is confirmed in a written proposal after scoping. Estimates are valid for 30 days.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Projects and payment</h2>
            <p className="mt-2">
              Project scope, deliverables, timelines, and payment schedules are set out per engagement. Work begins on receipt of the agreed deposit. Ongoing plans (hosting, maintenance, SEO) are billed monthly and can be cancelled with 30 days notice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Ownership</h2>
            <p className="mt-2">
              On full payment, you own your website, content, and domain. Third-party licences (fonts, plugins, platforms such as Shopify) remain subject to their own terms.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Results</h2>
            <p className="mt-2">
              We build to best practice and report honestly. Search rankings and marketing outcomes depend on factors outside any agency's control, so specific positions or revenue figures are never guaranteed.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Liability</h2>
            <p className="mt-2">
              To the extent permitted by Australian law, our liability for any claim is limited to the fees paid for the service that gave rise to the claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
