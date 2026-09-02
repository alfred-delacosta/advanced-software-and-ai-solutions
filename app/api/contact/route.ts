import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, service, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "contact@advancedsoftwareandaisolutions.com";
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ASAIS Website <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `Website inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || "(not provided)"}`,
            `Service: ${service}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error", detail);
        return NextResponse.json(
          { ok: false, error: "Email provider error. Please use the mailto fallback." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Contact send failed", err);
      return NextResponse.json(
        { ok: false, error: "Unable to send right now. Please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("Contact form stub accept", { name, email, company, service });
  }

  return NextResponse.json({ ok: true });
}
