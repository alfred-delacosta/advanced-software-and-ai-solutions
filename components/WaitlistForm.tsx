"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { contact } from "@/data/contact";
import type { Product } from "@/data/products";
import { productWaitlistHref } from "@/data/products";
import { isMailApiConfigured, submitWaitlist } from "@/lib/mailApi";
import styles from "./WaitlistForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({ product }: { product: Product }) {
  const formId = useId();
  const noteId = `${product.id}-waitlist-note`;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const mailApi = isMailApiConfigured();
  const mailtoHref = productWaitlistHref(product);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const name = String(data.get("name") || "").trim();
    const website = String(data.get("website") || "");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    if (!mailApi) {
      window.location.href = mailtoHref;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const result = await submitWaitlist({
      email,
      product: product.id,
      name: name || undefined,
      website,
    });

    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success" && mailApi) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className="muted mb-0">
          You are on the {product.title} interest list. We will email you when
          early access opens.
        </p>
      </div>
    );
  }

  if (!mailApi) {
    return (
      <div className={styles.wrap}>
        <p className={styles.statusLine}>
          <span className={styles.badge}>{product.statusLabel}</span>
          {" · "}
          <a href={mailtoHref} aria-describedby={noteId}>
            {product.ctaLabel}
          </a>
        </p>
        <p id={noteId} className={`muted ${styles.note}`}>
          {product.microcopy} Opens your email app with a draft to ASAIS. We will
          email you when early access for {product.title} opens. We will not add
          you to unrelated marketing lists. See our{" "}
          <Link href="/privacy/">Privacy Policy</Link>. Unsubscribe anytime via{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.wrap} onSubmit={onSubmit} noValidate>
      <p className={styles.statusLine}>
        <span className={styles.badge}>{product.statusLabel}</span>
      </p>
      <div className={styles.row}>
        <label className="sr-only" htmlFor={`${formId}-email`}>
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Work email"
          aria-describedby={noteId}
          className={styles.input}
        />
        <label className="sr-only" htmlFor={`${formId}-name`}>
          Name (optional)
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          placeholder="Name (optional)"
          className={styles.input}
        />
        {/* Honeypot */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className={styles.hp}
          aria-hidden="true"
        />
        <button
          type="submit"
          className={`btn btn-primary ${styles.submit}`}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Joining…" : product.ctaLabel}
        </button>
      </div>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      <p id={noteId} className={`muted ${styles.note}`}>
        {product.microcopy} By joining, you ask to be on the {product.title}{" "}
        interest list. We will email you about launch and early access for that
        product only. Your submission is sent through our mail service (Resend)
        so we can receive and reply by email. See our{" "}
        <Link href="/privacy/">Privacy Policy</Link>. Unsubscribe anytime via{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </form>
  );
}
