"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MenuLink = { href: string; label: string };

type MobileMenuProps = {
  links: MenuLink[];
  loginHref: string;
};

export default function MobileMenu({ links, loginHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The header persists across client-side navigation, so close the menu
  // whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center rounded-lw border border-line"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="flex flex-col gap-1">
          <span className="block h-0.5 w-4 bg-ink" />
          <span className="block h-0.5 w-4 bg-ink" />
          <span className="block h-0.5 w-4 bg-ink" />
        </span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute right-0 top-12 w-56 rounded-lw border border-line bg-surface p-2 shadow-lg"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-card"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={loginHref}
            className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-card sm:hidden"
          >
            Log in
          </a>
        </nav>
      )}
    </div>
  );
}
