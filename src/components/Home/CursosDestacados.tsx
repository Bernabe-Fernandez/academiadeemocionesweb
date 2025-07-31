import { cursos } from "@/data/cursos";
import "keen-slider/keen-slider.min.css";
import Bottom from "../Generics/Bottom";

export default function CursosDestacados() {

    

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-6 text-azulPrimario-800 uppercase">Servicios Educativos</h2>
            {/* contenedor padre */}
            <div className="grid grid-cols-2">
                {cursos.map((curso, index) => {
                    const isFirstHalf = index < 2;
                    const flexDirection = isFirstHalf ? "flex-row" : "flex-row-reverse";

                    return (
                        <div key={curso.id} className={`flex ${flexDirection} items-center rounded-xl`}>
                            <img src={curso.imagen} alt={`imagen ${curso.titulo}`} className="w-1/2 h-full" />
                            <div className={`${curso.fondo} w-1/2 flex flex-col justify-center items-center h-full p-6 text-white`}>
                                <h3 className="text-xl font-bold text-center">{curso.titulo}</h3>
                                <p className="text-center">{curso.descripcion}</p>
                                <div className="w-full flex justify-end">
                                    <Bottom
                                        color={curso.color}
                                        color_hover={curso.color_hover}
                                        enlace={curso.enlace}
                                        texto="Inscríbete"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                    })}
            </div>
        </div>
    )
}
