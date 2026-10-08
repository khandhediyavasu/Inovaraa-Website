import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import LogoMarquee from '@/components/home/LogoMarquee';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';
import CaseStudies from '@/components/home/CaseStudies';
import Industries from '@/components/home/Industries';
import Testimonials from '@/components/home/Testimonials';
import FeaturedBlog from '@/components/home/FeaturedBlog';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & AI-Powered Digital Transformation',
  description:
    'Ahaan Technologies delivers AI-powered IT services, cloud infrastructure, digital transformation, cybersecurity, and managed services for global enterprises. Get a free consultation today.',
  keywords: ['IT services company', 'enterprise IT solutions', 'digital transformation', 'cloud services', 'AI analytics'],
  alternates: { canonical: 'https://ahaantechnologies.com' },
  openGraph: {
    title: 'Ahaan Technologies | Enterprise IT Services & Digital Transformation',
    description: 'AI-powered IT services and digital transformation for enterprises worldwide.',
    url: 'https://ahaantechnologies.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LogoMarquee />
      <ServicesOverview />
      <ProcessSection />
      <ProjectsDelivered limit={3} showViewAll />
      <CaseStudies />
      <Industries />
      <Testimonials />
      <FeaturedBlog />
      <FaqSection />
      <CtaSection />
    </>
  );
}
