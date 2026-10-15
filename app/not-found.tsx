import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Seite nicht gefunden | StudyTax" };

export default function NichtGefunden() {
    return (
        <main className="recht recht-schmal">
            <div>
                <h1 className="gross recht-titel">Diese Seite gibt es nicht.</h1>
                <div className="recht-zurueck">
                    <Link href="/" className="link">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
