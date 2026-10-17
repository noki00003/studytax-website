"use client";

import { useEffect, useState, type ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/app-store";

/**
 * TikToks eingebauter Browser blockiert Links in den App Store („Aktion kann
 * nicht ausgeführt werden“). Dort versucht der Link, über `x-safari-https`
 * (ab iOS 17) nach Safari auszubrechen, und `mitHinweis` erklärt den Weg von
 * Hand. Außerhalb von TikTok bleibt alles beim normalen Link.
 */
function useTikTokAufIos(): boolean {
    const [treffer, setTreffer] = useState(false);
    useEffect(() => {
        const ua = navigator.userAgent;
        setTreffer(/iPhone|iPad|iPod/.test(ua) && /musical_ly|BytedanceWebview|TikTok/i.test(ua));
    }, []);
    return treffer;
}

export function StoreLink({
    className,
    children,
    mitHinweis,
}: {
    className: string;
    children: ReactNode;
    mitHinweis?: boolean;
}) {
    const tiktok = useTikTokAufIos();
    if (APP_STORE_URL === null) return null;
    const href = tiktok ? APP_STORE_URL.replace(/^https:/, "x-safari-https:") : APP_STORE_URL;
    return (
        <>
            <a href={href} className={className}>
                {children}
            </a>
            {mitHinweis && tiktok && (
                <p className="store-hinweis">
                    In TikTok öffnet sich der App Store nicht. Tippe oben rechts auf ··· und dann auf „Im Browser
                    öffnen“.
                </p>
            )}
        </>
    );
}
