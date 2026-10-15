import { DokumentKarte, Feld, Fortschritt, Frage, Knopf, Option, Rechenweg, Statuszeile, Telefon } from "@/components/app/teile";
import { JOB, LSTB, RECHENWEG } from "@/components/app/inhalte";

/*
 * Die App-Bildschirme der Startseite als HTML. Inhalte aus
 * components/app/inhalte.ts.
 */

export function JobBildschirm() {
    return (
        <Telefon beschreibung="App-Bildschirm: die Frage „Was für ein Job war das bei Muster Logistik GmbH?“ mit sieben Antworten, gewählt ist Werkstudentenjob.">
            <Statuszeile />
            <Fortschritt gruppe={JOB.label} prozent={34} />
            <div className="app-buehne">
                <Frage text={JOB.frage} />
                <div>
                    {JOB.optionen.map((o, i) => (
                        <Option key={o} label={o} gewaehlt={i === JOB.gewaehlt} />
                    ))}
                </div>
            </div>
        </Telefon>
    );
}

function LohnsteuerInhalt() {
    return (
        <>
            <Statuszeile />
            <Fortschritt gruppe={LSTB.label} pill={LSTB.pill} prozent={52} />
            <div className="app-buehne app-buehne-oben">
                <Frage text={LSTB.frage} />
                <div className="app-leeren">Felder leeren</div>
                <div className="app-scan app-scan-fertig">
                    <span style={{ fontSize: 17 }}>✓</span>
                    <span>8 Werte übernommen</span>
                </div>
                {LSTB.felder.map((f) => (
                    <Feld key={f.label} label={f.label} wert={f.wert ?? ""} suffix={f.suffix} />
                ))}
            </div>
        </>
    );
}

export function LohnsteuerBildschirm() {
    return (
        <Telefon beschreibung="App-Bildschirm: Werte der Lohnsteuerbescheinigung. Acht Werte sind vom Foto übernommen, oben rechts steht die voraussichtliche Erstattung von 290 Euro.">
            <LohnsteuerInhalt />
        </Telefon>
    );
}

export function ErgebnisBildschirm() {
    return (
        <Telefon beschreibung="App-Bildschirm: voraussichtliche Erstattung 2025 von 290 Euro mit dem Rechenweg von der Summe der Einkünfte bis zur Erstattung.">
            <LohnsteuerInhalt />
            <div className="app-scrim" />
            <div className="app-sheet">
                <div className="app-griff">
                    <span />
                </div>
                <div className="app-sheet-inhalt">
                    <div style={{ paddingTop: 8, marginBottom: 20 }}>
                        <div className="app-summe-label">
                            <span className="app-t-gruppenlabel">Voraussichtliche Erstattung</span>
                            <span className="app-t-gruppenlabel" style={{ color: "var(--ink-faint)" }}>
                                2025
                            </span>
                        </div>
                        <div className="app-linie" />
                        <div className="app-betrag">290 €</div>
                        <div className="app-hinweisleiste">
                            <span>1 Hinweis zur Zahl</span>
                            <span className="app-chevron">›</span>
                        </div>
                    </div>
                    <div className="app-t-feldlabel" style={{ marginBottom: 12 }}>
                        So kommt das zustande
                    </div>
                    <Rechenweg positionen={RECHENWEG} />
                    <p className="app-t-optionhilfe app-fussnote">
                        Deine Erstattung ist bereits maximal. Weitere Ausgaben erhöhen sie dieses Jahr nicht.
                    </p>
                </div>
            </div>
        </Telefon>
    );
}

export function AbgabeBildschirm() {
    return (
        <Telefon beschreibung="App-Bildschirm vor der Abgabe: Prüf deine Erklärung, das PDF der Steuererklärung 2025, die Bestätigung und der Knopf Jetzt verbindlich abgeben.">
            <Statuszeile />
            <div className="app-kopf" style={{ justifyContent: "flex-start" }}>
                <span className="app-zurueck">‹</span>
            </div>
            <div className="app-inhalt">
                <div className="app-t-frage" style={{ marginBottom: 12 }}>
                    Prüf deine Erklärung
                </div>
                <p className="app-t-hilfe" style={{ marginBottom: 20 }}>
                    Das PDF ist genau das, was ans Finanzamt geht. Schau es dir in Ruhe an.
                </p>
                <div className="app-t-gruppenlabel" style={{ marginBottom: 12 }}>
                    Deine Dokumente
                </div>
                <div className="app-dokumente">
                    <DokumentKarte titel="Steuererklärung 2025" />
                </div>
                <div className="app-bestaetigung">
                    <p className="app-t-hilfe" style={{ color: "var(--ink)" }}>
                        Ich gebe meine Steuererklärung 2025 so frei, wie sie im PDF steht, und
                        beauftrage StudyTax, sie über ELSTER an mein Finanzamt zu übermitteln.
                    </p>
                </div>
                <div style={{ marginTop: 12 }}>
                    <Knopf label="Jetzt verbindlich abgeben" />
                </div>
                <p className="app-cta-fussnote">Verschlüsselt und amtlich signiert an dein Finanzamt.</p>
            </div>
        </Telefon>
    );
}
