---
key: structure
title: Struktur — Wie datannur den Katalog organisiert
description: Verstehen Sie, wie datannur den Katalog rund um Datasets, Variablen, Enumerationen, Ordner, Organisationen, Schlagwörter und Dokumente organisiert.
icon: diagram-project
plainImages: true
---

datannur beruht auf 8 Hauptkonzepten, die sich in zwei Kategorien gliedern:

- **Datenebene**: für Elemente, die direkt mit den Daten selbst zusammenhängen
- **Kontextebene**: für Elemente, die Datasets strukturieren, organisieren oder anreichern

![Die zwei Ebenen eines Datasets](/images/dataset_two_parts.en.webp "w=310")

## Daten des Datasets

### Dataset

Ein Dataset stellt eine Datentabelle dar — sei es eine Datenbank oder eine Datei (Excel, CSV usw.) — organisiert in Tabellenform. Diese Tabelle besteht aus Zeilen, die Individuen oder Beobachtungen entsprechen, und Spalten, die Variablen oder Attribute sind. Jede Variable enthält eine Liste von Werten, die sich von einem Individuum zum anderen unterscheiden.

![Diagramm Dataset und Variablen](/images/dataset_variable.png "w=143")

### Variable

Manche Variablen sind kategorial, mit möglichen Werten, die durch eine Enumeration definiert sind. Eine Variable kann mit mehreren Enumerationen verknüpft sein und umgekehrt. Sie kann auch einem Konzept des Fachglossars zugeordnet werden, um die genaue Bedeutung des gemessenen Begriffs zu präzisieren. Jede Variable kann zudem zugehörige Häufigkeitsdaten haben.

![Diagramm der Beziehungen einer Variable](/images/structure_variable2.en.webp "w=358")

### Häufigkeit

Häufigkeiten erlauben es, die Anzahl der Vorkommen jedes einzelnen Wertes innerhalb einer Variable zu zählen. Das bietet eine statistische Sicht auf die Datenverteilung und hilft, die häufigsten oder seltensten Werte zu erkennen. Jeder Häufigkeitseintrag enthält einen Wert und die Anzahl seiner Vorkommen.

### Enumeration

Eine Enumeration fasst eine Menge möglicher Werte für eine oder mehrere kategoriale Variablen zusammen. Jeder Wert kann mit einer Beschreibung versehen sein, die seine Bedeutung präzisiert.

![Diagramm Enumeration und Werte](/images/modality_value2.en.png "w=160")

## Kontext des Datasets

### Ordner

Datasets und Enumerationen können in Ordnern organisiert werden. Ordner können ineinander verschachtelt sein und bilden so eine hierarchische Baumstruktur, um Ihre Daten zu organisieren.

![Diagramm der Ordnerhierarchie](/images/folder3.en.png "w=309")

### Organisation

Ein Ordner oder ein Dataset kann mit zwei Arten von Rollen verknüpft sein, die von einer Organisation wahrgenommen werden:

- **Anbieter**: die Einheit, die die Daten erstellt oder teilt
- **Verwalter**: die Einheit, die sie pflegt und ihre Qualität sicherstellt

Organisationen können ebenfalls hierarchisch organisiert sein, indem sie ineinander enthalten sind.

![Diagramm der Rollen einer Organisation](/images/organisation2.en.png "w=337")

### Schlagwort

Schlagwörter dienen dazu, Organisationen, Ordner, Datasets, Variablen oder Konzepte mit übergreifenden Themen oder Kategorien anzureichern. Ein Schlagwort kann mit einer Vielzahl von Elementen verknüpft sein und ebenfalls hierarchisch organisiert werden.

![Diagramm der Beziehungen eines Schlagworts](/images/structure_tag2.en.png)

### Konzept

Die Konzepte des Fachglossars dienen dazu, bestimmte in den Daten verwendete Begriffe präzise zu definieren. Anders als Schlagwörter klassifizieren sie nicht nach Themen: Sie beschreiben eine explizite fachliche Bedeutung. Ein Konzept kann hierarchisch organisiert, mit mehreren Variablen verknüpft und durch Schlagwörter oder Dokumente angereichert werden.

![Diagramm der Beziehungen eines Konzepts](/images/structure_concept.en.png "w=435")

### Doc

Dokumentationen (Docs) im Markdown- oder PDF-Format können Organisationen, Ordnern, Schlagwörtern, Konzepten oder Datasets zugeordnet werden. Sie ermöglichen es, diese Elemente ausführlich zu beschreiben oder zu erklären.

![Diagramm der Beziehungen eines Docs](/images/structure_doc2.en.png)

## Gesamtübersicht

Die Konzepte von datannur sind miteinander verbunden und bieten grosse Flexibilität, um Ihre Daten zu organisieren, anzureichern und zu dokumentieren. So hängen sie zusammen:

![Gesamtübersicht der datannur-Konzepte und ihrer Beziehungen](/images/structure_all2.en.png)
