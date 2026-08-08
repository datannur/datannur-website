import fs from 'node:fs'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { darkVariant } from './src/lib/dark-image.mjs'

// Five markdown sugars:
// - a paragraph made of a single link becomes a button (.md-btn);
// - external links (http/https) open in a new tab, like the header ones;
// - an image with a "w=310" title gets a fixed display width;
// - an image with a dark variant on disk is duplicated: the displayed
//   version depends on the theme (theme-light / theme-dark classes);
// - ![alt](diagram:name) inserts the HTML of src/diagrams/<lang>/<name>.html
//   (diagrams carried over from the app, crisp and theme-aware).
function remarkSugar() {
  const isDiagram = c =>
    c.type === 'paragraph' &&
    c.children.length === 1 &&
    c.children[0].type === 'image' &&
    c.children[0].url.startsWith('diagram:')

  function walk(node, lang) {
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
      if (child.type === 'link' && /^(https?:\/\/|mailto:)/.test(child.url)) {
        child.data ??= {}
        child.data.hProperties ??= {}
        child.data.hProperties.target = '_blank'
        child.data.hProperties.rel = 'noopener'
      }
      if (child.type === 'image' && /^w=\d+$/.test(child.title ?? '')) {
        child.data ??= {}
        child.data.hProperties ??= {}
        child.data.hProperties.width = child.title.slice(2)
        child.title = null
      }
      walk(child, lang)
    }
    if (node.children.some(c => c.type === 'image' || isDiagram(c))) {
      node.children = node.children.flatMap(child => {
        if (isDiagram(child)) {
          const name = child.children[0].url.slice('diagram:'.length)
          const value = fs.readFileSync(`src/diagrams/${lang}/${name}.html`, 'utf8')
          return [{ type: 'html', value }]
        }
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
  return (tree, file) => {
    const lang =
      (String(file.path).match(/[\\/]pages[\\/](\w+)[\\/]/) || [])[1] ?? 'en'
    walk(tree, lang)
  }
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
    locales: ['en', 'fr', 'de', 'it'],
    routing: { prefixDefaultLocale: false },
  },
})
