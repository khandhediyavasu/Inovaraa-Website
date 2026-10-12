import { SITE } from '@/data/site';

const { indigo, blue, cyan, teal } = SITE.colors;
const XS = [14, 47, 80];

// Pixel i: a 3×3 grid of rounded tiles; the middle column spells a lowercase "i"
// (round cyan dot + two indigo tiles). One teal tile at the top right lights up.
export function PixelMark({ className = '', title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={`pixel-mark ${className}`} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      {XS.map((y, r) =>
        XS.map((x, col) => {
          if (col === 1 && r === 0) return <circle key={`${r}${col}`} className="pm-dot" cx={x + 13} cy={y + 13} r="13" fill={cyan} />;
          if (col === 1) return <rect key={`${r}${col}`} className="pm-i" x={x} y={y} width="26" height="26" rx="8" fill={indigo} />;
          const accent = r === 0 && col === 2;
          return (
            <rect
              key={`${r}${col}`}
              className={accent ? 'pm-accent' : 'pm-faint'}
              x={x}
              y={y}
              width="26"
              height="26"
              rx="8"
              fill={accent ? teal : blue}
              fillOpacity={accent ? 0.9 : 0.22}
            />
          );
        })
      )}
    </svg>
  );
}

// "inovaraa" drawn as rounded strokes in currentColor, so it follows the theme's text colour.
// The dot of the "i" is a tiny Pixel i mark.
export function Wordmark({ className = '', withSolutions = true }: { className?: string; withSolutions?: boolean }) {
  return (
    <svg viewBox={withSolutions ? '0 -8 400 108' : '0 -8 400 76'} className={className} aria-hidden="true">
      <svg x="3" y="-6" width="22" height="22" viewBox="0 0 120 120">
        {XS.map((y, r) =>
          XS.map((x, col) =>
            col === 1 && r === 0 ? (
              <circle key={`${r}${col}`} cx={x + 13} cy={y + 13} r="13" fill={cyan} />
            ) : (
              <rect key={`${r}${col}`} x={x} y={y} width="26" height="26" rx="8" fill={col === 1 ? indigo : r === 0 && col === 2 ? teal : blue} fillOpacity={col === 1 ? 1 : r === 0 && col === 2 ? 0.9 : 0.22} />
            )
          )
        )}
      </svg>
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 24V60" />
        <path d="M34 22V60M34 41a18 18 0 0 1 36 0V60" />
        <circle cx="108" cy="41" r="18" />
        <path d="M141 22L160 60L179 22" />
        <circle cx="217" cy="41" r="18" />
        <path d="M235 22V60" />
        <path d="M255 60V22M255 40a18 18 0 0 1 18-18" />
        <circle cx="310" cy="41" r="18" />
        <path d="M328 22V60" />
        <circle cx="366" cy="41" r="18" />
        <path d="M384 22V60" />
      </g>
      {withSolutions && (
        <text x="10" y="94" fontFamily="'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="10.6" fill="currentColor" fillOpacity="0.6">
          SOLUTIONS
        </text>
      )}
    </svg>
  );
}

// Full lockup used in the header and footer
export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const mark = size === 'lg' ? 'w-11 h-11' : size === 'sm' ? 'w-8 h-8' : 'w-9 h-9';
  const word = size === 'lg' ? 'h-10' : size === 'sm' ? 'h-7' : 'h-8';
  return (
    <span className="flex items-center gap-2.5">
      <PixelMark className={`${mark} shrink-0`} />
      <Wordmark className={`${word} w-auto text-white`} />
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
