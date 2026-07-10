---
key: geodata
title: Geodaten — Inventarisieren Sie Ihre geografischen Daten
description: "Inventarisieren Sie Ihre Geodaten, Vektor und Raster, in einem leichten, souveränen Katalog: CRS, Ausdehnung, Auflösung, erntbar für INSPIRE/GeoCAT."
icon: earth-europe
---

Organisationen, die geografische Daten erstellen, verfügen oft über ein Geoportal, um sie zu verbreiten, aber über kein einheitliches Inventar ihres gesamten Datenbestands. datannur scannt Geodateien und -datenbanken und katalogisiert sie neben tabellarischen, statistischen und relationalen Daten — in einem leichtgewichtigen, universellen und souveränen Katalog.

## Unterstützte Geoformate

datannur unterstützt die wichtigsten Vektorformate — GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML und ESRI-Geodatabases (File Geodatabase, ein Multi-Layer-Container, bei dem jede Ebene zu einem Dataset wird) — sowie GeoTIFF-Raster. Diese Quellen werden lokal wie remote gescannt (SFTP, S3, Azure, GCS), genau wie alle anderen Formate des Katalogs.

## Extrahierte räumliche Metadaten

Für jedes räumliche Dataset extrahiert datannur das native Koordinatenreferenzsystem (zum Beispiel EPSG:2056), die nach WGS84 umprojizierte Ausdehnung, den Geometrietyp und, beim Raster, die räumliche Auflösung. Die Attributspalten werden wie beliebige tabellarische Daten beschrieben — Schema, Typen und Statistiken — und jedes Rasterband wird zu einer eigenständigen Variable.

## Interoperabilität

Die räumlichen Metadaten sind normalisiert und an den Standards des Fachgebiets ausgerichtet (ISO 19115, STAC, DCAT). Sie können daher von Geodateninfrastrukturen wie INSPIRE oder GeoCAT / geocat.ch geerntet und in bestehenden Verarbeitungsketten wiederverwendet werden.

## Ein Inventar, kein Geoportal

datannur beschreibt und inventarisiert Ihre geografischen Daten; es stellt sie nicht bereit. Es bietet weder Kartendarstellung noch WMS-/WFS-/CSW-Dienste noch räumliche Abfragen: Es ergänzt ein bestehendes GIS oder Geoportal, statt es zu ersetzen. Genau das macht es zu einem relevanten Inventar für Behörden und Organisationen — oft aus dem öffentlichen Sektor — die sowohl Geo- als auch Nicht-Geodaten besitzen und die Kontrolle darüber behalten wollen.
