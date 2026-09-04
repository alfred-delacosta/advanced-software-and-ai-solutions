import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Custom Software, AI & Automation for Growing Teams",
  description: business.description,
  path: "/",
});

const steps = [
  {
    name: "Discover",
    detail:
      "We clarify goals, constraints, and the thinnest release that creates measurable value.",
  },
  {
    name: "Build",
    detail:
      "We ship in iterative slices with demos, tests, and documentation your team can follow.",
  },
  {
    name: "Operate",
    detail:
      "We support launch, monitoring, and a backlog so momentum continues after go-live.",
  },
];

export default function HomePage() {
  const teasers = portfolioItems.filter((i) => i.status === "live").concat(portfolioItems.filter((i) => i.status === "coming-soon")).slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Remote-first · United States</p>
          <h1 className="h1">
            Custom software, AI, and automation for growing teams
          </h1>
          <p className="lead">
            Advanced Software and AI Solutions helps US companies replace fragile
            workflows with reliable systems—built to ship, operate, and improve.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
          <div className={styles.trust}>
            <span>Discovery-led delivery</span>
            <span>Production-minded AI</span>
            <span>Observable automations</span>
            <span>Email-first collaboration</span>
          </div>
        </div>
      </section>

      <section className={`section ${styles.flushTop}`}>
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2 className="h2">What we build with you</h2>
          <p className="lead">
            Four focused offerings—from greenfield products to AI features and the
            integrations that keep operations moving.
          </p>
          <div className={`grid-2 ${styles.blockGap}`}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.band}`}>
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2 className="h2">Discover → Build → Operate</h2>
          <p className="lead">
            A simple cadence that keeps stakeholders aligned and quality visible at every stage.
          </p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
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
          <p className="eyebrow">Portfolio</p>
          <h2 className="h2">Products and selected work</h2>
          <p className="lead">
            SealSend and EmailArchiver ship from our team. More case studies are on the way—outcomes first, no fake logos.
          </p>
          <div className={`grid-3 ${styles.blockGap}`}>
            {teasers.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.blockGap}>
            <Link href="/portfolio" className="btn btn-secondary">
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.flushTop}`}>
        <div className="container">
          <div className="cta-band">
            <h2 className="h2">Ready to talk through a project?</h2>
            <p className="lead">
              Tell us what you are building or fixing. We will reply with clear next steps—no phone required.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
