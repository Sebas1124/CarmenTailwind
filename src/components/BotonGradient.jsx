
export const BotonGradient = ({ text = "Boton Con Gradiente", onClick }) => {
  return (
    <button onClick={onClick} className="mt-4 px-6 rounded-lg text-white font-bold bg-gradient-to-r from-purple-500 to-pink-400 cursor-pointer py-3 shadow-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-400">
      {text}
    </button>
  )
}
