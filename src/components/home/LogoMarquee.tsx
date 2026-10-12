import type { CSSProperties } from 'react';

// Technologies the team ships with (from delivered projects)
const rowA = ['.NET Core', 'Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'React Native', 'C#'];
const rowB = ['Microsoft Azure', 'AWS', 'SQL Server', 'MongoDB', 'Docker', 'CI/CD Pipelines', 'Claude API', 'OpenAI API'];

const hues = ['#22D3EE', '#818CF8', '#34D399', '#F472B6', '#FBBF24', '#38BDF8'];

function Row({ items, reverse = false, speed }: { items: string[]; reverse?: boolean; speed: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} style={{ '--speed': speed, '--gap': '0.75rem' } as CSSProperties}>
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="surface-glass inline-flex items-center gap-2.5 pl-2 pr-5 py-2 rounded-full text-sm font-semibold text-slate-300 whitespace-nowrap"
            aria-hidden={i >= items.length}
          >
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black"
              style={{ color: "#FFFFFF", background: `linear-gradient(135deg, ${hues[i % hues.length]}, ${hues[(i + 2) % hues.length]})` }}
            >
              {item.replace(/[^A-Za-z#]/g, '').slice(0, 2)}
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section aria-label="Technologies we work with" className="relative py-14">
      <p suppressHydrationWarning data-reveal className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">
        The stack behind our products
      </p>
      <div suppressHydrationWarning data-reveal="fade" className="flex flex-col gap-3">
        <Row items={rowA} speed="45s" />
        <Row items={rowB} speed="55s" reverse />
      </div>
    </section>
  );
}
