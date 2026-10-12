import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Page not found</h1>
        <p className="lead">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/contact" className="text-link">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
