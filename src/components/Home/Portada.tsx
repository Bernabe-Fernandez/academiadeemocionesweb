
import fondoImg from '@/assets/images/portada.jpg';
import Bottom from '../Generics/Bottom';


export default function Portada() {
    return (
        <section className='w-full flex flex-col md:flex-row justify-center mb-6'>
            <div className='bg-azulPrimario-500 flex flex-col justify-center items-center text-center w-full md:w-1/3 lg:w-1/2'>
                <h1 className='text-3xl lg:text-6xl font-bold pt-4 mx-4 md:mx-6 md:px-6 lg:mx-8 lg:px-8 text-white'>Acompañamos tu <span className='text-rosaPrimario-500'>proceso</span> con <span className='text-verdePrimario-200'>empatía</span> y <span className='text-amarilloPrimario-500'>conocimiento</span></h1>
                <p className='text-white my-4 mx-6 lg:mx-10 lg:px-10 text-lg lg:text-2xl font-semibold'>Nuestra terapia y cursos están diseñados para brindarte contención emocional, herramientas practicas y crecimiento real.</p>
                <div className="w-full flex justify-end items-end">
                    <Bottom color='bg-azulPrimario-200' texto='Conóce nuestros servicios' enlace='servicios' color_hover='bg-azulPrimario-800'/>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-1/2'>
                <img
                    src={fondoImg}
                    alt="Portada"
                    className="w-full h-full scale-x-[-1]"
                />
            </div>
        </section>
    )
}
