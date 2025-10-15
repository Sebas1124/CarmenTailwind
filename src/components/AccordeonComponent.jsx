import { useState } from 'react';

export const AccordeonComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b mb-6">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
            <svg
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 384 512"
            >
                <path d="M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
            </svg>
        </button>
      </h2>
      <div className={`p-5 transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}