import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import agbContent from "@/content/legal/agb.md";

export const metadata: Metadata = { title: "Allgemeine Geschäftsbedingungen | StudyTax" };

export default function AGB() {
    return (
        <LegalPage
            title={"Allgemeine Geschäfts\u00ADbedingungen"}
            content={agbContent}
            stand="15.10.2026, Version 1.0"
        />
    );
}
