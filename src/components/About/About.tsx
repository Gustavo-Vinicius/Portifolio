import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('aboutMe')}</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('aboutDescription1')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('aboutDescription2')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('aboutDescription3')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('aboutDescription4')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;