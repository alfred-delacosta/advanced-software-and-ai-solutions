import Link from "next/link";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <strong className={styles.brand}>{company.shortName}</strong>
          <p className={styles.blurb}>{company.description}</p>
          <p className={styles.trust}>{company.trustLine}</p>
        </div>
        <div>
          <p className={styles.heading}>Company</p>
          <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
            <a href={company.url}>{company.url.replace("https://", "")}</a>
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
          © {year} {company.copyrightName}. {company.remoteFirst}.
        </span>
        <div className={styles.bottomLinks}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </footer>
  );
}
