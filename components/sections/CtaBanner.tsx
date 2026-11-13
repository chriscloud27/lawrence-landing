import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";

type CtaBannerProps = {
  heading: string;
  href: string;
  label: string;
};

// The dark closing block used at the bottom of each page.
export default function CtaBanner({ heading, href, label }: CtaBannerProps) {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-content rounded-lw-lg bg-dark px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <Link href={href} className={`mt-8 ${buttonClasses("primary", "lg")}`}>
          {label}
        </Link>
      </div>
    </section>
  );
}
