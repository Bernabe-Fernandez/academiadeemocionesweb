import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to={"/"} className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-sm md:text-xl font-semibold whitespace-nowrap text-gray-800">Academía de Emociones</span>
            </Link>
            <div className="flex items-center lg:order-2">
                <Link
                  to="#"
                  className="text-white font-bold bg-azulPrimario-800 hover:bg-azulPrimario-200 hover:text-black focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  {/* Solo el icono en pantallas pequeñas */}
                  <span className="lg:hidden">
                    <Icon path={mdiSchool} size={1} />
                  </span>

                  {/* Texto + icono en pantallas grandes */}
                  <span className="hidden lg:flex items-center gap-1">
                    Cursos
                    <Icon path={mdiSchool} size={1} />
                  </span>
                </Link>
                {/* boton de menu hamburguesa */}
                <button 
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-white bg-azulPrimario-800 hover:bg-azulPrimario-200 hover:text-black rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-azulPrimario-200"
                  onClick={() => setShowMenu(!showMenu)}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className={`absolute top-full left-0 z-50 w-full bg-azulPrimario-500 lg:static lg:flex lg:w-auto lg:order-1 lg:bg-transparent transition-all duration-300 ease-in-out ${
    showMenu ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to={"/"} className="block py-2 pr-4 pl-3 text-gray-800 rounded border-b border-gray-100 lg:bg-transparent lg:text-primary-700 hover:bg-azulPrimario-800 hover:text-white">Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/nosotros"} className="block py-2 pr-4 pl-3 text-gray-800 rounded border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 hover:bg-azulPrimario-800 hover:text-white">Nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/servicios"} className="block py-2 pr-4 pl-3 text-gray-800 rounded border-b border-gray-100  lg:border-0 lg:hover:text-primary-700 hover:bg-azulPrimario-800 hover:text-white">Servicios</Link>
                    </li>
                    <li>
                        <Link to={"/contacto"} className="block py-2 pr-4 pl-3 text-gray-800 rounded border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 hover:bg-azulPrimario-800 hover:text-white">Contacto</Link>
                    </li>
                    <li>
                        <Link to={'/blog'} className="block py-2 pr-4 pl-3 text-gray-800 rounded border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 hover:bg-azulPrimario-800 hover:text-white">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
