# Konkrete Änderungsvorschläge Datenschutzerklärung

Basierend auf Vergleich mit Taxfix + Analyse unserer tatsächlichen Implementierung.

---

## 1. NEUER ABSCHNITT: Einleitung (vor Abschnitt 1)

**Problem:** Wir springen direkt in "Verantwortlicher". Taxfix hat eine freundliche Einleitung.

**Konkrete Änderung:** Neuen Einleitungsabsatz vor Abschnitt 1 einfügen:

> StudyTax respektiert Ihre Privatsphäre und ist dem Schutz Ihrer personenbezogenen Daten verpflichtet. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, warum wir sie verarbeiten und welche Rechte Sie haben. Sie gilt für die Nutzung unserer App für iOS (verfügbar im Apple App Store) sowie unserer Website studytax.de.

---

## 2. NEUER ABSCHNITT: Rechtsgrundlagen-Übersicht (nach Abschnitt 2)

**Problem:** Rechtsgrundlagen werden bei uns nur bei jedem einzelnen Punkt genannt, ohne Gesamtübersicht.

**Konkrete Änderung:** Neuen Abschnitt "2a. Rechtsgrundlagen" einfügen mit den 4 relevanten Grundlagen:

1. **Vertragserfüllung** (Art. 6 Abs. 1 lit. b DSGVO) — z.B. Benutzerkonto, Steuererklärung
2. **Einwilligung** (Art. 6 Abs. 1 lit. a DSGVO) — z.B. Bankanbindung, Chat, Belege. Jederzeit widerrufbar.
3. **Berechtigte Interessen** (Art. 6 Abs. 1 lit. f DSGVO) — z.B. IT-Sicherheit, Produktverbesserung, Fehleranalyse
4. **Rechtliche Verpflichtung** (Art. 6 Abs. 1 lit. c DSGVO) — z.B. steuerliche Aufbewahrungspflichten (§ 147 AO)

---

## 3. NEUER ABSCHNITT: App-Berechtigungen (nach Abschnitt 2)

**Problem:** Fehlt komplett bei uns. Taxfix hat das ausführlich.

**Konkrete Änderung:** Neuen Abschnitt einfügen, basierend auf unserer tatsächlichen app.json:

### iOS:
- **Kamera**: "StudyTax braucht Zugriff auf die Kamera, um Belege zu scannen und zu erfassen." Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
- **Fotos**: "StudyTax braucht Zugriff auf deine Fotos, um vorhandene Belegbilder auszuwählen." Wird genutzt für Belege, Chat-Bildupload und Identitätsnachweis. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Fotos speichern**: "StudyTax kann Belegfotos in deiner Mediathek speichern." Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Face ID**: "StudyTax verwendet Face ID, um Sie sicher und schnell anzumelden." Biometrische Daten verbleiben auf dem Gerät. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Mikrofon**: "StudyTax braucht Zugriff auf das Mikrofon, um Steuerfragen per Sprache aufzunehmen." Audioaufnahmen werden zur Transkription an den Server gesendet und danach gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Push-Benachrichtigungen**: "StudyTax sendet dir Benachrichtigungen zu wichtigen Steuer-Updates und Fristen." Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.

### Android:
Gleiche Berechtigungen (USE_BIOMETRIC, CAMERA, READ_MEDIA_IMAGES, POST_NOTIFICATIONS, RECORD_AUDIO). Alle widerrufbar in den Geräteeinstellungen.

---

## 4. ERWEITERUNG: Abschnitt 3.3 Steuerliche Daten — detaillierter + sensible Daten ergänzen

**Problem:** Unsere Beschreibung ist vage ("Fragebogen-Antworten zu Einkommen, Ausgaben..."). Außerdem fehlen Konfession/Kirchensteuer, Behinderung, Pflege als sensible Daten.

**Konkrete Änderung:**

Die Datenliste erweitern zu:

