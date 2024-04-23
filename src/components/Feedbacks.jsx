import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedIn
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
  }

  return (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}
      <p className='text-white tracking-wider text-[18px]'>
        
        {isExpanded ? testimonial : truncateTestimonial(testimonial, 40)}</p>

        {testimonial.split(' ').length > 40 
        && (<button onClick={toggleModal} className="text-yellow-200">
          Read More</button>)}
      
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> 
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">{name}</a>
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
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
        <div className='absolute inset-0 bg-slate-800 opacity-80'></div>
      </div>

      <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>​</span>

      <div className='inline-block align-bottom bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
        <div className='bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
          <div className='sm:flex sm:items-start'>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3 className='text-lg leading-6 font-medium text-white-100'>
                {name}'s Testimonial
              </h3>
              <div className='mt-2'>
                <p className='text-sm text-white-500'>
                  {testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
          <button onClick={toggleModal} type='button' className='w-full md:inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'>
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
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");