import React, {useContext} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import LanguageContext from "../LanguageContext";
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';
import ThemeContext from "../ThemeContext";

const ExperienceCard = ({ experience, currentLanguage, isDarkTheme }) => {
      
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkTheme? "#1d1836" : "#8cf9e5",
        color: isDarkTheme? "#fff" : "#f90589",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date[currentLanguage]}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name[currentLanguage]}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className={`${isDarkTheme?"text-white":"text-cyan-700"} text-[24px] font-bold`}>{experience.title[currentLanguage]}</h3>
        <p
          className={`${isDarkTheme?"text-secondary":"text-cyan-500"} text-[16px] font-semibold`}
          style={{ margin: 0 }}
        >
          {experience.company_name[currentLanguage]}
        </p>
        <p
          className={`${isDarkTheme?"text-amber-100":"text-amber-500"} text-[12px] italic`}
          style={{ margin: 0 }}
        >
          {experience.description[currentLanguage]}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points[currentLanguage].map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${isDarkTheme?"text-white-100":"text-cyan-900"} text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = () => {
    console.log('Experience.jsx: ' + theme);
    return theme === 'dark' ? true : false;
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        {<p className={`${styles.sectionSubText} 
        ${isDarkTheme() ? "text-white" : "text-orange-700"} text-center`}>
        {translations[currentLanguage].experienceTextUp}
          
        </p> }
        <h2 className={`${styles.sectionHeadText} 
        ${isDarkTheme()? "text-white":"text-pink-400"} text-center`}>
        {translations[currentLanguage].experienceTextDown}
          
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience} currentLanguage={currentLanguage}
              isDarkTheme={isDarkTheme()}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");