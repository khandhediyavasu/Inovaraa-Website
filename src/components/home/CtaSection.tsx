'use client';

import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] border-y border-white/10" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 relative">
            <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-ping" />
          </span>
          ACCELERATE YOUR 2026 ROADMAP
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto"
        >
          Ready to Build the{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Autonomous Enterprise
          </span>
          ?
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Book a 30-minute discovery session with our Principal Solutions Architects. We will evaluate your current workload, benchmark TCO savings, and blueprint your AI deployment.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap mb-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            id="final-cta-btn"
          >
            Launch Discovery Session
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
          >
            Explore All Capabilities
          </Link>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap text-slate-400 text-xs font-semibold">
          <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Non-Disclosure Protected</div>
          <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> No Vendor Lock-In</div>
          <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 24-Hour Response Guaranteed</div>
        </div>
      </div>
    </section>
  );
}
