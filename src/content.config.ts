import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // The tools a guide compares, shown in the guides index.
    compares: z.array(z.string()).optional(),
    // Drafts are not published until first-hand notes and verified facts are added.
    draft: z.boolean().default(true),
  }),
});

export const collections = { articles };
