"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type ThemeMode = "system" | "light" | "dark";

const STORAGE_KEY = "asais-theme";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "system") {
    root.removeAttribute("data-theme");
    root.style.colorScheme = "";
  } else {
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
  }
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      const next =
        stored === "light" || stored === "dark" || stored === "system"
          ? stored
          : "system";
      setMode(next);
      applyTheme(next);
    } catch {
      setMode("system");
    }
    setReady(true);
  }, []);

  function select(next: ThemeMode) {
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyTheme(next);
  }

  return (
    <div
      className={styles.group}
      role="group"
      aria-label="Color theme"
      data-ready={ready ? "true" : "false"}
    >
      {(
        [
          { id: "system", label: "System" },
          { id: "light", label: "Light" },
          { id: "dark", label: "Dark" },
        ] as const
      ).map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={mode === opt.id ? styles.active : undefined}
          aria-pressed={mode === opt.id}
          onClick={() => select(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
