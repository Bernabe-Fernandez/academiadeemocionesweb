
import Bottom from "../Generics/Bottom";
import CardBlog from "../Generics/CardBlog";
import { useEffect, useState } from "react";
import apiBlog from "@/services/apiBlog";
import { BlogPreviewsSchema } from "@/schema/blogSchema";
import type { BlogsEntry } from "@/types";



export default function BlogDestacados() {

  const [blogs, setBlogs] = useState<BlogsEntry>([]);

  const getPostDestacados = async () => {

    try {
      const {data} = await apiBlog.get('wp/v2/posts', {
        params: { per_page: 2, _embed: true }
      });

      const parsedData = BlogPreviewsSchema.parse(data);

      setBlogs(parsedData);
      console.log(parsedData);
    } catch (e:unknown) {
      console.error(e);
    }

  }

  useEffect(() => {
    getPostDestacados();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-azulPrimario-800 uppercase text-center">Nuestro Blog</h3>
        <div className="flex flex-col md:mx-10 my-6 items-center justify-center space-y-4 ">
           {
              blogs.map((blog, index) => (
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
