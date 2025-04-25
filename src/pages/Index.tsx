
import React from 'react';
import Hero from '../components/Hero';
import PDFCard from '../components/PDFCard';

const Index = () => {
  // Example portfolio items - replace with your actual PDFs
  const portfolioItems = [
    {
      title: "Project Case Study 2024",
      description: "A detailed analysis of recent project successes and outcomes",
      downloadUrl: "#", // Replace with actual PDF URL
    },
    {
      title: "Design Portfolio",
      description: "Comprehensive collection of design work and creative projects",
      downloadUrl: "#", // Replace with actual PDF URL
    },
    {
      title: "Technical Documentation",
      description: "Technical specifications and implementation details",
      downloadUrl: "#", // Replace with actual PDF URL
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Portfolio Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PDFCard
              key={index}
              title={item.title}
              description={item.description}
              downloadUrl={item.downloadUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
