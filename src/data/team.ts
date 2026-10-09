// Leadership profiles. Each gets its own page at /team/<slug> so that searches for
// the person's name land on inovaraa.com, and each is described with Person
// structured data (schema.org) linked to the organisation.
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
    slug: 'tejas-daraniya',
    name: 'Tejas Daraniya',
    givenName: 'Tejas',
    familyName: 'Daraniya',
    role: 'Chief Executive Officer',
    initials: 'TD',
    headline: 'CEO of Inovaraa Solutions',
    bio: [
      'Tejas Daraniya is the Chief Executive Officer of Inovaraa Solutions, a software development company building AI agents, MCP servers, web platforms and mobile apps.',
      'He leads the company\'s strategy, client partnerships and growth, making sure every engagement turns a client\'s idea into a working, well-supported product.',
    ],
    expertise: ['Business strategy', 'Client partnerships', 'Product delivery', 'Software services'],
    sameAs: [],
  },
  {
    slug: 'nikhil-mahindrakar',
    name: 'Nikhil Mahindrakar',
    givenName: 'Nikhil',
    familyName: 'Mahindrakar',
    role: 'Director',
    initials: 'NM',
    headline: 'Director at Inovaraa Solutions',
    bio: [
      'Nikhil Mahindrakar is a Director of Inovaraa Solutions, a software development company focused on AI, MCP server development and custom software.',
      'He oversees operations and delivery, helping teams in healthcare, logistics, finance and retail ship reliable software on schedule.',
    ],
    expertise: ['Operations', 'Delivery management', 'Client success', 'Software development'],
    sameAs: [],
  },
  {
    slug: 'vasu-khandhediya',
    name: 'Vasu Khandhediya',
    givenName: 'Vasu',
    familyName: 'Khandhediya',
    role: 'Chief Technology Officer',
    initials: 'VK',
    headline: 'CTO of Inovaraa Solutions · .NET, Angular, Node.js, AI & MCP',
    bio: [
      'Vasu Khandhediya is the Chief Technology Officer of Inovaraa Solutions. He leads architecture and engineering for the company\'s AI agents, MCP servers and custom software products.',
      'Vasu has more than five years of hands-on experience building enterprise applications with .NET Core, C#, Angular, Node.js, SQL Server, MongoDB and Azure, across healthcare, logistics, finance, real estate and retail.',
      'He has led healthcare platforms, built CRM, invoicing and stock-management systems, set up MEAN and MERN servers on Linux, and runs CI/CD pipelines with code-quality checks.',
    ],
    expertise: ['.NET Core & C#', 'Angular', 'Node.js', 'SQL Server & MongoDB', 'Azure', 'AI agents & MCP servers', 'Linux server setup', 'CI/CD'],
    sameAs: [],
  },
];

export const leaderBySlug = (slug: string) => leaders.find((l) => l.slug === slug);
