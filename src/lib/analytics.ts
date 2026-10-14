import { SITE } from '@/data/site';

const { ga4, googleAds, adsLabels } = SITE.tracking;

export const TRACKING_ENABLED = Boolean(ga4 || googleAds);
export const GA4_ENABLED = Boolean(ga4);

// The tools actually switched on, named for the privacy policy, e.g. "Google Ads"
export const TRACKING_TOOLS = [ga4 && 'Google Analytics', googleAds && 'Google Ads'].filter(Boolean).join(' and ');

export type Conversion = 'contact' | 'phone' | 'email' | 'newsletter';

// GA4 event name for each conversion. generate_lead and sign_up are GA4's recommended names,
// so they show up in its standard lead reports.
const GA4_EVENTS: Record<Conversion, string> = {
  contact: 'generate_lead',
  phone: 'click_phone',
  email: 'click_email',
  newsletter: 'sign_up',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Reports a conversion to GA4 and, when a label is configured for it, to Google Ads.
// Does nothing if tracking is off or the tag hasn't loaded (e.g. blocked by an ad blocker).
export function trackConversion(kind: Conversion, params: Record<string, string> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  if (ga4) window.gtag('event', GA4_EVENTS[kind], params);
  const label = kind === 'newsletter' ? '' : adsLabels[kind];
  if (googleAds && label) window.gtag('event', 'conversion', { send_to: `${googleAds}/${label}` });
}
