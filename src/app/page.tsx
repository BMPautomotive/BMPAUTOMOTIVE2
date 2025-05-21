'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

const partners = [
  {
    id: 1,
    name: 'AC Schnitzer',
    description: 'Premium BMW tuning and performance parts',
    image: '/partners/ac-schnitzer.png',
    link: 'https://www.ac-schnitzer.de/en/'
  },
  {
    id: 2,
    name: 'Brembo',
    description: 'High-performance brake systems',
    image: '/partners/brembo.png',
    link: 'https://www.brembo.com/en'
  },
  {
    id: 3,
    name: 'KW Suspensions',
    description: 'Premium suspension solutions',
    image: '/partners/kw.png',
    link: 'https://www.kwsuspensions.net/'
  },
  {
    id: 4,
    name: 'Akrapovič',
    description: 'Titanium exhaust systems',
    image: '/partners/akrapovic.png',
    link: 'https://www.akrapovic.com/en'
  },
  {
    id: 5,
    name: 'BBS',
    description: 'Premium alloy wheels',
    image: '/partners/bbs.png',
    link: 'https://www.bbs-usa.com/'
  },
  {
    id: 6,
    name: 'Dinan',
    description: 'BMW performance engineering',
    image: '/partners/dinan.png',
    link: 'https://www.dinancars.com/'
  },
  {
    id: 7,
    name: 'H&R',
    description: 'Suspension and wheel spacers',
    image: '/partners/hr.png',
    link: 'https://www.hrsprings.com/'
  },
  {
    id: 8,
    name: 'Eibach',
    description: 'Performance springs and sway bars',
    image: '/partners/eibach.png',
    link: 'https://www.eibach.com/'
  },
  {
    id: 9,
    name: 'MHD',
    description: 'BMW ECU flashing and tuning software',
    image: '/partners/mhd.png',
    link: 'https://mhdtuning.com/'
  },
  {
    id: 10,
    name: 'Bootmod3',
    description: 'Advanced BMW ECU tuning platform',
    image: '/partners/bootmod3.png',
    link: 'https://www.protuningfreaks.com/'
  },
  {
    id: 11,
    name: 'Burger Tuning',
    description: 'JB4 tuning solutions and performance parts',
    image: '/partners/burger.png',
    link: 'https://burgertuning.com/'
  }
];

