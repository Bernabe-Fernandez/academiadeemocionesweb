import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="bg-azulPrimario-500 text-black px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                
                {/* Logo y descripción */}
                <div className='text-center md:text-left'>
                    <h2 className="text-xl font-bold mb-2">Academia de Emociones</h2>
                    <p className="text-sm text-gray-800">
                        Ayudamos a las personas a descubrir y gestionar sus emociones a través del conocimiento y el acompañamiento.
                    </p>
                </div>

                {/* Navegación */}
                <div className='text-center md:text-left'>
                    <h3 className="font-semibold mb-2">Navegación</h3>
                    <ul className="space-y-1 text-sm text-gray-800">
                        <li><a href="/" className="hover:font-bold">Inicio</a></li>
                        <li><a href="/nosotros" className="hover:font-bold">Nosotros</a></li>
                        <li><a href="/blog" className="hover:font-bold">Blog</a></li>
                        <li><a href="/contacto" className="hover:font-bold">Contacto</a></li>
                        <li><a href="#" className="hover:font-bold">Cursos</a></li>
                    </ul>
                </div>

                {/* Recursos legales */}
                <div className='text-center md:text-left'>
                    <h3 className="font-semibold mb-2">Legales</h3>
                    <ul className="space-y-1 text-sm text-gray-800">
                        <li><a href="/terms" className="hover:font-bold">Términos y Condiciones</a></li>
                        <li><a href="/privacy" className="hover:font-bold">Política de Privacidad</a></li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className='text-center md:text-left'>
                    <h3 className="font-semibold mb-2">Síguenos</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                            <a href="#" className="hover:text-cyan-400"><FaTwitter /></a>
                            <a href="#" className="hover:text-yellow-300"><FaEnvelope /></a>
                        </div>
                </div>
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h3 className="font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-4 text-sm text-gray-800 ">
                        <li className="flex items-center justify-center md:justify-start hover:font-bold">
                            <FaMapMarkerAlt className="mr-2" />
                            Calle Ficticia 123, Colonia Centro, Ciudad, País
                        </li>
                        <li className="flex items-center justify-center md:justify-start hover:font-bold">
                            <FaPhoneAlt className="mr-2" />
                            +52 55 1234 5678
                        </li>
                        <li className="flex items-center justify-center md:justify-start hover:font-bold">
                            <FaEnvelope className="mr-2" />
                            contacto@academiaemociones.com
                        </li>
                    </ul>
                </div>


            </div>

            {/* Línea inferior */}
            <div className="text-center text-sm font-semibold text-gray-900 mt-8 border-t border-gray-700 pt-4">
                <span className='font-bold'>&copy;</span> {new Date().getFullYear()} <span className='font-bold'>Academia de Emociones.</span> Todos los derechos reservados.
            </div>
        </footer>
    )
}
