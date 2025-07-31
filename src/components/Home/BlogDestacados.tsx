import CardBlog from "../Generics/CardBlog";



export default function BlogDestacados() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-4xl font-bold text-azulPrimario-800 uppercase text-center">Nuestro Blog</h3>
        <div className="flex flex-col md:mx-10 my-6 items-center justify-center space-y-4 ">
            <CardBlog/>
            <CardBlog/>
            <CardBlog/>
        </div>
    </section>
  )
}
