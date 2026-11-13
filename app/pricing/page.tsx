import type { Metadata } from "next";
import CtaBanner from "@/components/sections/CtaBanner";
import { buttonClasses } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for solo agents, teams, and schools and groups. Start free.",
  alternates: { canonical: "/pricing/" },
};

const FAQ = [
  {
    question: "Do I need a CRM or spreadsheet?",
    answer:
      "No. Connect your inbox and every enquiry becomes a parent profile with its emails attached.",
  },
  {
    question: "Which inboxes work?",
    answer: "Gmail and Outlook to start. See the Integrations page.",
  },
  {
    question: "Will you send emails without my say-so?",
    answer:
      "No. Suggested replies are options only. The reply box starts empty and nothing is sent until you send it.",
  },
  {
    question: "What do you read from my inbox?",
    answer:
      "[To be confirmed with the technical team: the exact scope of access, stated in plain words.]",
  },
  {
    question: "Can my team use it together?",
    answer:
      "Yes. Each person connects their own inbox and everyone shares one list of parents.",
  },
];

function Check() {
  return (
    <span aria-hidden className="mt-0.5 text-brand">
      ✓
    </span>
  );
}

export default function PricingPage() {
  return (
    <main>
      <section className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Simple pricing. <span className="text-brand">Start free.</span>
        </h1>
        <p className="mt-4 text-base text-ink-secondary sm:text-lg">
          Prices below are placeholders to be confirmed.
        </p>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto grid max-w-content gap-6 md:grid-cols-2">
          {/* Solo agent */}
          <div className="flex flex-col rounded-lw-lg border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Solo agent</h2>
            <p className="mt-2 text-sm text-ink-secondary">For one agent with one enquiry inbox.</p>
            <p className="mt-6 text-4xl font-bold tracking-tight text-ink">
              [£X]{" "}
              <span className="text-base font-normal text-ink-secondary">per month</span>
            </p>
            <a href={SITE_CONFIG.appUrl} className={`mt-6 ${buttonClasses("secondary", "lg")}`}>
              Start free
            </a>
            <ul className="mt-8 space-y-3 border-t border-line pt-8 text-[15px] text-ink">
              {[
                "One connected inbox",
                "Automatic parent profiles",
                "Search, filters and Today list",
                "Suggested replies",
                "Knowledge library [storage limit]",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Team, highlighted */}
          <div className="flex flex-col rounded-lw-lg border border-brand-subtle bg-brand-subtle p-6 ring-1 ring-brand/20 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Team</h2>
            <p className="mt-2 text-sm text-ink-secondary">For agencies where several people answer parents.</p>
            <p className="mt-6 text-4xl font-bold tracking-tight text-ink">
              [£X]{" "}
              <span className="text-base font-normal text-ink-secondary">per user, per month</span>
            </p>
            <a href={SITE_CONFIG.appUrl} className={`mt-6 ${buttonClasses("primary", "lg")}`}>
              Start free
            </a>
            <ul className="mt-8 space-y-3 border-t border-brand/15 pt-8 text-[15px] text-ink">
              {[
                "Everything in Solo agent",
                "Multiple inboxes, one shared list",
                "Assign parents to team members",
                "Shared knowledge library",
                "Team activity view",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Schools and groups */}
          <div className="flex flex-col rounded-lw-lg border border-line bg-surface p-6 sm:p-8 md:col-span-2">
            <h2 className="text-xl font-bold text-ink">Schools and groups</h2>
            <p className="mt-2 text-sm text-ink-secondary">For admissions teams and larger organisations.</p>
            <p className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Let’s talk</p>
            <a href="/contact/" className={`mt-6 w-full sm:w-auto ${buttonClasses("primary", "lg")}`}>
              Contact us
            </a>
            <ul className="mt-8 grid gap-3 border-t border-line pt-8 text-[15px] text-ink sm:grid-cols-2">
              {[
                "Everything in Team",
                "Help setting up your stages",
                "Onboarding for your team",
                "Priority support",
                "[Further items to be confirmed]",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">Questions</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {FAQ.map((item) => (
            <div key={item.question} className="rounded-lw border border-line bg-surface p-5 sm:p-6">
              <h3 className="text-[15px] font-semibold text-ink">{item.question}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Start with the enquiries you already have."
        href={SITE_CONFIG.appUrl}
        label="Start free"
      />
    </main>
  );
}
