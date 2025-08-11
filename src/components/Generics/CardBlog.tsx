import type { BlogEntry } from "@/types";
import Bottom from "./Bottom";



export default function CardBlog(blog: BlogEntry ) {

    const imgUrl = blog._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    // <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-0 justify-center items-center">
                <h1
                    className="text-lg lg:text-2xl uppercase font-bold text-azulPrimario-800 text-center"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered}}
                />
                <p
                    className="text-sm lg:text-base text-justify"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered}}

                />
                <div className="w-full flex justify-end">
                    <Bottom color="bg-rojoPrimario-500" color_hover="bg-rojoPrimario-800" enlace={`blog/${blog.slug}`} texto="Leer más >>" />
                </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/3 md:mx-auto flex justify-center items-center">
                <img
                    src={imgUrl}
                    alt={`Imagen del blog ${blog.title.rendered}`}
                    className="object-cover"
                />
            </div>
        </div>
    </div>
  )
}
