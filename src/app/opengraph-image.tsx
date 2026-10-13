import { ImageResponse } from 'next/og';

// Share image used when inovaraa.com is posted on LinkedIn, WhatsApp, X, Slack, etc.
export const alt = 'Inovaraa Solutions: AI & Software Development Company in Ahmedabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const tiles: { x: number; y: number; color: string; opacity: number; round?: boolean }[] = [];
[14, 47, 80].forEach((y, r) =>
  [14, 47, 80].forEach((x, c) => {
    if (c === 1 && r === 0) tiles.push({ x, y, color: '#22D3EE', opacity: 1, round: true });
    else if (c === 1) tiles.push({ x, y, color: '#6366F1', opacity: 1 });
    else if (r === 0 && c === 2) tiles.push({ x, y, color: '#10B981', opacity: 0.9 });
    else tiles.push({ x, y, color: '#0EA5E9', opacity: 0.3 });
  })
);

export default function Image() {
  const scale = 2.2;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 90px',
          gap: 70,
          background: 'radial-gradient(circle at 20% 10%, #1e2a6b 0%, #0B1226 45%, #050811 100%)',
          color: '#F8FAFC',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'relative', width: 120 * scale, height: 120 * scale, display: 'flex', flexShrink: 0 }}>
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: t.x * scale,
                top: t.y * scale,
                width: 26 * scale,
                height: 26 * scale,
                borderRadius: t.round ? 999 : 8 * scale,
                background: t.color,
                opacity: t.opacity,
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>inovaraa</div>
          <div style={{ fontSize: 22, letterSpacing: 12, color: '#94A3B8', marginTop: 10 }}>SOLUTIONS</div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 48, lineHeight: 1.2, display: 'flex', flexDirection: 'column' }}>
            <span>AI Agents · MCP Servers ·</span>
            <span style={{ color: '#22D3EE' }}>Software Development</span>
          </div>
          <div style={{ fontSize: 26, color: '#94A3B8', marginTop: 28 }}>inovaraa.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
