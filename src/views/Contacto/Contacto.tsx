import FormularioContacto from "@/components/Generics/FormularioContacto";
import useDocumentTitle from "../../Hooks/useDocumentTitle"
import contactoFondo from '@/assets/images/contactoPortada.jpg';

export default function Contacto() {
    useDocumentTitle('Contacto');

  return (
    <>
      <div className="bg-rosaPrimario-800">
        {/* Sección superior: título y subtítulo */}
        <div className="text-center lg:py-14 px-4 bg-rosaPrimario-500 space-y-4 py-8">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
            ¿Te gustaría agendar una cita o tienes alguna duda?
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-4xl">
            Estamos aquí para escucharte. <span className="block">Escríbenos y te responderemos lo antes posible</span>
          </p>
        </div>

        {/* Imagen y formulario */}
        <div className="relative">
          <img src={contactoFondo} alt="contacto fondo" className="w-full h-[800px] object-cover" />

          {/* Formulario centrado sobre la imagen */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="p-6 mx-auto w-full">
              <FormularioContacto />
            </div>
          </div>
        </div>
        {/* Fondo rosa inferior */}
        <div className="bg-rosaPrimario-500 h-32"></div>
      </div>
      {/* mapa */}
      <div className="bg-white lg:w-4/5 my-6 mx-4 lg:mx-auto rounded shadow-lg p-6 flex flex-col md:flex-row gap-6">
          {/* Imagen del mapa */}
          <div className="flex-shrink-0 md:w-1/2">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full h-[400px] lg:h-[550px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.2849528177956!2d-103.35178026120478!3d20.687069804491546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e70c115245%3A0x450af7bcfd8f920f!2sCentro%2C%2044200%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1753990133763!5m2!1ses!2smx"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-azulPrimario-800">
            <h2 className="text-center text-3xl lg:text-5xl font-bold mb-4">Estamos para ti</h2>            
            <div className="p-8 lg:text-xl break-words">
              <p className="font-semibold">Dirección:</p>
              <p className="mb-3">
                Calle Álamo 245, Colonia Jardines del Sur,<br />
                Guadalajara, Jalisco, México
              </p>
              <p className="font-semibold">Teléfono:</p>
              <p className="mb-3">(33) 1234 5678</p>

              <p className="font-semibold">Correo:</p>
              <p className="mb-3 break-words">contacto@academiadeemociones.mx</p>

              <p className="font-semibold">Horario de atención:</p>
              <p>Lunes a viernes de 9:00 a.m. a 6:00 p.m.</p>
            </div>           
          </div>

        </div>
    </>
  )
}
