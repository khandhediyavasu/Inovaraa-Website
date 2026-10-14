import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import LogoMarquee from '@/components/home/LogoMarquee';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';
import Industries from '@/components/home/Industries';
import FeaturedBlog from '@/components/home/FeaturedBlog';
import FaqSection from '@/components/home/FaqSection';
import JsonLd, { faqSchema } from '@/components/seo/JsonLd';
import { homeFaqs } from '@/data/faqs';
import { SITE } from '@/data/site';

// The bare brand "Inovaraa" leads the title so the home page ranks for that one-word search,
// not only for "Inovaraa Solutions".
const HOME_TITLE = `${SITE.shortName} – AI & Software Development Company in Ahmedabad | ${SITE.name}`;

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: HOME_TITLE,
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
      <FeaturedBlog />
      <FaqSection />
    </>
  );
}
