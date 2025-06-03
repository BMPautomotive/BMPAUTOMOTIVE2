'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';

const retrofitServices = [
  {
    id: 1,
    title: {
      en: "Multimedia Systems",
      es: "Sistemas Multimedia",
      ru: "Мультимедиа системы"
    },
    description: {
      en: "Professional installation of advanced multimedia systems including Apple CarPlay, Android Auto, and BMW ConnectedDrive features",
      es: "Instalación profesional de sistemas multimedia avanzados incluyendo Apple CarPlay, Android Auto y funciones BMW ConnectedDrive",
      ru: "Профессиональная установка современных мультимедиа систем, включая Apple CarPlay, Android Auto и функции BMW ConnectedDrive"
    },
    image: "/images/Retrofits.jpg"
  },
  {
    id: 2,
    title: {
      en: "Driver Assistance Systems",
      es: "Sistemas de Asistencia al Conductor",
      ru: "Системы помощи водителю"
    },
    description: {
      en: "Installation of advanced driver assistance systems including adaptive cruise control, lane departure warning, and 360° cameras",
      es: "Instalación de sistemas avanzados de asistencia al conductor incluyendo control de crucero adaptativo, advertencia de cambio de carril y cámaras 360°",
      ru: "Установка современных систем помощи водителю, включая адаптивный круиз-контроль, предупреждение о смене полосы и камеры 360°"
    },
    image: "/images/Retrofits.jpg"
  },
  {
    id: 3,
    title: {
      en: "Comfort Features",
      es: "Características de Confort",
      ru: "Комфорт"
    },
    description: {
      en: "Enhance your BMW with comfort features like electric trunk, soft-close doors, ambient lighting, and heated steering wheel",
      es: "Mejore su BMW con características de confort como maletero eléctrico, puertas de cierre suave, iluminación ambiental y volante calefactable",
      ru: "Улучшите комфорт вашего BMW с помощью электрического багажника, дверей с плавным закрытием, подсветки салона и подогрева руля"
    },
    image: "/images/Retrofits.jpg"
  },
  {
    id: 4,
    title: {
      en: "M Performance Parts",
      es: "Piezas M Performance",
      ru: "Комплекты M Performance"
    },
    description: {
      en: "Installation of genuine M Performance parts including carbon fiber trims, sport exhaust systems, and suspension upgrades",
      es: "Instalación de piezas genuinas M Performance incluyendo molduras de fibra de carbono, sistemas de escape deportivos y mejoras de suspensión",
      ru: "Установка оригинальных комплектов M Performance, включая карбоновые детали, спортивные выхлопные системы и улучшенную подвеску"
    },
    image: "/images/Retrofits.jpg"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {retrofitServices.map((service) => (
            <div key={service.id} className="bg-white/5 rounded-lg p-8 transform hover:scale-105 transition-all duration-500">
              <div className="relative h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title[language]}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title[language]}</h3>
              <p className="text-gray-300">{service.description[language]}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
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