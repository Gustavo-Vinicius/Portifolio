import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('aboutMe')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t('aboutDescription1')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('aboutDescription2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;