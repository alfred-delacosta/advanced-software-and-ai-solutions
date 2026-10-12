import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "U.S. Based Software, AI & Workflow Services",
  description:
    "Custom software, AI implementation, and workflow optimization for small businesses — delivered by a 100% U.S. based team. We never offshore your work.",
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
        <h1 className="h1">Software, AI, and automation services</h1>
        <p className="lead">
          Choose a focused engagement, or combine them. Every engagement starts with
          discovery so we solve the right problem before we scale the solution.
        </p>
        <div className="mt-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="cta-band">
          <h2 className="h2">Not sure where to start?</h2>
          <p className="lead">
            Send a short note about your goals. We will recommend a practical path forward.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
