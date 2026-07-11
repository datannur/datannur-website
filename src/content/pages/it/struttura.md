---
key: structure
title: Struttura — Come datannur organizza il catalogo
description: Scoprite come datannur organizza il catalogo attorno a dataset, variabili, modalità, cartelle, istituzioni, tag e documenti.
icon: diagram-project
plainImages: true
---

datannur si basa su 8 concetti principali, suddivisi in due categorie:

- **Dati del dataset**: per gli elementi direttamente legati ai dati stessi
- **Contesto del dataset**: per gli elementi che strutturano, organizzano o arricchiscono i dataset

![Le due parti di un dataset](diagram:dataset-parts)

## Dati del dataset

### Dataset

Un dataset rappresenta una tabella di dati, che si tratti di una base di dati o di un file (Excel, CSV, ecc.), organizzata in forma tabellare. Questa tabella è composta da righe, corrispondenti agli individui o alle osservazioni, e da colonne, che sono variabili o attributi. Ogni variabile raggruppa un elenco di valori, che differiscono da un individuo all’altro.

![Schema dataset e variabili](diagram:dataset-variable)

### Variabile

Alcune variabili sono di tipo categoriale, con valori possibili definiti da un’enumerazione. Una variabile può essere legata a più enumerazioni, e viceversa. Può anche essere collegata a un concetto del glossario di business per precisare il significato esatto della nozione misurata. Ogni variabile può inoltre avere dati di frequenza associati.

![Schema delle relazioni di una variabile](diagram:variable)

### Frequenza

Le frequenze permettono di contare il numero di occorrenze di ogni valore specifico all’interno di una variabile. Offrono una vista statistica della distribuzione dei dati e aiutano a identificare i valori più comuni o più rari. Ogni voce di frequenza contiene un valore e il suo numero di occorrenze.

### Enumerazione

Un’enumerazione raggruppa un insieme di valori possibili per una o più variabili categoriali. Ogni valore può essere accompagnato da una descrizione che ne precisa il significato.

![Schema enumerazione e valori](diagram:enumeration-value)

## Contesto del dataset

### Cartella

I dataset e le enumerazioni possono essere organizzati in cartelle. Le cartelle possono essere annidate le une nelle altre, formando una struttura ad albero gerarchica per strutturare i vostri dati.

![Schema della gerarchia delle cartelle](diagram:folder)

### Organizzazione

Una cartella o un dataset può essere associato a due tipi di ruoli svolti da un’organizzazione:

- **Fornitore**: l’entità che produce o condivide i dati
- **Gestore**: l’entità che li mantiene e ne garantisce la qualità

Le organizzazioni possono a loro volta organizzarsi in modo gerarchico, essendo contenute le une nelle altre.

![Schema dei ruoli di un’organizzazione](diagram:organization)

### Tag

I tag servono ad arricchire organizzazioni, cartelle, dataset, variabili o concetti con tematiche o categorie trasversali. Un tag può essere legato a una moltitudine di elementi e può anche essere organizzato in gerarchia.

![Schema delle relazioni di un tag](diagram:tag)

### Concetto

I concetti del glossario di business servono a definire con precisione alcune nozioni utilizzate nei dati. A differenza dei tag, non classificano per tema: descrivono un significato di business esplicito. Un concetto può essere organizzato in gerarchia, essere collegato a più variabili ed essere arricchito con tag o doc.

![Schema delle relazioni di un concetto](diagram:concept)

### Doc

Documentazioni (doc) in formato Markdown o PDF possono essere associate a organizzazioni, cartelle, tag, concetti o dataset. Permettono di descrivere o spiegare in dettaglio questi elementi.

![Schema delle relazioni di un doc](diagram:doc)

## Visione d’insieme

I concetti di datannur sono interconnessi e offrono una grande flessibilità per organizzare, arricchire e documentare i vostri dati. Ecco come sono collegati tra loro:

![Vista d’insieme dei concetti di datannur e delle loro relazioni](diagram:all)
