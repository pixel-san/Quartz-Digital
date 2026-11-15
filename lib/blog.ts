export type BlogSection = { heading: string; body: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  intro: string[];
  sections: BlogSection[];
  faq: { q: string; a: string }[];
  relatedServices: string[]; // service slugs
  cta: { heading: string; sub: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-australia",
    title: "How Much Does a Website Cost in Australia? (2026 Pricing Guide)",
    metaTitle: "How Much Does a Website Cost in Australia? 2026 Pricing Guide — Quartz Digital",
    metaDescription:
      "A straight answer on Australian website costs in 2026: single-page sites, multi-page business sites, Shopify stores, and what actually drives the price up or down.",
    excerpt:
      "A straight answer on what websites actually cost in Australia right now — no vague 'it depends' non-answers.",
    publishedAt: "2026-08-04",
    readingMinutes: 6,
    intro: [
      "Ask five agencies what a website costs and you'll get five different non-answers. Not because they're hiding something — because the honest answer genuinely depends on a handful of specific factors. This guide breaks those factors down so you can budget accurately before you ever ask for a quote.",
    ],
    sections: [
      {
        heading: "The three things that actually set the price",
        body: [
          "Page count is the biggest lever. A single, focused landing page for a local service business costs far less than a multi-page site with a services section, about page, and blog, simply because there's less to design, write, and build.",
          "SEO scope is the second lever. A site with no SEO work is just a digital brochure. Add on-page SEO — keyword-mapped titles, structured headings, proper metadata — and the price rises to reflect the extra strategy and content work involved.",
          "Ongoing care is the third and most overlooked cost. Every live website needs hosting, a domain, security updates, and someone to fix it if something breaks. This is usually a small monthly fee, not a one-off cost, and it's worth checking whether a quote includes it or hides it as an add-on later.",
        ],
      },
      {
        heading: "Realistic price ranges for 2026",
        body: [
          "A single-page website for a local business — a tradie, a small clinic, a personal brand — typically sits in the low hundreds as a one-time build cost, plus a modest monthly care plan that covers hosting and domain.",
          "A multi-page business website, with several service pages, an about page, and proper on-page SEO, costs more upfront because there's more content strategy and structure involved — but it's the right investment for any business planning to grow past word-of-mouth.",
          "Ecommerce is priced differently again, usually scaling with the number of products, since more products mean more product pages, more imagery, and more structure to get right.",
        ],
      },
      {
        heading: "Red flags that mean you're about to overpay — or underpay",
        body: [
          "A quote with no mention of SEO foundations at all is a red flag: you'll be paying again in six months to fix a site that was never built to be found on Google.",
          "A quote that's suspiciously cheap and includes 'unlimited pages' is usually a template with your logo dropped on top, not a custom build designed around how your customers actually decide.",
          "The safest approach is a quote that separates the one-time build cost from the ongoing monthly cost clearly, so you know exactly what you're paying for and when.",
        ],
      },
    ],
    faq: [
      {
        q: "Is a cheaper website ever a false economy?",
        a: "Often, yes. A site built without proper structure or SEO foundations usually needs a costly rebuild within a year or two once a business realises it isn't generating any enquiries.",
      },
      {
        q: "Should I pay monthly or just once?",
        a: "Expect both: a one-time cost for the build itself, and a smaller ongoing monthly cost for hosting, your domain, and maintenance. Any business planning to keep the site live long-term should budget for this from day one.",
      },
      {
        q: "How do I get an exact price for my business?",
        a: "The fastest way is a structured quote tool that asks about your specific scope — page count, SEO needs, and care plan — rather than a generic call. It removes the guesswork on both sides.",
      },
    ],
    relatedServices: ["web-design", "seo-services"],
    cta: {
      heading: "Get your exact price in two minutes",
      sub: "No call required — answer a few questions and see your ballpark range instantly.",
    },
  },
  {
    slug: "why-isnt-my-business-showing-up-on-google-maps",
    title: "Why Isn't My Business Showing Up on Google Maps?",
    metaTitle: "Why Isn't My Business Showing Up on Google Maps? — Quartz Digital",
    metaDescription:
      "The most common reasons Australian businesses don't appear in the Google Maps 'map pack' — and the exact fixes for each one.",
    excerpt:
      "The map pack is where most local customers actually click. Here's why your business might be missing from it.",
    publishedAt: "2026-08-18",
    readingMinutes: 5,
    intro: [
      "When someone searches \"plumber near me\" or \"cafe in [suburb]\", the first thing they see isn't a list of website links — it's the map pack, a small cluster of three local businesses with a map, ratings, and a phone number. If you're not in it, you're invisible to a huge share of local search traffic. Here's why that happens and how to fix it.",
    ],
    sections: [
      {
        heading: "Your Google Business Profile isn't fully set up",
        body: [
          "The single biggest reason businesses miss the map pack is an incomplete or unverified Google Business Profile. Missing categories, no photos, an unverified address, or inconsistent opening hours all tell Google your listing isn't trustworthy enough to rank.",
          "Fix this first: claim and verify your profile, fill in every available field, add real photos, and make sure your business category is as specific as possible — 'Mobile car detailing service' ranks better for detailing searches than the generic 'Automotive service'.",
        ],
      },
      {
        heading: "Your business name, address, and phone number don't match everywhere",
        body: [
          "Google cross-checks your business details against other places they appear online — your website, directory listings, social profiles. If your phone number on Facebook doesn't match the one on your website, that inconsistency quietly erodes trust in the eyes of Google's ranking systems.",
          "Audit every place your business is listed and make sure the name, address, and phone number are identical, character for character, everywhere.",
        ],
      },
      {
        heading: "You don't have enough reviews — or recent ones",
        body: [
          "Review count and review recency are both ranking factors. A business with three reviews from two years ago looks less active — and less trustworthy — than one with twenty reviews, several from the last month.",
          "Ask every satisfied customer for a review at the moment they're happiest, right after the job is done or the product delivered. A simple text message with a direct link removes almost all the friction.",
        ],
      },
      {
        heading: "Your website doesn't reinforce your location",
        body: [
          "Google also looks at your website itself for local relevance — your suburb, service area, and local schema markup all feed into how confidently Google can place you on the map for local searches.",
          "A website with proper local SEO foundations — structured address data, service-area pages, and location mentions in the actual content, not just the footer — measurably helps your map pack visibility over time.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does it take to start showing up in the map pack?",
        a: "A fully optimised Google Business Profile can show early improvements within weeks, but consistent map pack rankings against established competitors usually take a few months of sustained optimisation and review growth.",
      },
      {
        q: "Do I need a website to rank in the map pack?",
        a: "Not strictly, but businesses with a well-built, locally-optimised website consistently outrank those without one, because Google has more trustworthy signals to confirm your legitimacy and location.",
      },
      {
        q: "Can I fix this myself?",
        a: "The Google Business Profile basics — categories, photos, hours — are worth doing yourself immediately. The website-side local SEO work benefits from being built in properly from the start rather than patched on afterwards.",
      },
    ],
    relatedServices: ["seo-services", "web-design"],
    cta: {
      heading: "Want your map pack fixed properly?",
      sub: "See a ballpark price for a full local SEO system in under two minutes.",
    },
  },
  {
    slug: "website-vs-facebook-page-for-tradies",
    title: "Website vs Facebook Page: What Actually Gets Tradies More Customers?",
    metaTitle: "Website vs Facebook Page for Tradies — What Actually Gets You More Customers",
    metaDescription:
      "A straight comparison of running your trade business on a Facebook page versus a proper website — and why relying on one alone is costing you jobs.",
    excerpt:
      "A lot of tradies run their entire business off a Facebook page. Here's what that's actually costing you.",
    publishedAt: "2026-09-01",
    readingMinutes: 5,
    intro: [
      "It's a genuinely common setup: a tradie posts finished jobs to a Facebook page, gets a few likes, and picks up work through comments and shares. It works, to a point. But it also quietly caps how much work you can win — here's exactly where a Facebook-only presence falls short, and where it still earns its place.",
    ],
    sections: [
      {
        heading: "Where a Facebook page genuinely wins",
        body: [
          "Facebook is fast, free, and good at showing off finished work to people who already know you or found you through a shared post. For word-of-mouth and repeat local trust, it does a real job.",
          "It's also low-effort to update — a quick photo after a job takes thirty seconds, which matters when you're busy on the tools all day.",
        ],
      },
      {
        heading: "Where it costs you jobs without you realising",
        body: [
          "Someone searching \"electrician [suburb]\" on Google rarely finds a Facebook page — Google overwhelmingly surfaces websites and map pack listings, not social profiles. If you only have a Facebook page, you're invisible to that entire pool of active searchers who don't already know your name.",
          "A Facebook page also can't be structured the way a customer needs when they're comparing options: clear pricing indicators, a proper services breakdown, before-and-after galleries organised by job type, and a one-tap way to request a quote. Scrolling through a feed to find that information is friction most people won't push through.",
          "It also puts your entire business presence at the mercy of a platform you don't control. Algorithm changes, account restrictions, or a redesign can bury years of posts overnight — something that simply can't happen to a website you own.",
        ],
      },
      {
        heading: "The setup that actually wins the most work",
        body: [
          "The tradies getting the most consistent leads run both: a website that captures Google search traffic and looks credible the instant someone lands on it, plus a Facebook page for ongoing local visibility and word-of-mouth reach.",
          "The website doesn't need to be complicated. A single, well-built page with your services, service area, real photos, and a clear way to get a quote outperforms a ten-page site that never gets finished — and it's a fraction of the cost most tradies assume.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I just link my Facebook page from Google Business Profile instead of a website?",
        a: "You can, but it consistently converts worse. Google Business Profile clicks that land on a proper website see meaningfully higher enquiry rates than ones that land on a social feed, because a website can present exactly what a comparing customer needs to see.",
      },
      {
        q: "Do I need to choose between a website and Facebook?",
        a: "No — they solve different problems. Facebook builds local trust and repeat visibility; a website captures active search demand and converts it. Most trade businesses need both eventually.",
      },
      {
        q: "How fast can a tradie website actually go live?",
        a: "A single, focused page can realistically be live within one to two weeks once your services and photos are ready to go.",
      },
    ],
    relatedServices: ["web-design", "social-media-management"],
    cta: {
      heading: "Ready to stop losing jobs to Google?",
      sub: "Get a ballpark price for a single-page website in under two minutes.",
    },
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
