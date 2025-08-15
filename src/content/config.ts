import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blog,
};
