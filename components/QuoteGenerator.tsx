"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/* Types + pricing engine (internal only — never rendered pre-submit)  */
/* ------------------------------------------------------------------ */

type ServiceKey = "website" | "meta-ads" | "smm-branding" | "ecommerce" | "ai-agent";
type SiteType = "single" | "multi";
type SeoChoice = "none" | "basic" | "optimisation";
type SiteMaint = "starter" | "growth" | "scale";
type ShopMaint = "self" | "entry" | "grow" | "enterprise";

type QuoteState = {
  step: string;
  service?: ServiceKey;
  siteType?: SiteType;
  seo?: SeoChoice;
  siteMaint?: SiteMaint;
  products: number;
  shopMaint?: ShopMaint;
  name: string;
  phone: string;
  dial: string;
  email: string;
  submitted: boolean;
};

const PRICES = {
  site: { single: 500, multi: 750 },
  seo: { none: 0, basic: 250, optimisation: 0 },
  seoMonthly: { none: 0, basic: 0, optimisation: 300 },
  siteMaint: { starter: 150, growth: 197, scale: 250 },
  shopBase: 1299,
  shopIncluded: 15,
  shopPerExtra: 20,
  shopMaint: { self: 0, entry: 250, grow: 349, enterprise: 549 },
} as const;

const SITE_MAINT_META: Record<SiteMaint, { label: string; blurb: string }> = {
  starter: { label: "Starter", blurb: "Hosting + domain, essential updates" },
  growth: { label: "Growth", blurb: "Hosting + domain, priority updates, monthly checks" },
  scale: { label: "Scale", blurb: "Hosting + domain, full management, ongoing improvements" },
};

const SHOP_MAINT_META: Record<ShopMaint, { label: string; blurb: string }> = {
  self: { label: "Self-managed", blurb: "You run the store after handover" },
  entry: { label: "Entry", blurb: "Core maintenance and support" },
  grow: { label: "Grow", blurb: "Maintenance + conversion improvements" },
  enterprise: { label: "Enterprise", blurb: "Full management and growth support" },
};

function computeQuote(s: QuoteState): { oneTime: number; monthly: number } | null {
  if (s.service === "website" && s.siteType && s.siteMaint) {
    const seo = s.siteType === "multi" ? s.seo ?? "none" : "none";
    return {
      oneTime: PRICES.site[s.siteType] + PRICES.seo[seo],
      monthly: PRICES.siteMaint[s.siteMaint] + PRICES.seoMonthly[seo],
    };
  }
  if (s.service === "ecommerce" && s.shopMaint) {
    const extra = Math.max(0, s.products - PRICES.shopIncluded) * PRICES.shopPerExtra;
    return {
      oneTime: PRICES.shopBase + extra,
      monthly: PRICES.shopMaint[s.shopMaint],
    };
  }
  return null; // ai-agent → custom quote
}

const round5 = (n: number) => Math.round(n / 5) * 5;
function ballpark(n: number): [number, number] {
  if (n === 0) return [0, 0];
  return [round5(n * 0.9), round5(n * 1.15)];
}

const COUNTRIES = [
  { dial: "+61", label: "AU +61" },
  { dial: "+64", label: "NZ +64" },
  { dial: "+1", label: "US/CA +1" },
  { dial: "+44", label: "UK +44" },
  { dial: "+91", label: "IN +91" },
  { dial: "+92", label: "PK +92" },
  { dial: "+971", label: "AE +971" },
  { dial: "+966", label: "SA +966" },
  { dial: "+65", label: "SG +65" },
  { dial: "+60", label: "MY +60" },
  { dial: "+63", label: "PH +63" },
  { dial: "+62", label: "ID +62" },
  { dial: "+880", label: "BD +880" },
  { dial: "+27", label: "ZA +27" },
  { dial: "+49", label: "DE +49" },
  { dial: "+33", label: "FR +33" },
] as const;

