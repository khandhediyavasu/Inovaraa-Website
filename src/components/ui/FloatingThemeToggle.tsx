'use client';

import { useTheme } from '@/components/ThemeProvider';

// Theme switch docked to the right edge of the viewport. Collapsed it shows just the
// icon; on hover/focus it slides out with a label. Icons swap via [data-theme] CSS
// (theme-toggle__sun / __moon), so it is correct before hydration.
export default function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-dock group fixed right-0 top-1/2 -translate-y-1/2 z-[45] flex items-center gap-2.5 pl-3 pr-3 py-3 rounded-l-2xl border border-r-0 cursor-pointer translate-x-[calc(100%-3.25rem)] hover:translate-x-0 focus-visible:translate-x-0 transition-transform duration-300 ease-out"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} mode`}
    >
      <span className="relative w-7 h-7 shrink-0 flex items-center justify-center rounded-full theme-dock__icon">
        {/* Sun (shown in light theme) */}
        <svg className="theme-toggle__sun absolute w-4 h-4 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        {/* Moon (shown in dark theme) */}
        <svg className="theme-toggle__moon absolute w-4 h-4 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
      <span className="text-xs font-semibold whitespace-nowrap pr-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
        {/* Says what a click will do; CSS shows the right one for the current theme */}
        <span className="theme-dock__label-dark">Switch to light</span>
        <span className="theme-dock__label-light">Switch to dark</span>
      </span>
    </button>
  );
}
