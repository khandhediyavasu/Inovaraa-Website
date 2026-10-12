'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Top progress bar that starts the instant an internal link is clicked and finishes
// when the new page is on screen, so navigation always feels responsive.
export default function NavProgress() {
  const pathname = usePathname();
  // The path we were on when the click happened; loading while we're still there.
  const [startedOn, setStartedOn] = useState<string | null>(null);
  const loading = startedOn !== null && startedOn === pathname;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return; // same page / #hash
      setStartedOn(window.location.pathname);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return <div className={`nav-progress ${loading ? 'is-loading' : ''}`} aria-hidden="true" />;
}
