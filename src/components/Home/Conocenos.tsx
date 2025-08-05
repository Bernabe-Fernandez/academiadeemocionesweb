import conocenos from '@/assets/images/conocenos-home.jpg';
import Bottom from '../Generics/Bottom';

export default function Conocenos() {
  return (
    <section className="w-5/6 mx-auto py-5 px-6">
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
        </div>
    </section>
  )
}
