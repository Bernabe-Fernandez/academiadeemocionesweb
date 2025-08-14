import { BlogPreviewsSchema } from "@/schema/blogSchema";
import { wpCommentsArraySchema } from "@/schema/commentSchema";
import apiBlog from "@/services/apiBlog";
import type { BlogEntry, BlogsEntry,  CommentsPost } from "@/types";
import type { StateCreator } from "zustand";


export type blogSliceType = {
    blogsDestacados : BlogsEntry,
    ultimoPost : BlogEntry,
    ultimosPost : BlogsEntry,
    coments : CommentsPost,
    setBlogs : (blogs : BlogsEntry) => void,
    getPostDestacados : (perPage: number) => Promise<void>,
    getUltimoPost : () => Promise<void>,
    getUltimosPost : () => Promise<void>,
    setComents : (coments : CommentsPost) => void,
    getCommentsPost : (postId : number) => Promise<void>
}


export const createBlogSlice : StateCreator<blogSliceType, [], [], blogSliceType> = (set, get) => ({

    blogsDestacados:[],

    ultimoPost: {
        id: 0,
        title:{
            rendered: ""
        },
        slug:"",
        excerpt:{
            rendered:""
        },
    },

    ultimosPost: [],

    coments : [],

    setBlogs: (blogs: BlogsEntry) => {
        set({
            blogsDestacados:blogs
        })
    },

    getPostDestacados: async (perPage:number) => {
        try {
            const {data} = await apiBlog.get('wp/v2/posts', {
                params: { 
                    per_page: perPage, 
                    _embed: true, 
                    categories: 11, // ID numérico de la categoría “Destacados”
                    orderby: "date",
                    order: "desc", 
                }
            });

            const parsedData = BlogPreviewsSchema.parse(data);

            get().setBlogs(parsedData);
        } catch (e:unknown) {
            console.error(e);
        }
    },

    getUltimoPost: async () => {
        try {
            const { data } = await apiBlog.get("wp/v2/posts", {
                params: {
                    per_page: 1, 
                    orderby: "date", // Ordenar por fecha
                    order: "desc",   // Descendente (más reciente primero)
                    _embed: true     // Para incluir imagen destacada, autor, etc.
                }
            });

            const parsedData = BlogPreviewsSchema.parse(data);

            // console.log(parsedData[0]);
            set({
                ultimoPost:parsedData[0]
            })
        } catch (error) {
            console.error("Error obteniendo el último post:", error);
        }
    },

    getUltimosPost: async () => {
        try {
            const { data } = await apiBlog.get("wp/v2/posts", {
                params: {
                    per_page: 4, 
                    orderby: "date", // Ordenar por fecha
                    order: "desc",   // Descendente (más reciente primero)
                    _embed: true     // Para incluir imagen destacada, autor, etc.
                }
            });

            const parsedData = BlogPreviewsSchema.parse(data);

            // console.log(parsedData);
            set({
                ultimosPost:parsedData
            })
        } catch (error) {
            console.error("Error obteniendo el último post:", error);
        }
    },

    setComents: (coments : CommentsPost) => {
        set({
            coments
        });
    },

    getCommentsPost: async (postId : number) => {
        try {
            const {data} = await apiBlog(`/wp/v2/comments?post=${postId}&status=approve`);

            const parsedData = wpCommentsArraySchema.parse(data);

            // console.log(parsedData);
            get().setComents(parsedData);
        } catch (e : unknown) {
            console.error(e);
        }
    }
});