import type { CSSProperties } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { SITE } from '@/data/site';
import { PixelMark } from '@/components/ui/Logo';

const words = ['scale.', 'delight.', 'perform.', 'last.'];

const team = ['TT', 'NM', 'VT', 'JM', 'PS'];

// Tech nodes placed on the orbit rings: [label, ring radius %, angle deg, color]
const nodes: [string, number, number, string][] = [
  ['React', 50, 20, '#22D3EE'],
  ['.NET', 50, 140, '#A78BFA'],
  ['Azure', 50, 260, '#38BDF8'],
  ['Angular', 36, 80, '#F472B6'],
  ['Node.js', 36, 210, '#34D399'],
  ['AI', 36, 320, '#FBBF24'],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.28),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
          {/* Copy */}
          <div className="flex flex-col items-start">
            <div suppressHydrationWarning data-reveal className="kicker mb-7">Web · Mobile · AI · Cloud</div>

            <h1
              suppressHydrationWarning data-reveal
              style={{ '--d': '80ms' } as CSSProperties}
              className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-white"
            >
              Digital solutions,
              <br />
              engineered to{' '}
              <span className="word-rotator" style={{ "--n": words.length } as CSSProperties} aria-label={words[0]}>
                {words.map((w, i) => (
                  <span key={w} className="text-gradient pr-1" style={{ "--i": i } as CSSProperties} aria-hidden="true">
                    {w}
                  </span>
                ))}
              </span>
            </h1>

            <p
              suppressHydrationWarning data-reveal
              style={{ '--d': '160ms' } as CSSProperties}
              className="mt-7 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Inovaraa Solutions is a software development company building AI agents, MCP servers, web platforms and
              mobile apps for healthcare, logistics, finance, insurance, real estate, retail and education.
            </p>

            <div suppressHydrationWarning data-reveal style={{ '--d': '240ms' } as CSSProperties} className="mt-9 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/contact" className="btn btn--primary btn--lg" id="hero-primary-cta">
                Start a Project
                <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/projects" className="btn btn--secondary btn--lg" id="hero-secondary-cta">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                See Our Work
              </Link>
            </div>

            <div suppressHydrationWarning data-reveal style={{ '--d': '320ms' } as CSSProperties} className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {team.map((t, i) => (
                  <span
                    key={t}
                    className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-[11px] font-bold flex items-center justify-center"
                    style={{ zIndex: team.length - i }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <div className="font-semibold text-white">In-house experts</div>
                <div className="text-slate-500">{projects.length}+ projects delivered across 8 industries</div>
              </div>
            </div>
          </div>

          {/* Orbit graphic */}
          <div suppressHydrationWarning data-reveal="scale" style={{ '--d': '200ms' } as CSSProperties} className="relative mx-auto w-full max-w-[540px] aspect-square">
            <OrbitSystem />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-500" aria-hidden="true">
        Scroll
        <span className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-cyan-400 float-slow" />
        </span>
      </div>
    </section>
  );
}

function OrbitSystem() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[14%] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[30%] rounded-full border border-white/10" />
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent)]" />

      {/* Rotating node layers: outer ring and inner ring spin opposite ways */}
      {[50, 36].map((ring) => {
        const duration = ring === 50 ? 60 : 45;
        const reverse = ring === 36;
        return (
          <div
            key={ring}
            className="absolute inset-0"
            style={{ animation: `spin ${duration}s linear infinite ${reverse ? 'reverse' : ''}` }}
          >
            {nodes
              .filter(([, r]) => r === ring)
              .map(([label, r, angle, color]) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div style={{ animation: `spin ${duration}s linear infinite ${reverse ? '' : 'reverse'}` }}>
                      <span
                        className="surface-glass flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap shadow-lg"
                        style={{ boxShadow: `0 8px 24px -8px ${color}` }}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
                        {label}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}

      {/* Core */}
      <div className="absolute inset-[38%] flex items-center justify-center">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 blur-2xl opacity-60 pulse-soft" />
        <div className="border-glow is-live relative w-full h-full rounded-[2rem] bg-[#111B3A] border border-white/10 flex items-center justify-center shadow-2xl">
          <PixelMark className="relative z-[2] w-[64%] h-[64%]" title={SITE.name} />
        </div>
      </div>
    </div>
  );
}
