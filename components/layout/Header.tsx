import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/features/", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/integrations/", label: "Integrations" },
];

const linkClass = "text-sm font-medium text-ink-secondary hover:text-ink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-[13px] font-bold text-white">
            L
          </span>
          <span className="text-base font-bold tracking-tight text-ink">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={SITE_CONFIG.appUrl} className={`hidden sm:inline ${linkClass}`}>
            Log in
          </a>
          <a href={SITE_CONFIG.appUrl} className={buttonClasses("primary", "sm")}>
            Start free
          </a>

          {/* Mobile menu: native <details>, so it works without JavaScript. */}
          <details className="group relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lw border border-line [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-ink" />
                <span className="block h-0.5 w-4 bg-ink" />
                <span className="block h-0.5 w-4 bg-ink" />
              </span>
            </summary>
            <nav className="absolute right-0 top-12 w-56 rounded-lw border border-line bg-surface p-2 shadow-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-card"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.appUrl}
                className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-card sm:hidden"
              >
                Log in
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
