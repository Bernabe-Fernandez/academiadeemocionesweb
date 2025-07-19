import useDocumentTitle from "../../Hooks/useDocumentTitle";

export default function TerminosYCondiciones() {
    useDocumentTitle('Terminos y Condiciones');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md my-8">
        <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>

        <p className="mb-4">
            Estos Términos y Condiciones regulan el uso del sitio web y los servicios proporcionados por <strong>Academia de Emociones</strong>. Al acceder, navegar y utilizar este sitio, usted acepta cumplir con estos términos. Si no está de acuerdo con alguno de ellos, por favor absténgase de utilizar este sitio.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Uso del sitio</h2>
        <p className="mb-4">
            El sitio está diseñado para proporcionar contenido educativo e informativo. Usted se compromete a usar este sitio solo para fines lícitos y de acuerdo con las leyes aplicables.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Formularios y envío de información</h2>
        <p className="mb-4">
            Este sitio puede incluir formularios en los que se solicite información personal, como nombre, correo electrónico, número de teléfono u otros datos sensibles. Al enviar dicha información, usted:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Declara que los datos proporcionados son verídicos y actualizados.</li>
            <li>Autoriza a <strong>Academia de Emociones</strong> a utilizar dicha información únicamente para los fines indicados (contacto, inscripción, atención, etc.).</li>
            <li>Entiende que sus datos serán tratados de acuerdo con nuestra <a href="/politica-de-privacidad" className="text-blue-600 underline">Política de Privacidad</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Protección de datos personales</h2>
        <p className="mb-4">
            Nos comprometemos a proteger la información que usted comparte a través de este sitio. Implementamos medidas de seguridad técnicas y administrativas para evitar accesos no autorizados o usos indebidos.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Propiedad intelectual</h2>
        <p className="mb-4">
            Todo el contenido (textos, imágenes, logotipos, marcas, videos, código) es propiedad de <strong>Academia de Emociones</strong> y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Limitación de responsabilidad</h2>
        <p className="mb-4">
            No garantizamos que el sitio esté libre de errores, virus o interrupciones. No somos responsables por daños derivados del uso del sitio o la imposibilidad de acceder a él.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Cambios a los términos</h2>
        <p className="mb-4">
            Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en esta misma página con su fecha de entrada en vigor.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contacto</h2>
        <p>
            Si tienes preguntas sobre estos términos, puedes contactarnos al correo: <a href="mailto:psicologouzielmorales@academiadeemociones.com" className="text-blue-600 underline">psicologouzielmorales@academiadeemociones.com</a>
        </p>
    </div>
  );
}
