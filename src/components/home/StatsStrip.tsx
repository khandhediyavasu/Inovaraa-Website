'use client';

export default function StatsStrip() {
  const stats = [
    {
      value: '$4.8B+',
      label: 'Enterprise Value Created',
      sub: 'Verified client ROI',
      badge: 'FinOps & AI',
      color: 'text-cyan-400'
    },
    {
      value: '99.999%',
      label: 'Mission-Critical SLA',
      sub: 'Zero single point of failure',
      badge: 'Uptime Guarantee',
      color: 'text-emerald-400'
    },
    {
      value: '450+',
      label: 'Global Enterprise Clients',
      sub: 'Across 38 countries',
      badge: 'Fortune 1000',
      color: 'text-indigo-400'
    },
    {
      value: '<12ms',
      label: 'Global Edge Latency',
      sub: 'Anycast microservices mesh',
      badge: 'SRE Fleet',
      color: 'text-amber-400'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 pb-12" aria-label="Enterprise Proof Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {item.badge}
                </span>
              </div>
              <div className={`text-3xl sm:text-4xl font-black ${item.color} tracking-tight leading-none`}>
                {item.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
