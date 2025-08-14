import type { BlogPreviewSchema, BlogPreviewsSchema, wpPostsArraySchema, wpPostSchema } from "@/schema/blogSchema";
import type { wpCommentsArraySchema, wpCommentSchema } from "@/schema/commentSchema";
import type z from "zod";

 export type BlogsEntry = z.infer<typeof BlogPreviewsSchema>

 export type BlogEntry = z.infer<typeof BlogPreviewSchema>

 export type BlogPost = z.infer<typeof wpPostSchema>

 export type BlogsPost = z.infer<typeof wpPostsArraySchema>

 export type CommentPost = z.infer<typeof wpCommentSchema>

 export type CommentsPost = z.infer<typeof wpCommentsArraySchema>