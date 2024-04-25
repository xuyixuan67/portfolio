import React, {useContext} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';


const ServiceCard = ({index, title, icon}) =>{
  const { currentLanguage } = useContext(LanguageContext);

  return( 
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full pink-yellow-gradient p-[1px]
        rounded-[20px] shadow-card'
      > 
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title[currentLanguage]} 
        className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px]
        font-bold text-center'>{title[currentLanguage]}</h3>

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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {translations[currentLanguage].introduction}
          </p>
        <h2 className={styles.sectionHeadText}>
          {translations[currentLanguage].overview}
          </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px]
        max-w-3xl leading-[30px]'>
          {translations[currentLanguage].about_main_text}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map(( service, index) =>(
          <ServiceCard key={service.title[currentLanguage]}
          index={index} {...service} />
        ))}
      </div>
    </>
  )
}


export default SectionWrapper(About, "about");