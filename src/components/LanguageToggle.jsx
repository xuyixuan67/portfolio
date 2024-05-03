import React, { useState, useContext } from "react";

import LanguageContext from "./../LanguageContext";
import ThemeContext from "./../ThemeContext";

function LanguageToggle( { setMenuToggle , menuToggle } ) {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = () =>{
    console.log('LanguageToggle.jsx with ' + theme + ' THEME--');
    return theme === 'dark' ? true : false;
  }
  
  return (
    <select aria-label="Toggle to different languages"
    value={currentLanguage} 
    onChange={(e) => {
      changeLanguage(e.target.value);
      setMenuToggle(false);
    }}
  
    className = {`${ !menuToggle ? 
     isDarkTheme() ? 
      'lg:bg-[#050816] border-gray-200' 
      
      //!menutToggle + !darktheme
      :'lg:bg-white border-blue-700'
     
     
     //is menuToggle + 
     : 'bg-black-gradient' } 

    px-3 py-1 border   text-[20px]
     rounded-md shadow-sm focus:outline-none 
    
    text-sm font-medium 
    ${ isDarkTheme() ? 
      'bg-[#404040] focus:ring-blue-900 focus:border-zinc-800 text-[#aaa6c3]':
      'bg-[#f1d5e3] focus:ring-yellow-300 focus:border-blue-700 text-blue-500'}
    `}
    
  >
    <option value="en" className="py-1">English</option>
    <option value="es" className="py-1">Español</option>
    <option value="ch" className="py-1">中文</option>
  
  </select>
  );
}

export default LanguageToggle;
