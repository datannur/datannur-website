---
key: data-ingestion
title: Alimentazione dati — Scansione di file e database
description: datannurpy scansiona file e database per alimentare il catalogo con un approccio leggero, modulare e senza infrastruttura dedicata.
icon: plug-circle-check
---

Il catalogo datannur si basa su metadati strutturati che descrivono i dataset, le loro variabili, le loro enumerazioni, la loro organizzazione e la loro documentazione. Questi metadati possono essere preparati in diversi modi: tramite una scansione automatizzata, file gestiti manualmente o strumenti di terze parti già in uso nell'organizzazione.

La sfida non è solo visualizzare un catalogo, ma poterlo alimentare, aggiornare e arricchire in modo affidabile nel tempo. datannur adotta per questo un approccio modulare: da un lato l'interfaccia del catalogo, dall'altro un modulo di scansione e alimentazione dati. Un package Python e un file di configurazione bastano per alimentare il catalogo, senza server né infrastruttura dedicata.

## Un'architettura modulare

datannur e datannurpy sono due moduli separati e compatibili. datannur fornisce l'interfaccia del catalogo, mentre datannurpy facilita la scansione, la preparazione e l'esportazione dei metadati.

Questa separazione offre grande flessibilità d'uso: ogni modulo può essere utilizzato da solo, combinato con l'altro o integrato in un sistema più ampio insieme ad altri strumenti. datannurpy può ad esempio produrre metadati utilizzati al di fuori dell'interfaccia datannur. Viceversa, il catalogo può essere alimentato da altre soluzioni.

## Il ruolo di datannurpy

datannurpy è il package Python che facilita la scansione e l'alimentazione del catalogo. Permette di esplorare file, database o strutture ad albero esistenti, di estrarne gli schemi e i metadati utili, e di produrre poi una base di metadati utilizzabile dall'interfaccia datannur o da altri strumenti.

Il suo ruolo non è solo leggere le sorgenti, ma anche strutturare le informazioni: rilevamento di dataset, variabili ed enumerazioni, calcolo di statistiche descrittive e di frequenze, monitoraggio dell'evoluzione tra una scansione e l'altra, unione con metadati gestiti manualmente, quindi esportazione verso una base di metadati o un'applicazione completa pronta all'uso.

## Sorgenti supportate

datannurpy è compatibile con la grande maggioranza delle sorgenti di dati tabellari e dei database relazionali. Può scansionare sia file tabellari, come CSV o Excel, sia formati colonnari, come Parquet, Delta Lake, Apache Iceberg o directory partizionate. Supporta inoltre diversi formati statistici, come SAS, SPSS o Stata.

Sul fronte dei database, può connettersi ai sistemi relazionali più diffusi come PostgreSQL, MySQL, Oracle, SQL Server, SQLite o DuckDB. Può anche lavorare su storage remoti o cloud, così come con metadati gestiti manualmente, per combinare automazione e arricchimento di business.

A questi si aggiungono i formati geospaziali, sia vettoriali (GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML, ESRI File Geodatabase) sia raster (GeoTIFF), in locale come in remoto, da cui estrae il sistema di coordinate, l'estensione, il tipo di geometria e la risoluzione.

Può inoltre raggruppare automaticamente i file appartenenti a una stessa serie temporale, per produrre un unico dataset con una copertura temporale coerente.

## Un'alimentazione dati semplice e flessibile

datannurpy può essere utilizzato in diversi modi a seconda del contesto. Può integrarsi in uno script Python, essere pilotato da un file di configurazione YAML o inserirsi in una pipeline più ampia già in uso nell'organizzazione. Questa flessibilità consente sia di lanciare una prima scansione rapida, sia di aggiornare regolarmente un catalogo esistente.

Il package resta volutamente leggero: nessun server da installare, nessuna infrastruttura dedicata, nessuna architettura imposta. Supporta meccanismi utili nella pratica, come la scansione incrementale, il monitoraggio delle modifiche tra due esportazioni o l'esportazione diretta verso una base di metadati o un'applicazione datannur completa. Facilita così l'aggiornamento del catalogo nel tempo, in un formato portabile, leggero e riutilizzabile.

datannurpy è disponibile su [PyPI](https://pypi.org/project/datannurpy/) e [GitHub](https://github.com/datannur/datannurpy).
