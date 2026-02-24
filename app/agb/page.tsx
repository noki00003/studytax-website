import { LegalPage } from "@/components/LegalPage";
import agbContent from "@/content/legal/agb.md";

export default function AGB() {
    return (
        <LegalPage
            title="Allgemeine Geschäftsbedingungen"
            content={agbContent}
        />
    );
}
