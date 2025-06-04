'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';

export default function RetrofitsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          {t('retrofits.title')}
        </h1>

        {/* OEM Retrofits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">
            {t('retrofits.oem.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OEM Retrofit Items */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.oem.items.headup.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.oem.items.headup.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.oem.items.headup.features.1')}</li>
                <li>{t('retrofits.oem.items.headup.features.2')}</li>
                <li>{t('retrofits.oem.items.headup.features.3')}</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.oem.items.ambient.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.oem.items.ambient.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.oem.items.ambient.features.1')}</li>
                <li>{t('retrofits.oem.items.ambient.features.2')}</li>
                <li>{t('retrofits.oem.items.ambient.features.3')}</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.oem.items.camera.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.oem.items.camera.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.oem.items.camera.features.1')}</li>
                <li>{t('retrofits.oem.items.camera.features.2')}</li>
                <li>{t('retrofits.oem.items.camera.features.3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Aftermarket Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">
            {t('retrofits.aftermarket.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aftermarket Items */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.aftermarket.items.audio.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.aftermarket.items.audio.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.aftermarket.items.audio.features.1')}</li>
                <li>{t('retrofits.aftermarket.items.audio.features.2')}</li>
                <li>{t('retrofits.aftermarket.items.audio.features.3')}</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.aftermarket.items.suspension.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.aftermarket.items.suspension.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.aftermarket.items.suspension.features.1')}</li>
                <li>{t('retrofits.aftermarket.items.suspension.features.2')}</li>
                <li>{t('retrofits.aftermarket.items.suspension.features.3')}</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('retrofits.aftermarket.items.performance.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('retrofits.aftermarket.items.performance.description')}
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>{t('retrofits.aftermarket.items.performance.features.1')}</li>
                <li>{t('retrofits.aftermarket.items.performance.features.2')}</li>
                <li>{t('retrofits.aftermarket.items.performance.features.3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            {t('retrofits.contact.title')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('retrofits.contact.description')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('retrofits.contact.button')}
          </a>
        </section>
      </div>
    </div>
  );
} 