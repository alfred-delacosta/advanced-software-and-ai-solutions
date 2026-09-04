import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Software products from Advanced Software and AI Solutions, including SealSend secure file share and EmailArchiver email to PDF.",
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
        <h1 className="h1">Software we sell and ship</h1>
        <p className="lead">
          Ready-to-use products built by our team. For custom builds, AI features, and
          integrations, see{" "}
          <Link href="/services">Services</Link>.
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
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
