'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { projects } from '@/data/projects';
import { SITE } from '@/data/site';
import { PixelMark, Wordmark } from '@/components/ui/Logo';

const services = [
  {
    label: 'Custom Software Development',
    href: '/services/software-development',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    desc: 'Web, mobile & business apps you own',
  },
  {
    label: 'AI Agents & MCP Servers',
    href: '/services/ai-agents-mcp-servers',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </svg>
    ),
    desc: 'Connect Claude & ChatGPT to your software',
  },
  {
    label: 'AI & Data Analytics',
    href: '/services/ai-data-analytics',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    desc: 'Dashboards, data sync & in-app AI features',
  },
  {
    label: 'Cloud & DevOps',
    href: '/services/cloud-infrastructure',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    desc: 'Azure, AWS & CI/CD, with RytumX',
  },
  {
    label: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    desc: 'Secure-by-design apps & security reviews',
  },
  {
    label: 'Digital Transformation',
    href: '/services/digital-transformation',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16"/>
      </svg>
    ),
    desc: 'From spreadsheets & paper to web apps',
  },
  {
    label: 'Managed Services & QA',
    href: '/services/managed-services',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    desc: 'Testing, maintenance & support after launch',
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


const tileColors = ['#22D3EE', '#818CF8', '#FBBF24', '#34D399', '#F472B6', '#38BDF8'];

// Brand lockup: Pixel i mark + "inovaraa" wordmark (see components/ui/Logo.tsx)
export function LogoMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return <PixelMark className={`${size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'} shrink-0`} />;
}

