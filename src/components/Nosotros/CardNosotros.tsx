
type CardNosotrosProps = {
    titulo:string,
    imagen:string,
    descripcion:string
    bgColor:string
}

export default function CardNosotros({titulo, imagen, descripcion, bgColor}:CardNosotrosProps) {

    return (
        
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden text-center p-4 flex flex-col gap-4">
            {/* Título */}
            <h2 className="text-xl lg:text-3xl font-bold text-teal-800 uppercase">{titulo}</h2>

            {/* Imagen con fondo de color */}
            <div className={`${bgColor} rounded-lg flex justify-center min-h-60 lg:max-h-72 lg:min-h-72 items-center p-4`}>
                <img src={`/infoNostros/${imagen}`} alt={titulo} className="w-full object-contain" />
            </div>

            {/* Descripción */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">{descripcion}</p>

        </div>
    )
}
