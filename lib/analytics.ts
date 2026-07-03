// GA4 event layer. Set NEXT_PUBLIC_GA_ID to enable.
type EventName =
  | "quote_start"
  | "quote_step"
  | "quote_submit"
  | "contact_submit"
  | "whatsapp_click"
  | "phone_click"
  | "cta_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: EventName, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
