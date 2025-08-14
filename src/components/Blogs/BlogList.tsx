import { useBlogs } from "@/Hooks/useBlogs";
import { useState } from "react";
import Bottom from "../Generics/Bottom";


export default function BlogList() {
  const { blogs, loading } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (loading) return <>
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
  </>;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / postsPerPage);


  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-4">
      <div className="flex flex-col justify-center items-center w-full lg:w-9/11 gap-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="min-w-full bg-azulPrimario-200 shadow rounded-lg overflow-hidden flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <div className="w-full md:w-2/5 mx-auto p-4">
              <img src={blog._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt={blog.title.rendered} className="w-full h-48 lg:h-64 object-cover" />
            </div>
            <div className="p-4 md:w-3/5">
                <h2 
                    className="text-lg lg:text-3xl font-semibold mb-2 text-azulPrimario-800 text-center"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered}}
                />
                <p 
                    className="text-gray-800 text-sm lg:text-lg text-justify"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered}}
                />
                <div className="flex justify-end my-4">
                    <Bottom color="bg-azulPrimario-500" color_hover="bg-azulPrimario-800" enlace={`blog/${blog.slug}`} texto="Continuar Leyendo" key={blog.id}/>
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