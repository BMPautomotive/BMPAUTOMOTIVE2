'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const retrofitServices = [
  {
    id: 1,
    title: 'CarPlay & Android Auto',
    description: 'Add wireless Apple CarPlay and Android Auto to your BMW',
    image: '/images/retrofit/car play.avif',
    features: [
      'Wireless connectivity',
      'Original BMW integration',
      'Full screen display',
      'Touch screen support'
    ]
  },
  {
    id: 2,
    title: 'Digital Instrument Cluster',
    description: 'Upgrade to the latest BMW digital instrument cluster',
    image: '/images/Retrofits.jpg',
    features: [
      'High-resolution display',
      'Customizable layouts',
      'Navigation integration',
      'Sport mode animations'
    ]
  },
  {
    id: 3,
    title: 'Ambient Lighting',
    description: 'Enhance your BMW interior with ambient lighting',
    image: '/images/Retrofits.jpg',
    features: [
      'Multiple color options',
      'Intensity control',
      'Door panel integration',
      'Footwell lighting'
    ]
  },
  {
    id: 4,
    title: 'Advanced Driver Assistance',
    description: 'Add modern safety features to your BMW',
    image: '/images/Retrofits.jpg',
    features: [
      'Lane departure warning',
      'Blind spot detection',
      'Parking assistance',
      'Traffic sign recognition'
    ]
  }
];

export default function RetrofitsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-m-dark">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Retrofits.jpg"
            alt="Retrofits Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-m-dark/80 via-m-dark/50 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="block text-m-red">BMW</span>
              <span className="block bg-gradient-m bg-clip-text text-transparent">Retrofits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enhance your BMW with the latest technology and features
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retrofitServices.map((service) => (
              <div
                key={service.id}
                className="bg-m-gray rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-m-red mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-b from-m-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your BMW?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us to discuss your retrofit needs and get a personalized quote for your BMW.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-m-blue text-base font-medium rounded-md text-white bg-m-blue hover:bg-m-light-blue transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link
          href="/services"
          className="inline-flex items-center text-m-light-blue hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
      </div>
    </div>
  );
} 