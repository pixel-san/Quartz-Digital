import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { AREA_PAGES } from "@/lib/areas";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.7 },
    { path: "/results", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/service-areas", priority: 0.8 },
    { path: "/quote", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms-and-conditions", priority: 0.2 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...AREA_PAGES.map((a) => ({
      url: `${SITE.url}/${a.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
