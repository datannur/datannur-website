// Variante sombre d'une image : résolue au build en inspectant public/images.
// Pour /images/stat-tab.fr.jpg on cherche, dans l'ordre :
//   stat-tab.fr.dark.*  (variante propre à la langue, prioritaire)
//   stat-tab.dark.*     (variante commune à toutes les langues)
// L'extension peut différer de l'originale (png clair, webp sombre…).
import fs from 'node:fs'
import path from 'node:path'

const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const EXTENSIONS = ['webp', 'jpg', 'png']

export function darkVariant(src) {
  const m = src.match(/^\/images\/(.+)\.(webp|jpe?g|png)$/i)
  if (!m) return null
  const base = m[1]
  if (base.endsWith('.dark')) return null
  const candidates = [`${base}.dark`]
  const lang = base.match(/^(.+)\.(en|fr|de)$/)
  if (lang) candidates.push(`${lang[1]}.dark`)
  for (const candidate of candidates) {
    for (const ext of EXTENSIONS) {
      const file = `${candidate}.${ext}`
      if (fs.existsSync(path.join(IMAGES_DIR, file))) return `/images/${file}`
    }
  }
  return null
}
