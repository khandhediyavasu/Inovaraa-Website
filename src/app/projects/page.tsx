import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectsDelivered from '@/components/projects/ProjectsDelivered';

export const metadata: Metadata = {
  title: 'Our Work | Ahaan Technologies',
  description: 'Healthcare, logistics, finance, real estate and retail platforms delivered by the Ahaan Technologies engineering team.',
  alternates: { canonical: 'https://ahaantechnologies.com/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-20">
        <nav className="breadcrumbs justify-center pt-12 mb-0" aria-label="Breadcrumb">
          <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
          <span className="text-slate-500">›</span>
          <div className="text-cyan-400 font-medium">Our Work</div>
        </nav>
        <ProjectsDelivered headingLevel="h1" />
      </div>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Tell us what you want to build and we&apos;ll share a plan, timeline and team within 24 hours.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
