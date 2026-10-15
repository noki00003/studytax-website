import Link from "next/link";
import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/app-store";
import { BEISPIEL } from "@/components/app/inhalte";
import {
    AbgabeBildschirm,
    ErgebnisBildschirm,
    JobBildschirm,
    LohnsteuerBildschirm,
} from "@/components/app/Bildschirme";

/*
 * Die Abschnitte der Startseite. Wortlaute gegen die App, die AGB (Ziffer 4
 * und 8) und die Datenschutzerklärung geprüft; Regeln für die Texte in
 * README.md.
 */

/** Store-Knopf: solange kein Link da ist, ein ruhiger Hinweis ohne Link. */
export function StoreKnopf() {
    if (APP_STORE_URL === null) {
        return (
            <span className="store store-bald">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="5" y="1.75" width="10" height="16.5" rx="2.6" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="8.2" y="3.7" width="3.6" height="1.2" rx="0.6" fill="currentColor" />
                </svg>
                Bald im App Store
            </span>
        );
    }
    return (
        <a href={APP_STORE_URL} className="store store-link">
            Im App Store laden
        </a>
    );
}

/** Fläche für einen App-Ausschnitt, mit optionaler Zeile darunter. */
function Buehne({
    children,
    notiz,
    sofort,
    zeigen,
}: {
    children: ReactNode;
    notiz?: string;
    sofort?: boolean;
    /** Nur den oberen Teil des Bildschirms zeigen, bis zu dieser Höhe in App-Pixeln. */
    zeigen?: number;
}) {
    return (
        <figure className="buehne-huelle" data-einblenden={sofort ? undefined : ""}>
            <div
                className={"buehne" + (zeigen !== undefined ? " buehne-kurz" : "")}
                style={zeigen !== undefined ? { ["--zeigen" as string]: `${zeigen}px` } : undefined}
            >
                {children}
            </div>
            {notiz !== undefined && <figcaption className="notiz">{notiz}</figcaption>}
        </figure>
    );
}

export function Kopf() {
    return (
        <section className="start" aria-labelledby="start-titel">
            <div className="innen start-raster">
                <div className="start-text">
                    <h1 id="start-titel" className="titel-1">
                        Mach deine Steuererklärung fürs Studium auf dem iPhone.
                    </h1>
                    <p className="lead">
                        Du beantwortest Fragen zu Studium und Job, und am Ende geht deine Erklärung direkt an dein
                        Finanzamt.
                    </p>
                    <div className="start-knopf">
                        <StoreKnopf />
                    </div>
                </div>
                <Buehne sofort>
                    <JobBildschirm />
                </Buehne>
            </div>
        </section>
    );
}

const FUNKTIONEN: { id: string; titel: string; satz: string; bild: ReactNode; notiz?: string; zeigen?: number }[] = [
    {
        id: "foto",
        titel: "Deine Lohnsteuer\u00ADbescheinigung musst du nicht abtippen, ein Foto reicht.",
        satz: "Die App liest die Werte aus, und du prüfst sie, bevor du weitermachst.",
        bild: <LohnsteuerBildschirm />,
        notiz: BEISPIEL,
    },
    {
        id: "erstattung",
        titel: "Deine voraussichtliche Erstattung siehst du schon beim Ausfüllen.",
        satz: "Tippst du oben auf den Betrag, zeigt dir die App Schritt für Schritt, wie er zustande kommt.",
        bild: <ErgebnisBildschirm />,
        notiz: BEISPIEL,
    },
    {
        id: "abgabe",
        titel: "Wenn alles stimmt, gibst du deine Erklärung direkt in der App ab.",
        satz: "Sie geht über ELSTER an dein Finanzamt, ein eigenes ELSTER-Konto brauchst du dafür nicht.",
        bild: <AbgabeBildschirm />,
        zeigen: 690,
    },
];

export function Funktionen() {
    return (
        <>
            {FUNKTIONEN.map((f) => (
                <section key={f.id} className="abschnitt" aria-labelledby={`${f.id}-titel`}>
                    <div className="innen raster">
                        <div className="raster-text" data-einblenden="">
                            <h2 id={`${f.id}-titel`} className="titel-2">
                                {f.titel}
                            </h2>
                            <p className="lead">{f.satz}</p>
                        </div>
                        <Buehne notiz={f.notiz} zeigen={f.zeigen}>
                            {f.bild}
                        </Buehne>
                    </div>
                </section>
            ))}
        </>
    );
}

