import z from "zod";

const MediaSchema = z.object({
  source_url: z.string().url().optional(),
});

const EmbeddedSchema = z.object({
  'wp:featuredmedia': z.array(MediaSchema).optional(),
}).partial();

export const BlogPreviewSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  excerpt: z.object({
    rendered: z.string(),
  }),
  _embedded: EmbeddedSchema.optional(),
});


export const BlogPreviewsSchema = z.array(BlogPreviewSchema);