import Link from "next/link";

const LINKS = [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
    { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
    return (
        <footer className="fuss">
            <div className="fuss-innen">
                <nav aria-label="Rechtliches und Kontakt">
                    <ul className="fuss-links">
                        {LINKS.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href}>{l.label}</Link>
                            </li>
                        ))}
                        <li>
                            <a href="mailto:support@studytax.de">support@studytax.de</a>
                        </li>
                    </ul>
                </nav>
                <p className="fuss-satz">StudyTax ist eine Software. Sie ersetzt keine individuelle Beratung.</p>
            </div>
        </footer>
    );
}
