import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';
import FaqSection from '@/components/home/FaqSection';
import JsonLd, { ORG_ID, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { ahmedabadFaqs } from '@/data/faqs';
import { projects } from '@/data/projects';
import { SITE } from '@/data/site';

// Local landing page for "software company in Ahmedabad" searches
const PATH = '/software-development-company-ahmedabad';
const TITLE = 'Software Development Company in Ahmedabad';
const DESCRIPTION =
  'Inovaraa Solutions is a software development company in Ahmedabad, Gujarat, building custom web applications, mobile apps, ERP and CRM systems, AI agents and MCP servers for businesses across Gujarat, India and worldwide.';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${SITE.name}` },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: `${TITLE} | ${SITE.name}`, description: DESCRIPTION, url: PATH },
};

const services: { title: string; desc: string; href: string; color: string; icon: ReactNode }[] = [
  {
    title: 'Custom Software Development',
    desc: 'Web applications, portals, ERP and CRM systems built on .NET, Node.js, Angular and React for Ahmedabad businesses.',
    href: '/services/software-development',
    color: '#22D3EE',
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  },
  {
    title: 'Mobile App Development',
    desc: 'Android and iOS apps with their backend and admin panel, from the first version to app store launch.',
    href: '/services/software-development',
    color: '#34D399',
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>,
  },
  {
    title: 'AI Agents & MCP Servers',
    desc: 'AI assistants and MCP servers that connect Claude, ChatGPT and other tools to your own software and data.',
    href: '/services/ai-agents-mcp-servers',
    color: '#A78BFA',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></>,
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Server setup, deployment, backups and monitoring on Azure, AWS or your own servers, with our partner RytumX.',
    href: '/services/cloud-infrastructure',
    color: '#38BDF8',
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  },
  {
    title: 'Digital Transformation',
    desc: 'Replace spreadsheets, paper and disconnected tools with software that fits how your team actually works.',
    href: '/services/digital-transformation',
    color: '#F59E0B',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  },
  {
    title: 'QA & Managed Services',
    desc: 'In-house testing on every project, plus ongoing support, updates and improvements after launch.',
    href: '/services/managed-services',
    color: '#F472B6',
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>,
  },
];

const reasons: { title: string; desc: string }[] = [
  { title: 'A local team you can meet', desc: 'We are based in Ahmedabad, so workshops and project reviews can happen in person, not only on video calls.' },
  { title: 'Same working hours', desc: 'No time-zone gaps. Questions get answered during your working day, and releases are scheduled around your business.' },
  { title: 'You own everything', desc: 'All code and intellectual property belong to you, pushed to your own repositories from the first week.' },
  { title: 'Clear scope and pricing', desc: 'A written scope, timeline and estimate before work starts, with payments tied to working, demonstrated software.' },
];

const industries = ['Healthcare', 'Logistics & Shipping', 'Finance', 'Insurance', 'Real Estate', 'Food Supply & Retail', 'Sales & Self-Service', 'Education'];

export default function AhmedabadPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: `${TITLE} | ${SITE.name}`,
            description: DESCRIPTION,
            about: { '@id': ORG_ID },
            mainEntity: { '@id': ORG_ID },
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: TITLE, path: PATH },
          ]),
          faqSchema(ahmedabadFaqs),
        ]}
      />

      <PageHero
        crumb="Ahmedabad"
        kicker="Ahmedabad · Gujarat · India"
        title={<>Software development company in <span className="text-gradient">Ahmedabad</span></>}
        description={
          <>
            {SITE.name} is an Ahmedabad-based team building custom web applications, mobile apps, ERP and CRM systems, AI agents and
            MCP servers, for businesses in Gujarat, across India and worldwide.
          </>
        }
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Get a free estimate
          <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
        <a href={SITE.phoneHref} className="btn btn--secondary btn--lg">
          Call {SITE.phone}
        </a>
      </PageHero>

      {/* Services */}
      <section className="py-24 relative" aria-labelledby="ahd-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="What we build"
            id="ahd-services-heading"
            title={<>Software services for <span className="text-gradient">Ahmedabad businesses</span></>}
            description="One in-house team for design, development and QA, from the first version of your product to long-term support."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${(i % 3) * 90}ms`, '--tile': s.color } as CSSProperties}
                className="surface spotlight lift group rounded-[1.75rem] p-7 flex flex-col"
              >
                <span className="icon-tile mb-6">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why a local team */}
      <section className="py-24 relative" aria-labelledby="ahd-why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <SectionHeading
            align="left"
            kicker="Why Inovaraa"
            id="ahd-why-heading"
            title={<>Why work with an <span className="text-gradient">Ahmedabad team</span></>}
            description={`${projects.length}+ projects delivered across 8 industries, by a team led by Tejas Thakkar (CEO), Nikhil Mahindrakar (Director) and Vasu Thakkar (CTO).`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={r.title} suppressHydrationWarning data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties} className="surface rounded-[1.5rem] p-6">
                <span className="font-mono text-xs font-bold text-cyan-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 relative" aria-labelledby="ahd-industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="ahd-industries-heading" suppressHydrationWarning data-reveal className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Industries we serve from Ahmedabad
          </h2>
          <div suppressHydrationWarning data-reveal style={{ '--d': '100ms' } as CSSProperties} className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {industries.map((name) => (
              <Link key={name} href="/industries" className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectsDelivered limit={3} showViewAll showImpact={false} />

      <FaqSection faqs={ahmedabadFaqs} />
    </>
  );
}
