import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <strong>{business.name}</strong>
          <p className={styles.blurb}>{business.description}</p>
        </div>
        <div>
          <p className={styles.heading}>Company</p>
          <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
          </div>
        </div>
        <div>
          <p className={styles.heading}>Services</p>
          <div className={styles.links}>
            {services.map((s) => (
              <Link key={s.slug} href={s.href}>
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {business.name}. Remote-first across the United States.
        </span>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </div>
    </footer>
  );
}
