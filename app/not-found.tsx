import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <p className="eyebrow">404</p>
        <h1 className="h1">Page not found</h1>
        <p className="lead lead-center">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="btn-row justify-center">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View services
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
