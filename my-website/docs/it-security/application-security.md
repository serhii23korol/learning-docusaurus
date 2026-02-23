# Anwendungssicherheit

## Ziel

- Schutz von Software und Webanwendungen vor Angriffen
- Vermeidung von Sicherheitslücken im Code
- Schutz von Daten und Benutzerkonten
- **Fokus**: Sicherheit beginnt beim Entwickler („Security by Design“)

---

## Häufige Angriffe

### SQL Injection

- Manipulation von SQL-Abfragen durch Benutzereingaben
- **Ziel**: Daten auslesen oder verändern
- **Beispiel**:

  `' OR 1=1 --`

- **Gegenmaßnahme:**
  - Prepared Statements
  - Parametrisierte Queries
  - Eingabevalidierung

---

### Cross-Site-Scripting (XSS)

- Einschleusen von Schadcode (JavaScript) in Webseiten
- **Ziel**: Session-Diebstahl oder Manipulation
- **Gegenmaßnahme:**
  - Input-Validierung
  - Output-Encoding
  - Content Security Policy (CSP)

---

### Cross-Site-Request-Forgery (CSRF)

- Ungewollte Aktionen im Namen eines angemeldeten Nutzers
- **Gegenmaßnahme:**
  - CSRF-Token
  - SameSite-Cookies

---

### Broken Access Control

- Benutzer erhält Zugriff auf fremde Daten
- **Gegenmaßnahme:**
  - Saubere Rechteprüfung
  - Server-seitige Kontrolle

---

## OWASP Top 10

- Liste der häufigsten Web-Sicherheitsrisiken
- **Beispiele**:
  - Injection
  - Broken Access Control
  - Security Misconfiguration
  - XSS
  - Insufficient Logging

---

## Secure Coding Prinzipien

- Eingaben validieren (Whitelist-Prinzip)
- Keine sensiblen Daten im Code speichern
- Fehlerbehandlung ohne Detail-Leaks
- Least Privilege
- Sicherheitsupdates regelmäßig einspielen

---

## Authentifizierung & Sessions

- Sichere Passwortspeicherung (Hash + Salt)
- Session-IDs zufällig und nicht erratbar
- HTTPS verwenden
- Timeout bei Inaktivität

---

## CORS (Cross-Origin Resource Sharing)

- Regelt, welche Domains auf Ressourcen zugreifen dürfen
- Falsch konfigurierte CORS-Einstellungen → Sicherheitsrisiko

---

## Logging & Monitoring

- Sicherheitsrelevante Ereignisse protokollieren
- Auffälligkeiten erkennen
- Schutz vor Manipulation der Logs
