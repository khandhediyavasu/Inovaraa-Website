import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Self-hosted by next/font: no render-blocking request to Google Fonts, and no layout shift on load
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz'], variable: '--font-bricolage', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A2540',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | AI & Software Development Company in Ahmedabad`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Each page sets its own canonical URL; no site-wide canonical here, or every page would point at the home page.
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
    title: `${SITE.name} | AI & Software Development Company in Ahmedabad`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | AI & Software Development Company in Ahmedabad`,
    description: SITE.tagline,
    creator: SITE.twitterHandle,
  },
  // Paste the Google Search Console verification token here once the domain is added there
  // verification: { google: 'YOUR-TOKEN' },
};

import { ThemeProvider } from '@/components/ThemeProvider';
import Effects from '@/components/ui/Effects';
import FloatingThemeToggle from '@/components/ui/FloatingThemeToggle';
import NavProgress from '@/components/ui/NavProgress';
import { SITE } from '@/data/site';
import { leaders } from '@/data/team';
import JsonLd, { ORG_ID, WEBSITE_ID, organizationSchema, personSchema } from '@/components/seo/JsonLd';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('js');
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Site-wide structured data: the organisation, its leaders, and the website with search */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                ...organizationSchema(),
                contactPoint: { '@type': 'ContactPoint', email: SITE.email, telephone: SITE.phone, contactType: 'sales', availableLanguage: 'English' },
              },
              ...leaders.map(personSchema),
              {
                '@type': 'WebSite',
                '@id': WEBSITE_ID,
                url: SITE.url,
                name: SITE.name,
                alternateName: SITE.shortName,
                publisher: { '@id': ORG_ID },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/blog?search={search_term_string}` },
                  'query-input': 'required name=search_term_string',
                },
              },
            ],
          }}
        />
      </head>
      <body className="relative min-h-screen antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
        <ThemeProvider>
          <Effects />
          <NavProgress />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-xl focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="relative z-10">{children}</main>
          <Footer />
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
