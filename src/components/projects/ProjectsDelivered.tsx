import type { CSSProperties } from 'react';
import Link from 'next/link';
import { impactStats, projects } from '@/data/projects';
import LaptopMockup from './LaptopMockup';

export default function ProjectsDelivered({
  limit,
  showViewAll = false,
  headingLevel = 'h2',
}: {
  limit?: number;
  showViewAll?: boolean;
  headingLevel?: 'h1' | 'h2';
}) {
  const items = limit ? projects.slice(0, limit) : projects;
  const Heading = headingLevel;

  return (
    <section className="py-24 relative" id="projects" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow">Our Work</span>
          <Heading
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-4 mb-4"
          >
            Projects Our Team Has Delivered
          </Heading>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Healthcare, logistics, finance, real estate and retail platforms, designed, built and shipped by our engineers.
          </p>
        </div>

        <div className="impact-card rounded-2xl p-6 sm:p-10 mb-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-9-9" /><path d="M16.5 12A4.5 4.5 0 1 1 12 7.5" /><path d="M12 12l9-9M15 3h6v6" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Impact by the numbers</h3>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {impactStats.map((s) => (
              <div key={s.label} className="impact-stat flex flex-col-reverse items-center text-center px-3">
                <dt className="text-sm sm:text-base text-slate-300 mt-2 leading-snug">{s.label}</dt>
                <dd className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-indigo-400 leading-none">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article
              key={p.slug}
              className="work-card group rounded-3xl p-3 flex flex-col"
              style={{ '--tint': p.tint, '--accent': p.accent } as CSSProperties}
            >
              <div className="work-thumb relative aspect-[16/10] rounded-2xl flex items-center justify-center overflow-hidden">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.name} screenshot`} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-[80%] aspect-[6/5] mt-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[-1.5deg]">
                    <LaptopMockup id={p.slug} accent={p.accent} screen={p.screen} />
                  </div>
                )}
                <span className="work-pill absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
                <span className="work-pill absolute top-3 right-3 font-mono text-[10px] font-bold px-2 py-1 rounded-full">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">{p.name}</h3>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-arrow w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      aria-label={`Visit ${p.name}`}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && projects.length > items.length && (
          <div className="text-center mt-12">
            <Link href="/projects" className="btn btn--secondary">
              See All Our Work
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
