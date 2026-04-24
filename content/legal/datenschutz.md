# Datenschutzerklärung

StudyTax respektiert Ihre Privatsphäre und ist dem Schutz Ihrer personenbezogenen Daten verpflichtet. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, warum wir sie verarbeiten und welche Rechte Sie haben. Sie gilt für die Nutzung unserer App für iOS (verfügbar im Apple App Store) sowie unserer Website studytax.de.

---

## 1. Verantwortlicher

Noah Kiefer
Hauptstraße 126
66386 Sankt Ingbert
Deutschland

E-Mail: support@studytax.de

Die Bestellung eines Datenschutzbeauftragten ist nach § 38 BDSG nicht erforderlich.

---

## 2. Übersicht der Datenverarbeitung

Diese App verarbeitet personenbezogene Daten zur Erstellung Ihrer Steuererklärung. Im Folgenden informieren wir Sie über Art, Umfang und Zweck der Datenverarbeitung.

### Rechtsgrundlagen

Wir verarbeiten Ihre personenbezogenen Daten im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG), wenn mindestens einer der folgenden Punkte zutrifft:

1. **Vertragserfüllung** (Art. 6 Abs. 1 lit. b DSGVO): Die Verarbeitung ist für die Bereitstellung unserer Dienste erforderlich — z.B. Benutzerkonto, Steuererklärung, Zahlungsabwicklung.
2. **Einwilligung** (Art. 6 Abs. 1 lit. a DSGVO): Sie haben der Verarbeitung für einen bestimmten Zweck zugestimmt — z.B. Bankanbindung, Chat-Assistent, Belege. Ihre Einwilligung ist jederzeit widerrufbar.
3. **Berechtigte Interessen** (Art. 6 Abs. 1 lit. f DSGVO): Die Verarbeitung dient unseren berechtigten Interessen, sofern Ihre Grundrechte nicht überwiegen — z.B. IT-Sicherheit, Fehleranalyse, Produktverbesserung.
4. **Rechtliche Verpflichtung** (Art. 6 Abs. 1 lit. c DSGVO): Die Verarbeitung ist zur Erfüllung gesetzlicher Pflichten erforderlich — z.B. steuerliche Aufbewahrungspflichten (§ 147 AO, § 169 AO).

---

## 3. Welche Daten wir verarbeiten

### 3.1 Benutzerkonto

**Daten:** Name, E-Mail-Adresse, Passwort (verschlüsselt), Anmeldezeitpunkte, Geräte-Informationen, App-Einstellungen, Kaufhistorie.

**Zweck:** Bereitstellung des Nutzerkontos, Authentifizierung, Kommunikation.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).

**Dienstleister:** Firebase Authentication (Google Ireland Limited, EU-Server). Datenübermittlung auf Basis des EU-U.S. Data Privacy Framework.

### 3.2 Finanzdaten (Bankanbindung)

**Daten:** Kontostände, Transaktionen (Datum, Betrag, Empfänger, Verwendungszweck), IBANs.

**Zweck:** Übersicht Ihrer Finanzen für steuerliche Zwecke.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).

**Technologie:** FinTS (deutscher Banking-Standard). Die Verbindung erfolgt direkt zu Ihrer Bank. Ihre Banking-Zugangsdaten werden auf Ihrem Gerät im sicheren Speicher abgelegt und nur für die Verbindung zu Ihrer Bank verwendet. IBANs werden mit AES-256-GCM verschlüsselt gespeichert. FinTS-Sitzungsdaten werden nach 15 Minuten automatisch gelöscht.

### 3.3 Steuerliche Daten

