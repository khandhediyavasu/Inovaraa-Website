'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const testimonials = [
  {
    quote: 'Inovaraa Solutions re-architected our multi-region Kubernetes fleet and deployed automated FinOps governance. We realized 58% in infrastructure savings with zero downtime.',
    author: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    company: 'GlobalBank Financial',
    initials: 'SM',
    color: '#22D3EE',
  },
  {
    quote: 'Their enterprise AI team designed our private clinical RAG pipeline in under 8 weeks. What used to take our analysts days is now queryable in sub-second latency with 100% HIPAA compliance.',
    author: 'Dr. Rajesh Kumar',
    role: 'VP of Data & AI Systems',
    company: 'MediHealth Group',
    initials: 'RK',
    color: '#34D399',
  },
  {
    quote: 'The Strangler Fig modernization executed by Inovaraa allowed us to decommission our 15-year legacy ERP without a single hour of customer service disruption. Truly best-in-class engineers.',
    author: 'Amanda Chen',
    role: 'Chief Digital Officer',
    company: 'OmniRetail Global',
    initials: 'AC',
    color: '#818CF8',
  },
];

const INTERVAL = 7000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % testimonials.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  const t = testimonials[active];

  return (
    <section className="py-28 relative" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div suppressHydrationWarning data-reveal className="kicker mb-5">Client stories</div>
          <h2 id="testimonials-heading" suppressHydrationWarning data-reveal style={{ '--d': '80ms' } as CSSProperties} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            What it&apos;s like to <span className="text-gradient">work with us</span>
          </h2>
        </div>

        <div
          suppressHydrationWarning data-reveal="scale"
          className="surface border-glow relative rounded-[2rem] p-8 sm:p-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ '--tile': t.color } as CSSProperties}
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-25 transition-colors duration-700" style={{ background: t.color }} aria-hidden="true" />
          <svg className="absolute top-8 right-8 w-24 h-24 opacity-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>

          <div key={active} className="relative z-[2]" style={{ animation: 'reveal-up 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex gap-1 mb-6 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              ))}
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug tracking-tight">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>

          <div className="relative z-[2] mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {testimonials.map((p, i) => (
                <button
                  key={p.author}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${p.author}`}
                  aria-pressed={i === active}
                  className={`relative flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border transition-all cursor-pointer overflow-hidden ${
                    i === active ? 'border-white/20 bg-white/10' : 'border-white/5 bg-white/[0.03] opacity-60 hover:opacity-100'
                  }`}
                >
                  <span className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: p.color, color: '#0B1020' }}>
                    {p.initials}
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-sm font-semibold text-white">{p.author}</span>
                    <span className="block text-[11px] text-slate-400">{p.role}, {p.company}</span>
                  </span>
                  {i === active && !paused && (
                    <span
                      key={active}
                      className="absolute bottom-0 left-0 h-0.5 origin-left"
                      style={{ width: '100%', background: p.color, animation: `grow-x ${INTERVAL}ms linear` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
