import Bottom from "./Bottom";

type Servicio = {
    id: number,
    titulo: string,
    imagen: string,
    informacion: string,
    color: string,
    color_hover: string,
    border: string,
    backgroud: string
}

type CardServicesProps = {
    servicio: Servicio
}
export default function CardServices( {servicio} : CardServicesProps) {


  return (
    <div className={`flex flex-col p-6 mx-auto max-w-lg text-center ${servicio.backgroud} text-gray-900  rounded-lg border ${servicio.border} border-5  shadow  xl:p-8`}>
        <div className="flex justify-center items-center h-20">
            <h3 className="text-2xl font-bold uppercase">{servicio.titulo}</h3>
        </div>
        <img src={`/servicios/${servicio.imagen}`} alt="" />
        <p className={`my-5 min-h-36 text-justify text-gray-900`}>{servicio.informacion}</p>
        <Bottom key={servicio.id} color={servicio.color} color_hover={servicio.color_hover} enlace="servicios" texto="Conocer más"/>
    </div>
  )
}
