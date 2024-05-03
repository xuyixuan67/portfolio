import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

import React, { useContext } from 'react';
import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';
import ThemeContext  from '../ThemeContext';

const Hero = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = () =>{
    return theme === 'dark' ? true : false;
  }

  return (
    <section className='relative w-full
    h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[70px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center
        items-center mt-5'>
          <div className={`w-5 h-5 rounded-full ${ isDarkTheme() ? 
            'text-blue-500 bg-yellow-200' 
          : 'text-blue-500 bg-pink-300'}`} />
          <div className={`w-1 sm:h-80 h-40  ${ isDarkTheme() ? 
            'yellow-pink-gradient' : 
            'pink-yellow-gradient'}`}/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} 
            ${isDarkTheme()? "text-white" : "text-pink-300"}`}>
              {translations[currentLanguage].hello} 
              <span className={`${isDarkTheme()? "text-yellow-200" : "text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-blue-500"}`}> Tammy</span></h1>
              <p className={`${styles.heroSubText} mt-2
              ${isDarkTheme()?"text-[#dfd9ff]" : "text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500"}`}>
               {translations[currentLanguage].headerText1} <br className='sm:block hidden'/>
               {translations[currentLanguage].headerText2}
              </p>
          </div>
      </div>
      <ComputersCanvas/>


      <div className='absolute xs:bottom-0 bottom-32
      w-full flex justify-center items-center mb-3'>
        <a href='#about' aria-label='Jump to About section'>
          <div className={`w-[35px] h-[64px]
          rounded-3xl border-4 flex justify-center items-start p-2 cursor-pointer
          ${isDarkTheme()?'border-secondary': 'border-pink-300'}`}>
            <motion.dev 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className={`w-3 h-3 rounded-full
             mb-1 ${isDarkTheme()?'bg-secondary':'bg-pink-500'}`}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero


