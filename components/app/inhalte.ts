/*
 * Inhalte der App-Ausschnitte auf der Startseite. Wortlaute aus
 * fragebogen/untergruppen/*\/2025.yaml und frontend/src, Zahlen aus dem
 * Dev-Preset `studi_bachelor` (backend/app/presets.py), so wie der Server
 * sie berechnet. Der Arbeitgeber heißt hier „Muster Logistik GmbH“; an der
 * Rechnung ändert der Name nichts. Ändern sich Texte oder Zahlen der App,
 * hier nachziehen.
 */

export const BEISPIEL = "Die Zahlen sind ein Beispiel: ein Bachelorstudium mit Werkstudentenjob im Steuerjahr 2025.";

export const JOB = {
    label: "Job",
    frage: "Was für ein Job war das bei Muster Logistik GmbH?",
    optionen: [
        "Werkstudentenjob",
        "Minijob (bis 556 € im Monat)",
        "Teilzeit",
        "Vollzeit",
        "Praktikum im Studium",
        "Freiwilliges Praktikum",
        "Etwas anderes",
    ],
    gewaehlt: 0,
};

export type Feld = { label: string; wert?: string; suffix: string };

export const LSTB = {
    label: "Lohnsteuerbescheinigung",
    frage: "Was steht auf deiner Lohnsteuer­bescheinigung 2025 von Muster Logistik GmbH? Leere Zeilen lässt du leer.",
    felder: [
        { label: "Steuerklasse", wert: "I", suffix: "▾" },
        { label: "Zeile 3: Bruttoarbeitslohn", wert: "12.400,00", suffix: "€" },
        { label: "Zeile 4: Einbehaltene Lohnsteuer", wert: "290,00", suffix: "€" },
        { label: "Zeile 17: Steuerfreier Zuschuss zu Fahrten oder Jobticket", suffix: "€" },
        { label: "Zeile 18: Pauschal versteuerter Fahrtzuschuss", suffix: "€" },
        { label: "Zeile 20: Steuerfreies Essensgeld für Fahrten im Job", suffix: "€" },
        { label: "Zeile 22a: Rentenversicherung, Arbeitgeber", wert: "1.153,00", suffix: "€" },
        { label: "Zeile 23a: Rentenversicherung, dein Anteil", wert: "1.153,00", suffix: "€" },
        { label: "Zeile 25: Krankenversicherung, dein Beitrag", wert: "1.060,00", suffix: "€" },
        { label: "Zeile 26: Pflegeversicherung, dein Beitrag", wert: "298,00", suffix: "€" },
        { label: "Zeile 27: Arbeitslosenversicherung, dein Beitrag", wert: "161,00", suffix: "€" },
    ] as Feld[],
    pill: "290 €",
};

export type Position = { label: string; betrag?: string; summe?: boolean; kontext?: string };

export const RECHENWEG: Position[] = [
    { label: "Summe deiner Einkünfte", betrag: "11.170 €", summe: true },
    { label: "Versicherungen & Vorsorge", betrag: "−2.672 €" },
    { label: "Sonderausgaben", betrag: "−265 €" },
    { label: "Zu versteuerndes Einkommen", betrag: "8.233 €", summe: true },
    { label: "Deine Einkommensteuer", betrag: "0 €", summe: true },
    { label: "Schon gezahlte Steuern", betrag: "290 €" },
    { label: "Deine Erstattung", betrag: "290 €", summe: true },
    {
        label: "Kein Verlustvortrag für kommende Jahre",
        kontext:
            "Kosten einer Erstausbildung zählen als Sonderausgaben. Sie wirken nur in diesem Jahr und lassen sich nicht für später festschreiben.",
    },
];
