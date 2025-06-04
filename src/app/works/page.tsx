'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Script from 'next/script';

export default function WorksPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{t('instagram.title')}</h1>
        <div className="w-full">
          <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js" strategy="afterInteractive" />
          <iframe
            src="https://cdn.lightwidget.com/widgets/197abdabbdaf5949b303759ab64d7a7a.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full"
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
            title="Instagram Feed BMP Automotive"
            height={800}
          ></iframe>
        </div>
      </div>
    </div>
  )
} 