import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    sortDate: z.string(), // YYYY-MM-DD for chronological sorting
    hours: z.string(),
    location: z.string(),
    status: z.enum(['upcoming', 'past']),
    headline: z.string().default('FREE REPAIRS BY YOUR NEIGHBORS'),
    summary: z.string(),
    applyUrl: z.string().optional(),
    volunteerUrl: z.string().optional(),
    subscribeUrl: z.string().optional(),
    assets: z
      .array(
        z.object({
          title: z.string(),
          image: z.string().optional(),
          url: z.string(),
          actionLabel: z.string().default('Download'),
          download: z.boolean().default(false),
        })
      )
      .optional(),
  }),
});

export const collections = { events };
