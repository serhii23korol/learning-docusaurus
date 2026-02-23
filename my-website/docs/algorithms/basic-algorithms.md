# Basis-Algorithmen & typische Problemstellungen

## Ziel

- Grundlegende Algorithmen kennen
- Funktionsweise verstehen
- Laufverhalten grob einschätzen können

---

## Suchalgorithmen

### Lineare Suche

- **Eigenschaften**:
  - Durchläuft Elemente nacheinander
  - Vergleicht jedes Element mit dem Suchwert
  - Stoppt bei Treffer oder am Ende

- **Vorteil:** Funktioniert bei unsortierten Listen
- **Nachteil:** Langsam bei großen Datenmengen

---

### Binäre Suche

- **Eigenschaften**:
  - Funktioniert nur bei sortierten Listen
  - Vergleicht mit mittlerem Element
  - Halbiert den Suchbereich

- **Vorteil:** Sehr schnell
- **Nachteil:** Sortierung erforderlich

👉 Prüfungsunterschied:  
Linear = unsortiert möglich  
Binär = nur sortiert

---

## Sortieralgorithmen

### Bubble Sort

- Vergleicht benachbarte Elemente
- Tauscht bei falscher Reihenfolge
- „Größtes Element wandert nach oben“

Einfach, aber ineffizient.

---

### Selection Sort

- Sucht jeweils das kleinste Element
- Setzt es an die richtige Position
- Weniger Vertauschungen als Bubble Sort.

---

### Insertion Sort

- Fügt jedes Element an richtiger Stelle in sortierten Bereich ein
- Effizient bei kleinen oder fast sortierten Listen.

---

👉 Alle drei sind einfache Schul-Algorithmen (nicht optimal für große Datenmengen).

---

## Typische Rechenalgorithmen

### Mittelwert berechnen

- Summe aller Werte bilden
- Durch Anzahl der Werte teilen

---

### Zinsberechnung

- **Einfacher Zins**: Kapital × Zinssatz × Zeit
- **Zinseszins**: Kapital × (1 + Zinssatz)^Zeit

---

## Arbeiten mit Arrays

### Doppelte Einträge finden

- Jedes Element mit allen anderen vergleichen
- Oder Hilfsstruktur (z. B. Set) verwenden

---

### Doppelte Einträge löschen

- Neues Array ohne Duplikate
- Oder Datenstruktur mit automatischer Eindeutigkeit nutzen

---

## Rekursive Problemstellungen

### Dateibaum kopieren

- Ordner öffnen
- Dateien kopieren
- Unterordner rekursiv durchlaufen
- Rekursion ideal für Baumstrukturen.

---

## Algorithmus durchspielen

- Eingabewerte festlegen
- Jeden Schritt nachvollziehen
- Zwischenergebnisse notieren
- Ergebnis überprüfen

---

## Typische AP2-Fragen

- Unterschied lineare vs. binäre Suche?
- Warum braucht binäre Suche eine Sortierung?
- Welcher Sortieralgorithmus ist effizienter?
- Wie entfernt man doppelte Einträge?

---

## Merksystem

Basis-Algorithmen bestehen aus:

1.  Suchen
2.  Sortieren
3.  Rechnen
4.  Rekursion
