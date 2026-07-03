export type Service = {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problem: { title: string; body: string };
  solution: { title: string; body: string };
  benefits: { title: string; body: string }[];
  process: { title: string; body: string }[];
  proof: string;
  cta: { heading: string; sub: string };
  comingSoon?: boolean;
  splineHero?: boolean;
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-design",
    nav: "Web Design",
    metaTitle: "Web Design Agency Australia | Conversion-Focused Websites — Quartz Digital",
    metaDescription:
      "Custom, conversion-focused website design for startups and businesses. SEO-ready builds that load fast, rank in Google, and turn visitors into clients. Get a free quote.",
    h1: "Web design that turns visitors into clients",
    intro:
      "Your website is your best salesperson. We design and build fast, SEO-ready websites for startups and businesses — engineered to convert from day one.",
    problem: {
      title: "Most websites look fine and sell nothing",
      body: "Template sites load slowly, bury the call to action, and were never built to rank. Visitors land, scroll once, and leave. You pay for traffic that never converts.",
    },
    solution: {
      title: "Design built around one job: conversion",
      body: "Every Quartz Digital build starts with your customer's decision path. Clear structure, one action per section, and technical SEO baked into the code — not bolted on later.",
    },
    benefits: [
      { title: "Conversion-first layouts", body: "Structure, copy, and CTAs designed around how your customers actually decide." },
      { title: "SEO-ready from launch", body: "Semantic markup, fast Core Web Vitals, and clean architecture Google can rank." },
      { title: "Startup to enterprise", body: "Single-page launches through to multi-page business platforms." },
      { title: "Mobile-first", body: "Designed for the small screen first — where most of your traffic lives." },
    ],
    process: [
      { title: "Discover", body: "We map your customers, offers, and goals." },
      { title: "Design", body: "Wireframes and a visual direction you approve before build." },
      { title: "Build", body: "Fast, semantic, mobile-first development." },
      { title: "Launch and optimise", body: "Analytics wired in, then continuous improvement." },
    ],
    proof:
      "Clients like Tinted Detailer launched with a Quartz Digital site and started converting local traffic within weeks — rated 5 stars on Google.",
    cta: { heading: "Ready for a website that works as hard as you do?", sub: "Get a ballpark price in under two minutes." },
    related: ["seo-services", "branding", "shopify-stores"],
  },
  {
    slug: "seo-services",
    nav: "SEO Services",
    metaTitle: "SEO Services Australia | Local, Technical and On-Page SEO — Quartz Digital",
    metaDescription:
      "On-page, technical, and local SEO systems that grow rankings month after month. Google Business Profile optimisation included. Free SEO quote in two minutes.",
    h1: "SEO systems that compound month after month",
    intro:
      "Ranking is not luck. It is structure, content, and consistency. We build SEO systems — on-page, technical, and local — that keep working while you run your business.",
    problem: {
      title: "Invisible on Google means invisible to buyers",
      body: "If you are not on page one, your competitors take the call. Most agencies sell vague 'SEO packages' with no system behind them and nothing to show after six months.",
    },
    solution: {
      title: "A complete SEO system, not a checklist",
      body: "On-page SEO, technical SEO, local SEO, and Google Business Profile optimisation working together — with monthly optimisation cycles that compound.",
    },
    benefits: [
      { title: "On-page SEO", body: "Keyword-mapped titles, headings, and content structure for every page." },
      { title: "Technical SEO", body: "Speed, crawlability, schema markup, and Core Web Vitals." },
      { title: "Local SEO", body: "Rank in the map pack where nearby customers search." },
      { title: "Google Business Profile", body: "Full optimisation of your profile, reviews, and local signals." },
      { title: "Monthly SEO systems", body: "Ongoing optimisation, reporting, and content cycles." },
    ],
    process: [
      { title: "Audit", body: "We find exactly what is holding your rankings back." },
      { title: "Fix", body: "Technical and on-page issues resolved first." },
      { title: "Build", body: "Content and local signals mapped to real keywords." },
      { title: "Compound", body: "Monthly optimisation that stacks results." },
    ],
    proof:
      "SEO is integrated into every website we ship — clients consistently rate the outcome 5 stars on Google.",
    cta: { heading: "Want to know what is holding your rankings back?", sub: "Start with a free quote — no obligation." },
    related: ["web-design", "social-media-marketing", "ai-receptionists"],
  },
  {
    slug: "branding",
    nav: "Branding",
    metaTitle: "Branding Agency | Logo Systems and Brand Strategy — Quartz Digital",
    metaDescription:
      "Identity design, logo systems, and brand strategy that make your business look established and trustworthy. Book a free strategy call with Quartz Digital.",
    h1: "Branding that makes you the obvious choice",
    intro:
      "People judge in seconds. We build identities — logo systems, visual language, and brand strategy — that make your business look as good as it actually is.",
    problem: {
      title: "A weak brand makes everything else harder",
      body: "Inconsistent logos, clashing colours, and no clear message force you to compete on price. Customers cannot trust what they cannot recognise.",
    },
    solution: {
      title: "One identity, everywhere",
      body: "A complete brand system: logo, colour, typography, and messaging rules — so every touchpoint compounds recognition instead of diluting it.",
    },
    benefits: [
      { title: "Identity design", body: "A visual system that scales from business card to billboard." },
      { title: "Logo systems", body: "Primary, secondary, and icon marks for every context." },
      { title: "Brand strategy", body: "Positioning and messaging that give design a job to do." },
    ],
    process: [
      { title: "Strategy", body: "Positioning, audience, and message first." },
      { title: "Design", body: "Identity concepts built on that strategy." },
      { title: "System", body: "Guidelines so the brand stays consistent everywhere." },
    ],
    proof:
      "Brands we design carry through to websites, social, and print — one consistent system clients describe as 'clean and professional'.",
    cta: { heading: "Ready to look like the market leader?", sub: "Custom scope, custom price — book a free strategy call." },
    related: ["web-design", "social-media-management"],
  },
  {
    slug: "social-media-management",
    nav: "Social Media Management",
    metaTitle: "Social Media Management | Content, Posting and Page Growth — Quartz Digital",
    metaDescription:
      "Done-for-you social media management: content creation, posting, scheduling, and page management that keeps your brand active while you run the business.",
    h1: "Your social channels, managed and growing",
    intro:
      "Consistency wins on social. We handle content, posting, and page management so your brand stays active, professional, and in front of customers every week.",
    problem: {
      title: "Dead pages cost you real customers",
      body: "A page that last posted three months ago tells buyers you might not be in business. But running channels properly is a full-time job you do not have time for.",
    },
    solution: {
      title: "Done-for-you content and management",
      body: "We plan, create, schedule, and post — keeping your pages alive with content that reflects your brand and speaks to your customers.",
    },
    benefits: [
      { title: "Content posting", body: "Consistent, on-brand posts created and published for you." },
      { title: "Page management", body: "Profiles kept sharp, accurate, and responsive." },
      { title: "Scheduling", body: "A content calendar that never misses a week." },
    ],
    process: [
      { title: "Plan", body: "Content pillars matched to your audience." },
      { title: "Create", body: "Posts designed in your brand system." },
      { title: "Publish", body: "Scheduled, posted, and monitored." },
    ],
    proof:
      "We manage pages for Australian businesses that needed presence without the workload — freeing owners to do the work only they can do.",
    cta: { heading: "Want your pages handled properly?", sub: "Custom scope, custom price — book a free strategy call." },
    related: ["social-media-marketing", "branding"],
  },
  {
    slug: "social-media-marketing",
    nav: "Social Media Marketing",
    metaTitle: "Social Media Marketing | Paid + Organic Lead Generation — Quartz Digital",
    metaDescription:
      "Paid and organic social strategy built to generate leads, not just likes. Systems that turn attention into enquiries for your business.",
    h1: "Social marketing that generates leads, not just likes",
    intro:
      "Followers do not pay invoices. We build paid and organic social systems designed around one metric: qualified leads for your business.",
    problem: {
      title: "Engagement without enquiries is a hobby",
      body: "Plenty of businesses post daily and get nothing back. Without strategy, targeting, and a conversion path, social is just noise.",
    },
    solution: {
      title: "Paid + organic, working as one system",
      body: "Organic builds trust; paid buys reach. We combine both with landing paths that turn attention into booked calls and quote requests.",
    },
    benefits: [
      { title: "Paid + organic strategy", body: "One plan across both — no wasted spend." },
      { title: "Lead generation systems", body: "Campaigns wired to forms, WhatsApp, and calls." },
      { title: "Full-funnel tracking", body: "Know exactly which post produced which lead." },
    ],
    process: [
      { title: "Strategy", body: "Audience, offer, and channel plan." },
      { title: "Launch", body: "Campaigns and content go live." },
      { title: "Optimise", body: "Double down on what converts." },
    ],
    proof:
      "Our campaigns connect directly to quote and WhatsApp funnels — every dollar accountable to a lead.",
    cta: { heading: "Ready for social that pays for itself?", sub: "Custom scope, custom price — book a free strategy call." },
    related: ["social-media-management", "seo-services"],
  },
  {
    slug: "ai-receptionists",
    nav: "AI Receptionists",
    metaTitle: "AI Receptionists for Business | 24/7 Call and Enquiry Handling — Quartz Digital",
    metaDescription:
      "AI receptionists that answer enquiries, book appointments, and capture leads for your business 24/7 — so you never miss another customer. Built by Quartz Digital.",
    h1: "An AI receptionist that never misses a customer",
    intro:
      "Every missed call and unanswered enquiry is a customer choosing your competitor. Our AI receptionists answer instantly, book appointments, and capture every lead — day and night.",
    problem: {
      title: "Missed calls are missed revenue",
      body: "You're on the tools, in a meeting, or asleep. The customer rings once, gets no answer, and calls the next business on the list. You never even know they existed.",
    },
    solution: {
      title: "A receptionist trained on your business",
      body: "An AI receptionist that answers enquiries in your voice, qualifies the customer, books the appointment, and sends you the lead — every single time, 24/7.",
    },
    benefits: [
      { title: "24/7 answering", body: "Every enquiry answered instantly — after hours, weekends, holidays." },
      { title: "Appointment booking", body: "Customers get booked straight into your calendar, no back-and-forth." },
      { title: "Lead capture", body: "Every conversation ends with a name and phone number in your inbox." },
      { title: "Human handoff", body: "Complex or urgent matters escalate straight to you." },
    ],
    process: [
      { title: "Train", body: "We load your services, availability, and common questions." },
      { title: "Integrate", body: "Connected to your phone, website, and calendar." },
      { title: "Improve", body: "Conversations reviewed, answers refined every month." },
    ],
    proof:
      "The same automation thinking powers our own quote system — instant, structured, and lead-generating.",
    cta: { heading: "Stop missing customers this month", sub: "Get a ballpark price in under two minutes." },
    splineHero: true,
    related: ["web-design", "seo-services"],
  },
  {
    slug: "shopify-stores",
    nav: "Shopify Stores",
    metaTitle: "Shopify Store Development | Ecommerce Builds That Convert — Quartz Digital",
    metaDescription:
      "Custom Shopify store builds with conversion optimisation baked in. Product pages, checkout flow, and SEO structure engineered to sell. Get a free quote.",
    h1: "Shopify stores engineered to sell",
    intro:
      "An online store is not a catalogue — it is a sales machine. We build Shopify stores where design, speed, and checkout flow all push toward one thing: the order.",
    problem: {
      title: "Traffic without orders is just a hosting bill",
      body: "Slow themes, cluttered product pages, and clunky checkouts kill sales silently. Most store owners never find out why visitors abandon.",
    },
    solution: {
      title: "Conversion-optimised ecommerce builds",
      body: "Clean product architecture, persuasive product pages, fast load times, and a checkout path with zero friction — plus SEO structure so products rank.",
    },
    benefits: [
      { title: "Ecommerce builds", body: "Complete Shopify setup: theme, products, payments, shipping." },
      { title: "Conversion optimisation", body: "Product page and checkout flow designed to lift order rate." },
      { title: "Scalable catalogue", body: "From 15 products to hundreds — structured to grow." },
    ],
    process: [
      { title: "Plan", body: "Catalogue structure and customer journey." },
      { title: "Build", body: "Store, products, and payment flows." },
      { title: "Optimise", body: "Speed, SEO, and conversion tuning." },
    ],
    proof:
      "Our builds pair ecommerce best practice with the same conversion-first system behind every Quartz Digital site.",
    cta: { heading: "Ready to open a store that converts?", sub: "Get a ballpark price in under two minutes." },
    related: ["web-design", "seo-services", "ads-management"],
  },
  {
    slug: "ads-management",
    nav: "Ads Management",
    metaTitle: "Ads Management — Coming Soon | Quartz Digital",
    metaDescription:
      "Quartz Digital ads management is launching soon. Register your interest and be first in line for performance-managed ad campaigns.",
    h1: "Ads management is coming soon",
    intro:
      "Performance-managed ad campaigns are on the way. Leave your details and we will contact you the moment it launches — early clients get priority onboarding.",
    problem: {
      title: "", body: "",
    },
    solution: {
      title: "", body: "",
    },
    benefits: [],
    process: [],
    proof: "",
   
    cta: { heading: "Be first in line", sub: "Register interest and we will reach out before public launch." },
    comingSoon: true,
    related: ["social-media-marketing", "seo-services"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
