// Kontaktformular: die Seite ist statisch, das Formular schickt per fetch an
// das Prod-Backend (POST /v1/kontakt, backend/app/kontakt.py). Das Backend
// erlaubt nur die Origins studytax.de und www.studytax.de; die Vorschau-URL
// und localhost zeigen das Formular, das Absenden scheitert dort an CORS.
export const KONTAKT_URL =
    "https://studytax-backend-24316917407.europe-west3.run.app/v1/kontakt";

export const NACHRICHT_MAX = 5000;
