import React, { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import LanguageToggle  from './LanguageToggle';

import { styles } from '../styles';
import { navLinks, portfolio } from '../constants';
import { logo, menu, close, menu2, close2 } from '../assets';
import { HiSun, HiMoon } from "react-icons/hi2";

import  LanguageContext  from './../LanguageContext';
import ThemeContext from './../ThemeContext';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [ menuToggle, setMenuToggle] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = () =>{
    return theme === 'dark' ? true : false;
  }
  
  

  

  return (
    <nav className= {`${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20
    ${ isDarkTheme()  ? 'bg-primary' : 'bg-slate-100'}`}
    >
    
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0)
          }}>

            <img src={logo} alt="logo" className='w-9
            h-9 object-contain'/>
            <p className={` text-[18px]
            font-bold cursor-pointer flex ${  isDarkTheme() ? 'text-white' : 'blue-text-gradient' }`}>Tammy Xu &nbsp;
            <span className='sm:block hidden'>| {portfolio[currentLanguage]}</span></p>

            <button role='button' aria-label='Theme toggle button'> 
              { isDarkTheme () ? <HiMoon className='w-7 h-7 text-yellow-200' onClick={toggleTheme} /> 
              : <HiSun className='w-7 h-7 text-orange-600' onClick={toggleTheme} />}
            </button>
        </Link>
        
        <ul className='list-none hidden lg:flex 
        flex-row gap-8 flex items-center'>
        
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title[currentLanguage]
                  ?  isDarkTheme() ? "text-white" : "text-blue-700 font-semibold"
                  : isDarkTheme() ? "text-secondary" : "text-blue-500"
              }  ${ isDarkTheme() ? "hover:text-white" : "hover:text-blue-400"} text-[18px]
              font-medium cursor-pointer`}
                onClick={() => setActive(link.title[currentLanguage])}
              >
              <a href={`#${link.id}`}>{link.title[currentLanguage]}</a>
            </li>
          ))}
          <LanguageToggle  setMenuToggle={setMenuToggle} currentToggle={menuToggle} />
        </ul>

        <div className='lg:hidden flex flex-1
        justify-end items-center'>
          <img
            src={menuToggle ? close2 : menu2}
            alt='menu'
            className='w-[28px] h-[28px]
            object-contain cursor-pointer'
            onClick={ () => setMenuToggle(!menuToggle)}
          />

          <div className={`${ !menuToggle ? 'hidden'
          : 'flex'} p-6 ${ isDarkTheme() ? 'black-gradient':'yellow-white-gradient'}  absolute
          top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl
          `}>
              <ul className='list-none flex
              justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title[currentLanguage]
                      ?  isDarkTheme() ? "text-white" : "text-blue-700 font-semibold"
                      : isDarkTheme() ? "text-secondary" : "text-blue-500"
                    } font-poppins font-medium
                    cursor-pointer text-[16px]`}
                      onClick={() => {
                        setMenuToggle(!menuToggle);
                        setActive(link.title[currentLanguage]);
                      }}
                  
              >
              <a href={`#${link.id}`}>{link.title[currentLanguage]}</a>
            </li>
          ))}
          <LanguageToggle  setMenuToggle={setMenuToggle} currentToggle={menuToggle} />
        </ul>
          </div>
        </div>  

      </div>
      
    </nav>
  )
}

export default Navbar