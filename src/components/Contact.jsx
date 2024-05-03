import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import * as dotenv from "dotenv";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import  LanguageContext  from './../LanguageContext';
import { ENGLISH_TRANSLATIONS } from './../translation/en';
import { SPANISH_TRANSLATIONS } from './../translation/es';
import { CHINESE_TRANSLATIONS } from './../translation/ch';

import ThemeContext from "../ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tammy Xu",
          from_email: form.email,
          to_email: "xuyixuan67@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const { currentLanguage } = useContext(LanguageContext);
  const translations = {
    en: ENGLISH_TRANSLATIONS,
    es: SPANISH_TRANSLATIONS,
    ch: CHINESE_TRANSLATIONS
  };
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDarkTheme = () =>{ return theme === "dark" ? true: false;}

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`${isDarkTheme() ? "bg-black-100":"bg-yellow-200"} flex-[0.75] p-8 rounded-2xl`}
      >
        <p className={`${styles.sectionSubText} ${isDarkTheme()?"text:white":"text-sky-500"}`}>{translations[currentLanguage].contactTextUp}</p>
        <h3 className={`${styles.sectionHeadText} ${isDarkTheme()?"text:white":"blue-text-gradient"}`}>{translations[currentLanguage].contactTextDown}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className={`${isDarkTheme()?"text-white":"text-sky-700"} font-medium mb-4`}>{translations[currentLanguage].yourName}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={translations[currentLanguage].yourNamePlaceholder}
              className={`${isDarkTheme()?"bg-tertiary placeholder:text-secondary text-white":
                "bg-sky-100 placeholder:text-sky-400 text-sky-600"}
              py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`${isDarkTheme()?"text-white":"text-sky-700"} font-medium mb-4`}>{translations[currentLanguage].yourEmail}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={translations[currentLanguage].yourEmailPlaceholder}
              className={`${isDarkTheme()?"bg-tertiary placeholder:text-secondary text-white":
              "bg-sky-100 placeholder:text-sky-400 text-sky-600"}
            py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`${isDarkTheme()?"text-white":"text-sky-700"} font-medium mb-4`}>{translations[currentLanguage].yourMsg}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={translations[currentLanguage].yourMsgPlaceholder}
              className={`${isDarkTheme()?"bg-tertiary placeholder:text-secondary text-white":
              "bg-sky-100 placeholder:text-sky-400 text-sky-600"}
            py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>

          <button
            type='submit'
            className={`${isDarkTheme()?"bg-tertiary text-white shadow-primary":"bg-sky-300 text-white shadow-sky-500 hover:bg-sky-400"} py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md`}
          >

             {loading ? translations[currentLanguage].sending : translations[currentLanguage].send}

          </button>
          
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");