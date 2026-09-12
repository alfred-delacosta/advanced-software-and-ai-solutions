"use client";

import Link from "next/link";
import { FormEvent, useId, useRef, useState } from "react";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import styles from "./ContactForm.module.css";

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailto(payload: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}) {
  const subject = `Website inquiry from ${payload.name}`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "(not provided)"}`,
    `Service: ${payload.service}`,
    "",
    payload.message,
  ].join("\n");
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const formspreeEndpoint =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() || ""
    : "";

export default function ContactForm() {
  const formId = useId();
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [sentVia, setSentVia] = useState<"formspree" | "mailto" | null>(null);

  function validate(payload: {
    name: string;
    email: string;
    service: string;
    message: string;
  }): FieldErrors {
    const next: FieldErrors = {};
    if (!payload.name.trim()) next.name = "Enter your name.";
    if (!payload.email.trim()) next.email = "Enter your email address.";
    else if (!isValidEmail(payload.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!payload.service) next.service = "Select a service.";
    if (!payload.message.trim()) next.message = "Enter a message.";
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

    const nextErrors = validate(payload);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setError("Please fix the highlighted fields and try again.");
      queueMicrotask(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");

    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: payload.name.trim(),
            email: payload.email.trim(),
            company: payload.company.trim(),
            service: payload.service,
            message: payload.message.trim(),
            _subject: `Website inquiry from ${payload.name.trim()}`,
          }),
        });
        if (!res.ok) {
          throw new Error("Provider error. Please email us directly.");
        }
        setSentVia("formspree");
        setStatus("success");
        setFieldErrors({});
        form.reset();
        return;
      } catch (err) {
        setStatus("error");
        setError(
          err instanceof Error
            ? err.message
            : "Unable to send right now. Please email us directly.",
        );
        queueMicrotask(() => summaryRef.current?.focus());
        return;
      }
    }

    // Static default: pre-filled mailto (Hostinger Website-safe, no Node).
    const mailto = buildMailto({
      name: payload.name.trim(),
      email: payload.email.trim(),
      company: payload.company.trim(),
      service: payload.service,
      message: payload.message.trim(),
    });
    window.location.href = mailto;
    setSentVia("mailto");
    setStatus("success");
    setFieldErrors({});
  }

  return (
    <div className={styles.layout}>
      <div>
        {status === "success" ? (
          <div className={styles.success} role="status" aria-live="polite">
            <h2 className="h3">
              {sentVia === "mailto" ? "Email draft ready" : "Message received"}
            </h2>
            <p className="muted">
              {sentVia === "mailto" ? (
                <>
                  Your email app should open with a pre-filled message to{" "}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>. Send
                  that draft to reach us. If nothing opened, email us directly.
                </>
              ) : (
                <>
                  Thanks for reaching out. We will reply by email soon. If your
                  note is time-sensitive, you can also write us directly at{" "}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </>
              )}
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setStatus("idle");
                setError(null);
                setFieldErrors({});
                setSentVia(null);
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            {error ? (
              <p
                ref={summaryRef}
                id={`${formId}-error-summary`}
                className={styles.errorSummary}
                role="alert"
                tabIndex={-1}
              >
                {error}
              </p>
            ) : (
              <div className="sr-only" aria-live="polite" />
            )}

            <div className={styles.field}>
              <label htmlFor={`${formId}-name`}>Name</label>
              <input
                id={`${formId}-name`}
                name="name"
                required
                autoComplete="name"
                aria-invalid={fieldErrors.name ? true : undefined}
                aria-describedby={
                  fieldErrors.name ? `${formId}-name-error` : undefined
                }
              />
              {fieldErrors.name ? (
                <p id={`${formId}-name-error`} className={styles.fieldError}>
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-email`}>Email</label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-invalid={fieldErrors.email ? true : undefined}
                aria-describedby={
                  fieldErrors.email ? `${formId}-email-error` : undefined
                }
              />
              {fieldErrors.email ? (
                <p id={`${formId}-email-error`} className={styles.fieldError}>
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-company`}>
                Company <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id={`${formId}-company`}
                name="company"
                autoComplete="organization"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-service`}>Service</label>
              <select
                id={`${formId}-service`}
                name="service"
                required
                defaultValue=""
                aria-invalid={fieldErrors.service ? true : undefined}
                aria-describedby={
                  fieldErrors.service ? `${formId}-service-error` : undefined
                }
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {fieldErrors.service ? (
                <p id={`${formId}-service-error`} className={styles.fieldError}>
                  {fieldErrors.service}
                </p>
              ) : null}
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-message`}>Message</label>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={
                  fieldErrors.message ? `${formId}-message-error` : undefined
                }
              />
              {fieldErrors.message ? (
                <p id={`${formId}-message-error`} className={styles.fieldError}>
                  {fieldErrors.message}
                </p>
              ) : null}
            </div>
            <p className={`muted ${styles.privacyNote}`}>
              We use inquiries only to reply about your message, not for
              unrelated marketing. See our{" "}
              <Link href="/privacy/">Privacy Policy</Link>. Prefer email?{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {formspreeEndpoint ? (
                <>
                  {" "}
                  If Formspree is enabled, Formspree processes the submission to
                  deliver it to ASAIS.
                </>
              ) : (
                <>
                  {" "}
                  Submit opens your email app with a draft to us (mailto). No
                  server post.
                </>
              )}
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending…"
                : formspreeEndpoint
                  ? "Send message"
                  : "Open email draft"}
            </button>
          </form>
        )}
      </div>

      <aside className={styles.aside}>
        <article className="card">
          <h2 className="h3">Prefer email?</h2>
          <p className="muted">
            You can reach us anytime at{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            We are remote-first across the United States and typically respond within
            one business day. This site is static-hosted; the form uses mailto
            {formspreeEndpoint ? " or Formspree" : ""} so no server is required.
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
