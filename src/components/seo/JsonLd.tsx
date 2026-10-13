import { SITE } from '@/data/site';
import { leaders, type Leader } from '@/data/team';

// Renders schema.org structured data. Escapes "<" so content can't break out of the script tag.
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function personSchema(l: Leader) {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/team/${l.slug}#person`,
    name: l.name,
    givenName: l.givenName,
    familyName: l.familyName,
    jobTitle: l.role,
    description: l.bio[0],
    url: `${SITE.url}/team/${l.slug}`,
    knowsAbout: l.expertise,
    worksFor: { '@id': ORG_ID },
    ...(l.sameAs.length ? { sameAs: l.sameAs } : {}),
  };
}

export function organizationSchema() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: [...SITE.alternateNames, 'inovaraa.com'],
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.svg` },
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: { '@type': 'PostalAddress', addressLocality: SITE.address.city, addressRegion: SITE.address.region, addressCountry: SITE.address.countryCode },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
      'Worldwide',
    ],
    image: `${SITE.url}/opengraph-image`,
    priceRange: '$',
    employee: leaders.map((l) => ({ '@id': `${SITE.url}/team/${l.slug}#person` })),
    knowsAbout: [
      'Software development',
      'AI agent development',
      'Model Context Protocol (MCP) servers',
      'Large language model integration',
      'Web application development',
      'Mobile app development',
      'Cloud and DevOps',
      'Quality assurance and testing',
      'Cybersecurity',
      'Digital transformation',
      'Education software',
    ],
    sameAs: [SITE.linkedin, SITE.twitter],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
