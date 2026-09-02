import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Advanced Software and AI Solutions by email or form. Remote-first across the United States.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </nav>
        <p className="eyebrow">Contact</p>
        <h1 className="h1">Get in touch</h1>
        <p className="lead">
          Tell us about your project. Email-only contact—no phone field—and a form that
          routes to {business.email}.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
