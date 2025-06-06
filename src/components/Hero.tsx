
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '/lovable-uploads/4aa29f1e-713c-4474-a76f-3d258a789128.png';

const Hero = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'pt');
  };

  return (
    <div className="py-20 bg-primary text-primary-foreground relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/lovable-uploads/d0afad93-9b5e-432b-afc4-d4f06a90540f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <Select onValueChange={handleLanguageChange} defaultValue={language}>
              <SelectTrigger className="w-[140px] bg-white text-primary">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={Logo} 
            alt="Maica Logo" 
            className="h-16 w-16 object-contain"
            onError={(e) => {
              console.error("Failed to load logo");
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <h1 className="text-4xl md:text-6xl font-modern font-bold tracking-tight">{t('heroTitle')}</h1>
        </div>
        <p className="text-lg md:text-xl max-w-2xl opacity-90">
          {t('heroDescription')}
        </p>
      </div>
    </div>
  );
};

export default Hero;
