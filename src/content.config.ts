import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    mood: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const rambles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rambles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    heat: z.number().min(1).max(5).default(3),
    draft: z.boolean().default(false),
  }),
});

const dreams = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dreams' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lucid: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const sketches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sketches' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    medium: z.string().default('SVG'),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
    label: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, rambles, dreams, sketches, notes };
