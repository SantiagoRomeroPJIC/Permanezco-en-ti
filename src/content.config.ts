import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const novedades = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/novedades",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
  }),
});

export const collections = {
  novedades,
};