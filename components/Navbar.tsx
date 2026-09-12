"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact } from "@/data/contact";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Advanced Software and AI Solutions"
          title="Advanced Software and AI Solutions"
          onClick={() => setOpen(false)}
        >
          <img
            src="/brand/lockup-asais-light.svg"
            alt=""
            className={`${styles.lockup} ${styles.lockupLight}`}
            width={148}
            height={32}
          />
          <img
            src="/brand/lockup-asais-dark.svg"
            alt=""
            className={`${styles.lockup} ${styles.lockupDark}`}
            width={148}
            height={32}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(pathname, link.href) ? styles.active : undefined}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <div className={styles.ctaWrap}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              Contact
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
                className={isActive(pathname, link.href) ? styles.active : undefined}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </nav>
          <p className={`muted ${styles.mobileEmail}`}>{contact.email}</p>
        </div>
      </div>
    </header>
  );
}
