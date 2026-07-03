"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const setField = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (values.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Enter a valid email.";
    if (values.message.trim().length < 5) errs.message = "Tell us a little about your project.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);
    try {
      await fetch(SITE.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Contact form — ${values.name}`,
          _template: "table",
          ...values,
          source: "Contact Page",
          submitted_at: new Date().toISOString(),
        }),
      });
    } catch {}
    track("contact_submit");
    setSending(false);
    router.push("/thank-you");
  }

  const input =
    "w-full rounded-xl border border-line bg-raised px-4 py-3 text-cream placeholder:text-muted/60";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-cream">Name</label>
        <input id="c-name" className={input} autoComplete="name" value={values.name} onChange={(e) => setField("name", e.target.value)} placeholder="Your name" aria-invalid={!!errors.name} />
        {errors.name && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-cream">Email</label>
        <input id="c-email" type="email" className={input} autoComplete="email" value={values.email} onChange={(e) => setField("email", e.target.value)} placeholder="you@business.com" aria-invalid={!!errors.email} />
        {errors.email && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-cream">
          Phone <span className="text-muted">(optional)</span>
        </label>
        <input id="c-phone" type="tel" className={input} autoComplete="tel" value={values.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="+61 4xx xxx xxx" />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-cream">What do you need?</label>
        <textarea id="c-message" rows={4} className={input} value={values.message} onChange={(e) => setField("message", e.target.value)} placeholder="A few sentences about your project" aria-invalid={!!errors.message} />
        {errors.message && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-2 rounded-full bg-cream py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
