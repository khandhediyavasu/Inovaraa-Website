import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Inovaraa Solutions Privacy Policy to understand how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy-policy' },
};

const sections: { id: string; title: ReactNode; label: string; body: ReactNode }[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    body: (
      <p>Inovaraa Solutions (&ldquo;Inovaraa Solutions,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website inovaraa.com or engage with our services.</p>
    ),
  },
  {
    id: 'information-we-collect',
    label: 'Information We Collect',
    title: 'Information We Collect',
    body: (
      <>
        <p className="mb-4">We collect information you provide directly to us, including:</p>
        <ul className="flex flex-col gap-2.5">
          {[
            'Enterprise contact information (name, email, phone, organization)',
            'Infrastructure and architectural consultation inquiries',
            'Newsletter and technical whitepaper subscriptions',
            'Career application records and resumes',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-400">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    label: 'How We Use Your Information',
    title: 'How We Use Your Information',
    body: (
      <p>We use the information we collect strictly to respond to technical inquiries, deliver enterprise IT services, provide SLA support, process career applications, and adhere to global legal compliance mandates. We do not sell or monetize personal data.</p>
    ),
  },
  {
    id: 'data-security',
    label: 'Data Security & Zero Trust',
    title: <>Enterprise Data Security &amp; Zero Trust</>,
    body: (
      <p>We implement defense-in-depth security safeguards including TLS 1.3 encryption in transit, AES-256 encryption at rest, Zero Trust identity access controls, and quarterly third-party penetration audits. We are certified under ISO 27001 and SOC 2 Type II.</p>
    ),
  },
  {
    id: 'privacy-rights',
    label: 'Global Privacy Rights',
    title: <>Global Privacy Rights (GDPR, CCPA &amp; HIPAA)</>,
    body: (
      <p>
        Depending on your geographic location, you retain rights to inspect, update, or permanently delete personal data records. Direct all compliance requests to{' '}
        <a href="mailto:info@inovaraa.com" className="text-cyan-400 underline underline-offset-4 hover:no-underline break-all">info@inovaraa.com</a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        kicker="Data Governance"
        title={<>Enterprise <span className="text-gradient">privacy policy</span></>}
        description={
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" aria-hidden="true" />
            Last updated: October 1, 2026
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
