
import Bottom from "../Generics/Bottom"

type EspecialistaType = {
    nombre:string
    titulo:string,
    imagen:string,
    url:string
}

type CardEspecialistaProp = {
    especialista: EspecialistaType;
}

export default function CardEspecialista({especialista}:CardEspecialistaProp) {
  return (
    <div className="w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center bg-azulPrimario-800">
        <img src={`/especialistas/${especialista.imagen}`} alt={`imagen de ${especialista.nombre}`} className="w-3/4 max-h-52 my-4 rounded" />
        <div className="text-center flex flex-col justify-center text-white mb-4">
            <h2 className="uppercase font-bold">{especialista.nombre}</h2>
            <h3>{especialista.titulo}</h3>
        </div>
        <div className="w-full flex justify-end px-4">
            <Bottom color='bg-azulPrimario-200' texto='Conoce más' enlace='#' color_hover='bg-azulPrimario-500'/>
        </div>
    </div>
  )
}
