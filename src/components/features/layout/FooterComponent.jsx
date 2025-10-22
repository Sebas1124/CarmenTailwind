
export const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 text-center">
            <span className="text-2xl font-bold text-white">Carmen</span>
            <p className="mt-2 text-sm">Organiza tu caos.</p>
          </div>
          <div className="flex space-x-6">
            <a className="hover:text-white cursor-pointer">Tiktok</a>
            <a className="hover:text-white cursor-pointer">Whatsapp</a>
            <a className="hover:text-white cursor-pointer">Instagram</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Carmen. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  )
}
