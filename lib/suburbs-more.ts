import type { AreaPage } from "./areas";
import { DATA_A } from "./suburbs-data-a";
import { DATA_B } from "./suburbs-data-b";
import { EXTRA_A } from "./suburbs-extra-a";
import { EXTRA_B } from "./suburbs-extra-b";

const EXTRA = { ...EXTRA_A, ...EXTRA_B };

/* Melbourne-wide suburb pages.
   Every paragraph, section title and FAQ lives in the data files and is
   written for that suburb only. The generator below adds NO body copy of
   its own, so pages cannot become near-duplicates by accident.
   When adding a suburb, write fresh text: never copy between entries. */

export type SuburbEntry = {
  name: string;
  region: "North" | "West" | "East" | "South-east" | "Inner Melbourne";
  /** what the suburb is (true, general) */
  character: string;
  /** one specific opening observation about local search/business */
  hook: string;
  /** nearby suburbs; only those with a page become links */
  nbrs: [string, string, string];
  /** three sections written for this suburb */
  blocks: { title: string; body: string }[];
  /** one practical tip, shown as its own short block */
  tip: string;
  /** two questions specific to this suburb */
  qa: { q: string; a: string }[];
};

export function slugOf(name: string) {
  return `web-design-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

function build(s: SuburbEntry): AreaPage {
  const x = EXTRA[s.name];
  if (!x) throw new Error(`Missing extra copy for ${s.name}`);
  return {
    slug: slugOf(s.name),
    city: s.name,
    service: "Web Design",
    suburb: true,
    region: s.region,
    metaTitle: `Web Design ${s.name} | Quartz Digital`,
    metaDescription: `Web design in ${s.name}: ${s.blocks[0].title.toLowerCase()}. Fast, SEO-ready sites for local businesses. Free quote in two minutes.`,
    h1: `Web design for ${s.name} businesses`,
    intro: `${s.character} ${s.hook}`,
    sections: [
      ...s.blocks,
      { title: `A typical ${s.name} project`, body: x.example },
      { title: `How ${s.name} searches work`, body: x.search },
    ],
    extra: [s.tip],
    faqs: s.qa,
    nearby: s.nbrs.map(slugOf),
  };
}

export const MORE_SUBURB_PAGES: AreaPage[] = [...DATA_A, ...DATA_B].map(build);
