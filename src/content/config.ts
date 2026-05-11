import { defineCollection, reference, z } from 'astro:content';

const seoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
  })
  .optional();

const blinds = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: reference('categories'),
      excerpt: z.string(),
      heroImage: image(),
      heroAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      priceFrom: z.number().nonnegative(),
      currency: z.string().default('PHP'),
      features: z.array(z.string()).default([]),
      mountStyles: z.array(z.enum(['inside', 'outside', 'ceiling'])).default([]),
      availableFabrics: z.array(reference('fabrics')).default([]),
      sizeRange: z
        .object({
          minWidth: z.number(),
          maxWidth: z.number(),
          minDrop: z.number(),
          maxDrop: z.number(),
          unit: z.enum(['mm', 'cm', 'in']).default('mm'),
        })
        .optional(),
      tags: z.array(z.string()).default([]),
      seo: seoSchema,
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

const foldingDoors = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      heroImage: image(),
      heroAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      priceFrom: z.number().nonnegative(),
      currency: z.string().default('PHP'),
      panelOptions: z.array(z.number().int().positive()).default([]),
      materials: z.array(z.string()).default([]),
      glazingOptions: z.array(z.string()).default([]),
      features: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      seo: seoSchema,
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

const categories = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      order: z.number().default(0),
    }),
});

const fabrics = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      colorHex: z.string().regex(/^#([0-9a-fA-F]{3}){1,2}$/),
      texture: image().optional(),
      textureAlt: z.string().optional(),
      opacity: z.enum(['blackout', 'dimout', 'sheer', 'translucent']),
      compatibleWith: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
    }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    rating: z.number().int().min(1).max(5),
    quote: z.string(),
    productRef: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.enum(['general', 'measuring', 'installation', 'warranty', 'delivery']),
    order: z.number().default(0),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      caption: z.string().optional(),
      beforeImage: image(),
      beforeAlt: z.string(),
      afterImage: image(),
      afterAlt: z.string(),
      productRef: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  blinds,
  'folding-doors': foldingDoors,
  categories,
  fabrics,
  testimonials,
  faqs,
  gallery,
};
