
export const ContactComponent = () => {
  return (
    <section id="contact" className="bg-indigo-700">
        <div className="container mx-auto px-4 py-15">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-white">¿Listo para tomar el control?</h2>
                <p className="mt-4 text-lg text-indigo-100">Únete a más de 10,000 usuarios que ya están organizando su vida con Quantum.</p>

                <button
                    className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white cursor-pointer hover:bg-indigo-50 shadow-lg transition duration-300 transform hover:scale-105"
                >
                    Empezar Gratis
                </button>
            </div>
        </div>
    </section>
  )
}
