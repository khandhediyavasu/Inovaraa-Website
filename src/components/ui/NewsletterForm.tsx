'use client';

import { useState, type FormEvent } from 'react';
import { openEmail } from '@/lib/mailto';
import { SITE } from '@/data/site';

// Newsletter signup with instant feedback. Opens the visitor's email app with a
// pre-filled subscribe request to info@inovaraa.com (no email backend yet).
export default function NewsletterForm({ variant = 'footer' }: { variant?: 'footer' | 'blog' }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    openEmail({
      subject: 'Newsletter subscription',
      body: `Please add ${email.trim()} to the ${SITE.name} newsletter.`,
    });
    setDone(true);
  };

  if (done) {
    return (
      <p role="status" className={`text-sm text-emerald-400 font-medium ${variant === 'blog' ? 'mt-8 text-center' : ''}`}>
        Your email app has opened with the request. Press Send and you&apos;re subscribed.
      </p>
    );
  }

  if (variant === 'blog') {
    return (
      <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto p-1.5 rounded-[1.4rem] sm:rounded-full surface-glass">
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
        <button type="submit" className="btn btn--primary shrink-0">Subscribe</button>
      </form>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 max-w-sm p-1.5 rounded-full bg-white/5 border border-white/10 focus-within:border-cyan-400/60 transition-colors"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
        placeholder="Your email for updates"
        aria-label="Email address"
      />
      <button type="submit" className="shrink-0 h-9 px-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:brightness-110 transition cursor-pointer">
        Subscribe
      </button>
    </form>
  );
}
