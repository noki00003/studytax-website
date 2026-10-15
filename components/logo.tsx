/**
 * Zeichen „Kachel“ (Logo-Runde 7, Kachel V1): drei Felder in Tinte, der Punkt
 * in Terrakotta. Pfade auf dem 1024er-Raster der App-Icons, hier auf das
 * Zeichen selbst zugeschnitten. Farben aus den Tokens in globals.css.
 */
export function Logo({ className }: { className?: string }) {
    return (
        <svg viewBox="224 224 576 576" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <path
                fill="var(--ink)"
                d="M224 224H488V488H224ZM536 224C681.8 224 800 342.2 800 488H536ZM224 536H488V800C342.2 800 224 681.8 224 536Z"
            />
            <path
                fill="var(--accent)"
                d="M800 668C800 740.9 740.9 800 668 800C595.1 800 536 740.9 536 668C536 595.1 595.1 536 668 536C740.9 536 800 595.1 800 668Z"
            />
        </svg>
    );
}
