'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { homeFaqs } from '@/data/faqs';

export default function FaqSection({ faqs = homeFaqs }: { faqs?: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-28 relative" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-32 self-start">
          <div suppressHydrationWarning data-reveal className="kicker mb-5">FAQ</div>
          <h2 id="faq-heading" suppressHydrationWarning data-reveal style={{ '--d': '80ms' } as CSSProperties} className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] mb-5">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties} className="text-slate-400 leading-relaxed mb-8">
            Can&apos;t find what you&apos;re looking for? Talk to the people who will actually build your product.
          </p>
          <div suppressHydrationWarning data-reveal style={{ '--d': '240ms' } as CSSProperties} className="surface rounded-3xl p-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {['TT', 'VT'].map((i) => (
                <span key={i} className="w-11 h-11 rounded-full border-2 border-[var(--surface)] bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-xs font-bold flex items-center justify-center">{i}</span>
              ))}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Talk to our leadership</div>
              <div className="text-xs text-slate-400">Reply within 24 hours</div>
            </div>
            <Link href="/contact" className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Contact us">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.q}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${i * 70}ms` } as CSSProperties}
                className={`rounded-3xl border transition-all duration-500 ${
                  isOpen ? 'surface border-indigo-400/40 shadow-2xl shadow-indigo-950/30' : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full px-6 sm:px-7 py-6 flex items-center justify-between text-left gap-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base sm:text-lg font-semibold text-white">{faq.q}</span>
                  </span>
                  <span
                    className={`relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen ? 'bg-gradient-to-br from-indigo-500 to-cyan-500 text-white rotate-45' : 'bg-white/5 text-slate-300'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </button>

                {/* Smooth height via grid rows 0fr -> 1fr */}
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-7 sm:pl-[4.25rem] text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
