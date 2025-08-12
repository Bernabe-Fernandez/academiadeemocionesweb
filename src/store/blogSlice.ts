import { BlogPreviewsSchema } from "@/schema/blogSchema";
import apiBlog from "@/services/apiBlog";
import type { BlogEntry, BlogsEntry } from "@/types";
import type { StateCreator } from "zustand";


export type blogSliceType = {
    blogsDestacados : BlogsEntry,
    ultimoPost : BlogEntry,
    setBlogs : (blogs : BlogsEntry) => void,
    getPostDestacados : (page: number) => Promise<void>,
    getUltimoPost : () => Promise<void>,
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
                    per_page: 1, // Solo 1 post
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
    }
});