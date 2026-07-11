export type Lang = 'en' | 'fr' | 'de' | 'it'

export const langs: Lang[] = ['en', 'fr', 'de', 'it']
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

// Menu structure: labels of internal pages come from `navLabels`,
// URLs are resolved from the collection (key -> localized slug).
export const nav: NavGroup[] = [
  {
    label: { en: 'Solution', fr: 'Solution', de: 'Lösung', it: 'Soluzione' },
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
    label: {
      en: 'Ecosystem',
      fr: 'Écosystème',
      de: 'Ökosystem',
      it: 'Ecosistema',
    },
    icon: 'circle-nodes',
    items: [
      { key: 'partners', icon: 'handshake-simple' },
      { key: 'support', icon: 'life-ring' },
      { key: 'documentation', icon: 'book' },
    ],
  },
  {
    label: { en: 'About', fr: 'A propos', de: 'Über uns', it: 'Chi siamo' },
    icon: 'circle-info',
    items: [
      { key: 'project', icon: 'compass' },
      { key: 'contact', icon: 'comments' },
    ],
  },
]

export const navLabels: Record<string, Record<Lang, string>> = {
  home: { en: 'Homepage', fr: 'Accueil', de: 'Startseite', it: 'Home' },
  overview: {
    en: 'Overview',
    fr: 'Présentation',
    de: 'Überblick',
    it: 'Panoramica',
  },
  structure: {
    en: 'Structure',
    fr: 'Structure',
    de: 'Struktur',
    it: 'Struttura',
  },
  features: {
    en: 'Features',
    fr: 'Fonctionnalités',
    de: 'Funktionen',
    it: 'Funzionalità',
  },
  'data-ingestion': {
    en: 'Data Ingestion',
    fr: 'Alimentation',
    de: 'Dateneinspeisung',
    it: 'Alimentazione dati',
  },
  geodata: { en: 'Geodata', fr: 'Géodonnées', de: 'Geodaten', it: 'Geodati' },
  demo: { en: 'Demo', fr: 'Démo', de: 'Demo', it: 'Demo' },
  partners: {
    en: 'Partners',
    fr: 'Partenaires',
    de: 'Partner',
    it: 'Partner',
  },
  support: { en: 'Support', fr: 'Support', de: 'Support', it: 'Supporto' },
  documentation: {
    en: 'Documentation',
    fr: 'Documentation',
    de: 'Dokumentation',
    it: 'Documentazione',
  },
  project: { en: 'Project', fr: 'Projet', de: 'Projekt', it: 'Progetto' },
  contact: { en: 'Contact', fr: 'Contact', de: 'Kontakt', it: 'Contatti' },
}
