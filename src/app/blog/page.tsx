import { Suspense, type CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import { BlogCover } from '@/components/home/FeaturedBlog';

export const metadata: Metadata = {
  title: 'Blog: AI, MCP & Software Development Insights',
  description: 'Stay ahead with expert insights on AI, cloud infrastructure, cybersecurity, and digital transformation from the Inovaraa Solutions team.',
  alternates: { canonical: '/blog' },
};

const categories = ['All Articles', 'AI & Analytics', 'Cloud Infrastructure', 'Cybersecurity', 'Digital Modernization'];

const categoryColors: Record<string, [string, string]> = {
  'AI & Analytics': ['#6366F1', '#A78BFA'],
  'Cloud Infrastructure': ['#0EA5E9', '#22D3EE'],
  Cybersecurity: ['#059669', '#34D399'],
  'Digital Modernization': ['#F59E0B', '#F472B6'],
};

const posts = [
  {
    category: 'AI & Analytics',
    title: 'What Is an MCP Server? A Practical Guide to Building Model Context Protocol Servers',
    excerpt: 'MCP lets AI assistants such as Claude and ChatGPT use your APIs, databases and tools in a safe, standard way. Here is what an MCP server is, how it works and how we build production-ready ones.',
    readTime: '9 min read',
    date: 'Oct 9, 2026',
    slug: 'what-is-an-mcp-server',
    accent: 'text-cyan-400',
    badge: 'Guide'
  },
  {
    category: 'AI & Analytics',
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the organizational, data, and infrastructure requirements for enterprise AI success.',
    readTime: '8 min read',
    date: 'Oct 2, 2026',
    slug: 'enterprise-ai-readiness-framework',
    accent: 'text-cyan-400',
    badge: 'Research'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    excerpt: 'The cloud strategy you choose today will shape your infrastructure for the next decade. Here is how to evaluate multi-cloud vs hybrid cloud for your enterprise.',
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    slug: 'multi-cloud-vs-hybrid-cloud',
    accent: 'text-emerald-400',
    badge: 'Architecture'
  },
  {
    category: 'Cybersecurity',
    title: 'Zero Trust Security Architecture: Implementation Guide for Enterprises',
    excerpt: 'Zero trust is no longer optional. This step-by-step guide covers how to design and implement a zero trust security architecture without disrupting operations.',
    readTime: '10 min read',
    date: 'Sep 22, 2026',
    slug: 'zero-trust-security-implementation',
    accent: 'text-indigo-400',
    badge: 'Security'
  },
  {
    category: 'Digital Modernization',
    title: 'Why Most Digital Transformation Programs Fail (And How to Avoid It)',
    excerpt: 'Studies show 70% of digital transformation initiatives fail to meet their goals. Here is what differentiates the successful 30% — and how to put your program on the right path.',
    readTime: '7 min read',
    date: 'Sep 15, 2026',
    slug: 'why-digital-transformation-fails',
    accent: 'text-amber-400',
    badge: 'Strategy'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'FinOps in Practice: How to Cut Cloud Costs Without Cutting Capabilities',
    excerpt: 'Cloud costs spiraling out of control? Our FinOps specialists share the frameworks and tools they use to help enterprises reduce cloud spend by 30-60%.',
    readTime: '9 min read',
    date: 'Sep 8, 2026',
    slug: 'finops-cut-cloud-costs',
    accent: 'text-cyan-400',
    badge: 'FinOps'
  },
  {
    category: 'AI & Analytics',
    title: 'Building a Modern Data Platform: From Architecture to Governance',
    excerpt: 'A data platform is only as good as its architecture. We outline the key decisions — from storage layers to governance frameworks — that determine long-term success.',
    readTime: '11 min read',
    date: 'Sep 1, 2026',
    slug: 'modern-data-platform-architecture',
    accent: 'text-pink-400',
    badge: 'Data Mesh'
  },
];

type Post = (typeof posts)[number];

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? '';

function filterHref(cat: string, search: string) {
  const qs = new URLSearchParams();
  if (cat !== 'All Articles') qs.set('category', cat);
  if (search) qs.set('search', search);
  const s = qs.toString();
  return s ? `/blog?${s}#articles` : '/blog#articles';
}

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <PageHero
        crumb="Knowledge Hub"
        kicker="Insights & Blueprints"
        title={<>Technology insights from <span className="text-gradient">our engineers</span></>}
        description="Practical architecture blueprints, technical deep dives, and executive strategies on AI, multi-cloud, security, and digital modernization."
      >
        <a href="#articles" className="btn btn--primary btn--lg">
          Browse articles
          <Arrow />
        </a>
        <a href="#newsletter" className="btn btn--secondary btn--lg">Get the digest</a>
      </PageHero>

      <section id="articles" className="pb-24 sm:pb-28 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter + articles (reads ?category= and ?search=; static list while it streams) */}
          <Suspense fallback={<ArticleList activeCategory="All Articles" search="" />}>
            <FilteredArticles searchParams={searchParams} />
          </Suspense>

          {/* Newsletter */}
          <div
            id="newsletter"
            suppressHydrationWarning data-reveal="scale"
            className="surface border-glow mt-24 rounded-[2rem] px-6 py-14 sm:px-12 relative overflow-hidden scroll-mt-28"
          >
            <div className="absolute inset-0 bg-dots-fade pointer-events-none" aria-hidden="true" />
            <EnvelopeOrbit />
            <div className="relative max-w-xl mx-auto text-center">
              <SectionHeading
                kicker="Newsletter"
                title={<>Never miss a <span className="text-gradient">technical architecture release</span></>}
                description="Monthly technical digest of our highest-impact whitepapers and architectures."
                className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:lg:text-5xl"
              />
              <form action="#" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto p-1.5 rounded-[1.4rem] sm:rounded-full surface-glass">
                <label htmlFor="newsletter-email" className="sr-only">Work email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter work email"
                  required
                  className="flex-1 min-w-0 px-5 py-3 rounded-full bg-transparent text-white text-sm outline-none placeholder:text-slate-500"
                />
                <button type="submit" className="btn btn--primary shrink-0">
                  Subscribe
                  <Arrow />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

async function FilteredArticles({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const search = first(params.search).trim();
  const requested = first(params.category);
  const activeCategory = categories.includes(requested) ? requested : 'All Articles';
  return <ArticleList activeCategory={activeCategory} search={search} />;
}

function ArticleList({ activeCategory, search }: { activeCategory: string; search: string }) {
  const needle = search.toLowerCase();
  const filtered = posts.filter(
    (p) =>
      (activeCategory === 'All Articles' || p.category === activeCategory) &&
      (!needle || [p.title, p.excerpt, p.category, p.badge].some((t) => t.toLowerCase().includes(needle)))
  );
  const [featured, ...rest] = filtered;
  const featuredIndex = featured ? posts.indexOf(featured) : 0;

  return (
    <>
          <div suppressHydrationWarning data-reveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
            <nav className="flex gap-2 flex-wrap" aria-label="Filter by category">
              {categories.map((cat) => {
                const active = cat === activeCategory;
                return (
                  <Link
                    key={cat}
                    href={filterHref(cat, search)}
                    scroll={false}
                    aria-current={active ? 'page' : undefined}
                    className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                      active
                        ? 'text-white bg-gradient-to-r from-indigo-500 to-cyan-500 border-transparent shadow-lg shadow-indigo-500/25'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </nav>
            <p className="text-sm text-slate-500">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
              {search && (
                <>
                  {' '}matching <span className="text-white font-semibold">&ldquo;{search}&rdquo;</span>{' '}
                  <Link href={filterHref(activeCategory, '')} scroll={false} className="text-cyan-400 hover:underline ml-1">Clear search</Link>
                </>
              )}
            </p>
          </div>

          {featured ? (
            <>
              <FeaturedCard post={featured} index={featuredIndex} />

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {rest.map((post, i) => (
                    <PostCard key={post.slug} post={post} index={posts.indexOf(post)} delay={(i % 3) * 100} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div suppressHydrationWarning data-reveal="scale" className="surface rounded-[1.75rem] px-6 py-16 text-center">
              <div className="icon-tile mx-auto mb-5" style={{ '--tile': '#22D3EE' } as CSSProperties}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">No articles found</h2>
              <p className="text-slate-400 mb-7">Try another keyword or browse every article.</p>
              <Link href="/blog#articles" className="btn btn--secondary">View all articles</Link>
            </div>
          )}

    </>
  );
}

function FeaturedCard({ post, index }: { post: Post; index: number }) {
  const colors = categoryColors[post.category] ?? ['#6366F1', '#22D3EE'];
  return (
    <Link
      href={`/blog/${post.slug}`}
      suppressHydrationWarning data-reveal
      className="surface spotlight lift group rounded-[1.75rem] p-2.5 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-2 lg:gap-6"
    >
      <div className="relative">
        <BlogCover colors={colors} index={index} category={post.category} />
        <span className="absolute right-4 top-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center gap-1.5" style={{ color: '#FFFFFF' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 pulse-soft" aria-hidden="true" />
          Featured
        </span>
      </div>
      <div className="p-5 sm:p-7 lg:pl-2 lg:pr-10 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
          <span className="font-bold uppercase tracking-wider" style={{ color: `color-mix(in srgb, ${colors[0]} 70%, var(--ink))` }}>{post.badge}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.12] mb-4 group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-base text-slate-400 leading-relaxed mb-7">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
          Read blueprint
          <Arrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post, index, delay }: { post: Post; index: number; delay: number }) {
  const colors = categoryColors[post.category] ?? ['#6366F1', '#22D3EE'];
  return (
    <Link
      href={`/blog/${post.slug}`}
      suppressHydrationWarning data-reveal
      style={{ '--d': `${delay}ms` } as CSSProperties}
      className="surface spotlight lift group rounded-[1.75rem] p-2.5 flex flex-col"
    >
      <BlogCover colors={colors} index={index} category={post.category} />
      <div className="p-5 pt-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="font-bold uppercase tracking-wider" style={{ color: `color-mix(in srgb, ${colors[0]} 70%, var(--ink))` }}>{post.badge}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span>{post.date}</span>
        </div>
        <h2 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-500 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
            {post.readTime}
          </span>
          <span className="font-semibold text-cyan-400 flex items-center gap-1">
            Read blueprint
            <Arrow className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function EnvelopeOrbit() {
  return (
    <svg className="absolute -right-24 -top-24 w-80 h-80 opacity-60 pointer-events-none hidden sm:block spin-slow" viewBox="0 0 320 320" aria-hidden="true">
      <circle cx="160" cy="160" r="110" fill="none" stroke="var(--brand-1)" strokeOpacity="0.35" strokeDasharray="3 9" />
      <circle cx="160" cy="160" r="150" fill="none" stroke="var(--brand-2)" strokeOpacity="0.25" />
      <circle cx="270" cy="160" r="5" fill="var(--brand-2)" />
      <circle cx="160" cy="10" r="4" fill="var(--brand-1)" />
    </svg>
  );
}
