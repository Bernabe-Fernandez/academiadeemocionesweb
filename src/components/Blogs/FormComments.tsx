import { mostrarNotificacion } from "@/notification/Notify";
import apiBlog from "@/services/apiBlog";
import useAppStore from "@/store/useAppStore";
import { useState } from "react"

export default function FormComments({ postId }: { postId: number }) {

    const getCommentsPost = useAppStore((state) => state.getCommentsPost);

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentario, setComentario] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email: string) => {
        // Regex simple para validar email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 🔹 Validaciones antes de enviar
        if (!nombre.trim()) {
            mostrarNotificacion('Debe ingresar su nombre', 'error');
            return;
        }
        if (!validateEmail(correo)) {
            mostrarNotificacion('Ingresa un correo electrónico válido.', 'error');
            return;
        }
        if (comentario.trim().length < 5) {
            mostrarNotificacion('El comentario debe tener al menos 5 caracteres.', 'error');
            return;
        }

        try {
            setLoading(true);
            const { data } = await apiBlog.post(
                "/wp/v2/comments",
                {
                    post: postId,
                    author_name: nombre.trim(),
                    author_email: correo.trim(),
                    content: comentario.trim(),
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );

            if(data){
                mostrarNotificacion('Se genero con exito el comentario', 'success');
                setNombre("");
                setCorreo("");
                setComentario("");
            }

            getCommentsPost(postId);
        } catch (error : unknown) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto p-6 lg:px-16 lg:py-8 bg-white rounded-xl shadow-md space-y-4"
    >
        <h3 className="text-xl font-semibold text-gray-800">Deja un comentario</h3>

        <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
            type="email"
            placeholder="Tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
            placeholder="Escribe tu comentario..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <button
            type="submit"
            // disabled={loading}
            className="w-full bg-verdePrimario-800 hover:bg-verdePrimario-500 text-white py-3 rounded-lg font-medium transition-colors"
        >
            {loading ? "Enviando..." : "Enviar comentario"}
        </button>
    </form>
  )
}
