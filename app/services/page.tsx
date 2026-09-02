import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software, AI & Automation Services",
  description:
    "Custom software development, AI & machine learning, automation & integrations, and software & AI consulting for growing US teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </nav>
        <p className="eyebrow">Services</p>
        <h1 className="h1">Software, AI, and automation services</h1>
        <p className="lead">
          Choose a focused engagement—or combine them. Every engagement starts with
          discovery so we solve the right problem before we scale the solution.
        </p>
        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="cta-band" style={{ marginTop: "3rem" }}>
          <h2 className="h2">Not sure where to start?</h2>
          <p className="lead">
            Send a short note about your goals. We will recommend a practical path forward.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
