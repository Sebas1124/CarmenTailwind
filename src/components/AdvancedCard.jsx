
export const AdvancedCard = () => {
  return (
    <div className="mb-5 max-w-md rounded-2xl shadow-xl overflow-hidden group">
        {/* Contenido de la tarjeta avanzada */}
        <div className="p-8">

            {/* Titulo y pequeño texto */}
            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gay-500 uppercase">React + Tailwind</span>
                <span className="bg-emerald-500 text-white text-md font-bold px-3 py-1 rounded-full">Nuevo</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">Card Avanzada con Hover</h2>

            <p className="mt-2 text-gray-600">
                Esta tarjeta utiliza "group" 
                para crear efecto de hover complejos en elementos hijos.
            </p>
            <button
                className="cursor-pointer mt-6 px-5 rounded-lg bg-indigo-600 text-white font-semibold
                           transition duration-300 ease-in-out
                           hover:bg-indigo-700 transform hover:-translate-y-1"
            >
                Ver más
            </button>
        </div>
    </div>
  )
}
