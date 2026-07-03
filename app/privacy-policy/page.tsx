import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Quartz Digital",
  description: "How Quartz Digital collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-[720px] px-5">
        <h1 className="text-4xl font-bold tracking-tighter text-cream">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
          <div>
            <h2 className="text-lg font-semibold text-cream">What we collect</h2>
            <p className="mt-2">
              When you request a quote or contact us, we collect the details you provide: your name, phone number, email address, and information about your project. We also use analytics tools to understand how visitors use this website.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">How we use it</h2>
            <p className="mt-2">
              Your information is used to respond to your enquiry, prepare your quote, and deliver services you engage us for. We may contact you about your enquiry by phone, email, or WhatsApp. We do not sell or share your personal information with third parties for marketing.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Storage and security</h2>
            <p className="mt-2">
              Enquiry data is transmitted securely and stored only as long as needed to serve you. Reasonable technical measures protect it from unauthorised access.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Analytics and cookies</h2>
            <p className="mt-2">
              We use Google Analytics to measure site performance and improve the experience. This data is aggregated and does not personally identify you.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Your rights</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of your personal information at any time by contacting us at {SITE.phone} or via WhatsApp. We handle personal information in accordance with the Australian Privacy Principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