**Daten:** Anrede, Name, Vorname, Geburtsdatum, Anschrift, Steueridentifikationsnummer, Bankverbindung (IBAN), Religionszugehörigkeit, Familienstand, Angaben zur Lohnsteuerbescheinigung (Bruttolohn, gezahlte Steuern, Steuerklasse), Werbungskosten (Arbeitsmittel, Fachliteratur, Bewerbungskosten, Homeoffice, Fahrtkosten), Einkünfte aus selbstständiger Tätigkeit, ehrenamtliche Tätigkeiten, Lohnersatzleistungen, Studienkosten (Erst- und Zweitstudium inkl. doppelte Haushaltsführung), Versicherungsbeiträge (Kranken-, Pflege-, Haftpflichtversicherung), Angaben zu Kindern (Name, Geburtsdatum, Kindergeld, Betreuungskosten), Kapitalerträge und Kryptowährungen, Spenden, außergewöhnliche Belastungen (Krankheitskosten, Behinderung, Pflege), haushaltsnahe Dienstleistungen und Handwerkerleistungen.

**Zweck:** Vorbereitung und Übermittlung Ihrer Steuererklärung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).

#### Besondere Kategorien (Art. 9 DSGVO)

Bei der Steuererklärung können **besondere Kategorien personenbezogener Daten** verarbeitet werden:

- **Gesundheitsdaten:** Krankheitskosten, Kranken- und Pflegeversicherungsbeiträge, Behinderungsgrad (GdB) und Merkzeichen, Pflegegrad gepflegter Personen
- **Religiöse Überzeugungen:** Religionszugehörigkeit und Kirchensteuerzahlungen

Diese Daten werden nur verarbeitet, soweit Sie diese freiwillig im Rahmen der Fragebogen eingeben. Sie können die betreffenden Angaben jederzeit in der App löschen.

### 3.4 Belege

**Daten:** Hochgeladene Fotos/PDFs von Belegen, extrahierte Metadaten (Beträge, Händler, Datum).

**Zweck:** Dokumentation für Ihre Steuererklärung, automatische Kategorisierung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).

**KI-Analyse:** Zur automatischen Erkennung von Beleginhalten (Betrag, Datum, Händler) sowie zur Extraktion von Feldern aus Lohnsteuerbescheinigungen wird Google Vertex AI (Google Ireland Limited, Region europe-west1) genutzt. Die Verarbeitung erfolgt ausschließlich in EU-Rechenzentren. Zur Belegerkennung kann zusätzlich Amazon Bedrock (eu-central-1, Frankfurt) genutzt werden.

### 3.5 Biometrische Authentifizierung

Falls Sie Face ID oder Fingerabdruck-Login aktivieren: Die biometrischen Daten verbleiben auf Ihrem Gerät und werden nicht an uns übermittelt. Die App erhält nur eine Bestätigung der erfolgreichen Authentifizierung.

### 3.6 Chat-Assistent

**Daten:** Ihre Nachrichten, der Chatverlauf sowie – sofern für die Beantwortung Ihrer Fragen relevant – Transaktionsdaten (Betrag, Datum, Händlername), Angaben aus der Lohnsteuerbescheinigung (Bruttolohn, gezahlte Steuern, Steuerklasse) und Ihre Fragebogen-Antworten.

**Zweck:** Beantwortung Ihrer Steuerfragen, Unterstützung beim Ausfüllen der Steuererklärung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).

**Dienstleister:** Amazon Bedrock (Amazon Web Services EMEA SARL, Region eu-central-1, Frankfurt, Deutschland). Die oben genannten Daten werden zur Verarbeitung an Amazon Bedrock übermittelt. Amazon Bedrock speichert keine Eingaben oder Ausgaben nach der Verarbeitung und verwendet Ihre Daten nicht für Modelltraining. Zur Kostenoptimierung wird Prompt Caching eingesetzt, wobei Daten für maximal 5 Minuten zwischengespeichert und danach vollständig gelöscht werden. Es gelten die gleichen Datenschutzgarantien wie für die reguläre Verarbeitung. Die Datenverarbeitung erfolgt auf Basis des AWS GDPR Data Processing Addendum (DPA), das automatisch Bestandteil der AWS-Nutzungsbedingungen ist.

**Spracheingabe:** Sie können Steuerfragen per Sprachaufnahme stellen. Die Audioaufnahme wird zur Transkription an OpenAI (OpenAI Inc., San Francisco, USA) übermittelt und unmittelbar nach der Transkription gelöscht. Es wird ausschließlich der transkribierte Text weiterverarbeitet. Die Datenübermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.

