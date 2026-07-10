---
key: geodata
title: Géodonnées — Inventorier vos données géographiques
description: "Inventoriez vos données géographiques, vecteur et raster, dans un catalogue généraliste et souverain : CRS, emprise, résolution, interopérable INSPIRE/GeoCAT."
icon: earth-europe
---

Les organisations qui produisent de la donnée géographique disposent souvent d’un géoportail pour la diffuser, mais d’aucun inventaire unifié de l’ensemble de leur patrimoine. datannur scanne les fichiers et bases géospatiales et les catalogue aux côtés des données tabulaires, statistiques et relationnelles, dans un catalogue léger, généraliste et souverain.

## Formats géospatiaux pris en charge

datannur prend en charge les principaux formats vecteur — GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML et les géodatabases ESRI (File Geodatabase, un conteneur multi-couches dont chaque couche devient un dataset) — ainsi que le raster GeoTIFF. Ces sources sont scannées en local comme à distance (SFTP, S3, Azure, GCS), exactement comme les autres formats du catalogue.

## Métadonnées spatiales extraites

Pour chaque jeu de données spatial, datannur extrait le système de coordonnées natif (par exemple EPSG:2056), l’emprise reprojetée en WGS84, le type de géométrie et, pour le raster, la résolution spatiale. Les colonnes attributaires sont décrites comme n’importe quelle donnée tabulaire — schéma, types et statistiques — et chaque bande d’un raster devient une variable à part entière.

## Interopérabilité

Les métadonnées spatiales sont normalisées et alignées sur les standards du domaine (ISO 19115, STAC, DCAT). Elles peuvent ainsi être moissonnées par les infrastructures de données géographiques telles qu’INSPIRE ou GeoCAT / geocat.ch, et réutilisées dans les chaînes de traitement existantes.

## Un inventaire, pas un géoportail

datannur décrit et inventorie vos données géographiques ; il ne les sert pas. Il ne fournit ni rendu cartographique, ni services WMS / WFS / CSW, ni requêtes spatiales : il vient compléter un SIG ou un géoportail existant, pas le remplacer. C’est précisément ce qui en fait un inventaire pertinent pour les administrations et organisations — souvent publiques — qui détiennent à la fois de la donnée géo et non-géo et veulent en garder le contrôle.
