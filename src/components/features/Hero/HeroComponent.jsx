import { HeroButton } from "./"


export const HeroComponent = () => {
  return (
    <div
        className="pt-16 pb-24 bg-white gap-5 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute z-0 -top-10 -left-10 rounded-full w-96 h-96 bg-gradient-to-br from-indigo-500 to-transparent opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute z-0 bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent opacity-30 translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="font-extrabold text-4xl ">Organiza tu caos.</h1>
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5">Alcanza la productividad.</h1>

          <p className="text-lg text-gray-600 mb-5">Quantum es la única herramienta que necesitas para gestionar tareas, notas y proyectos en un solo lugar. Simple, rápido e inteligente.</p>

          <HeroButton
              text={"Prueba gratis 14 días"}
              className={"bg-indigo-600 text-white px-8 py-3 rounded-lg w-full mx-auto cursor-pointer hover:bg-indigo-400 transition-all font-semibold shadow-lg"}
          />

          <HeroButton
              text={"Ver demo"}
              className={"w-full border border-gray-300 bg-white text-black px-8 py-3 rounded-lg mx-auto cursor-pointer hover:bg-gray-200 shadow-xl mt-4"}
          />
        </div>
      </div>

    </div>
  )
}