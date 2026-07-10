---
key: features
title: Funktionen — Den Katalog erkunden und nutzen
description: "Entdecken Sie die wichtigsten Funktionen von datannur: Suche, Filter, Statistiken, Abhängigkeiten, Datenvorschau, integrierte KI und mehr."
icon: screwdriver-wrench
---

datannur vereint in einer einzigen Oberfläche die wesentlichen Funktionen eines Datenkatalogs: Navigation, Dokumentation, Erkundung und Nutzung der Metadaten. Das Werkzeug ermöglicht es, Datensätze wiederzufinden, ihre Struktur zu verstehen, ihre Abhängigkeiten zu erkunden und ihre Entwicklung im Zeitverlauf zu verfolgen.

Das Ziel ist nicht nur, Informationen zu speichern, sondern Daten lesbarer, nutzbarer und im Alltag einfacher zu steuern zu machen.

- **[Navigation](#navigation)**: [Suche](#suche), [Filter](#filter), [Sortierung](#sortierung), [Baumstruktur](#baumstruktur), [KI-Assistent](#ki-assistent)
- **[Information](#information)**: [Dokumentation](#doc), [Fachglossar](#fachglossar), [Abhängigkeiten](#abhängigkeiten-lineage), [statistische Zusammenfassung](#statistische-zusammenfassung), [Datenvorschau](#datenvorschau), [ähnliche Enumerationen](#ähnliche-enumerationen), [Änderungshistorie](#änderungshistorie)
- **[Nutzung](#nutzung)**: [Favoriten](#favoriten), [Personalisierung](#personalisierung), [Download](#download), [Interoperabilität](#interoperabilität), [interne Sicht](#interne-sicht)

## Navigation

datannur erlaubt es, den Katalog auf mehrere sich ergänzende Arten zu durchsuchen. Die Baumstruktur bietet eine strukturierte Sicht auf Organisationen, Ordner, Datensätze, Variablen und Dokumente, während Suche und Filter direkten Zugriff auf die relevanten Informationen geben.

Diese vielfältige Navigation macht den Katalog sowohl für eine breite Erkundung als auch für gezielte Bedürfnisse nutzbar: einen Datensatz finden, eine Variable identifizieren, einen Verantwortlichen ausfindig machen oder einen zusammenhängenden Dokumentenbestand durchsuchen.

![Ordner „Public Admin“ – Ordner-Tab](/images/folder-page-folder-tab.en.jpg)
*Ordner „Public Admin“ – Ordner-Tab*

### Suche

Die Suchleiste ermöglicht es, anhand der eingegebenen Begriffe schnell die relevantesten Elemente zu finden. Eine eigene Seite zeigt die Ergebnisse übersichtlich an, mit direktem Zugriff auf die letzten Suchanfragen.

![Organisationsseite – aktive Suchleiste](/images/search-bar-open.en.jpg)
*Organisationsseite – aktive Suchleiste*

![Suchseite](/images/search-page.en.jpg)
*Suchseite*

### Filter

Jede Tabelle bietet Filter pro Spalte, um die Ergebnisse präziser einzugrenzen als mit der globalen Suche. Mehrere Filter lassen sich kombinieren, um in wenigen Schritten eine relevante Teilmenge zu isolieren. Die Filter unterstützen je nach Art der Spalten verschiedene Bedingungstypen.

![Datasets-Tab mit zwei aktiven Filtern](/images/datasets-tab-filter.webp)
*Datasets-Tab mit zwei aktiven Filtern*

Ein globaler Filter erlaubt es zudem, bestimmte Kategorien von Datasets katalogweit ein- oder auszuschliessen, zum Beispiel nach ihrem Öffnungsstatus oder ihrem Verarbeitungsgrad.

### Sortierung

Tabellen können von jeder Spalte aus auf- oder absteigend sortiert werden. Diese Sortierung kombiniert sich natürlich mit den Filtern, um die Erkundung und Analyse der Daten zu erleichtern.

### Baumstruktur

datannur stützt sich auf eine Baumstruktur, um Organisationen, Ordner und Schlagwörter zu organisieren. Jedes Element kann Unterelemente über mehrere Ebenen enthalten, was es ermöglicht, komplexe Organisationen originalgetreu abzubilden.

Jeder Knoten der Baumstruktur verfügt über eine eigene Seite und wirkt wie eine Teilmenge des Katalogs. So lassen sich sowohl sein Inhalt und sein Kontext als auch die ihm zugeordneten Datasets erkunden. In Kombination mit Sortierung und Filtern bietet diese Struktur eine ebenso einfache wie leistungsfähige Navigation.

![Info-Seite – Organisation: Gesamtübersicht](/images/about-page-diagramm.en.jpg)
*Info-Seite – Organisation: Gesamtübersicht*

### KI-Assistent

Eine Chat-Seitenleiste ermöglicht es, den Katalog in natürlicher Sprache zu erkunden. Der Assistent kann Fragen zu den Metadaten beantworten, relevante Elemente finden und im Katalog navigieren, indem er sich direkt auf die verfügbaren Informationen stützt.

In die Oberfläche integriert, ergänzt er die klassischen Such-, Filter- und Erkundungsfunktionen durch einen direkteren und flexibleren Zugriff auf den Inhalt des Katalogs.

![Dataset-Seite mit geöffnetem KI-Assistenten](/images/side-bar-ai-open.en.png)

## Information

Jede einem Katalogelement gewidmete Seite enthält einen Info-Tab, der seine wichtigsten Metadaten zusammenfasst. Dort finden sich seine spezifischen Attribute — etwa eine Beschreibung, ein Aktualisierungsdatum oder ein Kontakt — sowie die Elemente, mit denen es verknüpft ist, wie seine Schlagwörter, sein Ordner oder verbundene Organisationen.

Die anderen Tabs geben Zugriff auf die Elemente, die es enthält oder mit denen es verbunden ist, wie Datasets, Variablen, Enumerationen oder Dokumente.

![Ordner – Info-Tab](/images/folder-about-tab.en.jpg)
*Ordner – Info-Tab*

### Doc

Der Katalog kann seine wichtigsten Elemente mit einer oder mehreren bestehenden Dokumentationen im Markdown- oder PDF-Format verknüpfen. Das kann zum Beispiel ein README, eine Anleitung, ein Bericht oder eine bereits in der Organisation vorhandene Fachdokumentation sein. Direkt von der Seite des betreffenden Elements aus zugänglich, liefern diese Dokumente Kontext, Erklärungen und ergänzende Informationen.

![Im Katalog geöffnetes PDF-Dokument](/images/doc-pdf.en.jpg)

### Fachglossar

datannur kann auch ein Fachglossar in Form von Konzepten enthalten. Diese Konzepte dienen dazu, bestimmte in den Daten verwendete Begriffe präzise zu definieren und Mehrdeutigkeiten über die genaue Bedeutung einer Variable auszuräumen.

Jedes Konzept verfügt über eine eigene Seite, kann hierarchisch organisiert, durch Schlagwörter oder Dokumente angereichert und mit den betreffenden Variablen verknüpft werden. Diese semantische Ebene ergänzt die klassischen Metadaten um eine fachlichere Erklärungsebene.

### Abhängigkeiten (Lineage)

Für jede Variable zeigt datannur ihre Abhängigkeitsbeziehungen zu den anderen Variablen des Katalogs an. Es unterscheidet Quellvariablen, die als Eingabe dienen, und abgeleitete Variablen, die von ihnen abhängen.

Diese Beziehungen machen die Transformationsketten innerhalb des Katalogs sichtbar und erlauben es auch, Abhängigkeiten zwischen Datensätzen abzuleiten. So lässt sich schnell erkennen, auf welche Datasets sich ein anderes stützt oder welche Datensätze es speist.

### Statistische Zusammenfassung

Der Statistik-Tab bietet eine visuelle Zusammenfassung der im Katalog verfügbaren Informationen. Je nach Elementtyp kann er sowohl aggregierte Übersichten anzeigen — etwa die Anzahl der Variablen pro Dataset oder die mit einem Ordner verknüpften Schlagwörter — als auch feinere deskriptive Statistiken auf Variablenebene.

Für Variablen kann datannur insbesondere die Häufigkeit der Werte sowie statistische Kennzahlen wie Minimum, Maximum, Mittelwert oder Standardabweichung darstellen. Diese Informationen unterstützen die Erkundung, die Konsistenzprüfung und das schnelle Verständnis des Dateninhalts.

### Datenvorschau

Für kompatible Datensätze zeigt ein eigener Tab eine tabellarische Vorschau des Inhalts an. Diese Vorschau bietet einen ersten Einblick in die Daten und stützt sich auf die integrierten Sortier- und Filterfunktionen, um die Einträge effizienter zu durchsuchen.

### Ähnliche Enumerationen

Die Harmonisierung von Enumerationen über mehrere Datensätze hinweg kann schnell mühsam werden. Um diese Arbeit zu vereinfachen, bietet datannur einen Tab, der Enumerationen nach ihrer Ähnlichkeit einander gegenüberstellt und hilft, Dubletten, nahe Varianten oder teilweise Überschneidungen zu erkennen.

Diese Ansicht hilft, Abweichungen in den Bezeichnungen zu erkennen, Werte zu vereinheitlichen und die Gesamtkonsistenz des Katalogs zu verbessern.

### Änderungshistorie

Der Historien-Tab ermöglicht es, die an den Katalogelementen vorgenommenen Änderungen im Zeitverlauf zu verfolgen. Er hebt Ergänzungen, Löschungen und Änderungen mit Zeitstempel hervor, um die Historie der Metadaten lesbarer zu machen.

Diese Ansicht hilft, Änderungen zu verfolgen, die Konsistenz zu prüfen und die Entwicklung eines Datasets, einer Variable oder eines anderen Katalogelements zu verstehen.

## Nutzung

Die Nutzungsdaten werden lokal im Browser gespeichert. Der Katalog bleibt somit ohne Internetverbindung voll funktionsfähig und bewahrt dabei die Favoriten, Suchanfragen, Protokolle und Einstellungen der Nutzerin oder des Nutzers.

Diese Elemente können jederzeit exportiert und importiert werden, was die Kontinuität der Nutzung von einem Arbeitsplatz zum anderen oder über die Zeit erleichtert.

### Favoriten

Alle Katalogelemente können mit einem Klick zu den Favoriten hinzugefügt werden. Eine eigene Seite erlaubt es anschliessend, sie an einem Ort wiederzufinden, mit separaten Tabs je nach Elementtyp.

### Personalisierung

Eine Einstellungsseite erlaubt es, mehrere Aspekte der Oberfläche anzupassen, etwa den Dunkelmodus, die angezeigte Tiefe der Baumstruktur oder andere visuelle Einstellungen. Sie ermöglicht es auch, die lokal gespeicherten Nutzungsdaten zurückzusetzen, wie Favoriten, Suchanfragen, Einstellungen oder Protokolle.

Ein eigener Tab fasst zudem die Nutzungsprotokolle zusammen — besuchte Seiten, Suchanfragen, Favoriten — sowie eine statistische Übersicht, um die wichtigsten Nutzungsmuster zu visualisieren.

### Download

Die im Browser gespeicherten Nutzungsdaten können jederzeit als komprimierte Datei (ZIP) exportiert oder importiert werden.

Die Tabellen des Katalogs lassen sich ebenfalls einfach exportieren, entweder durch Kopieren in die Zwischenablage oder im CSV- oder Excel-Format (XLSX).

### Interoperabilität

datannur kann die Metadaten des Katalogs über eine REST-API bereitstellen und einen DCAT-Export erzeugen. Diese Mechanismen ermöglichen es, den Katalog in andere Werkzeuge zu integrieren, Open-Data-Portale zu speisen oder die Metadaten in bestehenden Verarbeitungsketten wiederzuverwenden.

Für Geodaten sind die räumlichen Metadaten (Koordinatensystem, Ausdehnung, Auflösung) normalisiert und können von Geodateninfrastrukturen wie INSPIRE oder GeoCAT geerntet werden.

### Interne Sicht

datannur enthält eine interne Sicht, die es erlaubt, die Struktur seiner eigenen Metadaten direkt zu erkunden. Der Katalog wird so von innen lesbar: Man sieht, wie die Informationen organisiert, verknüpft und gespeichert sind.

Diese Transparenz hilft, die Funktionsweise des Werkzeugs zu verstehen, die internen Strukturen zu prüfen und sich den Katalog für fortgeschrittenere Anwendungsfälle anzueignen.
