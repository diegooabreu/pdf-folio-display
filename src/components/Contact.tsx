
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('contactTitle')}</h2>
        <p className="text-lg text-center mb-12 text-muted-foreground">{t('contactDescription')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:diego@rcmaica.com" className="text-foreground hover:text-primary transition-colors">
                diego@rcmaica.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+5591982647772" className="text-foreground hover:text-primary transition-colors">
                +55 91 982647772
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
