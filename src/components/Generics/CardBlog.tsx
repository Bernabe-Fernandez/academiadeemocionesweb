import Bottom from "./Bottom";


export default function CardBlog() {
  return (
    // <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="bg-white p-8 shadow-lg rounded-2xl overflow-hidden">
        <div className="flex gap-8">
            <div className="w-2/3 flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl uppercase font-bold text-azulPrimario-800">Titulo</h1>
                <p className="text-justify">
                    La educación emocional no se enseña en la escuela, pero es clave para
                    una vida más equilibrada. Aprender a identificar, expresar y regular
                    nuestras emociones impacta directamente en cómo nos relacionamos,
                    tomamos decisiones y nos cuidamos.
                </p>
                <div className="w-full flex justify-end">
                    <Bottom color="bg-rojoPrimario-500" color_hover="bg-rojoPrimario-800" enlace="#" texto="Leer más >>" />
                </div>
            </div>
            <div className="w-1/3">
                <img src="/servicios/servicio1.jpg" alt="entrada - 1" />
            </div>
        </div>
    </div>
  )
}
