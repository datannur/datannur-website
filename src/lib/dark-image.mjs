// Dark variant of an image: resolved at build time by inspecting public/images.
// For /images/stat-tab.fr.jpg we look for, in order:
//   stat-tab.fr.dark.*  (language-specific variant, takes priority)
//   stat-tab.dark.*     (variant shared by all languages)
// The extension may differ from the original (light png, dark webp…).
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
