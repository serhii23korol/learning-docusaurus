# Identitäts- & Zugriffskontrolle

## Ziel

- Verhindern, dass Unbefugte auf Systeme oder Daten zugreifen
- Sicherstellen, dass jeder Benutzer nur das darf, was erlaubt ist
- Umsetzung des Prinzips: **„Need to know“ / „Least Privilege“**

---

## Authentifizierung (Wer bist du?)

- **Definition:** Nachweis der Identität eines Benutzers
- **Faktoren:**
  - Wissen (Passwort, PIN)
  - Besitz (Smartcard, Token)
  - Sein (Biometrie, Fingerabdruck)
- **MFA (Multi-Faktor-Authentifizierung):** Kombination mehrerer Faktoren
- **Praxisbeispiel:** Online-Banking mit Passwort + TAN

---

## Autorisierung (Was darfst du?)

- **Definition:** Festlegung von Zugriffsrechten nach erfolgreicher Authentifizierung
- **Beispiel:**
  - Admin darf Benutzer anlegen
  - Mitarbeiter darf nur eigene Daten sehen
- **Prinzipien:**
  - Least Privilege
  - Trennung von Aufgaben (Separation of Duties)

---

## Zugriffskontrollmodelle

- **DAC (Discretionary Access Control):**
  - Eigentümer entscheidet über Rechte
- **MAC (Mandatory Access Control):**
  - Zentrale Sicherheitsrichtlinien
- **RBAC (Role-Based Access Control):**
  - Rechte werden Rollen zugeordnet (sehr praxisrelevant)
- **ABAC (Attribute-Based Access Control):**
  - Zugriff basiert auf Eigenschaften (z. B. Zeit, Standort)

---

## IAM (Identity & Access Management)

- Verwaltung von:
  - Benutzerkonten
  - Rollen
  - Berechtigungen
- **Prozesse**:
  - Benutzer anlegen
  - Rechte vergeben
  - Rechte entziehen
- **Ziel**:
  - Transparenz
  - Nachvollziehbarkeit
  - Compliance

---

## Single Sign-On (SSO)

- Einmal anmelden → Zugriff auf mehrere Systeme
- **Vorteil**:
  - Benutzerfreundlichkeit
  - Zentrale Kontrolle
- **Risiko**:
  - Kompromittierung betrifft mehrere Systeme

---

## Delegierte Authentifizierung (OAuth2)

- Benutzer meldet sich bei einem Drittanbieter an
- Anwendung erhält Zugriffstoken
- Passwort wird nicht weitergegeben
- **Praxisbeispiel**: „Login mit Google“

---

## Zutritt – Zugang – Zugriff

- **Zutritt:** Physischer Zugang (Serverraum, Alarmanlage)
- **Zugang:** Anmeldung am System (Passwort)
- **Zugriff:** Berechtigung auf Daten/Funktionen

---

## Technische Maßnahmen

- Passwort-Richtlinien
- MFA
- Account-Lockout
- Rechtekonzepte
- Protokollierung (Logging)
- regelmäßige Rechteprüfung
