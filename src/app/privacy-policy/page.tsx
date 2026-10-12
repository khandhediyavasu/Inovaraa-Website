import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Inovaraa Solutions collects, uses and protects the information you send through our website. No analytics, no tracking cookies and no selling of data.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy-policy' },
};

const linkCls = 'text-cyan-400 underline underline-offset-4 hover:no-underline break-all';
const Email = () => <a href="mailto:info@inovaraa.com" className={linkCls}>info@inovaraa.com</a>;

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-400">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sections: { id: string; title: ReactNode; label: string; body: ReactNode }[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    body: (
      <p>Inovaraa Solutions (&ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a software development company based in India. This policy explains, in plain language, what information we collect when you use inovaraa.com, what we do with it and the choices you have. We process personal data in line with India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
    ),
  },
  {
    id: 'information-we-collect',
    label: 'Information We Collect',
    title: 'Information We Collect',
    body: (
      <>
        <p className="mb-4">We only collect what you choose to send us:</p>
        <Bullets
          items={[
            'Contact form: your first and last name, email address, company, phone number (optional), the service you are interested in and your message.',
            'Newsletter form: your email address only.',
            'Emails you send us: whatever you include, such as project details or, if you apply for a job, your CV.',
          ]}
        />
        <p className="mt-4">We do not use analytics tools, tracking cookies or advertising on this website, so we do not collect information about how you browse.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    label: 'How We Use It',
    title: 'How We Use Your Information',
    body: (
      <>
        <p className="mb-4">We use your information to:</p>
        <Bullets
          items={[
            'Reply to your message and follow up about your project or question.',
            'Send you new articles if you subscribed to our newsletter.',
            'Consider you for current or future roles if you emailed us your CV. We keep CVs only for that purpose.',
          ]}
        />
        <p className="mt-4">We do not sell, rent or trade your personal data, and we do not use it for advertising.</p>
      </>
    ),
  },
  {
    id: 'storage-and-sharing',
    label: 'Storage & Sharing',
    title: <>How We Store and Share It</>,
    body: (
      <>
        <p className="mb-4">When you submit the contact or newsletter form, your details are sent to our server, where two things happen:</p>
        <Bullets
          items={[
            <>The submission is emailed to <Email /> through our email provider, GoDaddy (SMTP).</>,
            'The submission is saved as a row in a spreadsheet (Excel file) on our server, so we can keep track of inquiries and follow up.',
          ]}
        />
        <p className="mt-4">Access is limited to our team. Apart from our email provider, we share your information only if you ask us to (for example, to involve one of our partners in your project) or if the law requires it.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    label: 'Cookies & Browser Storage',
    title: 'Cookies & Browser Storage',
    body: (
      <p>We do not use tracking or advertising cookies. The only thing this website stores in your browser is a <code className="font-mono text-[0.9em] text-white">theme</code> setting in local storage, which remembers whether you prefer light or dark mode. It never leaves your device, and you can clear it at any time in your browser settings.</p>
    ),
  },
  {
    id: 'retention',
    label: 'How Long We Keep It',
    title: 'How Long We Keep It',
    body: (
      <p>We keep your information for as long as we need it to respond to you and follow up, or until you ask us to delete it. Newsletter subscribers stay on the list until they unsubscribe.</p>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    title: 'Keeping Your Information Safe',
    body: (
      <p>We take reasonable steps to protect your information, such as limiting access to the people on our team who need it. No website, email or storage system is perfectly secure, so we cannot guarantee absolute security, but if a breach ever affects your data, we will inform you as the DPDP Act requires.</p>
    ),
  },
  {
    id: 'privacy-rights',
    label: 'Your Rights',
    title: 'Your Rights',
    body: (
      <>
        <p className="mb-4">Under the DPDP Act, you can ask us to:</p>
        <Bullets
          items={[
            'Tell you what personal data we hold about you.',
            'Correct or update it.',
            'Delete it, or stop using it (withdraw your consent).',
            'Remove you from our newsletter.',
          ]}
        />
        <p className="mt-4">
          Just email <Email /> and we will respond as soon as we can. If you are not satisfied with our response, you can raise a complaint with the Data Protection Board of India.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    label: 'Children',
    title: 'Children',
    body: (
      <p>Our website and services are meant for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you believe a child has sent us their details, please contact us and we will delete them.</p>
    ),
  },
  {
    id: 'changes',
    label: 'Changes to This Policy',
    title: 'Changes to This Policy',
    body: (
      <p>We may update this policy from time to time. When we do, we will change the &ldquo;Last updated&rdquo; date at the top of this page.</p>
    ),
  },
  {
    id: 'contact',
    label: 'Contact Us',
    title: 'Contact Us',
    body: (
      <p>Questions about this policy or your data? Email <Email />.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        kicker="Your Data"
        title={<>Privacy <span className="text-gradient">policy</span></>}
        description={
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" aria-hidden="true" />
            Last updated: October 12, 2026
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
