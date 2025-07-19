import useDocumentTitle from "../../Hooks/useDocumentTitle"


export default function Privacidad() {
    useDocumentTitle('Politica de Privacidad');

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

            <p className="mb-4">
                En <span className="font-bold">Academia de Emociones</span>, tu privacidad es importante para nosotros. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Información que Recopilamos</h2>
            <p className="mb-4">
                Recopilamos información personal que tú nos proporcionas voluntariamente a través de formularios, como:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Teléfono (si lo proporcionas)</li>
                <li>Contenido de tus mensajes o preguntas</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Uso de la Información</h2>
            <p className="mb-4">
                Utilizamos tu información personal exclusivamente para:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Responder tus dudas o solicitudes</li>
                <li>Ofrecerte información sobre nuestros servicios</li>
                <li>Mejorar la experiencia del usuario en el sitio</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Compartir Información</h2>
            <p className="mb-4">
                No compartimos tu información personal con terceros, salvo que sea requerido por ley o que nos des tu consentimiento explícito.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Seguridad</h2>
            <p className="mb-4">
                Implementamos medidas razonables para proteger tu información. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies</h2>
            <p className="mb-4">
                Podemos utilizar cookies para mejorar tu experiencia de navegación. Puedes desactivarlas en la configuración de tu navegador si lo prefieres.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Cambios a esta Política</h2>
            <p className="mb-4">
                Podemos actualizar esta política ocasionalmente. Te recomendamos revisarla periódicamente.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contacto</h2>
            <p>
                Si tienes preguntas sobre esta política, contáctanos a través de nuestro formulario o por correo a <strong>privacidad@academiadeemociones.com</strong>.
            </p>
        </div>
    )
}
