import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected software, AI, and automation case studies from Advanced Software and AI Solutions. Detailed write-ups coming soon.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Portfolio</span>
        </nav>
        <h1 className="h1">Case studies and client work</h1>
        <p className="lead">
          Showcase projects and outcomes from engagements. For BriefSeal and EmailArchiver
          (the products we sell), see{" "}
          <Link href="/products">Products</Link>. These notes are placeholders for detailed
          write-ups: outcomes first, no invented client logos or fabricated metrics.
        </p>
        <div className={styles.list}>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} variant="list" />
          ))}
        </div>
        <div className="cta-band">
          <h2 className="h2">Have a similar challenge?</h2>
          <p className="lead">
            Tell us what you are trying to improve. We will help you scope a realistic first release.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
