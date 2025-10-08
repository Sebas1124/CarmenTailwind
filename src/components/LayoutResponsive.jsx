
export const LayoutResponsive = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-800 p-4 rounded-lg">
        <div className="bg-red-500 text-white p-4 m-2 rounded flex-1">Caja 1</div>
        <div className="bg-blue-500 text-white p-4 m-2 rounded flex-1">Caja 2</div>
        <div className="bg-green-500 text-white p-4 m-2 rounded flex-1">Caja 3</div>
    </div>
  )
}
