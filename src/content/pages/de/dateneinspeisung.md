---
key: data-ingestion
title: Dateneinspeisung — Scannen von Dateien und Datenbanken
description: datannurpy scannt Dateien und Datenbanken, um den Katalog mit einem leichtgewichtigen, modularen Ansatz ohne dedizierte Infrastruktur zu befüllen.
icon: plug-circle-check
---

Der datannur-Katalog beruht auf strukturierten Metadaten, die die Datensätze, ihre Variablen, ihre Aufzählungen, ihre Organisation und ihre Dokumentation beschreiben. Diese Metadaten können auf verschiedene Weise erstellt werden: durch einen automatisierten Scan, manuell gepflegte Dateien oder bereits in der Organisation vorhandene Werkzeuge von Drittanbietern.

Die Herausforderung besteht nicht nur darin, einen Katalog anzuzeigen, sondern ihn im Zeitverlauf zuverlässig zu befüllen, zu aktualisieren und anzureichern. datannur verfolgt dafür einen modularen Ansatz: auf der einen Seite die Katalogoberfläche, auf der anderen ein Scan- und Einspeisungsmodul. Ein Python-Paket und eine Konfigurationsdatei genügen, um den Katalog zu befüllen – ohne Server und ohne dedizierte Infrastruktur.

## Eine modulare Architektur

datannur und datannurpy sind zwei getrennte und kompatible Module. datannur liefert die Katalogoberfläche, während datannurpy das Scannen, die Aufbereitung und den Export der Metadaten erleichtert.

Diese Trennung ermöglicht grosse Flexibilität in der Nutzung: Jedes Modul kann allein verwendet, mit dem anderen kombiniert oder in ein grösseres System mit anderen Werkzeugen integriert werden. datannurpy kann zum Beispiel Metadaten erzeugen, die ausserhalb der datannur-Oberfläche genutzt werden. Umgekehrt kann der Katalog durch andere Lösungen befüllt werden.

## Die Rolle von datannurpy

datannurpy ist das Python-Paket, das das Scannen und die Einspeisung des Katalogs erleichtert. Es ermöglicht, Dateien, Datenbanken oder bestehende Ordnerstrukturen zu erkunden, daraus Schemata und nützliche Metadaten zu extrahieren und dann eine Metadatenbank zu erzeugen, die von der datannur-Oberfläche oder anderen Werkzeugen genutzt werden kann.

Seine Rolle besteht nicht nur darin, Quellen zu lesen, sondern auch die Informationen zu strukturieren: Erkennung von Datasets, Variablen und Aufzählungen, Berechnung deskriptiver Statistiken und Häufigkeiten, Verfolgung der Entwicklung zwischen den Scans, Zusammenführung mit manuell gepflegten Metadaten, dann Export in eine Metadatenbank oder eine vollständige, einsatzbereite Anwendung.

## Unterstützte Quellen

datannurpy ist mit den allermeisten tabellarischen Datenquellen und relationalen Datenbanken kompatibel. Es kann sowohl tabellarische Dateien wie CSV oder Excel scannen als auch spaltenorientierte Formate wie Parquet, Delta Lake, Apache Iceberg oder partitionierte Verzeichnisse. Es unterstützt zudem mehrere Statistikformate wie SAS, SPSS oder Stata.

Bei den Datenbanken kann es sich mit gängigen relationalen Systemen wie PostgreSQL, MySQL, Oracle, SQL Server, SQLite oder DuckDB verbinden. Es kann auch mit entfernten oder Cloud-Speichern arbeiten sowie mit manuell gepflegten Metadaten, um Automatisierung und fachliche Anreicherung zu kombinieren.

Hinzu kommen die Geoformate, sowohl Vektor (GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML, ESRI File Geodatabase) als auch Raster (GeoTIFF), lokal wie remote, aus denen es das Koordinatensystem, die Ausdehnung, den Geometrietyp und die Auflösung extrahiert.

Es kann ausserdem Dateien, die zu derselben Zeitreihe gehören, automatisch gruppieren, um ein einziges Dataset mit konsistenter zeitlicher Abdeckung zu erzeugen.

## Eine einfache und flexible Einspeisung

datannurpy kann je nach Kontext auf verschiedene Weise genutzt werden. Es lässt sich in ein Python-Skript integrieren, über eine YAML-Konfigurationsdatei steuern oder in eine grössere, bereits in der Organisation bestehende Pipeline einfügen. Diese Flexibilität erlaubt sowohl einen schnellen ersten Scan als auch die regelmässige Aktualisierung eines bestehenden Katalogs.

Das Paket bleibt bewusst leichtgewichtig: kein Serverbetrieb, keine dedizierte Infrastruktur, keine vorgegebene Architektur. Es unterstützt in der Praxis nützliche Mechanismen wie inkrementelles Scannen, die Verfolgung von Änderungen zwischen zwei Exporten oder den direkten Export in eine Metadatenbank oder eine vollständige datannur-Anwendung. So erleichtert es die Aktualisierung des Katalogs im Zeitverlauf, in einem portablen, leichten und wiederverwendbaren Format.

datannurpy ist auf [PyPI](https://pypi.org/project/datannurpy/) und [GitHub](https://github.com/datannur/datannurpy) verfügbar.
