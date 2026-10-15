# StudyTax Website

Website studytax.de: Startseite und Rechtstexte (Impressum, Datenschutz,
AGB). Next.js als statischer Export, gehostet auf Firebase Hosting im
Projekt `studytax-backend` (Site `studytax-backend`). Kein Server-Teil,
keine Cookies, kein Tracking.

- Rechtstexte: `content/legal/*.md`, Stand je Seite in
  `app/<seite>/page.tsx` (`stand="…"`).
- App-Store-Link: `lib/app-store.ts`; solange er `null` ist, zeigt die
  Seite „Bald im App Store“ statt eines Store-Knopfs.
- Die Website ist nur hell. Farben, Schriftgrößen und alle Stile in
  `app/globals.css` (Tailwind nur noch für das Kontaktformular); Farben
  aus den hellen App-Tokens (`frontend/src/theme`). Keine Verläufe, kein
  Glow, keine 3D-Effekte; Bewegung nur als sanftes Einblenden beim
  Reinscrollen, aus bei reduzierter Bewegung und ohne JavaScript.
- Schriften selbst gehostet in `app/fonts/` (OFL, Einbindung in
  `lib/schriften.ts`): Newsreader für die großen Zeilen, Mona Sans für
  den Rest.
- Startseite: `components/start/Abschnitte.tsx` (Kopf, drei Abschnitte zur
  App, Preis, Daten, Grenzen, FAQ), Einblenden in `Einblenden.tsx`.
  Texte: ganze, normale Sätze, Überschrift und Unterzeile je höchstens ein
  Satz, keine Slogan-Fragmente, keine Gedankenstriche; Preis nur wie AGB
  Ziffer 8, Grenzen nur wie AGB Ziffer 4.
- Die App-Ausschnitte sind Nachbauten in HTML, keine Screenshots:
  Bausteine in `components/app/teile.tsx`, Bildschirme in
  `Bildschirme.tsx`, Wortlaute und Zahlen in `inhalte.ts` (aus den YAMLs,
  `frontend/src` und dem Dev-Preset `studi_bachelor`). Ändern sich Texte
  oder Look der App, dort nachziehen.
- Hosting-Konfiguration: `firebase.json` (saubere URLs ohne `.html`,
  Sicherheits-Header), Projekt in `.firebaserc`.

## Entwickeln und bauen

```bash
npm install
npm run dev      # http://localhost:4000
npm run build    # statischer Export nach out/
```

Lokal mit den Hosting-Regeln testen (Port 5000):

```bash
npx firebase-tools emulators:start --only hosting
```

## Deploy

Firebase-CLI ohne globale Installation über `npx firebase-tools`; Login
einmalig mit `npx firebase-tools login`. Vor jedem Deploy `npm run build`.
Das Projekt immer mit `--project studytax-backend` angeben, sonst greift
die CLI unter Umständen ein anderes Projekt.

**Vorschau** (eigene URL, läuft nach 30 Tagen ab, berührt die Live-Seite
nicht):

```bash
npx firebase-tools hosting:channel:deploy vorschau --expires 30d \
  --project studytax-backend
```

**Live** (studytax.de, sobald keine `[OFFEN: …]`-Markierungen mehr in
`content/legal/` stehen):

```bash
npx firebase-tools deploy --only hosting --project studytax-backend
```

## Domain

studytax.de und www.studytax.de (leitet auf studytax.de weiter) sind an
die Hosting-Site gehängt. Die Web-Einträge (A für `@`, CNAME für `www`)
zeigen erst nach dem ersten Live-Deploy auf Firebase. Die Mail-Einträge
(MX, `send`, `resend._domainkey`) gehören zu Google Workspace und Resend
und bleiben unberührt.
