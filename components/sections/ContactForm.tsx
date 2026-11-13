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
    setStatus("sending");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: data.get("name"),
          Email: data.get("email"),
          Message: data.get("message"),
        }),
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
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
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
