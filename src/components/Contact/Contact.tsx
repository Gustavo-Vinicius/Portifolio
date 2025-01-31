import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">{t('getInTouch')}</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="mailto:gustavoviniciusdev20@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-6 h-6" />
              <span>gustavoviniciusdev20@gmail.com</span>
            </a>
            <a href="https://github.com/Gustavo-Vinicius" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;