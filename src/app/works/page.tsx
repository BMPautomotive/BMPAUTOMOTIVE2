'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function WorksPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{t('instagram.title')}</h1>
        <div className="flex justify-center">
          <iframe
            src="https://lightwidget.com/widgets/197abdabbdaf5949b303759ab64d7a7a.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget border-none overflow-hidden rounded-lg w-full max-w-2xl"
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
            title="Instagram Feed BMP Automotive"
            height={400}
          ></iframe>
        </div>
      </div>
    </div>
  )
} 