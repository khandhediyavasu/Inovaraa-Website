'use client';

const partners = [
  'AWS Premier Tier', 'Microsoft Solutions Partner', 'Google Cloud Premier',
  'Snowflake Elite Partner', 'Databricks AI Partner', 'CrowdStrike Authorized',
  'HashiCorp Certified', 'NVIDIA AI Inception', 'Kubernetes KCSP', 'Terraform Cloud',
  'AWS Premier Tier', 'Microsoft Solutions Partner', 'Google Cloud Premier',
  'Snowflake Elite Partner', 'Databricks AI Partner', 'CrowdStrike Authorized',
];

export default function LogoMarquee() {
  return (
    <section aria-label="Ecosystem & Enterprise Partners" className="py-12 border-y border-white/5 bg-[var(--bg-primary)]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
          Enterprise Cloud &amp; AI Ecosystem Alliances
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left/Right ambient gradient fades */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee">
          {partners.map((p, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.02] border border-white/[0.06] rounded-full text-slate-300 text-xs font-semibold whitespace-nowrap tracking-wide"
            >
              <span className="text-cyan-400">✦</span>
              {p}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marqueeScroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
