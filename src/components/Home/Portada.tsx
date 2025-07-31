
import fondoImg from '@/assets/images/portada.jpg';
import Bottom from '../Generics/Bottom';


export default function Portada() {
    return (

        // <section className="w-full h-80 md:h-[430px] lg:h-[700px] xl:h-[750px] overflow-hidden bg-red-500">
        <section className='w-full flex justify-center'>
            <div className='bg-azulPrimario-500 flex flex-col justify-center items-center text-center w-1/2'>
                <h1 className='text-6xl font-bold mx-8 px-8 text-white'>Acompañamos tu <span className='text-rosaPrimario-500'>proceso</span> con <span className='text-verdePrimario-200'>empatía</span> y <span className='text-amarilloPrimario-500'>conocimiento</span></h1>
                <p className='text-white my-4 mx-10 px-10 text-2xl font-semibold'>Nuestra terapia y cursos están diseñados para brindarte contención emocional, herramientas practicas y crecimiento real.</p>
                <div className="w-full flex justify-end items-end">
                    <Bottom color='bg-azulPrimario-200' texto='Conóce nuestros servicios' enlace='servicios' color_hover='bg-azulPrimario-800'/>
                </div>
            </div>
            <div className='w-1/2'>
                <img
                    src={fondoImg}
                    alt="Portada"
                    className="w-full h-full scale-x-[-1]"
                />
            </div>
        </section>
    )
}
