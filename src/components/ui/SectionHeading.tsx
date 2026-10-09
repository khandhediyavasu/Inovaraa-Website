import type { CSSProperties, ReactNode } from 'react';

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  as: Tag = 'h2',
  id,
  className = '',
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2';
  id?: string;
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {kicker && (
        <div suppressHydrationWarning data-reveal className="kicker mb-5">
          {kicker}
        </div>
      )}
      <Tag
        id={id}
        suppressHydrationWarning data-reveal
        style={{ '--d': '80ms' } as CSSProperties}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-5"
      >
        {title}
      </Tag>
      {description && (
        <p
          suppressHydrationWarning data-reveal
          style={{ '--d': '160ms' } as CSSProperties}
          className={`text-base sm:text-lg text-slate-400 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
