import Link from "next/link";
import type { Product } from "@/data/products";
import { productWaitlistHref } from "@/data/products";
import styles from "./PortfolioCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const waitlistHref = productWaitlistHref(product);

  return (
    <article className={`${styles.card} ${styles.product}`}>
      <div className={styles.thumb} data-product={product.id}>
        <img
          src={product.thumbSrc}
          alt={product.thumbAlt}
          width={1200}
          height={630}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{product.category}</span>
        <h3 className="h3">{product.title}</h3>
        <p className={styles.outcome}>{product.summary}</p>
        <p className={styles.status}>
          <span className={styles.statusInline}>{product.statusLabel}</span>
          {" · "}
          {product.href ? (
            <a href={product.href} target="_blank" rel="noopener noreferrer">
              View product
            </a>
          ) : (
            <a
              href={waitlistHref}
              aria-describedby={`${product.id}-waitlist-note`}
            >
              {product.ctaLabel}
            </a>
          )}
        </p>
        <p id={`${product.id}-waitlist-note`} className={`muted ${styles.waitlistNote}`}>
          {product.microcopy} Opens your email app with a draft to ASAIS. We’ll
          email you when early access for {product.title} opens. We won’t add you
          to unrelated marketing lists. See our{" "}
          <Link href="/privacy/">Privacy Policy</Link>. Unsubscribe anytime via{" "}
          <a href="mailto:contact@advancedsoftwareandaisolutions.com">
            contact@advancedsoftwareandaisolutions.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}
