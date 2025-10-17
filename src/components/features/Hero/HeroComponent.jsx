import { HeroButton } from "./"


export const HeroComponent = () => {
  return (
    <div
        className="flex flex-col p-5 bg-white gap-5 max-w-md relative"
    >
        <div className="absolute z-0 -top-10 -left-10 rounded-full w-96 h-96 bg-gradient-to-br from-indigo-500 to-transparent opacity-30 -translate-x-1/3 -translate-y-1/3"></div>

        <h1>Titulo</h1>

        <p>Cualquier cosa es valida</p>

        <HeroButton
            text={"Prueba gratis 14 días"}
            className={"bg-blue-500 text-white p-2 rounded-lg w-full mx-auto cursor-pointer hover:bg-blue-700 transition-all font-semibold shadow-lg"}
        />

        <HeroButton
            text={"Ver demo"}
            className={"w-full bg-white text-black p-2 rounded-lg mx-auto cursor-pointer hover:bg-gray-200 shadow-xl mt-2"}
        />

    </div>
  )
}