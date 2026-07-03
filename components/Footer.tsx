import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1280px] px-5 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-semibold tracking-tight text-cream">
              Quartz Digital
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {SITE.positioning}
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-block text-sm font-medium text-quartz-bright hover:text-cream transition-colors"
            >
              {SITE.phone}
            </a>
          </div>

          <nav aria-label="Services">
            <p className="text-sm font-semibold text-cream">Services</p>
            <ul className="mt-3 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-muted hover:text-cream transition-colors"
                  >
                    {s.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-sm font-semibold text-cream">Company</p>
            <ul className="mt-3 space-y-2">
              {[
                ["About", "/about"],
                ["Results", "/results"],
                ["FAQ", "/faq"],
                ["Service Areas", "/service-areas"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-cream transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Get started">
            <p className="text-sm font-semibold text-cream">Get started</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-quartz-bright hover:text-cream transition-colors"
                >
                  Get a free quote
                </Link>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-cream transition-colors"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={SITE.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-cream transition-colors"
                >
                  Google reviews
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-cream transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Quartz Digital. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-xs text-muted hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-muted hover:text-cream transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
