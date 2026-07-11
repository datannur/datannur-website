import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const button = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  style: z.enum(['solid', 'outline']).default('solid'),
})

// One .md file per page and per language: src/content/pages/<lang>/<slug>.md
// The language and slug are derived from the file path ("home" = root).
// The `key` field links the translated versions of a page (hreflang, switch).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    bg: z.enum(['city']).optional(),
    // body images without shadow or rounded corners (diagrams)
    plainImages: z.boolean().optional(),
    // contact block (email, phone, GitHub) shown after the content
    contactBlock: z.boolean().optional(),
    // structured blocks of the homepage
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
            // short label shown as caption and on thumbnail hover
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
    // support plans (support page)
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
