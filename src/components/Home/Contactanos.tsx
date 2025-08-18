import FormularioContacto from "../Generics/FormularioContacto";

export default function Contactanos() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-start">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-[550px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8491299027437!2d-103.3939416241654!3d20.675716099809677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae6fb984d575%3A0xfe4807928af88832!2sAv.%20Miguel%20Hidalgo%20y%20Costilla%202963%2C%20Vallarta%20Poniente%2C%2044690%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1755534440235!5m2!1ses!2smx"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <FormularioContacto />
            </div>
        </section>
    );
}
