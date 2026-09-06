# Full-Service Marketingagentur Website

Sichere Full-Stack-Website fuer eine Marketingagentur mit Fokus auf:
- Webentwicklung
- SEO
- Social Media Management (Instagram, TikTok)

## Tech-Stack

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- Security: Helmet, CORS-Allowlist, Rate Limiting, Request Validation, HPP

## Projektstruktur

```
.
|-- public/
|   |-- index.html
|   |-- styles.css
|   |-- main.js
|-- src/
|   |-- config/
|   |   |-- env.js
|   |-- middlewares/
|   |   |-- security.js
|   |   |-- rateLimiters.js
|   |   |-- validators.js
|   |   |-- errorHandler.js
|   |-- routes/
|   |   |-- healthRoutes.js
|   |   |-- contactRoutes.js
|   |-- server.js
|-- .env.example
|-- .gitignore
|-- package.json
```

## Installation

1. Abhaengigkeiten installieren:
	 ```bash
	 npm install
	 ```
2. Umgebungsvariablen vorbereiten:
	 ```bash
	 copy .env.example .env
	 ```
3. Entwicklungsmodus starten:
	 ```bash
	 npm run dev
	 ```

## Production Start

```bash
npm start
```

## API-Endpunkte

- `GET /api/health`
	- Healthcheck mit Uptime und Timestamp

- `POST /api/contact`
	- Nimmt Kontaktanfragen entgegen
	- Validiert und sanitisiert Eingaben
	- Ist gegen Spam durch Rate Limiting und Honeypot abgesichert

Beispiel-Payload:

```json
{
	"name": "Max Mustermann",
	"email": "max@firma.de",
	"company": "Firma GmbH",
	"service": "full-service",
	"message": "Wir wollen unsere Website modernisieren und mehr Leads ueber SEO gewinnen.",
	"website": ""
}
```

## Sicherheitskonzept

- Strenge Security Header mit Helmet inkl. Content-Security-Policy
- CORS nur fuer explizit erlaubte Origins
- API-Rate-Limit global und zusaetzlich streng fuer Kontaktformular
- Request-Body-Groessenlimit (10kb)
- Input-Validierung und Sanitization mit express-validator
- HPP-Schutz gegen HTTP Parameter Pollution
- Stacktraces nur ausserhalb von Production

## Datenschutz und Cookies (DSGVO-Basis)

- Cookie-Consent-Banner mit aktiver Einwilligung fuer optionale Kategorien (Analyse, Marketing)
- Voreinstellung: nur notwendige Technologien
- Einstellungen jederzeit ueber "Cookie-Einstellungen" anpassbar
- Rechtliche Seiten integriert:
	- `/privacy` und `/datenschutz`
	- `/imprint` und `/impressum`

Wichtiger Hinweis:
- Die Inhalte in Datenschutz und Impressum enthalten Musterdaten und muessen vor Live-Betrieb mit echten Unternehmensdaten ersetzt werden.
- Diese Implementierung bildet eine technische DSGVO-Basis und ersetzt keine rechtliche Beratung.

## SEO-Basis (Google)

- SEO-optimierte Meta-Titles und Meta-Descriptions pro Seite
- Canonical-Tags und Robots-Meta-Tags gesetzt
- Dynamische `robots.txt` unter `/robots.txt`
- Dynamische `sitemap.xml` unter `/sitemap.xml`
- Leistungsseite um FAQ-Inhalte erweitert (relevante Suchanfragen wie Website-Entwicklung und SEO)

Empfohlene naechste Schritte:
- Domain in der Google Search Console verifizieren
- Sitemap in der Search Console einreichen
- Fuer zentrale Keywords eigene Landingpages erstellen (z. B. `/webseite-entwickeln-lassen`)
- Kontinuierlich Content mit Suchintention ausbauen (Cases, Branchen, FAQs)

## Hinweise zur Weiterentwicklung

- Kontakt-Route aktuell mit Platzhalter-Verarbeitung (Konsole)
- Fuer Production: sichere DB-Anbindung oder E-Mail-Provider (z. B. Postmark, SendGrid) integrieren
- Optional zusaetzlich: Captcha, WAF, SIEM-Logging

## Deployment notes

- `PUBLIC_URL` (added in the security pass) is the canonical origin the server
  uses when it constructs URLs it hands to crawlers, caches, and CDNs
  (`/robots.txt`, `/sitemap.xml`). Set it to the real https:// origin in
  production so a crafted `Host:` header cannot poison those responses.
- `TRUST_PROXY=true` is required whenever the process sits behind a reverse
  proxy (nginx, Cloudflare, App Runner, Fly, Render, ...). Without it, Express
  reads the socket peer address for `req.ip`, which is always the proxy for
  every request, so rate limiting shares one bucket across all clients and
  either lets everyone through or blocks everyone at once.
