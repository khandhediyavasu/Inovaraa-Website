'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 ${className}`} aria-hidden="true" />
    );
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 cursor-pointer ${
        isLight
          ? 'bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-500 shadow-sm'
          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400'
      } ${className}`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? (
        /* Sun Icon */
        <svg
          className="w-4 h-4 transform rotate-0 scale-100 transition-all duration-300 text-amber-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        /* Moon Icon */
        <svg
          className="w-4 h-4 transform rotate-0 scale-100 transition-all duration-300 text-cyan-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
