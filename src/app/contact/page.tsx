'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import type { FormEvent } from 'react';

const offices = [
  { city: 'New York', country: 'USA', address: '350 Fifth Avenue, Suite 4200, New York, NY 10118', flag: '🇺🇸' },
  { city: 'London', country: 'UK', address: '1 Canada Square, Canary Wharf, London E14 5AB', flag: '🇬🇧' },
  { city: 'Bangalore', country: 'India', address: 'Embassy Golf Links, Domlur, Bangalore 560071', flag: '🇮🇳' },
  { city: 'Singapore', country: 'Singapore', address: '1 Raffles Place, #38-01 OUB Centre, Singapore 048616', flag: '🇸🇬' },
];

const services = [
  'Cloud Infrastructure', 'AI & Data Analytics', 'Digital Transformation',
  'Cybersecurity', 'Managed Services', 'Software Development', 'General Inquiry',
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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    formRef.current?.reset();
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <section className="page-hero pt-32 pb-16 relative">
        <div className="container text-center">
          <nav className="breadcrumbs justify-center" aria-label="Breadcrumb">
            <div><Link href="/" className="hover:text-white transition-colors">Home</Link></div>
            <span className="text-slate-500">›</span>
            <div className="text-cyan-400 font-medium">Contact</div>
          </nav>
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow">Direct Engagement</span>
            <h1 className="text-white my-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Connect with Principal Architects
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Tell us about your infrastructure or AI initiatives. Our technical team responds within 24 business hours with an initial architecture roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
            {/* Form */}
            <div className="glass-card p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-2">Request an Architecture Consultation</h2>
              <p className="text-xs text-slate-400 mb-8">All fields marked <span className="text-rose-500 font-bold">*</span> are required.</p>

              {status === 'success' ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center" role="alert">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you for reaching out. One of our Principal Solutions Architects will review your requirements and reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Arjun"
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.firstName && <span className="text-xs text-rose-400 mt-1 block">{errors.firstName}</span>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Mehta"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.lastName && <span className="text-xs text-rose-400 mt-1 block">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Enterprise Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="arjun@company.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.email && <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={handleChange('company')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.company && <span className="text-xs text-rose-400 mt-1 block">{errors.company}</span>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone <span className="text-slate-500 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Service of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange('service')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select an engineering practice...</option>
                      {services.map((s) => <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>)}
                    </select>
                    {errors.service && <span className="text-xs text-rose-400 mt-1 block">{errors.service}</span>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Describe Your Technical Challenge <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Outline your target workload, current stack, scale requirements, or compliance objectives..."
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.message && <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn--primary btn--lg w-full mt-2"
                    id="contact-submit"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="flex flex-col gap-6">
              <div className="glass-card p-8 flex flex-col gap-5">
                <h3 className="text-xl font-bold text-white">Why Engage Ahaan?</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: '⚡', title: '24-Hour SLA Response', desc: 'Direct engagement with Principal Solutions Architects.' },
                    { icon: '🔒', title: 'NDA-Backed Security', desc: 'Complete confidentiality and IP protection from day one.' },
                    { icon: '🎯', title: 'Zero Vendor Lock-In', desc: 'Open standard architectures with 100% client code ownership.' }
                  ].map((f) => (
                    <div key={f.title} className="flex gap-4 items-start">
                      <span className="text-xl">{f.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-white">{f.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-white">Direct Enterprise Inquiries</h3>
                <div className="flex flex-col gap-3 text-sm text-slate-300">
                  <a href="mailto:contact@ahaantechnologies.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>📧</span> contact@ahaantechnologies.com
                  </a>
                  <a href="tel:+18004226826" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>📞</span> +1 (800) 422-6826
                  </a>
                  <div className="text-xs text-slate-500 pt-2 border-t border-white/5">
                    24/7/365 dedicated NOC response for managed enterprise clients.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-slate-950/40 relative border-t border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Global Footprint</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">Worldwide Engineering Hubs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="glass-card glass-card-hover p-6 flex flex-col gap-2">
                <span className="text-3xl mb-2">{o.flag}</span>
                <div className="text-base font-bold text-white">{o.city}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">{o.country}</div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
