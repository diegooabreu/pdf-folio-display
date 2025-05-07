
import React from 'react';
import Hero from '../components/Hero';
import PDFCard from '../components/PDFCard';
import Contact from '../components/Contact';
import { useLanguage } from '../contexts/LanguageContext';

// Import PDFs if you've added them to the project
import motorolaPdf from '/lovable-uploads/motorola-catalog.pdf';
import samsungPdf from '/lovable-uploads/samsung-catalog.pdf';
import lgPdf from '/lovable-uploads/lg-catalog.pdf';

const Index = () => {
  const { t } = useLanguage();
  
  const portfolioItems = [
    {
      title: "Motorola",
      description: "Leading manufacturer of mobile phones and telecommunications equipment",
      downloadUrl: motorolaPdf,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      pdfFileName: "motorola-product-catalog.pdf"
    },
    {
      title: "Samsung",
      description: "Global leader in electronics, mobile devices, and home appliances",
      downloadUrl: samsungPdf,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      pdfFileName: "samsung-product-catalog.pdf"
    },
    {
      title: "LG",
      description: "Premium electronics and appliances manufacturer",
      downloadUrl: lgPdf,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      pdfFileName: "lg-product-catalog.pdf"
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
