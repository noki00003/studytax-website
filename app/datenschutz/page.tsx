import { LegalPage } from "@/components/LegalPage";
import datenschutzContent from "@/content/legal/datenschutz.md";

export default function Datenschutz() {
    return (
        <LegalPage
            title="Datenschutzerklärung"
            content={datenschutzContent}
        />
    );
}