### 3.7 Geräte- und Nutzungsdaten

**Daten:** IP-Adresse, User-Agent (Browser-/App-Kennung), HTTP-Methode, Anfragepfad, Antwort-Statuscode, Anfragedauer, Zeitstempel, Trace-ID.

**Zweck:** Gewährleistung der Funktionsfähigkeit und Sicherheit des Dienstes, Fehleranalyse, Schutz vor Missbrauch.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an IT-Sicherheit und Stabilität).

**Sicherheitsprotokolle:** Bei Anmelde- und Registrierungsvorgängen werden zusätzlich E-Mail-Adresse, IP-Adresse und User-Agent zu Sicherheitszwecken protokolliert (Schutz vor unbefugtem Zugriff, Erkennung von Brute-Force-Angriffen). Aufbewahrung: 90 Tage.

### 3.8 In-App-Käufe

**Daten:** Nutzer-ID, Kaufzeitpunkt, erworbenes Produkt (Steuerjahr), Transaktionsstatus.

**Zweck:** Freischaltung kostenpflichtiger Funktionen (ELSTER-Übermittlung, erhöhtes Beleg-Kontingent, erweiterter KI-Chat).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).

**Zahlungsabwicklung:** Die Zahlung (€24,99 pro Steuerjahr) erfolgt ausschließlich über den Apple App Store. Wir erhalten keine Zahlungsdaten (Kreditkarte, Bankverbindung) von Apple. Zur Validierung Ihrer Käufe nutzen wir RevenueCat Inc. (San Francisco, USA) als Auftragsverarbeiter. RevenueCat erhält Ihre anonymisierte Nutzer-ID und verifiziert den Kaufstatus gegenüber dem App Store. Die Datenübermittlung erfolgt auf Basis des EU-U.S. Data Privacy Framework.

---

## 4. App-Berechtigungen

Für einige Funktionen erfordert die App Zugriff auf bestimmte Dienste und Daten auf Ihrem Gerät. Sie werden jeweils vor der erstmaligen Nutzung um Erlaubnis gefragt und können Berechtigungen jederzeit in den Geräteeinstellungen widerrufen.

### iOS

- **Kamera:** Zum Scannen und Erfassen von Belegen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
- **Fotos (Lesen):** Zum Auswählen vorhandener Belegbilder aus Ihrer Mediathek — für Belege, Chat-Bildupload und Identitätsnachweis. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Fotos (Speichern):** Zum Speichern von Belegfotos in Ihrer Mediathek. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Face ID:** Zur schnellen und sicheren Anmeldung. Biometrische Daten verbleiben auf Ihrem Gerät und werden nicht an uns übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Mikrofon:** Zur Aufnahme von Steuerfragen per Spracheingabe. Audioaufnahmen werden zur Transkription an den Server gesendet und danach gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
- **Push-Benachrichtigungen:** Für Benachrichtigungen zu Steuer-Updates und Fristen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.

### Android

Dieselben Berechtigungen gelten für Android (Biometrie, Kamera, Medien, Benachrichtigungen, Mikrofon). Alle Berechtigungen können in den Geräteeinstellungen unter „Apps" → „StudyTax" → „Berechtigungen" widerrufen werden.

---

## 5. ELSTER-Datenverarbeitung

Bei Abgabe Ihrer Steuererklärung wird diese über die Software ELSTER an das zuständige Finanzamt übermittelt. Dabei werden Ihre vollständigen Steuerdaten (als XML-Datei) sowie eine PDF-Version elektronisch übertragen. Sie erhalten einen TransferTicket als Nachweis der erfolgreichen Übermittlung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. a, Art. 9 Abs. 2 lit. a DSGVO (Einwilligung für sensible Daten).

**Hinweis der Finanzverwaltung zur Datenverarbeitung bei ELSTER:**

