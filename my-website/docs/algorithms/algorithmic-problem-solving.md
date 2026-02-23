# Algorithmisches Problemlösen in der Praxis

## Ziel

- Alltagsprozesse in eindeutige Schritte zerlegen
- Bedingungen und Wiederholungen erkennen
- Logische Abläufe modellieren
- Lösungsstrategien systematisch entwickeln

👉 Nicht nur „rechnen“, sondern Prozesse denken.

---

## Vorgehensweise beim Problemlösen

1.  Problem verstehen
2.  Eingaben und Ausgaben definieren
3.  Schritte logisch strukturieren
4.  Bedingungen identifizieren
5.  Wiederholungen erkennen
6.  Abbruchbedingungen festlegen

---

## Beispiel: Benutzerauthentifizierung

### Ablauf (vereinfacht):

- Benutzer gibt Benutzername & Passwort ein
- System prüft:
  - Existiert Benutzer?
  - Passwort korrekt?

- Wenn korrekt → Login
- Wenn falsch → Fehlermeldung
- Nach X Fehlversuchen → Konto sperren

👉 Enthält:

- Verzweigungen
- Zähler (Fehlversuche)
- Zustandswechsel (aktiv → gesperrt)

---

## Beispiel: Abbuchung von einem Konto

- Betrag eingeben
- Prüfen: Ist Kontostand ausreichend?
- Wenn ja:
  - Betrag abziehen
  - Buchung speichern

- Wenn nein:
  - Fehlermeldung

👉 Enthält:

- Bedingung
- Zustandsänderung
- Speicherung

---

## Beispiel: Regelmäßiges Backup planen

- Zeitpunkt prüfen (z. B. täglich 02:00 Uhr)
- Wenn Zeitpunkt erreicht:
  - Daten sichern
  - Erfolg prüfen
  - Log schreiben

- Bei Fehler → Meldung

👉 Enthält:

- Zeitsteuerung
- Schleife (tägliche Wiederholung)
- Fehlerbehandlung

---

## Reguläre Ausdrücke (Regex)

- Mustererkennung in Texten
- Verwendung bei:
  - E-Mail-Prüfung
  - Telefonnummern
  - Formatvalidierung

- Beispiel:

`^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$`

👉 Ziel: Strukturierte Texte prüfen.

---

## Algorithmus testen & durchspielen

- Beispielwerte einsetzen
- Schritt für Schritt ausführen
- Randfälle prüfen:
  - Leere Eingabe
  - Grenzwerte
  - Fehlerfälle

---

## Typische Denkmuster

- Zustandsmodell (Statuswechsel)
- Entscheidungsbaum
- Zählerlogik
- Zeitgesteuerte Abläufe
- Fehler- und Ausnahmebehandlung

---

## Merksystem

Algorithmisches Problemlösen heißt:

1.  Prozess verstehen
2.  Schritte definieren
3.  Bedingungen prüfen
4.  Wiederholungen erkennen
5.  Fehler behandeln
