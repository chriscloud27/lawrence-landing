import type { Metadata } from "next";
import CtaBanner from "@/components/sections/CtaBanner";
import FeatureRow from "@/components/sections/FeatureRow";
import { SITE_CONFIG } from "@/lib/site-config";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every parent enquiry becomes a profile. Search, a Today list, a colour-coded pipeline, suggested replies and a knowledge centre, with nothing to set up.",
  alternates: { canonical: "/features/" },
};

// Small mock panels that stand in for product screenshots.
function Panel({ children }: { children: ReactNode }) {
  return <div className="space-y-2.5">{children}</div>;
}

function PanelRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lw bg-surface px-4 py-3 text-sm">
      {children}
    </div>
  );
}

function Tag({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "green" | "amber" | "red" | "grey" }) {
  const tones = {
    brand: "bg-brand-subtle text-brand",
    green: "bg-green-50 text-green-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
    grey: "bg-surface-card text-ink-secondary",
  };
  return <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export default function FeaturesPage() {
  return (
    <main>
      <section className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Features</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Everything you need to reply first, <span className="text-brand">nothing to set up.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-secondary sm:text-lg">
          One place for every parent, with every email attached.
        </p>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto flex max-w-content flex-col gap-16 py-12 sm:gap-24 sm:py-16">
          <FeatureRow
            eyebrow="Parent profiles"
            title="Every enquiry becomes a profile, automatically."
            body="Name, email, phone and message are pulled from your website form email, and every email you exchange is attached. No typing, no spreadsheet."
            bullets={[
              "Details filled in for you",
              "Every past and future email on the profile",
              "Fields you can edit if something is missed",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Fatima A.</span><Tag>Year 9</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">fatima@example.com</span><Tag tone="grey">Email</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">+971 5X XXX XXXX</span><Tag tone="grey">Phone</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            reverse
            eyebrow="Search and filter"
            title="Find any parent in seconds."
            body="Search by name, email or message, or filter your whole list by school, year group, country, stage or owner."
            bullets={[
              "One list of every parent you have spoken to",
              "Filter by school, year group, country or stage",
              "No more scrolling through the inbox",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Year 9 · Dubai</span><Tag>12 parents</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Interested in boarding</span><Tag>8 parents</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Waiting for a reply</span><Tag>4 parents</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            eyebrow="Today"
            title="Know who to reply to before you open anything else."
            body="A single list shows who is waiting, who is going cold and which follow-ups are due, with the most urgent first."
            bullets={[
              "Waiting on you, going cold, follow-ups due",
              "A suggested next step for each parent",
              "Works on your phone between meetings",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Mei T. waiting 3 days</span><Tag tone="red">Reply</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Lukas M. going cold</span><Tag tone="amber">Follow up</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Mrs Chen follow-up due</span><Tag>Today</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            reverse
            eyebrow="Pipeline"
            title="A colour-coded view of every opportunity."
            body="See each family move from new enquiry to place secured. Colours show how long a parent has waited, always with a label so nothing relies on colour alone."
            bullets={[
              "Green fresh, amber getting cold, red needs action",
              "Thresholds that fit each stage",
              "Set a follow-up date to pause the colour",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Sofia A.</span><Tag tone="green">Fresh · 5h</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Lukas M.</span><Tag tone="amber">Waiting · 4d</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Mei T.</span><Tag tone="red">Overdue · 8d</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            eyebrow="AI replies"
            title="Replies written from her email, ready in seconds."
            body="Fatima asks about fees and a January start. Lawrence reads her email, finds the schools that fit, and drafts a reply that answers exactly that, with the right prospectus and fee sheet already attached."
            bullets={[
              "Drafts that answer what the parent actually asked",
              "Brochures and fee sheets attached for you",
              "You edit and send. Nothing goes out without you",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Recommend Westbrook</span><Tag>Written for Fatima</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Westbrook prospectus.pdf</span><Tag tone="grey">Attached</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Fee sheet 2026/27.pdf</span><Tag tone="grey">Attached</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            reverse
            eyebrow="Knowledge centre"
            title="The reason every reply is accurate."
            body="Upload your research, brochures and fee sheets once. Lawrence combines them with trusted sources like doris.school to recommend the right school and quote the right fee, every time."
            bullets={[
              "Pulls school facts from doris.school and the sources you trust",
              "Your private research shapes the advice but is never quoted",
              "Catches an out-of-date fee sheet before a parent sees it",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">doris.school</span><Tag>Trusted source</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Fee sheet 2026/27</span><Tag>Quote to parents</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Your visit notes</span><Tag tone="grey">Private</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Fee sheet 2025/26</span><Tag tone="red">Out of date</Tag></PanelRow>
              </Panel>
            }
          />

          <FeatureRow
            eyebrow="Team"
            title="One list, however many agents."
            body="Each person connects their own inbox and everyone sees the same parents, owners and history."
            bullets={[
              "Assign parents to a colleague",
              "See who sent the last message",
              "Replies sent from inside the app are logged",
            ]}
            visual={
              <Panel>
                <PanelRow><span className="font-semibold text-ink">Amira</span><Tag>14 parents</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">James</span><Tag>9 parents</Tag></PanelRow>
                <PanelRow><span className="font-semibold text-ink">Priya</span><Tag>11 parents</Tag></PanelRow>
              </Panel>
            }
          />
        </div>
      </section>

      <CtaBanner
        heading="See every parent in one place in two minutes."
        href={SITE_CONFIG.appUrl}
        label="Start free"
      />
    </main>
  );
}