> **Daten:** Anrede, Name, Vorname, Geburtsdatum, Anschrift, Steueridentifikationsnummer, Bankverbindung (IBAN), Religionszugehörigkeit, Familienstand, Angaben zur Lohnsteuerbescheinigung (Bruttolohn, gezahlte Steuern, Steuerklasse), Werbungskosten (Arbeitsmittel, Fachliteratur, Bewerbungskosten, Homeoffice, Fahrtkosten), Einkünfte aus selbstständiger Tätigkeit, ehrenamtliche Tätigkeiten, Lohnersatzleistungen, Studienkosten (Erst- und Zweitstudium), Versicherungsbeiträge, Angaben zu Kindern (Name, Geburtsdatum, Kindergeld), Kapitalerträge und Kryptowährungen, Spenden, außergewöhnliche Belastungen (Krankheitskosten, Behinderung, Pflege), haushaltsnahe Dienstleistungen und Handwerkerleistungen.

Den Absatz "Besondere Kategorien (Art. 9 DSGVO)" erweitern:

> Bei der Steuererklärung können **besondere Kategorien personenbezogener Daten** verarbeitet werden:
> - **Gesundheitsdaten**: Krankheitskosten, Kranken-/Pflegeversicherungsbeiträge, Behinderungsgrad (GdB) und Merkzeichen, Pflegegrad gepflegter Personen
> - **Religiöse Überzeugungen**: Religionszugehörigkeit und Kirchensteuerzahlungen
>
> Die Verarbeitung dieser Daten erfolgt nur mit Ihrer **ausdrücklichen Einwilligung** (Art. 9 Abs. 2 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, wobei bestimmte Funktionen dann nicht mehr vollumfänglich nutzbar sind.

---

## 5. NEUER ABSCHNITT: Geräte- und Nutzungsdaten / Server-Logs

**Problem:** Fehlt komplett. Wir loggen IP-Adressen, User-Agents, Request-Daten.

**Konkrete Änderung:** Neuen Unterabschnitt 3.7 einfügen:

### 3.7 Geräte- und Nutzungsdaten

**Daten:** IP-Adresse, User-Agent (Browser-/App-Kennung), HTTP-Methode, Anfragepfad, Antwort-Statuscode, Anfragedauer, Zeitstempel, Trace-ID.

**Zweck:** Gewährleistung der Funktionsfähigkeit und Sicherheit des Dienstes, Fehleranalyse, Schutz vor Missbrauch.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an IT-Sicherheit und Stabilität).

**Sicherheitsprotokolle:** Bei Anmelde- und Registrierungsvorgängen werden zusätzlich E-Mail-Adresse, IP-Adresse und User-Agent zu Sicherheitszwecken protokolliert (Schutz vor unbefugtem Zugriff, Erkennung von Brute-Force-Angriffen). Aufbewahrung: 90 Tage.

---

## 6. NEUER ABSCHNITT: Sprachaufnahmen (Sprache-zu-Text)

**Problem:** Wir haben Voice-Input im Chat, das wird transkribiert. Fehlt in der Datenschutzerklärung.

**Konkrete Änderung:** In Abschnitt 3.6 Chat-Assistent ergänzen:

> **Spracheingabe:** Sie können Steuerfragen per Sprachaufnahme stellen. Die Audioaufnahme wird zur Transkription an OpenAI (OpenAI Inc., San Francisco, USA) übermittelt und unmittelbar nach der Transkription gelöscht. Es wird ausschließlich der transkribierte Text weiterverarbeitet. Die Datenübermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.

---

## 7. ERWEITERUNG: Abschnitt 3.4 Belege — Gemini ergänzen

**Problem:** Wir nennen nur Amazon Bedrock für Beleganalyse. Tatsächlich nutzen wir Google Vertex AI (Gemini) für OCR/Felderkennung von Lohnsteuerbescheinigungen und Belegklassifizierung.

**Konkrete Änderung:**

> **KI-Analyse:** Zur automatischen Erkennung von Beleginhalten (Betrag, Datum, Händler) sowie zur Extraktion von Feldern aus Lohnsteuerbescheinigungen wird Google Vertex AI (Google Ireland Limited, Region europe-west1) genutzt. Die Verarbeitung erfolgt ausschließlich in EU-Rechenzentren.

