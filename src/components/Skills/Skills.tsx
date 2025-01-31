import React from 'react';
import { Server, Database, Code2, Cloud } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">{t('technicalExpertise')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Server className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('backendDevelopment')}</h3>
            <p className="text-gray-600">{t('backendTechnologies')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('database')}</h3>
            <p className="text-gray-600">{t('databaseTechnologies')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('architecture')}</h3>
            <p className="text-gray-600">{t('architectureTechnologies')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Cloud className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('devops')}</h3>
            <p className="text-gray-600">{t('devopsTechnologies')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;