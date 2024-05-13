import React, {useContext} from 'react';
import { Tilt } from 'react-tilt';
import { isDragActive, motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';
import ThemeContext from '../ThemeContext';


const ServiceCard = ({index, title, icon, currentLanguage, isDarkTheme}) =>{

  return( 
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
       initial="hidden" 
       animate="show"
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className={`w-full pink-yellow-gradient p-[1px]
        rounded-[20px] ${isDarkTheme?"shadow-cardDark":"shadow-cardLightBlue"}`}
      > 
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className={`${ isDarkTheme? 'bg-tertiary' : 'bg-sky-300'}
        rounded-[20px] py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col`}
      >
        <img src={icon} alt={title[currentLanguage]} 
        className='w-16 h-16 object-contain'/>
        <h3 className={`text-[20px]
        font-bold text-center text-white`}>{title[currentLanguage]}</h3>

      </div>

      </motion.div>
      </Tilt>
  )
}
const About = () => {
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
    <>
      <motion.div 
       initial="hidden" 
       animate="show"
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} 
        ${isDarkTheme() ? "text-white" : "text-yellow-500"} text-center`}>

          {translations[currentLanguage].introduction}
          </p>
        <h2 className={`${styles.sectionHeadText}
      ${isDarkTheme()? "text-white":"text-sky-400"} text-center`}>
          {translations[currentLanguage].overview}
          </h2>
      </motion.div>

      <motion.p
       initial="hidden" 
       animate="show"
        variants={fadeIn("left", "", 0.1, 1)}
        className={`mt-4 text-[18px] max-w-3xl leading-[30px] 
        ${isDarkTheme()?" text-secondary":"text-sky-700"} mx-auto text-left`}>
          {translations[currentLanguage].about_main_text}
      </motion.p>

    
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map(( service, index) =>(
          <ServiceCard key={service.title[currentLanguage]}
          index={index} {...service} isDarkTheme={isDarkTheme()} currentLanguage={currentLanguage} />
        ))}
      </div>
      
    </>
  )
}


export default SectionWrapper(About, "about");