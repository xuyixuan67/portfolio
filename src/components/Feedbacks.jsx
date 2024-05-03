import React, { useState, useContext } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';
import ThemeContext from './../ThemeContext';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedIn,
  readMoreText,
  currentLanguage,
  isDarkTheme
}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to truncate testimonial after a certain number of words
  const truncateTestimonial = (text, wordLimit) => {
    let words = text.split(' ');
    if(words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const toggleModal = () =>{
    setShowModal(!showModal);
    
    // Toggle the overflow style on the body based on the showModal state
    document.body.style.overflow = !showModal ? 'hidden' : 'auto';
  }


  return (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`${isDarkTheme? "bg-black-200": "bg-pink-100"} p-10 rounded-3xl xs:w-[320px] w-full`}
  >
    <p className={`${isDarkTheme? "text-white": "text-blue-600"} font-black text-[48px]`}>"</p>

    <div className='mt-1'>
      <p className={`${isDarkTheme? "text-white":"text-blue-500"} tracking-wider text-[18px]`}>
        
        {isExpanded ? testimonial : truncateTestimonial(testimonial, 40)}</p>

        {testimonial.split(' ').length > 40 
        && (<button onClick={toggleModal} className={`${isDarkTheme?"text-yellow-200":"text-red-500"}`}>
          {readMoreText[currentLanguage]}
          </button>)}
      
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className={`${isDarkTheme?"text-white":"blue-text-gradient"} font-medium text-[16px]`}>
            <span className='blue-text-gradient'>@</span> 
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">{name}</a>
          </p>
          <p className={`${isDarkTheme?"text-secondary":"text-blue-700"} mt-1  text-[12px]`}>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>

    {showModal && (
  <div className='fixed z-10 inset-0 overflow-y-auto'>
    <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
      <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
        <div className={`${isDarkTheme?"bg-slate-800":"bg-purple-200"} absolute inset-0 opacity-80`}></div>
      </div>

      <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>​</span>

      <div className={`${isDarkTheme?"bg-slate-800":"bg-purple-200"}
      inline-block align-bottom  rounded-lg text-left overflow-hidden 
      shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}>
        <div className={`${isDarkTheme?"bg-slate-800":"bg-purple-200"} px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
          <div className='sm:flex sm:items-start'>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3 className={`text-lg leading-6 font-medium 
              ${isDarkTheme?"text-white-100":"text-sky-700"}`}>
                {name}'s Testimonial
              </h3>
              <div className='mt-2'>
                <p className={`text-sm ${isDarkTheme?"text-white-500":"text-slate-600"}`}>
                  {testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isDarkTheme?"bg-slate-800":"bg-purple-200"} px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}>
          <button onClick={toggleModal} type='button' className={
            `w-full md:inline-flex justify-center rounded-md 
            border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm`
          }>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

  </motion.div>
  
  );
};

const Feedbacks = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = () => {
    return theme === 'dark' ? true : false;
  }

  return (
    <div className={`${isDarkTheme()? " bg-black-100":"bg-purple-300"} mt-12 rounded-[20px]`}>
      <div
        className={`${isDarkTheme()?"bg-tertiary":"violet-gradient"} rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
          {translations[currentLanguage].feedbackTextUp}</p>
          <h2 className={styles.sectionHeadText}>
          {translations[currentLanguage].feedbackTextDown}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} 
          currentLanguage={currentLanguage} isDarkTheme={isDarkTheme()} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");