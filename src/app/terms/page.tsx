import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply to using the Inovaraa Solutions website, plus how our client project agreements, code ownership and partners fit in.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/terms' },
};

const linkCls = 'text-cyan-400 underline underline-offset-4 hover:no-underline break-all';

const sections: { id: string; title: ReactNode; label: string; body: ReactNode }[] = [
  {
    id: 'about',
    label: 'About These Terms',
    title: 'About These Terms',
    body: (
      <p>These terms apply to your use of inovaraa.com, the website of Inovaraa Solutions (&ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;), a software development company based in Ahmedabad, Gujarat, India. By using the website, you agree to these terms. If you do not agree, please do not use the website.</p>
    ),
  },
  {
    id: 'use-of-website',
    label: 'Use of the Website',
    title: 'Use of the Website',
    body: (
      <p>You may browse the website and share its pages for any lawful purpose. Please do not try to disrupt the website, gain unauthorized access to it or our systems, send spam or automated submissions through our forms, or copy large parts of the content and present it as your own.</p>
    ),
  },
  {
    id: 'our-services',
    label: 'Our Services',
    title: 'Our Services',
    body: (
      <p>The website describes the services we offer, such as custom software development, AI agents and MCP servers, and related work. It is general information, not an offer. Every project we take on is governed by a separate written agreement or proposal with the client, which sets out the scope, timeline, price and other terms. If that agreement and these terms differ, the agreement applies.</p>
    ),
  },
  {
    id: 'intellectual-property',
    label: 'Intellectual Property',
    title: <>Intellectual Property &amp; Code Ownership</>,
    body: (
      <>
        <p className="mb-4">The content of this website, including text, graphics and our name and logo, belongs to Inovaraa Solutions unless stated otherwise.</p>
        <p>For client projects, the client owns the source code we write for them once the related invoices are paid, unless the agreement says otherwise. Open-source libraries and third-party components used in a project remain under their own licenses.</p>
      </>
    ),
  },
  {
    id: 'third-parties',
    label: 'Third-Party Services & Partners',
    title: <>Third-Party Services &amp; Partners</>,
    body: (
      <p>We work with partners where it helps our clients. For example, DevOps and cloud infrastructure work is delivered with our partner RytumX. The website may also link to other websites. We are not responsible for the content or practices of third-party websites and services, and their own terms apply when you use them.</p>
    ),
  },
  {
    id: 'disclaimer',
    label: 'Disclaimer',
    title: 'Disclaimer',
    body: (
      <p>We work to keep the website accurate and up to date, but it is provided &ldquo;as is.&rdquo; Articles and other content are general information, not professional advice for your specific situation. We do not promise that the website will always be available or free of errors.</p>
    ),
  },
  {
    id: 'liability',
    label: 'Limitation of Liability',
    title: 'Limitation of Liability',
    body: (
      <p>To the extent the law allows, we are not liable for any indirect, incidental or consequential loss arising from your use of the website or from any of our services. For client work, liability is governed by the agreement for that project. Nothing in these terms limits liability that cannot be limited by law, such as liability for fraud or gross negligence.</p>
    ),
  },
  {
    id: 'changes',
    label: 'Changes to These Terms',
    title: 'Changes to These Terms',
    body: (
      <p>We may update these terms from time to time. When we do, we will change the effective date at the top of this page. Continuing to use the website after a change means you accept the updated terms.</p>
    ),
  },
  {
    id: 'governing-law',
    label: 'Governing Law',
    title: 'Governing Law',
    body: (
      <p>These terms are governed by the laws of India, and any disputes relating to them are subject to the jurisdiction of the courts of India.</p>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:info@inovaraa.com" className={linkCls}>info@inovaraa.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb="Terms of Service"
        kicker="Legal"
        title={<>Terms of <span className="text-gradient">service</span></>}
        description={
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" aria-hidden="true" />
            Effective date: October 12, 2026
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
