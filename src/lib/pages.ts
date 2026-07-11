import { getCollection, type CollectionEntry } from 'astro:content'
import type { Lang } from '../i18n/ui'

export type PageEntry = CollectionEntry<'pages'>

// id = "<lang>/<slug>"; the "home" slug maps to the root
export function pageMeta(entry: PageEntry) {
  const [lang, ...rest] = entry.id.split('/')
  const slug = rest.join('/')
  const prefix = lang === 'en' ? '' : `/${lang}`
  const path = slug === 'home' ? `${prefix}/` : `${prefix}/${slug}/`
  return { lang: lang as Lang, slug, path }
}

export async function getPages(lang: Lang): Promise<PageEntry[]> {
  return getCollection('pages', e => e.id.startsWith(`${lang}/`))
}

// path of a page by translation key, for a given language
export async function pathByKey(key: string, lang: Lang): Promise<string> {
  const pages = await getCollection('pages')
  const entry = pages.find(
    e => e.data.key === key && pageMeta(e).lang === lang
  )
  if (!entry) throw new Error(`Page not found: key=${key} lang=${lang}`)
  return pageMeta(entry).path
}

// translated versions of a page (for hreflang and the language switcher)
export async function getAlternates(entry: PageEntry): Promise<PageEntry[]> {
  const { lang } = pageMeta(entry)
  const pages = await getCollection('pages')
  return pages.filter(
    e => e.data.key === entry.data.key && pageMeta(e).lang !== lang
  )
}
