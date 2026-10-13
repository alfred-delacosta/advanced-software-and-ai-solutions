import Link from "next/link";
import type { Service } from "@/data/services";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className={styles.row}>
      <h2 className={`h3 ${styles.title}`}>{service.title}</h2>
      <p className={styles.summary}>{service.summary}</p>
      <span className={styles.more}>Learn more</span>
    </Link>
  );
}
