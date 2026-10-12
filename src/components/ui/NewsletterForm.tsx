'use client';

import { useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';

// Newsletter signup: posts to /api/subscribe, which emails info@inovaraa.com and adds
// a "Newsletter" row to the leads Excel file.
export default function NewsletterForm({ variant = 'footer' }: { variant?: 'footer' | 'blog' }) {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === 'sending') return;
    setState('sending');
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website, page: pathname }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.');
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <p role="status" className={`text-sm text-emerald-400 font-medium ${variant === 'blog' ? 'mt-8 text-center' : ''}`}>
        You&apos;re subscribed. Thanks for joining!
      </p>
    );
  }

  const honeypot = (
    <input
      type="text"
      name="website"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="absolute -left-[9999px] w-px h-px opacity-0"
    />
  );
  const errorText = state === 'error' && <p role="alert" className="text-xs text-rose-400 mt-2">{error}</p>;
  const label = state === 'sending' ? 'Subscribing...' : 'Subscribe';

  if (variant === 'blog') {
    return (
      <div className="mt-8 max-w-md mx-auto">
        <form onSubmit={onSubmit} className="relative flex flex-col sm:flex-row gap-3 p-1.5 rounded-[1.4rem] sm:rounded-full surface-glass">
          {honeypot}
          <label htmlFor="newsletter-email" className="sr-only">Work email</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button type="submit" disabled={state === 'sending'} className="btn btn--primary shrink-0 disabled:opacity-70">{label}</button>
        </form>
        {errorText}
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="relative flex items-center gap-2 max-w-sm p-1.5 rounded-full bg-white/5 border border-white/10 focus-within:border-cyan-400/60 transition-colors"
      >
        {honeypot}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="Your email for updates"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="shrink-0 h-9 px-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:brightness-110 transition cursor-pointer disabled:opacity-70"
        >
          {label}
        </button>
      </form>
      {errorText}
    </div>
  );
}
