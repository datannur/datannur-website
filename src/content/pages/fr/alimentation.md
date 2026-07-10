---
key: data-ingestion
title: Alimentation — Scan de fichiers et bases de données
description: datannurpy scanne fichiers et bases de données pour alimenter le catalogue avec une approche légère, modulaire et sans infrastructure dédiée.
icon: plug-circle-check
---

Le catalogue datannur repose sur des métadonnées structurées décrivant les jeux de données, leurs variables, leurs énumérations, leur organisation et leur documentation. Ces métadonnées peuvent être préparées de différentes manières : à partir d’un scan automatisé, de fichiers maintenus manuellement, ou d’outils tiers déjà en place dans l’organisation.

L’enjeu n’est pas seulement d’afficher un catalogue, mais de pouvoir l’alimenter, le mettre à jour et l’enrichir de manière fiable dans le temps. datannur adopte pour cela une approche modulaire, avec d’un côté l’interface du catalogue, et de l’autre un module de scan et d’alimentation. Un package Python et un fichier de configuration suffisent pour alimenter le catalogue, sans besoin de serveur ni d’infrastructure dédiée.

## Une architecture modulaire

datannur et datannurpy sont deux modules séparés et compatibles. datannur fournit l’interface du catalogue, tandis que datannurpy facilite le scan, la préparation et l’export des métadonnées.

Cette séparation permet une grande souplesse d’usage : chaque module peut être utilisé seul, combiné à l’autre, ou intégré dans un dispositif plus large avec d’autres outils. datannurpy peut par exemple produire des métadonnées exploitées ailleurs que dans l’interface datannur. Inversement, le catalogue peut être alimenté par d’autres solutions.

## Le rôle de datannurpy

datannurpy est le package Python qui facilite le scan et l’alimentation du catalogue. Il permet d’explorer des fichiers, des bases de données ou des arborescences existantes, d’en extraire les schémas et les métadonnées utiles, puis de produire une base de métadonnées exploitable par l’interface datannur ou par d’autres outils.

Son rôle n’est pas seulement de lire des sources, mais aussi de structurer l’information : détection des datasets, variables et énumérations, calcul de statistiques descriptives et de fréquences, suivi d’évolution entre les scans, fusion avec des métadonnées maintenues manuellement, puis export vers une base de métadonnées ou une application complète prête à l’emploi.

## Sources prises en charge

datannurpy est compatible avec la grande majorité des sources de données tabulaires et des bases de données relationnelles. Il peut scanner aussi bien des fichiers tabulaires, comme CSV ou Excel, que des formats colonnaires, comme Parquet, Delta Lake, Apache Iceberg ou des répertoires partitionnés. Il prend également en charge plusieurs formats statistiques, comme SAS, SPSS ou Stata.

Côté bases de données, il peut se connecter à des systèmes relationnels courants comme PostgreSQL, MySQL, Oracle, SQL Server, SQLite ou DuckDB. Il peut aussi travailler sur des stockages distants ou cloud, ainsi qu’avec des métadonnées maintenues manuellement, afin de combiner automatisation et enrichissement métier.

S’y ajoutent les formats géospatiaux, en vecteur (GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML, ESRI File Geodatabase) comme en raster (GeoTIFF), en local comme à distance, dont il extrait le système de coordonnées, l’emprise, le type de géométrie et la résolution.

Il peut également regrouper automatiquement des fichiers appartenant à une même série temporelle, afin de produire un dataset unique avec une couverture temporelle cohérente.

## Une alimentation simple et flexible

datannurpy peut être utilisé de plusieurs façons selon le contexte. Il peut s’intégrer dans un script Python, être piloté par un fichier de configuration YAML, ou être inséré dans un pipeline plus large déjà en place dans l’organisation. Cette souplesse permet aussi bien de lancer un premier scan rapide que de mettre à jour régulièrement un catalogue existant.

Le package reste volontairement léger : pas de serveur à déployer, pas d’infrastructure dédiée, pas d’architecture imposée. Il prend en charge des mécanismes utiles en pratique, comme le scan incrémental, le suivi d’évolution entre deux exports, ou l’export direct vers une base de métadonnées ou une application datannur complète. Il facilite ainsi la mise à jour du catalogue dans le temps, dans un format portable, léger et réutilisable.

datannurpy est disponible sur [PyPI](https://pypi.org/project/datannurpy/) et [GitHub](https://github.com/datannur/datannurpy).
