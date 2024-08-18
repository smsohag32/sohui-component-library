import React from 'react';

const Table = ({ columns, data }) => {
   return (
      <div className="overflow-x-auto">
         <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
               <tr>
                  {columns.map((column) => (
                     <th
                        key={column}
                        className="py-3 px-6 text-left text-sm font-medium tracking-wider"
                     >
                        {column}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody className="text-gray-700">
               {data.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                     {columns.map((column, colIndex) => (
                        <td
                           key={colIndex}
                           className="py-3 px-6 text-left"
                        >
                           {row[column]}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
