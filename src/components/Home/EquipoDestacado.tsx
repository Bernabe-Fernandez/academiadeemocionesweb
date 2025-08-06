import equipo from '@/assets/images/equipoDestacado.jpg';
import Bottom from '../Generics/Bottom';

export default function EquipoDestacado() {
    return (
        <section className="max-w-7xl mx-auto px-2">
            <div className="p-4 mx-auto flex justify-center flex-col lg:flex-row">
                <div className='flex flex-col justify-center items-center bg-rojoPrimario-500 p-4 md:p-10 w-full lg:w-1/2'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl text-center text-white uppercase font-bold pb-4'>Conexión <span className='text-azulPrimario-500'>Humana </span> Real</h3>
                    <div className='text-xs md:text-sm'>
                        <p className='text-white text-justify'>
                            Ya sea que nos encontremos en el confort de nuestras instalaciones o a través de la intimidad de una pantalla, hay una promesa que se mantiene intacta: el poder de un vínculo humano real. En Academia de Emociones, la tecnología es el puente, no el destino. Porque la verdadera sanación no ocurre en un programa, sino en una relación de confianza.
                        </p>
                        <p className='text-white text-justify'>
                            <span className='font-bold'>Terapia Presencial: Tu Refugio en Guadalajara.</span> Entra a nuestro espacio y siente la calma. Aquí, entre muros que inspiran tranquilidad, te espera tu equipo. Es un refugio diseñado para que puedas ser tú, sin juicios y con el respaldo directo de especialistas enfocados por completo en tu bienestar.
                        </p>
                        <p className='text-white text-justify'>
                            <span className='font-bold'>Terapia Virtual: Cercanía Sin Barreras.</span> Una pantalla no tiene por qué ser un límite. La convertimos en una conexión. Del otro lado, no encontrarás a un espectador, sino a un terapeuta presente, atento y dedicado a ti. Sentirás la misma profundidad y compromiso, creando un espacio de confianza tan real como si estuviéramos en la misma habitación.
                        </p>
                        <p className='text-white text-justify'>
                            <span className='font-bold'>Nuestros Clubs: La Fuerza de Crecer en Conjunto.</span> Hay un poder único en saber que no estás solo. En nuestros Clubs, ese sentimiento se convierte en el motor del cambio. El acompañamiento se multiplica en la voz de una comunidad que te entiende porque comparte tu camino. Es el lugar para encontrar fuerza en la experiencia de otros y sanar juntos.
                        </p>
                        <p className='text-lg md:text-2xl text-white font-bold text-center uppercase mt-4'>
                            El medio cambia. Nuestro compromiso, jamás.
                        </p>
                        <div className='w-full flex justify-end mt-4 '>
                            <Bottom color='bg-azulPrimario-500' color_hover='bg-azulPrimario-800' key={1} texto='Conocenos' enlace='nosotros'/>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-rojoPrimario-500 flex justify-center items-center rounded-b-md'>
                    <img src={equipo} alt="Equipo Destacado" className='rounded-b-md w-[650px] md:mb-4 md:rounded-md lg:mr-6' />
                </div>
            </div>
        </section>
    )
}
