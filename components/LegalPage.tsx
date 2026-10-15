import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";

interface LegalPageProps {
    title: string;
    content: string;
    /** Fester Stand des Rechtstexts (z. B. "Oktober 2026, Version 1.0"); ohne Angabe keine Zeile. */
    stand?: string;
}

/** Text einer Überschrift, um Anker wie `#ziffer-4` aus „4. …“ zu bilden. */
function text(children: ReactNode): string {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) return children.map(text).join("");
    return "";
}

function anker(children: ReactNode): string | undefined {
    const treffer = /^(\d+)\.\s/.exec(text(children));
    return treffer ? `ziffer-${treffer[1]}` : undefined;
}

/** Rechtstexte: Inhalt aus content/legal/*.md, Gestaltung in app/globals.css (.recht). */
export function LegalPage({ title, content, stand }: LegalPageProps) {
    return (
        <main className="recht">
            <h1 className="gross recht-titel">{title}</h1>

            <div className="recht-text">
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h2>{children}</h2>,
                        h2: ({ children }) => <h2 id={anker(children)}>{children}</h2>,
                        a: ({ href, children }) =>
                            href?.startsWith("/") ? (
                                <Link href={href} className="link">
                                    {children}
                                </Link>
                            ) : (
                                <a href={href} className="link" target="_blank" rel="noopener noreferrer">
                                    {children}
                                </a>
                            ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>

            {stand && <p className="recht-stand">Stand: {stand}</p>}

            <div className="recht-zurueck">
                <Link href="/" className="link">
                    Zurück zur Startseite
                </Link>
            </div>
        </main>
    );
}
