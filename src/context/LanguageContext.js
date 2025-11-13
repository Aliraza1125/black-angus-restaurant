'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
