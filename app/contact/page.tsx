import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your enquiries and we will get back to you.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-lg">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions? Talk to us.
          </h1>
          <p className="mt-4 text-base text-ink-secondary">
            Tell us about your enquiries and we will get back to you.
          </p>
        </div>
        <div className="mt-10 rounded-lw-lg border border-line bg-surface p-6 shadow-md sm:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
