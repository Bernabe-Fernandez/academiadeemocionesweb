
export default function FormularioContacto() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Contáctanos</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="name">
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="subject">
                        Asunto
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Motivo del mensaje"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    )
}
