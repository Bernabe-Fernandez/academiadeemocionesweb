import { services } from "@/data/services";
import CardServices from "../Generics/CardServices";

export default function Servicios() {

  return (
    <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-azulPrimario-800 uppercase">Nuestros servicios</h2>
                {/* <p className="mb-5 font-light text-gray-500 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                {
                    services.map((servicio) => {
                        return <CardServices key={servicio.id} servicio={servicio} />;
                    })
                }
            </div>
        </div>
    </section>
  )
}
