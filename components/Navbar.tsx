"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/data/business";
import styles from "./Navbar.module.css";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          Advanced Software <span>&amp;</span> AI Solutions
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.ctaWrap}>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${open ? styles.open : ""}`}
      >
        <div className="container">
          <nav aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: "0.5rem", width: "fit-content" }}
            >
              Get in touch
            </Link>
          </nav>
          <p className="muted" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
            {business.email}
          </p>
        </div>
      </div>
    </header>
  );
}
