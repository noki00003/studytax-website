"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Question, Bank, Receipt, Robot, CreditCard, ShieldCheck, PaperPlaneTilt } from "@phosphor-icons/react";

type FAQItem = {
    question: string;
    answer: string;
};

type FAQCategory = {
    name: string;
    icon: React.ReactNode;
    items: FAQItem[];
};

const faqData: FAQCategory[] = [
    {
        name: "Allgemein",
        icon: <Question size={20} weight="fill" />,
        items: [
            {
                question: "Was ist StudyTax?",
                answer: "StudyTax ist eine Steuer-App speziell für Studenten und Azubis. Mit KI-gestütztem Assistenten, automatischer Bankanbindung und direkter ELSTER-Übermittlung machst du deine Steuererklärung in durchschnittlich 15 Minuten."
            },
            {
                question: "Für wen ist StudyTax geeignet?",
                answer: "StudyTax ist optimiert für Studenten und Azubis. Der Fragebogen deckt typische Situationen ab: Nebenjobs, Werbungskosten fürs Studium, Homeoffice-Pauschale, BAföG und Stipendien, sowie den Unterschied zwischen Erst- und Zweitstudium."
            },
            {
                question: "Auf welchen Geräten kann ich StudyTax nutzen?",
                answer: "StudyTax ist für iOS (iPhone, iPad) und Android verfügbar. Deine Daten werden automatisch synchronisiert, sodass du auf allen Geräten den aktuellen Stand hast."
            },
            {
                question: "Welche Steuerjahre werden unterstützt?",
                answer: "Du kannst Steuererklärungen für die Jahre 2021 bis 2025 erstellen. Perfekt, wenn du mehrere Jahre nachreichen möchtest. Deine persönlichen Daten (Stammdaten) werden automatisch ins nächste Jahr übernommen."
            }
        ]
    },
    {
        name: "Preise & Pakete",
        icon: <CreditCard size={20} weight="fill" />,
        items: [
            {
                question: "Was kostet StudyTax?",
                answer: "Der Download ist kostenlos. Für die Abgabe beim Finanzamt gibt es zwei Pakete: Das Basis-Paket für 14,99€ (KI-Assistent, PDF-Export, 5 Belege) und das Komplett-Paket für 24,99€ (zusätzlich Bankanbindung, automatische Kategorisierung, 500 Belege)."
            },
            {
                question: "Ist das ein Abo oder einmalig?",
                answer: "Du zahlst einmalig pro Steuerjahr – kein Abo, keine versteckten Kosten. Wenn du z.B. 2023 und 2024 abgeben willst, kaufst du das Paket zweimal."
            },
            {
                question: "Was ist im kostenlosen Teil enthalten?",
                answer: "Kostenlos kannst du den kompletten Fragebogen ausfüllen und deine voraussichtliche Erstattung berechnen lassen. Erst für die Abgabe beim Finanzamt benötigst du ein Paket."
            },
            {
                question: "Was ist der Unterschied zwischen Basis und Komplett?",
                answer: "Das Komplett-Paket enthält die Bankanbindung per FinTS, wodurch deine Transaktionen automatisch importiert und per KI kategorisiert werden. Außerdem kannst du bis zu 500 statt nur 5 Belege hochladen."
            }
        ]
    },
    {
        name: "Banking & Transaktionen",
        icon: <Bank size={20} weight="fill" />,
        items: [
            {
                question: "Wie funktioniert die Bankanbindung?",
                answer: "StudyTax nutzt den FinTS-Standard – das gleiche sichere Verfahren wie dein Online-Banking. Du verbindest dein Konto, bestätigst per TAN, und deine Transaktionen werden automatisch importiert."
            },
            {
                question: "Welche Banken werden unterstützt?",
                answer: "Über 3.000 deutsche Banken werden unterstützt – von Sparkassen über Volksbanken bis zu Direktbanken wie ING, DKB oder N26."
            },
            {
                question: "Sind meine Bankdaten sicher?",
                answer: "Ja. Die Verbindung läuft über den verschlüsselten FinTS-Standard. Deine Zugangsdaten werden nur für die Verbindung verwendet und können optional verschlüsselt für spätere Aktualisierungen gespeichert werden."
            },
            {
                question: "Wie funktioniert die KI-Kategorisierung?",
                answer: "Nach dem Import deiner Transaktionen beantwortest du ein paar intelligente Fragen. Die KI schlägt dann automatisch Kategorien vor (z.B. Fahrtkosten, Arbeitsmittel, Versicherungen) und du bestätigst oder korrigierst sie."
            }
        ]
    },
    {
        name: "Belege & Dokumente",
        icon: <Receipt size={20} weight="fill" />,
        items: [
            {
                question: "Wie lade ich Belege hoch?",
                answer: "Du kannst Belege direkt mit der Kamera fotografieren oder aus deiner Fotomediathek hochladen. Die App erkennt automatisch Betrag, Datum und Händler."
            },
            {
                question: "Welche Dateiformate werden unterstützt?",
                answer: "Du kannst Fotos (JPG, PNG) und PDF-Dateien hochladen. Die KI analysiert den Inhalt und extrahiert die relevanten Informationen."
            },
            {
                question: "Wie viele Belege kann ich hochladen?",
                answer: "Mit dem Basis-Paket kannst du bis zu 5 Belege hochladen, mit dem Komplett-Paket bis zu 500. Ohne Paket ist der Upload nicht möglich."
            },
            {
                question: "Muss ich Belege ans Finanzamt schicken?",
                answer: "In der Regel nicht. Das Finanzamt kann Belege aber nachfordern. Bewahre sie daher mindestens bis zum Steuerbescheid auf – am besten digital in der App."
            }
        ]
    },
    {
        name: "KI-Assistent",
        icon: <Robot size={20} weight="fill" />,
        items: [
            {
                question: "Was kann der KI-Assistent?",
                answer: "Der KI-Assistent beantwortet deine Fragen zum deutschen Steuerrecht – von Werbungskosten über Sonderausgaben bis zu Steuervergünstigungen. Er erklärt alles verständlich und kennt sich besonders mit Studenten-Themen aus."
            },
            {
                question: "Ist das echte Steuerberatung?",
                answer: "Nein. Der KI-Assistent gibt allgemeine Informationen und Hilfestellungen, ersetzt aber keine individuelle Steuerberatung durch einen Steuerberater oder Lohnsteuerhilfeverein."
            },
            {
                question: "Werden meine Chat-Verläufe gespeichert?",
                answer: "Ja, deine Gespräche werden in deinem Konto gespeichert, damit du später darauf zugreifen kannst. Du kannst einzelne Chats jederzeit löschen."
            }
        ]
    },
    {
        name: "ELSTER & Abgabe",
        icon: <PaperPlaneTilt size={20} weight="fill" />,
        items: [
            {
                question: "Wie funktioniert die Abgabe beim Finanzamt?",
                answer: "StudyTax nutzt die offizielle ELSTER-Schnittstelle. Du prüfst deine Steuererklärung als PDF und sendest sie mit einem Klick ans Finanzamt. Die Übertragung ist verschlüsselt und rechtssicher."
            },
            {
                question: "Brauche ich ein ELSTER-Zertifikat?",
                answer: "Nein, du kannst deine Steuererklärung auch ohne eigenes ELSTER-Zertifikat abgeben. Optional kannst du aber auch dein eigenes Zertifikat von elster.de verwenden – das ist eine .pfx-Datei mit Passwort, die du einmalig in die App importierst."
            },
            {
                question: "Wie lange dauert es bis zum Steuerbescheid?",
                answer: "Nach der Abgabe erhältst du deinen Steuerbescheid in der Regel innerhalb von 4-8 Wochen per Post vom Finanzamt."
            }
        ]
    },
    {
        name: "Datenschutz & Sicherheit",
        icon: <ShieldCheck size={20} weight="fill" />,
        items: [
            {
                question: "Wo werden meine Daten gespeichert?",
                answer: "Alle Daten werden auf Servern in Deutschland gespeichert und unterliegen deutschem Datenschutzrecht (DSGVO)."
            },
            {
                question: "Wer hat Zugriff auf meine Daten?",
                answer: "Nur du. Deine Daten werden verschlüsselt übertragen und gespeichert. Wir geben keine Daten an Dritte zu Werbezwecken weiter."
            },
            {
                question: "Kann ich mein Konto und alle Daten löschen?",
                answer: "Ja. In den App-Einstellungen kannst du dein Konto vollständig löschen. Alle deine Daten werden dann unwiderruflich entfernt."
            },
            {
                question: "Nutzt ihr meine Daten für KI-Training?",
                answer: "Nein. Deine persönlichen Steuer- und Bankdaten werden nicht für das Training von KI-Modellen verwendet."
            }
        ]
    }
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors"
            >
                <span className="font-medium pr-4">{item.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <CaretDown size={20} className="text-gray-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (categoryIndex: number, itemIndex: number) => {
        const key = `${categoryIndex}-${itemIndex}`;
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
                <div key={category.name} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {category.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                    </div>
                    <div className="px-6">
                        {category.items.map((item, itemIndex) => (
                            <FAQAccordion
                                key={itemIndex}
                                item={item}
                                isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                                onToggle={() => toggleItem(categoryIndex, itemIndex)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
