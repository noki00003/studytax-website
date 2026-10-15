import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import datenschutzContent from "@/content/legal/datenschutz.md";

export const metadata: Metadata = { title: "Datenschutzerklärung | StudyTax" };

export default function Datenschutz() {
    return (
        <LegalPage
            title={"Datenschutz\u00ADerklärung"}
            content={datenschutzContent}
            stand="Oktober 2026, Version 1.0"
        />
    );
}