---

## 8. ERWEITERUNG: Abschnitt 4 — Empfänger vollständig auflisten

**Problem:** Mehrere Datenempfänger fehlen.

**Konkrete Änderung:** Empfängerliste erweitern:

- **Google Cloud Platform (Google Ireland Limited):** Hosting (Cloud Run), Datenbank (Firestore), Dateispeicher (Cloud Storage), Authentifizierung (Firebase Auth), KI-Modelle (Vertex AI), Hintergrundaufgaben (Cloud Tasks). Datenverarbeitung in der EU (europe-west1).
- **Amazon Web Services (AWS EMEA SARL):** KI-Chat-Assistent via Amazon Bedrock (eu-central-1, Frankfurt). Daten werden nicht für Modelltraining verwendet.
- **RevenueCat Inc. (San Francisco, USA):** Validierung von In-App-Käufen. Erhält Ihre Nutzer-ID und Kaufinformationen vom Apple App Store. Datenübermittlung auf Basis des EU-U.S. Data Privacy Framework.
- **Apple Inc.:** Zahlungsabwicklung über den App Store für In-App-Käufe (€24,99/Jahr pro Steuerjahr). Apple verarbeitet Ihre Zahlungsdaten; wir erhalten keine Kreditkarten- oder Bankdaten.
- **Resend Inc. (USA):** Versand von E-Mails (Verifizierungscodes, Passwort-Zurücksetzung). Erhält Ihre E-Mail-Adresse. Datenübermittlung auf Basis von EU-Standardvertragsklauseln.
- **OpenAI Inc. (USA):** Transkription von Spracheingaben (optional). Audioaufnahmen werden unmittelbar nach Transkription gelöscht. Datenübermittlung auf Basis von EU-Standardvertragsklauseln.
- **Sentry (Functional Software Inc., USA):** Fehlerverfolgung und Performance-Monitoring. Erhält technische Fehlerdaten, Nutzer-ID und Anfragemetadaten. Datenübermittlung auf Basis von EU-Standardvertragsklauseln.
- **Ihre Bank:** Bei Nutzung der Bankanbindung (direkte FinTS-Verbindung).
- **ELSTER (Finanzverwaltung):** Bei Übermittlung der Steuererklärung an das Finanzamt.

---

## 9. NEUER ABSCHNITT: ELSTER-Datenverarbeitung (Details)

**Problem:** ELSTER wird bei uns nur als Empfänger genannt. Es fehlt der Pflichthinweis der Finanzverwaltung und Details zum Datenfluss.

**Konkrete Änderung:** Eigenen Unterabschnitt ergänzen:

### ELSTER-Übermittlung

Bei Abgabe Ihrer Steuererklärung wird diese über die Software ELSTER an das zuständige Finanzamt übermittelt. Dabei werden Ihre vollständigen Steuerdaten (als XML-Datei) sowie eine PDF-Version elektronisch übertragen. Sie erhalten einen TransferTicket als Nachweis der erfolgreichen Übermittlung.

Pflichthinweis der Finanzverwaltung:
> "Mit dieser Software werden personenbezogene Daten im Sinne des Art. 4 Nr. 1 EU-Datenschutz-Grundverordnung (DSGVO) und Art. 9 Abs. 1 DSGVO zum Zwecke der Verarbeitung erhoben. Neben den reinen Daten, die zur Steuerveranlagung benötigt werden, erhebt die Software Daten über die Art des Betriebssystems des Nutzers und übermittelt diese an die Finanzverwaltung. Diese Daten werden benötigt, um die ordnungsgemäße Verarbeitung der Daten sicherzustellen und Fehlern im Verarbeitungsprozess vorzubeugen. Die Nutzung der Daten erfolgt im Rahmen des Art. 6 Abs. 1 UAbs. 1 Buchst. e i.V.m. Abs. 3 UAbs. 1 Buchst. b DSGVO i.V.m. bundes- bzw. landesgesetzlicher Steuergesetze durch die Finanzverwaltung und nur für den genannten Zweck."

Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. a, Art. 9 Abs. 2 lit. a DSGVO (Einwilligung für sensible Daten).

