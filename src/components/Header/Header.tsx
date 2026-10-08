'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const services = [
  {
    label: 'Cloud Infrastructure',
    href: '/services/cloud-infrastructure',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    desc: 'Multi-cloud, FinOps & Kubernetes architecture',
  },
  {
    label: 'AI & Data Analytics',
    href: '/services/ai-data-analytics',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    desc: 'Autonomous AI agents, RAG & Lakehouses',
  },
  {
    label: 'Digital Transformation',
    href: '/services/digital-transformation',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16"/>
      </svg>
    ),
    desc: 'Legacy monolith modernization & RPA',
  },
  {
    label: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    desc: 'Zero trust frameworks & 24/7 SOC defense',
  },
  {
    label: 'Managed Services',
    href: '/services/managed-services',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    desc: '24/7 proactive NOC & guaranteed SLAs',
  },
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    desc: 'High-throughput enterprise applications',
  },
];

const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Our Work', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-4 transition-all duration-300" role="banner">
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 border-indigo-500/30 shadow-2xl shadow-indigo-950/50'
            : 'bg-slate-900/75 border-white/10 shadow-xl shadow-black/40'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 text-decoration-none group shrink-0" aria-label="Ahaan Technologies — Home">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-sm sm:text-base shadow-md shadow-indigo-500/40 border border-white/20 group-hover:scale-105 transition-transform">
              A
            </span>
            <span className="text-base sm:text-lg font-black tracking-tight">
              Ahaan<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center mx-2" aria-label="Main Navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0" role="list">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-slate-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/80 grid grid-cols-2 gap-3 animate-in fade-in duration-200">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-indigo-500/30 hover:bg-white/5 transition-all text-left group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                              {s.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">{s.label}</div>
                              <div className="text-xs text-slate-400 leading-tight mt-0.5">{s.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center px-2.5 xl:px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Search Button */}
            <button
              type="button"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs transition-colors cursor-pointer"
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span className="hidden sm:inline lg:hidden xl:inline">Search</span>
              <kbd className="hidden md:inline lg:hidden xl:inline font-mono text-[10px] px-1.5 py-0.5 bg-white/10 rounded">⌘K</kbd>
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex whitespace-nowrap px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 shadow-md shadow-indigo-500/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
              id="header-cta"
            >
              Get in Touch
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100] flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-slate-900/95 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={(e) => { e.preventDefault(); if (searchQuery) window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`; setSearchOpen(false); }}>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  placeholder="Search services, case studies, insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-none outline-none text-white text-sm sm:text-base placeholder:text-slate-500"
                />
                <kbd className="font-mono text-xs text-slate-400 bg-white/10 px-2 py-1 rounded">ESC</kbd>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold tracking-wider">Popular Searches</div>
                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                  {['Cloud Migration', 'AI Readiness', 'Zero Trust SOC', 'FinOps', 'Kubernetes'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      onClick={() => { window.location.href = `/services`; setSearchOpen(false); }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-[100] p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-base">A</span>
              <span className="text-lg font-black text-white">Ahaan<span className="text-cyan-400">Tech</span></span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-lg font-bold text-white hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-auto w-full py-3 text-center rounded-full font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30"
            onClick={() => setMobileOpen(false)}
          >
            Launch Consultation
          </Link>
        </div>
      )}
    </>
  );
}
