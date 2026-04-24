import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Preise() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Einfache, faire Preise</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Einmalkauf pro Steuerjahr – kein Abo, keine versteckten Kosten.
                    </p>
                </div>

                <div className="max-w-lg mx-auto">
                    {/* Steuer-Paket */}
                    <div className="p-8 rounded-3xl bg-primary text-white relative overflow-hidden">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Steuer-Paket</h2>
                            <p className="text-blue-100">Alles, was du brauchst</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-5xl font-bold">24,99€</span>
                            <span className="text-blue-100 ml-2">/ Steuerjahr</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>ELSTER-Abgabe ans Finanzamt</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Erhöhtes Beleg-Upload-Kontingent</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Erweiterter KI-Chat</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>PDF-Export der Steuererklärung</span>
                            </li>
                        </ul>
                        <Link
                            href="/#download"
                            className="block w-full text-center py-3 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors"
                        >
                            App herunterladen
                        </Link>
                    </div>

                    {/* Kostenlos-Hinweis */}
                    <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                        <h3 className="font-bold mb-2">Kostenlos enthalten</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Fragebogen ausfüllen, Erstattung berechnen, Bank verbinden, Belege hochladen und KI-Chat-Nachrichten – komplett kostenlos.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-primary hover:underline">
                        &larr; Zurück zur Startseite
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
