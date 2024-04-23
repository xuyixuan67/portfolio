import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

import React, { useContext } from 'react';
import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';

const Hero = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };

  return (
    <section className='relative w-full
    h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[70px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center
        items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3b82f6]'/>
          <div className='w-1 sm:h-80 h-40 indigo-gradient'/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText}
            text-white`}>{translations[currentLanguage].hello} <span className='text-[#3b82f6]'>
              Tammy</span></h1>
              <p className={`${styles.heroSubText} mt-2
              text-white-100`}>
               {translations[currentLanguage].headerText1} <br className='sm:block hidden'/>
               {translations[currentLanguage].headerText2}
              </p>
          </div>
      </div>
      {/* <ComputersCanvas/> */}


      <div className='absolute xs:bottom-0 bottom-32
      w-full flex justify-center items-center mb-3'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2 cursor-pointer'>
            <motion.dev 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full
            bg-secondary mb-1 '
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero


