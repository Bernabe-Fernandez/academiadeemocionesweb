import { mostrarNotificacion } from "@/notification/Notify";
import { useEffect, useState } from "react";

export default function FormularioContacto() {

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Enviando...");

        // const res = await fetch("https://academiademociones.com/api/apiContacto.php", {
        //     method: "POST",
        //     body: new URLSearchParams(formData as Record<string, string>),
        // });

        // console.log(res);
        // const result = await res.json();
        // if (result.status === "success") {
        //     setStatus("Mensaje enviado correctamente");
        //     setFormData({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
        // } else {
        //     setStatus(`Error: ${result.message}`);
        // }

        try {
            const res = await fetch("https://academiademociones.com/api/apiContacto.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams(formData as Record<string, string>),
            });

            // Validar si la respuesta es JSON
            const text = await res.text();
            let result;
            try {
                result = JSON.parse(text);
            } catch {
                throw new Error("Respuesta inválida del servidor");
            }

            if (result.status === "success") {
                // console.log(result);
                setStatus(result.message); // Mostramos el mensaje que envía el backend
                mostrarNotificacion(result.message, result.status);
                // Limpiar formulario
                setFormData({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
            } else {
                // console.log(result.message)
                setStatus(`Error: ${result.message}`);
                mostrarNotificacion(result.message, result.status);
            }
        } catch (error: unknown) {
            console.error(error);
            // setStatus(`Error de conexión: ${error.message}`);
        }

    }

    useEffect(() => {
        if (status) {
        const timer = setTimeout(() => {
            setStatus("");
        }, 5000); // 5000 ms = 5 segundos

        return () => clearTimeout(timer); // limpiar si cambia antes
        }
    }, [status]);

    return (
        <div className="flex items-center justify-center flex-col">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6">
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-azulPrimario-800 text-center uppercase">Contáctanos</h2>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="name">
                        Nombre completo
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>
                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="telefono">
                        Telefono
                    </label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="text"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej: 33 3333 0000"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="subject">
                        Asunto
                    </label>
                    <input
                        id="asunto"
                        name="asunto"
                        type="text"
                        value={formData.asunto}
                        onChange={handleChange}
                        placeholder="Motivo del mensaje"
                        className="w-full px-2 lg:px-4 py-2 text-xs lg:text-base  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-azulPrimario-500"
                    />
                </div>

                <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-600 mb-1" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
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
            {status && <p className="text-center mt-4 bg-azulPrimario-800 w-full p-3 rounded-md text-white uppercase">{status}</p>}
        </div>
    )
}
