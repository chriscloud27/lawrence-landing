"use client";

import { type FormEvent, useState } from "react";
import { buttonClasses } from "@/components/ui/button";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-lw border border-line bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Capture the form before the await: React clears currentTarget afterwards.
    const form = event.currentTarget;
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Webhook URL not configured");
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    // Keys match what the n8n "FROM" template reads from the webhook body.
    const payload = {
      "First Name": String(data.get("firstName") ?? "").trim(),
      "Last Name": String(data.get("lastName") ?? "").trim(),
      Company: String(data.get("company") ?? "").trim(),
      Email: String(data.get("email") ?? "").trim(),
      Message: String(data.get("message") ?? "").trim(),
    };
    setStatus("sending");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed: ${response.statusText}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-ink">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jane"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-ink">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Doe"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-ink">
          Company <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your agency"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How many enquiries do you handle each week?"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClasses("primary", "lg")} w-full disabled:opacity-60`}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-brand">
          Thanks. We will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-danger">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
