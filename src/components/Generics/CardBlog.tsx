import type { BlogEntry } from "@/types";
import Bottom from "./Bottom";

type CardBlogProps = {
    blog : BlogEntry
}


export default function CardBlog({blog}: CardBlogProps) {
  return (
    // <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden">
        <div className="flex gap-8">
            <div className="w-2/3 flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl uppercase font-bold text-azulPrimario-800 text-center">{blog.titulo}</h1>
                <p className="text-justify">
                    {blog.resumen}
                </p>
                <div className="w-full flex flex-col justify-center items-end text-sm">
                    <p><span className="font-bold">Autor:</span> {blog.autor}</p>
                    <p>{blog.fecha}</p>
                </div>
                <div className="w-full flex justify-end">
                    <Bottom color="bg-rojoPrimario-500" color_hover="bg-rojoPrimario-800" enlace={blog.enlace} texto="Leer más >>" />
                </div>
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <img src="/servicios/servicio1.jpg" alt="entrada - 1" />
            </div>
        </div>
    </div>
  )
}
