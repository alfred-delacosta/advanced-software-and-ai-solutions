import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PortfolioCard from "@/components/PortfolioCard";
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
        <img
          className={styles.heroImage}
          src={home.hero.imageSrc}
          alt={home.hero.imageAlt}
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{home.hero.eyebrow}</p>
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
          </div>
        </div>
      </section>

      <section className={styles.statement} aria-label="U.S. based team">
        <div className="container">
          <p className={styles.statementLine}>{home.trust.line}</p>
          <p className={styles.statementMeta}>{home.trust.bits.join(" · ")}</p>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <h2 className="h2" id="services-heading">
            {home.services.h2}
          </h2>
          <p className="lead">{home.services.lead}</p>
          <div className={styles.offers}>
            {home.services.items.map((item) => (
              <article key={item.href} className={styles.offer}>
                <h3 className="h3">{item.title}</h3>
                <div>
                  <p className="muted">{item.oneLiner}</p>
                  <Link href={item.href} className="text-link">
                    Learn more
                    <span className="sr-only"> about {item.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.mission}
        id="us-based"
        aria-labelledby="us-based-heading"
      >
        <figure className={styles.missionMedia}>
          <img
            src={home.usBased.imageSrc}
            alt={home.usBased.imageAlt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className={styles.missionCopy}>
          <h2 className="h2" id="us-based-heading">
            {home.usBased.h2}
          </h2>
          <p className="lead">{home.usBased.lead}</p>
          <div className={styles.missionPoints}>
            {home.usBased.points.map((point) => (
              <article key={point.title}>
                <h3 className="h3">{point.title}</h3>
                <p className="muted mb-0">{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-heading">
        <div className={`container ${styles.who}`}>
          <h2 className="h2" id="who-heading">
            {home.whoWeHelp.h2}
          </h2>
          <div className={styles.whoList}>
            {home.whoWeHelp.items.map((item) => (
              <article key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="muted mb-0">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.how}`} id="how-we-work" aria-labelledby="how-heading">
        <div className="container">
          <h2 className="h2" id="how-heading">
            {home.howWeWork.h2}
          </h2>
          <div className={styles.steps}>
            {home.howWeWork.steps.map((step, i) => (
              <article key={step.name}>
                <p className={styles.stepNum}>0{i + 1}</p>
                <h3 className="h3">{step.name}</h3>
                <p className="muted mb-0">{step.detail}</p>
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
      </section>

      <section className="section" aria-labelledby="products-heading">
        <div className="container">
          <h2 className="h2" id="products-heading">
            {home.products.h2}
          </h2>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="container">
          <h2 className="h2" id="work-heading">
            {home.selectedWork.h2}
          </h2>
          <div className={styles.workList}>
            {caseTeasers.map((item) => (
              <PortfolioCard key={item.id} item={item} variant="list" />
            ))}
          </div>
          <div className={styles.afterList}>
            <Link href="/portfolio/" className="text-link">
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
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

      <section className="section">
        <div className="container">
          <div className={styles.close}>
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
