'use client'

import { useLanguage } from '@/i18n/LanguageContext'

export default function Store() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-m-dark flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="block text-m-red">STORE</span>
          <span className="block bg-gradient-m bg-clip-text text-transparent mt-2">Coming Soon</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We are working hard to bring you the best selection of BMW performance parts and accessories.
          Stay tuned for updates!
        </p>
        <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
      </div>
    </div>
  )
} 