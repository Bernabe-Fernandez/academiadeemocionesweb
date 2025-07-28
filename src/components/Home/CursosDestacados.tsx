import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const cursos = [
    {
        titulo: "Psicología del Adolescente",
        descripcion: "Explora los cambios emocionales, cognitivos y sociales durante la adolescencia.",
        imagen: "public/cursos/psicologia-adolescente.jpg",
        enlace: "/cursos/psicologia-adolescente"
    },
    {
        titulo: "Trastornos de Conducta en Adolescentes",
        descripcion: "Identifica y aborda trastornos como ansiedad, depresión y conducta disruptiva en jóvenes.",
        imagen: "/cursos/trastornos-adolescentes.jpg",
        enlace: "/cursos/trastornos-adolescentes"
    },
    {
        titulo: "Orientación para Padres de Adolescentes",
        descripcion: "Guía práctica para padres sobre cómo apoyar emocionalmente a sus hijos adolescentes.",
        imagen: "/cursos/orientacion-padres.jpg",
        enlace: "/cursos/orientacion-padres"
    },
    {
        titulo: "Intervención Psicológica en Adolescentes",
        descripcion: "Aprende estrategias de intervención clínica y educativa para el trabajo con adolescentes.",
        imagen: "/cursos/intervencion-adolescentes.jpg",
        enlace: "/cursos/intervencion-adolescentes"
    },
        {
        titulo: "Intervención Psicológica en Adolescentes",
        descripcion: "Aprende estrategias de intervención clínica y educativa para el trabajo con adolescentes.",
        imagen: "/cursos/intervencion-adolescentes.jpg",
        enlace: "/cursos/intervencion-adolescentes"
    },
        {
        titulo: "Intervención Psicológica en Adolescentes",
        descripcion: "Aprende estrategias de intervención clínica y educativa para el trabajo con adolescentes.",
        imagen: "/cursos/intervencion-adolescentes.jpg",
        enlace: "/cursos/intervencion-adolescentes"
    },
        {
        titulo: "Intervención Psicológica en Adolescentes",
        descripcion: "Aprende estrategias de intervención clínica y educativa para el trabajo con adolescentes.",
        imagen: "/cursos/intervencion-adolescentes.jpg",
        enlace: "/cursos/intervencion-adolescentes"
    }
];

export default function CursosDestacados() {

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 30 },
            },
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 20000);
            return () => clearInterval(interval);
    }, [instanceRef]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
        <h2 className="text-3xl font-bold text-center mb-6 uppercase">Nuestros Cursos</h2>
        <div ref={sliderRef} className="keen-slider">
            {cursos.map((curso, index) => (
                <div key={index} className="keen-slider__slide bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src={curso.imagen} alt={curso.titulo} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{curso.titulo}</h3>
                        <p className="text-gray-600 my-2">{curso.descripcion}</p>
                        <Link
                            to={curso.enlace}
                            className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition uppercase"
                        >
                            Ver más
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
