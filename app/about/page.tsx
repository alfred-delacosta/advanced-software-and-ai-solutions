import Link from "next/link";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Advanced Software and AI Solutions is a remote-first US practice building custom software, AI systems, and automation for growing teams.",
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
    title: "Remote-first, US-focused",
    detail:
      "We collaborate asynchronously and synchronously across the United States without requiring an office visit.",
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
        <p className="eyebrow">About</p>
        <h1 className="h1">A practical partner for software and AI</h1>
        <p className="lead">
          {business.name} helps growing US companies design, build, and operate
          custom software, AI systems, and automations that fit how they work.
        </p>

        <div className="prose">
          <p>
            Technology should reduce operational drag, not add another layer of
            complexity. We partner with founders, operators, and technical leaders
            who need a team that can discover the real problem, ship durable
            software, and hand off cleanly.
          </p>
          <p>
            We are remote-first across the United States. Collaboration happens
            over email, shared docs, and scheduled working sessions—keeping the
            focus on delivery rather than geography.
          </p>
          <p>
            Engagements range from focused consulting assessments to full build
            programs spanning custom applications, AI-assisted workflows, and
            system integrations. When we build, we leave behind documentation,
            observable systems, and a backlog your team can continue.
          </p>
        </div>

        <div className="mt-2-5">
          <h2 className="h2">Values</h2>
          <div className="grid-2 mt-1">
            {values.map((v) => (
              <article key={v.title} className="card">
                <h3 className="h3">{v.title}</h3>
                <p className="muted mt-0 mb-0">{v.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cta-band mt-3">
          <h2 className="h2">Want to work together?</h2>
          <p className="lead">
            Email is the best starting point. Share a bit of context and we will follow up.
          </p>
          <div className="btn-row justify-center">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <a href={`mailto:${business.email}`} className="btn btn-secondary">
              {business.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