function BrandWordmark() {
  return <Wordmark className="h-7 sm:h-8 w-auto text-white" />;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const dropdownRef = useRef<HTMLLIElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setScrolled(window.scrollY > 20);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, searchOpen]);

  const moveIndicator = (el: HTMLElement) => {
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
  };

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none" aria-hidden="true">
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <header className={`fixed inset-x-0 z-50 px-3 sm:px-4 transition-all duration-500 ${scrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'}`} role="banner">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? 'surface-glass glass-blur px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl shadow-black/20'
              : 'bg-transparent border-transparent px-3 sm:px-5 py-2 sm:py-2.5'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label={`${SITE.name} — Home`} onClick={closeAll}>
            <LogoMark />
            <BrandWordmark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center mx-2" aria-label="Main Navigation">
            <ul
              className="relative flex items-center gap-0.5 list-none m-0 p-0"
              role="list"
              onMouseLeave={() => setIndicator((s) => ({ ...s, visible: false }))}
            >
              {/* Hover pill that slides between links */}
              <span
                aria-hidden="true"
                className="absolute top-0 h-full rounded-full bg-white/[0.07] transition-all duration-300 ease-out pointer-events-none"
                style={{ left: indicator.left, width: indicator.width, opacity: indicator.visible ? 1 : 0 }}
              />

              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li
                    key={link.label}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={(e) => {
                      moveIndicator(e.currentTarget);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {/* Hover/focus opens the mega menu; a click goes straight to /services */}
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        isActive(link.href) ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                      onClick={closeAll}
                      onFocus={() => setServicesOpen(true)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      {isActive(link.href) && <ActiveDot />}
                    </Link>

                    {/* Mega menu */}
                    <div
                      className={`absolute left-1/2 top-full pt-4 -translate-x-[38%] transition-all duration-300 ease-out ${
                        servicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                      }`}
                    >
                      <div className="surface-glass glass-blur w-[760px] rounded-3xl p-3 shadow-2xl shadow-black/40 grid grid-cols-[1fr_230px] gap-3">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s, i) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors group/item"
                              onClick={closeAll}
                            >
                              <span
                                className="icon-tile w-10! h-10! rounded-xl! shrink-0 group-hover/item:scale-110 transition-transform"
                                style={{ '--tile': tileColors[i % tileColors.length] } as CSSProperties}
                              >
                                {s.icon}
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-white">{s.label}</span>
                                <span className="block text-xs text-slate-400 leading-snug mt-0.5">{s.desc}</span>
                              </span>
                            </Link>
                          ))}
                        </div>

                        <Link
                          href="/projects"
                          onClick={closeAll}
                          className="relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between bg-gradient-to-br from-indigo-500 via-sky-600 to-emerald-500 text-white group/promo"
                        >
                          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-white/25 spin-slow" aria-hidden="true" />
                          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full border border-dashed border-white/30" aria-hidden="true" />
                          <span className="relative text-[11px] font-bold uppercase tracking-widest text-white/80">Our Work</span>
                          <span className="relative">
                            <span className="block font-display text-4xl font-extrabold">{projects.length}+</span>
                            <span className="block text-sm text-white/85 mt-1">projects delivered for healthcare, logistics, finance &amp; more</span>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                              See projects
                              <svg className="w-4 h-4 group-hover/promo:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.label} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center px-2.5 xl:px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        isActive(link.href) ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive(link.href) && <ActiveDot />}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            <button
              type="button"
              className="flex items-center gap-1.5 sm:gap-2 h-9 px-2.5 sm:px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-slate-300 transition-colors cursor-pointer"
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="hidden sm:inline lg:hidden xl:inline">Search</span>
              <kbd className="hidden md:inline lg:hidden xl:inline font-mono text-[10px] px-1.5 py-0.5 bg-white/10 rounded">⌘K</kbd>
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap h-9 px-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all group/cta"
              id="header-cta"
            >
              Let&apos;s Talk
              <svg className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden relative flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-full bg-white/5 border border-white/10 cursor-pointer"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <span className="block w-4 h-[1.5px] rounded bg-current text-white" />
              <span className="block w-4 h-[1.5px] rounded bg-current text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[100] flex items-start justify-center pt-[12vh] sm:pt-[16vh] px-4"
          style={{ animation: 'reveal-fade 250ms ease-out' }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="surface-glass glass-blur w-full max-w-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/40"
            style={{ animation: 'reveal-scale 350ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery) router.push(`/blog?search=${encodeURIComponent(searchQuery)}`);
                setSearchOpen(false);
              }}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input
                  type="text"
                  placeholder="Search services, projects, insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-none outline-none text-white text-base placeholder:text-slate-500"
                />
                <kbd className="font-mono text-xs text-slate-400 bg-white/10 px-2 py-1 rounded">ESC</kbd>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider">Quick links</div>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { label: 'Our Work', href: '/projects' },
                    { label: 'Services', href: '/services' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Careers', href: '/careers' },
                    { label: 'Contact', href: '/contact' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      onClick={() => setSearchOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/[0.97] flex flex-col overflow-y-auto"
          style={{ animation: 'reveal-fade 250ms ease-out' }}
        >
          <div className="absolute inset-0 bg-dots-fade pointer-events-none" aria-hidden="true" />
          <div className="relative flex items-center justify-between p-5">
            <Link href="/" className="group flex items-center gap-2.5" onClick={closeAll}>
              <LogoMark size="sm" />
              <BrandWordmark />
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          <ul className="relative flex flex-col list-none px-5 m-0 mt-4">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className="border-b border-white/10"
                style={{ animation: `reveal-up 600ms cubic-bezier(0.16, 1, 0.3, 1) ${80 + i * 55}ms backwards` }}
              >
                <Link
                  href={link.href}
                  className="flex items-baseline gap-4 py-4 group"
                  onClick={closeAll}
                >
                  <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`font-display text-3xl font-bold transition-colors ${isActive(link.href) ? 'text-gradient' : 'text-white group-hover:text-cyan-400'}`}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="relative mt-auto p-5 flex flex-col gap-3"
            style={{ animation: 'reveal-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms backwards' }}
          >
            <Link
              href="/contact"
              className="w-full py-3.5 text-center rounded-full font-bold text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 shadow-lg shadow-indigo-500/30"
              onClick={closeAll}
            >
              Start a Project
            </Link>
            <p className="text-center text-xs text-slate-500">We reply within 24 hours</p>
          </div>
        </div>
      )}
    </>
  );
}

function ActiveDot() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]"
    />
  );
}
