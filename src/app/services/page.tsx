'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'DME Tuning',
    description: 'Professional software solutions to enhance power and torque output of your BMW',
    image: '/images/TUNE.jpg',
    link: '/services/chip-tuning',
    features: [
      'Stage 1-3 Tuning',
      'ECU Remapping',
      'Speed Limiter',
      'Custom Maps'
    ]
  },
  {
    id: 2,
    title: 'Installation Tuning',
    description: 'Upgrade your BMW with high-performance parts and modifications',
    image: '/images/service.jpeg',
    link: '/services/performance',
    features: [
      'Exhaust Systems',
      'Suspension Kits',
      'Intake Systems',
      'Brake Upgrades'
    ]
  },
  {
    id: 3,
    title: 'Retrofit',
    description: 'Installation of original BMW parts and accessories to enhance your vehicle',
    image: '/images/Retrofits.jpg',
    link: '/services/retrofits',
    features: [
      'Feature Activation',
      'Module Programming',
      'OEM Installation',
      'System Updates'
    ]
  },
  {
    id: 4,
    title: 'Mechanical',
    description: 'Professional mechanical services and repairs for your BMW',
    image: '/images/mechanical.jpg',
    link: '/services/mechanical',
    features: [
      'Engine diagnostics and repair',
      'Transmission service',
      'Suspension work',
      'Brake system maintenance'
    ]
  },
  {
    id: 5,
    title: 'Electrical Repair',
    description: 'Expert electrical system diagnostics and repairs',
    image: '/images/elecrical repair.png',
    link: '/services/electrical',
    features: [
      'System Diagnostics',
      'Wiring Repair',
      'Sensor Service',
      'Equipment Install'
    ]
  }
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-m-dark">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-m-dark to-m-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional BMW tuning and service solutions for optimal performance
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gradient-to-b from-m-blue/10 to-m-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="bg-m-gray rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20 group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-m-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-m-light-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-m-red rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-end">
                    <span className="text-m-light-blue group-hover:text-white transition-colors duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-b from-m-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your BMW?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and get a professional consultation
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-m-blue text-base font-medium rounded-md text-white bg-m-blue hover:bg-m-light-blue transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 