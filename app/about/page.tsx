import Link from "next/link";
import { business } from "@/data/business";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "About Our 100% U.S. Based Team",
  description:
    "Advanced Software and AI Solutions LLC is a 100% U.S. based team building custom software, implementing AI, and helping small businesses optimize workflows.",
  path: "/about",
});

const values = [
  {
    title: "Clarity over theater",
    detail:
      "We explain tradeoffs in plain language and prefer working software over slide decks that hide risk.",
  },
  {
    title: "Outcomes over output",
    detail:
      "Lines of code are not the goal. Reduced cycle time, fewer errors, and systems people trust are.",
  },
  {
    title: "Ownership that lasts",
    detail:
      "We document decisions and design for maintainability so your team is not trapped after launch.",
  },
  {
    title: "100% U.S. based",
    detail:
      "We collaborate across the United States without requiring an office visit — and we never staff your work overseas.",
  },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>
        <h1 className="h1">A 100% U.S. based partner for software and AI</h1>
        <p className="lead">
          {business.name} helps small businesses and growing U.S. companies
          design, build, and operate custom software, AI systems, and workflow
          automations that fit how they work.
        </p>
        <p className="muted">{company.trustLine}</p>

        <div className="prose">
          <p>
            Technology should reduce operational drag, not add another layer of
            complexity. We partner with founders, operators, and technical leaders
            who need a team that can discover the real problem, ship durable
            software, and hand off cleanly.
          </p>
          <p>
            We are a 100% U.S. based team. Collaboration happens over email,
            shared docs, and scheduled working sessions in U.S. time zones. We
            never offshore your work — the people who sell the project are not
            a front for an overseas bench.
          </p>
          <p>
            Engagements range from focused consulting assessments to full build
            programs spanning custom applications, AI implementation, and
            system integrations. When we build, we leave behind documentation,
            observable systems, and a backlog your team can continue.
          </p>
        </div>

        <div className="mt-3">
          <h2 className="h2">Values</h2>
          <div className={styles.values}>
            {values.map((v) => (
              <article key={v.title} className={styles.value}>
                <h3 className="h3">{v.title}</h3>
                <p className="muted mt-0 mb-0">{v.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cta-band">
          <h2 className="h2">Want to work together?</h2>
          <p className="lead">
            Email is the best starting point. Share a bit of context and we will follow up.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <a href={`mailto:${business.email}`} className="text-link">
              {business.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
