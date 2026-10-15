import localFont from "next/font/local";

/*
 * Schriften der Website, beide selbst gehostet (app/fonts, OFL):
 * - Newsreader für die großen Zeilen, als variable Schrift mit optischer
 *   Größe; auf Latin, Gewicht 300 bis 500 und optische Größe 16 bis 72
 *   gekürzt (OFL ohne reservierten Namen, Kürzen ist erlaubt).
 * - Mona Sans für Text, unverändert (der Name „Mona“ ist geschützt).
 */
export const serif = localFont({
    src: "../app/fonts/Newsreader-latin-opsz-wght.woff2",
    variable: "--font-serif",
    weight: "300 500",
    style: "normal",
    display: "swap",
    fallback: ["Georgia", "Times New Roman", "serif"],
});

export const mona = localFont({
    src: "../app/fonts/MonaSans-latin-wdth-wght.woff2",
    variable: "--font-mona",
    weight: "200 900",
    style: "normal",
    display: "swap",
    declarations: [{ prop: "font-stretch", value: "75% 125%" }],
    fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});
