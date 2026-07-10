# datannur-website

Site vitrine [datannur.com](https://datannur.com) — statique (Astro), contenu en
markdown, trilingue EN/FR/DE. Remplace le WordPress historique en conservant les
mêmes URLs. Voir [ARCHITECTURE.md](ARCHITECTURE.md) pour les choix d'architecture.

Mode sombre : bascule dans le header, préférence système par défaut, choix
mémorisé dans `localStorage`. Les couleurs sont des variables CSS définies dans
`src/styles/global.css` (`:root` pour le clair, `[data-theme='dark']` pour le
sombre) — toute nouvelle couleur doit passer par ces variables.

## Commandes

```sh
npm install       # une seule fois
npm run dev       # serveur de dev sur http://localhost:4321
npm run build     # génère le site statique dans dist/
npm run preview   # sert dist/ en local
```

## Éditer le contenu

Tout le contenu vit dans `src/content/pages/<langue>/<slug>.md` — un fichier
par page et par langue. **Le nom du fichier est le slug de l'URL**
(`fonctionnalites.md` → `/fr/fonctionnalites/`, `home.md` → racine).

Le frontmatter de chaque page :

```yaml
---
key: features        # clé commune aux deux langues (lie les traductions)
title: Fonctionnalités — Explorer et exploiter le catalogue   # <title> + H1
description: ...     # meta description (SEO)
icon: screwdriver-wrench   # icône du titre (nom de fichier dans src/icons/)
---
Corps de la page en markdown…
```

La clé `key` génère automatiquement les `hreflang` et fait pointer le
sélecteur EN/FR/DE vers la bonne page traduite.

### Blocs optionnels du frontmatter

- `bg: city` — fond photo ville (contact, bas de la homepage)
- `contactBlock: true` — bloc email / téléphone / GitHub après le contenu
- `plainImages: true` — images du corps sans ombre ni arrondi (diagrammes)
- `plans:` — cartes d'offres de support (page support)
- `hero:`, `pillars:`, `gallery:`, `partners:` — sections riches de la homepage

### Conventions markdown

- Une image suivie d'une ligne `*en italique*` = légende centrée grise
- Un lien seul dans son paragraphe = bouton (page démo)
- `<div class="grid-2">…</div>` = deux colonnes
- `![alt](/images/x.png "w=310")` = largeur d'affichage fixe en px
- `![alt](diagram:nom)` = insère le diagramme `src/diagrams/<lang>/<nom>.html`
  (SVG repris de l'app datannur — voir ci-dessous)

### Diagrammes de structure

Les diagrammes de la page structure sont le HTML/SVG de l'app elle-même
(page about de dev.datannur.com), extraits dans `src/diagrams/<lang>/` avec
leur CSS dans `src/styles/diagrams.css` : nets à toutes les résolutions,
libellés localisés, couleurs adaptées aux deux thèmes. Si les diagrammes de
l'app évoluent, ré-extraire les blocs `.simple-diagram-block` et remplacer
les fichiers correspondants.

### Images en mode sombre

Déposer une variante sombre dans `public/images/` et elle est utilisée
automatiquement (hero, galerie, corps markdown — détection au build) :

- `x.dark.jpg` = variante commune à toutes les langues (pour `x.en.jpg`,
  `x.fr.jpg`…) ; l'extension peut différer de la claire
- `x.fr.dark.jpg` = variante propre à une langue, prioritaire sur la commune
- Sans variante : les captures restent claires ; les diagrammes `plainImages`
  sont inversés par filtre CSS

### Ajouter une page

1. Créer `src/content/pages/en/<slug-en>.md` et `src/content/pages/fr/<slug-fr>.md`
   avec la même `key`
2. L'ajouter au menu dans [src/i18n/ui.ts](src/i18n/ui.ts) (`nav` + `navLabels`)

## Structure

- `src/content/pages/` — contenu markdown (la seule chose à éditer au quotidien)
- `src/i18n/ui.ts` — libellés du menu/footer + coordonnées de contact
- `src/layouts/Base.astro` — `<head>` SEO (canonical, hreflang, OG, JSON-LD)
- `src/components/` — header, footer, hero, galerie, plans…
- `src/icons/` — icônes Font Awesome 6 en SVG, inlinées au build
- `src/styles/global.css` — toute la charte graphique
- `public/images/` — logo, captures d'écran (suffixe `.en`/`.fr` si localisées)
- `public/.htaccess` — https, cache, 404 (hébergement mutualisé Apache)

## Déploiement

Automatique : chaque push sur `main` builde et synchronise `dist/` vers
l'hébergement Infomaniak par rsync/SSH
([.github/workflows/deploy.yml](.github/workflows/deploy.yml) — secrets
`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `DEPLOY_PATH` à définir dans GitHub).
Déclenchement manuel possible depuis l'onglet Actions (workflow_dispatch).

Manuel : `npm run build` puis déposer le contenu de `dist/` à la racine web
(SFTP/rsync). Aucun PHP ni Node requis côté serveur.
