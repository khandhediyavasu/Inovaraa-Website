'use client';

import { useState, useRef } from 'react';
import type { CSSProperties, FormEvent, ReactNode } from 'react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

const offices = [
  { city: 'New York', country: 'USA', address: '350 Fifth Avenue, Suite 4200, New York, NY 10118', flag: '🇺🇸', color: '#22D3EE' },
  { city: 'London', country: 'UK', address: '1 Canada Square, Canary Wharf, London E14 5AB', flag: '🇬🇧', color: '#818CF8' },
  { city: 'Bangalore', country: 'India', address: 'Embassy Golf Links, Domlur, Bangalore 560071', flag: '🇮🇳', color: '#34D399' },
  { city: 'Singapore', country: 'Singapore', address: '1 Raffles Place, #38-01 OUB Centre, Singapore 048616', flag: '🇸🇬', color: '#F472B6' },
];

const services = [
  'AI Agents & MCP Servers', 'Software Development', 'Cloud Infrastructure', 'AI & Data Analytics', 'Digital Transformation',
  'Cybersecurity', 'Managed Services', 'General Inquiry',
];

const reasons: { title: string; desc: string; color: string; icon: ReactNode }[] = [
  { title: '24-Hour SLA Response', desc: 'Direct engagement with Principal Solutions Architects.', color: '#FBBF24', icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /> },
  { title: 'NDA-Backed Security', desc: 'Complete confidentiality and IP protection from day one.', color: '#34D399', icon: <><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
  { title: 'Zero Vendor Lock-In', desc: 'Open standard architectures with 100% client code ownership.', color: '#F472B6', icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></> },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const labelCls = 'block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2';
const inputBase =
  'w-full px-4 py-3 rounded-2xl bg-white/[0.04] border text-white text-sm outline-none transition-all duration-300 placeholder:text-slate-500 focus:bg-white/[0.07] focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15';
const inputCls = (hasError?: boolean) => `${inputBase} ${hasError ? 'border-rose-400/70' : 'border-white/10 hover:border-white/20'}`;

const Req = () => <span className="text-rose-400">*</span>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1.5">
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
      {msg}
    </span>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required';
    if (!formData.lastName.trim()) e.lastName = 'Last name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email';
    if (!formData.company.trim()) e.company = 'Company name is required';
    if (!formData.service) e.service = 'Please select a service';
    if (!formData.message.trim()) e.message = 'Please describe your project';
    else if (formData.message.trim().length < 20) e.message = 'Please provide more detail (at least 20 characters)';
    return e;
  };

  // Sends to /api/contact, which emails info@inovaraa.com and adds a row to the leads Excel file
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitError('');
    setStatus('submitting');
    try {
      const website = (formRef.current?.elements.namedItem('website') as HTMLInputElement | null)?.value ?? '';
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        kicker="Direct Engagement"
        title={<>Connect with <span className="text-gradient">principal architects</span></>}
        description="Tell us about your infrastructure or AI initiatives. Our technical team responds within 24 business hours with an initial architecture roadmap."
      />

      <section className="pb-24 sm:pb-28 pt-4 relative" aria-label="Contact form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 lg:gap-8 items-start">
            {/* Form */}
            <div suppressHydrationWarning data-reveal="scale" className="surface border-glow rounded-[2rem] p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(closest-side, var(--brand-1), transparent)' }} aria-hidden="true" />

              <div className="relative flex items-start gap-4 mb-8">
                <span className="icon-tile shrink-0" style={{ '--tile': '#22D3EE' } as CSSProperties}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5">Request an Architecture Consultation</h2>
                  <p className="text-xs text-slate-400">All fields marked <span className="text-rose-400 font-bold">*</span> are required.</p>
                </div>
              </div>

              {status === 'success' ? (
                <div className="relative rounded-3xl p-8 sm:p-10 text-center bg-emerald-500/10 border border-emerald-500/30" role="alert">
                  <div className="relative w-20 h-20 mx-auto mb-5" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
                    <svg viewBox="0 0 80 80" className="relative w-full h-full">
                      <circle cx="40" cy="40" r="36" fill="none" stroke="#34D399" strokeWidth="3" strokeDasharray="227" strokeDashoffset="227" style={{ animation: 'contact-draw 800ms ease forwards' }} />
                      <polyline points="26 41 36 51 55 31" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="44" strokeDashoffset="44" style={{ animation: 'contact-draw 500ms 600ms ease forwards' }} />
                    </svg>
                    <style>{'@keyframes contact-draw { to { stroke-dashoffset: 0; } }'}</style>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message received</h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Our team has your details and will reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
                  {/* Spam trap: hidden from people, bots tend to fill it */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
                  {status === 'error' && submitError && (
                    <p role="alert" className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                      {submitError} You can also email us at <a href="mailto:info@inovaraa.com" className="underline underline-offset-4">info@inovaraa.com</a>.
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className={labelCls}>First Name <Req /></label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Arjun"
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        aria-invalid={!!errors.firstName}
                        className={inputCls(!!errors.firstName)}
                      />
                      <FieldError msg={errors.firstName} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelCls}>Last Name <Req /></label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Mehta"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        aria-invalid={!!errors.lastName}
                        className={inputCls(!!errors.lastName)}
                      />
                      <FieldError msg={errors.lastName} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>Enterprise Work Email <Req /></label>
                    <input
                      id="email"
                      type="email"
                      placeholder="arjun@company.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                      aria-invalid={!!errors.email}
                      className={inputCls(!!errors.email)}
                    />
                    <FieldError msg={errors.email} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className={labelCls}>Company Name <Req /></label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={handleChange('company')}
                        aria-invalid={!!errors.company}
                        className={inputCls(!!errors.company)}
                      />
                      <FieldError msg={errors.company} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        Phone <span className="text-slate-500 normal-case tracking-normal font-medium">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className={inputCls()}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelCls}>Primary Service of Interest <Req /></label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange('service')}
                        aria-invalid={!!errors.service}
                        className={`${inputCls(!!errors.service)} appearance-none pr-11 cursor-pointer`}
                      >
                        <option value="" className="bg-slate-900 text-white">Select an engineering practice...</option>
                        {services.map((s) => <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>)}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                    <FieldError msg={errors.service} />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Describe Your Technical Challenge <Req /></label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Outline your target workload, current stack, scale requirements, or compliance objectives..."
                      value={formData.message}
                      onChange={handleChange('message')}
                      aria-invalid={!!errors.message}
                      className={`${inputCls(!!errors.message)} resize-y min-h-[140px]`}
                    />
                    <FieldError msg={errors.message} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn--primary btn--lg w-full mt-2 disabled:opacity-70 disabled:cursor-wait"
                    id="contact-submit"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" /><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info side */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              <div suppressHydrationWarning data-reveal="right" style={{ '--d': '120ms' } as CSSProperties} className="surface spotlight rounded-[1.75rem] p-7 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Why Engage Inovaraa?</h3>
                <ul className="flex flex-col gap-5 list-none p-0 m-0">
                  {reasons.map((f) => (
                    <li key={f.title} className="flex gap-4 items-start" style={{ '--tile': f.color } as CSSProperties}>
                      <span className="icon-tile shrink-0 w-11! h-11!">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{f.icon}</svg>
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{f.title}</div>
                        <div className="text-sm text-slate-400 mt-0.5 leading-relaxed">{f.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div suppressHydrationWarning data-reveal="right" style={{ '--d': '220ms' } as CSSProperties} className="surface spotlight rounded-[1.75rem] p-7 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-5">Direct Enterprise Inquiries</h3>
                <div className="flex flex-col gap-3">
                  <ContactRow href="mailto:info@inovaraa.com" label="Email" value="info@inovaraa.com" color="#22D3EE">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </ContactRow>
                  <ContactRow href="tel:+18004226826" label="Phone" value="+1 (800) 422-6826" color="#818CF8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </ContactRow>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-400">
                  <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  24/7/365 dedicated NOC response for managed enterprise clients.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global offices */}
      <section className="py-24 sm:py-28 relative overflow-hidden" aria-labelledby="offices-heading">
        <div className="absolute inset-0 bg-dots-fade opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            kicker="Global Footprint"
            id="offices-heading"
            title={<>Worldwide engineering <span className="text-gradient">hubs</span></>}
            className="mb-14"
          />

          <OfficeRoute />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((o, i) => (
              <div
                key={o.city}
                suppressHydrationWarning data-reveal
                style={{ '--d': `${i * 110}ms` } as CSSProperties}
                className="surface spotlight lift group relative rounded-[1.75rem] p-7 flex flex-col overflow-hidden"
              >
                <span className="absolute -right-10 -top-10 w-36 h-36 rounded-full opacity-20 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-45" style={{ background: o.color }} aria-hidden="true" />
                <div className="relative flex items-center justify-between mb-6">
                  <span className="text-4xl leading-none" role="img" aria-label={o.country}>{o.flag}</span>
                  <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: o.color }} />
                    <span className="relative w-2.5 h-2.5 rounded-full" style={{ background: o.color }} />
                  </span>
                </div>
                <div className="relative text-2xl font-bold text-white font-display">{o.city}</div>
                <div className="relative text-[11px] font-bold uppercase tracking-wider mt-1" style={{ color: `color-mix(in srgb, ${o.color} 70%, var(--ink))` }}>{o.country}</div>
                <p className="relative text-sm text-slate-400 leading-relaxed mt-4">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ href, label, value, color, children }: { href: string; label: string; value: string; color: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-2xl p-3 -mx-3 hover:bg-white/5 transition-colors"
      style={{ '--tile': color } as CSSProperties}
    >
      <span className="icon-tile shrink-0 w-11! h-11!">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
        <span className="block text-sm font-semibold text-white break-all group-hover:text-cyan-400 transition-colors">{value}</span>
      </span>
      <svg className="ml-auto w-4 h-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
    </a>
  );
}

/* Decorative route line linking the four hubs (desktop) */
function OfficeRoute() {
  const xs = [12.5, 37.5, 62.5, 87.5];
  return (
    <div className="hidden lg:block relative h-20 -mt-4 mb-2" aria-hidden="true">
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="contact-route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#22D3EE" />
            <stop offset="0.33" stopColor="#818CF8" />
            <stop offset="0.66" stopColor="#34D399" />
            <stop offset="1" stopColor="#F472B6" />
          </linearGradient>
        </defs>
        <path
          d="M125 70 Q 250 0 375 70 T 625 70 T 875 70"
          fill="none"
          stroke="url(#contact-route)"
          strokeWidth="2"
          strokeDasharray="5 7"
          vectorEffect="non-scaling-stroke"
          style={{ animation: 'dash-flow 1.6s linear infinite' }}
        />
      </svg>
      {xs.map((x, i) => (
        <span key={x} className="absolute bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full border-2" style={{ left: `${x}%`, borderColor: offices[i].color, background: 'var(--surface)' }} />
      ))}
    </div>
  );
}
