---
key: structure
title: Structure — Comment datannur organise le catalogue
description: Comprenez comment datannur organise le catalogue autour des datasets, variables, modalités, dossiers, institutions, mots clés et documents.
icon: diagram-project
plainImages: true
---

datannur repose sur 8 concepts principaux, qui se répartissent en deux catégories :

- **Données du dataset** : pour les éléments directement liés aux données elles-mêmes
- **Contexte du dataset** : pour les éléments qui structurent, organisent ou enrichissent les datasets

![Les deux parties d’un dataset](diagram:dataset-parts)

## Données du dataset

### Dataset

Un dataset représente une table de données, qu’il s’agisse d’une base de données ou d’un fichier (Excel, CSV, etc.), organisé sous forme de tableau. Ce tableau est composé de lignes, correspondant aux individus ou observations, et de colonnes, qui sont des variables ou attributs. Chaque variable regroupe une liste de valeurs, qui diffèrent d’un individu à l’autre.

![Schéma dataset et variables](diagram:dataset-variable)

### Variable

Certaines variables sont de type catégoriel, avec des valeurs possibles définies par une énumération. Une variable peut être liée à plusieurs énumérations, et inversement. Elle peut aussi être rattachée à un concept du glossaire métier pour préciser le sens exact de la notion mesurée. Chaque variable peut également avoir des données de fréquence associées.

![Schéma des relations d’une variable](diagram:variable)

### Fréquence

Les fréquences permettent de comptabiliser le nombre d’occurrences de chaque valeur spécifique au sein d’une variable. Cela offre une vue statistique de la distribution des données et aide à identifier les valeurs les plus communes ou rares. Chaque entrée de fréquence contient une valeur et son nombre d’occurrences.

### Enumération

Une énumération regroupe un ensemble de valeurs possibles pour une ou plusieurs variables catégorielles. Chaque valeur peut être accompagnée d’une description pour en préciser le sens.

![Schéma énumération et valeurs](diagram:enumeration-value)

## Contexte du dataset

### Dossier

Les datasets et les énumérations peuvent être organisés dans des dossiers. Les dossiers peuvent s’imbriquer les uns dans les autres, formant une arborescence hiérarchique pour structurer vos données.

![Schéma de la hiérarchie des dossiers](diagram:folder)

### Organisation

Un dossier ou un dataset peut être associé à deux types de rôles incarnés par une organisation :

- **Fournisseur** : l’entité qui produit ou partage les données
- **Gestionnaire** : l’entité qui les maintient et en garantit la qualité

Les organisations peuvent également s’organiser de manière hiérarchique, en étant contenues les unes dans les autres.

![Schéma des rôles d’une organisation](diagram:organization)

### Mot clé

Les mots clés servent à enrichir les organisations, dossiers, datasets, variables ou concepts avec des thématiques ou des catégories transversales. Un mot clé peut être lié à une multitude d’éléments et peut aussi être organisé en hiérarchie.

![Schéma des relations d’un mot clé](diagram:tag)

### Concept

Les concepts du glossaire métier servent à définir précisément certaines notions utilisées dans les données. Contrairement aux mots clés, ils ne classifient pas par thème : ils décrivent un sens métier explicite. Un concept peut être organisé en hiérarchie, être relié à plusieurs variables, et être enrichi par des mots clés ou des docs.

![Schéma des relations d’un concept](diagram:concept)

### Doc

Des documentations (docs) au format Markdown ou PDF peuvent être associées à des organisations, dossiers, mots clés, concepts ou datasets. Elles permettent de décrire ou expliquer en détail ces éléments.

![Schéma des relations d’un doc](diagram:doc)

## Vision d’ensemble

Les concepts de datannur sont interconnectés, offrant une grande flexibilité pour organiser, enrichir et documenter vos données. Voici comment ils sont reliés :

![Vue d’ensemble des concepts datannur et de leurs relations](diagram:all)
