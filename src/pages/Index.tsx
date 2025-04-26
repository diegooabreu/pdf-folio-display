
import React from 'react';
import Hero from '../components/Hero';
import PDFCard from '../components/PDFCard';
import Contact from '../components/Contact';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const portfolioItems = [
    {
      title: "Motorola",
      description: "Leading manufacturer of mobile phones and telecommunications equipment",
      downloadUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Samsung",
      description: "Global leader in electronics, mobile devices, and home appliances",
      downloadUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "LG",
      description: "Premium electronics and appliances manufacturer",
      downloadUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
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
            />
          ))}
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default Index;
