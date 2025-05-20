'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';

const retrofitExamples = [
  {
    id: 1,
    title: {
      en: "Adaptive Cruise Control",
      es: "Control de Crucero Adaptativo",
      ru: "Адаптивный круиз-контроль"
    },
    description: {
      en: "Professional installation of adaptive cruise control system for BMW F-series models. Includes radar sensor installation, steering wheel button replacement, and system coding.",
      es: "Instalación profesional del sistema de control de crucero adaptativo para modelos BMW de la serie F. Incluye instalación del sensor de radar, reemplazo de botones del volante y codificación del sistema.",
      ru: "Профессиональная установка системы адаптивного круиз-контроля для моделей BMW F-серии. Включает установку радарного датчика, замену кнопок на руле и кодирование системы."
    },
    image: "/bmw-m-main.jpg",
    models: ["F30", "F31", "F32", "F33", "F34", "F36"]
  },
  {
    id: 2,
    title: {
      en: "360° Camera System",
      es: "Sistema de Cámara 360°",
      ru: "Камера 360°"
    },
    description: {
      en: "Complete installation of surround view camera system. Includes front, rear, and side cameras with professional calibration and system integration.",
      es: "Instalación completa del sistema de cámara de visión periférica. Incluye cámaras frontales, traseras y laterales con calibración profesional e integración del sistema.",
      ru: "Полная установка системы кругового обзора. Включает переднюю, заднюю и боковые камеры с профессиональной калибровкой и интеграцией системы."
    },
    image: "/bmw-m-main.jpg",
    models: ["F30", "F31", "F32", "F33", "F34", "F36", "G20", "G21"]
  },
  {
    id: 3,
    title: {
      en: "Apple CarPlay & Android Auto",
      es: "Apple CarPlay y Android Auto",
      ru: "Apple CarPlay и Android Auto"
    },
    description: {
      en: "Wireless integration of Apple CarPlay and Android Auto. Compatible with all BMW models from 2016. Includes full system integration and wireless charging pad installation.",
      es: "Integración inalámbrica de Apple CarPlay y Android Auto. Compatible con todos los modelos BMW desde 2016. Incluye integración completa del sistema e instalación de cargador inalámbrico.",
      ru: "Беспроводная интеграция Apple CarPlay и Android Auto. Совместимо со всеми моделями BMW с 2016 года. Включает полную интеграцию системы и установку беспроводной зарядки."
    },
    image: "/bmw-m-main.jpg",
    models: ["All models 2016+"]
  },
  {
    id: 4,
    title: {
      en: "Comfort Access",
      es: "Comfort Access",
      ru: "Comfort Access"
    },
    description: {
      en: "Installation of keyless entry and start system. Includes door handle replacement, antenna installation, and system coding.",
      es: "Instalación del sistema de entrada y arranque sin llave. Incluye reemplazo de manijas de puerta, instalación de antenas y codificación del sistema.",
      ru: "Установка системы бесключевого доступа и запуска. Включает замену дверных ручек, установку антенн и кодирование системы."
    },
    image: "/bmw-m-main.jpg",
    models: ["F30", "F31", "F32", "F33", "F34", "F36"]
  },
  {
    id: 5,
    title: {
      en: "LED Headlights Upgrade",
      es: "Actualización a Faros LED",
      ru: "Обновление до LED фар"
    },
    description: {
      en: "Professional upgrade to LED headlights with adaptive functionality. Includes headlight replacement, system coding, and alignment.",
      es: "Actualización profesional a faros LED con funcionalidad adaptativa. Incluye reemplazo de faros, codificación del sistema y alineación.",
      ru: "Профессиональное обновление до LED фар с адаптивной функциональностью. Включает замену фар, кодирование системы и регулировку."
    },
    image: "/bmw-m-main.jpg",
    models: ["F30", "F31", "F32", "F33", "F34", "F36"]
  }
];

export default function RetrofitPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? 'BMW Retrofit Services' : 
             language === 'es' ? 'Servicios de Retrofit BMW' : 
             'Услуги по дооснащению BMW'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' ? 'Professional installation of factory options and modern features for your BMW' :
             language === 'es' ? 'Instalación profesional de opciones de fábrica y características modernas para su BMW' :
             'Профессиональная установка заводских опций и современных функций для вашего BMW'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {retrofitExamples.map((example) => (
            <div key={example.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="relative h-56">
                <Image
                  src={example.image}
                  alt={example.title[language as keyof typeof example.title]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {example.title[language as keyof typeof example.title]}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {example.description[language as keyof typeof example.description]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.models.map((model) => (
                    <span
                      key={model}
                      className="px-4 py-2 bg-m-red/20 text-m-red text-sm rounded-full border border-m-red/30"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            {language === 'en' ? 'Why Choose Our Retrofit Services?' :
             language === 'es' ? '¿Por qué elegir nuestros servicios de retrofit?' :
             'Почему выбирают наши услуги по дооснащению?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'OEM Quality' :
                 language === 'es' ? 'Calidad OEM' :
                 'Качество OEM'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en' ? 'We use only genuine BMW parts and follow factory installation procedures' :
                 language === 'es' ? 'Utilizamos solo piezas genuinas de BMW y seguimos los procedimientos de instalación de fábrica' :
                 'Мы используем только оригинальные запчасти BMW и следуем заводским процедурам установки'}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Expert Installation' :
                 language === 'es' ? 'Instalación Experta' :
                 'Профессиональная установка'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en' ? 'Our technicians are certified and have years of experience with BMW retrofits' :
                 language === 'es' ? 'Nuestros técnicos están certificados y tienen años de experiencia en retrofits de BMW' :
                 'Наши техники сертифицированы и имеют многолетний опыт работы с дооснащением BMW'}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Warranty Included' :
                 language === 'es' ? 'Garantía Incluida' :
                 'Гарантия включена'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en' ? 'All our retrofit installations come with a 1-year warranty' :
                 language === 'es' ? 'Todas nuestras instalaciones de retrofit incluyen una garantía de 1 año' :
                 'Все наши установки дооснащения поставляются с гарантией 1 год'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 