"use client";

import { useEffect } from "react";

/**
 * Setzt `data-sichtbar` an Elementen mit `data-einblenden`, sobald sie ins
 * Bild kommen (einmal). Das CSS blendet sie dann sanft ein; ohne JavaScript
 * und mit reduzierter Bewegung ist alles sofort sichtbar.
 */
export function Einblenden() {
    useEffect(() => {
        const elemente = Array.from(document.querySelectorAll<HTMLElement>("[data-einblenden]"));
        if (!("IntersectionObserver" in window)) {
            elemente.forEach((e) => e.setAttribute("data-sichtbar", ""));
            return;
        }
        const io = new IntersectionObserver(
            (eintraege) => {
                for (const e of eintraege) {
                    if (!e.isIntersecting) continue;
                    e.target.setAttribute("data-sichtbar", "");
                    io.unobserve(e.target);
                }
            },
            { rootMargin: "0px 0px -8% 0px" },
        );
        elemente.forEach((e) => io.observe(e));
        return () => io.disconnect();
    }, []);
    return null;
}
