import type { CSSProperties } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Discover',
    description: 'We learn your business, users and goals, then turn them into a clear scope, timeline and estimate.',
    outputs: ['Workshops', 'Scope & estimate'],
    color: '#22D3EE',
    icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  },
  {
    title: 'Design',
    description: 'Wireframes, UI design and architecture, reviewed with you before a single line of code.',
    outputs: ['UX & UI', 'Architecture'],
    color: '#818CF8',
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  },
  {
    title: 'Build & Test',
    description: 'Two-week sprints with demos, code reviews and a dedicated QA team testing every release.',
    outputs: ['Sprint demos', 'QA sign-off'],
    color: '#34D399',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: 'Launch & Grow',
    description: 'Go-live on cloud infrastructure, then monitoring, support and new features as you scale.',
    outputs: ['Deployment', 'Ongoing support'],
    color: '#F472B6',
    icon: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 relative overflow-hidden" aria-labelledby="process-heading">
      <div className="absolute inset-0 bg-dots-fade opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          kicker="How we work"
          id="process-heading"
          title={<>From idea to launch, <span className="text-gradient">without surprises</span></>}
          description="A simple, transparent process. You see progress every two weeks and always know what comes next."
          className="mb-20"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" aria-hidden="true">
            <div suppressHydrationWarning data-reveal="grow" className="h-full origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400" />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 list-none p-0 m-0">
            {steps.map((step, i) => (
              <li
                key={step.title}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${200 + i * 220}ms`, '--tile': step.color } as CSSProperties}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <span className="absolute inset-0 rounded-full blur-xl opacity-60" style={{ background: step.color }} aria-hidden="true" />
                  <span className="icon-tile relative w-16! h-16! rounded-full! bg-[var(--surface)]!">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {step.icon}
                    </svg>
                  </span>
                  <span className="absolute -top-2 -right-3 font-mono text-[11px] font-bold px-2 py-0.5 rounded-full surface-glass text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="surface spotlight lift rounded-3xl p-6 w-full flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{step.description}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {step.outputs.map((o) => (
                      <span
                        key={o}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ color: `color-mix(in srgb, ${step.color} 70%, var(--ink))`, background: `${step.color}1A`, border: `1px solid ${step.color}40` }}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
