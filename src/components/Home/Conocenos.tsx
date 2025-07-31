import conocenos from '@/assets/images/conocenos-home.jpg';
import Bottom from '../Generics/Bottom';

export default function Conocenos() {
  return (
    <section className="w-full py-5 px-6 bg-gradient-to-r from-white/80 via-white/70 to-white/80 ">
        <div className='flex gap-4'>
            <div className='w-1/2 flex justify-center items-center'>
                <img src={conocenos} // reemplaza con tu imagen real
                    alt="Nosotros"
                    className="w-[650px] h-auto rounded-xl shadow-md"
                />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center space-y-4'>
                <h2 className='text-4xl uppercase text-center font-bold text-rojoPrimario-500'>Quienes somos</h2>
                <p className='text-xl text-azulPrimario-800 font-bold text-justify mx-8'>
                    Somos un equipo de profesionales comprometidos
                    con el bienestar emocional y el desarrollo personal.
                    Creemos en el poder de la escucha, la educación
                    emocional y el acompañamiento consciente para
                    transformar vidas.
                    <span className='block pt-4'>
                        A través de nuestras sesiones de terapia y cursos,
                        brindamos herramientas accesibles, humanas y
                        prácticas que ayudan a niños, jóvenes y adultos a
                        conocerse, sanar y construir relaciones más
                        saludables.
                    </span>
                </p>
                <div className=' w-full flex justify-end'>
                    <Bottom color='bg-azulPrimario-200' texto='Conoce más sobre nosostros' enlace='servicios' color_hover='bg-azulPrimario-800'/>
                </div>
            </div>
        </div>
    </section>
  )
}
