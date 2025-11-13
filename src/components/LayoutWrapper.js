'use client';

import Header from './Header';
import Footer from './Footer';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

function LayoutContent({ children }) {
  const { language, handleLanguageChange, t } = useLanguage();

  return (
    <>
      <Header language={language} handleLanguageChange={handleLanguageChange} t={t} />
      {children}
      <Footer t={t} />
    </>
  );
}

export default function LayoutWrapper({ children }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
