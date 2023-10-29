import React from 'react';

const LanguageContext = React.createContext({
  currentLanguage: 'en',
  changeLanguage: () => {},
});

export default LanguageContext