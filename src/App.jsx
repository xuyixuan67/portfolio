import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas } 
from './components';
// import { LanguageToggle } from './components';
import  LanguageContext  from './LanguageContext';
 
 
 const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    return(
      <LanguageContext.Provider  value={{ currentLanguage, changeLanguage: setCurrentLanguage }}>
        <BrowserRouter>
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover
            bg-no-repeat bg-center'>
            
              <Navbar />
              <Hero />
             
            </div>
            <div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </div>
        </BrowserRouter>
        </LanguageContext.Provider>
    )
   
  }


export default App
