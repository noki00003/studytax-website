import Link from "next/link";
import { Logo } from "@/components/logo";
import { StoreLink } from "@/components/site/StoreLink";

export function SiteHeader() {
    return (
        <header className="kopf">
            <div className="kopf-innen">
                <Link href="/" className="kopf-marke" aria-label="StudyTax, zur Startseite">
                    <Logo className="kopf-logo" />
                </Link>
                <StoreLink className="kopf-store">App laden</StoreLink>
            </div>
        </header>
    );
}
