---
key: features
title: Funzionalità — Esplorare e sfruttare il catalogo
description: "Esplorate le principali funzionalità di datannur: ricerca, filtri, statistiche, dipendenze, anteprima dei dati, IA integrata e molto altro."
icon: screwdriver-wrench
---

datannur riunisce in un'unica interfaccia le funzioni essenziali di un catalogo dati: navigazione, documentazione, esplorazione e sfruttamento dei metadati. Lo strumento permette di ritrovare i dataset, comprenderne la struttura, esplorarne le dipendenze e seguirne l'evoluzione nel tempo.

L'obiettivo non è soltanto archiviare informazioni, ma rendere i dati più leggibili, più sfruttabili e più semplici da governare nel quotidiano.

<div class="toc">

- **[Navigazione](#navigazione)**
  - [Ricerca](#ricerca)
  - [Filtro](#filtro)
  - [Ordinamento](#ordinamento)
  - [Struttura ad albero](#struttura-ad-albero)
  - [Assistente IA](#assistente-ia)
- **[Informazione](#informazione)**
  - [Documentazione](#doc)
  - [Glossario di business](#glossario-di-business)
  - [Dipendenze](#dipendenze-lineage)
  - [Riepilogo statistico](#riepilogo-statistico)
  - [Anteprima dei dati](#anteprima-dei-dati)
  - [Enumerazioni simili](#enumerazioni-simili)
  - [Cronologia](#cronologia)
- **[Utilizzo](#utilizzo)**
  - [Preferiti](#preferiti)
  - [Personalizzazione](#personalizzazione)
  - [Download](#download)
  - [Interoperabilità](#interoperabilità)
  - [Vista interna](#vista-interna)

</div>

## Navigazione

datannur permette di percorrere il catalogo in più modi complementari. La struttura ad albero offre una vista organizzata di organizzazioni, cartelle, dataset, variabili e documenti, mentre la ricerca e i filtri danno accesso diretto alle informazioni pertinenti.

Questa navigazione multipla rende il catalogo utilizzabile tanto per un'esplorazione d'insieme quanto per esigenze mirate: ritrovare un dataset, identificare una variabile, individuare un responsabile o navigare in un insieme di documenti collegati.

![Cartella «Public Admin» – scheda cartella](/images/folder-page-folder-tab.en.webp)
*Cartella «Public Admin» – scheda cartella*

### Ricerca

La barra di ricerca permette di ritrovare rapidamente gli elementi più pertinenti a partire dai termini inseriti. Una pagina dedicata presenta i risultati in modo chiaro, con accesso diretto alle ricerche recenti.

![Pagina organizzazione – barra di ricerca attiva](/images/search-bar-open.en.webp)
*Pagina organizzazione – barra di ricerca attiva*

![Pagina di ricerca](/images/search-page.en.webp)
*Pagina di ricerca*

### Filtro

Ogni tabella propone filtri per colonna per affinare i risultati in modo più preciso rispetto alla ricerca globale. Più filtri possono essere combinati per isolare un sottoinsieme pertinente in pochi gesti. I filtri supportano diversi tipi di condizioni a seconda della natura delle colonne.

![Scheda dataset con due filtri attivi](/images/datasets-tab-filter.webp)
*Scheda dataset con due filtri attivi*

Un filtro globale permette inoltre di includere o escludere determinate categorie di dataset a livello dell'intero catalogo, ad esempio in base al loro grado di apertura o al loro livello di elaborazione.

### Ordinamento

Le tabelle possono essere ordinate in senso crescente o decrescente a partire da ogni colonna. Questo ordinamento si combina naturalmente con i filtri per facilitare l'esplorazione e l'analisi dei dati.

### Struttura ad albero

datannur si basa su una struttura ad albero per organizzare le organizzazioni, le cartelle e i tag. Ogni elemento può contenere sotto-elementi su più livelli, il che permette di rappresentare fedelmente organizzazioni complesse.

Ogni nodo della struttura ad albero dispone di una propria pagina e agisce come un sottoinsieme del catalogo. È così possibile esplorarne al tempo stesso il contenuto, il contesto e i dataset che vi sono collegati. Combinata con l'ordinamento e i filtri, questa struttura offre una navigazione tanto semplice quanto potente.

![Pagina informazioni – Organizzazione: visione d'insieme](/images/about-page-diagramm.en.webp)
*Pagina informazioni – Organizzazione: visione d'insieme*

### Assistente IA

Una barra laterale di chat permette di esplorare il catalogo in linguaggio naturale. L'assistente può rispondere a domande sui metadati, ritrovare gli elementi pertinenti e navigare nel catalogo basandosi direttamente sulle informazioni disponibili.

Integrato nell'interfaccia, completa le funzioni classiche di ricerca, filtro ed esplorazione offrendo un accesso più diretto e più flessibile al contenuto del catalogo.

![Pagina dataset con l'assistente IA aperto](/images/side-bar-ai-open.en.webp)

## Informazione

Ogni pagina dedicata a un elemento del catalogo comprende una scheda «Informazioni» che ne raccoglie i principali metadati. Vi si trovano i suoi attributi specifici — ad esempio una descrizione, una data di aggiornamento o un contatto — così come gli elementi a cui è collegato, come i suoi tag, la sua cartella o le organizzazioni associate.

Le altre schede danno accesso agli elementi che contiene o a cui è associato, come dataset, variabili, enumerazioni o documenti.

![Cartella – scheda informazioni](/images/folder-about-tab.en.webp)
*Cartella – scheda informazioni*

### Doc

Il catalogo può collegare ai suoi elementi principali una o più documentazioni esistenti, in formato Markdown o PDF. Può trattarsi, ad esempio, di un README, di una guida, di un rapporto o di una documentazione di business già presente nell'organizzazione. Accessibili direttamente dalla pagina dell'elemento interessato, questi documenti apportano contesto, spiegazioni e informazioni complementari.

![Documento PDF aperto nel catalogo](/images/doc-pdf.en.webp)

### Glossario di business

datannur può anche integrare un glossario di business sotto forma di concetti. Questi concetti servono a definire con precisione alcune nozioni utilizzate nei dati e a eliminare le ambiguità sul significato esatto di una variabile.

Ogni concetto dispone di una propria pagina, può essere organizzato in gerarchia, arricchito con tag o documenti e collegato alle variabili interessate. Questo livello semantico completa i metadati classici apportando una spiegazione più orientata al business.

### Dipendenze (lineage)

Per ogni variabile, datannur mostra i suoi legami di dipendenza con le altre variabili del catalogo. Distingue le variabili sorgente, utilizzate come input, e le variabili derivate, che ne dipendono.

Queste relazioni rendono visibili le catene di trasformazione all'interno del catalogo e permettono anche di dedurre le dipendenze tra dataset. Si può così individuare rapidamente su quali dataset un altro si basa, o quali dataset alimenta.

### Riepilogo statistico

La scheda «Statistiche» propone una sintesi visuale delle informazioni disponibili nel catalogo. A seconda del tipo di elemento, può mostrare sia riepiloghi aggregati — ad esempio il numero di variabili per dataset o i tag associati a una cartella — sia statistiche descrittive più fini a livello delle variabili.

Per le variabili, datannur può in particolare presentare la frequenza dei valori così come indicatori statistici come il minimo, il massimo, la media o la deviazione standard. Queste informazioni supportano l'esplorazione, il controllo di coerenza e la comprensione rapida del contenuto dei dati.

### Anteprima dei dati

Per i dataset compatibili, una scheda dedicata permette di visualizzare un'anteprima tabellare del contenuto. Questa anteprima offre una prima lettura dei dati e si basa sulle funzioni integrate di ordinamento e filtro per scorrere i record in modo più efficiente.

### Enumerazioni simili

L'armonizzazione delle enumerazioni tra più dataset può diventare rapidamente laboriosa. Per semplificare questo lavoro, datannur propone una scheda che accosta le enumerazioni in base alla loro somiglianza e permette di identificare duplicati, varianti vicine o sovrapposizioni parziali.

Questa vista aiuta a individuare le differenze di denominazione, a uniformare i valori e a migliorare la coerenza complessiva del catalogo.

### Cronologia

La scheda «Cronologia» permette di seguire nel tempo le modifiche apportate agli elementi del catalogo. Mette in evidenza le aggiunte, le eliminazioni e le modifiche, con la loro marca temporale, per rendere più leggibile la storia dei metadati.

Questa vista aiuta a seguire i cambiamenti, controllare la coerenza e comprendere l'evoluzione di un dataset, di una variabile o di un altro elemento del catalogo.

## Utilizzo

I dati di utilizzo sono memorizzati localmente nel browser. Il catalogo resta così pienamente funzionale senza connessione internet, conservando al contempo i preferiti, le ricerche, i log e le preferenze dell'utente.

Questi elementi possono essere esportati e importati in qualsiasi momento, il che facilita la continuità d'uso da una postazione all'altra o nel tempo.

### Preferiti

Tutti gli elementi del catalogo possono essere aggiunti ai preferiti con un clic. Una pagina dedicata permette poi di ritrovarli in un unico luogo, con schede distinte a seconda del tipo di elemento.

### Personalizzazione

Una pagina di configurazione permette di regolare diversi aspetti dell'interfaccia, come la modalità scura, il livello di struttura ad albero visualizzato o altre preferenze visive. Permette anche di reimpostare i dati di utilizzo memorizzati localmente, come i preferiti, le ricerche, le preferenze o i log.

Una scheda dedicata raggruppa inoltre i log di utilizzo — pagine consultate, ricerche, preferiti — così come un riepilogo statistico che ne visualizza i principali usi.

### Download

I dati di utilizzo memorizzati nel browser possono essere esportati o importati in qualsiasi momento sotto forma di file compresso (ZIP).

Anche le tabelle del catalogo possono essere esportate facilmente, tramite copia negli appunti oppure in formato CSV o Excel (XLSX).

### Interoperabilità

datannur può esporre i metadati del catalogo tramite un'API REST e produrre un'esportazione DCAT. Questi meccanismi permettono di integrare il catalogo con altri strumenti, alimentare portali open data o riutilizzare i metadati in catene di elaborazione esistenti.

Per i dati geospaziali, i metadati spaziali (sistema di coordinate, estensione, risoluzione) sono normalizzati e raccoglibili tramite harvesting dalle infrastrutture di dati geografici come INSPIRE o GeoCAT.

### Vista interna

datannur integra una vista interna che permette di esplorare direttamente la struttura dei propri metadati. Il catalogo diventa così leggibile dall'interno: si può vedere come l'informazione è organizzata, collegata e memorizzata.

Questa trasparenza aiuta a comprendere il funzionamento dello strumento, a controllare le strutture interne e ad appropriarsi del catalogo negli usi più avanzati.
