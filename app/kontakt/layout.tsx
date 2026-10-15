import type { Metadata } from "next";

// Die Kontaktseite ist eine Client-Komponente und kann keine Metadaten
// exportieren; der Titel steht deshalb hier.
export const metadata: Metadata = { title: "Kontakt | StudyTax" };

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
    return children;
}
