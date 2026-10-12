import type { ScreenVariant } from '@/data/projects';

// Isometric laptop illustration. The screen and keyboard are drawn flat and
// skewed onto the lid/deck with affine matrices, so their contents stay simple rects.
const LID = 'matrix(0.7 0.22 -0.272 0.88 118 18)';
const DECK = 'matrix(0.7 0.22 -0.5 0.6 84 128)';
const DECK_POINTS = '84,128 224,172 174,232 34,188';

const ink = '#1F2937';
const line = '#CBD2DC';
const panel = '#F4F6FA';

function Dashboard({ accent }: { accent: string }) {
  return (
    <>
      <rect x="5" y="5" width="190" height="12" fill={accent} />
      <rect x="5" y="17" width="34" height="103" fill={panel} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="11" y={26 + i * 12} width="22" height="4" rx="1" fill={i === 1 ? accent : line} />
      ))}
      <rect x="46" y="24" width="60" height="6" rx="1" fill={ink} />
      {[46, 94, 142].map((x) => (
        <g key={x}>
          <rect x={x} y="36" width="44" height="24" rx="2" fill={panel} />
          <rect x={x + 5} y="42" width="18" height="5" rx="1" fill={accent} />
          <rect x={x + 5} y="51" width="28" height="3" rx="1" fill={line} />
        </g>
      ))}
      <rect x="46" y="66" width="92" height="48" rx="2" fill={panel} />
      {[18, 28, 22, 34, 26, 38].map((h, i) => (
        <rect key={i} x={53 + i * 13} y={108 - h} width="8" height={h} rx="1" fill={accent} opacity={0.55 + i * 0.07} />
      ))}
      <rect x="144" y="66" width="46" height="48" rx="2" fill={panel} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="149" y={73 + i * 8} width={i % 2 ? 26 : 34} height="3" rx="1" fill={line} />
      ))}
    </>
  );
}

function Website({ accent }: { accent: string }) {
  return (
    <>
      <rect x="11" y="9" width="20" height="4" rx="1" fill={accent} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={98 + i * 17} y="10" width="12" height="2.5" rx="1" fill={line} />
      ))}
      <rect x="170" y="8" width="20" height="6" rx="3" fill={accent} />
      <rect x="5" y="18" width="190" height="52" fill={accent} opacity="0.12" />
      <rect x="14" y="28" width="80" height="7" rx="1" fill={ink} />
      <rect x="14" y="38" width="62" height="7" rx="1" fill={ink} />
      <rect x="14" y="50" width="72" height="3" rx="1" fill="#9AA3B2" />
      <rect x="14" y="58" width="28" height="7" rx="3.5" fill={accent} />
      <rect x="110" y="24" width="76" height="40" rx="3" fill={accent} opacity="0.55" />
      {[14, 74, 134].map((x) => (
        <g key={x}>
          <rect x={x} y="78" width="52" height="36" rx="2" fill={panel} />
          <circle cx={x + 9} cy="87" r="4" fill={accent} opacity="0.8" />
          <rect x={x + 5} y="96" width="38" height="3" rx="1" fill={line} />
          <rect x={x + 5} y="103" width="28" height="3" rx="1" fill={line} />
        </g>
      ))}
    </>
  );
}

function Tiles({ accent }: { accent: string }) {
  return (
    <>
      <rect x="5" y="5" width="190" height="14" fill={accent} />
      <rect x="12" y="10" width="40" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
      {[0, 1].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 12 + col * 45;
          const y = 26 + row * 46;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width="39" height="40" rx="3" fill={panel} />
              <circle cx={x + 19.5} cy={y + 15} r="8" fill={accent} opacity={0.5 + col * 0.12} />
              <rect x={x + 7} y={y + 29} width="25" height="3" rx="1" fill={line} />
            </g>
          );
        })
      )}
    </>
  );
}

export default function LaptopMockup({ id, accent, screen }: { id: string; accent: string; screen: ScreenVariant }) {
  return (
    <svg viewBox="0 0 300 250" className="w-full h-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-deck`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F6F8" />
          <stop offset="1" stopColor="#C6CBD3" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <pattern id={`${id}-keys`} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="8" height="8" rx="1" fill="#3B404B" />
        </pattern>
      </defs>

      {/* Drop shadow */}
      <polygon points={DECK_POINTS} transform="translate(22 14)" fill="#0F172A" opacity="0.22" filter={`url(#${id}-shadow)`} />

      {/* Deck: thickness, top, keyboard and trackpad */}
      <polygon points={DECK_POINTS} transform="translate(0 5)" fill="#8E96A3" />
      <polygon points={DECK_POINTS} fill={`url(#${id}-deck)`} />
      <g transform={DECK}>
        <rect x="14" y="8" width="172" height="50" rx="3" fill="#262A33" />
        <rect x="16" y="10" width="168" height="46" fill={`url(#${id}-keys)`} />
        <rect x="72" y="64" width="56" height="30" rx="3" fill="#D3D8DF" />
      </g>

      {/* Lid: bezel, screen, contents */}
      <g transform={LID}>
        <rect x="0" y="0" width="200" height="125" rx="6" fill="#16191F" />
        <rect x="5" y="5" width="190" height="115" rx="1.5" fill="#FFFFFF" />
        {screen === 'dashboard' && <Dashboard accent={accent} />}
        {screen === 'website' && <Website accent={accent} />}
        {screen === 'tiles' && <Tiles accent={accent} />}
      </g>
    </svg>
  );
}
