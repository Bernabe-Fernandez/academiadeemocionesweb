
import Bottom from "../Generics/Bottom";
import CardBlog from "../Generics/CardBlog";
import { useEffect } from "react";
import useAppStore from "@/store/useAppStore";



export default function BlogDestacados() {

  const blogsDestacados = useAppStore((state) => state.blogsDestacados);
  const getPostDestacados = useAppStore((state) => state.getPostDestacados);

  useEffect(() => {
    getPostDestacados(2);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-azulPrimario-800 uppercase text-center">Nuestro Blog</h3>
        <div className="flex flex-col md:mx-10 my-6 items-center justify-center space-y-4 ">
           {
              blogsDestacados.map((blog, index) => (
                <CardBlog key={index} {...blog} />
              ))
            }
        </div>
        <div className="w-full flex justify-end items-center uppercase">
          <Bottom color="bg-verdePrimario-500" color_hover="bg-verdePrimario-800" enlace="blog" texto="Ver todos" key={1}/>
        </div>
    </section>
  )
}
