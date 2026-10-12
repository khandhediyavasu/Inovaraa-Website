'use client';

import { useTheme } from './ThemeProvider';

// Sun and moon are both rendered and cross-fade via [data-theme] CSS, so the
// button looks right even before React knows the theme (no mounted flag needed).
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle relative inline-flex items-center justify-center w-9 h-9 rounded-full border overflow-hidden transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 border-white/10 ${className}`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {/* Sun (shown in light theme) */}
      <svg
        className="theme-toggle__sun absolute w-4 h-4 text-amber-500 transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon (shown in dark theme) */}
      <svg
        className="theme-toggle__moon absolute w-4 h-4 text-cyan-400 transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
