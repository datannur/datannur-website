import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const button = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  style: z.enum(['solid', 'outline']).default('solid'),
})

// Un fichier .md par page et par langue : src/content/pages/<lang>/<slug>.md
// La langue et le slug sont déduits du chemin du fichier ("home" = racine).
// La clé `key` lie les versions traduites d'une même page (hreflang, switch).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    bg: z.enum(['city']).optional(),
    // images du corps sans ombre ni arrondi (diagrammes)
    plainImages: z.boolean().optional(),
    // bloc contact (email, téléphone, GitHub) affiché après le contenu
    contactBlock: z.boolean().optional(),
    // blocs structurés de la homepage
    hero: z
      .object({
        title: z.string(),
        text: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        buttons: z.array(button),
      })
      .optional(),
    pillars: z
      .array(
        z.object({ icon: z.string(), title: z.string(), text: z.string() })
      )
      .optional(),
    gallery: z
      .object({
        title: z.string(),
        images: z.array(
          z.object({
            image: z.string(),
            alt: z.string(),
            // libellé court affiché en légende et au survol des vignettes
            label: z.string(),
          })
        ),
      })
      .optional(),
    partners: z
      .object({
        icon: z.string(),
        title: z.string(),
        paragraphs: z.array(z.string()),
        note: z.string().optional(),
      })
      .optional(),
    // offres de support (page support)
    plans: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(),
          period: z.string(),
          text: z.string(),
          features: z.array(z.string()),
          cta: z.object({ label: z.string(), href: z.string() }),
        })
      )
      .optional(),
  }),
})

export const collections = { pages }
