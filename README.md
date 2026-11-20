# Kita-Raum

Eine iPad-Web-App: Den Gruppenraum von oben einrichten, Kinder mit Foto als kleine Kreise anlegen und mit dem Finger dorthin schieben, wo sie gerade spielen.

## Funktionen

- **Raum einrichten** (Modus „Einrichten“): Möbel über „Möbel“ hinzufügen, z. B. Sofa, Tische, Stühle, Teppiche, Kuschelecke, Spielküche, Regale, Tür und Fenster.
  Antippen öffnet eine Leiste zum Drehen, Vergrößern/Verkleinern, Benennen (z. B. Teppich → „Bauecke“), Duplizieren und Löschen.
- **Kinder** (Modus „Kinder“, die Möbel sind dann gesperrt):
  - **+** links öffnet direkt die Kamera. Foto machen, Namen eingeben, fertig.
  - Kinder aus der linken Leiste in den Raum ziehen und dort frei verschieben, auch mit mehreren Fingern gleichzeitig.
  - Ein Kind zurück auf die Leiste ziehen nimmt es aus dem Raum.
  - Ein Kind antippen: Foto/Name ändern und sehen, wo es zuletzt gespielt hat.
- **Ansicht merken**: speichert, welches Kind gerade wo ist (mit Uhrzeit und Bezeichnung wie „Freispiel“). Die App merkt sich auch den Bereich, in dem das Kind war.
- **Verlauf**: frühere Ansichten anschauen und bei Bedarf wiederherstellen.
- **Menü (…)**: Raumname und -größe, alle Kinder zurück in die Leiste, Sicherung exportieren/importieren, alles löschen.

## Datenschutz

Alle Daten, auch die Kinderfotos, bleiben **nur auf dem iPad** (im Browser-Speicher). Nichts wird hochgeladen.
Über „Sicherung exportieren“ lässt sich eine Datei zum Aufheben oder Übertragen auf ein anderes Gerät erstellen.

## Auf das iPad bringen

Die App muss einmal über eine **https-Adresse** erreichbar sein, z. B. mit GitHub Pages:

1. Im GitHub-Repository: *Settings → Pages → Branch* auswählen → *Save*.
2. Die angezeigte Adresse auf dem iPad in **Safari** öffnen.
3. Teilen-Symbol → **„Zum Home-Bildschirm“**.

Danach startet die App wie eine normale App im Vollbild und funktioniert auch offline.

> Hinweis: Die Daten gehören zur App auf dem Home-Bildschirm. Wenn man die Seite stattdessen in Safari öffnet, sieht man einen separaten, leeren Stand.

## Dateien

- `index.html`: die komplette App
- `manifest.webmanifest`, `icons/`: App-Name und Symbol für den Home-Bildschirm
- `sw.js`: Offline-Unterstützung
