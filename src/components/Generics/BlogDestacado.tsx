import type { BlogEntry } from "@/types";
import Bottom from "./Bottom";

export default function BlogDestacado(blog: BlogEntry) {
    
    const imgUrl = blog._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    return (
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* Imagen */}
            <div className="w-full lg:w-2/5">
                <img src={imgUrl} alt={`Imagen del blog ${blog.title.rendered}`} className="w-full h-48 lg:h-full object-cover" />
            </div>

            {/* Contenido */}
            <div className="w-full lg:w-3/5 p-6 flex flex-col justify-between">
                <h2 
                    className="text-2xl font-semibold text-azulPrimario-800 mb-3 text-center"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered}}
                />
                <p 
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered}}
                />
                <div className="w-full flex justify-end">
                    <Bottom color="bg-rojoPrimario-500" color_hover="bg-rojoPrimario-800" enlace={`blog/${blog.slug}`} texto="Leer más >>" />
                </div>
            </div>
        </div>

    )
}
