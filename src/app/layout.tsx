import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A2540',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ahaantechnologies.com'),
  title: {
    default: 'Ahaan Technologies | Enterprise IT Services & Digital Transformation',
    template: '%s | Ahaan Technologies',
  },
  description:
    'Ahaan Technologies delivers AI-powered IT services, cloud infrastructure, digital transformation, cybersecurity, and managed services for enterprises worldwide.',
  keywords: [
    'IT services company',
    'digital transformation',
    'cloud infrastructure',
    'AI data analytics',
    'managed IT services',
    'cybersecurity services',
    'enterprise software development',
    'IT consulting',
  ],
  authors: [{ name: 'Ahaan Technologies' }],
  creator: 'Ahaan Technologies',
  publisher: 'Ahaan Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahaantechnologies.com',
    siteName: 'Ahaan Technologies',
    title: 'Ahaan Technologies | Enterprise IT Services & Digital Transformation',
    description: 'AI-powered IT services, cloud infrastructure, digital transformation, and managed services for enterprises worldwide.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ahaan Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahaan Technologies | Enterprise IT Services',
    description: 'AI-powered IT services and digital transformation for enterprises worldwide.',
    images: ['/og-image.png'],
    creator: '@ahaantech',
  },
  alternates: {
    canonical: 'https://ahaantechnologies.com',
  },
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ahaan Technologies',
              url: 'https://ahaantechnologies.com',
              logo: 'https://ahaantechnologies.com/logo.png',
              description: 'Enterprise IT Services & Digital Transformation company serving clients worldwide.',
              foundingDate: '2015',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-AHAAN-TECH',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://www.linkedin.com/company/ahaantechnologies',
                'https://twitter.com/ahaantech',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-grid-pattern relative min-h-screen antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-xl focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