> „Mit dieser Software werden personenbezogene Daten im Sinne des Art. 4 Nr. 1 EU-Datenschutz-Grundverordnung (DSGVO) und Art. 9 Abs. 1 DSGVO zum Zwecke der Verarbeitung erhoben. Neben den reinen Daten, die zur Steuerveranlagung benötigt werden, erhebt die Software Daten über die Art des Betriebssystems des Nutzers und übermittelt diese an die Finanzverwaltung. Diese Daten werden benötigt, um die ordnungsgemäße Verarbeitung der Daten sicherzustellen und Fehlern im Verarbeitungsprozess vorzubeugen. Die Nutzung der Daten erfolgt im Rahmen des Art. 6 Abs. 1 UAbs. 1 Buchst. e i.V.m. Abs. 3 UAbs. 1 Buchst. b DSGVO i.V.m. bundes- bzw. landesgesetzlicher Steuergesetze durch die Finanzverwaltung und nur für den genannten Zweck."

Weitere Informationen zur Datenverarbeitung bei ELSTER finden Sie in der Broschüre der Finanzverwaltung unter https://download.elster.de/download/dokumente/Informationen_zu_Artikel_12_bis_14_Datenschutz-Grundverordnung.pdf.

---

## 6. Empfänger der Daten

Ihre Daten werden an folgende Kategorien von Empfängern weitergegeben:

- **Google Cloud Platform (Google Ireland Limited):** Hosting (Cloud Run), Datenbank (Firestore), Dateispeicher (Cloud Storage), Authentifizierung (Firebase Auth), KI-Modelle (Vertex AI), Hintergrundaufgaben (Cloud Tasks). Datenverarbeitung in der EU (europe-west1).
- **Amazon Web Services (AWS EMEA SARL):** KI-Chat-Assistent via Amazon Bedrock (eu-central-1, Frankfurt). Daten werden nicht für Modelltraining verwendet.
- **RevenueCat Inc. (San Francisco, USA):** Validierung von In-App-Käufen. Erhält Ihre Nutzer-ID und Kaufinformationen vom Apple App Store.
- **Apple Inc.:** Zahlungsabwicklung über den App Store für In-App-Käufe. Apple verarbeitet Ihre Zahlungsdaten; wir erhalten keine Kreditkarten- oder Bankdaten.
- **Resend Inc. (USA):** Versand transaktionaler E-Mails (Verifizierungscodes, Passwort-Zurücksetzung). Erhält Ihre E-Mail-Adresse.
- **OpenAI Inc. (USA):** Transkription von Spracheingaben (optional). Audioaufnahmen werden unmittelbar nach Transkription gelöscht.
- **Sentry (Functional Software Inc., USA):** Fehlerverfolgung und Performance-Monitoring. Erhält technische Fehlerdaten, Nutzer-ID und Anfragemetadaten.
- **Ihre Bank:** Bei Nutzung der Bankanbindung (direkte FinTS-Verbindung).
- **ELSTER (Finanzverwaltung):** Bei Übermittlung der Steuererklärung an das Finanzamt.

Mit allen Dienstleistern bestehen Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.

---

## 7. Datenübermittlung in Drittländer

Soweit eine Verarbeitung Ihrer Daten außerhalb der EU stattfindet (insbesondere USA), erfolgt dies in Übereinstimmung mit Art. 44 ff. DSGVO auf Grundlage geeigneter Garantien:

- **EU-U.S. Data Privacy Framework:** Google, RevenueCat (zertifiziert)
- **EU-Standardvertragsklauseln (SCCs):** Amazon Web Services, OpenAI, Resend, Sentry

Alle Auftragsverarbeiter sind vertraglich zur Einhaltung der DSGVO verpflichtet. Eine Kopie der Standardvertragsklauseln kann auf Anfrage bereitgestellt werden.

---

## 8. Speicherdauer

