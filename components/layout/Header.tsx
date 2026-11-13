import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";
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

          <MobileMenu links={NAV_LINKS} loginHref={SITE_CONFIG.appUrl} />
        </div>
      </div>
    </header>
  );
}
