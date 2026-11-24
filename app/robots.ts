import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Search-style AI bots may fetch pages so assistants can cite the site.
// Training crawlers stay blocked (Cloudflare-managed rules).
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_SEARCH_BOTS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
