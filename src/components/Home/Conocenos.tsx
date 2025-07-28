import conocenos from '@/assets/images/conocenos-home.webp';

export default function Conocenos() {
  return (
    <section className="w-full py-5 px-6 bg-gradient-to-r from-white/80 via-white/70 to-white/80 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-blue-500/30 rounded-xl p-6 shadow-lg ">
            {/* Texto */}
            <div className="md:w-1/2 w-full text-center md:text-left">
                <h2 className="text-3xl font-bold text-azulobs-500 mb-4 uppercase">Conócenos</h2>
                <p className="text-base text-gray-900 leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus tempora alias consectetur incidunt dolore ratione eveniet ad? Ullam aliquam inventore deserunt laboriosam vel earum maxime libero distinctio? Enim, cupiditate. Quidem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis facere modi sapiente consectetur nesciunt quos animi placeat, ipsa dolorem omnis sed laboriosam et nisi culpa tenetur repellendus nam atque mollitia!
                </p>
            </div>
            {/* Imagen */}
            <div className="md:w-1/2 w-full ">
                <img
                    src={conocenos} // reemplaza con tu imagen real
                    alt="Nosotros"
                    className="w-full h-auto rounded-xl shadow-md"
                />
            </div>

        </div>
    </section>
  )
}
