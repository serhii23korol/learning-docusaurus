# Netzwerk- & Infrastruktursicherheit

## Ziel

- Schutz von Netzwerken, Servern und Infrastruktur
- Sicherstellung von **Vertraulichkeit, Integrität, Verfügbarkeit**
- Schutz vor externen und internen Angriffen

---

## Firewalls

- **Aufgabe:** Überwachen und Filtern von Netzwerkverkehr
- **Arten:**
  - Paketfilter (IP, Port)
  - Stateful Inspection (Verbindungsstatus)
  - Application-Level Firewall (Inhaltsprüfung)

- **Praxis:**
  - Blockieren unerlaubter Ports
  - Schutz vor unbefugtem Zugriff

---

## VPN (Virtual Private Network)

- Verschlüsselte Verbindung über unsicheres Netzwerk
- Nutzung von IPsec oder TLS
- **Praxisbeispiel**: Homeoffice-Zugang ins Firmennetz
- **Ziel**: Schutz vor Abhören

---

## Netzsegmentierung

- Aufteilung des Netzwerks in getrennte Bereiche
- Umsetzung über VLAN oder Subnetze
- **Vorteil**: Begrenzung von Schadensausbreitung
- **Beispiel**: Gäste-WLAN getrennt vom Firmennetz

---

## Schutz vor DoS / DDoS

- **DoS:** Überlastung eines Systems
- **DDoS:** Verteilte Überlastung durch viele Systeme
- **Maßnahmen**:
  - Rate Limiting
  - Load Balancer
  - Traffic-Filter

---

## Infrastruktur-Schutz (physisch & technisch)

### Physisch

- Zutrittskontrolle Serverraum
- Videoüberwachung
- Brandschutz

### Technisch

- USV (unterbrechungsfreie Stromversorgung)
- Klimatisierung
- Redundante Systeme
- RAID
- Backup-Systeme

---

## Elementarrisiken

- Feuer
- Hochwasser
- Stromausfall
- Überhitzung

---

## Monitoring & Logging

- Überwachung von:
  - Netzwerkverkehr
  - Serverzustand
  - Fehlermeldungen

- Log Management
- Frühzeitige Angriffserkennung

---

## Schutzprotokolle

- TLS (verschlüsselte Kommunikation)
- IPsec
- SSH statt Telnet
- HTTPS statt HTTP
