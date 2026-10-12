import type { CSSProperties } from 'react';
import { impactStats } from '@/data/projects';

const accents = ['#22D3EE', '#818CF8', '#34D399', '#F472B6'];

export default function StatsStrip() {
  return (
    <section className="relative py-10" aria-label="Impact by the numbers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {impactStats.map((s, i) => (
            <div
              key={s.label}
              suppressHydrationWarning data-reveal
              style={{ '--d': `${i * 90}ms`, '--accent': accents[i] } as CSSProperties}
              className="surface spotlight lift rounded-3xl p-6 sm:p-7 overflow-hidden"
            >
              <Sparkline color={accents[i]} seed={i} />
              <div suppressHydrationWarning data-count className="relative font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                {s.value}
              </div>
              <div className="relative mt-2 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Decorative rising line in the card corner
function Sparkline({ color, seed }: { color: string; seed: number }) {
  const pts = [38, 30, 33, 22, 26, 15, 18, 8].map((y, i) => `${i * 14},${y + ((seed * 7 + i * 3) % 6)}`).join(' ');
  return (
    <svg className="absolute right-4 top-5 w-28 h-12 opacity-80" viewBox="0 0 100 48" aria-hidden="true">
      <defs>
        <linearGradient id={`spark-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,48 ${pts} 98,48`} fill={`url(#spark-${seed})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="0">
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
      </polyline>
    </svg>
  );
}
