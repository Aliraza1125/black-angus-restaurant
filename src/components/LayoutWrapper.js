'use client';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

function LayoutContent({ children }) {
  const { language, handleLanguageChange, t } = useLanguage();

  return (
    <>
      <ScrollToTop />
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
