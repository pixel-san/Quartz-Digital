"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { track } from "@/lib/analytics";

/** Uiverse.io button (NelsonDJCR) — primary CTA style. */
export function Button2({
  href,
  children,
  external = false,
  event,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  event?: "whatsapp_click" | "phone_click" | "cta_click";
  className?: string;
}) {
  const onClick = () => {
    if (event) track(event, { href });
  };

  if (external) {
    return (
      <a
        href={href}
        className={`button2 ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`button2 ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
