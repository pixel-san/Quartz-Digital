import { SUBURB_PAGES } from "./suburbs";
import { MORE_SUBURB_PAGES } from "./suburbs-more";
import { TOPIC_PAGES } from "./topics";
import { NEW_SUBURB_PAGES } from "./suburbs-new";

export type AreaPage = {
  slug: string;
  city: string;
  service: "Web Design" | "SEO";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  /** true for suburb pages (Tarneit and surrounds) */
  suburb?: boolean;
  /** true for topic pages (not tied to a place) */
  topic?: boolean;
  /** overrides the small label above the H1 */
  eyebrow?: string;
  /** slugs of related pages (services, topics, areas) shown as links */
  related?: string[];
  /** grouping for the service-areas page */
  region?: string;
  /** longer local copy shown under the main sections */
  extra?: string[];
  faqs?: { q: string; a: string }[];
  /** slugs of nearby suburb pages to link to */
  nearby?: string[];
};

const CITY_PAGES: AreaPage[] = [
  {
    slug: "web-design-melbourne",
    city: "Melbourne",
    service: "Web Design",
    metaTitle: "Web Design Melbourne | Quartz Digital",
    metaDescription:
      "Melbourne web design that ranks and converts. Fast, SEO-ready websites for Melbourne businesses — from tradies to startups. Get a free quote today.",
    h1: "Web design Melbourne businesses trust to convert",
    intro:
      "Melbourne is one of the most competitive markets in Australia. A template site will not cut it. We build fast, conversion-focused websites for Melbourne businesses that need enquiries, not just a web presence.",
    sections: [
      {
        title: "Built for how Melbourne customers buy",
        body: "From Brunswick cafes to Southbank consultancies, Melbourne buyers research hard before they call. Your site needs to answer their questions fast, prove credibility, and make contacting you effortless — on mobile first.",
      },
      {
        title: "Local advantage, national quality",
        body: "You get an Australian team that understands local search behaviour, Australian phone and booking habits, and what Melbourne customers expect from a professional business — with build quality that competes anywhere.",
      },
      {
        title: "SEO-ready from the first line of code",
        body: "Every Melbourne build ships with clean structure, fast Core Web Vitals, and local SEO foundations — so 'near me' searches in your suburb actually find you.",
      },
    ],
  },
  {
    slug: "seo-melbourne",
    city: "Melbourne",
    service: "SEO",
    metaTitle: "SEO Melbourne | Local SEO and Rankings | Quartz Digital",
    metaDescription:
      "Melbourne SEO services that put your business in the map pack and on page one. Local SEO, Google Business Profile, and monthly optimisation. Free quote.",
    h1: "SEO that puts Melbourne businesses on page one",
    intro:
      "Thousands of Melbourne businesses compete for the same searches every day. We build local SEO systems — map pack, Google Business Profile, and on-page structure — that win the clicks that become customers.",
    sections: [
      {
        title: "Win the Melbourne map pack",
        body: "Most local buyers never scroll past the top three map results. We optimise your Google Business Profile, reviews, and local citations so Melbourne searchers see you first.",
      },
      {
        title: "Suburb-level targeting",
        body: "Ranking 'in Melbourne' is not enough. We structure content around the suburbs and service areas you actually work in, capturing high-intent searches your competitors ignore.",
      },
      {
        title: "Monthly systems, compounding results",
        body: "SEO is not a one-off fix. Monthly optimisation cycles — content, technical health, and local signals — stack month after month while competitors stand still.",
      },
    ],
  },
  {
    slug: "web-design-sydney",
    city: "Sydney",
    service: "Web Design",
    metaTitle: "Web Design Sydney | Quartz Digital",
    metaDescription:
      "Sydney web design built to convert. Premium, fast, SEO-ready websites for Sydney businesses and startups. Get a ballpark quote in two minutes.",
    h1: "Web design for Sydney businesses that expect results",
    intro:
      "Sydney customers judge quickly and compare constantly. We build premium, fast-loading websites for Sydney businesses — designed to convert the visitor before they open a competitor's tab.",
    sections: [
      {
        title: "Premium look, measurable outcomes",
        body: "In Australia's biggest market, presentation is the price of entry. We pair clean, high-end design with conversion structure — clear offers, single CTAs, and friction-free contact paths.",
      },
      {
        title: "Fast on every device",
        body: "Sydney commuters browse on mobile between stations. Our builds are mobile-first and Core Web Vitals safe, so slow load times never cost you a lead.",
      },
      {
        title: "Ready to rank in Sydney search",
        body: "Semantic structure, schema markup, and local SEO foundations are built in — so your site starts earning Sydney search traffic from launch.",
      },
    ],
  },
  {
    slug: "seo-sydney",
    city: "Sydney",
    service: "SEO",
    metaTitle: "SEO Sydney | Rank Higher, Get More Leads — Quartz Digital",
    metaDescription:
      "Sydney SEO services: technical SEO, local SEO, and Google Business Profile optimisation that get Sydney businesses found and chosen. Free SEO quote.",
    h1: "SEO built for Sydney's toughest search markets",
    intro:
      "Sydney has the deepest competition in Australian search. Winning here takes more than keywords — it takes technical health, authority, and local signals working together. That is the system we build.",
    sections: [
      {
        title: "Compete where it is hardest",
        body: "Sydney SERPs are crowded with agencies, franchises, and national brands. We find the keyword gaps with real buying intent and build pages that earn those positions.",
      },
      {
        title: "Local SEO for Greater Sydney",
        body: "From the Inner West to the Northern Beaches, we structure your local presence — Google Business Profile, reviews, and service-area pages — around where your customers actually are.",
      },
      {
        title: "Transparent, monthly progress",
        body: "Clear reporting on rankings, traffic, and leads. You always know what was done, why, and what it produced.",
      },
    ],
  },
  {
    slug: "web-design-brisbane",
    city: "Brisbane",
    service: "Web Design",
    metaTitle: "Web Design Brisbane | Quartz Digital",
    metaDescription:
      "Brisbane web design for growing businesses. Conversion-focused, SEO-ready websites that turn Brisbane searches into enquiries. Free quote in two minutes.",
    h1: "Web design that grows Brisbane businesses",
    intro:
      "Brisbane is growing fast — and so is your competition. We build websites for Brisbane businesses that capture that growth: fast, credible, and engineered to turn local searches into enquiries.",
    sections: [
      {
        title: "Made for Brisbane's service economy",
        body: "Trades, clinics, hospitality, professional services — Brisbane runs on local business. We design sites around the way local customers choose: proof, clarity, and an easy next step.",
      },
      {
        title: "Stand out from template competitors",
        body: "Most Brisbane small-business sites are recycled templates. A custom, conversion-first build makes you instantly look like the established choice.",
      },
      {
        title: "A foundation for local rankings",
        body: "Every build includes the technical SEO groundwork — speed, structure, schema — that Brisbane local rankings are built on.",
      },
    ],
  },
  {
    slug: "web-design-perth",
    city: "Perth",
    service: "Web Design",
    metaTitle: "Web Design Perth | Quartz Digital",
    metaDescription:
      "Perth web design for businesses that want more than a brochure site. Fast, mobile-first, conversion-focused websites. Get a free quote in two minutes.",
    h1: "Web design Perth businesses use to win more work",
    intro:
      "Perth's economy runs on resources, trades, and local services — and buyers in this market decide fast. We build websites for Perth businesses that load instantly, prove credibility in seconds, and turn a glance into an enquiry.",
    sections: [
      {
        title: "Built for a fast-deciding market",
        body: "From Fremantle tradies to Osborne Park suppliers, Perth buyers don't linger — they compare two or three options and call one. Your site needs to win that first ten seconds with clarity, not clutter.",
      },
      {
        title: "Time-zone-friendly, still Australian quality",
        body: "Perth runs hours ahead of the east coast, so slow turnarounds cost you real business days. We keep communication tight and builds moving, without cutting corners on design or code quality.",
      },
      {
        title: "Local SEO built in from day one",
        body: "Every Perth build ships with the technical foundations — speed, structure, schema — that local 'near me' searches depend on, so your site starts earning traffic the day it launches.",
      },
    ],
  },
  {
    slug: "seo-perth",
    city: "Perth",
    service: "SEO",
    metaTitle: "SEO Perth | Local Search Rankings | Quartz Digital",
    metaDescription:
      "Perth SEO services: local search, Google Business Profile optimisation, and technical SEO that get Perth businesses found first. Free SEO quote.",
    h1: "SEO that gets Perth businesses found first",
    intro:
      "Perth has less search competition than the eastern capitals — which means a properly built SEO system can win visible ground faster here than almost anywhere else in Australia. We build that system.",
    sections: [
      {
        title: "An easier market to lead in",
        body: "With fewer businesses investing properly in SEO, Perth is one of the fastest markets in the country to move from page three to the map pack — if the technical and local foundations are done right.",
      },
      {
        title: "Local SEO for Perth and the suburbs",
        body: "From Joondalup to Rockingham, we structure your Google Business Profile, reviews, and service-area content around where Perth customers actually search, not just the CBD.",
      },
      {
        title: "Consistent monthly progress",
        body: "SEO compounds. Monthly optimisation cycles — content, technical health, and local signals — keep stacking results while competitors who did a one-off audit fall behind.",
      },
    ],
  },
  {
    slug: "web-design-adelaide",
    city: "Adelaide",
    service: "Web Design",
    metaTitle: "Web Design Adelaide | Quartz Digital",
    metaDescription:
      "Adelaide web design for local businesses and startups. Fast, professional, SEO-ready websites that turn visitors into enquiries. Free quote in two minutes.",
    h1: "Web design that helps Adelaide businesses stand out",
    intro:
      "Adelaide's business community is tight-knit — word of mouth matters, but so does what people find when they search you up before calling. We build websites that back up your reputation the moment someone looks you up.",
    sections: [
      {
        title: "Professional presence for a relationship-driven market",
        body: "In Adelaide, referrals open the door — your website closes it. A clean, credible site reassures a referred customer they made the right call before they've even spoken to you.",
      },
      {
        title: "Competing with bigger cities, without the big-city price",
        body: "Adelaide businesses shouldn't have to accept a lower design standard because the market is smaller. We build to the same conversion-first standard we use in Sydney and Melbourne.",
      },
      {
        title: "SEO-ready from the first build",
        body: "Fast load times, clean structure, and local SEO foundations are standard on every Adelaide build — so you start climbing local search results from launch, not six months later.",
      },
    ],
  },
  {
    slug: "seo-adelaide",
    city: "Adelaide",
    service: "SEO",
    metaTitle: "SEO Adelaide | Local Search Rankings — Quartz Digital",
    metaDescription:
      "Adelaide SEO services covering local search, Google Business Profile optimisation, and technical SEO. Get found before your competitors. Free quote.",
    h1: "SEO that puts Adelaide businesses ahead of the search",
    intro:
      "Adelaide searches are winnable — most local competitors haven't invested in proper SEO. We build the local and technical foundations that let you take that ground and hold it.",
    sections: [
      {
        title: "Win the map pack in a less crowded field",
        body: "With fewer Adelaide businesses running structured SEO, a properly optimised Google Business Profile and local content strategy can move you into the top three results faster than in bigger capitals.",
      },
      {
        title: "Suburb-by-suburb targeting",
        body: "From the CBD to Norwood and Glenelg, we build content and local signals around the specific areas you actually serve — not just a generic 'Adelaide' keyword that's too broad to convert.",
      },
      {
        title: "SEO as a system, not a one-off",
        body: "Rankings hold up because we keep working them — monthly technical checks, content, and local signal maintenance that compound instead of fading after the first quarter.",
      },
    ],
  },
  {
    slug: "web-design-gold-coast",
    city: "Gold Coast",
    service: "Web Design",
    metaTitle: "Web Design Gold Coast | Quartz Digital",
    metaDescription:
      "Gold Coast web design for tourism, trades, and local businesses. Fast, mobile-first websites that turn visitors into bookings and enquiries. Free quote.",
    h1: "Web design built for how the Gold Coast does business",
    intro:
      "Tourism, trades, hospitality, fitness — Gold Coast businesses live or die on how quickly a visitor can find what they need and book it. We build websites engineered for exactly that moment.",
    sections: [
      {
        title: "Built for a mobile-first, on-the-go audience",
        body: "Whether it's a tourist booking an experience or a local booking a tradie, Gold Coast searches happen on phones, often in a hurry. Every build we ship is mobile-first, not mobile-adjusted.",
      },
      {
        title: "Presentation that matches the destination",
        body: "The Gold Coast sells an experience before it sells anything else. Your site needs the same polish as the beachfront it sits behind — premium, fast, and visually confident.",
      },
      {
        title: "SEO built in for seasonal and local search",
        body: "From peak-season tourism searches to year-round local trade enquiries, we build the technical and local SEO foundations that keep you visible whichever type of customer is searching.",
      },
    ],
  },
  {
    slug: "seo-gold-coast",
    city: "Gold Coast",
    service: "SEO",
    metaTitle: "SEO Gold Coast | Local Search | Quartz Digital",
    metaDescription:
      "Gold Coast SEO services: local search, Google Business Profile, and technical SEO built for tourism and trade seasonality. Free SEO quote in two minutes.",
    h1: "SEO built for the Gold Coast's seasonal search patterns",
    intro:
      "Search demand on the Gold Coast swings with the seasons — tourism peaks, trade demand shifts, and local competition changes month to month. We build SEO systems that keep you visible through all of it.",
    sections: [
      {
        title: "Ranking through the seasonal swings",
        body: "A Gold Coast SEO strategy that only accounts for peak season leaves you invisible the rest of the year. We build content and local signals that hold rankings across the full calendar.",
      },
      {
        title: "Local SEO from Southport to Coolangatta",
        body: "The Gold Coast stretches across dozens of distinct suburbs and towns. We structure your Google Business Profile and local content around the specific areas your customers actually search from.",
      },
      {
        title: "Monthly optimisation that compounds",
        body: "Consistent technical health checks, content updates, and local signal maintenance mean your rankings keep improving instead of drifting back down between seasons.",
      },
    ],
  },
];

export const AREA_PAGES: AreaPage[] = [
  ...CITY_PAGES,
  ...SUBURB_PAGES.map((p) => ({ ...p, region: p.region ?? "West" })),
  ...MORE_SUBURB_PAGES,
  ...NEW_SUBURB_PAGES,
  ...TOPIC_PAGES,
];

export function getArea(slug: string) {
  return AREA_PAGES.find((a) => a.slug === slug);
}
