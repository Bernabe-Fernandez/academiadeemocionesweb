import { cursos } from "@/data/cursos";
import "keen-slider/keen-slider.min.css";
import Bottom from "../Generics/Bottom";

export default function CursosDestacados() {

    

    return (
        <div className="w-full mx-auto py-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6 text-azulPrimario-800 uppercase">Servicios Educativos</h2>
            {/* contenedor padre */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {cursos.map((curso, index) => {
                    const isFirstHalf = index < 2;
                    const isEven = index % 2 === 0;
                    const flexDirection = `
                        flex-col
                        md:${isEven ? "flex-row" : "flex-row-reverse"}
                        lg:${isFirstHalf ? "flex-row" : "flex-row-reverse"}
                    `;

                    return (
                        <div key={curso.id} className={`flex flex-col md:flex-row ${flexDirection} items-center rounded-xl`}>
                            <img src={curso.imagen} alt={`imagen ${curso.titulo}`} className="w-full md:w-1/2 h-full" />
                            <div className={`${curso.fondo} w-full md:w-1/2 flex flex-col justify-center items-center h-full p-6 text-white`}>
                                <h3 className="text-xl font-bold text-center mb-4 lg:min-h-24">{curso.titulo}</h3>
                                <p className="text-justify">{curso.descripcion}</p>
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
