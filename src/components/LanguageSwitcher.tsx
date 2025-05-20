'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'en'
            ? 'bg-m-red text-white'
            : 'bg-m-gray text-gray-300 hover:bg-m-light-gray'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'es'
            ? 'bg-m-red text-white'
            : 'bg-m-gray text-gray-300 hover:bg-m-light-gray'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'ru'
            ? 'bg-m-red text-white'
            : 'bg-m-gray text-gray-300 hover:bg-m-light-gray'
        }`}
      >
        RU
      </button>
    </div>
  );
} 