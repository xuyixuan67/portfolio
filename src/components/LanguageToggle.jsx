import React, { useState, useContext } from "react";

import LanguageContext from "./../LanguageContext";

function LanguageToggle( { setToggle , currentToggle } ) {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  
  return (
    <select 
    value={currentLanguage} 
    onChange={(e) => {
      changeLanguage(e.target.value);
      setToggle(false);
    }}
  
    className = {`${ !currentToggle ? 'bg-[#050816]' : 'bg-black-gradient'} 
    px-3 py-1 border border-gray-400  text-[20px]
    bg-black-gradient rounded-md shadow-sm focus:outline-none 
    focus:ring-blue-900 focus:border-zinc-800 
    text-sm font-medium text-[#aaa6c3]`}
    
  >
    <option value="en" className="py-1">English</option>
    <option value="es" className="py-1">Español</option>
    <option value="ch" className="py-1">中文</option>
    {/* Add more options for other languages */}
  </select>
  );
}

export default LanguageToggle;
