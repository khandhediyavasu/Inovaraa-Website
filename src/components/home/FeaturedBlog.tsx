import type { CSSProperties } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const posts = [
  {
    category: 'AI & Analytics',
    title: 'What Is an MCP Server? A Practical Guide to Building Model Context Protocol Servers',
    excerpt: 'MCP lets AI assistants such as Claude and ChatGPT use your APIs, databases and tools safely. Here is how it works and how we build them.',
    readTime: '4 min read',
    date: 'Oct 9, 2026',
    href: '/blog/what-is-an-mcp-server',
    colors: ['#6366F1', '#22D3EE'],
  },
  {
    category: 'AI & Analytics',
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the organizational, data, and infrastructure requirements.',
    readTime: '3 min read',
    date: 'Oct 2, 2026',
    href: '/blog/enterprise-ai-readiness-framework',
    colors: ['#6366F1', '#A78BFA'],
  },
  {
    category: 'Cloud Infrastructure',
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    excerpt: 'How the two approaches differ, and how to decide which one fits your workloads.',
    readTime: '3 min read',
    date: 'Sep 28, 2026',
    href: '/blog/multi-cloud-vs-hybrid-cloud',
    colors: ['#0EA5E9', '#22D3EE'],
  },
];

export default function FeaturedBlog() {
  return (
    <section className="py-28 relative" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading align="left" kicker="Insights" id="blog-heading" title={<>From our <span className="text-gradient">blog</span></>} />
          <Link suppressHydrationWarning data-reveal href="/blog" className="btn btn--secondary shrink-0 md:mb-6">
            All articles
            <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <Link
              key={post.title}
              href={post.href}
              suppressHydrationWarning data-reveal
              style={{ '--d': `${i * 100}ms` } as CSSProperties}
              className="surface lift group rounded-[1.75rem] p-2.5 flex flex-col"
            >
              <BlogCover colors={post.colors} index={i} category={post.category} />
              <div className="p-5 pt-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Generated cover art: gradient mesh + geometric pattern, zooms on hover
export function BlogCover({ colors, index, category }: { colors: string[]; index: number; category: string }) {
  const [a, b] = colors;
  return (
    <div className="relative aspect-[16/10] rounded-[1.4rem] overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: `radial-gradient(circle at 20% 20%, ${b}, transparent 55%), radial-gradient(circle at 80% 90%, ${a}, transparent 60%), linear-gradient(135deg, #0B1226, #111B3A)` }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {index % 3 === 0 &&
            Array.from({ length: 6 }, (_, i) => (
              <circle key={i} cx="250" cy="60" r={20 + i * 24} fill="none" stroke="#FFFFFF" strokeOpacity={0.22 - i * 0.03} />
            ))}
          {index % 3 === 1 &&
            Array.from({ length: 9 }, (_, i) => (
              <rect key={i} x={40 + (i % 3) * 56} y={30 + Math.floor(i / 3) * 50} width="44" height="38" rx="8" fill="#FFFFFF" fillOpacity={0.05 + (i % 4) * 0.04} stroke="#FFFFFF" strokeOpacity="0.2" />
            ))}
          {index % 3 === 2 &&
            Array.from({ length: 8 }, (_, i) => (
              <path key={i} d={`M0 ${40 + i * 22} Q 160 ${i * 22 - 20} 320 ${50 + i * 22}`} fill="none" stroke="#FFFFFF" strokeOpacity={0.08 + i * 0.02} />
            ))}
        </svg>
      </div>
      <span className="absolute left-4 top-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20" style={{ color: '#FFFFFF' }}>
        {category}
      </span>
    </div>
  );
}
