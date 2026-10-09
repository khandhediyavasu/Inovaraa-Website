import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

// Industries we have actually shipped for, with the matching projects
const industries: { title: string; desc: string; projects: string[]; color: string; icon: ReactNode }[] = [
  {
    title: 'Healthcare',
    desc: 'Care management, clinic booking, patient records and invoicing for providers and clinics.',
    projects: ['Ram Care', 'Plus Physio'],
    color: '#F472B6',
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    title: 'Logistics & Shipping',
    desc: 'Transport orders, live vehicle tracking, dispatch, ledgers and billing in one system.',
    projects: ['Shipping Management'],
    color: '#38BDF8',
    icon: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  },
  {
    title: 'Finance & Compliance',
    desc: 'Risk, audit and data-classification tooling for finance teams with strict controls.',
    projects: ['EUC Compliance'],
    color: '#A78BFA',
    icon: <><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></>,
  },
  {
    title: 'Real Estate',
    desc: 'Inquiry tracking, unit booking, receipts and buy-sell flows for developers.',
    projects: ['Shaligram BuildCon'],
    color: '#FBBF24',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  },
  {
    title: 'Food Supply & Retail',
    desc: 'Supplier, product and pricing management connected to ERP systems and online stores.',
    projects: ['Food Stock', 'Tavili Native'],
    color: '#34D399',
    icon: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>,
  },
  {
    title: 'Sales & Self-Service',
    desc: 'CRMs that track every lead to revenue, and kiosks with UPI payments and receipts.',
    projects: ['Sales CRM', 'Vadtal Kiosk'],
    color: '#22D3EE',
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>,
  },
];

export default function Industries() {
  return (
    <section className="py-28 relative" id="industries" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Industries"
          id="industries-heading"
          title={<>Proven in the sectors <span className="text-gradient">that matter to you</span></>}
          description="We have shipped real products in each of these industries, so we already speak your language."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <Link
              key={ind.title}
              href="/industries"
              suppressHydrationWarning data-reveal
              style={{ '--d': `${(i % 3) * 100}ms`, '--tile': ind.color } as CSSProperties}
              className="surface spotlight lift group relative rounded-[1.75rem] p-7 flex flex-col min-h-[260px] overflow-hidden"
            >
              {/* Corner glow that grows on hover */}
              <span
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700"
                style={{ background: ind.color }}
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between mb-8">
                <span className="icon-tile">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ind.icon}
                  </svg>
                </span>
                <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:-rotate-45 group-hover:border-white/30 transition-all duration-300" aria-hidden="true">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-2">{ind.title}</h3>
              <p className="relative text-sm text-slate-400 leading-relaxed mb-6">{ind.desc}</p>
              <div className="relative mt-auto flex flex-wrap gap-1.5">
                {ind.projects.map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: ind.color }} />
                    {p}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
