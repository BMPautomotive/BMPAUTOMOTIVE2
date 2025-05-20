'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

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
      <div className="relative group">
        <div className="absolute inset-0">
          <Image
            src="/bmw-m-main.png"
            alt="BMW M Performance"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover opacity-70 group-hover:opacity-50 transition-all duration-500 ease-in-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-m-dark/95 via-m-dark/70 to-transparent group-hover:from-m-dark/98 group-hover:via-m-dark/85 transition-all duration-500 ease-in-out" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl transform group-hover:translate-x-4 transition-transform duration-500">
            <h1 className="text-5xl font-extrabold text-white tracking-widest mb-6 group-hover:text-m-light-blue transition-colors duration-500">
              {t('hero.title')}
            </h1>
            <div className="h-2 w-40 bg-gradient-m mb-8 group-hover:w-48 transition-all duration-500"></div>
            <div className="text-xl text-gray-200 mb-8 space-y-4">
              <p className="font-bold text-m-light-blue">{t('hero.subtitle')}</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-m-red mr-2">•</span>
                  {t('hero.services.retrofits')}
                </li>
                <li className="flex items-center">
                  <span className="text-m-red mr-2">•</span>
                  {t('hero.services.tuning')}
                </li>
                <li className="flex items-center">
                  <span className="text-m-red mr-2">•</span>
                  {t('hero.services.coding')}
                </li>
                <li className="flex items-center">
                  <span className="text-m-red mr-2">•</span>
                  {t('hero.services.mechanical')}
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/services"
                className="bg-gradient-m text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition"
              >
                {t('hero.buttons.services')}
              </Link>
              <Link
                href="/store"
                className="bg-m-gray text-white font-bold py-3 px-8 rounded-md border border-m-light-blue hover:bg-m-light-gray transition"
              >
                {t('hero.buttons.shop')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-m-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">OUR SERVICES</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/services/chip-tuning" className="group">
              <div className="bg-white/5 p-8 rounded-lg transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-m-red/30 transition-colors">
                  <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Chip Tuning</h3>
                <p className="text-gray-300">
                  Professional software solutions to enhance power and torque output of your BMW
                </p>
              </div>
            </Link>
            <Link href="/services/maintenance" className="group">
              <div className="bg-white/5 p-8 rounded-lg transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-m-red/30 transition-colors">
                  <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Maintenance</h3>
                <p className="text-gray-300">
                  Professional maintenance services to keep your BMW in perfect condition
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24 bg-gradient-to-b from-m-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('products.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-m-dark to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-m-red font-bold">{product.price}</span>
                    <Link
                      href={`/store/${product.id}`}
                      className="bg-gradient-m text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                    >
                      {t('products.learnMore')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 bg-m-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('location.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9012415991547!2d-80.1494!3d25.9872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad3b4e5d7a5f%3A0x9c7c5c7c5c7c5c7c!2s2023%20Grant%20St%2C%20Hollywood%2C%20FL%2033302!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BMP Automotive Location"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl text-white font-semibold">{t('location.address')}</p>
            <p className="text-gray-300">{t('location.city')}</p>
          </div>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="py-24 bg-m-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('instagram.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
          </div>
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

      {/* Partners Section */}
      <div className="bg-gradient-to-b from-m-dark to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We work with the world's leading manufacturers to provide you with the highest quality parts and tuning solutions for your BMW.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="https://www.ac-schnitzer.de/en/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">AC Schnitzer</h3>
              </div>
              <p className="text-gray-300 text-sm">Premium BMW tuning and performance parts</p>
            </a>
            <a href="https://www.brembo.com/en" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Brembo</h3>
              </div>
              <p className="text-gray-300 text-sm">High-performance brake systems</p>
            </a>
            <a href="https://www.kwsuspensions.net/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">KW Suspensions</h3>
              </div>
              <p className="text-gray-300 text-sm">Premium suspension solutions</p>
            </a>
            <a href="https://www.akrapovic.com/en" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Akrapovič</h3>
              </div>
              <p className="text-gray-300 text-sm">Titanium exhaust systems</p>
            </a>
            <a href="https://www.bbs-usa.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">BBS</h3>
              </div>
              <p className="text-gray-300 text-sm">Premium alloy wheels</p>
            </a>
            <a href="https://www.dinancars.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Dinan</h3>
              </div>
              <p className="text-gray-300 text-sm">BMW performance engineering</p>
            </a>
            <a href="https://www.hrsprings.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">H&R</h3>
              </div>
              <p className="text-gray-300 text-sm">Suspension and wheel spacers</p>
            </a>
            <a href="https://www.eibach.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Eibach</h3>
              </div>
              <p className="text-gray-300 text-sm">Performance springs and sway bars</p>
            </a>
            <a href="https://mhdtuning.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">MHD</h3>
              </div>
              <p className="text-gray-300 text-sm">BMW ECU flashing and tuning software</p>
            </a>
            <a href="https://www.protuningfreaks.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Bootmod3</h3>
              </div>
              <p className="text-gray-300 text-sm">Advanced BMW ECU tuning platform</p>
            </a>
            <a href="https://burgertuning.com/" target="_blank" rel="noopener noreferrer" 
               className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-m-light-blue transition-colors">Burger Tuning</h3>
              </div>
              <p className="text-gray-300 text-sm">JB4 tuning solutions and performance parts</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
