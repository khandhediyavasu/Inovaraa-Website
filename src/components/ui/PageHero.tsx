import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';

// Shared hero for inner pages: breadcrumb, kicker, big title, description,
// optional actions, over an animated grid + orbit graphic.
export default function PageHero({
  crumb,
  kicker,
  title,
  description,
  children,
}: {
  crumb: string;
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      <HeroOrbits />

      <div className="container relative text-center">
        <nav suppressHydrationWarning data-reveal className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
          <span className="text-cyan-400">{crumb}</span>
        </nav>

        {kicker && <div suppressHydrationWarning data-reveal style={{ '--d': '60ms' } as CSSProperties} className="kicker mb-6">{kicker}</div>}

        <h1
          suppressHydrationWarning data-reveal
          style={{ '--d': '120ms' } as CSSProperties}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] max-w-4xl mx-auto"
        >
          {title}
        </h1>

        {description && (
          <p suppressHydrationWarning data-reveal style={{ '--d': '200ms' } as CSSProperties} className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {children && (
          <div suppressHydrationWarning data-reveal style={{ '--d': '280ms' } as CSSProperties} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

function HeroOrbits() {
  return (
    <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[900px] max-w-none h-[900px] pointer-events-none opacity-70" aria-hidden="true">
      <svg viewBox="0 0 900 900" className="w-full h-full spin-slow">
        <defs>
          <linearGradient id="ph-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--brand-1)" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="var(--brand-2)" stopOpacity="0.08" />
            <stop offset="1" stopColor="var(--brand-3)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="450" cy="450" r="250" fill="none" stroke="url(#ph-ring)" strokeWidth="1" />
        <circle cx="450" cy="450" r="350" fill="none" stroke="url(#ph-ring)" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="450" cy="450" r="440" fill="none" stroke="url(#ph-ring)" strokeWidth="1" />
        <circle cx="700" cy="450" r="5" fill="var(--brand-2)" />
        <circle cx="450" cy="100" r="4" fill="var(--brand-1)" />
        <circle cx="139" cy="606" r="4" fill="var(--brand-3)" />
      </svg>
    </div>
  );
}
