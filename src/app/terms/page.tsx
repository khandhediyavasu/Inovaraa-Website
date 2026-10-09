import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the Terms of Service for engaging with Inovaraa Solutions IT services, architectures, and platforms.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/terms' },
};

const sections: { id: string; title: ReactNode; label: string; body: ReactNode }[] = [
  {
    id: 'agreement',
    label: 'Agreement to Terms',
    title: 'Agreement to Terms',
    body: (
      <p>By accessing inovaraa.com or entering into master service agreements with Inovaraa Solutions, you agree to be bound by these Terms of Service and applicable enterprise SLAs.</p>
    ),
  },
  {
    id: 'intellectual-property',
    label: 'Intellectual Property',
    title: <>Intellectual Property &amp; Code Ownership</>,
    body: (
      <p>Unless explicitly stipulated in a specific statement of work, all customized source code, infrastructure templates, and application logic developed for clients become the exclusive intellectual property of the client upon settlement of invoices.</p>
    ),
  },
  {
    id: 'slas',
    label: 'Service Level Agreements',
    title: 'Service Level Agreements (SLAs)',
    body: (
      <p>Managed services and NOC infrastructure operations are delivered under contractual 99.999% uptime commitments with sub-15 minute critical response warranties.</p>
    ),
  },
  {
    id: 'liability',
    label: 'Limitation of Liability',
    title: 'Limitation of Liability',
    body: (
      <p>Except in cases of gross negligence, neither party shall be liable for indirect, consequential, or punitive damages arising from the delivery or execution of digital transformation programs.</p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms of Service"
        kicker="Legal Framework"
        title={<>Terms of <span className="text-gradient">service</span></>}
        description={
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" aria-hidden="true" />
            Effective Date: October 1, 2026
          </span>
        }
      />
      <LegalBody sections={sections} />
    </>
  );
}

function LegalBody({ sections }: { sections: { id: string; title: ReactNode; label: string; body: ReactNode }[] }) {
  return (
    <section className="pb-24 sm:pb-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-14">
        <aside className="hidden lg:block" aria-label="Section index">
          <div className="sticky top-28 surface-glass rounded-3xl p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3 px-2">Contents</p>
            <ol className="flex flex-col gap-0.5">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-cyan-400 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0 flex flex-col gap-5">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              suppressHydrationWarning data-reveal
              style={{ '--d': `${Math.min(i, 3) * 60}ms` } as CSSProperties}
              className="surface spotlight rounded-[1.75rem] p-6 sm:p-9 scroll-mt-28"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="icon-tile shrink-0 !w-11 !h-11 !rounded-xl font-display font-extrabold text-sm" style={{ '--tile': i % 2 ? '#22D3EE' : '#818CF8' } as CSSProperties} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug pt-1.5">
                    <span className="sr-only">{i + 1}. </span>
                    {s.title}
                  </h2>
                  <div className="text-[0.975rem] text-slate-300 leading-[1.8]">{s.body}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
