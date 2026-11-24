import type { AreaPage } from "./areas";
import { NEW_CITY } from "./suburbs-new-city";
import { NEW_INNER } from "./suburbs-new-inner";
import { NEW_EAST_A } from "./suburbs-new-east-a";
import { NEW_EAST_B } from "./suburbs-new-east-b";
import { NEW_OTHER } from "./suburbs-new-other";
import { SEARCH_A } from "./suburbs-search-a";
import { SEARCH_B } from "./suburbs-search-b";

const SEARCH: Record<string, string> = { ...SEARCH_A, ...SEARCH_B };

/* Second wave of Melbourne suburb pages: City of Melbourne, inner suburbs,
   the east, and other high-traffic areas. Every paragraph in the data files
   is written for that suburb only. The generator adds NO body copy, so pages
   cannot become near-duplicates by accident. Never copy text between entries. */

export type NewSub = {
  name: string;
  region: "North" | "West" | "East" | "South-east" | "Inner Melbourne";
  /** what the suburb is (true, general) */
  character: string;
  /** one specific opening observation about local business/search */
  hook: string;
  /** nearby suburbs; only those with a page become links */
  nbrs: [string, string, string];
  /** three sections written for this suburb */
  blocks: { title: string; body: string }[];
  /** a hypothetical, clearly-labelled project walk-through */
  example: string;
  /** one practical tip */
  tip: string;
  /** two questions specific to this suburb */
  qa: { q: string; a: string }[];
};

function slugOf(name: string) {
  return `web-design-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

function clip(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + ".";
}

function build(s: NewSub): AreaPage {
  const lead = s.blocks[0].title.toLowerCase();
  return {
    slug: slugOf(s.name),
    city: s.name,
    service: "Web Design",
    suburb: true,
    region: s.region,
    metaTitle: `Web Design ${s.name} | Quartz Digital`,
    metaDescription: clip(
      `Web design in ${s.name}: ${lead}. Fast, SEO-ready websites for local businesses. Free quote in two minutes.`,
      160
    ),
    h1: `Web design for ${s.name} businesses`,
    intro: `${s.character} ${s.hook}`,
    sections: [...s.blocks, { title: `A typical ${s.name} project`, body: s.example }],
    extra: [SEARCH[s.name], s.tip].filter((x): x is string => Boolean(x)),
    faqs: s.qa,
    nearby: s.nbrs.map(slugOf),
  };
}

export const NEW_SUBURB_PAGES: AreaPage[] = [
  ...NEW_CITY,
  ...NEW_INNER,
  ...NEW_EAST_A,
  ...NEW_EAST_B,
  ...NEW_OTHER,
].map(build);
