import type { Config } from "tailwindcss";

// Farben kommen als CSS-Variablen aus app/globals.css (die Website ist nur
// hell). Tailwind braucht nur noch die Kontaktseite; alles andere hat
// eigene Klassen in app/globals.css.
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        field: "var(--field)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-pressed": "var(--accent-pressed)",
        "accent-soft": "var(--accent-soft)",
        "accent-border": "var(--accent-border)",
        success: "var(--success)",
        "success-soft": "var(--success-soft)",
        error: "var(--error)",
        "error-soft": "var(--error-soft)",
      },
      boxShadow: {
        karte: "var(--schatten-karte)",
        option: "var(--schatten-option)",
      },
      borderRadius: {
        karte: "18px",
        input: "16px",
      },
      maxWidth: {
        seite: "1080px",
      },
    },
  },
  plugins: [],
} satisfies Config;
