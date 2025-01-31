import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">{t('professionalExperience')}</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Localiza&Co */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{t('localizaRole')}</h3>
                <p className="text-lg text-blue-600 font-semibold">Localiza&Co</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{t('localizaDate')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{t('localizaLocation')}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{t('localizaDescription')}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Entity Framework</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Dapper</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">CQRS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Clean Architecture</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Microservices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Radinfo */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{t('radinfoRole')}</h3>
                <p className="text-lg text-blue-600 font-semibold">Radinfo</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{t('radinfoDate')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{t('radinfoLocation')}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{t('radinfoDescription')}</p>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                  <li>{t('radinfoAchievement1')}</li>
                  <li>{t('radinfoAchievement2')}</li>
                  <li>{t('radinfoAchievement3')}</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Microservices</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">RabbitMQ</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">xUnit</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">SQL Server</span>
                </div>
              </div>
            </div>
          </div>

          {/* LACA */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{t('lacaRole')}</h3>
                <p className="text-lg text-blue-600 font-semibold">LACA</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{t('lacaDate')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{t('remote')}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{t('lacaDescription')}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ASP.NET Core</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Swagger</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Redis</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">RabbitMQ</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Azure</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;