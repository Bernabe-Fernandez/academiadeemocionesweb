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


// Schema para el autor embebido
const embeddedAuthorSchema = z.object({
  id: z.number(),
  name: z.string(),
  avatar_urls: z.object({
    "48": z.string().url().optional()
  }).optional()
});

const featuredMediaSchema = z.object({
  source_url: z.string().url()
});

// Schema principal del post
export const wpPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  excerpt: z.object({ 
    rendered: z.string()
  }),
  date: z.string(),        // fecha de publicación
  author: z.number(),      // ID del autor
  _embedded: z.object({
    author: z.array(embeddedAuthorSchema).optional(),
    "wp:featuredmedia": z.array(featuredMediaSchema).optional()
  }).optional()
});

// Si la API devuelve un array de posts
export const wpPostsArraySchema = z.array(wpPostSchema);