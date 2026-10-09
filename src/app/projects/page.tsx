import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';

export const metadata: Metadata = {
  title: 'Our Work: Software Projects Delivered',
  description: 'Healthcare, logistics, finance, real estate and retail platforms delivered by the Inovaraa Solutions engineering team.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Our Work"
        kicker="Portfolio"
        title={<>Products we&apos;ve <span className="text-gradient">designed, built &amp; shipped</span></>}
        description="Healthcare, logistics, finance, real estate and retail platforms, each built end to end by our engineers."
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Start Your Project
          <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
      </PageHero>
      <ProjectsDelivered showHeading={false} />
    </>
  );
}
