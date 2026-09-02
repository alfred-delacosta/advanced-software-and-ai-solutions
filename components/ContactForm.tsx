"use client";

import { FormEvent, useState } from "react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import styles from "./ContactForm.module.css";

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please email us directly.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send right now.");
    }
  }

  return (
    <div className={styles.layout}>
      <div>
        {status === "success" ? (
          <div className={styles.success}>
            <h2 className="h3">Message received</h2>
            <p className="muted">
              Thanks for reaching out. We will reply by email soon. If your note is
              time-sensitive, you can also write us directly at{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">
                Company <span className={styles.optional}>(optional)</span>
              </label>
              <input id="company" name="company" autoComplete="organization" />
            </div>
            <div className={styles.field}>
              <label htmlFor="service">Service</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>

      <aside className={styles.aside}>
        <article className="card">
          <h2 className="h3">Prefer email?</h2>
          <p className="muted">
            You can reach us anytime at{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            We are remote-first across the United States and typically respond within
            one business day.
          </p>
        </article>
        <article className="card">
          <h2 className="h3">What to include</h2>
          <ul className="list-check">
            <li>The problem or opportunity you are exploring</li>
            <li>Rough timeline and constraints</li>
            <li>Whether you need build, automation, AI, or advisory help</li>
          </ul>
        </article>
      </aside>
    </div>
  );
}
