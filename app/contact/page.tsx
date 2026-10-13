import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact a 100% U.S. Based Software & AI Team",
  description:
    "Contact Advanced Software and AI Solutions LLC by email or form. A 100% U.S. based team. We never offshore your work.",
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
        <h1 className="h1">Start a project</h1>
        <p className="lead">
          Tell us about your project. Email-only contact, no phone field, and a form that
          routes to {contact.email}.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