---

## 10. NEUER ABSCHNITT: In-App-Käufe und Zahlungsdaten

**Problem:** Zahlungsabwicklung fehlt komplett. Wir nutzen RevenueCat + Apple App Store.

**Konkrete Änderung:** Neuen Unterabschnitt 3.8 einfügen:

### 3.8 In-App-Käufe

**Daten:** Nutzer-ID, Kaufzeitpunkt, erworbenes Produkt (Steuerjahr), Transaktionsstatus.

**Zweck:** Freischaltung kostenpflichtiger Funktionen (ELSTER-Übermittlung, erhöhtes Beleg-Kontingent, erweiterter KI-Chat).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).

**Zahlungsabwicklung:** Die Zahlung (€24,99 pro Steuerjahr) erfolgt ausschließlich über den Apple App Store. Wir erhalten keine Zahlungsdaten (Kreditkarte, Bankverbindung) von Apple. Zur Validierung Ihrer Käufe nutzen wir RevenueCat Inc. (San Francisco, USA) als Auftragsverarbeiter. RevenueCat erhält Ihre anonymisierte Nutzer-ID und verifiziert den Kaufstatus gegenüber dem App Store. Die Datenübermittlung erfolgt auf Basis des EU-U.S. Data Privacy Framework.

---

## 11. ERWEITERUNG: Abschnitt 5 Speicherdauer — Gesetzesverweise + Chat-Dauer

**Problem:** Nur §147 AO referenziert. Chat "bis zur Löschung durch Sie" ist unkonkret.

**Konkrete Änderung:** Tabelle erweitern:

| Datenart | Speicherdauer | Grundlage |
|----------|---------------|-----------|
| Benutzerkonto | Bis zur Löschung durch Sie | Art. 6 Abs. 1 lit. b DSGVO |
| Transaktions- und Steuerdaten | Bis zu 10 Jahre nach Übermittlung | § 147 AO, § 169 Abs. 2 Nr. 2 AO, § 46 Abs. 2 Nr. 8 EStG |
| Belege | Bis zur Löschung durch Sie | Art. 6 Abs. 1 lit. a DSGVO |
| Chat-Verlauf | 12 Monate nach letzter Aktivität, danach anonymisiert | Art. 6 Abs. 1 lit. f DSGVO |
| Sicherheitsprotokolle | 90 Tage | Art. 6 Abs. 1 lit. f DSGVO |
| FinTS-Banking-Sitzungen | 15 Minuten (automatisch) | Art. 6 Abs. 1 lit. a DSGVO |
| E-Mail-Verifizierungscodes | Wenige Minuten (nach Nutzung gelöscht) | Art. 6 Abs. 1 lit. b DSGVO |

---

## 12. ERWEITERUNG: Abschnitt 8 Datensicherheit — konkreter

**Problem:** Zu vage ("verschlüsselte Datenübertragung, Zugriffsbeschränkungen").

**Konkrete Änderung:**

> Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:
>
> - **Verschlüsselung bei Übertragung:** TLS/HTTPS für alle Verbindungen. HSTS (HTTP Strict Transport Security) in der Produktionsumgebung.
> - **Verschlüsselung bei Speicherung:** Sensible Daten wie IBANs werden mit AES-256-GCM verschlüsselt gespeichert. ELSTER-Zertifikate werden verschlüsselt in Cloud Storage abgelegt.
> - **Zugriffskontrolle:** Jeder API-Zugriff erfordert ein gültiges Firebase-Authentifizierungstoken. Nutzer können ausschließlich auf eigene Daten zugreifen.
> - **Brute-Force-Schutz:** Nach 5 fehlgeschlagenen Anmeldeversuchen wird das Konto für 15 Minuten gesperrt.
> - **Rate Limiting:** Registrierung und sensible Endpunkte sind durchsatzbegrenzt.
> - **Token-Widerruf:** Bei Abmeldung werden Authentifizierungstokens sofort ungültig.
> - **Sicherheits-Header:** X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, CSRF-Schutz.
> - **Datenverarbeitung in der EU:** Server und Datenbanken befinden sich in EU-Rechenzentren (europe-west1).

