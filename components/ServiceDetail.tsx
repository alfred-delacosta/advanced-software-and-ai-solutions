import Link from "next/link";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/data/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const related = getRelatedServices(service.slug);
  const paragraphs = service.description
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Advanced Software and AI Solutions",
      url: "https://advancedsoftwareandaisolutions.com",
      email: "contact@advancedsoftwareandaisolutions.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `https://advancedsoftwareandaisolutions.com${service.href}`,
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{service.shortTitle}</span>
        </nav>
        <p className="eyebrow">{service.shortTitle}</p>
        <h1 className="h1">{service.title}</h1>
        <p className="lead">{service.summary}</p>
        <div className="btn-row" style={{ marginBottom: "2rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link href="/services" className="btn btn-secondary">
            All services
          </Link>
        </div>

        <div className="prose">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: "2.5rem" }}>
          <article className="card">
            <h2 className="h3">What&apos;s included</h2>
            <ul className="list-check">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="h3">Ideal for</h2>
            <ul className="list-check">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <h2 className="h2">Process</h2>
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {service.process.map((step, i) => (
              <article key={step.step} className="card">
                <p className="eyebrow">Step {i + 1}</p>
                <h3 className="h3">{step.step}</h3>
                <p className="muted" style={{ margin: 0 }}>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: "2.5rem" }}>
            <h2 className="h2">Related services</h2>
            <div className="grid-2" style={{ marginTop: "1rem" }}>
              {related.map((item) => (
                <Link key={item.slug} href={item.href} className="card">
                  <h3 className="h3">{item.title}</h3>
                  <p className="muted" style={{ margin: 0 }}>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="cta-band" style={{ marginTop: "3rem" }}>
          <h2 className="h2">Discuss {service.shortTitle.toLowerCase()}</h2>
          <p className="lead">
            Share context, timelines, and constraints. We will respond with thoughtful next steps.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