/** AU: accepts 04xx xxx xxx, 4xx xxx xxx, or pasted +61 4xx. Intl: 5–14 digits. */
function validPhone(dial: string, v: string) {
  const digits = v.replace(/\D/g, "");
  if (dial === "+61") {
    return /^0?4\d{8}$/.test(digits) || /^614\d{8}$/.test(digits);
  }
  return /^\d{5,14}$/.test(digits);
}

function normalizePhone(dial: string, v: string) {
  let d = v.replace(/\D/g, "");
  if (dial === "+61") {
    if (d.startsWith("61")) d = d.slice(2);
    if (d.startsWith("0")) d = d.slice(1);
  }
  return `${dial} ${d}`;
}

const validEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

const STORAGE_KEY = "qd_quote_v1";

/* ------------------------------------------------------------------ */
/* UI primitives                                                       */
/* ------------------------------------------------------------------ */

function StepShell({
  title,
  sub,
  children,
  onBack,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
  onBack?: () => void;
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cream"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 text-muted">{sub}</p>}
      <div className="mt-8">{children}</div>
    </motion.div>
  );
}

function OptionCard({
  title,
  blurb,
  onClick,
  selected,
}: {
  title: string;
  blurb?: string;
  onClick: () => void;
  selected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-6 text-left transition-all duration-200 ease-out hover:-translate-y-0.5 ${
        selected
          ? "border-quartz bg-quartz/10"
          : "border-line bg-surface hover:border-white/20"
      }`}
    >
      <span className="block text-lg font-semibold tracking-tight text-cream">{title}</span>
      {blurb && <span className="mt-1.5 block text-sm text-muted">{blurb}</span>}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function QuoteGenerator() {
  const [state, setState] = useState<QuoteState>({
    step: "service",
    products: 15,
    name: "",
    phone: "",
    dial: "+61",
    email: "",
    submitted: false,
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; send?: string }>({});
  const [sending, setSending] = useState(false);
  const started = useRef(false);
  const restored = useRef(false);

  /* Restore + autosave progress */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as QuoteState;
        if (saved && saved.step && !saved.submitted) setState((s) => ({ ...s, ...saved }));
      }
    } catch {}
    restored.current = true;
  }, []);

  useEffect(() => {
    if (!restored.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const set = useCallback((patch: Partial<QuoteState>) => {
    if (!started.current) {
      started.current = true;
      track("quote_start");
    }
    setState((s) => ({ ...s, ...patch }));
  }, []);

  const go = (step: string, patch: Partial<QuoteState> = {}) => {
    set({ ...patch, step });
    track("quote_step", { step });
  };

  const quote = useMemo(() => computeQuote(state), [state]);
  const oneTimeRange = quote ? ballpark(quote.oneTime) : null;
  const monthlyRange = quote ? ballpark(quote.monthly) : null;

  const recommended = useMemo(() => {
    if (state.service === "website") {
      return state.siteType === "multi" && state.seo === "optimisation"
        ? "Multi Page + SEO Optimisation + Growth care plan"
        : "Growth care plan — best balance of support and price";
    }
    if (state.service === "ecommerce") {
      return state.products > 40
        ? "Grow plan — built for larger catalogues"
        : "Entry plan — everything a new store needs";
    }
    return "Custom-scoped solution";
  }, [state]);

  /* Lead submit — emails the lead, then reveals pricing */
  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    const errs: typeof errors = {};
    if (state.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!validPhone(state.dial, state.phone))
      errs.phone =
        state.dial === "+61"
          ? "Enter a valid Australian mobile, e.g. 0466 075 295."
          : "Enter a valid phone number.";
    if (!validEmail(state.email)) errs.email = "Enter a valid email address.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    /* Duplicate/spam guard: one submission per 2 minutes */
    const last = Number(localStorage.getItem("qd_last_submit") || 0);
    if (Date.now() - last < 120_000) {
      set({ submitted: true, step: "reveal" });
      return;
    }

    setSending(true);
    setErrors({});
    const summary = {
      service: state.service,
      siteType: state.siteType,
      seo: state.seo,
      maintenance: state.siteMaint ?? state.shopMaint,
      products: state.service === "ecommerce" ? state.products : undefined,
      estimate: quote
        ? `$${oneTimeRange![0]}–$${oneTimeRange![1]} setup` +
          (quote.monthly ? ` + $${monthlyRange![0]}–$${monthlyRange![1]}/mo` : "")
        : "Custom (AI Agent)",
    };

    try {
      await fetch(SITE.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New quote lead — ${state.name} (${summary.service})`,
          _template: "table",
          name: state.name,
          phone: normalizePhone(state.dial, state.phone),
          email: state.email,
          ...summary,
          submitted_at: new Date().toISOString(),
          source: "Quote Generator",
        }),
      });
    } catch {
      /* Never block the user from their quote — lead retry handled server-side */
    }

    localStorage.setItem("qd_last_submit", String(Date.now()));
    track("quote_submit", { service: state.service ?? "unknown" });
    setSending(false);
    set({ submitted: true, step: "reveal" });
  }

  const resetQuote = () => {
    localStorage.removeItem(STORAGE_KEY);
    started.current = false;
    setState({ step: "service", products: 15, name: "", phone: "", dial: "+61", email: "", submitted: false });
  };

  /* ---------------------------------------------------------------- */

  return (
    <div className="mx-auto w-full max-w-xl">
      <AnimatePresence mode="wait">
        {/* STEP: service selection */}
        {state.step === "service" && (
          <StepShell
            key="service"
            title="What do you need built?"
            sub="Pick one — takes under two minutes."
          >
            <div className="flex flex-col gap-3">
              <OptionCard title="Website Development" blurb="Business and startup websites" onClick={() => go("site-type", { service: "website" })} />
              <OptionCard title="Ecommerce (Shopify)" blurb="Online stores built to sell" onClick={() => go("products", { service: "ecommerce" })} />
              <OptionCard title="AI Receptionist" blurb="24/7 answering, bookings, and lead capture" onClick={() => go("gate", { service: "ai-agent" })} />
              <OptionCard title="Social Media Management + Branding" blurb="Content, identity, and growth" onClick={() => go("strategy-call", { service: "smm-branding" })} />
              <OptionCard title="Meta Ads" blurb="Paid campaigns on Facebook and Instagram" onClick={() => go("meta-ads", { service: "meta-ads" })} />
            </div>
          </StepShell>
        )}

        {/* WEBSITE: single vs multi */}
        {state.step === "site-type" && (
          <StepShell
            key="site-type"
            title="What kind of website?"
            onBack={() => go("service")}
          >
            <div className="flex flex-col gap-3">
              <OptionCard title="Single Page Website" blurb="One focused page — perfect for launches and local services" onClick={() => go("site-maint", { siteType: "single", seo: "none" })} />
              <OptionCard title="Multi Page Website" blurb="Full business site — services, about, contact and more" onClick={() => go("site-seo", { siteType: "multi" })} />
            </div>
          </StepShell>
        )}

        {/* WEBSITE: SEO (multi only) */}
        {state.step === "site-seo" && (
          <StepShell
            key="site-seo"
            title="Add SEO to your build?"
            sub="How customers will actually find you on Google."
            onBack={() => go("site-type")}
          >
            <div className="flex flex-col gap-3">
              <OptionCard title="No SEO setup" blurb="Just the website" onClick={() => go("site-maint", { seo: "none" })} />
              <OptionCard title="Basic SEO setup" blurb="On-page foundations done right at launch" onClick={() => go("site-maint", { seo: "basic" })} />
              <OptionCard title="SEO Optimisation" blurb="Google Business Profile + ongoing monthly optimisation" onClick={() => go("site-maint", { seo: "optimisation" })} />
            </div>
          </StepShell>
        )}

        {/* WEBSITE: maintenance */}
        {state.step === "site-maint" && (
          <StepShell
            key="site-maint"
            title="Choose a care plan"
            sub="Every plan includes hosting and your domain."
            onBack={() => go(state.siteType === "multi" ? "site-seo" : "site-type")}
          >
            <div className="flex flex-col gap-3">
              {(Object.keys(SITE_MAINT_META) as SiteMaint[]).map((k) => (
                <OptionCard
                  key={k}
                  title={SITE_MAINT_META[k].label}
                  blurb={SITE_MAINT_META[k].blurb}
                  onClick={() => go("gate", { siteMaint: k })}
                />
              ))}
            </div>
          </StepShell>
        )}

        {/* ECOMMERCE: product count */}
        {state.step === "products" && (
          <StepShell
            key="products"
            title="How many products?"
            sub="Drag the slider — a rough number is fine."
            onBack={() => go("service")}
          >
            <div className="rounded-2xl border border-line bg-surface p-8">
              <p className="mb-8 text-center text-4xl font-bold tracking-tight text-cream">
                {state.products}
                <span className="ml-2 text-base font-normal text-muted">products</span>
              </p>
              <Slider
                min={1}
                max={100}
                step={1}
                value={[state.products]}
                onValueChange={(v) => set({ products: v[0] })}
                showTooltip
                tooltipContent={(v) => `${v} products`}
              />
              <div className="mt-3 flex justify-between text-xs text-muted">
                <span>1</span>
                <span>100+</span>
              </div>
            </div>
            <button
              onClick={() => go("shop-maint")}
              className="mt-6 w-full rounded-full bg-cream py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Continue
            </button>
          </StepShell>
        )}

        {/* ECOMMERCE: maintenance */}
        {state.step === "shop-maint" && (
          <StepShell
            key="shop-maint"
            title="How should the store be managed?"
            onBack={() => go("products")}
          >
            <div className="flex flex-col gap-3">
              {(Object.keys(SHOP_MAINT_META) as ShopMaint[]).map((k) => (
                <OptionCard
                  key={k}
                  title={SHOP_MAINT_META[k].label}
                  blurb={SHOP_MAINT_META[k].blurb}
                  onClick={() => go("gate", { shopMaint: k })}
                />
              ))}
            </div>
          </StepShell>
        )}

        {/* META ADS: unavailable */}
        {state.step === "meta-ads" && (
          <StepShell
            key="meta-ads"
            title="Meta Ads is temporarily unavailable"
            sub="We're onboarding a limited number of ad clients soon. Get in touch and we'll reach out first."
            onBack={() => go("service")}
          >
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="w-full rounded-full bg-cream py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white">
                Contact for more information
              </Link>
              <button onClick={() => go("service")} className="btn-outline justify-center">
                Choose another service
              </button>
            </div>
          </StepShell>
        )}

        {/* SMM + BRANDING: strategy call */}
        {state.step === "strategy-call" && (
          <StepShell
            key="strategy-call"
            title="This one deserves a conversation"
            sub="Social media and branding are scoped around your business — audience, channels, and goals. That's why pricing is custom. A free strategy call takes 15 minutes."
            onBack={() => go("service")}
          >
            <div className="flex flex-col gap-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "quote_strategy" })}
                className="w-full rounded-full bg-cream py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white"
              >
                Book a free strategy call
              </a>
              <Link href="/contact" className="btn-outline justify-center">
                Send an enquiry instead
              </Link>
            </div>
          </StepShell>
        )}

        {/* GATE: blurred price + contact form */}
        {state.step === "gate" && (
          <StepShell
            key="gate"
            title="Your quote is ready"
            sub="Unlock your ballpark price — no spam, no lock-in."
            onBack={() =>
              go(
                state.service === "website"
                  ? "site-maint"
                  : state.service === "ecommerce"
                    ? "shop-maint"
                    : "service"
              )
            }
          >
            {/* Blurred figure */}
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Your estimate</p>
              <p aria-hidden="true" className="price-blur mt-3 text-5xl font-bold tracking-tight text-cream">
                {quote ? `$${quote.oneTime + 137}` : "$2,450"}
                {quote && quote.monthly > 0 && (
                  <span className="text-2xl"> + ${quote.monthly + 23}/mo</span>
                )}
              </p>
              <p className="mt-3 text-sm text-muted">Enter your details below to view it instantly.</p>
            </div>

            <form onSubmit={submitLead} className="mt-6 flex flex-col gap-4" noValidate>
              <div>
                <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-cream">
                  Name
                </label>
                <input
                  id="q-name"
                  type="text"
                  autoComplete="name"
                  value={state.name}
                  onChange={(e) => set({ name: e.target.value })}
                  className="w-full rounded-xl border border-line bg-raised px-4 py-3 text-cream placeholder:text-muted/60"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium text-cream">
                  Phone
                </label>
                <div className="flex gap-2">
                  <select
                    aria-label="Country code"
                    value={state.dial}
                    onChange={(e) => set({ dial: e.target.value })}
                    className="w-[110px] shrink-0 rounded-xl border border-line bg-raised px-2.5 py-3 text-sm text-cream"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.dial} value={c.dial}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="q-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    value={state.phone}
                    onChange={(e) => set({ phone: e.target.value })}
                    className="w-full rounded-xl border border-line bg-raised px-4 py-3 text-cream placeholder:text-muted/60"
                    placeholder={state.dial === "+61" ? "0466 075 295" : "Phone number"}
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-cream">
                  Email
                </label>
                <input
                  id="q-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={(e) => set({ email: e.target.value })}
                  className="w-full rounded-xl border border-line bg-raised px-4 py-3 text-cream placeholder:text-muted/60"
                  placeholder="you@business.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-full bg-quartz py-4 text-base font-semibold text-white transition-colors hover:bg-quartz-bright disabled:opacity-60"
              >
                {sending ? "Unlocking…" : "View Quote Now"}
              </button>
              <p className="text-center text-xs text-muted">
                Your details stay with Quartz Digital. No third parties, ever.
              </p>
            </form>
          </StepShell>
        )}

        {/* REVEAL */}
        {state.step === "reveal" && state.submitted && (
          <StepShell key="reveal" title={`Thanks, ${state.name.split(" ")[0] || "there"} — here's your ballpark`}>
            <div className="rounded-3xl border border-quartz/40 bg-surface p-8 text-center shadow-glowsoft">
              {quote ? (
                <>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">Estimated range</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-cream sm:text-5xl">
                    ${oneTimeRange![0].toLocaleString()}–${oneTimeRange![1].toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-muted">one-time setup</p>
                  {quote.monthly > 0 && (
                    <>
                      <p className="mt-5 text-2xl font-bold tracking-tight text-cream">
                        ${monthlyRange![0]}–${monthlyRange![1]}/month
                      </p>
                      <p className="mt-1 text-sm text-muted">ongoing (hosting, domain and care included)</p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">AI Receptionist</p>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-cream">
                    Custom-scoped quote
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    AI receptionists are priced on scope. We&apos;ll send your exact quote within 24 hours.
                  </p>
                </>
              )}
              <div className="mt-6 rounded-2xl bg-raised p-4 text-left">
                <p className="text-xs uppercase tracking-widest text-quartz-bright">Recommended</p>
                <p className="mt-1 text-sm text-cream">{recommended}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?from=quote"
                className="flex-1 rounded-full bg-cream py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white"
              >
                Get Exact Quote
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "quote_reveal" })}
                className="btn-outline flex-1 justify-center"
              >
                Book Call
              </a>
            </div>
            <button onClick={resetQuote} className="mt-6 w-full text-center text-sm text-muted transition-colors hover:text-cream">
              Start a new quote
            </button>
          </StepShell>
        )}
      </AnimatePresence>
    </div>
  );
}