---

## 13. NEUER ABSCHNITT: Drittanbieter-Links

**Problem:** Fehlt bei uns, Taxfix hat das.

**Konkrete Änderung:** Kurzen Abschnitt einfügen:

> Unsere Website und App können Links zu Websites Dritter enthalten (z.B. ELSTER, App Store). Für den Datenschutz auf diesen Seiten sind wir nicht verantwortlich. Wir empfehlen, deren Datenschutzhinweise zu lesen.

---

## 14. NEUER ABSCHNITT: Datenübermittlung in Drittländer

**Problem:** Wir erwähnen Standardvertragsklauseln nur am Rande. Taxfix hat einen eigenen Abschnitt.

**Konkrete Änderung:** Eigenen Abschnitt einfügen:

> Soweit eine Verarbeitung Ihrer Daten außerhalb der EU stattfindet (insbesondere USA), erfolgt dies auf Grundlage von:
> - **EU-U.S. Data Privacy Framework:** RevenueCat (zertifiziert)
> - **EU-Standardvertragsklauseln (SCCs):** Amazon Web Services, OpenAI, Resend, Sentry
> - **Angemessenheitsbeschluss:** Google (DPF-zertifiziert)
>
> Alle Auftragsverarbeiter sind vertraglich zur Einhaltung der DSGVO verpflichtet (Art. 28 DSGVO). Kopien der Standardvertragsklauseln können auf Anfrage bereitgestellt werden.

---

## 15. ERWEITERUNG: Abschnitt 6 Rechte — Datenexport erwähnen

**Problem:** Wir haben einen GDPR-Datenexport implementiert (export_service.py), erwähnen ihn aber nicht.

**Konkrete Änderung:** Bei Datenübertragbarkeit (Art. 20) ergänzen:

> - **Datenübertragbarkeit** (Art. 20): Export Ihrer Daten in einem maschinenlesbaren Format (JSON). Diese Funktion ist direkt in der App verfügbar (Einstellungen → Datenschutz → Daten exportieren).

---

## 16. ERWEITERUNG: Abschnitt 6 Rechte — Kontolöschung detaillierter

**Problem:** Kontolöschung ist bei uns umfassend implementiert (10+ Schritte), aber nicht dokumentiert.

**Konkrete Änderung:** Ergänzen:

> **Kontolöschung:** Bei Löschung Ihres Kontos werden sämtliche Daten entfernt: Benutzerprofil, Bankverbindungen und Transaktionen, hochgeladene Dokumente und Belege, Chat-Verläufe, Fragebogen-Antworten, ELSTER-Zertifikate, Steuerbescheide und alle zugehörigen Dateien. Gesetzliche Aufbewahrungspflichten bleiben vorbehalten.

---

## Zusammenfassung der Prioritäten

**MUSS sofort (rechtlich relevant):**
- Nr. 4: Sensible Daten (Religion, Behinderung, Pflege) — Art. 9 Pflicht
- Nr. 5: Server-Logs/IP-Adressen — Informationspflicht
- Nr. 8: Empfänger vollständig (RevenueCat, Resend, Sentry, OpenAI, Vertex AI)
- Nr. 9: ELSTER-Pflichthinweis
- Nr. 10: Zahlungsdaten/In-App-Käufe
- Nr. 6: Spracheingabe/OpenAI
- Nr. 14: Drittländer-Übermittlung

**SOLLTE zeitnah:**
- Nr. 3: App-Berechtigungen
- Nr. 7: Vertex AI für Belege
- Nr. 11: Speicherdauer präzisieren
- Nr. 12: Datensicherheit konkreter

**NICE-TO-HAVE:**
- Nr. 1: Einleitung
- Nr. 2: Rechtsgrundlagen-Übersicht
- Nr. 13: Drittanbieter-Links
- Nr. 15: Datenexport erwähnen
- Nr. 16: Kontolöschung detaillierter
