import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PortfolioCard from "@/components/PortfolioCard";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import { home } from "@/data/home";
import { products } from "@/data/products";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Custom Software, AI & Automation for Growing Teams",
  description: company.description,
  path: "/",
});

export default function HomePage() {
  const caseTeasers = portfolioItems.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="h1">{home.hero.h1}</h1>
          <p className="lead">{home.hero.lead}</p>
          <div className="btn-row">
            <Link href={home.hero.primaryHref} className="btn btn-primary">
              {home.hero.primaryCta}
            </Link>
            <Link href={home.hero.secondaryHref} className="text-link">
              {home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Trust">
        <div className="container">
          <p className={styles.trustLine}>{home.trust.line}</p>
          <div className={styles.trustBits}>
            {home.trust.bits.map((bit) => (
              <span key={bit}>{bit}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className={`section ${styles.flushTop}`}>
        <div className="container">
          <p className="eyebrow">{home.capabilities.eyebrow}</p>
          <h2 className="h2">{home.capabilities.h2}</h2>
          <div className={`grid-2 ${styles.blockGap}`}>
            {home.capabilities.items.map((item) => (
              <Link key={item.href} href={item.href} className={`card ${styles.capability}`}>
                <h3 className="h3">{item.title}</h3>
                <p className="muted mb-0">{item.oneLiner}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.band}`}>
        <div className="container">
          <p className="eyebrow">{home.howWeWork.eyebrow}</p>
          <h2 className="h2">{home.howWeWork.h2}</h2>
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
            <Link href="/portfolio" className="text-link">
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.flushTop}`}>
        <div className="container">
          <div className="cta-band">
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
