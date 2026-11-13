import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const FOOTER_LINKS = [
  { href: "/features/", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/integrations/", label: "Integrations" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-[12px] font-bold text-white">
            L
          </span>
          <span className="text-sm font-semibold text-ink">{SITE_CONFIG.name}</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-secondary">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-ink-secondary">
          © 2026 {SITE_CONFIG.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
