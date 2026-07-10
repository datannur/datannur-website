export type Lang = 'en' | 'fr' | 'de'

export const langs: Lang[] = ['en', 'fr', 'de']
export const defaultLang: Lang = 'en'

export const site = {
  name: 'datannur',
  email: 'contact@datannur.com',
  phone: '+41 21 510 21 21',
  github: 'https://github.com/datannur/datannur',
  docs: 'https://docs.datannur.com',
}

type NavItem =
  | { key: string; icon: string }
  | { label: Record<Lang, string>; href: string; icon: string }

export type NavGroup = {
  label: Record<Lang, string>
  icon: string
  items: NavItem[]
}

// Structure du menu : les libellés des pages internes viennent de `navLabels`,
// les URLs sont résolues depuis la collection (key -> slug localisé).
export const nav: NavGroup[] = [
  {
    label: { en: 'Solution', fr: 'Solution', de: 'Lösung' },
    icon: 'lightbulb',
    items: [
      { key: 'overview', icon: 'book-open' },
      { key: 'structure', icon: 'diagram-project' },
      { key: 'features', icon: 'screwdriver-wrench' },
      { key: 'data-ingestion', icon: 'plug-circle-check' },
      { key: 'geodata', icon: 'earth-europe' },
      { key: 'demo', icon: 'desktop' },
    ],
  },
  {
    label: { en: 'Ecosystem', fr: 'Écosystème', de: 'Ökosystem' },
    icon: 'circle-nodes',
    items: [
      { key: 'partners', icon: 'handshake-simple' },
      { key: 'support', icon: 'life-ring' },
      {
        label: {
          en: 'Documentation',
          fr: 'Documentation',
          de: 'Dokumentation',
        },
        href: site.docs,
        icon: 'book',
      },
    ],
  },
  {
    label: { en: 'About', fr: 'A propos', de: 'Über uns' },
    icon: 'circle-info',
    items: [
      { key: 'project', icon: 'compass' },
      { key: 'contact', icon: 'comments' },
    ],
  },
]

export const navLabels: Record<string, Record<Lang, string>> = {
  home: { en: 'Homepage', fr: 'Accueil', de: 'Startseite' },
  overview: { en: 'Overview', fr: 'Présentation', de: 'Überblick' },
  structure: { en: 'Structure', fr: 'Structure', de: 'Struktur' },
  features: { en: 'Features', fr: 'Fonctionnalités', de: 'Funktionen' },
  'data-ingestion': {
    en: 'Data Ingestion',
    fr: 'Alimentation',
    de: 'Dateneinspeisung',
  },
  geodata: { en: 'Geodata', fr: 'Géodonnées', de: 'Geodaten' },
  demo: { en: 'Demo', fr: 'Démo', de: 'Demo' },
  partners: { en: 'Partners', fr: 'Partenaires', de: 'Partner' },
  support: { en: 'Support', fr: 'Support', de: 'Support' },
  project: { en: 'Project', fr: 'Projet', de: 'Projekt' },
  contact: { en: 'Contact', fr: 'Contact', de: 'Kontakt' },
}
