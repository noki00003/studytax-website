import { Daten, Fragen, Funktionen, Grenzen, Kopf, Preis, Schluss } from "@/components/start/Abschnitte";
import { Einblenden } from "@/components/start/Einblenden";

export default function Startseite() {
    return (
        <main>
            <Kopf />
            <Funktionen />
            <Preis />
            <Daten />
            <Grenzen />
            <Fragen />
            <Schluss />
            <Einblenden />
        </main>
    );
}
