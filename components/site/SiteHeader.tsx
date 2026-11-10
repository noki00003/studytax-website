import Link from "next/link";
import { Logo } from "@/components/logo";
import { StoreLink } from "@/components/site/StoreLink";
import { WEB_APP_URL, WEB_START } from "@/lib/web-start";

export function SiteHeader() {
    return (
        <header className="kopf">
            <div className="kopf-innen">
                <Link href="/" className="kopf-marke" aria-label="StudyTax, zur Startseite">
                    <Logo className="kopf-logo" />
                </Link>
                {WEB_START ? (
                    // Welcher Knopf steht, regelt das CSS (.wege-app, .wege-web).
                    <div className="kopf-wege">
                        <StoreLink className="kopf-store wege-app">App laden</StoreLink>
                        <a href={WEB_APP_URL} className="kopf-store wege-web">
                            Im Browser starten
                        </a>
                    </div>
                ) : (
                    <StoreLink className="kopf-store">App laden</StoreLink>
                )}
            </div>
        </header>
    );
}
