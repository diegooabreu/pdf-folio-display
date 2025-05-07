
import React from 'react';
import Hero from '../components/Hero';
import PDFCard from '../components/PDFCard';
import Contact from '../components/Contact';
import { useLanguage } from '../contexts/LanguageContext';

// Import the uploaded PDF files
const yamaPdf = '/lovable-uploads/CATALOGO YAMA_VERSAO COMPLETA_LANCAMENTOS2024.pdf';
const bellesaPdf = '/lovable-uploads/CATALOGO BELLESA 2025_compressed.pdf';
const nuancePdf = '/lovable-uploads/CATALOGO NUANCE - NOV 2024.pdf';

const Index = () => {
  const { t } = useLanguage();
  
  const portfolioItems = [
    {
      title: "Yamá",
      description: "Leading manufacturer of mobile phones and telecommunications equipment",
      downloadUrl: yamaPdf,
      imageUrl: "/lovable-uploads/Logo - Yama Beauty.jpg",
      pdfFileName: "CATALOGO YAMA_VERSAO COMPLETA_LANCAMENTOS2024.pdf"
    },
    {
      title: "Bellesa",
      description: "Global leader in electronics, mobile devices, and home appliances",
      downloadUrl: bellesaPdf,
      imageUrl: "/lovable-uploads/logo bellesa.png",
      pdfFileName: "CATALOGO BELLESA 2025_compressed.pdf"
    },
    {
      title: "Nuance",
      description: "Premium electronics and appliances manufacturer",
      downloadUrl: nuancePdf,
      imageUrl: "/lovable-uploads/logo nuance.png",
      pdfFileName: "CATALOGO NUANCE - NOV 2024.pdf"
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">{t('portfolioTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PDFCard
              key={index}
              title={item.title}
              description={item.description}
              downloadUrl={item.downloadUrl}
              imageUrl={item.imageUrl}
              pdfFileName={item.pdfFileName}
            />
          ))}
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default Index;
