'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'agent' | 'cloud'>('telemetry');

  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.18)_0%,rgba(6,182,212,0.05)_45%,transparent_70%)]" aria-label="Enterprise Hero">
      {/* Background Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[15%] left-[20%] w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-[90px] animate-orb-float-1" />
        <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-orb-float-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 shadow-lg shadow-indigo-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 relative">
                <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-ping" />
              </span>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Enterprise 2026 Edition • AI &amp; Autonomous Cloud
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Engineering the{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Autonomous Enterprise
              </span>{' '}
              at Infinite Scale
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              Ahaan Technologies delivers full-stack AI engineering, resilient multi-cloud architectures, and Zero Trust cybersecurity to accelerate mission-critical transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 hover:-translate-y-0.5 transition-all text-sm cursor-pointer w-full sm:w-auto text-center"
                id="hero-primary-cta"
              >
                Launch Enterprise Pilot
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md hover:-translate-y-0.5 transition-all text-sm cursor-pointer w-full sm:w-auto text-center"
                id="hero-secondary-cta"
              >
                Explore Capabilities
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-4 border-t border-white/10 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>$4.8B+ Enterprise Value</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>99.999% SLA Uptime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>SOC 2 &amp; ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-slate-950/90 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-900/90 border-b border-white/10">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-slate-400 font-medium truncate max-w-[170px] sm:max-w-none">ahaan.mesh-control // prod-v26.4</span>
                <span className="badge badge--emerald text-[9px] sm:text-[10px] py-0.5 px-2">LIVE</span>
              </div>

              <div className="flex px-3 sm:px-4 py-2 bg-slate-900/60 border-b border-white/5 gap-1.5 sm:gap-2 overflow-x-auto">
                <button
                  type="button"
                  className={`text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                    activeTab === 'telemetry'
                      ? 'bg-indigo-500/20 text-white border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  onClick={() => setActiveTab('telemetry')}
                >
                  ⚡ Telemetry
                </button>
                <button
                  type="button"
                  className={`text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                    activeTab === 'agent'
                      ? 'bg-indigo-500/20 text-white border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  onClick={() => setActiveTab('agent')}
                >
                  🧠 Neural Agents
                </button>
                <button
                  type="button"
                  className={`text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                    activeTab === 'cloud'
                      ? 'bg-indigo-500/20 text-white border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  onClick={() => setActiveTab('cloud')}
                >
                  ☁️ SRE Fleet
                </button>
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                {activeTab === 'telemetry' && (
                  <>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex flex-col gap-1">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">Cluster Throughput</span>
                        <span className="text-2xl font-black text-cyan-400 tracking-tight">4.8M req/s</span>
                        <span className="text-[10px] text-emerald-400">↑ 99.4% parallel efficiency</span>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex flex-col gap-1">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">Edge P99 Latency</span>
                        <span className="text-2xl font-black text-emerald-400 tracking-tight">8.4 ms</span>
                        <span className="text-[10px] text-slate-400">Global Anycast Mesh</span>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex flex-col gap-1">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">FinOps Optimization</span>
                        <span className="text-2xl font-black text-white tracking-tight">-48.2%</span>
                        <span className="text-[10px] text-cyan-400">Automated spot balancing</span>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex flex-col gap-1">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">Zero Trust Shield</span>
                        <span className="text-2xl font-black text-emerald-400 tracking-tight">0 Breaches</span>
                        <span className="text-[10px] text-slate-400">Continuous token audit</span>
                      </div>
                    </div>

                    <div className="bg-black/50 border border-white/5 rounded-xl p-3.5 font-mono text-[11px] text-slate-400 flex flex-col gap-1.5">
                      <div className="flex gap-2">
                        <span className="text-cyan-400">[06:42:19]</span>
                        <span>Multi-region failover verified (AWS us-east-1 ➔ Azure eu-west).</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-emerald-400">[06:42:20]</span>
                        <span className="text-emerald-400">Autonomous agent pipeline rebalanced: 12,400 inferences/sec.</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'agent' && (
                  <div className="bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col gap-2.5">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-bold text-white">Agent Orchestrator</span>
                      <span className="badge badge--cyan text-[10px]">Active (12 Pods)</span>
                    </div>
                    <div><span className="text-cyan-400">model:</span> Ahaan-Enterprise-RAG-v4 (128k context)</div>
                    <div><span className="text-cyan-400">vector_db:</span> Milvus cluster (0.4ms retrieval, 40M vectors)</div>
                    <div className="text-emerald-400"><span className="text-cyan-400">guardrail:</span> 100% PII masked, 0 hallucination drift</div>
                  </div>
                )}

                {activeTab === 'cloud' && (
                  <div className="bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-bold text-white">Global Kubernetes Fleet</span>
                      <span className="badge badge--emerald text-[10px]">All Healthy</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 p-2 rounded-lg text-center">
                        <div className="text-[10px] text-slate-400">AWS EKS</div>
                        <div className="text-emerald-400 font-bold">99.999%</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg text-center">
                        <div className="text-[10px] text-slate-400">Azure AKS</div>
                        <div className="text-emerald-400 font-bold">99.998%</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg text-center">
                        <div className="text-[10px] text-slate-400">GCP GKE</div>
                        <div className="text-emerald-400 font-bold">100.0%</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
