'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { t } = useLanguage()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.works'), href: '/works' },
    { name: t('nav.tuning'), href: '/tuning' },
    { name: t('nav.maintenance'), href: '/maintenance' },
    { name: t('nav.store'), href: '/store' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const handleMouseEnter = (name: string | string[]) => {
    if (typeof name === 'string') {
      setHoveredItem(name.toLowerCase())
    }
  }

  return (
    <>
      {/* Background Container */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div className="relative w-full h-full">
          {/* Default Background */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
              hoveredItem === 'maintenance' ? 'opacity-0 scale-110' : 'opacity-30 scale-100'
            }`}
            style={{
              backgroundImage: 'url(/bmw-m-main.png)',
              transformOrigin: 'center',
              willChange: 'opacity, transform'
            }}
          />
          
          {/* Maintenance Background */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
              hoveredItem === 'maintenance' ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: 'url(/Maintenance.png)',
              transformOrigin: 'center',
              willChange: 'opacity, transform'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 mix-blend-multiply" />
        </div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-base md:text-2xl font-light text-white tracking-widest">BMP</span>
                <div className="h-3 md:h-6 w-0.5 bg-white/30 mx-1 md:mx-2"></div>
                <span className="text-base md:text-2xl font-light text-white tracking-widest">AUTOMOTIVE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-6">
                {navigation.map((item, index) => (
                  <Link
                    key={`nav-${index}`}
                    href={item.href}
                    className="text-white/80 hover:text-white text-xs tracking-widest uppercase transition-all duration-300 relative group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button and Language Switcher container */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher - visible on mobile */}
              <div className="sm:hidden">
                <LanguageSwitcher />
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Language Switcher - visible on desktop */}
              <div className="hidden sm:flex sm:items-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm fixed inset-x-0 top-16 z-50">
            <div className="px-2 pt-2 pb-3 space-y-0.5 sm:px-3">
              {navigation.map((item, index) => (
                <Link
                  key={`mobile-nav-${index}`}
                  href={item.href}
                  className="text-white/80 hover:text-white block px-3 py-3 text-xs tracking-widest uppercase transition-all duration-300 border-b border-white/10 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
} 