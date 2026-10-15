import Link from "next/link";
import { Logo } from "@/components/logo";
import { APP_STORE_URL } from "@/lib/app-store";

export function SiteHeader() {
    return (
        <header className="kopf">
            <div className="kopf-innen">
                <Link href="/" className="kopf-marke" aria-label="StudyTax, zur Startseite">
                    <Logo className="kopf-logo" showText={false} />
                    <span>StudyTax</span>
                </Link>
                {APP_STORE_URL !== null && (
                    <a href={APP_STORE_URL} className="kopf-store">
                        App laden
                    </a>
                )}
            </div>
        </header>
    );
}
