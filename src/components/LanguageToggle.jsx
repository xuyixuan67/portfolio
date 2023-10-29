import React, { useState, useContext } from "react";

import LanguageContext from "./../LanguageContext";

function LanguageToggle( { setToggle } ) {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  

  return (
    <select 
    value={currentLanguage} 
    onChange={(e) => {
      changeLanguage(e.target.value);
      setToggle(false);
    }}
    className="px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium text-gray-700"
    
  >
    <option value="en" className="py-1">English</option>
    <option value="es" className="py-1">Español</option>
    <option value="ch" className="py-1">中文</option>
    {/* Add more options for other languages */}
  </select>
  );
}

export default LanguageToggle;
