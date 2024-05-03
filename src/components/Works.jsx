import React, {useContext, useState, useEffect} from "react";
import { FcPrevious, FcNext  } from "react-icons/fc";
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
import ThemeContext from "../ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  currentLanguage,
  isDarkTheme
  
}) => {
  const [hasGitHub, setHasGitHub] = useState(false);
  const [hasDemo, setHasDemo] = useState(false);
  const [showImgSlider, setShowImgSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  // Effect to check if source_code_link is not empty and update hasGitHub
  useEffect(() => {
    setHasGitHub(!!source_code_link);
  }, [source_code_link]);

  useEffect(() => {
    setHasDemo(!!demo_link);
  }, [demo_link]);
  
  // Effect to check if image is an array and update showImgSlider
useEffect(() => {
  if (Array.isArray(image)) {
    setShowImgSlider(true);
  } else {
    setShowImgSlider(false);
  }
}, [image]); // Only run this effect when the 'image' prop changes

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
  };
  
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };
  

  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={`${ isDarkTheme? "bg-tertiary" : "bg-sky-300"} p-5 rounded-2xl sm:w-[360px] w-full`}
    >
    <motion.div 
       initial="hidden" 
       animate="show"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      >


        <div className='relative w-full h-[230px]'>
          <img
            src={showImgSlider? image[currentIndex] : image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />
{/* ----try to add img slider btns--- */}
        {showImgSlider && (
          <>
           <div class={`absolute right-3 top-0 z-10 rounded-full px-2 text-center text-sm text-white
           ${isDarkTheme? " bg-gray-600":"bg-sky-900"}`}>
             <span>{currentIndex + 1}</span>/<span>{image.length}</span>
           </div>
            <button role="button" aria-label="Navigate to previous screenshot of this project"
              onClick={handlePrevSlide}
              className='absolute left-5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md'
            ><FcPrevious />
            </button>
            <button role="button" aria-label="Navigate to next screenshot of this project"
              onClick={handleNextSlide}
              className='absolute right-5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md'
            >
              <FcNext />
            </button>
          </>
        )}
{/* try to add img slider btns-- */}
        
        </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className={`${isDarkTheme?"text-secondary":"text-blue-900"} mt-2  text-[14px]`}>{description[currentLanguage]}</p>
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
                className={`${isDarkTheme?"bg-slate-700 hover:bg-slate-900":"bg-pink-300 hover:bg-yellow-200 hover:text-slate-700"} text-white font-bold py-2 px-4 rounded`}
              >
                Demo
              </button>
            </div>

            {/* GitHub Icon */}
            <div className={`card-img_hover ${hasGitHub ? "inline-block" : "hidden"}`}>
              <div
                onClick={() => hasGitHub && window.open(source_code_link, "_blank")}
                className={`${isDarkTheme?"black-gradient":"yellow-pink-gradient"} 
                w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
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
  const { theme, toggleTheme} = useContext(ThemeContext);
  const isDarkTheme = () => {
    console.log('Works.jsx: ' + theme);
    return theme === 'dark' ? true : false;
  }
  
  return (
    <>
    
      <motion.div  
      initial="hidden" animate="show" 
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} 
        ${isDarkTheme() ? "text-white" : "text-yellow-500"} text-center`}>{translations[currentLanguage].my_work}</p>
        <h2 className={`${styles.sectionHeadText}
        ${isDarkTheme()? "text-white":"text-sky-400"} text-center`}>{translations[currentLanguage].projects}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
        initial="hidden" animate="show"
          variants={fadeIn("", "", 0.1, 1)}
          className={`${isDarkTheme()?" text-secondary":"text-sky-700"} 
          mt-3 text-[17px] max-w-3xl leading-[30px] mx-auto`}
        >
          {translations[currentLanguage].my_work_description}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} 
          isDarkTheme={isDarkTheme()} currentLanguage={currentLanguage} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");