
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const links = [
  {
    id: 1,
    name: 'Características',
    href: '#features',
  },
  {
    id: 2,
    name: 'FAQ',
    href: '#faqs',
  },
  {
    id: 3,
    name: 'Contacto',
    href: '#contact',
  }
]

export const NavbarComponent = ({ onClick }) => {

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <>
      <nav className="relative flex items-center justify-between w-full z-10 bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-700">Carmen</h1>

        <div className="gap-8 hidden md:flex">
          {
            links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-500"
              >
                {link.name}
              </a>
            ))
          }
        </div>

        <button
          onClick={onClick}
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg"
        >
          Empezar
        </button>

        <button 
          className='cursor-pointer md:hidden'
          onClick={toggleDropdown}
        >
          <MenuIcon/>
        </button>
      </nav>

      {/* Dropdown menu */}
      {
        dropdown && (
          <div className='container mx-auto px-4 py-5 md:hidden transition-all duration-300 ease-in-out w-full'>
            <div className='flex flex-col items-center bg-white shadow-md py-4 gap-4'>
              {
                links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                ))
              }

              <hr className='mx-auto w-full border-gray-300 my-2'/>

              <button
                onClick={onClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg"
              >
                Empezar
              </button>
            </div>
          </div>
        )
      }

    </>
  );
};
