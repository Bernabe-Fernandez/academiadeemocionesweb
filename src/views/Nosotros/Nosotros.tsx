import CardNosotros from "@/components/Nosotros/CardNosotros";
import useDocumentTitle from "../../Hooks/useDocumentTitle"
import portada from '@/assets/images/nosotrosPortada.png';
import { infoNosotros } from "@/data/infoNosotros";
import { especialistas } from "@/data/especialistas";
import CardEspecialista from "@/components/Nosotros/CardEspecialista";



export default function Nosotros() {
    useDocumentTitle('Nosotros')
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-col lg:relative">

          {/* Texto */}
          <div className="w-full p-5 md:p-6 lg:p-16 lg:absolute lg:inset-0 flex flex-col justify-center items-center lg:items-start z-20 bg-white lg:bg-transparent">
            <div className="lg:w-2/5">
              <h1 className="text-center lg:text-left text-3xl md:text-5xl lg:text-6xl uppercase font-bold text-amarilloPrimario-500">
                Quienes acompañamos este espacio
              </h1>
              <p className="text-center lg:text-left md:text-2xl lg:text-3xl font-semibold text-azulPrimario-200">
                Somos un equipo comprometido con tu bienestar emocional y desarrollo personal, te acompañamos con cercanía, escucha y respeto en cada etapa de tu camino
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-full z-10">
            <img
              className="w-full lg:w-3/5 md:h-[400px] lg:h-[580px] xl:h-[650px] object-cover ml-auto"
              src={portada}
              alt="Cabecera del blog"
            />
          </div>

          {/* Fondo amarillo solo detrás de la parte inferior */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-amarilloPrimario-800 z-0" />

        </div>
      </div>

      {/* mision, vision, valores */}
      <div className="w-4/5 my-4 grid grid-cols-1  md:grid-cols-3 gap-4 mx-auto">
        {
          infoNosotros.map((info) => (
            <CardNosotros key={info.id} titulo={info.titulo} imagen={info.imagen} descripcion={info.descripcion} bgColor={info.bgColor}/>
          ))
        }
      </div>

      <div className="mx-auto w-full p-6 lg:p-0 flex flex-col justify-center items-center gap-4 lg:gap-2 space-y-4">
        <div className="w-full md:w-5/6 lg:w-4/5">
          <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase text-center text-azulPrimario-800 font-bold">Conocenos</h2>
          <p className="text-justify md:text-xl lg:text-2xl text-azulPrimario-800 mt-3">Nuestro equipo está formado por profesionales comprometidos con tu bienestar emocional y desarrollo personal. Con empatía, escucha activa y calidez, cada uno aporta su experiencia y dedicación para acompañarte en tu camino terapéutico y formativo, creando un espacio seguro y de confianza</p>
        </div>
        <div className="w-full p-2 md:w-5/6 lg:w-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            especialistas.map((especialista) => (
              <CardEspecialista key={especialista.id} especialista={especialista}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
