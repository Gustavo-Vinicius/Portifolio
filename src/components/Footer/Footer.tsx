import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Gustavo Vinicius. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;