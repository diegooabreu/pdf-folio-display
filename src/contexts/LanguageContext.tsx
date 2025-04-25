
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

type Translations = {
  [key in Language]: {
    heroTitle: string;
    heroDescription: string;
    portfolioTitle: string;
  }
};

const translations: Translations = {
  en: {
    heroTitle: "Professional Portfolio",
    heroDescription: "Welcome to my portfolio showcase. Below you'll find a collection of my work and achievements documented through carefully curated PDFs.",
    portfolioTitle: "Portfolio Documents",
  },
  pt: {
    heroTitle: "Portfólio Profissional",
    heroDescription: "Bem-vindo ao meu portfólio. Abaixo você encontrará uma coleção do meu trabalho e conquistas documentados através de PDFs cuidadosamente selecionados.",
    portfolioTitle: "Documentos do Portfólio",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