const services = [
  {
    id: 1,
    title: 'Chip Tuning',
    description: 'Professional software solutions to enhance power and torque output of your BMW',
    image: '/services/tuning.jpg',
    link: '/services/chip-tuning'
  },
  {
    id: 2,
    title: 'Maintenance',
    description: 'Professional maintenance services to keep your BMW in perfect condition',
    image: '/services/maintenance.jpg',
    link: '/services/maintenance'
  },
  {
    id: 3,
    title: 'Retrofits',
    description: 'Installation of original BMW parts and accessories to enhance your vehicle',
    image: '/services/retrofit.jpg',
    link: '/services/retrofits'
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'BMW M4 Carbon Fiber Front Splitter',
    description: 'High-quality carbon fiber front splitter for improved aerodynamics',
    price: '$1,299',
    image: '/store/categories/body.jpg',
  },
  {
    id: 2,
    name: 'BMW M Performance Alcantara Wheel',
    description: 'Premium Alcantara steering wheel with M Performance stitching',
    price: '$899',
    image: '/store/categories/steering.jpg',
  },
  {
    id: 3,
    name: 'BMW Harman Kardon Sound System',
    description: 'Premium 16-speaker surround sound system',
    price: '$3,499',
    image: '/store/categories/multimedia.jpg',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-m-dark">
      {/* Hero Section */}
      <div className="relative group min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/bmw-m-main.png"
            alt="BMW M Performance"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 ease-in-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-m-dark/95 via-m-dark/70 to-transparent group-hover:from-m-dark/98 group-hover:via-m-dark/85 transition-all duration-700 ease-in-out" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl transform group-hover:translate-x-4 transition-transform duration-700">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wider mb-6 group-hover:text-m-light-blue transition-colors duration-700">
              {t('hero.title')}
            </h1>
            <div className="h-2 w-40 bg-gradient-m mb-8 group-hover:w-48 transition-all duration-700"></div>
            <div className="text-xl md:text-2xl text-gray-200 mb-12 space-y-4">
              <p className="font-bold text-m-light-blue transform group-hover:translate-x-2 transition-transform duration-700">{t('hero.subtitle')}</p>
              <ul className="space-y-3">
                <li className="flex items-center transform group-hover:translate-x-2 transition-transform duration-700">
                  <span className="text-m-red mr-3 text-xl">•</span>
                  {t('hero.services.retrofits')}
                </li>
                <li className="flex items-center transform group-hover:translate-x-2 transition-transform duration-700">
                  <span className="text-m-red mr-3 text-xl">•</span>
                  {t('hero.services.tuning')}
                </li>
                <li className="flex items-center transform group-hover:translate-x-2 transition-transform duration-700">
                  <span className="text-m-red mr-3 text-xl">•</span>
                  {t('hero.services.coding')}
                </li>
                <li className="flex items-center transform group-hover:translate-x-2 transition-transform duration-700">
                  <span className="text-m-red mr-3 text-xl">•</span>
                  {t('hero.services.mechanical')}
                </li>
              </ul>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/services"
                className="bg-gradient-m text-white font-bold py-4 px-10 rounded-md hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-m-red/20"
              >
                {t('hero.buttons.services')}
              </Link>
              <Link
                href="/store"
                className="bg-m-gray text-white font-bold py-4 px-10 rounded-md border-2 border-m-light-blue hover:bg-m-light-gray transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-m-light-blue/20"
              >
                {t('hero.buttons.shop')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-m-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('services.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
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
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-m-light-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-m-light-blue font-semibold hover:text-white transition-colors duration-300"
                  >
                    {t('services.learnMore')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24 bg-gradient-to-b from-m-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('products.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-m-gray rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20 group"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-m-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-m-light-blue transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-m-red font-bold text-xl">{product.price}</span>
                    <Link
                      href={`/store/${product.id}`}
                      className="inline-flex items-center text-m-light-blue font-semibold hover:text-white transition-colors duration-300"
                    >
                      {t('products.learnMore')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/store"
              className="inline-flex items-center bg-gradient-m text-white font-bold py-4 px-10 rounded-md hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-m-red/20"
            >
              {t('products.viewAll')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 bg-gradient-to-b from-black to-m-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('location.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('location.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-m-red/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9012415991547!2d-80.1494!3d25.9872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad3b4e5d7a5f%3A0x9c7c5c7c5c7c5c7c!2s2023%20Grant%20St%2C%20Hollywood%2C%20FL%2033302!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BMP Automotive Location"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="bg-m-gray rounded-lg p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('location.address')}</h3>
                  <p className="text-gray-300">{t('location.city')}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('location.hours')}</h3>
                  <p className="text-gray-300">{t('location.hoursValue')}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('location.contact')}</h3>
                  <p className="text-gray-300">{t('location.phone')}</p>
                  <p className="text-gray-300">{t('location.email')}</p>
                </div>
                <div className="pt-4">
                  <a
                    href="https://maps.google.com/?q=2023+Grant+St,+Hollywood,+FL+33302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-m-light-blue font-semibold hover:text-white transition-colors duration-300"
                  >
                    {t('location.getDirections')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="py-24 bg-gradient-to-b from-m-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('instagram.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('instagram.subtitle')}</p>
          </div>
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="bg-m-gray rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-m-red/20 transition-all duration-500">
              {/* @ts-ignore */}
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
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/bmp_automotive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-m-light-blue font-semibold hover:text-white transition-colors duration-300"
            >
              {t('instagram.followUs')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-m-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('partners.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('partners.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-m-gray rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20">
                  <div className="relative h-48">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-m-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-m-light-blue transition-colors duration-300">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div className="inline-flex items-center text-m-light-blue font-semibold group-hover:text-white transition-colors duration-300">
                      {t('partners.visitWebsite')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
