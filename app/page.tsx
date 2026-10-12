import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PortfolioCard from "@/components/PortfolioCard";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import { home } from "@/data/home";
import { products } from "@/data/products";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/",
});

export default function HomePage() {
  const caseTeasers = portfolioItems.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(home.faq.items)),
        }}
      />

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={`eyebrow ${styles.usEyebrow}`}>
              <span className={styles.star} aria-hidden="true">
                ★
              </span>
              {home.hero.eyebrow}
            </p>
            <h1 className="h1">{home.hero.h1}</h1>
            <p className={`lead ${styles.heroLead}`}>{home.hero.lead}</p>
            <div className="btn-row">
              <Link href={home.hero.primaryHref} className="btn btn-primary">
                {home.hero.primaryCta}
              </Link>
              <Link href={home.hero.secondaryHref} className="text-link">
                {home.hero.secondaryCta}
              </Link>
            </div>
            <ul className={styles.proof}>
              {home.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.heroMedia}>
            <img
              src={home.hero.imageSrc}
              alt={home.hero.imageAlt}
              width={1600}
              height={900}
              fetchPriority="high"
            />
            <figcaption className={styles.heroBadge}>
              {home.hero.imageBadge}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="U.S. based team">
        <div className="container">
          <p className={styles.trustLine}>{home.trust.line}</p>
          <div className={styles.trustBits}>
            {home.trust.bits.map((bit) => (
              <span key={bit}>{bit}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <p className="eyebrow">{home.services.eyebrow}</p>
          <h2 className="h2" id="services-heading">
            {home.services.h2}
          </h2>
          <p className="lead">{home.services.lead}</p>
          <div className={styles.trio}>
            {home.services.items.map((item) => (
              <article key={item.href} className={`card ${styles.serviceCard}`}>
                <h3 className="h3">{item.title}</h3>
                <p className="muted">{item.oneLiner}</p>
                <ul className="list-check">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link href={item.href} className="text-link">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.band}`}
        id="us-based"
        aria-labelledby="us-based-heading"
      >
        <div className="container">
          <div className={styles.usGrid}>
            <figure className={styles.usMedia}>
              <img
                src={home.usBased.imageSrc}
                alt={home.usBased.imageAlt}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div>
              <p className={`eyebrow ${styles.usEyebrow}`}>
                <span className={styles.star} aria-hidden="true">
                  ★
                </span>
                {home.usBased.eyebrow}
              </p>
              <h2 className="h2" id="us-based-heading">
                {home.usBased.h2}
              </h2>
              <p className="lead">{home.usBased.lead}</p>
              <div className={styles.usPoints}>
                {home.usBased.points.map((point) => (
                  <article key={point.title}>
                    <h3 className="h3">{point.title}</h3>
                    <p className="muted mb-0">{point.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-heading">
        <div className="container">
          <p className="eyebrow">{home.whoWeHelp.eyebrow}</p>
          <h2 className="h2" id="who-heading">
            {home.whoWeHelp.h2}
          </h2>
          <div className={styles.trio}>
            {home.whoWeHelp.items.map((item) => (
              <article key={item.title} className="card">
                <h3 className="h3">{item.title}</h3>
                <p className="muted mb-0">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.flushTop}`}
        id="how-we-work"
        aria-labelledby="how-heading"
      >
        <div className="container">
          <div className={styles.howGrid}>
            <div>
              <p className="eyebrow">{home.howWeWork.eyebrow}</p>
              <h2 className="h2" id="how-heading">
                {home.howWeWork.h2}
              </h2>
              <div className={styles.steps}>
                {home.howWeWork.steps.map((step, i) => (
                  <article key={step.name} className="card">
                    <div className={styles.stepNum}>0{i + 1}</div>
                    <h3 className="h3">{step.name}</h3>
                    <p className={`muted ${styles.stepDetail}`}>{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <figure className={styles.howMedia}>
              <img
                src={home.howWeWork.imageSrc}
                alt={home.howWeWork.imageAlt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={`section ${styles.band}`}>
        <div className="container">
          <p className="eyebrow">{home.products.eyebrow}</p>
          <h2 className="h2">{home.products.h2}</h2>
          <div className={`grid-2 ${styles.blockGap}`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{home.selectedWork.eyebrow}</p>
          <h2 className="h2">{home.selectedWork.h2}</h2>
          <div className={styles.workList}>
            {caseTeasers.map((item) => (
              <PortfolioCard key={item.id} item={item} variant="list" />
            ))}
          </div>
          <div className={styles.blockGap}>
            <Link href="/portfolio/" className="text-link">
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.flushTop}`}
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="container">
          <p className="eyebrow">{home.faq.eyebrow}</p>
          <h2 className="h2" id="faq-heading">
            {home.faq.h2}
          </h2>
          <div className={styles.faqList}>
            {home.faq.items.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className="h3">{item.question}</h3>
                <p className="muted mb-0">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.flushTop}`}>
        <div className="container">
          <div className="cta-band">
            <p className={`eyebrow ${styles.usEyebrow}`}>
              <span className={styles.star} aria-hidden="true">
                ★
              </span>
              {company.remoteFirst}
            </p>
            <h2 className="h2">{home.finalCta.h2}</h2>
            <p className="lead">
              {home.finalCta.leadBeforeEmail}{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
            <Link href={home.finalCta.primaryHref} className="btn btn-primary">
              {home.finalCta.primaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
