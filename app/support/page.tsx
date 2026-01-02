import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata = {
    title: "Support & FAQ - StudyTax",
    description: "Häufig gestellte Fragen zur StudyTax Steuer-App. Finde Antworten zu Banking, ELSTER, Belegen und mehr.",
};

export default function Support() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hilfe & FAQ
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Finde Antworten auf die häufigsten Fragen
                    </p>
                </div>

                <FAQ />

                <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <EnvelopeSimple size={32} className="text-primary" weight="fill" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">
                        Noch Fragen?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Unser Support-Team hilft dir gerne weiter.
                    </p>
                    <a
                        href="mailto:support@studytax.de"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                        <EnvelopeSimple size={20} />
                        support@studytax.de
                    </a>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-primary hover:underline">
                        &larr; Zurück zur Startseite
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
