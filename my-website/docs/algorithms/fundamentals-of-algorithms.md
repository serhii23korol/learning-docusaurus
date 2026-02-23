# Grundlagen & Darstellung von Algorithmen

## Was ist ein Algorithmus?

- Präzise, eindeutige Verarbeitungsvorschrift
- Besteht aus endlich vielen Schritten
- Liefert bei gleicher Eingabe immer dasselbe Ergebnis
- Ist programmiersprachenunabhängig formulierbar

👉 Ein Algorithmus ist die **Logik**, nicht der Code.

---

## Eigenschaften eines Algorithmus

- **Eindeutigkeit** → Jeder Schritt ist klar definiert
- **Endlichkeit** → Beendet sich nach endlich vielen Schritten
- **Ausführbarkeit** → Schritte sind praktisch durchführbar
- **Determinismus** → Gleiche Eingabe → gleiches Ergebnis

---

## Kontrollstrukturen (Grundbausteine)

Jeder Algorithmus besteht nur aus drei Grundstrukturen:

| **Struktur** | **Beschreibung**     | **Beispiel**          |
| ------------ | -------------------- | --------------------- |
| Sequenz      | Befehle nacheinander | Schritt 1 → Schritt 2 |
| Verzweigung  | Entscheidung         | if / switch           |
| Wiederholung | Schleife             | for / while           |

👉 Alle Programme bestehen nur aus Kombinationen dieser drei Strukturen.

---

## Verzweigungen

- Einfache Verzweigung (if)
- Mehrfachauswahl (switch)
- Bedingungsprüfung mit Booleschen Ausdrücken
- **Ziel**: Entscheidung basierend auf Bedingungen.

---

## Schleifen

- **for-Schleife** → feste Anzahl Wiederholungen
- **while-Schleife** → Wiederholung solange Bedingung wahr
- **do-while** → mindestens einmal Ausführung

Unterschied:

- **for** → zählergesteuert
- **while** → bedingungsgesteuert

---

## Rekursion

- Funktion ruft sich selbst auf
- **Besteht aus**:
  - Rekursionsschritt
  - Abbruchbedingung

- **Vorteile**:
  - Elegante Lösung bei Baum- oder Listenstrukturen
  - Natürliche Problembeschreibung

- **Nachteile**:
  - Höherer Speicherverbrauch
  - Gefahr von Stack Overflow

- **Beispiel**:
  - Fakultät
  - Durchlaufen eines Dateibaums

---

## Darstellung von Algorithmen

### Pseudocode

- Sprachunabhängig
- Struktur ähnlich wie Programmiersprachen
- Fokus auf Logik
- **Beispiel**:

`Wenn Alter >= 18 Ausgabe "Volljährig" Sonst Ausgabe "Minderjährig"`

---

### Aktivitätsdiagramm (UML)

- Grafische Darstellung von Abläufen
- **Zeigt**:
  - Start
  - Aktionen
  - Entscheidungen
  - Schleifen
  - Ende

👉 Gut zur Visualisierung von Prozessen.

---

### Zustandsdiagramm (Zustandsautomat)

- Zeigt Zustände und Übergänge
- Zustandswechsel durch Ereignisse
- **Beispiel**:
  - Benutzerstatus:
    - Nicht eingeloggt → Eingeloggt → Gesperrt

---

## Algorithmisches Denken

- Problem in kleine Schritte zerlegen
- Bedingungen identifizieren
- Wiederholungen erkennen
- Abbruchbedingungen definieren

---

## Merksystem

Algorithmus =

1.  Logik
2.  Kontrollstrukturen
3.  Darstellung