export function Preis() {
    return (
        <section className="abschnitt abschnitt-ton" aria-labelledby="preis-titel">
            <div className="innen geteilt" data-einblenden="">
                <h2 id="preis-titel" className="titel-2">
                    Die App ist kostenlos, nur für die Abgabe kann ein einmaliger Preis anfallen.
                </h2>
                <div className="rechts">
                    <p className="lead">
                        Wie hoch er ist, hängt von deiner voraussichtlichen Erstattung ab, und bei keiner oder einer
                        kleinen Erstattung gibst du kostenlos ab.
                    </p>
                    <p className="klein">
                        Ein Abo gibt es nicht, und den Preis siehst du in der App, bevor du kaufst. Mehr dazu steht in{" "}
                        <Link href="/agb#ziffer-8" className="link">
                            Ziffer 8 der AGB
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}

const DATEN = [
    "Wir nutzen deine Daten, um deine Erklärung zu erstellen und an dein Finanzamt zu übermitteln.",
    "Wir zeigen keine Werbung und verkaufen keine Daten.",
    "Weder die App noch diese Website verwenden Tracking.",
    "Mit deinen Daten trainieren wir keine KI-Modelle.",
    "Du kannst dein Konto jederzeit in der App löschen.",
];

export function Daten() {
    return (
        <section className="abschnitt abschnitt-offen" aria-labelledby="daten-titel">
            <div className="innen geteilt" data-einblenden="">
                <h2 id="daten-titel" className="titel-2">
                    Deine Steuererklärung speichern wir in Frankfurt am Main.
                </h2>
                <div className="rechts">
                    <ul className="liste">
                        {DATEN.map((d) => (
                            <li key={d}>{d}</li>
                        ))}
                    </ul>
                    <p className="klein">
                        <Link href="/datenschutz" className="link">
                            Datenschutzerklärung lesen
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Grenzen() {
    return (
        <section className="abschnitt abschnitt-knapp" aria-label="Was StudyTax noch nicht kann">
            <div className="innen geteilt" data-einblenden="">
                <div aria-hidden="true" />
                <p className="grenzen">
                    Welche Fälle StudyTax noch nicht bearbeiten kann, etwa eine Ehe oder eine Selbständigkeit, steht in{" "}
                    <Link href="/agb#ziffer-4" className="link">
                        Ziffer 4 unserer AGB
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}

const FAQ: { frage: string; antwort: string }[] = [
    {
        frage: "Berät mich StudyTax persönlich?",
        antwort:
            "Nein. StudyTax ist eine Software und ersetzt keine individuelle Beratung. Bist du unsicher, wie dein Fall zu behandeln ist, wende dich an eine Steuerberaterin, einen Steuerberater oder einen Lohnsteuerhilfeverein.",
    },
    {
        frage: "Brauche ich ein ELSTER-Konto?",
        antwort:
            "Nein. StudyTax übermittelt deine Erklärung in deinem Auftrag mit einem eigenen Zertifikat. Dafür prüft die App vor deiner ersten Abgabe einmal deine Identität: Du fotografierst deinen Personalausweis oder Reisepass.",
    },
    {
        frage: "Für welche Steuerjahre geht das?",
        antwort:
            "Für 2023, 2024 und 2025. Eine freiwillige Erklärung kannst du bis zum Ende des vierten Jahres nach dem Steuerjahr abgeben, für 2023 also bis Ende 2027. Bist du zur Abgabe verpflichtet, gilt die gesetzliche Frist.",
    },
    {
        frage: "Muss ich Belege hochladen?",
        antwort:
            "Nein. Die App fragt nach Beträgen, Belege lädst du nicht hoch. Bewahr sie aber auf, denn das Finanzamt kann sie anfordern.",
    },
    {
        frage: "Wie bekomme ich meinen Steuerbescheid?",
        antwort:
            "Den Bescheid schickt dir das Finanzamt direkt. Über deine Steuer entscheidet allein das Finanzamt, die Erstattung in der App ist eine Schätzung.",
    },
    {
        frage: "Kann ich nach der Abgabe noch etwas ändern?",
        antwort:
            "In der App nicht mehr. Willst du etwas korrigieren oder ergänzen, wendest du dich direkt an dein Finanzamt: vor dem Bescheid formlos, danach mit einem Einspruch innerhalb eines Monats.",
    },
];

export function Fragen() {
    return (
        <section className="abschnitt abschnitt-ton" aria-labelledby="fragen-titel">
            <div className="innen geteilt">
                <h2 id="fragen-titel" className="titel-2" data-einblenden="">
                    Häufige Fragen
                </h2>
                <div className="faq rechts">
                    {FAQ.map((f) => (
                        <details key={f.frage}>
                            <summary>
                                <span>{f.frage}</span>
                                <span className="faq-zeichen" aria-hidden="true" />
                            </summary>
                            <p className="faq-antwort">{f.antwort}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Schluss mit Store-Knopf, erst sichtbar, wenn die App im Store steht. */
export function Schluss() {
    if (APP_STORE_URL === null) return null;
    return (
        <section className="abschnitt" aria-labelledby="schluss-titel">
            <div className="innen schmal schluss" data-einblenden="">
                <h2 id="schluss-titel" className="titel-2">
                    Lade StudyTax aus dem App Store auf dein iPhone.
                </h2>
                <StoreKnopf />
            </div>
        </section>
    );
}
