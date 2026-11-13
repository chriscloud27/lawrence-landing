import type { ReactNode } from "react";

type FeatureRowProps = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
};

// One alternating text and visual row. Stacks on mobile, side by side from md.
export default function FeatureRow({
  eyebrow,
  title,
  body,
  bullets,
  visual,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={reverse ? "md:order-2" : undefined}>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary sm:text-base">
          {body}
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-[15px] text-ink">
              <span aria-hidden className="mt-0.5 text-brand">
                ✓
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className={`rounded-lw-lg bg-brand-subtle p-5 sm:p-8 ${reverse ? "md:order-1" : ""}`}>
        {visual}
      </div>
    </div>
  );
}
