import z from "zod";

export const wpCommentSchema = z.object({
  id: z.number(),
  post: z.number(),              // ID del post al que pertenece
  author_name: z.string(),
  author_email: z.string().email().optional(),
  date: z.string(),              // fecha del comentario
  content: z.object({
    rendered: z.string()         // contenido HTML
  }),
  author_avatar_urls: z
    .object({
      "24": z.string().url().optional(),
      "48": z.string().url().optional(),
      "96": z.string().url().optional()
    })
    .optional()
});

// Si la API devuelve un array de comentarios
export const wpCommentsArraySchema = z.array(wpCommentSchema);