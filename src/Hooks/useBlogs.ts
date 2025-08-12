    import { useEffect, useState } from "react";
    import apiBlog from "../services/apiBlog"; // tu instancia de axios
import { BlogPreviewsSchema } from "@/schema/blogSchema";
import type { BlogsEntry } from "@/types";

export function useBlogs() {
    const [blogs, setBlogs] = useState<BlogsEntry>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllBlogs = async () => {
        try {
            let allPosts: BlogsEntry = [];
            let page = 1;
            let totalPages = 1;

            do {
            const { data, headers } = await apiBlog.get("wp/v2/posts", {
                params: { per_page: 10, page, _embed: true },
            });

            const parsedData = BlogPreviewsSchema.parse(data);
            allPosts = [...allPosts, ...parsedData];

            totalPages = parseInt(headers["x-wp-totalpages"] || "1");
            page++;
            } while (page <= totalPages);

            setBlogs(allPosts);
        } catch (err) {
            console.error("Error cargando blogs:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchAllBlogs();
    }, []);

    return { blogs, loading };
}