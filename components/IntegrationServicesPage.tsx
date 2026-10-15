import Link from "next/link";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import { integrationServices as page } from "@/data/integrationServices";
import { getServiceBySlug, type Service } from "@/data/services";
import { faqJsonLd } from "@/lib/seo";
import styles from "./IntegrationServicesPage.module.css";

const pageUrl = `${company.url}${page.path}`;
const serviceId = `${pageUrl}#service`;
const breadcrumbId = `${pageUrl}#breadcrumb`;
const webPageId = `${pageUrl}#webpage`;
const faqId = `${pageUrl}#faq`;

function buildJsonLd() {
  const faq: Record<string, unknown> = { ...faqJsonLd(page.faq.items) };
  delete faq["@context"];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: `${page.seoTitle} | ${company.name}`,
        description: page.seoDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${company.url}/#website` },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: page.datePublished,
        dateModified: page.dateModified,
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Integration Services",
        serviceType: "System integration",
        provider: { "@id": `${company.url}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: pageUrl,
        description: page.seoDescription,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Integration Services",
          itemListElement: page.offerCatalog.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      { ...faq, "@id": faqId, isPartOf: { "@id": webPageId } },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${company.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${company.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Integration Services", item: pageUrl },
        ],
      },
    ],
  };
}

export default function IntegrationServicesPage() {
  const related = page.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />

      <section className="section" aria-labelledby="integration-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Integration Services</span>
          </nav>
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="h1" id="integration-hero">
            {page.hero.h1}
          </h1>
          <p className={`lead ${styles.heroLead}`}>{page.hero.lead}</p>
          <div className="btn-row">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              {page.hero.primaryCta}
            </a>
            <a href={page.hero.secondaryHref} className="text-link">
              {page.hero.secondaryCta}
            </a>
          </div>
          <p className={styles.meta}>
            {page.hero.trustLine} Last updated{" "}
            <time dateTime={page.dateModified}>{page.lastUpdatedLabel}</time>.
          </p>
        </div>
      </section>

      <section className="section section-flush-top" aria-labelledby="cover-heading">
        <div className="container">
          <h2 className="h2" id="cover-heading">
            {page.cover.h2}
          </h2>
          <div className={`prose ${styles.intro}`}>
            <p>
              <strong>{page.cover.definition}</strong> {page.cover.intro}
            </p>
          </div>
          <div className={styles.rows}>
            {page.cover.items.map((item) => (
              <article key={item.title} className={styles.row}>
                <h3 className="h3">{item.title}</h3>
                <div>
                  <p className="muted">{item.detail}</p>
                  {"linkHref" in item && (
                    <p className="muted">
                      {item.linkLead}
                      <Link href={item.linkHref}>{item.linkText}</Link>.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-surface" aria-labelledby="patterns-heading">
        <div className="container">
          <h2 className="h2" id="patterns-heading">
            {page.patterns.h2}
          </h2>
          <dl className={styles.patterns}>
            {page.patterns.items.map((item) => (
              <div key={item.name}>
                <dt>{item.name}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>

          <h3 className={`h3 ${styles.tableHeading}`} id="compare-heading">
            {page.patterns.table.h3}
          </h3>
          <div
            className={styles.tableWrap}
            role="region"
            aria-labelledby="compare-heading"
            tabIndex={0}
          >
            <table className={styles.table}>
              <caption className="sr-only">{page.patterns.table.caption}</caption>
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  {page.patterns.table.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {page.patterns.table.rows.map((row) => (
                  <tr key={row.option}>
                    <th scope="row">{row.option}</th>
                    <td>{row.bestFit}</td>
                    <td>{row.cost}</td>
                    <td>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.dark} aria-labelledby="problems-heading">
        <div className={`container ${styles.split}`}>
          <h2 className="h2" id="problems-heading">
            {page.problems.h2}
          </h2>
          <ul className={styles.plainList}>
            {page.problems.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section"
        id="process"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <h2 className="h2" id="process-heading">
            {page.process.h2}
          </h2>
          <ol className={styles.steps}>
            {page.process.steps.map((step, i) => (
              <li key={step.step}>
                <p className={styles.index} aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="h3">{step.step}</h3>
                <p className="muted mb-0">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-flush-top" aria-labelledby="why-heading">
        <div className={`container ${styles.split}`}>
          <h2 className="h2" id="why-heading">
            {page.why.h2}
          </h2>
          <div>
            <ul className={styles.plainList}>
              {page.why.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.detail}
                </li>
              ))}
            </ul>
            <p className="muted mt-1-5">
              {page.why.linksLead}
              <Link href={page.why.links[0].href}>{page.why.links[0].text}</Link> and{" "}
              <Link href={page.why.links[1].href}>{page.why.links[1].text}</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-flush-top" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <h2 className="h2" id="faq-heading">
            {page.faq.h2}
          </h2>
          <div className={styles.faqList}>
            {page.faq.items.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className="h3">{item.question}</h3>
                <p className="muted mb-0">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-flush-top" aria-labelledby="related-heading">
        <div className="container">
          <h2 className="h2" id="related-heading">
            Related services
          </h2>
          <div className={styles.related}>
            {related.map((item) => (
              <Link key={item.slug} href={`${item.href}/`}>
                <h3 className="h3">{item.title}</h3>
                <p className="muted mb-0">{item.summary}</p>
              </Link>
            ))}
          </div>

          <div className="cta-band">
            <h2 className="h2">{page.cta.h2}</h2>
            <p className="lead">{page.cta.lead}</p>
            <div className="btn-row">
              <a href={`mailto:${contact.email}`} className="btn btn-primary">
                {page.cta.button}
              </a>
            </div>
            <p className="muted mt-1-5">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>. {page.cta.formLead}{" "}
              <Link href={page.cta.formHref}>{page.cta.formLinkText}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
