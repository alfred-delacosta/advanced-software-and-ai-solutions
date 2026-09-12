/**
 * Client for the Hostinger-hosted ASAIS mail API (Resend).
 * Public base URL only — never put Resend API keys in the frontend.
 *
 * Expected contract (confirm with Web Developer / asais-mail-api):
 * - POST {base}/api/contact
 * - POST {base}/api/waitlist
 * - GET  {base}/health
 * - Honeypot field: `website` (must stay empty)
 */

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  /** Honeypot — leave empty */
  website?: string;
};

export type WaitlistPayload = {
  email: string;
  product: "briefseal" | "emailarchiver" | string;
  name?: string;
  company?: string;
  /** Honeypot — leave empty */
  website?: string;
};

export type MailApiResult =
  | { ok: true }
  | { ok: false; error: string; status?: number };

function mailApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_MAIL_API_URL?.trim() || "";
  return raw.replace(/\/$/, "");
}

export function isMailApiConfigured(): boolean {
  return Boolean(mailApiBase());
}

async function postJson(path: string, body: unknown): Promise<MailApiResult> {
  const base = mailApiBase();
  if (!base) {
    return { ok: false, error: "Mail API is not configured." };
  }

  try {
    const res = await fetch(`${base}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    let detail = "";
    try {
      const json = (await res.json()) as { error?: string; message?: string; ok?: boolean };
      detail = json.error || json.message || "";
      if (res.ok && json.ok === false) {
        return { ok: false, error: detail || "Request was not accepted.", status: res.status };
      }
    } catch {
      // non-JSON body is fine if status is 200
    }

    if (!res.ok) {
      return {
        ok: false,
        error: detail || "Unable to send right now. Please try again or email us directly.",
        status: res.status,
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Unable to reach the mail service. Please try again or email us directly.",
    };
  }
}

export function submitContact(payload: ContactPayload): Promise<MailApiResult> {
  return postJson("/api/contact", {
    name: payload.name,
    email: payload.email,
    company: payload.company || "",
    service: payload.service,
    message: payload.message,
    website: payload.website || "",
  });
}

export function submitWaitlist(payload: WaitlistPayload): Promise<MailApiResult> {
  return postJson("/api/waitlist", {
    email: payload.email,
    product: payload.product,
    name: payload.name || "",
    company: payload.company || "",
    website: payload.website || "",
  });
}
