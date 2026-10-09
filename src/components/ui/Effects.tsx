'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Site-wide motion driver, mounted once in the root layout.
//  - [data-reveal]  -> gets [data-shown] when scrolled into view (CSS animates it)
//  - [data-count]   -> numeric part of its text counts up from 0 when shown
//  - .spotlight     -> receives --mx/--my for the cursor-following glow
// It uses data attributes rather than classes so React re-renders never strip them.

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function countUp(el: HTMLElement) {
  const original = el.dataset.countText ?? el.textContent ?? '';
  el.dataset.countText = original;
  const match = original.match(/-?\d[\d,]*(\.\d+)?/);
  if (!match || reducedMotion()) return;

  const target = parseFloat(match[0].replace(/,/g, ''));
  const decimals = match[1] ? match[1].length - 1 : 0;
  const [before, after] = [original.slice(0, match.index), original.slice((match.index ?? 0) + match[0].length)];
  const duration = 1600;
  const start = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${before}${(target * eased).toFixed(decimals)}${after}`;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
}

export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el: HTMLElement) => {
      el.setAttribute('data-shown', '');
      if (el.hasAttribute('data-count')) countUp(el);
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
    };

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    // Tracked in memory, not as an attribute, so server HTML stays untouched until shown
    const watched = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-shown])').forEach((el) => {
        if (watched.has(el)) return;
        watched.add(el);
        io.observe(el);
      });
    };

    // Let the page finish hydrating before the first reveal
    const first = window.setTimeout(scan, 60);
    // Only rescan when elements are added (ignores text updates such as count-ups)
    const mo = new MutationObserver((mutations) => {
      if (mutations.some((m) => Array.from(m.addedNodes).some((n) => n.nodeType === Node.ELEMENT_NODE))) scan();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(first);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = (last.target as Element | null)?.closest?.<HTMLElement>('.spotlight');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${last.clientX - rect.left}px`);
      target.style.setProperty('--my', `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
