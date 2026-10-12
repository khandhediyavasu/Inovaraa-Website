import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogCover } from '@/components/home/FeaturedBlog';
import JsonLd, { ORG_ID, breadcrumbSchema } from '@/components/seo/JsonLd';
import { SITE } from '@/data/site';
import { leaders } from '@/data/team';

interface BlogPostData {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; role: string; avatar: string };
  excerpt: string;
  content: { heading: string; paragraphs: string[] }[];
  keyTakeaways: string[];
}

const blogDatabase: Record<string, BlogPostData> = {
  'what-is-an-mcp-server': {
    title: 'What Is an MCP Server? A Practical Guide to Building Model Context Protocol Servers',
    category: 'AI & Analytics',
    readTime: '4 min',
    date: 'Oct 9, 2026',
    author: { name: 'Vasu Thakkar', role: 'CTO, Inovaraa Solutions', avatar: 'VT' },
    excerpt: 'MCP lets AI assistants such as Claude and ChatGPT use your APIs, databases and tools in a safe, standard way. Here is what an MCP server is, how it works and how we build production-ready ones.',
    keyTakeaways: [
      'MCP (Model Context Protocol) is an open standard that connects AI assistants to your tools and data through one consistent interface.',
      'An MCP server exposes tools, resources and prompts, and any MCP-compatible client can use them without a custom integration.',
      'A production MCP server needs the same care as any API: authentication, least-privilege access, input validation, logging and tests.'
    ],
    content: [
      {
        heading: 'What is the Model Context Protocol (MCP)?',
        paragraphs: [
          'The Model Context Protocol is an open standard, introduced by Anthropic in November 2024, that defines how AI applications connect to outside systems. Instead of writing a separate plugin for every assistant, you build one MCP server and every compatible client can use it.',
          'A common way to picture it is a USB-C port for AI: one standard connector between models and the business systems they need, such as your CRM, database, ticketing tool or internal documents.'
        ]
      },
      {
        heading: 'How an MCP server works',
        paragraphs: [
          'An AI application (the host) runs an MCP client, which connects to one or more MCP servers. Each server describes what it can do, and the model decides when to use it.',
          '1. Tools: actions the model can call, such as "create_invoice" or "search_orders", each with a JSON Schema describing its inputs.',
          '2. Resources: read-only context the model can load, such as a customer record, a file or a report.',
          '3. Prompts: reusable templates that guide the model through a task in a consistent way.',
          'Servers run locally over standard input/output (stdio) for desktop tools, or remotely over Streamable HTTP so a whole team can share them.'
        ]
      },
      {
        heading: 'Where MCP servers are useful',
        paragraphs: [
          'Any workflow where people copy data between an AI assistant and a business system is a good candidate. Typical examples are letting an assistant look up orders in an ERP, draft and file support tickets, query a reporting database, or search internal documentation with proper access control.',
          'Because MCP is a shared standard, one server works across a growing list of clients, including Claude, ChatGPT, Visual Studio Code with GitHub Copilot, and Cursor. You build the integration once instead of once per assistant.'
        ]
      },
      {
        heading: 'How we build a production-ready MCP server',
        paragraphs: [
          '1. Start from the job: list the questions and actions people actually need, and expose the smallest useful set of tools.',
          '2. Pick an official SDK that matches your stack. There are SDKs for TypeScript, Python, C#/.NET and other languages, so the server can sit next to your existing code.',
          '3. Write clear tool names, descriptions and input schemas. The model chooses tools from these descriptions, so precise wording directly improves accuracy.',
          '4. Test with the MCP Inspector and with real clients, including failure cases such as missing data and invalid input.',
          '5. Deploy it locally for individual use, or as a remote HTTP server behind authentication (OAuth for remote servers) with monitoring and logs.'
        ]
      },
      {
        heading: 'Security checklist for MCP servers',
        paragraphs: [
          'An MCP server gives an AI model real capabilities, so treat it like a public API. Grant each tool the least privilege it needs, validate every input on the server, and keep secrets out of tool responses.',
          'Ask for human confirmation before destructive or financial actions, log every tool call with the user who triggered it, and apply rate limits. Review tool descriptions for prompt-injection risks when tools read untrusted content.'
        ]
      },
      {
        heading: 'Need an MCP server for your product?',
        paragraphs: [
          'Inovaraa Solutions designs, builds and hosts MCP servers and AI agents for teams running .NET, Node.js, Angular, React and Python systems. We handle the tool design, security, server setup and deployment so your users can work with your product directly from their AI assistant.',
          'Tell us which system you want to connect and we will come back with a scope, timeline and estimate.'
        ]
      }
    ]
  },
  'enterprise-ai-readiness-framework': {
    title: 'The Enterprise AI Readiness Framework: 5 Steps to Production-Ready ML',
    category: 'AI & Analytics',
    readTime: '3 min',
    date: 'Oct 2, 2026',
    author: { name: 'Vasu Thakkar', role: 'CTO, Inovaraa Solutions', avatar: 'VT' },
    excerpt: 'Moving from AI pilots to production requires more than good models. We break down the data, infrastructure, operations and ownership questions to answer before you go live.',
    keyTakeaways: [
      'Most AI pilots stall because of data, operations and ownership, not because of the model itself.',
      'Keep sensitive data in infrastructure you control, and only give the model content each user is allowed to see.',
      'Plan for evaluation, monitoring and retraining from day one. Production AI is an ongoing process, not a single release.'
    ],
    content: [
      {
        heading: 'Why AI Pilots Get Stuck at the Proof-of-Concept Stage',
        paragraphs: [
          'Many AI initiatives never make it past a promising demo. The reason is rarely the model. More often it is everything around it: messy data, no plan for running the system day to day, and no one clearly responsible for the result.',
          'Before committing to a production rollout, look honestly at four areas: the quality and lineage of your data, the infrastructure the system will run on, how the model will be monitored and updated, and whether business and technical teams agree on what success looks like. The five steps below cover each of them.'
        ]
      },
      {
        heading: 'Step 1: Unify Siloed Data',
        paragraphs: [
          'Useful models need clean, consistent and up-to-date data. Bringing data from separate systems into one well-structured store, whether that is a lakehouse on a platform such as Snowflake or Databricks or a well-designed SQL database, gives every model the same source of truth.',
          'Simple automated checks, such as validating schemas and flagging missing or out-of-range values before data reaches a model, catch many problems before users ever see them.'
        ]
      },
      {
        heading: 'Step 2: Deploy Guardrailed Generative AI and RAG',
        paragraphs: [
          'For generative AI, retrieval-augmented generation (RAG) lets a language model answer from your own documents instead of relying on memory alone. Storing those documents in a vector database (such as Pinecone, Milvus or pgvector) and returning the source with every answer leads to fewer hallucinations and traceable sources.',
          'Apply the same access rules your documents already have, so people only receive answers drawn from content they are allowed to read. Keep sensitive data in infrastructure and accounts you control.'
        ]
      },
      {
        heading: 'Step 3: Establish MLOps CI/CD Pipelines',
        paragraphs: [
          'Production AI is not a one-time deployment. Data changes over time, and a model that worked well at launch can slowly get worse. Automated pipelines can re-evaluate or retrain a model when monitoring shows its inputs or accuracy drifting.',
          'A model registry keeps every version together with its training data and metrics, so you can compare versions, roll out changes gradually and roll back quickly when something goes wrong.'
        ]
      },
      {
        heading: 'Step 4: Measure Quality Before and After Launch',
        paragraphs: [
          'Decide early how you will judge whether the system is good enough. For a classifier, that might be precision and recall on a held-out test set. For an assistant, it might be a list of real questions with agreed answers that you re-run after every change.',
          'Once the system is live, track the same measures alongside response time, cost per request and user feedback. Regularly reading a sample of real conversations catches issues that automated metrics miss.'
        ]
      },
      {
        heading: 'Step 5: Assign Ownership and Roll Out Gradually',
        paragraphs: [
          'Every AI system needs a named owner on the business side and on the technical side: someone who decides what "good" means, and someone who keeps it running. Without both, issues sit unresolved and trust fades.',
          'Start with a small group of users, collect feedback, fix what breaks and expand step by step. A gradual rollout also gives people time to learn when to rely on the system and when to double-check it.'
        ]
      }
    ]
  },
  'multi-cloud-vs-hybrid-cloud': {
    title: 'Multi-Cloud vs Hybrid Cloud: Making the Right Architecture Decision',
    category: 'Cloud Infrastructure',
    readTime: '3 min',
    date: 'Sep 28, 2026',
    author: { name: 'Vasu Thakkar', role: 'CTO, Inovaraa Solutions', avatar: 'VT' },
    excerpt: 'The cloud strategy you choose today will shape your infrastructure for years. Here is how to evaluate multi-cloud and hybrid cloud for your organization.',
    keyTakeaways: [
      'Hybrid cloud suits organizations that must keep certain data on their own servers or have recent on-premises hardware investments.',
      'Multi-cloud reduces dependence on a single provider but adds networking, data-transfer and operational costs if it is not planned carefully.',
      'Infrastructure as code and containers (for example, Terraform and Kubernetes) keep environments consistent across providers.'
    ],
    content: [
      {
        heading: 'Demystifying Multi-Cloud and Hybrid Cloud',
        paragraphs: [
          'The two terms are often used interchangeably, but they solve different problems. Multi-cloud means using services from two or more public cloud providers, such as AWS and Google Cloud. Hybrid cloud connects your own on-premises or private infrastructure with one or more public clouds.',
          'The right choice depends on your compliance requirements, latency needs, existing hardware and the skills of your team, far more than on industry trends.'
        ]
      },
      {
        heading: 'When to Choose Hybrid Cloud',
        paragraphs: [
          'Hybrid cloud is a strong fit when certain data must stay on servers you control, for example because of regulation or contractual commitments, while other workloads benefit from the elasticity of the public cloud. Organizations in finance and healthcare often fall into this group.',
          'It also makes sense when you have recently invested in on-premises hardware that still has years of useful life. Moving new or bursty workloads to the cloud first lets you get value from both.'
        ]
      },
      {
        heading: 'When Multi-Cloud Makes Sense',
        paragraphs: [
          'Multi-cloud is worth considering when a specific provider offers a service you genuinely need, such as a particular AI or data product, or when customers or regulators require you to avoid depending on a single vendor.',
          'The trade-off is complexity. Each provider has its own identity system, networking model, billing and tooling, and moving data between clouds costs money. For many small and mid-sized teams, one well-run cloud with good backups and portable code is simpler and cheaper.'
        ]
      },
      {
        heading: 'Managing Complexity with Terraform and Kubernetes',
        paragraphs: [
          'If you do run across several environments, define your infrastructure as code with a tool such as Terraform, and package applications in containers orchestrated by Kubernetes or a managed equivalent. This keeps environments consistent and repeatable.',
          'Bring logs and metrics together in one observability tool, such as Grafana, Datadog or your provider\'s native monitoring, so your team sees everything in one place.',
          'At Inovaraa, cloud and DevOps work is delivered with our partner RytumX, who handle infrastructure design, deployment and operations alongside our development team.'
        ]
      }
    ]
  },
  'zero-trust-security-implementation': {
    title: 'Zero Trust Security Architecture: Implementation Guide for Enterprises',
    category: 'Cybersecurity',
    readTime: '2 min',
    date: 'Sep 22, 2026',
    author: { name: 'Vasu Thakkar', role: 'CTO, Inovaraa Solutions', avatar: 'VT' },
    excerpt: 'Zero trust is no longer optional. This step-by-step guide covers how to plan and introduce a zero trust security architecture without disrupting day-to-day work.',
    keyTakeaways: [
      'Never trust, always verify: every request should be authenticated, authorized and encrypted.',
      'Network segmentation limits how far an attacker can move if one device is compromised.',
      'Identity is now the main security boundary, so strong authentication comes first.'
    ],
    content: [
      {
        heading: 'The End of the Castle-and-Moat Perimeter',
        paragraphs: [
          'Remote work, SaaS tools and cloud hosting mean that company data no longer sits behind a single office firewall. On a flat network, an attacker who compromises one laptop can often reach far more than they should.',
          'Zero trust starts from a different assumption: any device or account could be compromised. Every user and service gets only the access it needs (least privilege), and every request is checked.'
        ]
      },
      {
        heading: 'The Five Pillars of Zero Trust',
        paragraphs: [
          '1. Identity: multi-factor authentication, risk-based conditional access and passwordless sign-in where possible.',
          '2. Devices: checking device health and patch level before granting access.',
          '3. Networks: segmentation that isolates sensitive systems, so one breach does not expose everything.',
          '4. Applications: validating every session and API call instead of trusting anything inside the network.',
          '5. Data: encryption at rest and in transit, with monitoring for data leaving places it should not.'
        ]
      },
      {
        heading: 'A Practical Rollout Order',
        paragraphs: [
          'Zero trust is a direction, not a product you install over a weekend. Trying to change everything at once usually disrupts people and stalls. A step-by-step approach works better.',
          '1. Inventory: list your users, devices, applications and where sensitive data lives. You cannot protect what you have not mapped.',
          '2. Identity first: turn on multi-factor authentication for every account, starting with administrators and remote access.',
          '3. Least privilege: review who can access what, remove unused accounts and replace shared credentials with individual ones.',
          '4. Segment and monitor: separate critical systems, centralize logs and alert on unusual sign-ins or data access.'
        ]
      },
      {
        heading: 'Avoiding Disruption',
        paragraphs: [
          'Introduce new controls in monitoring or report-only mode first, so you can see what would be blocked before you block it. Tell staff about changes in advance and give them a clear way to get help.',
          'Security that people work around is not security. The goal is controls that are strong but predictable, so the safe path is also the easy one. Review access regularly, because permissions tend to grow over time.'
        ]
      }
    ]
  },
  'why-digital-transformation-fails': {
    title: 'Why Most Digital Transformation Programs Fail (And How to Avoid Them)',
    category: 'Digital Transformation',
    readTime: '2 min',
    date: 'Sep 15, 2026',
    author: { name: 'Tejas Thakkar', role: 'CEO, Inovaraa Solutions', avatar: 'TT' },
    excerpt: 'Many digital transformation programs fall short of their goals. Here is what tends to separate the ones that succeed, and how to put your program on the right path.',
    keyTakeaways: [
      'Transformation is mostly about people and process. Technology alone does not change how work gets done.',
      'Break multi-year plans into small releases that deliver value every few weeks.',
      'Tie each initiative to clear measures such as time saved, error rates or customer satisfaction.'
    ],
    content: [
      {
        heading: 'The Illusion of Technology as a Silver Bullet',
        paragraphs: [
          'Buying new software does not transform anything on its own. Without changing workflows, encouraging new habits and training people, organizations often just automate the inefficiencies they already had.',
          'Successful programs usually start from the customer or employee journey and work backward to the systems that need to change.'
        ]
      },
      {
        heading: 'Starting Without Clear Goals',
        paragraphs: [
          'A program described as "going digital" is hard to steer. Before choosing tools, write down the specific problems you are solving: slow approvals, duplicate data entry, customers waiting for updates. Each one gives you something you can measure.',
          'Clear goals also make it easier to say no to features that sound impressive but do not move those measures.'
        ]
      },
      {
        heading: 'Adopting the Strangler Fig Modernization Pattern',
        paragraphs: [
          'Instead of a risky "big bang" rewrite that takes years before anyone sees value, replace legacy modules one at a time with modern services, and keep the old system running until each new piece is proven.',
          'Each step is small enough to test with real users. If something goes wrong, the impact is limited and easy to roll back.'
        ]
      },
      {
        heading: 'Keeping People On Board',
        paragraphs: [
          'The people who use a system every day know where it really hurts. Involve them early, show them working software often and act on their feedback. Give each change a business owner who can make decisions quickly.',
          'Training and support after launch matter as much as the build itself. A tool people do not trust or understand will quietly be replaced by spreadsheets and email.'
        ]
      }
    ]
  },
  'finops-cut-cloud-costs': {
    title: 'FinOps in Practice: How to Cut Cloud Costs Without Cutting Capabilities',
    category: 'Cloud Infrastructure',
    readTime: '2 min',
    date: 'Sep 8, 2026',
    author: { name: 'Nikhil Mahindrakar', role: 'Director, Inovaraa Solutions', avatar: 'NM' },
    excerpt: 'Cloud bills creeping up every month? Here are practical habits that help teams understand and control cloud spend without slowing down their products.',
    keyTakeaways: [
      'Shut down non-production environments outside working hours.',
      'Use commitments and savings plans only for steady, well-understood baseline usage.',
      'Tag every cloud resource with an owner, environment and project.'
    ],
    content: [
      {
        heading: 'The Hidden Traps of Unchecked Cloud Consumption',
        paragraphs: [
          'Unattached storage volumes, oversized database instances and forgotten test environments quietly add to the bill every month. Because cloud spend is spread across many small line items, it is easy to miss until the total becomes a problem.',
          'FinOps brings financial accountability to this variable spending: engineering, finance and product teams share responsibility for what the cloud costs and why.'
        ]
      },
      {
        heading: 'Start with Visibility',
        paragraphs: [
          'You cannot reduce what you cannot see. Tag every resource with an owner, environment and project, and use your provider\'s cost tools (such as AWS Cost Explorer, Azure Cost Management or Google Cloud billing reports) to break spending down by those tags.',
          'Set budgets and alerts so the right person hears about an unexpected spike within days, not at the end of the quarter.'
        ]
      },
      {
        heading: 'Quick Wins That Rarely Hurt',
        paragraphs: [
          '1. Idle environments: shut down development and staging environments outside working hours.',
          '2. Right-sizing: compare instance sizes with actual CPU and memory use, and scale down where there is consistent headroom.',
          '3. Cleanup: delete unattached disks, old snapshots and unused IP addresses on a regular schedule.',
          '4. Storage tiers: move rarely accessed data to cheaper storage classes with lifecycle rules.'
        ]
      },
      {
        heading: 'Commitments for Steady Workloads',
        paragraphs: [
          'Once usage is stable and well understood, reserved instances or savings plans can lower the price of baseline compute in exchange for a one- or three-year commitment.',
          'Commit only to what you are confident you will use. Variable workloads are usually better left on demand, or moved to spot capacity where interruptions are acceptable.'
        ]
      },
      {
        heading: 'How We Work on Cloud Costs',
        paragraphs: [
          'Cloud and DevOps work at Inovaraa, including cost reviews, is delivered together with our partner RytumX. Our developers focus on the application side, such as efficient queries, caching and sensible scaling settings, while RytumX handles the infrastructure.',
          'If your cloud bill has grown faster than your product, get in touch and we can look at it together.'
        ]
      }
    ]
  },
  'modern-data-platform-architecture': {
    title: 'Building a Modern Data Platform: From Architecture to Governance',
    category: 'AI & Analytics',
    readTime: '2 min',
    date: 'Sep 1, 2026',
    author: { name: 'Vasu Thakkar', role: 'CTO, Inovaraa Solutions', avatar: 'VT' },
    excerpt: 'A data platform is only as good as its architecture. We outline the key decisions, from storage layers to governance, that determine long-term success.',
    keyTakeaways: [
      'Separate storage from compute so each can scale, and be paid for, independently.',
      'Use a tool such as dbt for modular, version-controlled data transformations.',
      'Treat important datasets as products, with clear owners and agreed expectations for freshness and quality.'
    ],
    content: [
      {
        heading: 'Start with the Questions, Not the Tools',
        paragraphs: [
          'A data platform exists to answer business questions reliably. Before choosing technology, list the reports, dashboards and models people need, how fresh the data must be and who owns each source system. That list drives almost every later decision.'
        ]
      },
      {
        heading: 'Storage and Compute Layers',
        paragraphs: [
          'Modern warehouses and lakehouses, such as Snowflake, BigQuery or Databricks, let you store data cheaply and scale processing separately. For smaller volumes, a well-tuned PostgreSQL or SQL Server database is often enough. Pick the simplest option that fits your data and your team, and grow later.',
          'A common layout keeps raw data exactly as it arrived, a cleaned layer with consistent types and names, and a modeled layer shaped for reporting. Keeping the raw layer means you can always rebuild if a transformation turns out to be wrong.'
        ]
      },
      {
        heading: 'Transformations as Code',
        paragraphs: [
          'Write transformations in SQL with a tool like dbt and keep them in version control. Changes go through code review, tests check for nulls, duplicates and broken relationships, and documentation is generated from the same code.'
        ]
      },
      {
        heading: 'The Shift from Centralized Warehouses to Data Mesh',
        paragraphs: [
          'As organizations grow, a single central data team can become a bottleneck. The data mesh approach lets domain teams own and publish their own data products while following shared governance standards.',
          'Data mesh is an organizational choice more than a technical one, and it usually pays off only once several teams produce and consume data independently. Smaller organizations are often better served by one well-governed platform.'
        ]
      },
      {
        heading: 'Governance That People Will Follow',
        paragraphs: [
          'Good governance is mostly about clarity: who owns each dataset, who can access it, how sensitive it is and what each field means. Keep a simple catalog, apply role-based access and mask personal data where it is not needed.',
          'Start light and add rules as real needs appear. Heavy processes introduced too early tend to be ignored.'
        ]
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(blogDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogDatabase[slug];
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `/blog/${slug}`, images: ['/opengraph-image'] },
  };
}

const categoryColors: Record<string, [string, string]> = {
  'AI & Analytics': ['#6366F1', '#A78BFA'],
  'Cloud Infrastructure': ['#0EA5E9', '#22D3EE'],
  Cybersecurity: ['#059669', '#34D399'],
  'Digital Transformation': ['#F59E0B', '#F472B6'],
};

const colorsFor = (category: string) => categoryColors[category] ?? ['#6366F1', '#22D3EE'];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Chevron = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
);

// Paragraphs written as "1. Label: text" render as numbered pillar rows
function Paragraph({ text, accent }: { text: string; accent: string }): ReactNode {
  const match = text.match(/^(\d+)\.\s+([^:]+):\s+(.*)$/);
  if (!match) {
    return <p className="text-[1.0625rem] text-slate-300 leading-[1.85] mb-5">{text}</p>;
  }
  const [, num, label, body] = match;
  return (
    <div className="flex gap-4 items-start py-4 border-t border-white/10 first-of-type:border-t-0">
      <span
        className="icon-tile shrink-0 !w-10 !h-10 !rounded-xl font-display font-extrabold text-sm"
        style={{ '--tile': accent } as CSSProperties}
        aria-hidden="true"
      >
        {num.padStart(2, '0')}
      </span>
      <p className="text-[1.0625rem] text-slate-300 leading-[1.75]">
        <span className="sr-only">{num}. </span>
        <strong className="text-white font-semibold">{label}:</strong> {body}
      </p>
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) {
    notFound();
  }

  const slugs = Object.keys(blogDatabase);
  const index = slugs.indexOf(slug);
  const colors = colorsFor(post.category);
  const accent = colors[0];
  const sections = post.content.map((section) => ({ ...section, id: slugify(section.heading) }));
  const related = [1, 2].map((offset) => slugs[(index + offset) % slugs.length]);

  // Articles are attributed to the company unless the byline is one of our real leaders
  const leader = leaders.find((l) => l.name === post.author.name);
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: new Date(post.date).toISOString().slice(0, 10),
            mainEntityOfPage: `${SITE.url}/blog/${slug}`,
            url: `${SITE.url}/blog/${slug}`,
            articleSection: post.category,
            keywords: post.keyTakeaways.join(' '),
            author: leader ? { '@id': `${SITE.url}/team/${leader.slug}#person`, name: leader.name } : { '@id': ORG_ID, name: SITE.name },
            publisher: { '@id': ORG_ID, name: SITE.name },
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      {/* Article hero */}
      <section className="relative overflow-hidden pt-36 sm:pt-44 pb-14 sm:pb-20">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] max-w-none h-[600px] rounded-full pointer-events-none opacity-60"
          style={{ background: `radial-gradient(closest-side, color-mix(in srgb, ${accent} 30%, transparent), transparent)` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
              <nav suppressHydrationWarning data-reveal className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Chevron />
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Chevron />
                <span className="text-cyan-400">{post.category}</span>
              </nav>

              <div suppressHydrationWarning data-reveal style={{ '--d': '60ms' } as CSSProperties} className="kicker mb-6">{post.category}</div>

              <h1
                suppressHydrationWarning data-reveal
                style={{ '--d': '120ms' } as CSSProperties}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.06]"
              >
                {post.title}
              </h1>

              <p suppressHydrationWarning data-reveal style={{ '--d': '180ms' } as CSSProperties} className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>

              <div suppressHydrationWarning data-reveal style={{ '--d': '240ms' } as CSSProperties} className="mt-8 flex items-center gap-x-5 gap-y-4 flex-wrap text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30 ring-2 ring-white/10">
                    {post.author.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold leading-tight">{post.author.name}</div>
                    <div className="text-xs text-slate-500">{post.author.role}</div>
                  </div>
                </div>
                <span className="hidden sm:block w-px h-8 bg-white/10" aria-hidden="true" />
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    Published: {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
                    {post.readTime} read
                  </span>
                </div>
              </div>
            </div>

            <div suppressHydrationWarning data-reveal="right" style={{ '--d': '200ms' } as CSSProperties} className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-dots-fade pointer-events-none" aria-hidden="true" />
              <div className="surface border-glow group rounded-[1.75rem] p-2.5 relative float-slow">
                <BlogCover colors={colors} index={index} category={post.category} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading layout */}
      <section className="pb-24 sm:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_240px] gap-10 xl:gap-14">
            {/* Sticky table of contents */}
            <aside className="hidden lg:block" aria-label="Table of contents">
              <div className="sticky top-28">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">On this page</p>
                <ol className="relative border-l border-white/10 flex flex-col">
                  <li>
                    <a href="#key-takeaways" className="block -ml-px border-l-2 border-transparent pl-4 py-2 text-sm text-slate-400 hover:text-white hover:border-cyan-400 transition-colors">
                      Key takeaways
                    </a>
                  </li>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block -ml-px border-l-2 border-transparent pl-4 py-2 text-sm text-slate-400 leading-snug hover:text-white hover:border-cyan-400 transition-colors">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
                <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                  All articles
                </Link>
              </div>
            </aside>

            <article className="min-w-0 max-w-[720px] w-full mx-auto lg:mx-0">
              {/* Key takeaways */}
              <div id="key-takeaways" suppressHydrationWarning data-reveal className="surface spotlight rounded-[1.75rem] p-6 sm:p-8 mb-14 scroll-mt-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="icon-tile !w-10 !h-10 !rounded-xl" style={{ '--tile': '#22D3EE' } as CSSProperties} aria-hidden="true">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Key takeaways</h2>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {post.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-[0.975rem] text-slate-300 leading-relaxed">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0" aria-hidden="true">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div className="flex flex-col gap-14">
                {sections.map((section, i) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28" suppressHydrationWarning data-reveal>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-xs font-bold" style={{ color: `color-mix(in srgb, ${accent} 70%, var(--ink))` }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 max-w-16" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                      {section.heading}
                    </h2>
                    <div>
                      {section.paragraphs.map((p, idx) => (
                        <Paragraph key={idx} text={p} accent={accent} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Author card */}
              <div suppressHydrationWarning data-reveal className="surface rounded-[1.75rem] p-6 sm:p-7 mt-16 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30 shrink-0">
                  {post.author.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Written by</p>
                  <p className="text-white font-semibold">
                    {leader ? (
                      <Link href={`/team/${leader.slug}`} className="hover:text-cyan-400 transition-colors">{post.author.name}</Link>
                    ) : (
                      post.author.name
                    )}
                  </p>
                  <p className="text-sm text-slate-400">{post.author.role}</p>
                </div>
              </div>

              {/* Back / discuss */}
              <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
                <Link href="/blog" className="btn btn--secondary">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                  Back to all articles
                </Link>
                <Link href="/contact" className="btn btn--primary">
                  Talk to our engineers
                  <Arrow />
                </Link>
              </div>
            </article>

            {/* Decorative rail on wide screens */}
            <div className="hidden xl:block" aria-hidden="true">
              <div className="sticky top-28 flex justify-center pt-4">
                <svg className="w-44 h-44 spin-slow opacity-70" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="60" fill="none" stroke={colors[0]} strokeOpacity="0.4" strokeDasharray="2 8" />
                  <circle cx="100" cy="100" r="88" fill="none" stroke={colors[1]} strokeOpacity="0.3" />
                  <circle cx="188" cy="100" r="4" fill={colors[1]} />
                  <circle cx="100" cy="40" r="3.5" fill={colors[0]} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep reading */}
      <section className="pb-24 sm:pb-28 relative" aria-labelledby="more-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <div suppressHydrationWarning data-reveal className="kicker mb-5">Keep reading</div>
              <h2 id="more-heading" suppressHydrationWarning data-reveal style={{ '--d': '80ms' } as CSSProperties} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05]">
                More from <span className="text-gradient">our blog</span>
              </h2>
            </div>
            <Link suppressHydrationWarning data-reveal href="/blog" className="btn btn--secondary shrink-0 self-start sm:self-auto">
              All articles
              <Arrow />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((relSlug, i) => {
              const rel = blogDatabase[relSlug];
              return (
                <Link
                  key={relSlug}
                  href={`/blog/${relSlug}`}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 100}ms` } as CSSProperties}
                  className="surface spotlight lift group rounded-[1.75rem] p-2.5 grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] gap-2 sm:gap-5 items-center"
                >
                  <BlogCover colors={colorsFor(rel.category)} index={slugs.indexOf(relSlug)} category={rel.category} />
                  <div className="p-4 sm:p-2 sm:pr-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                      <span>{rel.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span>{rel.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">{rel.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
