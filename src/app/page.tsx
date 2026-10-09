import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import LogoMarquee from '@/components/home/LogoMarquee';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';
import Industries from '@/components/home/Industries';
import Testimonials from '@/components/home/Testimonials';
import FeaturedBlog from '@/components/home/FeaturedBlog';
import FaqSection from '@/components/home/FaqSection';
import JsonLd, { faqSchema } from '@/components/seo/JsonLd';
import { homeFaqs } from '@/data/faqs';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | AI, MCP Server & Software Development Company` },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE.name} | AI, MCP Server & Software Development Company`,
    description: SITE.description,
    url: '/',
  },
};

// The closing call-to-action lives in the footer, so pages don't repeat it.
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <StatsStrip />
      <LogoMarquee />
      <ServicesOverview />
      <ProjectsDelivered limit={3} showViewAll showImpact={false} />
      <ProcessSection />
      <Industries />
      <Testimonials />
      <FeaturedBlog />
      <FaqSection />
    </>
  );
}
