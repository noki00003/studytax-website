"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { KONTAKT_URL, NACHRICHT_MAX } from "@/lib/kontakt";

const DANKE =
    "Danke, deine Nachricht ist angekommen. Wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen.";
const FEHLER_NETZ =
    "Deine Nachricht konnte gerade nicht verschickt werden. Versuch es gleich noch einmal oder schreib an support@studytax.de.";

type Stand = "offen" | "sendet" | "fertig";

const feld =
    "w-full rounded-input border border-transparent bg-field px-4 py-[14px] text-[17px] leading-[22px] " +
    "text-ink focus:border-accent-border focus:bg-[var(--surface)] focus:outline-none";

export default function Kontakt() {
    const [email, setEmail] = useState("");
    const [nachricht, setNachricht] = useState("");
    const [website, setWebsite] = useState("");
    const [stand, setStand] = useState<Stand>("offen");
    const [fehler, setFehler] = useState<string | null>(null);

    async function absenden(e: FormEvent) {
        e.preventDefault();
        if (stand === "sendet") return;
        setStand("sendet");
        setFehler(null);
        try {
            const r = await fetch(KONTAKT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, nachricht, website }),
            });
            if (r.ok) {
                setStand("fertig");
                return;
            }
            const daten = await r.json().catch(() => null);
            setFehler(typeof daten?.detail === "string" ? daten.detail : FEHLER_NETZ);
        } catch {
            setFehler(FEHLER_NETZ);
        }
        setStand("offen");
    }

    return (
        <main className="recht recht-schmal">
            <div>
                <h1 className="gross recht-titel">Kontakt</h1>

                {stand === "fertig" ? (
                    <p className="rounded-karte bg-success-soft p-5 text-[17px] leading-[26px] text-ink" role="status">{DANKE}</p>
                ) : (
                    <form onSubmit={absenden} className="space-y-6" noValidate={false}>
                        <p className="text-[17px] leading-[26px] text-ink-soft">
                            Schreib uns eine Nachricht. Wir antworten an die E-Mail-Adresse, die du hier angibst.
                        </p>

                        <div>
                            <label htmlFor="email" className="mb-1 block text-[14px] font-semibold leading-[20px]">
                                Deine E-Mail-Adresse
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                maxLength={254}
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={feld}
                            />
                        </div>

                        <div>
                            <label htmlFor="nachricht" className="mb-1 block text-[14px] font-semibold leading-[20px]">
                                Deine Nachricht
                            </label>
                            <textarea
                                id="nachricht"
                                required
                                rows={8}
                                maxLength={NACHRICHT_MAX}
                                value={nachricht}
                                onChange={(e) => setNachricht(e.target.value)}
                                className={feld}
                            />
                        </div>

                        {/* Honigtopf: für Menschen unsichtbar, Bots füllen ihn aus. */}
                        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>

                        {fehler && (
                            <p className="rounded-input bg-error-soft p-4 text-[15px] leading-[22px] text-error" role="alert">{fehler}</p>
                        )}

                        <button
                            type="submit"
                            disabled={stand === "sendet"}
                            className="min-h-[56px] rounded-full bg-accent px-6 py-4 text-[17px] font-semibold leading-[22px] text-[var(--surface)] transition-colors hover:bg-accent-pressed disabled:opacity-60"
                        >
                            {stand === "sendet" ? "Wird gesendet …" : "Nachricht senden"}
                        </button>

                        <p className="text-[13px] leading-[18px] text-ink-faint">
                            Wir nutzen deine Angaben nur, um dir zu antworten. Mehr dazu in der{" "}
                            <Link href="/datenschutz" className="link">
                                Datenschutzerklärung
                            </Link>
                            .
                        </p>
                    </form>
                )}

                <div className="recht-zurueck">
                    <Link href="/" className="link">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
