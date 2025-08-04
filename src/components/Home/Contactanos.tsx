import FormularioContacto from "../Generics/FormularioContacto";

export default function Contactanos() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-[570px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.2849528177956!2d-103.35178026120478!3d20.687069804491546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e70c115245%3A0x450af7bcfd8f920f!2sCentro%2C%2044200%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1753990133763!5m2!1ses!2smx"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <FormularioContacto />
            </div>
        </section>
    );
}
