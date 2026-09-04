import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

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
        <p className="eyebrow">Portfolio</p>
        <h1 className="h1">Case studies and client work</h1>
        <p className="lead">
          Showcase projects and outcomes from engagements. For SealSend and EmailArchiver —
          the products we sell — see{" "}
          <Link href="/products">Products</Link>. These cards are placeholders for detailed
          write-ups: outcomes first, no invented client logos or fabricated metrics.
        </p>
        <div className="grid-3" style={{ marginTop: "1.5rem" }}>
          {portfolioItems.map((item) => (
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
