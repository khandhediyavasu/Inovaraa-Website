import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import JsonLd, { breadcrumbSchema, personSchema } from '@/components/seo/JsonLd';
import { SITE } from '@/data/site';
import { leaderBySlug, leaders } from '@/data/team';

export async function generateStaticParams() {
  return leaders.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = leaderBySlug(slug);
  if (!l) return { title: 'Team Member Not Found' };
  return {
    title: `${l.name}, ${l.role}`,
    description: l.bio[0],
    keywords: [l.name, `${l.name} ${SITE.shortName}`, `${l.name} ${l.role}`, SITE.name, ...l.expertise],
    alternates: { canonical: `/team/${l.slug}` },
    openGraph: { type: 'profile', title: `${l.name} | ${l.role} at ${SITE.name}`, description: l.bio[0], url: `/team/${l.slug}`, firstName: l.givenName, lastName: l.familyName, images: ['/opengraph-image'] },
  };
}

export default async function LeaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = leaderBySlug(slug);
  if (!l) notFound();

  const others = leaders.filter((x) => x.slug !== l.slug);

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            url: `${SITE.url}/team/${l.slug}`,
            name: `${l.name} | ${l.role} at ${SITE.name}`,
            mainEntity: personSchema(l),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: l.name, path: `/team/${l.slug}` },
          ]),
        ]}
      />

      <PageHero
        crumb={`Team / ${l.name}`}
        kicker={l.role}
        title={<>{l.name.split(' ')[0]} <span className="text-gradient">{l.name.split(' ').slice(1).join(' ')}</span></>}
        description={l.headline}
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Contact {l.givenName}
          <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
        <Link href="/about#leadership" className="btn btn--secondary btn--lg">Meet the team</Link>
      </PageHero>

      <section className="pb-24" aria-labelledby="bio-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-8 md:gap-12 items-start">
          <div suppressHydrationWarning data-reveal="scale" className="surface border-glow rounded-[2rem] p-8 flex flex-col items-center text-center gap-4 md:sticky md:top-32">
            <span className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-display text-4xl font-extrabold shadow-xl shadow-indigo-500/30">
              {l.initials}
            </span>
            <div>
              <div className="font-display text-xl font-bold text-white">{l.name}</div>
              <div className="text-sm text-cyan-400 font-semibold mt-1">{l.role}</div>
              <div className="text-xs text-slate-500 mt-1">{SITE.name}</div>
            </div>
          </div>

          <div className="flex flex-col gap-10 min-w-0">
            <div>
              <h2 id="bio-heading" suppressHydrationWarning data-reveal className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                About {l.givenName}
              </h2>
              <div className="flex flex-col gap-4">
                {l.bio.map((p, i) => (
                  <p key={i} suppressHydrationWarning data-reveal style={{ '--d': `${80 + i * 80}ms` } as CSSProperties} className="text-base sm:text-lg text-slate-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div suppressHydrationWarning data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Areas of expertise</h2>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {l.expertise.map((e) => (
                  <li key={e} className="text-sm font-medium px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">{e}</li>
                ))}
              </ul>
            </div>

            <div suppressHydrationWarning data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Leadership team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {others.map((o) => (
                  <Link key={o.slug} href={`/team/${o.slug}`} className="surface spotlight lift rounded-2xl p-4 flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white flex items-center justify-center text-sm font-bold shrink-0">{o.initials}</span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{o.name}</span>
                      <span className="block text-xs text-slate-400">{o.role}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
