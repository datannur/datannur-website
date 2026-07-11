---
key: geodata
title: Geodati — Inventariate i vostri dati geografici
description: "Inventariate i vostri dati geografici, vettoriali e raster, in un catalogo generalista e sovrano: CRS, estensione, risoluzione, interoperabile con INSPIRE/GeoCAT."
icon: earth-europe
---

Le organizzazioni che producono dati geografici dispongono spesso di un geoportale per diffonderli, ma di nessun inventario unificato dell'insieme del loro patrimonio. datannur scansiona i file e i database geospaziali e li cataloga accanto ai dati tabellari, statistici e relazionali, in un catalogo leggero, generalista e sovrano.

## Formati geospaziali supportati

datannur supporta i principali formati vettoriali — GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML e i geodatabase ESRI (File Geodatabase, un contenitore multi-layer in cui ogni layer diventa un dataset) — oltre al raster GeoTIFF. Queste sorgenti vengono scansionate in locale come in remoto (SFTP, S3, Azure, GCS), esattamente come gli altri formati del catalogo.

## Metadati spaziali estratti

Per ogni dataset spaziale, datannur estrae il sistema di coordinate nativo (ad esempio EPSG:2056), l'estensione riproiettata in WGS84, il tipo di geometria e, per il raster, la risoluzione spaziale. Le colonne attributive vengono descritte come qualsiasi altro dato tabellare — schema, tipi e statistiche — e ogni banda di un raster diventa una variabile a pieno titolo.

## Interoperabilità

I metadati spaziali sono normalizzati e allineati agli standard del settore (ISO 19115, STAC, DCAT). Possono quindi essere raccolti tramite harvesting dalle infrastrutture di dati geografici come INSPIRE o GeoCAT / geocat.ch e riutilizzati nelle catene di elaborazione esistenti.

## Un inventario, non un geoportale

datannur descrive e inventaria i vostri dati geografici; non li distribuisce. Non fornisce né rendering cartografico, né servizi WMS / WFS / CSW, né query spaziali: completa un GIS o un geoportale esistente, senza sostituirlo. È proprio questo a renderlo un inventario pertinente per le amministrazioni e le organizzazioni — spesso pubbliche — che possiedono sia dati geografici sia non geografici e vogliono mantenerne il controllo.
