
export default function FormularioContacto() {
    return (
        <div className="flex items-center justify-center">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-azulPrimario-800 text-center uppercase">Contáctanos</h2>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="name">
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="subject">
                        Asunto
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Motivo del mensaje"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base  border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-3 lg:px-6 py-2 text-sm lg:text-base bg-azulPrimario-500 text-black font-semibold rounded-lg hover:bg-azulPrimario-800 hover:text-white transition duration-300"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    )
}
