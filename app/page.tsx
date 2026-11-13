import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import { buttonClasses } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const CHIP =
  "rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink-secondary";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-brand-subtle px-3 py-1 text-[13px] font-semibold text-brand">
              For education agencies
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Automate your parent enquiries.{" "}
              <span className="text-brand">Reply first. Close more.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
              Just log in with your email. We turn every parent enquiry into a
              profile and a pipeline, so your team focuses on the families most
              likely to enrol.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SITE_CONFIG.appUrl} className={buttonClasses("primary", "lg")}>
                Start free
              </a>
              <Link href="/features/" className={buttonClasses("secondary", "lg")}>
                See how it works
              </Link>
            </div>
            <p className="mt-3 text-sm text-ink-muted">1 minute to start</p>
          </div>

          <div className="relative">
            <div className="rounded-lw-lg border border-line bg-surface p-5 shadow-lg sm:p-6">
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-subtle text-sm font-semibold text-brand">
                  FA
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-ink">Fatima Al-Mansoori</p>
                  <p className="truncate text-[13px] text-ink-secondary">
                    Year 9 · Dubai · fatima@example.com
                  </p>
                </div>
              </div>
              <ol className="mt-4 space-y-4 text-[14px]">
                <li>
                  <p className="font-semibold text-ink">
                    Enquiry received <span className="font-normal text-ink-muted">· Mon 9:02</span>
                  </p>
                  <p className="text-ink-secondary">What are the boarding fees for Year 9?</p>
                </li>
                <li>
                  <p className="font-semibold text-ink">
                    You replied <span className="font-normal text-ink-muted">· Mon 9:20</span>
                  </p>
                  <p className="text-ink-secondary">Sent fee sheet 2026/27 and offered a call.</p>
                </li>
                <li>
                  <p className="font-semibold text-ink">
                    Call logged <span className="font-normal text-ink-muted">· Tue 11:30</span>
                  </p>
                  <p className="text-ink-secondary">12 minutes. Wants to visit in January.</p>
                </li>
              </ol>
            </div>
            <div className="mt-4 rounded-lw border border-line bg-surface p-4 shadow-md sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:w-64">
              <p className="text-xs text-ink-muted">Today</p>
              <p className="mt-1 text-[14px] font-semibold text-ink">4 parents are waiting on you</p>
              <span className="mt-2 inline-block rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                Mei T. · 3 days
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Before and after */}
      <section className="border-t border-line bg-surface-subtle px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Never lose a parent again.
          </h2>
          <div className="mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-lw-lg border border-line bg-surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Today</p>
              <div className="mt-4 overflow-hidden rounded-lw border border-line bg-surface text-[13px]">
                <div className="grid grid-cols-3 bg-surface-card px-3 py-2 font-semibold text-ink-secondary">
                  <span>Name</span>
                  <span>School</span>
                  <span>Notes</span>
                </div>
                <div className="grid grid-cols-3 border-t border-line px-3 py-2 text-ink-secondary">
                  <span>Fatima</span>
                  <span>?</span>
                  <span>call back??</span>
                </div>
                <div className="grid grid-cols-3 border-t border-line px-3 py-2 text-ink-secondary">
                  <span>Mei</span>
                  <span>?</span>
                  <span>replied?</span>
                </div>
                <div className="grid grid-cols-3 border-t border-line px-3 py-2 text-ink-secondary">
                  <span>Lukas</span>
                  <span>Y8</span>
                  <span />
                </div>
              </div>
              <p className="mt-3 rounded-lw border border-line bg-surface px-3 py-2 text-[13px] text-ink-secondary">
                Inbox · <span className="font-semibold text-ink">214 unread</span>
              </p>
            </div>

            <span aria-hidden className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
              →
            </span>

            <div className="rounded-lw-lg border border-brand-subtle bg-brand-subtle p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">With Lawrence</p>
              <ul className="mt-4 space-y-3">
                {[
                  ["Fatima Al-Mansoori", "Year 9 · Dubai · 3 emails", "Fresh", "bg-green-50 text-green-700"],
                  ["Mei Tan", "Year 11 · Singapore · 2 emails", "Reply now", "bg-red-50 text-red-700"],
                  ["Lukas Meier", "Year 8 · Zurich · 4 emails", "Waiting 4d", "bg-amber-50 text-amber-700"],
                ].map(([name, meta, badge, tone]) => (
                  <li key={name} className="flex items-center justify-between gap-3 rounded-lw bg-surface p-3">
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-semibold text-ink">{name}</p>
                      <p className="truncate text-[12px] text-ink-secondary">{meta}</p>
                    </div>
                    <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${tone}`}>
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className={CHIP}>✓ Every enquiry captured automatically</span>
            <span className={CHIP}>✓ Find any parent in seconds</span>
            <span className={CHIP}>✓ Every conversation, on the right profile</span>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Connect. Then reply.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-lw-lg border border-line bg-surface p-6">
              <div className="flex flex-col items-center gap-2 rounded-lw bg-surface-subtle p-6">
                <span className="w-full max-w-[220px] rounded-lw border border-line bg-surface px-4 py-2.5 text-center text-sm font-medium text-ink">
                  Connect Gmail
                </span>
                <span className="w-full max-w-[220px] rounded-lw border border-line bg-surface px-4 py-2.5 text-center text-sm font-medium text-ink">
                  Connect Outlook
                </span>
              </div>
              <StepLabel n={1} label="Connect your email" />
            </div>

            <div className="rounded-lw-lg border border-line bg-surface p-6">
              <div className="space-y-2 rounded-lw bg-surface-subtle p-6">
                {["Fatima A.", "Mei T.", "Lukas M."].map((name) => (
                  <div key={name} className="flex items-center justify-between rounded-lw bg-surface px-4 py-2.5 text-sm">
                    <span className="font-medium text-ink">{name}</span>
                    <span className="rounded-md bg-brand-subtle px-2 py-0.5 text-xs font-medium text-brand">
                      New profile
                    </span>
                  </div>
                ))}
              </div>
              <StepLabel n={2} label="Profiles and pipeline appear" />
            </div>

            <div className="rounded-lw-lg border border-brand-subtle bg-brand-subtle p-6 md:col-span-2">
              <div className="space-y-2 rounded-lw bg-surface p-4">
                {[
                  ["Mei T.", "waiting 3 days"],
                  ["Lukas M.", "follow up"],
                  ["Sofia A.", "new today"],
                ].map(([name, note]) => (
                  <div key={name} className="flex items-center justify-between gap-3 px-2 py-2 text-sm">
                    <span className="text-ink">
                      <span className="font-semibold">{name}</span>
                      <span className="text-ink-secondary"> · {note}</span>
                    </span>
                    <span className="rounded-md bg-brand px-3 py-1 text-xs font-semibold text-white">Reply</span>
                  </div>
                ))}
              </div>
              <StepLabel n={3} label="Reply first, close more" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature overview */}
      <section className="border-t border-line bg-surface-subtle px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One place for every parent.
            </h2>
            <Link href="/features/" className="text-sm font-semibold text-brand hover:underline">
              See all features →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-lw-lg border border-line bg-surface p-6 md:col-span-2">
              <h3 className="text-lg font-bold text-ink">Know who to reply to</h3>
              <p className="mt-1 text-sm text-ink-secondary">Your Today list, most urgent first.</p>
              <div className="mt-5 space-y-2">
                {[
                  ["Mei Tan", "Waiting 3 days", "bg-red-50 text-red-700"],
                  ["Lukas Meier", "Going cold", "bg-amber-50 text-amber-700"],
                  ["Mrs Chen", "Follow-up due", "bg-brand-subtle text-brand"],
                ].map(([name, badge, tone]) => (
                  <div key={name} className="flex items-center justify-between rounded-lw bg-surface-subtle px-4 py-3 text-sm">
                    <span className="font-medium text-ink">{name}</span>
                    <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${tone}`}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lw-lg border border-brand-subtle bg-brand-subtle p-6">
              <h3 className="text-lg font-bold text-brand">Suggested replies</h3>
              <p className="mt-1 text-sm text-brand">You pick. Nothing sends itself.</p>
              <div className="mt-5 space-y-2">
                {["Answer the fee question", "Offer a call this week"].map((item) => (
                  <div key={item} className="rounded-lw bg-surface px-4 py-3 text-sm font-medium text-ink">
                    <span className="text-brand">+ </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lw-lg border border-line bg-surface p-6">
              <h3 className="text-lg font-bold text-ink">Find any parent</h3>
              <p className="mt-1 text-sm text-ink-secondary">Search or filter in seconds.</p>
              <div className="mt-5 rounded-lw border border-line bg-surface-subtle px-4 py-2.5 text-sm text-ink-muted">
                Year 9 Dubai boarding
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={CHIP}>Year 9</span>
                <span className={CHIP}>Dubai</span>
                <span className={CHIP}>Boarding</span>
              </div>
            </div>

            <div className="rounded-lw-lg border border-line bg-surface p-6">
              <h3 className="text-lg font-bold text-ink">Never go cold</h3>
              <p className="mt-1 text-sm text-ink-secondary">Colour shows how long they have waited.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-md bg-green-50 px-2 py-1 text-green-700">Fresh · 5h</span>
                <span className="rounded-md bg-amber-50 px-2 py-1 text-amber-700">Getting cold · 4d</span>
                <span className="rounded-md bg-red-50 px-2 py-1 text-red-700">Needs action · 8d</span>
              </div>
            </div>

            <div className="rounded-lw-lg border border-line bg-surface p-6 md:col-span-3">
              <h3 className="text-lg font-bold text-ink">Your research, ready</h3>
              <p className="mt-1 text-sm text-ink-secondary">Fees and brochures by school.</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-lw bg-surface-subtle px-4 py-3 text-sm">
                  <span className="font-medium text-ink">Fee sheet 2026/27</span>
                  <span className="font-semibold text-brand">Quote</span>
                </div>
                <div className="flex items-center justify-between rounded-lw bg-surface-subtle px-4 py-3 text-sm">
                  <span className="font-medium text-ink">Agent notes</span>
                  <span className="text-ink-secondary">Inform only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience and founder quote */}
      <section className="px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Built for</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {["Education agents", "Boarding schools", "Admissions teams", "Consultancies"].map((item) => (
            <span key={item} className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink">
              {item}
            </span>
          ))}
        </div>
        <blockquote className="mx-auto mt-12 max-w-2xl rounded-lw-lg border border-dashed border-brand/40 bg-brand-subtle px-6 py-8 text-base text-ink-secondary">
          [Founder quote: one sentence on why you built this. Add name, role and photo.]
        </blockquote>
      </section>

      {/* Contact */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-content gap-10 rounded-lw-lg bg-dark p-6 text-white sm:p-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Questions? Talk to us.</h2>
            <p className="mt-4 text-base text-white/70">
              Tell us about your enquiries and we will get back to you.
            </p>
          </div>
          <div className="rounded-lw-lg bg-surface p-5 text-ink sm:p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function StepLabel({ n, label }: { n: number; label: string }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
        {n}
      </span>
      <span className="text-base font-semibold text-ink">{label}</span>
    </div>
  );
}
