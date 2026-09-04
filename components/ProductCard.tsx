import type { Product } from "@/data/products";
import styles from "./PortfolioCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`${styles.card} ${styles.live}`}>
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
          {product.href ? (
            <a href={product.href} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          ) : (
            product.statusLabel
          )}
        </p>
      </div>
    </article>
  );
}
