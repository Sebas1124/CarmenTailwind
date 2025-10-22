
// ./components/features/layout/NavbarComponent.jsx
export const NavbarComponent = ({ onClick }) => {
  return (
    <nav className="relative flex items-center justify-between w-full z-10 mb-10 bg-white p-4 shadow-md">
      <h1 className="text-3xl font-bold text-blue-700">Quantum</h1>

      <div className="flex gap-8">
        <h3 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-500">Características</h3>
        <h3 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-500">FAQ</h3>
        <h3 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-500">Precios</h3>
      </div>

      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg"
      >
        Empezar
      </button>
    </nav>
  );
};
