import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import impressumContent from "@/content/legal/impressum.md";

export const metadata: Metadata = { title: "Impressum | StudyTax" };

export default function Impressum() {
    return <LegalPage title="Impressum" content={impressumContent} />;
}
