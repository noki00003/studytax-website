import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Impressum() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">Impressum</h1>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Noah Kiefer<br />
                            Hauptstraße 126<br />
                            66386 Sankt Ingbert<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            E-Mail: support@studytax.de
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                            <em>[wird nach Erteilung ergänzt]</em>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                                https://ec.europa.eu/consumers/odr/
                            </a>
                            <br /><br />
                            Unsere E-Mail-Adresse: support@studytax.de
                            <br /><br />
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>

                <div className="mt-12">
                    <Link href="/" className="text-primary hover:underline">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
