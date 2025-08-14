import useDocumentTitle from "../../Hooks/useDocumentTitle"
import headerImg from '@/assets/images/blog-header.jpg';
import BlogList from "@/components/Blogs/BlogList";
import BlogDestacado from "@/components/Generics/BlogDestacado";
import Bottom from "@/components/Generics/Bottom";
import useAppStore from "@/store/useAppStore";
import { useEffect, useState } from "react";

export default function Blog() {
    useDocumentTitle('Blog')

    const blogsDestacados = useAppStore((state) => state.blogsDestacados);
    const getPostDestacados = useAppStore((state) => state.getPostDestacados);
    const ultimoPost = useAppStore((state) => state.ultimoPost);
    const getUltimoPost = useAppStore((state) => state.getUltimoPost);

    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   getUltimoPost();
    //   getPostDestacados(3);
    // }, []);


    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // mostrar loader

        try {
          // Ejecutar ambas peticiones en paralelo
          await Promise.all([
            getUltimoPost(),
            getPostDestacados(3)
          ]);
        } catch (error) {
          console.error("Error al cargar datos del blog:", error);
        } finally {
          setLoading(false); // ocultar loader
        }
      };

      fetchData();
    }, []);



  return (
    <>
      {/* Cabecera */}
      <div className="w-full relative">
        <img
          className="w-full md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover"
          src={headerImg}
          alt="Cabecera del blog"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-azulPrimario-800/35 text-white p-5 md:p-8 lg:p-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl uppercase text-center font-bold">
            Aprende, comparte, crece con nosotros
          </h1>
          <p className="text-center md:text-xl lg:text-3xl font-semibold">
            Lee, comenta y forma parte de una comunidad que aprende contigo
          </p>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <svg
            className="animate-spin h-12 w-12 text-azulPrimario-800"
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
              d="M4 12a8 8 0 018-8v4l4 4-4 4v4a8 8 0 01-8-8z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          {/* Noticia más reciente */}
          <div className="py-2 w-full mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold uppercase px-4 my-2 md:my-4 lg:my-8 text-azulPrimario-800">
              Conoce nuestra noticia más reciente
            </h2>
            <div className="md:grid md:grid-cols-2 md:gap-4 md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto mb-4">
              <img
                src={ultimoPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                alt="ultimo blog"
              />
              <div className="lg:w-full lg:mx-auto xl:w-5/6">
                <h3
                  className="text-center md:text-xl lg:text-3xl font-bold py-2 uppercase text-azulPrimario-800"
                  dangerouslySetInnerHTML={{ __html: ultimoPost.title.rendered }}
                />
                <p
                  className="text-azulPrimario-800 lg:text-2xl mx-auto px-4 text-justify mb-2"
                  dangerouslySetInnerHTML={{
                    __html: ultimoPost.excerpt.rendered,
                  }}
                />
                <div className="flex justify-end">
                  <Bottom
                    color="bg-azulPrimario-200"
                    color_hover="bg-azulPrimario-800"
                    enlace={`blog/${ultimoPost.slug}`}
                    texto="Conocer más"
                    key={ultimoPost.id}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Artículos destacados */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-azulPrimario-800 text-center font-bold my-4">
              Artículos Destacados
            </h3>
          </div>
          <div className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2 md:mx-8 lg:w-10/12 lg:mx-auto lg:grid-cols-3">
            {blogsDestacados.map((blog, index) => (
              <BlogDestacado key={index} {...blog} />
            ))}
          </div>

          {/* Todos los blogs */}
          <div className="flex flex-col my-4 md:my-6 lg:my-10 justify-center items-center ">
            <h3 className="text-xl md:text-3xl lg:text-4xl uppercase font-bold text-azulPrimario-800">
              Todos nuestros artículos
            </h3>
            <BlogList />
          </div>
        </>
      )}
    </>
  )
}
