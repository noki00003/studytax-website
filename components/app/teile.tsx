import type { ReactNode } from "react";
import type { Position } from "@/components/app/inhalte";

/*
 * Bausteine der App als HTML/CSS, in App-Maßen mit den hellen App-Tokens
 * (Styles in app/globals.css, Abschnitt „App-Ausschnitte“). Vorbilder in
 * frontend/src: ProgressHeader, StepHeader, OptionCard, PrimaryButton,
 * lstb/ScanKarte, FieldRenderer, ergebnis/ErgebnisSumme,
 * ergebnis/PositionZeile, abgabe/DokumentKarte.
 */

/** Schlichter Geräte-Umriss: der Bildschirm ist reines HTML und für Screenreader stumm. */
export function Telefon({ beschreibung, children }: { beschreibung: string; children: ReactNode }) {
    return (
        <div className="telefon" role="img" aria-label={beschreibung}>
            <div className="telefon-glas">
                <div className="app" aria-hidden="true">
                    {children}
                    <div className="app-insel" />
                    <div className="app-home" />
                </div>
            </div>
        </div>
    );
}

export function Statuszeile() {
    return (
        <div className="app-status">
            <span>9:41</span>
            <span className="app-status-icons">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                    <rect x="0" y="8" width="3" height="4" rx="1" />
                    <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                    <rect x="10" y="3" width="3" height="9" rx="1" />
                    <rect x="15" y="0" width="3" height="12" rx="1" />
                </svg>
                <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                    <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" opacity="0.4" />
                    <rect x="2" y="2" width="20" height="9" rx="2" fill="currentColor" />
                    <path d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" fill="currentColor" opacity="0.4" />
                </svg>
            </span>
        </div>
    );
}

/** Kopfzeile des Fragebogens: Pfeil, Gruppen-Label, Live-Pill, Faden. */
export function Fortschritt({ gruppe, pill, prozent }: { gruppe: string; pill?: string; prozent: number }) {
    return (
        <>
            <div className="app-kopf">
                <div className="app-kopf-seite">
                    <span className="app-zurueck">‹</span>
                </div>
                <span className="app-gruppe app-t-gruppenlabel">{gruppe}</span>
                <div className="app-kopf-rechts">{pill !== undefined && <span className="app-pill">{pill}</span>}</div>
            </div>
            <div className="app-spur">
                <div className="app-balken" style={{ width: `${prozent}%` }} />
            </div>
        </>
    );
}

export function Frage({ text }: { text: string }) {
    return (
        <div className="app-stepkopf">
            <div className="app-t-frage" lang="de">
                {text}
            </div>
        </div>
    );
}

export function Option({ label, gewaehlt = false }: { label: string; gewaehlt?: boolean }) {
    return (
        <div className={"app-option" + (gewaehlt ? " app-option-gewaehlt" : "")}>
            <span className="app-t-option">{label}</span>
        </div>
    );
}

export function Knopf({ label }: { label: string }) {
    return <div className="app-button">{label}</div>;
}

export function Feld({ label, wert, suffix }: { label: string; wert: string; suffix?: string }) {
    return (
        <div className="app-feld">
            <div className="app-t-feldlabel">{label}</div>
            <div className="app-feld-flaeche">
                <span>{wert}</span>
                {suffix !== undefined && <span className="app-feld-suffix">{suffix}</span>}
            </div>
        </div>
    );
}


export function Rechenweg({ positionen }: { positionen: Position[] }) {
    return (
        <div className="app-karte app-rechenweg">
            {positionen.map((p) => (
                <div
                    key={p.label}
                    className={"app-position" + (p.summe ? " app-position-summe" : "")}
                    style={p.kontext !== undefined ? { alignItems: "flex-start" } : undefined}
                >
                    <div>
                        <div className="app-position-label">
                            <span>{p.label}</span>
                            {p.betrag !== undefined && <span className="app-chevron">›</span>}
                        </div>
                        {p.kontext !== undefined && <div className="app-position-kontext">{p.kontext}</div>}
                    </div>
                    {p.betrag !== undefined && <span className="app-position-betrag">{p.betrag}</span>}
                </div>
            ))}
        </div>
    );
}

export function DokumentKarte({ titel }: { titel: string }) {
    return (
        <div className="app-karte app-dokument" style={{ boxShadow: "var(--schatten-option)" }}>
            <div className="app-blatt-huelle">
                <div className="app-blatt">
                    <span className="app-blatt-ecke" />
                    <span className="app-blatt-falz" />
                    <i style={{ width: 18 }} />
                    <i style={{ width: 26 }} />
                    <i style={{ width: 22 }} />
                    <i style={{ width: 14 }} />
                </div>
                <span className="app-siegel">PDF</span>
            </div>
            <div style={{ fontSize: 15, lineHeight: "20px", fontWeight: 600 }}>{titel}</div>
        </div>
    );
}
