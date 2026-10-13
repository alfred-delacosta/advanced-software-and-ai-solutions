"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/data/company";
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
          aria-label={company.name}
          title={company.name}
          onClick={() => setOpen(false)}
        >
          <picture className={`${styles.markPic} ${styles.markLight}`}>
            <source
              media="(min-width: 960px)"
              srcSet="/brand/nav-48-light.png 1x, /brand/nav-48@2x-light.png 2x"
              width={48}
              height={48}
            />
            <source
              media="(min-width: 640px)"
              srcSet="/brand/nav-40-light.png 1x, /brand/nav-40@2x-light.png 2x"
              width={40}
              height={40}
            />
            <img
              src="/brand/nav-32-light.png"
              srcSet="/brand/nav-32-light.png 1x, /brand/nav-32@2x-light.png 2x"
              alt=""
              className={styles.mark}
              width={32}
              height={32}
              decoding="async"
            />
          </picture>
          <picture className={`${styles.markPic} ${styles.markDark}`}>
            <source
              media="(min-width: 960px)"
              srcSet="/brand/nav-48-dark.png 1x, /brand/nav-48@2x-dark.png 2x"
              width={48}
              height={48}
            />
            <source
              media="(min-width: 640px)"
              srcSet="/brand/nav-40-dark.png 1x, /brand/nav-40@2x-dark.png 2x"
              width={40}
              height={40}
            />
            <img
              src="/brand/nav-32-dark.png"
              srcSet="/brand/nav-32-dark.png 1x, /brand/nav-32@2x-dark.png 2x"
              alt=""
              className={styles.mark}
              width={32}
              height={32}
              decoding="async"
            />
          </picture>
          <img
            src="/brand/wordmark-light.svg"
            alt=""
            className={`${styles.wordmark} ${styles.markLight}`}
            width={283}
            height={44}
            decoding="async"
          />
          <img
            src="/brand/wordmark-dark.svg"
            alt=""
            className={`${styles.wordmark} ${styles.markDark}`}
            width={283}
            height={44}
            decoding="async"
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
          <div className={styles.themeDesktop}>
            <ThemeToggle />
          </div>
          <div className={styles.ctaWrap}>
            <Link href="/contact" className={styles.navCta}>
              Start a project
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
            <div className={styles.mobileTheme}>
              <ThemeToggle />
            </div>
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
