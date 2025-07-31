import equipo from '@/assets/images/equipoDestacado.jpg';
import Bottom from '../Generics/Bottom';

export default function EquipoDestacado() {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <div className="p-4 mx-auto my-6 flex justify-center">
                <div className='flex flex-col justify-center items-center bg-rojoPrimario-500 p-10 w-2/5'>
                    <h3 className='text-4xl text-center text-white uppercase font-bold pb-4'>Acompañamiento <span className='text-azulPrimario-500'>humano</span> en cada formato</h3>
                    <p className='text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium natus qui, minima voluptas neque doloremque cum velit molestiae atque a minus commodi distinctio earum adipisci nostrum fugiat? Perferendis, consectetur?</p>
                    <div className='w-full flex justify-end mt-4 '>
                        <Bottom color='bg-azulPrimario-500' color_hover='bg-azulPrimario-800' key={1} texto='Conocenos' enlace='nosotros'/>
                    </div>
                </div>
                <div className='w-3/5'>
                    <img src={equipo} alt="Equipo Destacado" />
                </div>
            </div>
        </section>
    )
}
