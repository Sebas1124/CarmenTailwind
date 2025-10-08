
export const AnimationComponent = () => {
  return (
    <div className="mt-5">

        {/* Transición al pasar el ratón */}
        <button
            className="border-4 px-4 py-2 rounded transition hover:bg-sky-700 hover:scale-110 duration-300"
        >
            Pasa sobre mí
        </button>

        {/* Animación de carga */}
        <div className="mt-5 mx-4 w-8 h-8 border-4 border-dashed rounded-full animate-spin border-pink-400">   
        </div>

        {/* Animación de carga con diferentes colores */}
        <div className="relative h-16 w-16 mt-5">
            <div className="absolute rounded-full h-full w-full border-4 border-dashed border-t-pink-400 border-r-pink-500 border-l-transparent border-b-transparent animate-spin"></div>
            <div className="absolute rounded-full h-full w-full border-4 border-dashed border-t-transparent border-r-transparent border-l-purple-300 border-b-purple-400 animate-spin"></div>
        </div>

        {/* Skeletons */}
        <div className="bg-whiite p-10 rounded shadow-lg w-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="mt-5 h-30 bg-gray-300 rounded-full w-30 animate-pulse"></div>
            <div className="mt-5 h-4 bg-gray-300 rounded-full w-48 animate-pulse"></div>
            <div className="mt-5 h-4 bg-gray-300 rounded-full w-50 animate-pulse"></div>
            <div className="mt-5 h-4 bg-gray-300 rounded-full w-55 animate-pulse"></div>
        </div>

    </div>
  )
}
