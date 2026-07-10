# datannur.com — Plan d'architecture du nouveau site statique

> Objectif : remplacer le WordPress actuel par un site statique versionné en code,
> quasi identique visuellement, optimal pour le SEO, multilingue (FR/EN),
> dont le contenu se gère en markdown — facilement éditable avec l'IA.

## 1. Analyse du site actuel

### Inventaire des pages (source : sitemap WordPress)

| Clé            | EN (racine)        | FR (`/fr/`)            |
| -------------- | ------------------ | ---------------------- |
| home           | `/`                | `/fr/`                 |
| overview       | `/overview/`       | `/fr/presentation/`    |
| structure      | `/structure/`      | `/fr/structure/`       |
| features       | `/features/`       | `/fr/fonctionnalites/` |
| data-ingestion | `/data-ingestion/` | `/fr/alimentation/`    |
| geodata        | `/geodata/`        | `/fr/geodonnees/`      |
| demo           | `/demo/`           | `/fr/demo/`            |
| partners       | `/partners/`       | `/fr/partenaires/`     |
| support        | `/support/`        | `/fr/support/`         |
| project        | `/project/`        | `/fr/projet/`          |
| contact        | `/contact/`        | `/fr/contact/`         |

**Point crucial SEO : conserver ces URLs à l'identique** (y compris les slugs FR
traduits et le slash final). Aucune redirection à gérer, aucun jus SEO perdu.

### Caractéristiques du contenu

- Header : logo + 3 menus déroulants (Solution, Ecosystem, About) + switch EN/FR
- Footer : email, téléphone, GitHub, copyright — identique partout
- Pages "documentation" (features, data-ingestion, geodata) : titres, paragraphes,
  listes, captures d'écran → **markdown pur, cas idéal**
- Homepage : hero + 4 piliers (Lightweight, Universal, Open, Sovereign) +
  positionnement + galerie de 8 captures + modèle de partenariat → **sections
  structurées**, pilotées par le frontmatter
- **Aucun formulaire** (contact = mailto + téléphone), aucune recherche, aucun
  contenu dynamique. La seule "logique" du site est le sélecteur de langue.

## 2. Choix d'architecture

### Options évaluées

| Option                        | Verdict | Pourquoi                                                                                                                                              |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML/CSS pur à la main        | ❌      | Header/footer dupliqués × 22 pages, contenu mélangé au HTML, maintenance pénible même avec l'IA                                                        |
| PHP includes (mutualisé)      | ❌      | Résout la duplication mais le contenu reste du HTML dans du PHP, pas de markdown, pas de build (images non optimisées), dépendance runtime inutile     |
| SvelteKit (adapter-static)    | ❌      | Fonctionne, mais surdimensionné : i18n à construire soi-même, markdown via mdsvex à configurer, JS hydraté livré par défaut alors que le site n'a besoin d'aucun JS |
| **Astro** (recommandé)        | ✅      | Statique par nature, **0 JS livré par défaut**, markdown natif (content collections), **i18n intégré avec slugs traduits**, optimisation d'images, sitemap officiel |
| Eleventy                      | ✅ alt. | Très bon aussi et plus minimaliste, mais i18n + slugs traduits + images demandent plus de plomberie manuelle qu'Astro                                  |

### Recommandation : **Astro**

Le site n'a besoin d'aucun JavaScript côté client (à part éventuellement le
menu mobile, faisable en CSS ou en quelques lignes de JS vanilla inline).
SvelteKit apporterait un routeur client, de l'hydratation et de la config
pour zéro bénéfice ici. Astro produit exactement ce qu'on veut : **du HTML/CSS
statique pur**, généré depuis du markdown, avec l'i18n et le SEO en natif.

Le PHP du mutualisé ne sert **à rien à l'exécution** : on y dépose juste le
dossier `dist/` compilé. Il reste disponible en réserve si un jour un
formulaire de contact devient nécessaire (un simple `contact.php` suffira).

## 3. Multilangue

### Stratégie d'URLs

- On reproduit le schéma WordPress actuel : **EN à la racine, FR préfixé `/fr/`**,
  slugs traduits. Config Astro : `i18n: { defaultLocale: 'en', locales: ['en', 'fr'] }`.
