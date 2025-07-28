
import fondoImg from '@/assets/images/fondo.jpg';


export default function Portada() {
    return (

        <section className="relative w-full h-80 md:h-[430px] lg:h-[700px] xl:h-[750px] overflow-hidden">
            {/* Imagen de fondo */}
            <img
                src={fondoImg}
                alt="Portada"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Curva SVG */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#1E40AF"
                    fillOpacity="0.75"
                    d="M0,224L60,192C120,160,240,96,360,74.7C480,53,600,75,720,101.3C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>

            {/* Recuadro de información */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md: bg-white/50 md:bg-white/60 p-6 rounded-lg shadow-xl max-w-md w-3/4 text-center"> */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:left-16 md:-translate-y-20 md:-translate-x-1 lg:-translate-y-4 bg-white/50 md:bg-white/60 p-6 rounded-lg shadow-xl w-3/4 md:w-2/4 lg:w-2/5 text-center">
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">Una vida con Bienestar Mental es posible.</h1>
                <p className="text-xs md:text-base lg:text-xl text-gray-700 mb-4">
                    En <span className='font-bold text-black'>Academia de Emociones</span>, te acompañamos en tu camino hacia una vida más plena y satisfactoria a través de la ciberpsicología y la Psicología Positiva
                </p>
                <button className="bg-blue-700 text-sm lg:text-base uppercase text-white px-2 py-2 rounded hover:bg-blue-900">
                    Conoce más
                </button>
            </div>
        </section>
    )
}
