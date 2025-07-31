
export default function CardEspecialistas() {
  return (
    <div className="bg-white md:w-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ">
        <img
            src="/imagenes/doctor-avatar.jpg"
            alt="Doctor"
            className="w-full h-48 object-cover"
        />

        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">Dr. Juan Pérez</h3>
            <p className="text-sm text-azulobs-500 font-semibold mb-2">Cardiólogo</p>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Especialista en enfermedades del corazón con más de 10 años de experiencia
                en cardiología clínica e intervencionista.
            </p>

            <div className="flex justify-end">
                <button className="px-4 py-2 text-sm font-semibold bg-amarilloPrimario-500/50 hover:bg-amarilloPrimario-500 hover: rounded-lg transition-colors">
                    Agendar cita
                </button>
            </div>
        </div>
    </div>
  )
}
