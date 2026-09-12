import type { PortfolioItem } from "@/data/portfolio";
import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({
  item,
  variant = "card",
}: {
  item: PortfolioItem;
  variant?: "card" | "list";
}) {
  if (variant === "list") {
    return (
      <article className={styles.listRow}>
        <div className={styles.listMeta}>
          <span className={styles.tag}>{item.industry}</span>
          <span className={styles.statusInline}>Coming soon</span>
        </div>
        <h3 className={`h3 ${styles.listTitle}`}>{item.title}</h3>
        <p className={styles.outcome}>{item.outcome}</p>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.thumb} aria-hidden="true" />
      <div className={styles.body}>
        <span className={styles.tag}>{item.industry}</span>
        <h3 className="h3">{item.title}</h3>
        <p className={styles.outcome}>{item.outcome}</p>
        <p className={styles.status}>Case study soon</p>
      </div>
    </article>
  );
}
