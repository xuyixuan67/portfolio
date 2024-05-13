import React, {useContext, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import  LanguageContext  from './LanguageContext';
import ThemeContext, { ThemeProvider } from './ThemeContext';

const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
 
    return(
      <ThemeProvider>
        <LanguageContext.Provider  value={{ currentLanguage, changeLanguage: setCurrentLanguage }}>
          <BrowserRouter>
            <ThemeContext.Consumer>
              {({theme}) => (
                <div className={`relative z-0 ${ theme === 'dark' ? 'bg-primary' : 'bg-lightPrimary'}`}>
                  {/* <div className={`${theme === 'dark' ? 'bg-hero-pattern' : 'bg-light-hero-pattern'} bg-cover bg-no-repeat bg-center`}> */}
                  <div className={` bg-cover bg-no-repeat bg-center`}>
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
              )}
            </ThemeContext.Consumer>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeProvider>
    )
}

export default App
