export type AreaPage = {
  slug: string;
  city: string;
  service: "Web Design" | "SEO";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "web-design-melbourne",
    city: "Melbourne",
    service: "Web Design",
    metaTitle: "Web Design Melbourne | Conversion-Focused Websites — Quartz Digital",
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
    metaTitle: "SEO Melbourne | Local SEO and Google Rankings — Quartz Digital",
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
    metaTitle: "Web Design Sydney | High-Converting Business Websites — Quartz Digital",
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
    metaTitle: "Web Design Brisbane | Websites That Win Local Customers — Quartz Digital",
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
];

export function getArea(slug: string) {
  return AREA_PAGES.find((a) => a.slug === slug);
}
