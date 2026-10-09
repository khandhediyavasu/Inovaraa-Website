// Brand + site settings in one place. These values flow to page metadata, the sitemap,
// robots.txt, structured data (JSON-LD) and the footer.
// TODO: confirm the social profile URLs.

export const SITE = {
  name: 'Inovaraa Solutions',
  shortName: 'Inovaraa',
  url: 'https://inovaraa.com',
  email: 'info@inovaraa.com',
  linkedin: 'https://www.linkedin.com/company/inovaraa',
  twitter: 'https://twitter.com/inovaraa',
  twitterHandle: '@inovaraa',
  tagline: 'Software development company building AI agents, MCP servers, web platforms and mobile apps.',
  description:
    'Inovaraa Solutions is a software development company that builds AI agents, MCP (Model Context Protocol) servers, custom web platforms, mobile apps and cloud solutions for healthcare, logistics, finance and growing businesses.',
  // Search phrases the site is written to rank for
  keywords: [
    'Inovaraa',
    'Inovaraa Solutions',
    'inovaraa.com',
    'software development company',
    'custom software development',
    'AI development company',
    'AI agent development',
    'MCP server development',
    'Model Context Protocol server',
    'build MCP server',
    'Claude MCP integration',
    'LLM integration services',
    'web application development',
    'mobile app development',
    '.NET development company',
    'Angular and React development',
    'Node.js development',
    'cloud and DevOps services',
    'server setup and deployment',
    'Vasu Khandhediya',
    'Nikhil Mahindrakar',
    'Tejas Daraniya',
  ],
  // Pixel i logo colours, matched to the site palette (indigo → blue → cyan → teal on navy)
  colors: { indigo: '#6366F1', blue: '#0EA5E9', cyan: '#22D3EE', teal: '#10B981', navy: '#0B1226' },
} as const;
