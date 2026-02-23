# Kryptographie

## Ziel von Verschlüsselung

Daten sollen nur vom richtigen Empfänger gelesen werden können.

---

## Symmetrische Verschlüsselung

- **Prinzip**: Ein Schlüssel für Verschlüsselung und Entschlüsselung. Sender und Empfänger nutzen denselben geheimen Schlüssel.
- **Beispiel**: Die Verschlüsselung einer Festplatte mit BitLocker erfolgt mittels AES.
- **Vorteil**: Sehr schnell
- **Nachteil**: Wie bekommt der Empfänger sicher denselben Schlüssel? → Der geheime Schlüssel muss sicher übertragen werden

## Asymmetrische Verschlüsselung

- **Prinzip:** Es gibt zwei Schlüssel:
  - Public Key (öffentlich)
  - Private Key (geheim)
- **Eigenschaft**: Was mit dem Public Key verschlüsselt wird, kann nur mit dem Private Key entschlüsselt werden -> **RSA**
- **Praxisbeispiel**: Ein Absender verschlüsselt eine Nachricht mit dem Public Key des Empfängers. Nur der Empfänger kann diese Nachricht mit seinem Private Key entschlüsseln.
  - E-Mail-Verschlüsselung
  - TLS-Zertifikate
- **Vorteil**: Kein geheimer Schlüsselaustausch nötig
- **Nachteil**: Langsamer als symmetrische Verfahren

## Hybride Verschlüsselung (Realität im Internet)

- **Definition**: Kombination aus symmetrischer und asymmetrischer Verschlüsselung
  - Asymmetrisch → sicherer Schlüsselaustausch
  - Symmetrisch → schnelle Datenübertragung
- **Beispiel**: HTTPS (TLS)

---

## Hashfunktionen

- **Ziel:** Integrität prüfen
- **Beispiel**: SHA-256
- **Eigenschaften**:
  - Einwegfunktion (nicht umkehrbar)
  - Feste Länge
  - Kleine Änderung → komplett anderer Hash
- **Praxisbeispiel**:
  - Passwortspeicherung
  - Digitale Signaturen

---

## Salting

- **Problem:** Identische Passwörter → identischer Hash
- **Lösung:** Zufälliger Wert (Salt) wird vor dem Hash ergänzt
- **Ergebnis:** Gleiche Passwörter erzeugen unterschiedliche Hashwerte
- **Schutz gegen:** Rainbow-Table-Angriffe

---

## Digitale Signatur

- **Ziel:**
  - **Integrität:** Daten wurden nicht verändert
  - **Authentizität:** Absender ist echt
  - **Nichtabstreitbarkeit:** Absender kann Handlung nicht leugnen
- **Ablauf:**
  - Dokument wird gehasht
  - Hash wird mit Private Key signiert
  - Empfänger prüft mit Public Key
- **Praxisbeispiel:**
  - Software-Updates
  - Digitale Verträge
  - PDF-Signaturen

---

## Public Key Infrastructure

- **Ziel:** Vertrauen im Internet herstellen
- **Bestandteile:**
  - Certificate Authority (CA)
  - Digitale Zertifikate
  - Root-Zertifikate
- **Funktion:** Bestätigt, dass ein Public Key zu einer bestimmten Identität gehört
- **Praxis:** Browser vertraut HTTPS-Seiten

---

## TLS (Transport Layer Security)

- **Ziel:** Sichere Kommunikation im Internet
- **Bestandteile:**
  - Asymmetrischer Schlüsselaustausch
  - Symmetrische Datenübertragung
  - Zertifikatsprüfung
  - Hash zur Integritätsprüfung
- **Ergebnis:** HTTPS

---

## Wichtige Algorithmen

| **Typ**      | **Beispiele** | **Einsatz**        |
| ------------ | ------------- | ------------------ |
| Symmetrisch  | AES           | Datenspeicherung   |
| Asymmetrisch | RSA, ECC      | Schlüsselaustausch |
| Hash         | SHA-256       | Integrität         |
| Signatur     | RSA + SHA-256 | Digitale Signatur  |
