import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd, { ORG_ID, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { SITE } from '@/data/site';

interface ServiceData {
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  benefits: { title: string; desc: string }[];
  capabilities: { name: string; description: string; highlights: string[] }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  // A real project from src/data/projects.ts. `result` is qualitative: no invented metrics.
  caseStudy?: { client: string; outcome: string; result: string };
  faqs: { q: string; a: string }[];
}

const serviceDatabase: Record<string, ServiceData> = {
  'software-development': {
    title: 'Custom Software Development',
    subtitle: 'Web, mobile and back-office software built around how your business actually works, from the first release to ongoing improvements.',
    icon: '💻',
    overview: 'We build custom web and mobile applications, internal tools and SaaS products with .NET Core, Angular, React, Next.js, Node.js and React Native. Our in-house team has delivered 9+ projects across healthcare, logistics, real estate, food supply and finance. You work directly with the engineers writing the code, and you own everything we build.',
    benefits: [
      { title: 'Software that fits your process', desc: 'We model the system on your real workflows, roles and data instead of forcing you into an off-the-shelf tool.' },
      { title: 'Direct access to the team', desc: 'No layers of account managers. You talk to the developers and testers working on your product.' },
      { title: 'Testing built in', desc: 'QA engineers test every release, with automated tests where they add the most value.' },
      { title: 'Full code ownership', desc: 'You own the source code, designs and documentation, with repository access from day one.' },
    ],
    capabilities: [
      {
        name: 'Web & Mobile Applications',
        description: 'Responsive web apps and cross-platform mobile apps for your customers, staff and partners.',
        highlights: ['React, Next.js & Angular front ends', 'React Native mobile apps', 'Responsive, accessible UI'],
      },
      {
        name: 'APIs & Back-End Services',
        description: 'Reliable back ends and REST APIs built with .NET Core / C# and Node.js, backed by SQL Server or MongoDB.',
        highlights: ['REST API design & documentation', '.NET Core & Node.js services', 'SQL Server & MongoDB data models'],
      },
      {
        name: 'Business Software, CRMs & Portals',
        description: 'Internal systems for bookings, sales, stock, billing and care management, shaped around your operations.',
        highlights: ['Custom workflows & approvals', 'Role-based access', 'Integrations with existing systems'],
      },
      {
        name: 'SaaS & Multi-Tenant Platforms',
        description: 'Products that serve many customers or companies from one codebase, with real-time updates where they are needed.',
        highlights: ['Multi-tenant data separation', 'Real-time dashboards', 'Admin & reporting screens'],
      },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understand your users, workflows and data, then agree on scope and priorities.' },
      { step: '02', title: 'Design & prototype', desc: 'Wireframes and clickable designs, so you can see the product before we build it.' },
      { step: '03', title: 'Build in sprints', desc: 'Working features delivered in short sprints, with demos and feedback along the way.' },
      { step: '04', title: 'Test & launch', desc: 'QA testing, fixes and a planned release, followed by support after launch.' },
    ],
    techStack: ['.NET Core / C#', 'Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'React Native', 'SQL Server', 'MongoDB', 'Docker', 'Azure', 'AWS'],
    caseStudy: {
      client: 'BuildCon',
      outcome: 'A booking system for apartments and shops. It covers inquiries, projects, bookings, receipts and unit buy-sell, with daily inquiry reports.',
      result: 'Inquiries, bookings and receipts in one system',
    },
    faqs: [
      { q: 'Who owns the source code?', a: 'You do. All source code, designs and documentation we produce for your project belong to you, and you have repository access throughout.' },
      { q: 'What does a project team look like?', a: 'A typical team includes a project lead, developers and a QA engineer from our in-house team. Cloud and DevOps work is handled together with our partner RytumX. Team size depends on the scope of the project.' },
      { q: 'Can you take over an existing application?', a: 'Yes. We start with a code review to understand where things stand, fix the most urgent issues, and then move on to new features.' },
    ],
  },
  'ai-agents-mcp-servers': {
    title: 'AI Agents & MCP Servers',
    subtitle: 'Connect Claude, ChatGPT and other AI assistants to your software with custom MCP (Model Context Protocol) servers, AI agents and secure LLM integrations.',
    icon: '🧩',
    overview: 'We design and build MCP servers and AI agents that let AI assistants work with your real systems: your APIs, databases, CRMs, ERPs and internal documents. Each server exposes clear, well-described tools with the right permissions, so the assistant can look things up and take action safely. We build on your existing stack (.NET, Node.js, Python, Angular or React), and handle deployment, monitoring and support together with our DevOps partner RytumX.',
    benefits: [
      { title: 'Build once, run everywhere', desc: 'One MCP server works with every MCP-compatible client, including Claude, ChatGPT, VS Code with GitHub Copilot and Cursor.' },
      { title: 'Your data stays under control', desc: 'Least-privilege tools, authentication and audit logs decide exactly what the AI can read and do.' },
      { title: 'Fits your existing systems', desc: 'We wrap the APIs and databases you already run instead of asking you to rebuild them.' },
      { title: 'Real actions, not just chat', desc: 'Agents can create records, run reports and trigger workflows, with human approval where it matters.' },
    ],
    capabilities: [
      {
        name: 'Custom MCP Server Development',
        description: 'Model Context Protocol servers that expose your product\'s tools, resources and prompts to AI assistants, built with the official TypeScript, Python or C#/.NET SDKs.',
        highlights: ['Tool & schema design', 'Local (stdio) and remote (HTTP) servers', 'OAuth-secured remote access'],
      },
      {
        name: 'AI Agents & Workflow Automation',
        description: 'Agents that plan multi-step work across your systems, such as triaging tickets, preparing reports or updating records, with clear guardrails.',
        highlights: ['Multi-step task automation', 'Human-in-the-loop approvals', 'Tool-use evaluation'],
      },
      {
        name: 'LLM Integration & RAG',
        description: 'Bring large language models into your web and mobile apps, grounded in your own documents and data with retrieval-augmented generation.',
        highlights: ['Claude & OpenAI API integration', 'Document search (RAG)', 'Prompt and output testing'],
      },
      {
        name: 'Deployment & Support',
        description: 'Together with our DevOps partner RytumX, we deploy and run what we build: Linux servers, Docker containers, CI/CD pipelines and monitoring on Azure, AWS or your own servers.',
        highlights: ['Linux & Docker setup', 'CI/CD pipelines', 'Monitoring & logging'],
      },
    ],
    process: [
      { step: '01', title: 'Use-case workshop', desc: 'Pick the questions and actions your users need, and the systems the AI must reach.' },
      { step: '02', title: 'Tool & security design', desc: 'Define tools, input schemas, permissions and approval steps before writing code.' },
      { step: '03', title: 'Build & test', desc: 'Implement the MCP server or agent, then test it with the MCP Inspector and real AI clients.' },
      { step: '04', title: 'Deploy & support', desc: 'Ship to your infrastructure with authentication, monitoring and ongoing improvements.' },
    ],
    techStack: ['Model Context Protocol (MCP)', 'TypeScript', 'Node.js', 'Python', '.NET / C#', 'Claude API', 'OpenAI API', 'Docker', 'Azure', 'AWS', 'Linux'],
    faqs: [
      { q: 'What is an MCP server?', a: 'An MCP (Model Context Protocol) server is a small service that exposes your software\'s tools and data to AI assistants in a standard way. Once it is connected, an assistant such as Claude or ChatGPT can look up information and take actions in your system, within the permissions you set.' },
      { q: 'Which AI assistants can use an MCP server?', a: 'MCP is an open standard supported by a growing list of clients, including Claude, ChatGPT, Visual Studio Code with GitHub Copilot and Cursor. One server can serve all of them.' },
      { q: 'Can you build an MCP server for our existing .NET or Node.js application?', a: 'Yes. We build MCP servers alongside existing .NET, Node.js and Python systems using the official SDKs, wrapping the APIs and databases you already have.' },
      { q: 'How do you keep an MCP server secure?', a: 'We give every tool the least privilege it needs, validate all inputs on the server, use OAuth for remote servers, require human confirmation for destructive actions, and log every tool call.' },
      { q: 'Do you also handle hosting and server setup?', a: 'Yes. Together with our DevOps partner RytumX, we set up and maintain Linux servers, Docker containers, CI/CD pipelines and monitoring on Azure, AWS or your own infrastructure.' },
    ],
  },
  'ai-data-analytics': {
    title: 'AI & Data Analytics',
    subtitle: 'Reporting dashboards, data that flows reliably between your systems, and practical AI features such as search, summaries and assistants inside the apps you already use.',
    icon: '🧠',
    overview: 'Most businesses already have the data they need; it is just spread across different systems and spreadsheets. We connect those systems, build dashboards that show what is happening now, and add LLM-powered features with the Claude and OpenAI APIs where they save real time, such as searching documents, summarizing records or answering questions about your data.',
    benefits: [
      { title: 'Your numbers in one place', desc: 'Dashboards and reports that pull from your existing systems, instead of manual exports.' },
      { title: 'Data that stays in sync', desc: 'Scheduled or real-time syncs between your apps, ERP and online store, with error handling and logs.' },
      { title: 'AI where it helps', desc: 'Search, summaries and assistants added to existing apps, scoped to tasks your team actually does.' },
      { title: 'Your data stays controlled', desc: 'Role-based access, and clear choices about which data is sent to which AI provider.' },
    ],
    capabilities: [
      {
        name: 'Reporting Dashboards',
        description: 'Live and scheduled dashboards for operations, sales and finance, built into your app or as a separate portal.',
        highlights: ['Real-time dashboards', 'Scheduled reports & exports', 'Role-based views'],
      },
      {
        name: 'Data Pipelines & Integrations',
        description: 'Move data reliably between the systems you already run, such as ERPs, CRMs, online stores and databases.',
        highlights: ['API & database integrations', 'Scheduled and event-based syncs', 'Data validation & error logs'],
      },
      {
        name: 'LLM Features in Existing Apps',
        description: 'Add AI-powered search, summaries and assistants to your web and mobile apps using the Claude and OpenAI APIs.',
        highlights: ['Document search (RAG)', 'Summaries & drafting', 'In-app assistants'],
      },
      {
        name: 'Data Access & Privacy',
        description: 'Sensible controls over who can see what, and over which data leaves your systems.',
        highlights: ['Role-based access', 'Masking of sensitive fields', 'Audit logs'],
      },
    ],
    process: [
      { step: '01', title: 'Data review', desc: 'Look at where your data lives, how it is used and which questions matter most.' },
      { step: '02', title: 'Prototype', desc: 'Build a first dashboard or AI feature on real data, so you can judge it early.' },
      { step: '03', title: 'Build & integrate', desc: 'Connect the systems, harden the pipelines and check the outputs with your team.' },
      { step: '04', title: 'Launch & refine', desc: 'Release to users, watch how it is used and improve it based on feedback.' },
    ],
    techStack: ['Python', '.NET Core / C#', 'Node.js', 'SQL Server', 'MongoDB', 'Claude API', 'OpenAI API', 'React', 'Angular', 'Azure', 'AWS'],
    caseStudy: {
      client: 'Tavili Native',
      outcome: 'Builds on Food Stock with multi-company tenancy and real-time dashboards. Live socket updates let one team manage many businesses from one place.',
      result: 'Real-time dashboards across multiple companies',
    },
    faqs: [
      { q: 'Will our data be used to train public AI models?', a: 'We use the business APIs from AI providers, review their data terms with you, and only send the data a feature actually needs. If some data must never leave your systems, we agree on that before building.' },
      { q: 'How long does a first prototype take?', a: 'It depends on how ready your data is. We agree on a small first scope so you see something working early, then plan the rest from there.' },
      { q: 'Can you work with our existing database?', a: 'Yes. We regularly work with SQL Server and MongoDB, and connect to other databases and systems through their APIs.' },
    ],
  },
  'cloud-infrastructure': {
    title: 'Cloud & DevOps',
    subtitle: 'Azure and AWS setup, deployments, CI/CD and monitoring for the software we build, delivered together with our DevOps partner RytumX.',
    icon: '☁️',
    overview: 'Every application needs a reliable home. For Inovaraa clients, cloud and DevOps work is delivered together with RytumX, our associated DevOps company. We set up environments on Azure or AWS, package applications with Docker, automate builds and deployments with CI/CD pipelines, and add monitoring so problems are spotted early.',
    benefits: [
      { title: 'Repeatable deployments', desc: 'Automated CI/CD pipelines replace manual, error-prone releases.' },
      { title: 'Right-sized hosting', desc: 'Environments sized for your actual usage, so you are not paying for capacity you do not need.' },
      { title: 'Problems spotted early', desc: 'Monitoring, logging and alerts, so issues are found before your users report them.' },
      { title: 'One team, end to end', desc: 'The people who build your app work alongside RytumX, who run the infrastructure.' },
    ],
    capabilities: [
      {
        name: 'Azure & AWS Setup',
        description: 'Development, testing and production environments with sensible networking, access control and backups.',
        highlights: ['Environment setup', 'Access & permissions', 'Backups'],
      },
      {
        name: 'Moving Apps to the Cloud',
        description: 'Move applications from on-premise servers or shared hosting to Azure or AWS with a planned cutover.',
        highlights: ['Migration planning', 'Database migration', 'Cutover & rollback plan'],
      },
      {
        name: 'Containers & CI/CD',
        description: 'Docker-based builds and automated pipelines that test and deploy every change.',
        highlights: ['Docker containers', 'CI/CD pipelines', 'Staging & production releases'],
      },
      {
        name: 'Monitoring & Cost Reviews',
        description: 'Ongoing visibility into uptime, errors and cloud spend.',
        highlights: ['Uptime & error monitoring', 'Logging & alerts', 'Cloud cost reviews'],
      },
    ],
    process: [
      { step: '01', title: 'Review', desc: 'Look at your current hosting, release process and requirements.' },
      { step: '02', title: 'Plan', desc: 'Agree with you and RytumX on the target setup on Azure or AWS.' },
      { step: '03', title: 'Set up & migrate', desc: 'Build the environments and pipelines, then move workloads with a tested cutover plan.' },
      { step: '04', title: 'Monitor & maintain', desc: 'Keep environments patched, monitored and tuned as your application grows.' },
    ],
    techStack: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Linux', '.NET Core / C#', 'Node.js', 'SQL Server', 'MongoDB'],
    caseStudy: {
      client: 'Shipping Management System',
      outcome: 'End-to-end logistics for truck and coastal transshipments, door to door and port to port, with live vehicle tracking, dispatching, ledgers, invoicing and billing.',
      result: 'Delivered with our DevOps partner RytumX',
    },
    faqs: [
      { q: 'Which cloud providers do you support?', a: 'We work with Microsoft Azure and Amazon Web Services (AWS). Infrastructure and DevOps work is set up and run together with our partner RytumX.' },
      { q: 'Who is RytumX?', a: 'RytumX (rytumx.com) is our associated company. It handles DevOps, cloud automation and DevSecOps for Inovaraa clients, so you deal with one team while both companies work together.' },
      { q: 'How do you avoid downtime when moving to the cloud?', a: 'We test the new environment first, rehearse the data migration, schedule the cutover for a quiet period and keep a rollback option ready.' },
      { q: 'Can we keep control of our cloud accounts?', a: 'Yes. The accounts stay in your name, and we work through access that you grant and can revoke at any time.' },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity',
    subtitle: 'Security built into the software we deliver: access control, code and security reviews, vulnerability scanning, hardening, and help meeting data protection requirements.',
    icon: '🔒',
    overview: 'We are a software team, not a security operations center. Our focus is making the applications we build and maintain secure by design: proper authentication and access control, reviewed code, scanned dependencies, hardened configurations and careful handling of personal data. Security checks in the build pipeline (DevSecOps) are delivered with our partner RytumX.',
    benefits: [
      { title: 'Secure by design', desc: 'Security decisions are made at the design stage, not bolted on after launch.' },
      { title: 'The right access for the right people', desc: 'Role-based access, strong authentication and audit logs on sensitive actions.' },
      { title: 'Fewer known vulnerabilities', desc: 'Code and dependencies are scanned regularly, and issues are fixed in priority order.' },
      { title: 'Help with compliance', desc: 'Practical support for requirements such as data protection, data retention and audit trails.' },
    ],
    capabilities: [
      {
        name: 'Secure Application Development',
        description: 'Secure coding practices, input validation and safe handling of secrets and personal data in every project.',
        highlights: ['Secure coding practices', 'Secrets management', 'Encryption of sensitive data'],
      },
      {
        name: 'Access Control & Authentication',
        description: 'Sign-in, roles and permissions designed around who should see and do what.',
        highlights: ['Role-based access control', 'Single sign-on & MFA integration', 'Audit logging'],
      },
      {
        name: 'Code & Security Reviews',
        description: 'Reviews of new or existing code to find security issues and weak spots, with clear fixes.',
        highlights: ['Code reviews', 'Dependency & vulnerability scanning', 'Prioritized fix list'],
      },
      {
        name: 'Hardening & Compliance Support',
        description: 'Tighten application and server configurations, and build the controls that data protection and audit requirements call for.',
        highlights: ['Configuration hardening', 'Data protection requirements', 'Audit trails & reports'],
      },
    ],
    process: [
      { step: '01', title: 'Review', desc: 'Look at your application, data and current security setup to find the gaps.' },
      { step: '02', title: 'Prioritize', desc: 'Agree on what to fix first, based on risk and effort.' },
      { step: '03', title: 'Fix & harden', desc: 'Apply fixes, tighten access and add scanning to the build pipeline with RytumX.' },
      { step: '04', title: 'Keep it current', desc: 'Regular dependency updates, scans and reviews as the application changes.' },
    ],
    techStack: ['.NET Core / C#', 'Node.js', 'TypeScript', 'SQL Server', 'Docker', 'CI/CD', 'Azure', 'AWS'],
    caseStudy: {
      client: 'EUC Finance Compliance',
      outcome: 'End-user computing controls for finance teams, covering inventory, discovery, data classification, risk assessment, monitoring and information security.',
      result: 'Controls, risk assessment and monitoring for finance teams',
    },
    faqs: [
      { q: 'Do you offer 24/7 security monitoring?', a: 'No. We do not run a security operations center. We focus on building and maintaining secure applications, and if you need round-the-clock monitoring we can help you choose a specialist provider.' },
      { q: 'Can you review the security of an existing application?', a: 'Yes. We review the code, dependencies and configuration, give you a prioritized list of issues, and can fix them for you.' },
      { q: 'Can you help us meet compliance requirements?', a: 'We build the technical controls that requirements such as data protection usually call for: access control, audit logs, data retention and encryption. Formal audits and certifications are carried out by independent auditors.' },
    ],
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    subtitle: 'Move work out of spreadsheets, desktop tools and paper into web and mobile apps that connect with the systems you already use.',
    icon: '🔄',
    overview: 'For most of our clients, digital transformation means something practical: replacing spreadsheets, paper forms and aging desktop software with web and mobile apps, and connecting systems that used to need manual re-entry. We start with the workflow that causes the most friction, ship it, and build from there.',
    benefits: [
      { title: 'Less manual work', desc: 'Data is entered once and shared across systems, instead of copied between spreadsheets.' },
      { title: 'Work from anywhere', desc: 'Web and mobile access for staff in the office, on site or on the road.' },
      { title: 'A clearer view of operations', desc: 'Live status and reports, instead of chasing updates by phone and email.' },
      { title: 'Step-by-step change', desc: 'Workflows move over one at a time, so day-to-day operations keep running.' },
    ],
    capabilities: [
      {
        name: 'Spreadsheets & Paper to Web Apps',
        description: 'Turn manual processes into structured apps with forms, approvals and searchable records.',
        highlights: ['Workflow mapping', 'Forms & approvals', 'Data migration from spreadsheets'],
      },
      {
        name: 'Desktop Software Replacement',
        description: 'Rebuild aging desktop or legacy tools as modern web applications, moving your data across carefully.',
        highlights: ['Feature-by-feature replacement', 'Data migration', 'Old and new side by side during switchover'],
      },
      {
        name: 'System Integrations',
        description: 'Connect your apps with ERPs, accounting tools, payment gateways and online stores.',
        highlights: ['API integrations', 'ERP & e-commerce sync', 'Payment integrations, including UPI'],
      },
      {
        name: 'Mobile & Self-Service',
        description: 'Mobile apps and kiosks that let customers and staff help themselves.',
        highlights: ['React Native mobile apps', 'Self-service kiosks', 'Printed & digital receipts'],
      },
    ],
    process: [
      { step: '01', title: 'Map the workflow', desc: 'Sit with the people doing the work to understand the current process and its pain points.' },
      { step: '02', title: 'Plan the first release', desc: 'Pick the workflow with the biggest payoff and define a focused first version.' },
      { step: '03', title: 'Build in sprints', desc: 'Ship working features in short cycles and adjust based on feedback.' },
      { step: '04', title: 'Roll out & expand', desc: 'Train users, move data across and extend to the next workflow.' },
    ],
    techStack: ['.NET Core / C#', 'Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'React Native', 'SQL Server', 'MongoDB', 'Azure', 'AWS'],
    caseStudy: {
      client: 'Food Stock',
      outcome: 'A stock and invoicing platform that connects to large ERP systems. It manages suppliers, products and pricing, and offers APIs for e-commerce stores.',
      result: 'Suppliers, pricing, ERP and online store in sync',
    },
    faqs: [
      { q: 'How do you avoid disrupting day-to-day work?', a: 'We move one workflow at a time, run the old and new systems side by side where needed, and only switch over once your team is comfortable.' },
      { q: 'How do we know it worked?', a: 'We agree on goals up front, such as fewer manual steps, faster turnaround or fewer errors, and review them with you after launch.' },
      { q: 'Do you work with schools and colleges?', a: 'Yes, through our education partner Alpha Computers (alphaindia.in), which provides Edusoft software for schools, colleges and coaching classes.' },
    ],
  },
  'managed-services': {
    title: 'Managed Services & QA',
    subtitle: 'Dedicated QA engineers, manual and automated testing, and ongoing maintenance, bug fixes and support for your software after launch.',
    icon: '⚙️',
    overview: 'Software needs care after it goes live. We provide dedicated QA engineers to test new releases, maintain and improve applications we have built or taken over, fix bugs, and handle support requests from your team. Server monitoring and infrastructure upkeep are handled together with our DevOps partner RytumX.',
    benefits: [
      { title: 'Fewer bugs in production', desc: 'Releases are tested by QA engineers before they reach your users.' },
      { title: 'A team that knows your system', desc: 'The same people look after your software over time, so knowledge is not lost.' },
      { title: 'Clear support terms', desc: 'Support hours and response times agreed up front to fit your business.' },
      { title: 'Steady improvement', desc: 'Small improvements and updates shipped regularly, not just emergency fixes.' },
    ],
    capabilities: [
      {
        name: 'Dedicated QA Engineers',
        description: 'QA engineers who join your project to plan, run and report on testing.',
        highlights: ['Test planning', 'Release sign-off', 'Bug reporting & tracking'],
      },
      {
        name: 'Manual & Automated Testing',
        description: 'Manual testing for new features and usability, plus automated tests that catch regressions.',
        highlights: ['Functional & regression testing', 'Automated UI & API tests', 'Mobile & cross-browser testing'],
      },
      {
        name: 'Maintenance & Bug Fixes',
        description: 'Fixes, dependency updates and small enhancements that keep your software healthy.',
        highlights: ['Bug fixes', 'Framework & dependency updates', 'Small enhancements'],
      },
      {
        name: 'Support & Monitoring',
        description: 'Help for your team when something goes wrong, with monitoring set up together with RytumX.',
        highlights: ['Support requests', 'Uptime & error monitoring', 'Backups & patching with RytumX'],
      },
    ],
    process: [
      { step: '01', title: 'Handover', desc: 'Learn the application, its users and its known issues, and set up access.' },
      { step: '02', title: 'Test plan & support setup', desc: 'Agree on test coverage, how requests are raised and the expected response times.' },
      { step: '03', title: 'Test, fix, release', desc: 'Regular testing, fixes and planned releases.' },
      { step: '04', title: 'Review & improve', desc: 'Regular check-ins on open issues, upcoming changes and improvements.' },
    ],
    techStack: ['.NET Core / C#', 'Angular', 'React', 'Node.js', 'React Native', 'SQL Server', 'MongoDB', 'Docker', 'CI/CD', 'Azure', 'AWS'],
    caseStudy: {
      client: 'CareConnect',
      outcome: 'A care management platform for an in-home aged and disability care provider. It runs personalized care plans, dementia care, nursing, transport and self-managed packages.',
      result: 'Care plans, nursing and transport in one platform',
    },
    faqs: [
      { q: 'Do you offer 24/7 support?', a: 'We do not run a 24/7 operations center. We agree support hours and response times with you up front, and urgent production issues are always handled first.' },
      { q: 'Can you maintain software that another team built?', a: 'Yes. We start by reviewing the code and setup, document what we find, and then take over fixes and updates.' },
      { q: 'Can we keep control of our servers and accounts?', a: 'Yes. Accounts stay in your name, and we work through access that you grant and can revoke at any time.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDatabase[slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.title,
    description: service.subtitle,
    keywords: [service.title, ...service.techStack, 'Inovaraa Solutions', 'software development company'],
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: `${service.title} | Inovaraa Solutions`, description: service.subtitle, url: `/services/${slug}`, type: 'website', images: ['/opengraph-image'] },
  };
}

/* ---------- Per-service visual identity (presentation only) ---------- */

type Visual = { short: string; color: string; icon: ReactNode; art: ReactNode };

const visuals: Record<string, Visual> = {
  'ai-agents-mcp-servers': {
    short: 'AI Agents & MCP Servers',
    color: '#818CF8',
    icon: <><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></>,
    art: <AiHeroArt />,
  },
  'cloud-infrastructure': {
    short: 'Cloud & DevOps',
    color: '#38BDF8',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
    art: <CloudHeroArt />,
  },
  'ai-data-analytics': {
    short: 'AI & Data Analytics',
    color: '#A78BFA',
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
    art: <AiHeroArt />,
  },
  'digital-transformation': {
    short: 'Digital Transformation',
    color: '#FBBF24',
    icon: <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16" />,
    art: <TransformHeroArt />,
  },
  cybersecurity: {
    short: 'Cybersecurity',
    color: '#34D399',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    art: <SecurityHeroArt />,
  },
  'managed-services': {
    short: 'Managed Services & QA',
    color: '#F472B6',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    art: <OpsHeroArt />,
  },
  'software-development': {
    short: 'Custom Software Development',
    color: '#22D3EE',
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    art: <CodeHeroArt />,
  },
};

const fallbackVisual: Visual = { short: 'Service', color: '#818CF8', icon: <circle cx="12" cy="12" r="9" />, art: null };

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'stack', label: 'Tech stack' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
];

// Highlight the part after the last "&" (or the last two words) in the gradient
function splitTitle(title: string): [string, string] {
  const amp = title.lastIndexOf(' & ');
  if (amp > -1) return [title.slice(0, amp + 3), title.slice(amp + 3)];
  const words = title.split(' ');
  return [words.slice(0, -2).join(' ') + ' ', words.slice(-2).join(' ')];
}

const accentText = (hex: string): CSSProperties => ({ color: `color-mix(in srgb, ${hex} 70%, var(--ink))` });

const Arrow = ({ className = 'btn-arrow w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDatabase[slug];

  if (!service) {
    notFound();
  }

  const v = visuals[slug] ?? fallbackVisual;
  const [titleHead, titleTail] = splitTitle(service.title);
  const others = Object.keys(serviceDatabase).filter((s) => s !== slug);

  return (
    <div style={{ '--tile': v.color } as CSSProperties}>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            serviceType: v.short,
            description: service.overview,
            url: `${SITE.url}/services/${slug}`,
            provider: { '@id': ORG_ID, name: SITE.name },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${v.short} capabilities`,
              itemListElement: service.capabilities.map((c) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: c.name, description: c.description } })),
            },
          },
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: v.short, path: `/services/${slug}` },
          ]),
        ]}
      />
      <PageHero
        crumb={`Services / ${v.short}`}
        kicker="Service"
        title={<>{titleHead}<span className="text-gradient">{titleTail}</span></>}
        description={service.subtitle}
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Schedule a Consultation
          <Arrow />
        </Link>
        <Link href="#capabilities" className="btn btn--secondary btn--lg">
          Explore Capabilities
        </Link>
      </PageHero>

      {/* Showcase: illustration + overview + featured impact */}
      <section id="overview" className="relative pb-24 sm:pb-28 scroll-mt-28" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-stretch">
          <div
            suppressHydrationWarning data-reveal="scale"
            className="surface border-glow relative rounded-[2rem] overflow-hidden min-h-[300px] sm:min-h-[400px]"
          >
            <div className="absolute inset-0 bg-grid-fade opacity-70" aria-hidden="true" />
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full blur-3xl opacity-20"
              style={{ background: v.color }}
              aria-hidden="true"
            />
            <div className="absolute inset-0">{v.art}</div>
            <div className="absolute top-5 left-5 surface-glass rounded-full pl-1.5 pr-4 py-1.5 flex items-center gap-2.5">
              <span className="icon-tile w-8! h-8! rounded-full!">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{v.icon}</svg>
              </span>
              <span className="text-xs font-semibold text-white">{v.short}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div suppressHydrationWarning data-reveal className="kicker mb-5 self-start">Overview</div>
            <h2
              id="overview-heading"
              suppressHydrationWarning data-reveal
              style={{ '--d': '80ms' } as CSSProperties}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] mb-5"
            >
              Built by a <span className="text-gradient">small, senior</span> team
            </h2>
            <p suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties} className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              {service.overview}
            </p>

            {service.caseStudy && (
            <div
              suppressHydrationWarning data-reveal
              style={{ '--d': '240ms' } as CSSProperties}
              className="surface spotlight rounded-3xl p-6 sm:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full pulse-soft" style={{ background: v.color }} aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold" style={accentText(v.color)}>From our work</span>
              </div>
              <div className="font-semibold text-white mb-1.5">{service.caseStudy.client}</div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.caseStudy.outcome}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 flex items-center gap-2.5 text-sm font-semibold text-white">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${v.color}22`, border: `1px solid ${v.color}55`, ...accentText(v.color) }}
                    aria-hidden="true"
                  >
                    <Check />
                  </span>
                  {service.caseStudy.result}
                </div>
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                  See all projects <Arrow className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Long-form body with sticky side navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-10 xl:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-32 flex flex-col gap-6" aria-label="On this page">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">On this page</div>
              <ol className="list-none p-0 m-0 flex flex-col border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group -ml-px flex items-center gap-3 border-l-2 border-transparent hover:border-cyan-400 pl-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="surface rounded-2xl p-4 flex flex-col gap-3">
              <div className="text-sm font-semibold text-white leading-snug">Discuss your {v.short} project</div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                Book a call <Arrow className="w-3.5 h-3.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                All services
              </Link>
            </div>
          </nav>
        </aside>

        <div className="min-w-0">
          {/* Mobile / tablet jump links */}
          <nav className="lg:hidden flex flex-wrap gap-2 mb-4" aria-label="On this page">
            {sections.slice(1).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="surface-glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white">
                {s.label}
              </a>
            ))}
          </nav>

          {/* Benefits */}
          <section id="benefits" className="py-16 sm:py-20 scroll-mt-28" aria-labelledby="benefits-heading">
            <SectionHeading
              align="left"
              kicker="Key Benefits"
              id="benefits-heading"
              title={<>What you <span className="text-gradient">get</span></>}
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={b.title}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 2) * 100}ms` } as CSSProperties}
                  className="surface spotlight lift group relative rounded-[1.75rem] p-7 flex flex-col gap-3 overflow-hidden"
                >
                  <span
                    className="absolute -top-14 -right-14 w-40 h-40 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-700"
                    style={{ background: v.color }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between mb-3">
                    <span className="icon-tile w-11! h-11!"><Check className="w-4 h-4" /></span>
                    <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="relative text-xl sm:text-2xl font-extrabold text-white leading-tight">{b.title}</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section id="capabilities" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="capabilities-heading">
            <SectionHeading
              align="left"
              kicker="Capabilities"
              id="capabilities-heading"
              title={<>What we <span className="text-gradient">deliver</span></>}
              description="What this service covers in practice."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.capabilities.map((cap, i) => (
                <article
                  key={cap.name}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${(i % 2) * 100}ms` } as CSSProperties}
                  className="surface spotlight lift rounded-[1.75rem] p-7 sm:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{cap.name}</h3>
                    <span className="font-display text-4xl font-extrabold text-outline leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{cap.description}</p>
                  <div className="mt-auto pt-5 border-t border-white/10">
                    <h4 className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">Key Deliverables</h4>
                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                      {cap.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `${v.color}22`, border: `1px solid ${v.color}55`, ...accentText(v.color) }}
                          >
                            <Check />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Tech stack */}
          <section id="stack" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="stack-heading">
            <SectionHeading
              align="left"
              kicker="Tech stack"
              id="stack-heading"
              title={<>Technologies we <span className="text-gradient">use</span></>}
              className="mb-10"
            />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-none p-0 m-0">
              {service.techStack.map((tech, i) => (
                <li
                  key={tech}
                  suppressHydrationWarning data-reveal="scale"
                  style={{ '--d': `${(i % 3) * 70}ms` } as CSSProperties}
                  className="surface-glass spotlight lift rounded-2xl px-4 py-3.5 flex items-center gap-3 min-w-0"
                >
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-xs font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                    {tech.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}
                  </span>
                  <span className="text-sm font-semibold text-white truncate">{tech}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section id="process" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="process-heading">
            <SectionHeading
              align="left"
              kicker="Our process"
              id="process-heading"
              title={<>How we <span className="text-gradient">work</span></>}
              description="Clear milestones and direct contact with the people doing the work."
              className="mb-12"
            />
            <ol className="relative list-none p-0 m-0 flex flex-col gap-5">
              <span className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400 via-indigo-400 to-pink-400 opacity-60" aria-hidden="true" />
              {service.process.map((step, i) => (
                <li
                  key={step.step}
                  suppressHydrationWarning data-reveal="left"
                  style={{ '--d': `${i * 120}ms` } as CSSProperties}
                  className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 sm:gap-6 items-start"
                >
                  <span className="relative z-[1] w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white font-mono text-sm font-bold flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    {step.step}
                  </span>
                  <div className="surface spotlight lift rounded-3xl p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQs */}
          <section id="faq" className="py-16 sm:py-20 scroll-mt-28 border-t border-white/10" aria-labelledby="faq-heading">
            <SectionHeading
              align="left"
              kicker="Frequently Asked Questions"
              id="faq-heading"
              title={<>Got questions? <span className="text-gradient">We have answers.</span></>}
              className="mb-10"
            />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 70}ms` } as CSSProperties}
                  className="faq-item group rounded-3xl border border-white/10 bg-white/[0.02] open:border-indigo-400/40 open:bg-[var(--surface)] transition-colors duration-500"
                >
                  <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer px-6 sm:px-7 py-6 flex items-center justify-between gap-6">
                    <h3 className="flex items-baseline gap-4 m-0 text-base sm:text-lg font-semibold text-white">
                      <span className="font-mono text-xs font-normal text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                      <span>{faq.q}</span>
                    </h3>
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-slate-300 transition-transform duration-500 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </summary>
                  <p className="px-6 sm:px-7 pb-7 sm:pl-[4.25rem] text-slate-400 leading-relaxed m-0">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Other services */}
      <section className="relative py-24 sm:py-28" aria-labelledby="more-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading align="left" kicker="Keep exploring" id="more-heading" title={<>More <span className="text-gradient">services</span></>} />
            <div suppressHydrationWarning data-reveal style={{ '--d': '160ms' } as CSSProperties} className="md:pb-6">
              <Link href="/services" className="btn btn--secondary">
                View All Services
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((s, i) => {
              const ov = visuals[s] ?? fallbackVisual;
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  suppressHydrationWarning data-reveal
                  style={{ '--d': `${i * 70}ms`, '--tile': ov.color } as CSSProperties}
                  className="surface spotlight lift group rounded-3xl p-5 flex flex-col gap-5 min-h-[170px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-tile w-11! h-11!">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ov.icon}</svg>
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" aria-hidden="true">
                      <Arrow className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="text-base font-bold text-white leading-snug">{ov.short}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">{serviceDatabase[s].subtitle}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Hero illustrations, one per service (pure SVG/CSS) ---------- */

const spin = (dur: number, reverse = false): CSSProperties => ({
  transformOrigin: '200px 160px',
  animation: `spin ${dur}s linear infinite${reverse ? ' reverse' : ''}`,
});

function CloudHeroArt() {
  const providers: [string, number][] = [['Azure', -90], ['AWS', 25], ['Docker', 155]];
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <ellipse cx="200" cy="160" rx="160" ry="110" fill="none" stroke="#38BDF8" strokeOpacity="0.18" />
      <ellipse cx="200" cy="160" rx="110" ry="76" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeDasharray="3 6" />
      <circle cx="200" cy="160" r="128" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeDasharray="2 10" style={spin(40)} />
      {providers.map(([label, deg], i) => {
        const r = (deg * Math.PI) / 180;
        const x = Math.round(200 + 128 * Math.cos(r));
        const y = Math.round(160 + 128 * Math.sin(r));
        return (
          <g key={label}>
            <line x1="200" y1="140" x2={x} y2={y} stroke="#38BDF8" strokeOpacity="0.45" strokeDasharray="4 4" style={{ animation: 'dash-flow 1.4s linear infinite' }} />
            <circle r="3.5" fill="#7DD3FC">
              <animateMotion dur="2.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={`M200,140 L${x},${y}`} />
            </circle>
            <g className="float-slow" style={{ animationDelay: `${i * -2}s` }}>
              <circle cx={x} cy={y} r="22" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />
              <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#E0F2FE" fontFamily="ui-sans-serif, system-ui">{label}</text>
            </g>
          </g>
        );
      })}
      {/* Containers */}
      {[[150, 230], [176, 244], [202, 230], [228, 244], [254, 230]].map(([x, y], i) => (
        <polygon
          key={i}
          points={`${x},${y - 11} ${x + 10},${y - 5} ${x + 10},${y + 6} ${x},${y + 12} ${x - 10},${y + 6} ${x - 10},${y - 5}`}
          fill="#38BDF8"
          fillOpacity="0.25"
          stroke="#7DD3FC"
        >
          <animate attributeName="fill-opacity" values="0.15;0.6;0.15" dur="2.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
        </polygon>
      ))}
      <circle cx="200" cy="140" r="40" fill="#0EA5E9" />
      <circle cx="200" cy="140" r="40" fill="none" stroke="#7DD3FC">
        <animate attributeName="r" values="40;62" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <path d="M186 150 h30 a9 9 0 0 0 0-18 a14 14 0 0 0-26-3 a9 9 0 0 0-4 21z" fill="#FFFFFF" />
    </svg>
  );
}

function AiHeroArt() {
  const layers = [
    [80, 130, 180, 230],
    [70, 115, 160, 205, 250],
    [110, 160, 210],
  ];
  const xs = [90, 200, 310];
  const edges: { a: [number, number]; b: [number, number] }[] = [];
  layers.forEach((col, li) => {
    if (li === layers.length - 1) return;
    col.forEach((y) => layers[li + 1].forEach((y2) => edges.push({ a: [xs[li], y], b: [xs[li + 1], y2] })));
  });
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      {edges.map(({ a, b }, i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#A78BFA" strokeOpacity="0.18" />
      ))}
      {edges.filter((_, i) => i % 4 === 0).map(({ a, b }, i) => (
        <circle key={`p${i}`} r="3" fill="#C4B5FD">
          <animateMotion dur={`${1.8 + (i % 4) * 0.4}s`} begin={`${(i % 5) * 0.3}s`} repeatCount="indefinite" path={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} />
        </circle>
      ))}
      {layers.map((col, li) =>
        col.map((y, k) => (
          <g key={`${li}-${k}`}>
            <circle cx={xs[li]} cy={y} r="11" fill="#2E1065" stroke="#A78BFA" strokeWidth="1.5" />
            <circle cx={xs[li]} cy={y} r="4" fill="#C4B5FD">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin={`${(li * 4 + k) * 0.18}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))
      )}
      <g className="float-slow">
        <rect x="258" y="30" width="112" height="34" rx="17" fill="#A78BFA" fillOpacity="0.2" stroke="#A78BFA" strokeOpacity="0.6" />
        <path d="M278 40 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#C4B5FD" />
        <rect x="292" y="43" width="62" height="4" rx="2" fill="#C4B5FD" fillOpacity="0.7" />
        <rect x="292" y="51" width="40" height="4" rx="2" fill="#C4B5FD" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

function TransformHeroArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      {/* Legacy monolith */}
      <rect x="40" y="90" width="110" height="150" rx="14" fill="#78350F" fillOpacity="0.35" stroke="#FBBF24" strokeOpacity="0.5" strokeDasharray="5 4" />
      {[110, 130, 150, 170, 190, 210].map((y, i) => (
        <rect key={y} x="58" y={y} width={74 - (i % 3) * 12} height="7" rx="3.5" fill="#FBBF24" fillOpacity="0.3" />
      ))}
      <text x="95" y="262" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FBBF24" fillOpacity="0.8" fontFamily="ui-monospace, monospace">LEGACY</text>
      {/* Flow */}
      {[130, 165, 200].map((y, i) => (
        <g key={y}>
          <path d={`M158 ${y} C 200 ${y}, 200 ${80 + i * 70}, 236 ${80 + i * 70}`} fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="5 5" style={{ animation: `dash-flow ${0.9 + i * 0.2}s linear infinite` }} />
          <circle r="3.5" fill="#FCD34D">
            <animateMotion dur={`${1.6 + i * 0.3}s`} repeatCount="indefinite" path={`M158 ${y} C 200 ${y}, 200 ${80 + i * 70}, 236 ${80 + i * 70}`} />
          </circle>
        </g>
      ))}
      {/* Modern services */}
      {[[244, 52], [306, 52], [244, 122], [306, 122], [244, 192], [306, 192]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="52" height="56" rx="12" fill="#FBBF24" fillOpacity={0.18 + (i % 3) * 0.12} stroke="#FCD34D" strokeOpacity="0.8">
            <animate attributeName="y" values={`${y};${y - 5};${y}`} dur="3.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
      <rect x="244" y="270" width="114" height="6" rx="3" fill="#FBBF24" fillOpacity="0.15" />
      <rect x="244" y="270" width="114" height="6" rx="3" fill="#FBBF24">
        <animate attributeName="width" values="0;114;114" keyTimes="0;0.7;1" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function SecurityHeroArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" aria-hidden="true">
      <defs>
        <linearGradient id="sec-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#34D399" stopOpacity="0" />
          <stop offset="1" stopColor="#34D399" stopOpacity="0.45" />
        </linearGradient>
        <clipPath id="sec-shield">
          <path d="M200 92 L244 108 V150 C244 178 224 196 200 206 C176 196 156 178 156 150 V108 Z" />
        </clipPath>
      </defs>
      {[60, 95, 130].map((r) => (
        <circle key={r} cx="200" cy="160" r={r} fill="none" stroke="#34D399" strokeOpacity="0.22" />
      ))}
      <line x1="60" y1="160" x2="340" y2="160" stroke="#34D399" strokeOpacity="0.12" />
      <line x1="200" y1="20" x2="200" y2="300" stroke="#34D399" strokeOpacity="0.12" />
      <g style={spin(5)}>
        <path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="url(#sec-sweep)" />
      </g>
      {[[120, 96], [290, 118], [268, 236], [110, 220], [318, 196]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#6EE7B7">
          <animate attributeName="opacity" values="0;1;0" dur="5s" begin={`${i * 1}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <path d="M200 92 L244 108 V150 C244 178 224 196 200 206 C176 196 156 178 156 150 V108 Z" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
      <g clipPath="url(#sec-shield)">
        <rect x="150" width="100" height="30" fill="#34D399" fillOpacity="0.35">
          <animate attributeName="y" values="62;206" dur="2.6s" repeatCount="indefinite" />
        </rect>
      </g>
      <rect x="186" y="142" width="28" height="24" rx="5" fill="#6EE7B7" />
      <path d="M192 142 v-7 a8 8 0 0 1 16 0 v7" fill="none" stroke="#6EE7B7" strokeWidth="3.5" />
      <circle cx="200" cy="154" r="3" fill="#064E3B" />
    </svg>
  );
}

function OpsHeroArt() {
  const line = 'M0 70 L30 62 L60 66 L90 40 L120 48 L150 30 L180 38 L210 22 L240 30 L270 16';
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 pt-20 sm:p-10 sm:pt-20" aria-hidden="true">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-white">Service health</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" /> Monitored
          </span>
        </div>
        <svg viewBox="0 0 270 80" className="w-full h-20">
          <defs>
            <linearGradient id="ops-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F472B6" stopOpacity="0.35" />
              <stop offset="1" stopColor="#F472B6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L270 80 L0 80 Z`} fill="url(#ops-fill)" />
          <path d={line} fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="400" strokeDashoffset="400">
            <animate attributeName="stroke-dashoffset" values="400;0;0" keyTimes="0;0.6;1" dur="5s" repeatCount="indefinite" />
          </path>
          <circle cx="270" cy="16" r="4" fill="#F472B6" className="pulse-soft" />
        </svg>
        <div className="flex flex-col gap-2.5">
          {['Tests', 'Releases', 'Uptime'].map((label, i) => (
            <div key={label} className="flex items-center gap-3 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
              <span className="text-slate-300 w-24 shrink-0">{label}</span>
              <span className="flex-1 flex gap-[2px] h-3">
                {Array.from({ length: 24 }, (_, k) => (
                  <span key={k} className="flex-1 rounded-[2px]" style={{ background: '#34D399', opacity: 0.35 + ((k * 7 + i * 5) % 10) / 16 }} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeHeroArt() {
  const lines = [
    { w: 42, c: '#818CF8', indent: 0 },
    { w: 66, c: '#22D3EE', indent: 1 },
    { w: 52, c: '#34D399', indent: 2 },
    { w: 60, c: '#F472B6', indent: 2 },
    { w: 46, c: '#22D3EE', indent: 1 },
    { w: 30, c: '#818CF8', indent: 0 },
  ];
  const stages = ['Build', 'Test', 'Deploy'];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 pt-20 sm:p-10 sm:pt-20" aria-hidden="true">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#070C1C] overflow-hidden font-mono shadow-2xl">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[10px]" style={{ color: '#64748B' }}>src/app/bookings.tsx</span>
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          {lines.map((l, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[9px] w-3 text-right" style={{ color: '#475569' }}>{i + 1}</span>
              <span
                className="h-2 rounded-full"
                style={{
                  width: `${l.w}%`,
                  marginLeft: `${l.indent * 14}px`,
                  background: l.c,
                  opacity: 0.85,
                  animation: `reveal-left 900ms cubic-bezier(0.16,1,0.3,1) ${i * 140}ms backwards`,
                }}
              />
            </div>
          ))}
          <span className="w-1.5 h-3 ml-6 pulse-soft" style={{ background: '#22D3EE' }} />
        </div>
      </div>
      <div className="w-full max-w-md flex items-center gap-2">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <span className="surface-glass rounded-full px-3 py-1.5 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-soft" style={{ animationDelay: `${i * 0.5}s` }} />
              {s}
            </span>
            {i < stages.length - 1 && <span className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-60" />}
          </div>
        ))}
      </div>
    </div>
  );
}
