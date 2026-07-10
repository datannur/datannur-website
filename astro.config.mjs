import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { darkVariant } from './src/lib/dark-image.mjs'

// Trois sucres markdown :
// - un paragraphe composé uniquement d'un lien devient un bouton (.md-btn) ;
// - une image avec un titre "w=310" reçoit une largeur d'affichage fixe ;
// - une image ayant une variante sombre sur disque est doublée : la version
//   affichée dépend du thème (classes theme-light / theme-dark).
function remarkSugar() {
  function walk(node) {
    if (!node.children) return
    for (const child of node.children) {
      if (
        child.type === 'paragraph' &&
        node.type !== 'listItem' &&
        child.children.length === 1 &&
        child.children[0].type === 'link'
      ) {
        const link = child.children[0]
        link.data ??= {}
        link.data.hProperties ??= {}
        link.data.hProperties.className = ['md-btn']
      }
      if (child.type === 'image' && /^w=\d+$/.test(child.title ?? '')) {
        child.data ??= {}
        child.data.hProperties ??= {}
        child.data.hProperties.width = child.title.slice(2)
        child.title = null
      }
      walk(child)
    }
    if (node.children.some(c => c.type === 'image')) {
      node.children = node.children.flatMap(child => {
        if (child.type !== 'image') return [child]
        const dark = darkVariant(child.url)
        if (!dark) return [child]
        child.data ??= {}
        child.data.hProperties ??= {}
        child.data.hProperties.className = ['theme-light']
        const clone = structuredClone(child)
        clone.url = dark
        clone.data.hProperties.className = ['theme-dark']
        clone.data.hProperties.loading = 'lazy'
        return [child, clone]
      })
    }
  }
  return walk
}

export default defineConfig({
  site: 'https://datannur.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkSugar],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'],
    routing: { prefixDefaultLocale: false },
  },
})
