import { useBlogs } from "@/Hooks/useBlogs";
import { useState } from "react";
import Bottom from "../Generics/Bottom";


export default function BlogList() {
  const { blogs, loading } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / postsPerPage);


  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={blog._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt={blog.title.rendered} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 
                    className="text-lg font-semibold mb-2"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered}}
                />
                <p 
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered}}
                />
                <div className="flex justify-end my-4">
                    <Bottom color="bg-azulPrimario-200" color_hover="bg-azulPrimario-800" enlace={`blog/${blog.slug}`} texto="Continuar Leyendo" key={blog.id}/>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}