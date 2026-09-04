import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Products and selected projects from Advanced Software and AI Solutions, including SealSend and EmailArchiver.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const live = portfolioItems.filter((i) => i.status === "live");
  const soon = portfolioItems.filter((i) => i.status === "coming-soon");

  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Portfolio</span>
        </nav>
        <p className="eyebrow">Portfolio</p>
        <h1 className="h1">Products we build and ship</h1>
        <p className="lead">
          SealSend and EmailArchiver are live products from our team. Additional case-study
          cards below are placeholders—no invented client logos or fabricated metrics.
        </p>

        <h2 className="h2" style={{ marginTop: "2rem" }}>
          Products
        </h2>
        <div className="grid-2" style={{ marginTop: "1rem" }}>
          {live.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <h2 className="h2" style={{ marginTop: "2.75rem" }}>
          Upcoming case studies
        </h2>
        <div className="grid-3" style={{ marginTop: "1rem" }}>
          {soon.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="cta-band" style={{ marginTop: "3rem" }}>
          <h2 className="h2">Have a similar challenge?</h2>
          <p className="lead">
            Tell us what you are trying to improve. We will help you scope a realistic first release.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
