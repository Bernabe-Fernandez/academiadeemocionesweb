import { wpPostsArraySchema } from "@/schema/blogSchema";
import apiBlog from "@/services/apiBlog";
import type { BlogPost} from "@/types";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import FormComments from "./FormComments";
import useAppStore from "@/store/useAppStore";
import CardBlog from "../Generics/CardBlog";
import ShareButtons from "@/helpers/ShareButtons";


export default function BlogPost() {

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const coments = useAppStore((state) => state.coments);
    const ultimosPost = useAppStore((state) => state.ultimosPost);
    const getCommentsPost = useAppStore((state) => state.getCommentsPost);
    const getUltimosPost = useAppStore((state) => state.getUltimosPost);

    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost>({
        id: 0,
        slug: "",
        title: { rendered: "" },
        content: { rendered: "" },
        excerpt: { rendered: "" },
        date: "",
        author: 0,
        _embedded: { "wp:featuredmedia": [] , author: [] }
    });

    const [loading, setLoading] = useState(false);


    const getBlogPost = async () => {
        setLoading(true);
        try {
            const {data} = await apiBlog(`/wp/v2/posts?slug=${slug}&_embed`);

            const parsedData = wpPostsArraySchema.parse(data);
            // console.log(parsedData);

            setPost(parsedData[0]);
            setLoading(false);
        } catch (error : unknown) {
            console.error(error);
        }
    }


    useEffect(() => {
        getBlogPost();
        getUltimosPost();
    }, [slug]);

    useEffect(() => {
        getCommentsPost(post.id);
    }, [post]);

  return (
    <>
        {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
            {/* Spinner animado */}
                <svg
                    className="animate-spin h-10 w-10 text-azulPrimario-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    ></circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
            </div>
        ) : (
            <>
                <div className="w-full md:w-10/12 lg:w-8/12 mx-auto px-4">
                    <article className="flex flex-col justify-center space-y-4">
                        <h1
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            className="text-xl md:text-3xl lg:text-5xl uppercase font-bold text-azulPrimario-800 md:mt-4"
                        />
                        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                            <img
                            src={post._embedded["wp:featuredmedia"][0].source_url}
                            alt={post.title.rendered}
                            className="w-2/3 mx-auto"
                            />
                        )}
                        <div
                            className="prose max-w-none 
                                        prose-img:rounded-xl 
                                        prose-img:mx-auto 
                                        prose-img:block 
                                        prose-img:max-w-[80%]
                                        prose-h1:text-3xl 
                                        prose-p:text-gray-700 
                                        prose-p:text-justify"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                        <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 mb-4">
                            <p>
                                Autor del artículo:{" "}
                                <span className="font-semibold text-gray-800">
                                    {post._embedded?.author?.[0]?.name || "Desconocido"}
                                </span>
                            </p>
                            <p>
                                Fecha Publicación:{" "}
                                <span className="font-medium text-gray-700">
                                    {post.date.split("T")[0]}
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <ShareButtons url={currentUrl} title={post.title.rendered} />
                        </div>
                    </article>

                    {/* Comentarios */}
                    <div className="flex flex-col justify-center mt-4">
                        <h3 className="text-xl lg:text-3xl uppercase font-bold my-4">
                            Comentarios
                        </h3>
                        {coments.length !== 0 && (
                            <div className="space-y-6">
                                {coments.map((coment, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg p-4 bg-white shadow-sm"
                                    >
                                        {/* Autor */}
                                        <div className="flex items-center space-x-3 mb-3">
                                            <img
                                                src={coment.author_avatar_urls?.[48]}
                                                alt={coment.author_name}
                                                className="w-10 h-10 rounded-full border"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {coment.author_name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {coment.date.split("T")[0]}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contenido del comentario */}
                                        <div
                                            className="prose max-w-none prose-p:my-2 prose-p:text-gray-700 prose-p:text-sm"
                                            dangerouslySetInnerHTML={{
                                            __html: coment.content.rendered,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="my-4">
                        <FormComments postId={post.id} />
                    </div>
                </div>

                {/* Artículos recientes */}
                <div className="my-4 space-y-3 md:w-4/5 lg:w-8/12 mx-auto">
                    <h3 className="font-bold text-xl md:text-3xl text-azulPrimario-800 uppercase text-center">
                        Artículos Recientes
                    </h3>
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex gap-4">
                        {ultimosPost.map((post) => (
                            <CardBlog
                                title={post.title}
                                id={post.id}
                                _embedded={post._embedded}
                                key={post.id}
                                slug={post.slug}
                                excerpt={post.excerpt}
                            />
                        ))}
                    </div>
                </div>
            </>
        )}
    </>
  )
}
