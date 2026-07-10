---
key: geodata
title: Geodata — Inventory your geographic data
description: "Inventory your geographic data, vector and raster, in a lightweight, sovereign data catalog: CRS, bounding box, resolution, harvestable for INSPIRE/GeoCAT."
icon: earth-europe
---

Organizations that produce geographic data often have a geoportal to publish it, but no unified inventory of their entire data estate. datannur scans geospatial files and databases and catalogs them alongside tabular, statistical, and relational data, in a lightweight, generalist, sovereign catalog.

## Supported geospatial formats

datannur supports the main vector formats — GeoJSON, Shapefile, GeoPackage, GeoParquet, GML, KML, and ESRI File Geodatabases (a multi-layer container whose every layer becomes a dataset) — as well as GeoTIFF rasters. These sources are scanned both locally and remotely (SFTP, S3, Azure, GCS), exactly like any other format in the catalog.

## Extracted spatial metadata

For each spatial dataset, datannur extracts the native coordinate reference system (for example EPSG:2056), the bounding box reprojected to WGS84, the geometry type and, for rasters, the spatial resolution. Attribute columns are described like any tabular data — schema, types, and statistics — and each raster band becomes a variable in its own right.

## Interoperability

The spatial metadata is normalized and aligned with the domain standards (ISO 19115, STAC, DCAT). It can therefore be harvested by spatial data infrastructures such as INSPIRE or GeoCAT / geocat.ch, and reused in existing processing pipelines.

## An inventory, not a geoportal

datannur describes and inventories your geographic data; it does not serve it. It provides no map rendering, no WMS / WFS / CSW services, and no spatial queries: it complements an existing GIS or geoportal rather than replacing it. That is exactly what makes it a relevant inventory for government bodies and organizations — often public-sector — that hold both geo and non-geo data and want to keep it under their own control.
