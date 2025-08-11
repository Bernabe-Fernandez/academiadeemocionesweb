import type { BlogPreviewSchema, BlogPreviewsSchema } from "@/schema/blogSchema";
import type z from "zod";

 export type BlogsEntry = z.infer<typeof BlogPreviewsSchema>

 export type BlogEntry = z.infer<typeof BlogPreviewSchema>