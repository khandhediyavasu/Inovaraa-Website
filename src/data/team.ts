// Leadership profiles. Each gets its own page at /team/<slug> so that searches for
// the person's name land on inovaraa.com, and each is described with Person
// structured data (schema.org) linked to the organization.
// TODO: add each person's LinkedIn URL to `sameAs` and expand the bios with real details.

export interface Leader {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  role: string;
  initials: string;
  headline: string;
  bio: string[];
  expertise: string[];
  sameAs: string[];
}

export const leaders: Leader[] = [
  {
    slug: 'tejas-thakkar',
    name: 'Tejas Thakkar',
    givenName: 'Tejas',
    familyName: 'Thakkar',
    role: 'Chief Executive Officer',
    initials: 'TT',
    headline: 'CEO of Inovaraa Solutions · 15+ years in the software industry',
    bio: [
      'Tejas Thakkar is the Chief Executive Officer of Inovaraa Solutions, a software development company building AI agents, MCP servers, web platforms and mobile apps. He brings more than 15 years of experience in the software industry, spanning software delivery, client management and business growth.',
      'Over his career, Tejas has worked with businesses of every size, from founders with a first idea to established companies replacing old systems, and has seen what separates software that gets used from software that gets shelved. That experience shapes how Inovaraa works: understand the business problem first, agree a clear scope, and show working software early and often.',
      'As CEO, he leads the company\'s strategy, client partnerships and growth. He stays close to every engagement, from the first conversation through launch and ongoing support, making sure each project turns a client\'s idea into a working, well-supported product.',
      'Tejas also oversees the partnerships that extend what Inovaraa can offer, including RytumX for cloud and DevOps and Alpha Computers for education software, so clients get one accountable team with the right specialists behind it.',
    ],
    expertise: ['Business strategy', 'Client partnerships', 'Software delivery', 'Project scoping & estimation', 'Team leadership', 'Business growth'],
    sameAs: [],
  },
  {
    slug: 'nikhil-mahindrakar',
    name: 'Nikhil Mahindrakar',
    givenName: 'Nikhil',
    familyName: 'Mahindrakar',
    role: 'Director',
    initials: 'NM',
    headline: 'Director at Inovaraa Solutions · Business analysis & delivery',
    bio: [
      'Nikhil Mahindrakar is a Director of Inovaraa Solutions, a software development company focused on AI, MCP server development and custom software. He is a results-driven business analyst who bridges the gap between what a business needs and the technology that delivers it.',
      'Nikhil holds a PGPM in Marketing and Operations and an IIBA-endorsed Business Analyst certification, and brings together strategic thinking, technical understanding and strong stakeholder engagement on every project.',
      'At Inovaraa he leads projects across the full software development life cycle, from requirement gathering to delivery and post-launch support. He works closely with developers, testers and designers to turn business goals into clear, buildable plans, writing business requirement documents (BRDs), user stories and process flows, and keeping technical teams and business stakeholders aligned. He uses JIRA for project tracking, Figma for wireframes and prototypes, and Draw.io and Visio for visual documentation.',
      'Across his career he has delivered projects in a wide range of domains, including US auto insurance, healthcare, e-commerce, job portals, event management, learning management systems (LMS), and inventory and CRM solutions. His healthcare work includes gathering requirements directly with healthcare clients and coordinating with development teams so solutions were delivered smoothly and accurately.',
      'Nikhil enjoys learning new domains and solving complex problems. His critical thinking, adaptability and client-first mindset help Inovaraa take ideas from concept to completion, in both Agile and Waterfall projects.',
    ],
    expertise: ['Business analysis', 'Requirement gathering & BRDs', 'User stories & story mapping', 'Process flows & UML', 'Prototyping & wireframing', 'JIRA & Figma', 'Agile & Waterfall', 'Stakeholder management'],
    sameAs: [],
  },
  {
    slug: 'vasu-thakkar',
    name: 'Vasu Thakkar',
    givenName: 'Vasu',
    familyName: 'Thakkar',
    role: 'Chief Technology Officer',
    initials: 'VT',
    headline: 'CTO of Inovaraa Solutions · 10+ years in software engineering · .NET, Angular, Node.js, AI & MCP',
    bio: [
      'Vasu Thakkar is the Chief Technology Officer of Inovaraa Solutions. He leads architecture and engineering for the company\'s AI agents, MCP servers and custom software products, and sets the technical standards the whole team works to.',
      'Vasu has more than 10 years of hands-on experience designing and building business applications with .NET Core, C#, Angular, Node.js, SQL Server, MongoDB and Azure. Over that time he has delivered software across healthcare, logistics, finance, real estate, retail and education, and has grown from writing code to leading architecture and engineering teams.',
      'He has led healthcare platforms, built CRM, invoicing and stock-management systems, set up MEAN and MERN servers on Linux, and runs CI/CD pipelines with code-quality checks, so every release is tested and repeatable.',
      'As CTO he chooses the architecture for each project, reviews code, mentors the developers and QA engineers, and works with the company\'s DevOps partner RytumX on hosting and deployments. He also leads Inovaraa\'s AI work, building MCP servers and AI agents that connect assistants such as Claude and ChatGPT to a client\'s own systems.',
    ],
    expertise: ['Software architecture', '.NET Core & C#', 'Angular', 'Node.js', 'SQL Server & MongoDB', 'Azure', 'AI agents & MCP servers', 'Linux server setup', 'CI/CD', 'Code review & mentoring'],
    sameAs: [],
  },
];

export const leaderBySlug = (slug: string) => leaders.find((l) => l.slug === slug);
