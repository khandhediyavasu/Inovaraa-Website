import type { CSSProperties } from 'react';
import Link from 'next/link';

const portals = [
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center pt-36 pb-24">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      <Orbits />

      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div suppressHydrationWarning data-reveal className="kicker mb-8">Error 404</div>

        <div suppressHydrationWarning data-reveal="scale" style={{ '--d': '80ms' } as CSSProperties} className="relative mx-auto w-fit select-none" aria-hidden="true">
          <div className="font-display font-extrabold leading-none tracking-tighter text-[7.5rem] sm:text-[11rem] lg:text-[13rem] text-gradient float-slow">
            404
          </div>
          {/* Little satellite circling the zero */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-square spin-slow pointer-events-none" style={{ animationDuration: '9s' }}>
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,0.6)]" />
          </div>
        </div>

        <h1
          suppressHydrationWarning data-reveal
          style={{ '--d': '160ms' } as CSSProperties}
          className="mt-4 text-4xl sm:text-5xl font-extrabold text-white leading-[1.05]"
        >
          Page <span className="text-gradient">not found</span>
        </h1>

        <p suppressHydrationWarning data-reveal style={{ '--d': '220ms' } as CSSProperties} className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
          The page you are looking for does not exist or has moved. Try one of the links below.
        </p>

        <div suppressHydrationWarning data-reveal style={{ '--d': '280ms' } as CSSProperties} className="mt-9 flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn btn--primary btn--lg">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Back to home
          </Link>
          <Link href="/contact" className="btn btn--secondary btn--lg">
            Contact us
            <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>

        <div suppressHydrationWarning data-reveal style={{ '--d': '340ms' } as CSSProperties} className="surface-glass rounded-3xl mt-14 p-6 sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">Popular pages</p>
          <nav className="flex gap-2 justify-center flex-wrap" aria-label="Popular pages">
            {portals.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

function Orbits() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[860px] max-w-none opacity-70">
        <svg viewBox="0 0 860 860" className="w-full h-full spin-slow">
          <defs>
            <linearGradient id="nf-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--brand-1)" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="var(--brand-2)" stopOpacity="0.08" />
              <stop offset="1" stopColor="var(--brand-3)" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <circle cx="430" cy="430" r="240" fill="none" stroke="url(#nf-ring)" />
          <circle cx="430" cy="430" r="330" fill="none" stroke="url(#nf-ring)" strokeDasharray="2 10" />
          <circle cx="430" cy="430" r="415" fill="none" stroke="url(#nf-ring)" />
          <circle cx="670" cy="430" r="5" fill="var(--brand-2)" />
          <circle cx="430" cy="100" r="4" fill="var(--brand-1)" />
          <circle cx="137" cy="580" r="4" fill="var(--brand-3)" />
        </svg>
      </div>
      {/* Drifting "lost" packets */}
      <span className="absolute left-[12%] top-[28%] w-10 h-10 rounded-xl surface-glass float-slow rotate-12" />
      <span className="absolute right-[14%] top-[22%] w-6 h-6 rounded-lg surface-glass float-slower -rotate-6" />
      <span className="absolute right-[18%] bottom-[18%] w-12 h-12 rounded-2xl surface-glass float-slow -rotate-12" style={{ animationDelay: '-2s' }} />
      <span className="absolute left-[18%] bottom-[22%] w-3 h-3 rounded-full bg-pink-400/70 pulse-soft" />
    </div>
  );
}
