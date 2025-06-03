'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation: NavItem[] = [
    { name: String(t('nav.home')), href: '/' },
    { name: String(t('nav.services')), href: '/services' },
    { name: String(t('nav.about')), href: '/about' },
    { name: String(t('nav.contact')), href: '/contact' },
  ];

  return (
    <nav className="bg-m-dark/95 backdrop-blur-sm fixed w-full z-50 border-b border-m-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">BMP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-m-red'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-m-red hover:bg-m-red/90 rounded-md transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              {String(t('nav.contact'))}
            </Link>
            <Link
              href="/store"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-m-blue hover:bg-m-light-blue rounded-md transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              STORE
            </Link>
            <Link
              href="/account"
              className="p-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-m-gray focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-m-dark border-t border-m-gray/20">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-m-red bg-m-gray/50'
                    : 'text-gray-300 hover:text-white hover:bg-m-gray/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-m-gray/20">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-8 w-8 text-gray-300" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Account</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  href="/cart"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-m-gray/50"
                  onClick={() => setIsOpen(false)}
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 