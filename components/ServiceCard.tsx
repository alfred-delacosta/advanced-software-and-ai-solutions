import Link from "next/link";
import type { Service } from "@/data/services";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className={`card ${styles.card}`}>
      <p className="eyebrow">{service.shortTitle}</p>
      <h3 className="h3">{service.title}</h3>
      <p className={`muted ${styles.summary}`}>{service.summary}</p>
    </Link>
  );
}
