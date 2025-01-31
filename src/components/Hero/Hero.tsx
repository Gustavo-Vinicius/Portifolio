import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  const getCVPath = () => {
    return language === 'en' 
      ? '/resume/gustavo-vinicius-cv-en.pdf'
      : '/resume/gustavo-vinicius-cv-pt.pdf';
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
            <div className="mb-8">
            <img 
              src="/img/profile.jpg?w=400&h=400&fit=crop&crop=faces&auto=format&q=80" 
              alt="Gustavo Vinicius"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('name')}</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">{t('role')}</p>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              {t('contactMe')}
            </a>
            <a href="#projects" className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              {t('viewProjects')}
            </a>
            <a 
              href={getCVPath()} 
              download
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 border-2 border-transparent"
            >
              <Download className="w-4 h-4" />
              {t('downloadCV')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;