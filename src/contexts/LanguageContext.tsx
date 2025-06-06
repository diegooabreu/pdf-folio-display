
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

type Translations = {
  [key in Language]: {
    heroTitle: string;
    heroDescription: string;
    portfolioTitle: string;
    contactTitle: string;
    contactDescription: string;
  }
};

const translations: Translations = {
  en: {
    heroTitle: "Maica",
    heroDescription: "Representação Comercial",
    portfolioTitle: "Portfolio Documents",
    contactTitle: "Contact Us",
    contactDescription: "Get in touch with us",
  },
  pt: {
    heroTitle: "Maica",
    heroDescription: "Representação Comercial",
    portfolioTitle: "Documentos do Portfólio",
    contactTitle: "Contate-nos",
    contactDescription: "Entre em contato conosco",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

