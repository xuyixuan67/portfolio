import React, {useContext, useState, useEffect} from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  
}) => {
  const { currentLanguage } = useContext(LanguageContext);
  const [hasGitHub, setHasGitHub] = useState(false);
  const [hasDemo, setHasDemo] = useState(false);

  // Effect to check if source_code_link is not empty and update hasGitHub
  useEffect(() => {
    setHasGitHub(!!source_code_link);
  }, [source_code_link]);

  useEffect(() => {
    setHasDemo(!!demo_link);
  }, [demo_link]);
  

  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
    <motion.div 
       initial="hidden" 
       animate="show"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />

        
        </div>


          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description[currentLanguage]}</p>
          </div>
          

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Container for buttons */}
          <div className='flex justify-start mt-4 space-x-2'>
            {/* Demo Button */}
            <div className={`card-img_hover ${hasDemo ? "inline-block" : "hidden"}`}>
              <button
                onClick={() => hasDemo && window.open(demo_link, "_blank")}
                className='bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded'
              >
                Demo
              </button>
            </div>

            {/* GitHub Icon */}
            <div className={`card-img_hover ${hasGitHub ? "inline-block" : "hidden"}`}>
              <div
                onClick={() => hasGitHub && window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
       </motion.div>
      </Tilt>
  );
};

const Works = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };
  
  return (
    <>
    
      <motion.div  
      initial="hidden" animate="show" 
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{translations[currentLanguage].my_work}</p>
        <h2 className={`${styles.sectionHeadText}`}>{translations[currentLanguage].projects}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
        initial="hidden" animate="show"
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {translations[currentLanguage].my_work_description}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");