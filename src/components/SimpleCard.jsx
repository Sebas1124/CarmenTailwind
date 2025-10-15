
export const SimpleCard = ({ titulo, descripcion, img, onClick }) => {
  return (
    <div className="mt-5 mb-5 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img 
            src={img} 
            alt={titulo}
            className="w-full h-70 object-cover"
        />
        <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2 text-gray-800">{titulo}</h4>
            <p className="text-gray-700 text-base">
                {descripcion}
            </p>

            <button onClick={onClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
