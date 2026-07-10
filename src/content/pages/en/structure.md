---
key: structure
title: Structure — How datannur Organizes the Catalog
description: Understand how datannur organizes the catalog around datasets, variables, enumerations, folders, organizations, keywords, and documents.
icon: diagram-project
plainImages: true
---

datannur is based on 8 main concepts, divided into two categories:

- **Data layer**: for elements directly related to the data itself
- **Context layer**: for elements that structure, organize, or enrich datasets

![The two layers of a dataset](diagram:dataset-parts)

## Dataset Data

### Dataset

A dataset represents a data table, whether it is a database or a file (Excel, CSV, etc.), organized in tabular form. This table consists of rows, corresponding to individuals or observations, and columns, which are variables or attributes. Each variable contains a list of values that differ from one individual to another.

![Dataset and variables diagram](diagram:dataset-variable)

### Variable

Some variables are categorical, with possible values defined by an enumeration. A variable can be linked to multiple enumerations, and vice versa. It can also be associated with a business glossary concept to specify the exact meaning of the measured notion. Each variable can also have associated frequency data.

![Variable relationships diagram](diagram:variable)

### Frequency

Frequencies allow counting the number of occurrences of each specific value within a variable. This provides a statistical view of data distribution and helps identify the most common or rare values. Each frequency entry contains a value and its number of occurrences.

### Enumeration

An enumeration groups a set of possible values for one or more categorical variables. Each value can be accompanied by a description to clarify its meaning.

![Enumeration and values diagram](diagram:enumeration-value)

## Dataset Context

### Folder

Datasets and enumerations can be organized into folders. Folders can be nested within each other, forming a hierarchical tree structure to organize your data.

![Folder hierarchy diagram](diagram:folder)

### Organization

A folder or dataset can be associated with two types of roles embodied by an organization:

- **Provider**: the entity that produces or shares the data
- **Manager**: the entity that maintains them and ensures their quality

Organizations can also be organized hierarchically, being contained within each other.

![Organization roles diagram](diagram:organization)

### Keyword

Keywords are used to enrich organizations, folders, datasets, variables, or concepts with cross-cutting themes or categories. A keyword can be linked to multiple elements and can also be organized hierarchically.

![Keyword relationships diagram](diagram:tag)

### Concept

Business glossary concepts are used to precisely define certain notions used in the data. Unlike keywords, they do not classify by theme: they describe an explicit business meaning. A concept can be organized hierarchically, be linked to multiple variables, and be enriched by keywords or docs.

![Concept relationships diagram](diagram:concept)

### Doc

Documentation (docs) in Markdown or PDF format can be associated with organizations, folders, keywords, concepts, or datasets. They allow detailed description or explanation of these elements.

![Doc relationships diagram](diagram:doc)

## Overview

datannur concepts are interconnected, offering great flexibility to organize, enrich, and document your data. Here is how they are connected:

![Overview of all datannur concepts and their relationships](diagram:all)
