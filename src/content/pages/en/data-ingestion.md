---
key: data-ingestion
title: Data Ingestion — File and Database Scanning
description: datannurpy scans files and databases to populate the catalog with a lightweight, modular approach requiring no dedicated infrastructure.
icon: plug-circle-check
---

The datannur catalog relies on structured metadata describing datasets, their variables, enumerations, organization, and documentation. This metadata can be prepared in various ways: from automated scanning, manually maintained files, or third-party tools already in place within the organization.

The challenge is not only to display a catalog, but to populate, update, and enrich it reliably over time. datannur adopts a modular approach, with the catalog interface on one side and a scanning and ingestion module on the other. A Python package and a configuration file are sufficient to populate the catalog, with no need for a server or dedicated infrastructure.

## A Modular Architecture

datannur and datannurpy are two separate and compatible modules. datannur provides the catalog interface, while datannurpy facilitates the scanning, preparation, and export of metadata.

This separation allows for great flexibility in use: each module can be used alone, combined with the other, or integrated into a larger system with other tools. datannurpy can, for example, produce metadata used elsewhere than in the datannur interface. Conversely, the catalog can be populated by other solutions.

## The Role of datannurpy

datannurpy is the Python package that facilitates catalog scanning and ingestion. It allows exploration of files, databases, or existing directory structures, extraction of schemas and useful metadata, and production of a metadata repository usable by the datannur interface or other tools.

Its role is not only to read sources, but also to structure information: detection of datasets, variables and enumerations, calculation of descriptive statistics and frequencies, monitoring of evolution between scans, merging with manually maintained metadata, then export to a metadata database or a complete ready-to-use application.

## Supported Sources

datannurpy is compatible with the vast majority of tabular data sources and relational databases. It can scan both tabular files, such as CSV or Excel, and columnar formats, such as Parquet, Delta Lake, Apache Iceberg, or partitioned directories. It also supports several statistical formats, such as SAS, SPSS, or Stata.

For databases, it can connect to common relational systems such as PostgreSQL, MySQL, Oracle, SQL Server, SQLite, or DuckDB. It can also work with remote or cloud storage, as well as with manually maintained metadata, to combine automation and business enrichment.

On the geospatial side, it covers both vector formats (GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML, ESRI File Geodatabase) and rasters (GeoTIFF), locally or remotely, and extracts the coordinate reference system, bounding box, geometry type, and resolution.

It can also automatically group files belonging to the same time series, to produce a single dataset with consistent temporal coverage.

## Simple and Flexible Ingestion

datannurpy can be used in several ways depending on the context. It can be integrated into a Python script, controlled by a YAML configuration file, or inserted into a larger pipeline already in place within the organization. This flexibility allows both launching a quick initial scan and regularly updating an existing catalog.

The package remains intentionally lightweight: no server to deploy, no dedicated infrastructure, no imposed architecture. It supports mechanisms useful in practice, such as incremental scanning, tracking changes between two exports, or direct export to a metadata repository or a complete datannur application. It thus facilitates catalog updates over time, in a portable, lightweight, and reusable format.

datannurpy is available on [PyPI](https://pypi.org/project/datannurpy/) and [GitHub](https://github.com/datannur/datannurpy).
