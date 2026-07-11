---
key: structure
title: Struktur — Wie datannur den Katalog organisiert
description: Verstehen Sie, wie datannur den Katalog rund um Datasets, Variablen, Aufzählungen, Ordner, Organisationen, Schlagwörter und Dokumente organisiert.
icon: diagram-project
plainImages: true
---

datannur beruht auf 8 Hauptkonzepten, die sich in zwei Kategorien gliedern:

- **Daten des Datasets**: für Elemente, die direkt mit den Daten selbst zusammenhängen
- **Kontext des Datasets**: für Elemente, die Datasets strukturieren, organisieren oder anreichern

![Die zwei Teile eines Datasets](diagram:dataset-parts)

## Daten des Datasets

### Dataset

Ein Dataset stellt eine Datentabelle dar – sei es eine Datenbank oder eine Datei (Excel, CSV usw.) – organisiert in Tabellenform. Diese Tabelle besteht aus Zeilen, die Individuen oder Beobachtungen entsprechen, und Spalten, die Variablen oder Attribute sind. Jede Variable enthält eine Liste von Werten, die sich von einem Individuum zum anderen unterscheiden.

![Diagramm Dataset und Variablen](diagram:dataset-variable)

### Variable

Manche Variablen sind kategorial, mit möglichen Werten, die durch eine Aufzählung definiert sind. Eine Variable kann mit mehreren Aufzählungen verknüpft sein und umgekehrt. Sie kann auch einem Konzept des Fachglossars zugeordnet werden, um die genaue Bedeutung des gemessenen Begriffs zu präzisieren. Jede Variable kann zudem zugehörige Häufigkeitsdaten haben.

![Diagramm der Beziehungen einer Variable](diagram:variable)

### Häufigkeit

Häufigkeiten erlauben es, die Anzahl der Vorkommen jedes einzelnen Wertes innerhalb einer Variable zu zählen. Das bietet eine statistische Sicht auf die Datenverteilung und hilft, die häufigsten oder seltensten Werte zu erkennen. Jeder Häufigkeitseintrag enthält einen Wert und die Anzahl seiner Vorkommen.

### Aufzählung

Eine Aufzählung fasst eine Menge möglicher Werte für eine oder mehrere kategoriale Variablen zusammen. Jeder Wert kann mit einer Beschreibung versehen sein, die seine Bedeutung präzisiert.

![Diagramm Aufzählung und Werte](diagram:enumeration-value)

## Kontext des Datasets

### Ordner

Datasets und Aufzählungen können in Ordnern organisiert werden. Ordner können ineinander verschachtelt sein und bilden so eine hierarchische Baumstruktur, um Ihre Daten zu organisieren.

![Diagramm der Ordnerhierarchie](diagram:folder)

### Organisation

Ein Ordner oder ein Dataset kann mit zwei Arten von Rollen verknüpft sein, die von einer Organisation wahrgenommen werden:

- **Anbieter**: die Einheit, die die Daten erstellt oder teilt
- **Verwalter**: die Einheit, die sie pflegt und ihre Qualität sicherstellt

Organisationen können ebenfalls hierarchisch organisiert sein, wobei sie ineinander verschachtelt sind.

![Diagramm der Rollen einer Organisation](diagram:organization)

### Schlagwort

Schlagwörter dienen dazu, Organisationen, Ordner, Datasets, Variablen oder Konzepte mit übergreifenden Themen oder Kategorien anzureichern. Ein Schlagwort kann mit einer Vielzahl von Elementen verknüpft sein und ebenfalls hierarchisch organisiert werden.

![Diagramm der Beziehungen eines Schlagworts](diagram:tag)

### Konzept

Die Konzepte des Fachglossars dienen dazu, bestimmte in den Daten verwendete Begriffe präzise zu definieren. Anders als Schlagwörter klassifizieren sie nicht nach Themen: Sie beschreiben eine explizite fachliche Bedeutung. Ein Konzept kann hierarchisch organisiert, mit mehreren Variablen verknüpft und durch Schlagwörter oder Docs angereichert werden.

![Diagramm der Beziehungen eines Konzepts](diagram:concept)

### Doc

Dokumentationen (Docs) im Markdown- oder PDF-Format können Organisationen, Ordnern, Schlagwörtern, Konzepten oder Datasets zugeordnet werden. Sie ermöglichen es, diese Elemente ausführlich zu beschreiben oder zu erklären.

![Diagramm der Beziehungen eines Docs](diagram:doc)

## Gesamtübersicht

Die Konzepte von datannur sind miteinander verbunden und bieten grosse Flexibilität, um Ihre Daten zu organisieren, anzureichern und zu dokumentieren. So hängen sie zusammen:

![Gesamtübersicht der datannur-Konzepte und ihrer Beziehungen](diagram:all)
