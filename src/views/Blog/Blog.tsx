import useDocumentTitle from "../../Hooks/useDocumentTitle"
import headerImg from '@/assets/images/blog-header.jpg';
import BlogList from "@/components/Blogs/BlogList";
import BlogDestacado from "@/components/Generics/BlogDestacado";
import Bottom from "@/components/Generics/Bottom";
import useAppStore from "@/store/useAppStore";
import { useEffect } from "react";

export default function Blog() {
    useDocumentTitle('Blog')

    const blogsDestacados = useAppStore((state) => state.blogsDestacados);
    const getPostDestacados = useAppStore((state) => state.getPostDestacados);
    const ultimoPost = useAppStore((state) => state.ultimoPost);
    const getUltimoPost = useAppStore((state) => state.getUltimoPost);

    useEffect(() => {
      getUltimoPost();
      getPostDestacados(3);
    }, []);

  return (
    <>
      <div className="w-full bg-red-500">
        <img className="w-full md:h-[350px] lg:h-[550px] " src={headerImg} alt="Cabecera del blog" />
        <div className="w-full p-5 md:p-8 lg:p-16 bg-azulPrimario-500 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-6xl uppercase text-center font-bold">Aprende, comparte, crece con nosotros</h1>
          <p className="text-center md:text-xl lg:text-3xl font-semibold"> Lee, comenta y forma parte de una comunidad que aprende contigo</p>
        </div>
      </div>

      <div className="py-2 w-full mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold uppercase px-4 my-2 md:my-4 lg:my-8 text-azulPrimario-800">Conoce nuestra noticia más reciente</h2>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:w-11/12 lg:w-8/12 mx-auto">
          <img src={ultimoPost._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt="ultimo blog" />
          <div className="lg:w-5/6 lg:mx-auto">
            <h3 
              className="text-center md:text-xl lg:text-3xl font-bold py-2 uppercase text-azulPrimario-800"
              dangerouslySetInnerHTML={{ __html: ultimoPost.title.rendered}}
            />
            <p 
              className="text-azulPrimario-800 lg:text-2xl mx-auto px-4 text-justify mb-2"
              dangerouslySetInnerHTML={{ __html: ultimoPost.excerpt.rendered}}
            />
            <div className="flex justify-end">
              <Bottom color="bg-azulPrimario-200" color_hover="bg-azulPrimario-800" enlace={`blog/${ultimoPost.slug}`} texto="Conocer más" key={ultimoPost.id}/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-azulPrimario-800 text-center font-bold my-4">Articulos Destacados</h3>
      </div>
      <div className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2 md:mx-8 lg:w-10/12 lg:mx-auto lg:grid-cols-3">
        {/* aca van los top 3 de entradas */}
        {
          blogsDestacados.map((blog, index) => (
            <BlogDestacado key={index} {...blog}/>
          ))
        }
      </div>

      {/* aqui colocaremos todos los blogs */}
      <div className="flex flex-col my-4 md:my-6 lg:my-10 justify-center items-center ">
        <h3 className="text-xl md:text-3xl lg:text-4xl uppercase font-bold text-azulPrimario-800">Todos nuestros articulos</h3>
        <BlogList/>
      </div>

    </>
  )
}
