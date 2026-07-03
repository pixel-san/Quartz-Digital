# Quartz Digital — Website

Production Next.js 14 site. Dark, Apple/Stripe-style, conversion-first, SEO-optimised.

## Run it

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
```

## Deploy (recommended: Vercel)

1. Push this folder to a GitHub repo.
2. Import it at vercel.com — zero config needed.
3. Point your domain (quartzdigital.com.au) at Vercel.
4. If your live domain differs, update `SITE.url` in `lib/site.ts` (drives canonicals, sitemap, schema).

## One-time setup checklist

- **Lead emails (quote generator + contact form):** leads are sent to `mohidishtiaq@gmail.com` via FormSubmit. The FIRST submission triggers a confirmation email from FormSubmit — click "Activate" in it once, and all future leads arrive automatically. To change the inbox, edit `leadEndpoint` in `lib/site.ts`.
- **Google Analytics:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GA_ID`. Events fire automatically: `quote_start`, `quote_step`, `quote_submit`, `contact_submit`, `whatsapp_click`, `phone_click`.
- **Logo:** `public/logo.jpg` (black logo on cream chip in the nav). Replace the file to update everywhere.
- **Google Search Console:** after deploy, submit `https://yourdomain/sitemap.xml`.

## Where things live

- `lib/site.ts` — phone, WhatsApp, reviews, nav, brand line (edit once, updates sitewide)
- `lib/services.ts` — all 8 service pages' content + metadata
- `lib/areas.ts` — city SEO pages (add a new city = add one object, page + sitemap update automatically)
- `components/QuoteGenerator.tsx` — pricing rules and quote flow (prices never render before form submit; reveal shows ±ballpark range)
- `app/sitemap.ts`, `app/robots.ts` — generated automatically

## Quote generator rules (as built)

- Prices hidden until name + valid AU mobile (+61 4xx) submitted; blurred decoy figure shown before.
- Lead is emailed BEFORE the price reveals. Ballpark = −10% to +15% of the internal figure, never the exact price.
- Website: single ($500) / multi ($750) → SEO step (multi only: none / basic $250 / optimisation $300 per month) → care plans ($150/$197/$250 per month, hosting + domain included).
- Shopify: slider — $1299 up to 15 products, +$20 per extra → Self-managed / Entry $250 / Grow $349 / Enterprise $549 per month.
- Meta Ads: temporarily unavailable → contact CTA. SMM + Branding: free strategy call. AI Agent: straight to gate, custom quote.
- Progress auto-saves (localStorage), duplicate submissions throttled, inline validation errors.
