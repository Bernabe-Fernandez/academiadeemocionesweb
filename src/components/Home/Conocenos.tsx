import conocenos from '@/assets/images/conocenos-home.jpg';
import Bottom from '../Generics/Bottom';

export default function Conocenos() {
  return (
    <section className="w-full lg:w-5/6 md:mx-auto py-5 lg:px-6">
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 order-1 md:order-2'>
                <h2 className='text-2xl lg:text-4xl md:px-4 uppercase text-center font-bold text-rojoPrimario-500'>Quienes somos</h2>
                <p className='text-base lg:text-xl px-4 text-azulPrimario-800 font-bold text-justify lg:mx-8'>
                    Llamamos Academia a nuestros programas porque no se limitan a la terapia convencional; funcionan como Clubes especializados donde se integra un sistema de aprendizaje que incluye:
                    <span className='block pt-4'>
                        <ul>
                            <li>
                                Terapia individual y familiar.
                            </li>
                            <li>
                                Terapias de grupo especializadas.
                            </li>
                            <li>
                                Aprendizaje y entrenamiento en habilidades.
                            </li>
                        </ul>
                    </span>
                </p>
                <div className=' w-full flex justify-end'>
                    <Bottom color='bg-azulPrimario-200' texto='Conoce más sobre nosostros' enlace='nosotros' color_hover='bg-azulPrimario-800'/>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center order-2 md:order-1'>
                <img src={conocenos} // reemplaza con tu imagen real
                    alt="Nosotros"
                    className="w-[650px] md:w-[350px] lg:w-[650px] h-auto md:rounded-xl shadow-md mx-auto"
                />
            </div>
        </div>
    </section>
  )
}
