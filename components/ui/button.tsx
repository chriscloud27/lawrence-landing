type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lw font-semibold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  secondary: "border border-line bg-surface text-ink hover:border-brand hover:text-brand",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

// Returns classes for an <a> or <button>. Works on links, so no JS is needed.
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
) {
  return [base, variants[variant], sizes[size]].join(" ");
}
