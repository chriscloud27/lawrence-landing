import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";
import { buttonClasses } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Gmail or Outlook. Nothing changes on your website, and every parent profile has its emails attached.",
  alternates: { canonical: "/integrations/" },
};

const PROVIDERS = [
  {
    name: "Gmail",
    body: "Connect a Google inbox or Google Workspace address.",
  },
  {
    name: "Outlook",
    body: "Connect Outlook or a Microsoft 365 address.",
  },
];

const STEPS = [
  {
    title: "Sign in with your email provider",
    body: "Use the inbox that receives your website form emails.",
  },
  {
    title: "Pick the sender",
    body: "We suggest the address your form sends from. You confirm it.",
  },
  {
    title: "Profiles appear",
    body: "Past and new enquiries become parent profiles with every email attached. Emails you send from the app are logged too.",
    highlight: true,
  },
];

export default function IntegrationsPage() {
  return (
    <main>
      <section className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Integrations</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Works with the inbox <span className="text-brand">you already use.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-secondary sm:text-lg">
          Connect the address your website enquiry form sends to. Nothing changes on your website.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {PROVIDERS.map((provider) => (
            <div key={provider.name} className="rounded-lw-lg border border-line bg-surface p-6 text-left">
              <h2 className="text-lg font-bold text-ink">{provider.name}</h2>
              <p className="mt-2 text-sm text-ink-secondary">{provider.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">How enquiries get in</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`rounded-lw-lg border p-6 ${
                  step.highlight ? "border-brand-subtle bg-brand-subtle" : "border-line bg-surface-subtle"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-content flex-col gap-6 rounded-lw-lg border border-dashed border-brand/40 bg-brand-subtle p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-xl font-bold text-ink sm:text-2xl">Different inbox?</h2>
            <p className="mt-2 max-w-xl text-[15px] text-ink-secondary">
              Use a different email provider? Tell us which one and we will let you know when it is ready.
            </p>
          </div>
          <Link href="/contact/" className={`shrink-0 ${buttonClasses("primary", "md")}`}>
            Tell us what you need
          </Link>
        </div>
      </section>

      <CtaBanner
        heading="Connect your enquiry inbox."
        href={SITE_CONFIG.appUrl}
        label="Start free"
      />
    </main>
  );
}