| Datenart | Speicherdauer | Grundlage |
|----------|---------------|-----------|
| Benutzerkonto | Bis zur Löschung durch Sie | Art. 6 Abs. 1 lit. b DSGVO |
| Transaktions- und Steuerdaten | Bis zu 10 Jahre nach Übermittlung | § 147 AO, § 169 Abs. 2 Nr. 2 AO, § 46 Abs. 2 Nr. 8 EStG |
| Belege | Bis zur Löschung durch Sie | Art. 6 Abs. 1 lit. a DSGVO |
| Chat-Verlauf | 12 Monate nach letzter Aktivität, danach anonymisiert | Art. 6 Abs. 1 lit. f DSGVO |
| Sicherheitsprotokolle | 90 Tage | Art. 6 Abs. 1 lit. f DSGVO |
| FinTS-Banking-Sitzungen | 15 Minuten (automatisch) | Art. 6 Abs. 1 lit. a DSGVO |
| E-Mail-Verifizierungscodes | Wenige Minuten (nach Nutzung gelöscht) | Art. 6 Abs. 1 lit. b DSGVO |

Bei Konto-Löschung werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.

---

## 9. Ihre Rechte

Sie haben folgende Rechte gemäß DSGVO:

- **Auskunft** (Art. 15): Welche Daten wir über Sie speichern
- **Berichtigung** (Art. 16): Korrektur unrichtiger Daten
- **Löschung** (Art. 17): Löschung Ihrer Daten
- **Einschränkung** (Art. 18): Einschränkung der Verarbeitung
- **Datenübertragbarkeit** (Art. 20): Export Ihrer Daten in einem maschinenlesbaren Format (JSON). Diese Funktion ist direkt in der App verfügbar (Einstellungen → Datenschutz → Daten exportieren).
- **Widerspruch** (Art. 21): Widerspruch gegen bestimmte Verarbeitungen
- **Widerruf** (Art. 7 Abs. 3): Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft

Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter support@studytax.de oder nutzen Sie die Funktionen in der App (Einstellungen → Datenschutz).

**Kontolöschung:** Bei Löschung Ihres Kontos werden sämtliche Daten entfernt: Benutzerprofil, Bankverbindungen und Transaktionen, hochgeladene Dokumente und Belege, Chat-Verläufe, Fragebogen-Antworten, ELSTER-Zertifikate, Steuerbescheide und alle zugehörigen Dateien. Gesetzliche Aufbewahrungspflichten bleiben vorbehalten.

---

## 10. Beschwerderecht

Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.

Zuständige Behörde:
Unabhängiges Datenschutzzentrum Saarland
Fritz-Dobisch-Straße 12
66111 Saarbrücken
https://www.datenschutz.saarland.de

---

## 11. Datensicherheit

Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:

- **Verschlüsselung bei Übertragung:** TLS/HTTPS für alle Verbindungen. HSTS (HTTP Strict Transport Security) in der Produktionsumgebung.
- **Verschlüsselung bei Speicherung:** Sensible Daten wie IBANs werden mit AES-256-GCM verschlüsselt gespeichert. ELSTER-Zertifikate werden verschlüsselt in Cloud Storage abgelegt.
- **Zugriffskontrolle:** Jeder API-Zugriff erfordert ein gültiges Firebase-Authentifizierungstoken. Nutzer können ausschließlich auf eigene Daten zugreifen.
- **Brute-Force-Schutz:** Nach 5 fehlgeschlagenen Anmeldeversuchen wird das Konto für 15 Minuten gesperrt.
- **Rate Limiting:** Registrierung und sensible Endpunkte sind durchsatzbegrenzt.
- **Sicherheits-Header:** X-Frame-Options, X-Content-Type-Options, CSRF-Schutz.
- **Datenverarbeitung in der EU:** Server und Datenbanken befinden sich in EU-Rechenzentren (europe-west1).

---

## 12. Drittanbieter-Links

Unsere Website und App können Links zu Websites Dritter enthalten (z.B. ELSTER, Apple App Store). Für den Datenschutz auf diesen Seiten sind wir nicht verantwortlich. Wir empfehlen, deren Datenschutzhinweise zu lesen, bevor Sie personenbezogene Daten dorthin übermitteln.

---

## 13. Änderungen

Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Bei wesentlichen Änderungen informieren wir Sie in der App.

---

## 14. Kontakt

Bei Fragen zum Datenschutz:

E-Mail: support@studytax.de

Noah Kiefer
Hauptstraße 126
66386 Sankt Ingbert
