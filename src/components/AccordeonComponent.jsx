import { useState } from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const AccordeonComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-6 rounded-lg overflow-hidden ${isOpen ? 'shadow-lg' : ''}`}>
      <h2>
        <button
          type="button"
          className="flex items-center bg-gray-100 justify-between w-full p-5 font-medium text-left text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
            {
              isOpen 
                ? <KeyboardArrowUpOutlinedIcon /> 
                : <KeyboardArrowDownOutlinedIcon />
            }
        </button>
      </h2>
      <div className={`p-5 transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'} bg-gray-100`}>
        {children}
      </div>
    </div>
  );
}