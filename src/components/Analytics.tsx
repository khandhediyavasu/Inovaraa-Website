'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { SITE } from '@/data/site';
import { TRACKING_ENABLED, trackConversion } from '@/lib/analytics';

const { ga4, googleAds } = SITE.tracking;
// One gtag.js load serves both tools; it is fetched with the first configured ID
const primaryId = ga4 || googleAds;

// Loads the Google tag (GA4 + Google Ads) and records phone/email link clicks as conversions.
// GA4 counts page views on client-side navigation by itself through enhanced measurement.
export default function Analytics() {
  useEffect(() => {
    if (!TRACKING_ENABLED) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      // Job applications from the careers page are not sales leads
      if (/subject=Job/i.test(href)) return;
      trackConversion(href.startsWith('tel:') ? 'phone' : 'email', { page_path: location.pathname });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  if (!TRACKING_ENABLED) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${[ga4, googleAds].filter(Boolean).map((id) => `gtag('config', '${id}');`).join('\n')}`}
      </Script>
    </>
  );
}
