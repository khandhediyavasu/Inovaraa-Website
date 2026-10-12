import type { Metadata } from 'next';

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Contact Us: Start a Software, AI or MCP Project',
  description:
    'Contact Inovaraa Solutions about custom software development, AI agents or MCP server development. Email info@inovaraa.com or send the form and we reply within 24 hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