- **Pas de redirection automatique** selon la langue du navigateur (mauvais pour
  Googlebot qui crawle depuis les US). Le visiteur choisit via le switch EN/FR.

### Liaison des traductions

Chaque page markdown porte dans son frontmatter une **clé de traduction
commune** et son **slug localisé** :

```yaml
# src/content/pages/en/features.md
---
key: features        # lie les 2 versions entre elles
lang: en
slug: features
title: Features — Explore and use the catalog
description: ...     # meta description
---
```

```yaml
# src/content/pages/fr/fonctionnalites.md
---
key: features
lang: fr
slug: fonctionnalites
title: Fonctionnalités — Explorer et utiliser le catalogue
description: ...
---
```

Cette clé `key` permet de générer automatiquement :

- les balises `hreflang` croisées (`en`, `fr`, `x-default` → EN)
- le lien du **sélecteur de langue** vers la bonne page traduite
  (ex. depuis `/features/` → `/fr/fonctionnalites/`, pas `/fr/`)

### Suffixe de langue vs dossier par langue

Le suffixe (`features.en.md` / `fonctionnalites.fr.md`) fonctionne, mais comme
les slugs sont traduits, les noms de fichiers diffèrent déjà entre langues —
le suffixe devient redondant avec l'info du frontmatter. **Recommandation :
un dossier par langue** (`content/pages/en/`, `content/pages/fr/`) :

