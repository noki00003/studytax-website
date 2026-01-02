# StudyTax Website

Landing Page für die StudyTax Steuer-App.

## Projekt-Setup

Das Projekt wurde mit Next.js 15, TypeScript und Tailwind CSS aufgesetzt.

## Development

```bash
# Development Server starten
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start

# Linting
npm run lint
```

Der Development Server läuft auf [http://localhost:3000](http://localhost:3000).

## Projekt-Struktur

```
studytax_website/
├── app/                    # Next.js App Directory
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global Styles
├── public/                # Static Assets (Bilder, etc.)
├── WEBSITE_CONTENT_PLAN.md # Content-Plan für die Website
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Domain-Verbindung (Squarespace)

Sobald die Website fertig ist:

1. **Vercel Deployment**
   - Projekt auf GitHub pushen
   - Mit Vercel verbinden
   - Automatisches Deployment aktivieren

2. **Domain-Verbindung**
   - In Vercel: Custom Domain hinzufügen (StudyTax.de)
   - DNS Records von Vercel kopieren
   - In Squarespace DNS Settings eintragen:
     - A Record: `@` → Vercel IP
     - CNAME: `www` → Vercel Domain

3. **SSL-Zertifikat**
   - Wird automatisch von Vercel eingerichtet

## Nächste Schritte

- [ ] Design implementieren (siehe WEBSITE_CONTENT_PLAN.md)
- [ ] Screenshots aus der App hinzufügen
- [ ] Legal Pages erstellen (Impressum, Datenschutz)
- [ ] SEO Optimierung
- [ ] Vercel Deployment
- [ ] Domain verbinden

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (geplant)
- **Domain**: StudyTax.de (via Squarespace)
