
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'pt');
  };

  return (
    <div className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <Select onValueChange={handleLanguageChange} defaultValue={language}>
              <SelectTrigger className="w-[140px] bg-primary-foreground text-primary">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
        <p className="text-lg md:text-xl max-w-2xl opacity-90">
          {t('heroDescription')}
        </p>
      </div>
    </div>
  );
};

export default Hero;
