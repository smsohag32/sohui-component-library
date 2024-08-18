import React, { useState } from 'react';

const Dropdown = ({ options, label }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);

   const toggleDropdown = () => setIsOpen(!isOpen);
   const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
   };

   return (
      <div className="relative inline-block text-left">
         <div>
            <button
               onClick={toggleDropdown}
               className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
               {selectedOption || label}
               <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
         </div>
         {isOpen && (
            <div
               className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
               <div className="py-1">
                  {options.map((option) => (
                     <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                     >
                        {option}
                     </button>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default Dropdown;