- comparaison côte à côte facile (`diff` de l'arborescence = pages manquantes)
- glob par langue trivial pour le build et le sitemap
- la langue ne peut pas être incohérente entre nom de fichier et frontmatter

### Chaînes d'interface (hors contenu)

Les libellés du header/footer/menu vivent dans `src/i18n/ui.ts`
(dictionnaire `{ en: {...}, fr: {...} }`) — pas dans les markdown.

## 4. Structure du projet

```
datannur-website/
├── astro.config.mjs          # i18n, sitemap, trailingSlash: 'always'
├── src/
│   ├── content/
│   │   ├── config.ts         # schéma frontmatter (zod) : key, lang, slug, title, description…
│   │   └── pages/
│   │       ├── en/           # 11 fichiers .md
│   │       │   ├── home.md
│   │       │   ├── overview.md
│   │       │   ├── features.md
│   │       │   └── …
│   │       └── fr/           # 11 fichiers .md
│   │           ├── home.md
│   │           ├── presentation.md
│   │           ├── fonctionnalites.md
│   │           └── …
│   ├── layouts/
│   │   └── Base.astro        # <head> SEO complet + Header + Footer
│   ├── components/
│   │   ├── Header.astro      # nav + dropdowns + LangSwitcher
│   │   ├── Footer.astro
│   │   ├── LangSwitcher.astro
│   │   ├── Hero.astro        # sections riches de la homepage
│   │   ├── PillarCards.astro
│   │   └── ScreenshotGallery.astro
│   ├── i18n/
│   │   └── ui.ts             # libellés nav/footer FR+EN
│   ├── pages/
│   │   ├── [...slug].astro   # génère les pages EN depuis content/pages/en
│   │   ├── fr/[...slug].astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css        # reproduction du style actuel
├── public/
│   ├── images/               # captures d'écran, logo (les sources)
│   ├── robots.txt
│   ├── favicon…
│   └── .htaccess             # https, cache, 404
└── package.json
```

### Homepage et sections riches

Le corps markdown couvre 80 % des pages. Pour la homepage (hero, piliers,
galerie), les données structurées vont **dans le frontmatter** :

```yaml
---
key: home
hero:
  title: The lightweight, universal data catalog
  cta: [{ label: Demo, href: /demo/ }, { label: Contact, href: /contact/ }]
pillars:
  - { title: Lightweight, text: ... }
  - { title: Universal, text: ... }
gallery:
  - { image: search.png, alt: ... }
---
Corps markdown éventuel…
```

Le template détecte ces blocs et rend les composants correspondants. Le
contenu reste 100 % dans les `.md`, éditables à la main ou par l'IA.

## 5. SEO — checklist intégrée au layout

- [ ] URLs identiques au site actuel, `trailingSlash: 'always'` + build en
      `page/index.html` (aucun `.html` visible, comme WordPress)
- [ ] `<title>` et `<meta description>` uniques par page et par langue (frontmatter)
- [ ] `<link rel="canonical">` absolu sur chaque page
- [ ] `hreflang` en/fr/x-default croisés sur chaque paire de pages
- [ ] `<html lang="en|fr">` correct
- [ ] Open Graph + Twitter card (image partagée par défaut, surchargeable par page)
- [ ] `sitemap.xml` généré au build (`@astrojs/sitemap`, avec alternances i18n)
- [ ] `robots.txt` pointant vers le sitemap
- [ ] HTML sémantique : un seul `<h1>`, hiérarchie propre, `alt` sur toutes les images
- [ ] JSON-LD `Organization` (+ `SoftwareApplication` sur overview/home)
- [ ] Images optimisées au build (WebP/AVIF, `width/height` pour éviter le CLS,
      `loading="lazy"` sous la ligne de flottaison)
- [ ] Page 404 personnalisée (`ErrorDocument 404 /404.html` dans `.htaccess`)
- [ ] Score Lighthouse ~100 attendu : HTML statique, 0 JS, CSS unique minifié

## 6. Hébergement mutualisé & déploiement

- Le build produit un dossier `dist/` **100 % statique** → déposé tel quel à la
  racine web du mutualisé (SFTP/rsync). Pas de PHP, pas de Node sur le serveur.
- `.htaccess` :
  - redirection 301 http→https et www→apex (ou l'inverse, selon l'existant)
  - `ErrorDocument 404 /404.html`
  - cache long (`Cache-Control`) sur `/_astro/*` (assets fingerprints) et images,
    court sur les `.html`
- Script `deploy.ts` (SFTP + config json) sur le modèle déjà utilisé dans les
  autres projets datannur — ou action GitHub si le repo est sur GitHub.
- Le PHP reste disponible si besoin futur (formulaire contact, etc.).

## 7. Plan de migration

1. **Extraction du contenu** : récupérer les 22 pages du WordPress
   (texte + images) et les convertir en markdown — tâche idéale pour l'IA,
   page par page, avec vérification humaine du rendu.
2. **Récupération des assets** : logo, captures d'écran, favicon ; renommage
   propre dans `public/images/`.
3. **Squelette Astro** : config i18n, layout de base, header/footer/lang switcher.
4. **Reproduction du style** : CSS global reproduisant la charte actuelle
   (couleurs, typo, cartes) — sans reprendre le CSS WordPress (bloat).
5. **Pages** : d'abord une paire type "documentation" (features EN+FR) pour
   valider le pipeline markdown → HTML, puis la homepage (sections riches),
   puis le reste.
6. **Contrôle de parité** : diff des URLs contre le sitemap actuel, validation
   hreflang/canonical, Lighthouse, test des 22 pages.
7. **Bascule** : déploiement sur le mutualisé (sous-domaine de test d'abord,
   ex. `new.datannur.com`), puis remplacement de la racine web du WordPress ;
   soumission du nouveau sitemap dans Search Console.
8. **Après bascule** : surveiller Search Console (couverture, 404) pendant
   quelques semaines ; le WordPress peut être archivé/supprimé.

## 8. Réponses aux questions posées

- **SvelteKit ?** Non — aucun besoin de JS client ni de rendu dynamique.
  Astro donne le même confort de composants (header/footer factorisés) en
  produisant du HTML pur, avec markdown et i18n intégrés.
- **PHP ?** Inutile à l'exécution ; le mutualisé sert juste des fichiers
  statiques. On le garde en réserve pour un éventuel formulaire.
- **Markdown avec suffixe de langue ?** Oui sur le principe (un fichier .md
  par page et par langue), mais en pratique un **dossier par langue** est plus
  robuste que le suffixe, car les slugs FR sont traduits — la liaison entre
  versions se fait par une clé `key` dans le frontmatter, qui alimente aussi
  hreflang et le sélecteur de langue.
