'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';

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
  }
];

const services = [
  {
    id: 1,
    title: 'Chip Tuning',
    description: 'Professional BMW tuning that\'ll make your ride go from basic to beast mode',
    image: '/images/TUNE.jpg',
    link: '/tuning'
  },
  {
    id: 2,
    title: 'Maintenance',
    description: 'Professional maintenance services to keep your BMW in perfect condition',
    image: '/images/service.jpeg',
    link: '/services/maintenance'
  },
  {
    id: 3,
    title: 'Retrofits',
    description: 'Installation of original BMW parts and accessories to enhance your vehicle',
    image: '/images/Retrofits.jpg',
    link: '/services/retrofits'
  }
];

export default function Home() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-m-dark">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bmw-m-main.png"
            alt="Hero Background"
            fill
            className="object-cover transform scale-110 animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-m-dark/80 via-m-dark/50 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="block text-m-red">Professional</span>
              <span className="block bg-gradient-m bg-clip-text text-transparent">BMW Tuning & Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert tuning, retrofitting, and maintenance services for your BMW
            </p>
            <div className="flex justify-center gap-6 mt-12">
              <button
                onClick={() => {
                  scrollToServices();
                  setTimeout(() => {
                    window.location.href = '/services';
                  }, 500);
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-m-blue text-base font-medium rounded-md text-white bg-m-blue hover:bg-m-light-blue transition-all duration-300 transform hover:scale-105"
              >
                Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                disabled
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-m-red text-base font-medium rounded-md text-m-red cursor-not-allowed opacity-50"
              >
                STORE
                <span className="ml-2 text-xs">(Coming Soon)</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-m-dark to-transparent"></div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gradient-to-b from-m-dark to-m-blue/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Link href="/services" className="inline-block group">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-m-light-blue transition-colors duration-300">{t('services.title')}</h2>
              <div className="h-1 w-20 md:w-24 bg-gradient-m mx-auto mb-6 group-hover:w-32 transition-all duration-300"></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="bg-m-gray rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20 group cursor-pointer"
              >
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-m-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-m-light-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-end">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-m-light-blue transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="bg-gradient-to-b from-m-blue/10 to-m-dark py-24" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="partners-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We collaborate with leading manufacturers of tuning and spare parts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-m-gray rounded-lg p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-m-red/20"
                aria-label={`Visit ${partner.name} website`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-m-light-blue transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="py-24 bg-gradient-to-b from-black to-m-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Location</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300">Address</p>
                      <p className="text-white">2023 Grant St, Hollywood, FL 33020</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <p className="text-white">+1 (754) 295-9881</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white">info@bmpautomotive.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://maps.google.com/?q=2023+Grant+St,+Hollywood,+FL+33302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-m-light-blue font-semibold hover:text-white transition-colors duration-300"
                  >
                    Get Directions
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
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('instagram.title')}</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto mb-6"></div>
          </div>
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="bg-m-gray rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-m-red/20 transition-all duration-500 w-full">
              <div className="w-full max-w-4xl mx-auto">
                <iframe
                  src="https://www.instagram.com/p/C4YwqQJtQYw/embed"
                  scrolling="no"
                  className="w-full h-[450px]"
                  style={{ border: 'none', overflow: 'hidden' }}
                  allowTransparency={true}
                />
              </div>
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
    </div>
  );
}
