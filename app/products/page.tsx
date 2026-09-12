import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "BriefSeal and EmailArchiver from ASAIS. Join the waitlist.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Products</span>
        </nav>
        <p className="eyebrow">Products</p>
        <h1 className="h1">Software we are shipping next</h1>
        <p className="lead">
          Tools in progress from ASAIS. Join a waitlist and we’ll email you when
          each one opens. No spam. For custom builds, AI features, and
          integrations, see <Link href="/services/">Services</Link>.
        </p>
        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="cta-band" style={{ marginTop: "3rem" }}>
          <h2 className="h2">Need something tailored?</h2>
          <p className="lead">
            We also design and build custom software for US companies. Tell us what you need.
          </p>
          <div className="btn-row justify-center">
            <Link href="/contact/" className="btn btn-primary">
              Start a project
            </Link>
            <Link href="/services/" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
