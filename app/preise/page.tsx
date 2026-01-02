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

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Basis-Paket */}
                    <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Basis-Paket</h2>
                            <p className="text-gray-600 dark:text-gray-400">Alles für deine Steuererklärung</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-5xl font-bold">14,99€</span>
                            <span className="text-gray-500 ml-2">/ Steuerjahr</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>ELSTER-Übermittlung ans Finanzamt</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>KI-Chat-Assistent für Steuerfragen</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>PDF-Export der Steuererklärung</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Upload von bis zu 5 Belegen</span>
                            </li>
                        </ul>
                        <Link
                            href="/#download"
                            className="block w-full text-center py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
                        >
                            App herunterladen
                        </Link>
                    </div>

                    {/* Komplett-Paket */}
                    <div className="p-8 rounded-3xl bg-primary text-white relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                            EMPFOHLEN
                        </div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Komplett-Paket</h2>
                            <p className="text-blue-100">Maximale Automatisierung</p>
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
                                <span>Alle Funktionen des Basis-Pakets</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Bankverbindung über FinTS</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>KI-Kategorisierung von Transaktionen</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unbegrenzte Beleg-Uploads</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>KI-gestützte Beleg-Analyse (OCR)</span>
                            </li>
                        </ul>
                        <Link
                            href="/#download"
                            className="block w-full text-center py-3 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors"
                        >
                            App herunterladen
                        </Link>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-primary hover:underline">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
