// StudyTax im Browser (app.studytax.de). Der Einstieg für App Store und
// Browser und der Preis-Satz nach AGB 1.2 erscheinen nur in einem Build mit
// NEXT_PUBLIC_WEB_START=1; ohne den Schalter baut die Website wie vorher.
// Web-App und neue Rechtstexte gehen nur gemeinsam und nur auf Noahs Go live.
export const WEB_START = process.env.NEXT_PUBLIC_WEB_START === "1";

export const WEB_APP_URL = "https://app.studytax.de";

// Läuft im Kopf vor dem ersten Bild: `js` für das Einblenden, `ios` auf
// iPhone und iPad (iPadOS meldet sich als Mac mit Touch), damit das CSS dort
// den App Store nach vorn stellt und sonst den Browser; `tiktok` im
// TikTok-Browser außerhalb von iOS für den Hinweis unter „Im Browser
// starten“ (auf iOS erklärt das `StoreLink`).
export const KOPF_SKRIPT = WEB_START
    ? "var d=document.documentElement,u=navigator.userAgent;d.classList.add('js');" +
      "if(/iPhone|iPad|iPod/.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1))d.classList.add('ios');" +
      "if(!/iPhone|iPad|iPod/.test(u)&&/musical_ly|BytedanceWebview|TikTok/i.test(u))d.classList.add('tiktok')"
    : "document.documentElement.classList.add('js')";
