import type { PortfolioItem } from "@/data/portfolio";
import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const isLive = item.status === "live";

  return (
    <article className={`${styles.card} ${isLive ? styles.live : ""}`}>
      <div className={styles.thumb} data-product={item.id} aria-hidden="true" />
      <div className={styles.body}>
        <span className={styles.tag}>{item.industry}</span>
        <h3 className="h3">{item.title}</h3>
        <p className={styles.outcome}>{item.outcome}</p>
        {isLive && item.href ? (
          <p className={styles.status}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        ) : (
          <p className={styles.status}>Case study soon</p>
        )}
      </div>
    </article>
  );
}
